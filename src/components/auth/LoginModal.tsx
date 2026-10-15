"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./LoginModal.module.css";
import { login, type LoginState } from "@/app/actions/auth";
import type { SessionUser } from "@/lib/auth";
import { UserIcon } from "../ui/Icons";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: (user: SessionUser) => void;
}

export default function LoginModal({ open, onClose, onLogin }: LoginModalProps) {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    async (prev, formData) => {
      const result = await login(prev, formData);
      if (result.user) {
        onLogin(result.user);
        onClose();
      }
      return result;
    },
    { user: null }
  );
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  // Portal ra body: header có backdrop-filter nên position: fixed bên trong sẽ bị giới hạn theo header
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.x} onClick={onClose} aria-label="Đóng">
          ×
        </button>

        <div className={styles.avatar}>
          <UserIcon size={26} />
        </div>

        <h3 id="login-title">Đăng nhập</h3>
        <p className={styles.sub}>Dành cho quản trị viên Vanghè</p>

        <form action={formAction} className={styles.form}>
          <label className={styles.field}>
            <span>Email</span>
            <input ref={firstFieldRef} name="email" type="email" autoComplete="username" required />
          </label>
          <label className={styles.field}>
            <span>Mật khẩu</span>
            <input name="password" type="password" autoComplete="current-password" required />
          </label>

          {state.error && (
            <p className={styles.error} role="alert">
              {state.error}
            </p>
          )}

          <button type="submit" className={styles.primary} disabled={pending}>
            {pending ? "Đang đăng nhập…" : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
