"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";
import {
  PhoneIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  ZaloIcon,
} from "../ui/Icons";

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
              title="Instagram Vang Hè"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <InstagramIcon size={14} />
              <span>Instagram</span>
            </a>
            <span className={styles.topBarSep}>·</span>
            <a
              href={siteConfig.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topBarInsta}
              title="TikTok Vang Hè"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <TikTokIcon size={14} />
              <span>TikTok</span>
            </a>
            <span className={styles.topBarSep}>·</span>
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className={styles.topBarPhone}
              title={`Hotline: ${siteConfig.contact.hotlineDisplay}`}
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
              href="/#dat-ban"
              className={`${styles.navLink} ${styles.navReserveLink}`}
            >
              {t("nav.reservation")}
            </Link>
          </nav>

          <div className={styles.actions}>
            {/* Language Switcher Dropdown */}
            <LanguageDropdown variant="header" />

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
                ✨ {t("nav.menu")} (Menu)
              </Link>
              <Link
                href="/#khong-gian"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.space")}
              </Link>
              <Link
                href="/#dat-ban"
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
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

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileInstaLink}
                onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <InstagramIcon size={17} />
                <span>Instagram: @vanghe.thewinecorner ↗</span>
              </a>

              <a
                href={siteConfig.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileInstaLink}
                onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <TikTokIcon size={17} />
                <span>TikTok: @vanghe.thewinecorner ↗</span>
              </a>

              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileInstaLink}
                onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <FacebookIcon size={17} />
                <span>Facebook Vang Hè — The Wine Corner ↗</span>
              </a>
            </nav>

            <div className={styles.mobileContactBox}>
              <p>Hotline Sommelier: <strong>{siteConfig.contact.hotlineDisplay}</strong></p>
              <p style={{ marginTop: "4px", fontSize: "12px", opacity: 0.85 }}>
                Zalo: <strong>0868 833 059</strong> · WhatsApp / Kakao: <strong>0866 817 884</strong>
              </p>
              <div style={{ display: "flex", gap: "8px", marginTop: "0.75rem" }}>
                <a
                  href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                  className="btn"
                  style={{ flex: 1, padding: "10px", fontSize: "13px" }}
                >
                  <PhoneIcon size={14} /> Gọi Hotline
                </a>
                <a
                  href={siteConfig.contact.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, padding: "10px", fontSize: "13px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                >
                  <ZaloIcon size={14} /> Chat Zalo ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
