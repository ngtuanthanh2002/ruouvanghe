"use client";

import React, { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./BlogPostForm.module.css";
import RichTextEditor from "./RichTextEditor";
import { createBlogPost } from "@/app/actions/blog";
import { uploadBlogImage } from "@/lib/upload-image";

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function BlogPostForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [eventDate, setEventDate] = useState(today);
  const [eventTime, setEventTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [published, setPublished] = useState(true);

  const [coverUploading, setCoverUploading] = useState(false);
  const [error, setError] = useState("");
  const [savedDraftSlug, setSavedDraftSlug] = useState("");
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
      const result = await createBlogPost({
        title,
        excerpt,
        coverUrl,
        contentHtml,
        eventDate,
        eventTime,
        location,
        category,
        published,
      });
      if (!result.ok) {
        setError(result.error);
      } else if (published) {
        router.push(`/blog/${result.slug}`);
      } else {
        setSavedDraftSlug(result.slug);
      }
    });
  };

  if (savedDraftSlug) {
    return (
      <div className={styles.done}>
        <h2>Đã lưu bài (đang ẩn)</h2>
        <p>
          Bài <strong>{savedDraftSlug}</strong> đã lưu trên Supabase nhưng chưa hiển thị. Bật cột{" "}
          <code>published</code> trong Supabase để đăng.
        </p>
        <button type="button" className={styles.submit} onClick={() => window.location.reload()}>
          Viết bài khác
        </button>
      </div>
    );
  }

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
        <RichTextEditor onChange={setContentHtml} />
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
          <Link href="/blog" className={styles.cancel}>
            Huỷ
          </Link>
          <button type="submit" className={styles.submit} disabled={saving || coverUploading}>
            {saving ? "Đang đăng…" : published ? "Đăng bài" : "Lưu bài (ẩn)"}
          </button>
        </div>
      </aside>
    </form>
  );
}
