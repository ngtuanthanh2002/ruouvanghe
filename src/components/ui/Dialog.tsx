"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Dialog.module.css";

// Modal xác nhận / nhập liệu dùng chung — thay cho window.confirm và window.prompt của trình duyệt.

interface DialogProps {
  open: boolean;
  title: string;
  message?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Nút xác nhận màu cảnh báo (vd. Xoá) */
  danger?: boolean;
  /** Đang xử lý: khoá nút, không cho đóng */
  busy?: boolean;
  /** Có ô nhập liệu (thay window.prompt) */
  input?: { defaultValue?: string; placeholder?: string; type?: string };
  onConfirm: (value: string) => void;
  onClose: () => void;
}

export default function Dialog(props: DialogProps) {
  if (!props.open) return null;
  // Tách phần thân để ô nhập lấy lại giá trị mặc định mỗi lần mở
  return createPortal(<DialogBody {...props} />, document.body);
}

function DialogBody({
  title,
  message,
  confirmLabel = "Đồng ý",
  cancelLabel = "Huỷ",
  danger = false,
  busy = false,
  input,
  onConfirm,
  onClose,
}: DialogProps) {
  const [value, setValue] = useState(input?.defaultValue ?? "");
  const focusRef = useRef<HTMLInputElement & HTMLButtonElement>(null);

  useEffect(() => {
    // Có ô nhập → focus và bôi đen sẵn; không có → focus nút Huỷ cho an toàn
    focusRef.current?.focus();
    if (focusRef.current instanceof HTMLInputElement) focusRef.current.select();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && !busy && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [busy, onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Portal chỉ đưa DOM ra body; sự kiện React vẫn lan theo cây component →
    // không chặn thì submit ở đây sẽ kích hoạt cả form bao ngoài (vd. form đăng bài)
    e.stopPropagation();
    if (!busy) onConfirm(value);
  };

  return (
    <div className={styles.overlay} onClick={() => !busy && onClose()}>
      <form
        className={styles.panel}
        role={danger ? "alertdialog" : "dialog"}
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
      >
        <h3 id="dialog-title">{title}</h3>
        {message && <div className={styles.message}>{message}</div>}

        {input && (
          <input
            ref={focusRef}
            className={styles.input}
            type={input.type ?? "text"}
            value={value}
            placeholder={input.placeholder}
            onChange={(e) => setValue(e.target.value)}
          />
        )}

        <div className={styles.actions}>
          <button
            ref={input ? undefined : focusRef}
            type="button"
            className={styles.cancel}
            onClick={onClose}
            disabled={busy}
          >
            {cancelLabel}
          </button>
          <button type="submit" className={`${styles.confirm} ${danger ? styles.danger : ""}`} disabled={busy}>
            {busy ? "Đang xử lý…" : confirmLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
