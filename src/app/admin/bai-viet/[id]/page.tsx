import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../admin.module.css";
import AdminGate from "@/components/admin/AdminGate";
import BlogPostForm from "@/components/admin/BlogPostForm";
import { getAdminPost } from "@/lib/blog-admin";

export const metadata: Metadata = {
  title: "Sửa bài viết",
};

// Cache Components cần ít nhất 1 tham số mẫu lúc build; nếu không, các component dùng
// usePathname() trong layout (Header) sẽ làm build lỗi. "_" không phải id thật → báo không tìm thấy.
export async function generateStaticParams() {
  return [{ id: "_" }];
}

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <>
      <h1 className={styles.title}>Sửa bài viết</h1>
      {/* params của route động là dữ liệu theo request → đọc bên trong Suspense */}
      <Suspense fallback={<p className={styles.note}>Đang tải bài viết…</p>}>
        <AdminGate>
          <EditForm params={params} />
        </AdminGate>
      </Suspense>
    </>
  );
}

async function EditForm({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getAdminPost(id);
  if (!post) {
    return (
      <p className={styles.note}>
        Không tìm thấy bài viết (có thể đã bị xoá). <Link href="/admin/bai-viet">Về danh sách bài</Link>
      </p>
    );
  }
  // key: chuyển sang sửa bài khác thì form khởi tạo lại từ đầu
  return <BlogPostForm key={post.id} post={post} />;
}
