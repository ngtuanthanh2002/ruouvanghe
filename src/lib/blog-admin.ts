import { getSupabaseAdmin } from "./supabase-admin";

// Đọc bài cho trang quản trị (kể cả bài đang ẩn) bằng khoá secret — không cache.
// Chỉ gọi từ trang admin SAU KHI đã kiểm tra getAdminUser().

export type AdminPostSummary = {
  id: string;
  slug: string;
  title: string;
  cover_url: string;
  event_date: string;
  published: boolean;
  updated_at: string;
};

export type AdminPost = AdminPostSummary & {
  excerpt: string;
  content: string | null;
  event_time: string | null;
  location: string | null;
  category: string | null;
};

export async function listAdminPosts(): Promise<AdminPostSummary[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("blog_posts")
    .select("id, slug, title, cover_url, event_date, published, updated_at")
    .order("event_date", { ascending: false });
  if (error) throw new Error(`Không đọc được danh sách bài: ${error.message}`);
  return data;
}

export async function getAdminPost(id: string): Promise<AdminPost | null> {
  // id không phải UUID → coi như không tìm thấy (tránh lỗi cú pháp từ Postgres)
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const { data, error } = await getSupabaseAdmin()
    .from("blog_posts")
    .select("id, slug, title, cover_url, event_date, published, updated_at, excerpt, content, event_time, location, category")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(`Không đọc được bài: ${error.message}`);
  return data;
}
