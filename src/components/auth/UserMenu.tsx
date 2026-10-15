"use client";

import React, { startTransition, useCallback, useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import styles from "./UserMenu.module.css";
import LoginModal from "./LoginModal";
import { getCurrentUser, logout } from "@/app/actions/auth";
import { storeUser, useStoredUser } from "@/lib/auth-storage";
import { UserIcon } from "../ui/Icons";

// Nút tài khoản trên header: chưa đăng nhập → mở modal đăng nhập; đã đăng nhập → dropdown
export default function UserMenu({ buttonClassName, activeClassName }: { buttonClassName: string; activeClassName: string }) {
  // Hiện ngay theo localStorage, rồi đối chiếu với cookie phiên trên server
  // (cookie hết hạn hoặc bị xoá → localStorage cũng được xoá theo)
  const user = useStoredUser();
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggingOut, startLogout] = useTransition();
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeLogin = useCallback(() => setLoginOpen(false), []);

  useEffect(() => {
    startTransition(async () => {
      storeUser(await getCurrentUser());
    });
  }, []);

  // Đóng dropdown khi bấm ra ngoài hoặc nhấn Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const handleLogout = () =>
    startLogout(async () => {
      await logout();
      storeUser(null);
      setMenuOpen(false);
    });

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <button
        type="button"
        className={`${buttonClassName} ${user ? activeClassName : ""}`}
        onClick={() => (user ? setMenuOpen((o) => !o) : setLoginOpen(true))}
        aria-label={user ? `Tài khoản: ${user.email}` : "Đăng nhập"}
        aria-haspopup={user ? "menu" : "dialog"}
        aria-expanded={user ? menuOpen : loginOpen}
        title={user ? user.email : "Đăng nhập"}
      >
        <UserIcon size={16} />
      </button>

      {user && menuOpen && (
        <div className={styles.menu} role="menu">
          <p className={styles.email}>{user.email}</p>
          <Link href="/admin/dang-bai" className={styles.item} role="menuitem" onClick={() => setMenuOpen(false)}>
            ✎ Đăng bài mới
          </Link>
          <button
            type="button"
            className={styles.item}
            role="menuitem"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            ⎋ {loggingOut ? "Đang đăng xuất…" : "Đăng xuất"}
          </button>
        </div>
      )}

      <LoginModal open={loginOpen} onClose={closeLogin} onLogin={storeUser} />
    </div>
  );
}
