"use server";

import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  checkCredentials,
  createSessionToken,
  readSessionToken,
  type SessionUser,
} from "@/lib/auth";

export type LoginState = { user: SessionUser | null; error?: string };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!checkCredentials(email, password)) {
    // Chậm lại một chút để việc dò mật khẩu tốn thời gian hơn
    await new Promise((r) => setTimeout(r, 600));
    return { user: null, error: "Email hoặc mật khẩu không đúng" };
  }

  const user = { email: email.trim().toLowerCase() };
  (await cookies()).set(SESSION_COOKIE, createSessionToken(user.email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return { user };
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  return readSessionToken((await cookies()).get(SESSION_COOKIE)?.value);
}
