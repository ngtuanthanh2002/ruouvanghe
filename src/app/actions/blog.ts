"use server";

import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { updateTag } from "next/cache";
import { SESSION_COOKIE, readSessionToken } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { BLOG_BUCKET, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/supabase-config";
import { htmlToText, sanitizeBlogHtml } from "@/lib/sanitize-html";
import { slugify } from "@/lib/slug";

// Mọi Server Action đều gọi được từ bên ngoài bằng POST → luôn kiểm tra quyền admin ở đây,
// không dựa vào việc giao diện có ẩn nút hay không.
async function requireAdmin() {
  const user = readSessionToken((await cookies()).get(SESSION_COOKIE)?.value);
  if (!user) throw new Error("Bạn cần đăng nhập bằng tài khoản quản trị");
  return user;
}

const IMAGE_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // khớp file_size_limit trong supabase/storage.sql

// Trả lỗi dạng giá trị thay vì throw: bản production ẩn nội dung lỗi throw từ Server Action
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
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

export type NewBlogPost = {
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

export type CreatePostResult = { ok: true; slug: string } | { ok: false; error: string };

export async function createBlogPost(input: NewBlogPost): Promise<CreatePostResult> {
  try {
    await requireAdmin();

    const title = input.title.trim();
    const contentHtml = sanitizeBlogHtml(input.contentHtml ?? "");
    const text = htmlToText(contentHtml);
    const coverUrl = input.coverUrl.trim();

    if (title.length < 3) return { ok: false, error: "Tiêu đề quá ngắn" };
    if (title.length > 200) return { ok: false, error: "Tiêu đề tối đa 200 ký tự" };
    if (!text && !contentHtml.includes("<img")) return { ok: false, error: "Nội dung bài viết đang trống" };
    if (contentHtml.length > 500_000) return { ok: false, error: "Nội dung quá dài" };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input.eventDate)) return { ok: false, error: "Ngày không hợp lệ" };
    // Ảnh bìa: ảnh trong bucket của mình, hoặc ảnh có sẵn trong /images của website
    const storagePrefix = `${SUPABASE_URL}/storage/v1/object/public/${BLOG_BUCKET}/`;
    if (!coverUrl.startsWith(storagePrefix) && !/^\/images\/[\w./-]+$/.test(coverUrl)) {
      return { ok: false, error: "Vui lòng tải ảnh bìa lên" };
    }

    const excerpt = (input.excerpt.trim() || text).slice(0, 300);
    const row = {
      title,
      excerpt: excerpt.length === 300 ? excerpt.replace(/\s+\S*$/, "") + "…" : excerpt,
      cover_url: coverUrl,
      content: contentHtml,
      event_date: input.eventDate,
      event_time: input.eventTime.trim() || null,
      location: input.location.trim() || undefined, // trống → dùng mặc định của bảng
      category: input.category.trim() || null,
      published: input.published,
    };

    // Slug trùng (cùng tiêu đề) → thêm -2, -3…
    const base = slugify(title) || "bai-viet";
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
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
