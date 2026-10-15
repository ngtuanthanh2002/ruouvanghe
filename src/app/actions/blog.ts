"use server";

import { randomUUID } from "node:crypto";
import { updateTag } from "next/cache";
import { getAdminUser } from "@/lib/admin-session";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { BLOG_BUCKET, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/supabase-config";
import { htmlToText, sanitizeBlogHtml } from "@/lib/sanitize-html";
import { slugify } from "@/lib/slug";

// Mọi Server Action đều gọi được từ bên ngoài bằng POST → luôn kiểm tra quyền admin ở đây,
// không dựa vào việc giao diện có ẩn nút hay không.
// Lỗi trả về dạng giá trị thay vì throw: bản production ẩn nội dung lỗi throw từ Server Action.
async function requireAdmin() {
  const user = await getAdminUser();
  if (!user) throw new Error("Bạn cần đăng nhập bằng tài khoản quản trị");
  return user;
}

function errorMessage(err: unknown) {
  return err instanceof Error ? err.message : String(err);
}

const IMAGE_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // khớp file_size_limit trong supabase/storage.sql

export type ImageUploadResult =
  | { ok: true; uploadUrl: string; publicUrl: string; apiKey: string }
  | { ok: false; error: string };

/**
 * Cấp một link tải lên có chữ ký (hiệu lực 2 giờ) để trình duyệt tải ảnh thẳng lên Supabase Storage,
 * không đi qua server — tránh giới hạn kích thước request của server.
 */
export async function createImageUpload(file: { type: string; size: number }): Promise<ImageUploadResult> {
  try {
    await requireAdmin();
    const ext = IMAGE_TYPES[file.type];
    if (!ext) return { ok: false, error: "Chỉ hỗ trợ ảnh JPG, PNG, WEBP hoặc GIF" };
    if (file.size > MAX_IMAGE_BYTES) return { ok: false, error: "Ảnh tối đa 5 MB" };

    const now = new Date();
    const path = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${randomUUID()}.${ext}`;
    const storage = getSupabaseAdmin().storage.from(BLOG_BUCKET);
    const { data, error } = await storage.createSignedUploadUrl(path);
    if (error) return { ok: false, error: `Không tạo được link tải ảnh: ${error.message}` };

    return {
      ok: true,
      uploadUrl: data.signedUrl,
      publicUrl: storage.getPublicUrl(path).data.publicUrl,
      apiKey: SUPABASE_PUBLISHABLE_KEY ?? "",
    };
  } catch (err) {
    return { ok: false, error: errorMessage(err) };
  }
}

// ===== Ảnh trong Storage của bài viết =====

const storagePrefix = () => `${SUPABASE_URL}/storage/v1/object/public/${BLOG_BUCKET}/`;

/** Đường dẫn (trong bucket) của mọi ảnh bài viết dùng: ảnh bìa + ảnh trong nội dung */
function storagePaths(coverUrl: string | null, content: string | null) {
  const prefix = storagePrefix();
  const urls = [coverUrl ?? "", ...Array.from((content ?? "").matchAll(/<img[^>]+src="([^"]+)"/g), (m) => m[1])];
  return new Set(urls.filter((u) => u.startsWith(prefix)).map((u) => decodeURIComponent(u.slice(prefix.length))));
}

/** Xoá ảnh không còn dùng. Lỗi xoá ảnh không làm hỏng thao tác chính (chỉ để lại file thừa). */
async function removeImages(paths: Iterable<string>) {
  const list = [...paths];
  if (list.length === 0) return;
  const { error } = await getSupabaseAdmin().storage.from(BLOG_BUCKET).remove(list);
  if (error) console.error("[blog] Xoá ảnh thất bại:", error.message);
}

// ===== Đăng / sửa bài =====

export type BlogPostInput = {
  title: string;
  excerpt: string;
  coverUrl: string;
  contentHtml: string;
  eventDate: string;
  eventTime: string;
  location: string;
  category: string;
  published: boolean;
};

export type SavePostResult = { ok: true; slug: string } | { ok: false; error: string };

/** Kiểm tra dữ liệu form và chuyển sang dòng của bảng blog_posts */
function toRow(input: BlogPostInput) {
  const title = input.title.trim();
  const contentHtml = sanitizeBlogHtml(input.contentHtml ?? "");
  const text = htmlToText(contentHtml);
  const coverUrl = input.coverUrl.trim();

  if (title.length < 3) return { error: "Tiêu đề quá ngắn" };
  if (title.length > 200) return { error: "Tiêu đề tối đa 200 ký tự" };
  if (!text && !contentHtml.includes("<img")) return { error: "Nội dung bài viết đang trống" };
  if (contentHtml.length > 500_000) return { error: "Nội dung quá dài" };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.eventDate)) return { error: "Ngày không hợp lệ" };
  // Ảnh bìa: ảnh trong bucket của mình, hoặc ảnh có sẵn trong /images của website
  if (!coverUrl.startsWith(storagePrefix()) && !/^\/images\/[\w./-]+$/.test(coverUrl)) {
    return { error: "Vui lòng tải ảnh bìa lên" };
  }

  const excerpt = (input.excerpt.trim() || text).slice(0, 300);
  return {
    row: {
      title,
      excerpt: excerpt.length === 300 ? excerpt.replace(/\s+\S*$/, "") + "…" : excerpt,
      cover_url: coverUrl,
      content: contentHtml,
      event_date: input.eventDate,
      event_time: input.eventTime.trim() || null,
      location: input.location.trim() || "Vanghè · 65 Trịnh Phong, Nha Trang",
      category: input.category.trim() || null,
      published: input.published,
    },
  };
}

export async function createBlogPost(input: BlogPostInput): Promise<SavePostResult> {
  try {
    await requireAdmin();
    const { row, error: invalid } = toRow(input);
    if (!row) return { ok: false, error: invalid };

    // Slug trùng (cùng tiêu đề) → thêm -2, -3…
    const base = slugify(row.title) || "bai-viet";
    const db = getSupabaseAdmin();
    for (let i = 1; i <= 20; i++) {
      const slug = i === 1 ? base : `${base}-${i}`;
      const { error } = await db.from("blog_posts").insert({ ...row, slug });
      if (!error) {
        updateTag("blog"); // trang Blog hiện bài mới ngay
        return { ok: true, slug };
      }
      if (error.code !== "23505") return { ok: false, error: `Lưu bài thất bại: ${error.message}` };
    }
    return { ok: false, error: "Không tạo được đường dẫn cho bài viết, hãy đổi tiêu đề" };
  } catch (err) {
    return { ok: false, error: errorMessage(err) };
  }
}

/** Sửa bài. Giữ nguyên slug để link đã chia sẻ vẫn mở được. */
export async function updateBlogPost(id: string, input: BlogPostInput): Promise<SavePostResult> {
  try {
    await requireAdmin();
    const { row, error: invalid } = toRow(input);
    if (!row) return { ok: false, error: invalid };

    const db = getSupabaseAdmin();
    const { data: old, error: readError } = await db
      .from("blog_posts")
      .select("slug, cover_url, content")
      .eq("id", id)
      .maybeSingle();
    if (readError) return { ok: false, error: `Không đọc được bài: ${readError.message}` };
    if (!old) return { ok: false, error: "Bài viết không còn tồn tại" };

    const { error } = await db.from("blog_posts").update(row).eq("id", id);
    if (error) return { ok: false, error: `Lưu bài thất bại: ${error.message}` };

    // Ảnh đã bị gỡ khỏi bài (đổi ảnh bìa, xoá ảnh trong nội dung) → xoá khỏi Storage
    const kept = storagePaths(row.cover_url, row.content);
    await removeImages([...storagePaths(old.cover_url, old.content)].filter((p) => !kept.has(p)));

    updateTag("blog");
    return { ok: true, slug: old.slug };
  } catch (err) {
    return { ok: false, error: errorMessage(err) };
  }
}

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function setBlogPostPublished(id: string, published: boolean): Promise<ActionResult> {
  try {
    await requireAdmin();
    const { error } = await getSupabaseAdmin().from("blog_posts").update({ published }).eq("id", id);
    if (error) return { ok: false, error: error.message };
    updateTag("blog");
    return { ok: true };
  } catch (err) {
    return { ok: false, error: errorMessage(err) };
  }
}

/** Xoá bài và các ảnh của bài trong Storage */
export async function deleteBlogPost(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();
    const db = getSupabaseAdmin();
    const { data: old, error } = await db
      .from("blog_posts")
      .delete()
      .eq("id", id)
      .select("cover_url, content")
      .maybeSingle();
    if (error) return { ok: false, error: `Xoá bài thất bại: ${error.message}` };
    if (old) await removeImages(storagePaths(old.cover_url, old.content));
    updateTag("blog");
    return { ok: true };
  } catch (err) {
    return { ok: false, error: errorMessage(err) };
  }
}
