"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "../ui/Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, toggleLang, t } = useLanguage();

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

  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

  return (
    <header className={`${styles.header} ${isSolid ? styles.solid : ""}`}>
      {/* Top Info Strip */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarDot}>●</span>
            <span className={styles.highlightText}>
              {t("topbar.address")}
            </span>
            <span className={styles.topBarSep}>·</span>
            <span className={styles.hoursText}>
              {t("topbar.hours")}
            </span>
          </div>
          <div className={styles.topBarRight}>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topBarInsta}
            >
              <span>Instagram ↗</span>
            </a>
            <span className={styles.topBarSep}>·</span>
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className={styles.topBarPhone}
            >
              <PhoneIcon size={13} />
              {t("topbar.hotline")}: {siteConfig.contact.hotlineDisplay}
            </a>
          </div>
        </div>
      </div>

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
            <Link href="/#cau-chuyen" className={styles.navLink}>
              {t("nav.story")}
            </Link>
            <Link href="/#ban-tiec" className={styles.navLink}>
              {t("nav.tablescape")}
            </Link>
            <Link href="/#khong-gian" className={styles.navLink}>
              {t("nav.space")}
            </Link>
            <Link href="/#video" className={styles.navLink}>
              {t("nav.film")}
            </Link>
            <Link href="/#diem-hen" className={styles.navLink}>
              {t("nav.location")}
            </Link>
            <Link href="/#dat-ban" className={styles.navLink}>
              {t("nav.contact")}
            </Link>
          </nav>

          <div className={styles.actions}>
            {/* Language Switcher Pill */}
            <div className={styles.langSwitch} role="group" aria-label="Chọn ngôn ngữ">
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={`${styles.langBtn} ${lang === "vi" ? styles.langActive : ""}`}
                title="Tiếng Việt"
              >
                VI
              </button>
              <span className={styles.langSep}>/</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                title="English"
              >
                EN
              </button>
            </div>

            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className={styles.phoneBadge}
              title={`Gọi hotline: ${siteConfig.contact.hotlineDisplay}`}
            >
              <PhoneIcon size={14} />
              <span>{siteConfig.contact.hotlineDisplay}</span>
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
            <div className={styles.mobileLangRow}>
              <span className={styles.mobileLangLabel}>Ngôn ngữ / Language:</span>
              <div className={styles.langSwitch}>
                <button
                  type="button"
                  onClick={() => setLang("vi")}
                  className={`${styles.langBtn} ${lang === "vi" ? styles.langActive : ""}`}
                >
                  Tiếng Việt
                </button>
                <span className={styles.langSep}>/</span>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                >
                  English
                </button>
              </div>
            </div>

            <nav className={styles.mobileNavLinks} aria-label="Điều hướng di động">
              <Link
                href="/#cau-chuyen"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.story")}
              </Link>
              <Link
                href="/#ban-tiec"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.tablescape")}
              </Link>
              <Link
                href="/#khong-gian"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.space")}
              </Link>
              <Link
                href="/#video"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.film")}
              </Link>
              <Link
                href="/#diem-hen"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.location")}
              </Link>
              <Link
                href="/#dat-ban"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.contact")}
              </Link>

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileInstaLink}
                onClick={() => setMobileOpen(false)}
              >
                <span>📸 Instagram: @vanghe.thewinecorner ↗</span>
              </a>
            </nav>

            <div className={styles.mobileContactBox}>
              <p>{t("topbar.hotline")} & Zalo Vang Hè:</p>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className="btn"
                style={{ width: "100%", marginTop: "0.6rem" }}
              >
                <PhoneIcon size={16} />
                {siteConfig.contact.hotlineDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
