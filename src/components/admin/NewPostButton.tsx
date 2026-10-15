"use client";

import Link from "next/link";
import { useStoredUser } from "@/lib/auth-storage";

// Chỉ hiện khi đã đăng nhập (theo localStorage). Đây chỉ là lối tắt giao diện —
// trang đăng bài và Server Action vẫn tự kiểm tra quyền trên server.
export default function NewPostButton({ className }: { className?: string }) {
  const user = useStoredUser();
  if (!user) return null;
  return (
    <Link href="/admin/dang-bai" className={className}>
      ✎ Đăng bài mới
    </Link>
  );
}
