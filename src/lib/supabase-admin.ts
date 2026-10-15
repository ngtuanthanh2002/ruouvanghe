import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "./supabase-config";

// Client Supabase dùng khoá SECRET — toàn quyền ghi, bỏ qua RLS.
// CHỈ import từ Server Actions sau khi đã kiểm tra quyền admin. Không bao giờ dùng ở client.

let client: SupabaseClient | null = null;

export function getSupabaseAdmin() {
  const secretKey = process.env.SUPABASE_SECRET_KEY?.trim();
  if (!SUPABASE_URL || !secretKey) {
    throw new Error("Thiếu SUPABASE_URL hoặc SUPABASE_SECRET_KEY trong biến môi trường");
  }
  client ??= createClient(SUPABASE_URL, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
