"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";
import UserMenu from "../auth/UserMenu";
import {
  PhoneIcon,
  ZaloIcon,
} from "../ui/Icons";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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

  // Đã ở trang chủ: Next không scroll lại khi hash không đổi → tự cuộn
  const scrollToReservation = (e: React.MouseEvent) => {
    const target = document.getElementById("dat-ban");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/#dat-ban");
    }
  };

  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

  return (
    <header className={`${styles.header} ${isSolid ? styles.solid : ""}`}>
      {/* Main Single-Line Navigation */}
      <div className={styles.mainNav}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo} aria-label="Vang Hè - The Wine Corner">
            <div className={styles.logoImageWrap}>
              <Image
                src="/Logo_VH-White.png"
                alt="Logo Vang Hè"
                width={54}
                height={54}
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
            <Link
              href="/#gioi-thieu"
              className={`${styles.navLink} ${pathname === "/" ? styles.navLinkActive : ""}`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/thuc-don"
              className={`${styles.navMenuButton} ${pathname === "/thuc-don" ? styles.navMenuButtonActive : ""}`}
            >
              <span>{t("nav.menu")}</span>
            </Link>
            <Link href="/#khong-gian" className={styles.navLink}>
              {t("nav.space")}
            </Link>
            <Link
              href="/blog"
              className={`${styles.navLink} ${pathname.startsWith("/blog") ? styles.navLinkActive : ""}`}
            >
              {t("nav.blog")}
            </Link>
            <Link
              href="/#dat-ban"
              className={`${styles.navLink} ${styles.navReserveLink}`}
              onClick={scrollToReservation}
            >
              {t("nav.reservation")}
            </Link>
          </nav>

          <div className={styles.actions}>
            {/* Language Switcher Dropdown */}
            <LanguageDropdown variant="header" />

            <UserMenu buttonClassName={styles.userButton} activeClassName={styles.userButtonActive} />

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
            <div className={styles.mobileLangRow}>
              <span className={styles.mobileLangLabel}>Ngôn ngữ / Language:</span>
              <LanguageDropdown
                variant="mobile"
                onSelect={() => setMobileOpen(false)}
              />
            </div>

            <nav className={styles.mobileNavLinks} aria-label="Điều hướng di động">
              <Link
                href="/#gioi-thieu"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/thuc-don"
                className={`${styles.mobileNavLink} ${styles.mobileNavMenuBtn}`}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.menu")}
              </Link>
              <Link
                href="/#khong-gian"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.space")}
              </Link>
              <Link
                href="/blog"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.blog")}
              </Link>
              <Link
                href="/#dat-ban"
                className={styles.mobileNavLink}
                onClick={(e) => {
                  setMobileOpen(false);
                  scrollToReservation(e);
                }}
              >
                {t("nav.reservation")}
              </Link>
              <Link
                href="/#diem-hen"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.location")}
              </Link>
            </nav>

            <div className={styles.mobileContactBox}>
              <p>
                Hotline: <strong>{siteConfig.contact.hotlineDisplay}</strong>
              </p>
              <div style={{ display: "flex", gap: "8px", marginTop: "0.75rem" }}>
                <a
                  href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                  className="btn"
                  style={{ flex: 1, padding: "10px", fontSize: "13px" }}
                >
                  <PhoneIcon size={14} /> Hotline
                </a>
                <a
                  href={siteConfig.contact.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    flex: 1,
                    padding: "10px",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <ZaloIcon size={14} /> Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
