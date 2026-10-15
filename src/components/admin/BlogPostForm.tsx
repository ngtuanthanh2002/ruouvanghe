"use client";

import React, { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./BlogPostForm.module.css";
import RichTextEditor from "./RichTextEditor";
import { createBlogPost, updateBlogPost } from "@/app/actions/blog";
import type { AdminPost } from "@/lib/blog-admin";
import { uploadBlogImage } from "@/lib/upload-image";

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Không truyền `post` → đăng bài mới; có `post` → sửa bài đó */
export default function BlogPostForm({ post }: { post?: AdminPost }) {
  const router = useRouter();
  const [title, setTitle] = useState(post?.title ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [coverUrl, setCoverUrl] = useState(post?.cover_url ?? "");
  const [contentHtml, setContentHtml] = useState(post?.content ?? "");
  const [eventDate, setEventDate] = useState(post?.event_date ?? today);
  const [eventTime, setEventTime] = useState(post?.event_time ?? "");
  const [location, setLocation] = useState(post?.location ?? "");
  const [category, setCategory] = useState(post?.category ?? "");
  const [published, setPublished] = useState(post?.published ?? true);

  const [coverUploading, setCoverUploading] = useState(false);
  const [error, setError] = useState("");
  const [saving, startSaving] = useTransition();
  const coverInput = useRef<HTMLInputElement>(null);

  const uploadCover = async (file: File | undefined) => {
    if (!file) return;
    setCoverUploading(true);
    setError("");
    try {
      setCoverUrl(await uploadBlogImage(file));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Tải ảnh bìa thất bại");
    } finally {
      setCoverUploading(false);
      if (coverInput.current) coverInput.current.value = "";
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!coverUrl) return setError("Vui lòng tải ảnh bìa lên");
    if (!contentHtml) return setError("Nội dung bài viết đang trống");

    startSaving(async () => {
      const input = { title, excerpt, coverUrl, contentHtml, eventDate, eventTime, location, category, published };
      const result = post ? await updateBlogPost(post.id, input) : await createBlogPost(input);
      if (!result.ok) {
        setError(result.error);
      } else {
        // Bài hiện → xem bài; bài ẩn → về danh sách quản lý
        router.push(published ? `/blog/${result.slug}` : "/admin/bai-viet");
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      {/* Cột chính: tiêu đề + nội dung */}
      <div className={styles.main}>
        <input
          className={styles.titleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tiêu đề bài viết *"
          aria-label="Tiêu đề"
          required
          minLength={3}
          maxLength={200}
        />
        <RichTextEditor initialHtml={post?.content ?? ""} onChange={setContentHtml} />
      </div>

      {/* Cột phụ: ảnh bìa, mô tả, thông tin sự kiện, nút đăng */}
      <aside className={styles.side}>
        <div className={styles.field}>
          <span>Ảnh bìa *</span>
          <button
            type="button"
            className={`${styles.cover} ${coverUrl ? styles.hasCover : ""}`}
            onClick={() => coverInput.current?.click()}
            disabled={coverUploading}
          >
            {coverUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- xem trước ảnh vừa tải, không cần tối ưu
              <img src={coverUrl} alt="Ảnh bìa" />
            ) : (
              <span>{coverUploading ? "Đang tải ảnh…" : "＋ Chọn ảnh (tối đa 5 MB)"}</span>
            )}
            {coverUrl && <span className={styles.coverChange}>{coverUploading ? "Đang tải…" : "Đổi ảnh"}</span>}
          </button>
          <input
            ref={coverInput}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            hidden
            onChange={(e) => uploadCover(e.target.files?.[0])}
          />
        </div>

        <label className={styles.field}>
          <span>Mô tả ngắn</span>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            maxLength={300}
            placeholder="Để trống sẽ tự lấy đầu nội dung"
          />
        </label>

        <div className={styles.row}>
          <label className={styles.field}>
            <span>Ngày *</span>
            <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
          </label>
          <label className={styles.field}>
            <span>Giờ</span>
            <input value={eventTime} onChange={(e) => setEventTime(e.target.value)} placeholder="19:00 — 22:00" />
          </label>
        </div>
        <label className={styles.field}>
          <span>Danh mục</span>
          <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Workshop, Âm nhạc…" />
        </label>
        <label className={styles.field}>
          <span>Địa điểm</span>
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Mặc định: Vanghè" />
        </label>

        <label className={styles.check}>
          <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
          Hiển thị ngay trên website
        </label>

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <div className={styles.actions}>
          <Link href={post ? "/admin/bai-viet" : "/blog"} className={styles.cancel}>
            Huỷ
          </Link>
          <button type="submit" className={styles.submit} disabled={saving || coverUploading}>
            {saving ? "Đang lưu…" : post ? "Lưu thay đổi" : published ? "Đăng bài" : "Lưu bài (ẩn)"}
          </button>
        </div>
      </aside>
    </form>
  );
}
