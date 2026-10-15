"use client";

import { useCallback, useState, useTransition } from "react";
import Link from "next/link";
import styles from "./PostTable.module.css";
import Dialog from "../ui/Dialog";
import { deleteBlogPost, setBlogPostPublished } from "@/app/actions/blog";
import type { AdminPostSummary } from "@/lib/blog-admin";
import { formatBlogDate } from "@/lib/blog-data";

export default function PostTable({ posts }: { posts: AdminPostSummary[] }) {
  if (posts.length === 0) {
    return (
      <p className={styles.empty}>
        Chưa có bài viết nào. <Link href="/admin/dang-bai">Đăng bài đầu tiên →</Link>
      </p>
    );
  }

  return (
    <div className={styles.list}>
      <div className={`${styles.row} ${styles.head}`}>
        <span>Bài viết</span>
        <span>Ngày</span>
        <span>Trạng thái</span>
        <span className={styles.right}>Thao tác</span>
      </div>
      {posts.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  );
}

function PostRow({ post }: { post: AdminPostSummary }) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");

  // Server Action gọi updateTag → Next.js tự render lại danh sách sau khi xong
  const run = (action: () => Promise<{ ok: boolean; error?: string }>) =>
    startTransition(async () => {
      setError("");
      const result = await action();
      if (!result.ok) setError(result.error ?? "Thao tác thất bại");
    });

  const [confirmDelete, setConfirmDelete] = useState(false);
  const closeConfirm = useCallback(() => setConfirmDelete(false), []);

  // Modal giữ mở (nút khoá) trong lúc xoá; xoá xong dòng này biến mất cùng modal
  const remove = () =>
    startTransition(async () => {
      setError("");
      const result = await deleteBlogPost(post.id);
      if (!result.ok) {
        setConfirmDelete(false);
        setError(result.error);
      }
    });

  return (
    <div className={`${styles.row} ${pending ? styles.pending : ""}`}>
      <div className={styles.post}>
        {/* eslint-disable-next-line @next/next/no-img-element -- thumbnail nhỏ trong trang quản trị */}
        <img src={post.cover_url} alt="" className={styles.thumb} loading="lazy" />
        <div className={styles.postText}>
          <Link href={`/admin/bai-viet/${post.id}`} className={styles.postTitle}>
            {post.title}
          </Link>
          <span className={styles.slug}>/blog/{post.slug}</span>
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </div>

      <span className={styles.date}>{formatBlogDate(post.event_date)}</span>

      <span>
        <button
          type="button"
          className={`${styles.status} ${post.published ? styles.on : styles.off}`}
          onClick={() => run(() => setBlogPostPublished(post.id, !post.published))}
          disabled={pending}
          title={post.published ? "Bấm để ẩn khỏi website" : "Bấm để hiển thị trên website"}
        >
          {post.published ? "● Đang hiện" : "○ Đang ẩn"}
        </button>
      </span>

      <div className={`${styles.actions} ${styles.right}`}>
        {post.published && (
          <Link href={`/blog/${post.slug}`} className={styles.btn} target="_blank">
            Xem
          </Link>
        )}
        <Link href={`/admin/bai-viet/${post.id}`} className={styles.btn}>
          Sửa
        </Link>
        <button
          type="button"
          className={`${styles.btn} ${styles.danger}`}
          onClick={() => setConfirmDelete(true)}
          disabled={pending}
        >
          Xoá
        </button>
      </div>

      <Dialog
        open={confirmDelete}
        title="Xoá bài viết?"
        message={
          <>
            Bài <strong>“{post.title}”</strong> và ảnh của bài sẽ bị xoá vĩnh viễn, không khôi phục được.
          </>
        }
        confirmLabel="Xoá bài"
        danger
        busy={pending}
        onConfirm={remove}
        onClose={closeConfirm}
      />
    </div>
  );
}
