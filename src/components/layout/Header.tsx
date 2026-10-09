"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "../ui/Icons";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

  return (
    <header className={`${styles.header} ${isSolid ? styles.solid : ""}`}>
      {/* Top Notification Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <span className={styles.highlightText}>
              Vanghé — The Wine Corner · 65 Trịnh Phong, Nha Trang
            </span>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.showroomText}>
              Giờ mở cửa: 18:00 — 23:30 (Mỗi ngày)
            </span>
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className={styles.topBarPhone}
            >
              <PhoneIcon size={13} />
              Hotline: {siteConfig.contact.hotlineDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.mainNav}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo} aria-label="Vang Hè - The Wine Corner">
            <div className={styles.logoImageWrap}>
              <Image
                src="/Logo_VH-White.png"
                alt="Logo Vang Hè"
                width={40}
                height={40}
                className={styles.logoImg}
                priority
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandTitle}>vanghè</span>
              <span className={styles.brandSub}>THE WINE CORNER</span>
            </div>
          </Link>

          <nav className={styles.desktopNav} aria-label="Điều hướng chính">
            <Link href="/#cau-chuyen" className={styles.navLink}>
              Câu Chuyện
            </Link>
            <Link href="/#ban-tiec" className={styles.navLink}>
              Bàn Tiệc & Tablescape
            </Link>
            <Link href="/#ham-vang" className={styles.navLink}>
              Hầm Vang Tuyển Chọn
            </Link>
            <Link href="/#khong-gian" className={styles.navLink}>
              Không Gian
            </Link>
            <Link href="/san-pham" className={styles.navLink}>
              Tất Cả Sản Phẩm
            </Link>
            <Link href="/kienthuc-ruouvang" className={styles.navLink}>
              Cẩm Nang Vang
            </Link>
            <Link href="/lien-he" className={styles.navLink}>
              Liên Hệ
            </Link>
          </nav>

          <div className={styles.actions}>
            <Link
              href="/#dat-ban"
              className={styles.navCta}
              title="Đặt bàn trải nghiệm hoặc nếm rượu vang"
            >
              Đặt Bàn / Trải Nghiệm
            </Link>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileOpen}
            >
              <span className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className={styles.mobileDropdown}>
          <div className="container">
            <nav className={styles.mobileNavLinks} aria-label="Điều hướng di động">
              <Link
                href="/#cau-chuyen"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Câu Chuyện Vang Hè
              </Link>
              <Link
                href="/#ban-tiec"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Nghệ Thuật Tablescape
              </Link>
              <Link
                href="/#ham-vang"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Hầm Vang Tuyển Chọn
              </Link>
              <Link
                href="/#khong-gian"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Không Gian Vanghé
              </Link>
              <Link
                href="/san-pham"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Bộ Sưu Tập Rượu Vang
              </Link>
              <Link
                href="/kienthuc-ruouvang"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Kiến Thức & Thưởng Vang
              </Link>
              <Link
                href="/lien-he"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Ghé Thăm Vanghé
              </Link>
            </nav>

            <div className={styles.mobileContactBox}>
              <p>Hotline Đặt Bàn & Tư Vấn Sommelier:</p>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className="btn"
                style={{ width: "100%", marginTop: "0.6rem" }}
              >
                <PhoneIcon size={16} />
                Gọi Ngay: {siteConfig.contact.hotlineDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
