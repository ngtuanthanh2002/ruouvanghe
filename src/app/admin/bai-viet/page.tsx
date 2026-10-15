import { Suspense } from "react";
import type { Metadata } from "next";
import styles from "../admin.module.css";
import AdminGate from "@/components/admin/AdminGate";
import PostTable from "@/components/admin/PostTable";
import { listAdminPosts } from "@/lib/blog-admin";

export const metadata: Metadata = {
  title: "Quản lý bài viết",
};

export default function ManagePostsPage() {
  return (
    <>
      <h1 className={styles.title}>Quản lý bài viết</h1>
      <Suspense fallback={<p className={styles.note}>Đang tải danh sách bài…</p>}>
        <AdminGate>
          <PostList />
        </AdminGate>
      </Suspense>
    </>
  );
}

// Chỉ chạy khi AdminGate đã xác nhận đăng nhập
async function PostList() {
  return <PostTable posts={await listAdminPosts()} />;
}
