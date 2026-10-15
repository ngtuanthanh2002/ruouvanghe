import { createHmac, timingSafeEqual } from "node:crypto";

// Phiên đăng nhập lưu trong cookie httpOnly dạng "<payload>.<chữ ký HMAC>".
// Tài khoản & khoá ký lấy từ biến môi trường (.env.local) — không đưa xuống trình duyệt.

export const SESSION_COOKIE = "vh_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 ngày

export type SessionUser = { email: string };

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s) throw new Error("Thiếu SESSION_SECRET trong biến môi trường");
  return s;
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function checkCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) return false;
  const emailOk = safeEqual(email.trim().toLowerCase(), adminEmail.toLowerCase());
  const passwordOk = safeEqual(password, adminPassword);
  return emailOk && passwordOk;
}

export function createSessionToken(email: string) {
  const payload = Buffer.from(
    JSON.stringify({ email, exp: Date.now() + SESSION_MAX_AGE * 1000 })
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function readSessionToken(token: string | undefined): SessionUser | null {
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof data.email !== "string" || !(data.exp > Date.now())) return null;
    return { email: data.email };
  } catch {
    return null;
  }
}
