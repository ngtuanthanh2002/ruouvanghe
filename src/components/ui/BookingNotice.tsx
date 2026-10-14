"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./BookingNotice.module.css";

export type Notice =
  | { type: "success"; name: string; phone: string; summary: string }
  | { type: "error" };

interface BookingNoticeProps {
  notice: Notice | null;
  isVi: boolean;
  hotline: string;
  onClose: () => void;
  onRetry: () => void;
}

// Popup kết quả đặt bàn — giữ nội dung cũ trong lúc chạy animation đóng
export default function BookingNotice({ notice, isVi, hotline, onClose, onRetry }: BookingNoticeProps) {
  const [shown, setShown] = useState<Notice | null>(notice);
  const [prev, setPrev] = useState<Notice | null>(notice);
  if (notice !== prev) {
    setPrev(notice);
    if (notice) setShown(notice);
  }
  const closing = !notice && !!shown;
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!notice) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [notice, onClose]);

  if (!shown) return null;
  const ok = shown.type === "success";

  return (
    <div
      className={`${styles.overlay} ${closing ? styles.closing : ""}`}
      onClick={onClose}
      onAnimationEnd={(e) => {
        if (closing && e.target === e.currentTarget) setShown(null);
      }}
    >
      <div
        className={`${styles.panel} ${ok ? styles.success : styles.error}`}
        role={ok ? "dialog" : "alertdialog"}
        aria-modal="true"
        aria-labelledby="booking-notice-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className={styles.x} onClick={onClose} aria-label={isVi ? "Đóng" : "Close"}>
          ×
        </button>

        <svg className={styles.icon} viewBox="0 0 52 52" aria-hidden="true">
          <circle className={styles.ring} cx="26" cy="26" r="24" />
          {ok ? (
            <path className={styles.mark} d="M15 27l7 7 15-15" />
          ) : (
            <path className={styles.mark} d="M18 18l16 16M34 18L18 34" />
          )}
        </svg>

        {shown.type === "success" ? (
          <>
            <h3 id="booking-notice-title">{isVi ? "Đặt bàn thành công!" : "Reservation sent!"}</h3>
            <p>
              {isVi ? (
                <>
                  Cảm ơn <strong>{shown.name}</strong>. Vanghè sẽ gọi lại số <strong>{shown.phone}</strong> trong
                  vòng 15 phút để xác nhận.
                </>
              ) : (
                <>
                  Thank you <strong>{shown.name}</strong>. Vanghè will call <strong>{shown.phone}</strong> within 15
                  minutes to confirm.
                </>
              )}
            </p>
            <p className={styles.summary}>{shown.summary}</p>
            <div className={styles.actions}>
              <button type="button" className={styles.primary} onClick={onClose}>
                {isVi ? "Tuyệt vời" : "Great"}
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 id="booking-notice-title">{isVi ? "Gửi chưa thành công" : "Couldn't send your request"}</h3>
            <p>
              {isVi
                ? `Hãy thử lại, hoặc gọi hotline ${hotline} để được giữ bàn ngay.`
                : `Please try again, or call ${hotline} and we'll hold a table for you.`}
            </p>
            <div className={styles.actions}>
              <button type="button" className={styles.primary} onClick={onRetry}>
                {isVi ? "Thử lại" : "Try again"}
              </button>
              <a className={styles.secondary} href={`tel:${hotline.replace(/\D/g, "")}`}>
                {isVi ? "Gọi hotline" : "Call us"}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
