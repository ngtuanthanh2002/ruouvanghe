"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, WineGlassIcon } from "../ui/Icons";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Banner */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <span className={styles.highlightText}>
              ★ 100% Rượu Vang Nhập Khẩu Chính Hãng Có Đầy Đủ CO/CQ
            </span>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.showroomText}>
              Hà Nội: 88 Phố Vọng | TP.HCM: 168 Nguyễn Thị Minh Khai
            </span>
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className={styles.topBarPhone}
            >
              <PhoneIcon size={14} />
              Hotline: {siteConfig.contact.hotlineDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.mainNav}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo} aria-label="Rượu Vang Hè - Trang chủ">
            <span className={styles.logoIcon}>
              <WineGlassIcon size={28} />
            </span>
            <div className={styles.logoText}>
              <span className={styles.brandTitle}>RƯỢU VANG HÈ</span>
              <span className={styles.brandSub}>HERITAGE CELLAR • EST. 2018</span>
            </div>
          </Link>

          <nav className={styles.desktopNav} aria-label="Điều hướng chính">
            <Link href="/" className={styles.navLink}>
              Trang Chủ
            </Link>
            <Link href="/san-pham" className={styles.navLink}>
              Bộ Sưu Tập Vang
            </Link>
            <Link href="/san-pham?category=hop-qua" className={styles.navLink}>
              Hộp Quà Cao Cấp
            </Link>
            <Link href="/kienthuc-ruouvang" className={styles.navLink}>
              Kiến Thức Vang
            </Link>
            <Link href="/ve-chung-toi" className={styles.navLink}>
              Về Chúng Tôi
            </Link>
            <Link href="/lien-he" className={styles.navLink}>
              Hầm Rượu & Showroom
            </Link>
          </nav>

          <div className={styles.actions}>
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className="btn-gold"
              title="Gọi hotline tư vấn Sommelier"
            >
              <PhoneIcon size={16} />
              <span>Tư Vấn: {siteConfig.contact.hotlineDisplay}</span>
            </a>

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
                href="/"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Trang Chủ
              </Link>
              <Link
                href="/san-pham"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Bộ Sưu Tập Rượu Vang
              </Link>
              <Link
                href="/san-pham?category=hop-qua"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Hộp Quà Tết & Doanh Nghiệp
              </Link>
              <Link
                href="/kienthuc-ruouvang"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Kiến Thức & Thưởng Thức Vang
              </Link>
              <Link
                href="/ve-chung-toi"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Câu Chuyện Thương Hiệu
              </Link>
              <Link
                href="/lien-he"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                Hầm Rượu & Showroom
              </Link>
            </nav>

            <div className={styles.mobileContactBox}>
              <p>Hotline Sommelier 24/7:</p>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className="btn-gold"
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                <PhoneIcon size={16} />
                Gọi {siteConfig.contact.hotlineDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
