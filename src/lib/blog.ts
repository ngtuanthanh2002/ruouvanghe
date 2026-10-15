import { cacheLife, cacheTag } from "next/cache";
import { SAMPLE_BLOG_POSTS, type BlogPost } from "./blog-data";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./supabase-config";
import { sanitizeBlogHtml } from "./sanitize-html";

// Đọc bài Blog từ bảng `blog_posts` trên Supabase qua REST API (PostgREST).
// Chỉ chạy trên server; khoá publishable chỉ đọc được bài đã xuất bản (RLS, xem supabase/schema.sql).
// Kết quả được cache ~1 phút: sửa bài trên Supabase thì khoảng 1 phút sau website cập nhật.

const SUPABASE_KEY = SUPABASE_PUBLISHABLE_KEY;

type BlogRow = {
  slug: string;
  title: string;
  category: string | null;
  event_date: string;
  event_time: string | null;
  location: string | null;
  cover_url: string;
  excerpt: string;
  content: string | null;
};

const COLUMNS = "slug,title,category,event_date,event_time,location,cover_url,excerpt,content";

function toPost(row: BlogRow): BlogPost {
  const raw = row.content?.trim() ?? "";
  // Bài đăng từ trang quản trị lưu HTML; bài nhập tay trên Supabase là chữ thường
  const isHtml = raw.startsWith("<");
  return {
    slug: row.slug,
    title: row.title,
    category: row.category ?? "",
    date: row.event_date,
    time: row.event_time ?? "",
    location: row.location ?? "",
    cover: row.cover_url,
    excerpt: row.excerpt,
    contentHtml: isHtml ? sanitizeBlogHtml(raw) : undefined,
    // Chữ thường: mỗi đoạn văn cách nhau một dòng trống
    content: isHtml
      ? []
      : raw
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean),
  };
}

async function querySupabase(params: string): Promise<BlogRow[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?select=${COLUMNS}&${params}`, {
    headers: { apikey: SUPABASE_KEY! },
  });
  if (!res.ok) {
    throw new Error(`Supabase lỗi ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

function isConfigured() {
  if (SUPABASE_URL && SUPABASE_KEY) return true;
  console.warn("[blog] Chưa cấu hình SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY — đang dùng dữ liệu mẫu.");
  return false;
}

/** Tất cả bài đã xuất bản, sự kiện mới nhất lên đầu */
export async function getBlogPosts(): Promise<BlogPost[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blog");

  if (!isConfigured()) {
    return [...SAMPLE_BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  }
  const rows = await querySupabase("order=event_date.desc");
  return rows.map(toPost);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blog");

  if (!isConfigured()) {
    return SAMPLE_BLOG_POSTS.find((p) => p.slug === slug);
  }
  const rows = await querySupabase(`slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return rows[0] ? toPost(rows[0]) : undefined;
}
