import { cookies } from "next/headers";
import { connection } from "next/server";
import { SESSION_COOKIE, readSessionToken } from "./auth";

/** Tài khoản admin đang đăng nhập (đọc cookie phiên), hoặc null. Chỉ dùng trên server. */
export async function getAdminUser() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  // Kiểm tra hạn phiên dùng Date.now() → chỉ chạy lúc có request thật, không chạy khi
  // Next.js prerender/prefetch trước trang (Cache Components báo lỗi "Date.now() while prerendering").
  await connection();
  return readSessionToken(token);
}
