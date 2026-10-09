"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { siteConfig } from "@/lib/site-config";
import {
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TemperatureIcon,
  SparklesIcon,
  WineGlassIcon,
  ArrowRightIcon,
} from "../ui/Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const googleMapsUrl =
    "https://www.google.com/maps/place/Vang+H%C3%A8+-+The+Wine+Corner/@12.2388798,109.1905037,1721m/data=!3m1!1e3!4m12!1m5!8m4!1e2!2s114553681489507271886!3m1!1e1!3m5!1s0x3170670038805a7b:0x49cf297aba1a22d4!8m2!3d12.2392716!4d109.1904063!16s%2Fg%2F11z648jrtc?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className={styles.footer}>
      {/* Redesigned Luxury Trust Bar — 100% SVG Icons, No Emojis */}
      <div className={styles.trustBar}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <div className={styles.trustIconCircle}>
              <ShieldCheckIcon size={22} className={styles.trustSvg} />
            </div>
            <div className={styles.trustText}>
              <h4 className={styles.trustTitle}>{t("trust.t1_title")}</h4>
              <p className={styles.trustDesc}>{t("trust.t1_desc")}</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIconCircle}>
              <TemperatureIcon size={22} className={styles.trustSvg} />
            </div>
            <div className={styles.trustText}>
              <h4 className={styles.trustTitle}>{t("trust.t2_title")}</h4>
              <p className={styles.trustDesc}>{t("trust.t2_desc")}</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIconCircle}>
              <SparklesIcon size={22} className={styles.trustSvg} />
            </div>
            <div className={styles.trustText}>
              <h4 className={styles.trustTitle}>{t("trust.t3_title")}</h4>
              <p className={styles.trustDesc}>{t("trust.t3_desc")}</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIconCircle}>
              <WineGlassIcon size={22} className={styles.trustSvg} />
            </div>
            <div className={styles.trustText}>
              <h4 className={styles.trustTitle}>{t("trust.t4_title")}</h4>
              <p className={styles.trustDesc}>{t("trust.t4_desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Streamlined Clean Footer Layout */}
      <div className={`container ${styles.mainFooter}`}>
        <div className={styles.footerGrid}>
          {/* Column 1: Brand & Nha Trang Flagship */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="Trang chủ Vang Hè">
              <Image
                src="/Logo_VH-White.png"
                alt="Logo Vang Hè — The Wine Corner"
                width={56}
                height={56}
                className={styles.logoImg}
              />
              <div className={styles.logoText}>
                <span className={styles.brandTitle}>vanghè</span>
                <span className={styles.brandSub}>THE WINE CORNER · NHA TRANG</span>
              </div>
            </Link>

            <p className={styles.brandSummary}>
              {t("footer.brand_desc")}
            </p>

            <div className={styles.locationSummary}>
              <div className={styles.locItem}>
                <MapPinIcon size={16} className={styles.locSvg} />
                <span>65 Trịnh Phong, Phường Tân Lập, TP. Nha Trang</span>
              </div>
              <div className={styles.locItem}>
                <span className={styles.dotLive}>●</span>
                <span>{t("footer.open_hours")} <strong>18:00 — 23:30</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{t("footer.col_explore")}</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/#cau-chuyen">{t("nav.story")}</Link>
              </li>
              <li>
                <Link href="/#ban-tiec">{t("nav.tablescape")}</Link>
              </li>
              <li>
                <Link href="/#khong-gian">{t("nav.space")}</Link>
              </li>
              <li>
                <Link href="/#video">{t("nav.film")}</Link>
              </li>
              <li>
                <Link href="/#diem-hen">{t("nav.location")}</Link>
              </li>
              <li>
                <Link href="/#dat-ban">{t("res.badge")}</Link>
              </li>
              <li>
                <a
                  href={siteConfig.contact.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--amber-light)", fontWeight: 600 }}
                >
                  📖 Thực Đơn & Menu Vang ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hospitality */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>{t("footer.col_contact")}</h4>
            <p className={styles.contactIntro}>
              {t("footer.contact_intro")}
            </p>

            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className={styles.footerHotlineBtn}
            >
              <PhoneIcon size={18} />
              <span>Hotline: {siteConfig.contact.hotlineDisplay}</span>
            </a>

            <div className={styles.socialLinksRow}>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <span>Instagram ↗</span>
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <span>Facebook ↗</span>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <span>Google Maps ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Responsible Drinking Regulatory Notice */}
        <div className={styles.legalNotice}>
          <p className={styles.warningText}>
            {t("footer.legal")}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.bottomBar}>
          <p>{t("footer.copy")}</p>
        </div>
      </div>
    </footer>
  );
}
