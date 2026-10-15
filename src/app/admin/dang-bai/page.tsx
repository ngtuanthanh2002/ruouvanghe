import { Suspense } from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import styles from "./page.module.css";
import { SESSION_COOKIE, readSessionToken } from "@/lib/auth";
import BlogPostForm from "@/components/admin/BlogPostForm";

export const metadata: Metadata = {
  title: "Đăng bài Blog",
  robots: { index: false, follow: false },
};

export default function NewBlogPostPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h1 className={styles.title}>Đăng bài mới</h1>
          <Link href="/blog" className={styles.back}>
            ← Về trang Blog
          </Link>
        </div>

        {/* Đọc cookie phiên là dữ liệu theo request → phải nằm trong Suspense (Cache Components) */}
        <Suspense fallback={<p className={styles.note}>Đang kiểm tra đăng nhập…</p>}>
          <AdminOnly />
        </Suspense>
      </div>
    </div>
  );
}

async function AdminOnly() {
  const user = readSessionToken((await cookies()).get(SESSION_COOKIE)?.value);
  if (!user) {
    return (
      <p className={styles.note}>
        Trang này chỉ dành cho quản trị viên. Bấm biểu tượng tài khoản ở góc phải header để đăng nhập.
      </p>
    );
  }
  return <BlogPostForm />;
}
