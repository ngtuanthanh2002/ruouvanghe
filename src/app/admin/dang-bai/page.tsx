import { Suspense } from "react";
import type { Metadata } from "next";
import styles from "../admin.module.css";
import AdminGate from "@/components/admin/AdminGate";
import BlogPostForm from "@/components/admin/BlogPostForm";

export const metadata: Metadata = {
  title: "Đăng bài Blog",
};

export default function NewBlogPostPage() {
  return (
    <>
      <h1 className={styles.title}>Đăng bài mới</h1>
      <Suspense fallback={<p className={styles.note}>Đang kiểm tra đăng nhập…</p>}>
        <AdminGate>
          <BlogPostForm />
        </AdminGate>
      </Suspense>
    </>
  );
}
