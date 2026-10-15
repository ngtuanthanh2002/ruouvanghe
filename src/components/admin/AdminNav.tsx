"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/admin/admin.module.css";

const TABS = [
  { href: "/admin/bai-viet", label: "Quản lý bài viết" },
  { href: "/admin/dang-bai", label: "✎ Đăng bài mới" },
];

// usePathname trên route có tham số động (vd. /admin/bai-viet/[id]) phải nằm trong Suspense
// (Cache Components) — fallback là cùng thanh menu nhưng chưa tô tab đang mở.
export default function AdminNav() {
  return (
    <Suspense fallback={<NavLinks active={null} />}>
      <ActiveNav />
    </Suspense>
  );
}

function ActiveNav() {
  return <NavLinks active={usePathname()} />;
}

function NavLinks({ active }: { active: string | null }) {
  return (
    <nav className={styles.nav} aria-label="Quản trị">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`${styles.tab} ${active === tab.href ? styles.tabActive : ""}`}
          aria-current={active === tab.href ? "page" : undefined}
        >
          {tab.label}
        </Link>
      ))}
      <Link href="/blog" className={styles.viewBlog}>
        Xem trang Blog ↗
      </Link>
    </nav>
  );
}
