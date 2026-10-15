// Cấu hình Supabase dùng chung (chỉ đọc trên server).
// Chấp nhận cả "https://xxx.supabase.co" lẫn "https://xxx.supabase.co/rest/v1/" (dạng hiện ở trang Data API)
export const SUPABASE_URL = process.env.SUPABASE_URL?.trim()
  .replace(/\/+$/, "")
  .replace(/\/rest\/v1$/, "");

/** Khoá publishable: chỉ đọc bài đã xuất bản (RLS). An toàn để gửi xuống trình duyệt. */
export const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();

/** Bucket Storage chứa ảnh Blog (tạo bằng supabase/storage.sql) */
export const BLOG_BUCKET = "blog";
