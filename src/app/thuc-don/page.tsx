"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/site-config";

// w/h là kích thước gốc — ảnh hiển thị đúng tỉ lệ, không cắt
const BLOCKS = [
  {
    id: "tapas",
    title: "menu.tapas_title",
    desc: "menu.tapas_desc",
    src: "/images/1791444307758_8243178211297854059_8243178211297854059_2153babe5b013813bf90f2f8d0b093dc.jpg",
    w: 1549,
    h: 2222,
  },
  {
    id: "bread",
    title: "menu.bread_title",
    desc: "menu.bread_desc",
    src: "/images/1791444307731_8243178211297854059_8243178211297854059_4a3fd4530fd03bc586554e1829a08c4b.jpg",
    w: 1920,
    h: 2560,
  },
  {
    id: "wine",
    title: "menu.wine_title",
    desc: "menu.wine_desc",
    src: "/images/9.jpg",
    w: 1724,
    h: 2584,
  },
] as const;

export default function MenuPage() {
  const { t, lang } = useLanguage();
  const isVi = lang === "vi";
  const hasScript = lang === "vi" || lang === "en";

  const menuButton = (
    <a
      href={siteConfig.contact.menuUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btnOutline}
    >
      {isVi ? "Tham khảo ↗" : "View menu ↗"}
    </a>
  );

  return (
    <div className={styles.page}>
      {/* THỰC ĐƠN GỌI MÓN */}
      <section className={`${styles.section} ${styles.first}`}>
        <div className={`container ${styles.split}`}>
          <div className={styles.splitText}>
            <span className={styles.label}>{t("menu.hero_subtitle")}</span>
            <h1 className={styles.title}>
              {hasScript ? (
                <span className={styles.script}>{t("menu.alacarte_title")}</span>
              ) : (
                t("menu.alacarte_title")
              )}
            </h1>
            <p className={styles.text}>{t("menu.alacarte_desc")}</p>
            {menuButton}
          </div>
          <div className={styles.imgWrap}>
            <Image
              src="/images/coldcut-glass.jpg"
              alt="Cold cut và rượu vang tại Vang Hè Nha Trang"
              width={1706}
              height={2560}
              priority
              sizes="(max-width: 860px) 90vw, 420px"
              className={styles.img}
            />
          </div>
        </div>
      </section>

      {/* CHUYỂN TIẾP */}
      <section className={styles.section}>
        <div className={`container ${styles.narrow}`}>
          <h2 className={styles.title}>
            {hasScript ? (
              <span className={styles.script}>{t("menu.more_title")}</span>
            ) : (
              t("menu.more_title")
            )}
          </h2>
          <p className={styles.text}>{t("menu.more_subtitle")}</p>
        </div>
      </section>

      {/* CÁC MENU — ảnh và chữ xen kẽ trái/phải */}
      {BLOCKS.map((block, i) => (
        <section key={block.id} className={styles.section}>
          <div
            className={`container ${styles.split} ${
              i % 2 === 0 ? styles.reverse : ""
            }`}
          >
            <div className={styles.splitText}>
              <span className={styles.label}>Menu</span>
              <h2 className={styles.blockTitle}>{t(block.title)}</h2>
              <p className={styles.text}>{t(block.desc)}</p>
              {menuButton}
            </div>
            <div className={styles.imgWrap}>
              <Image
                src={block.src}
                alt={t(block.title)}
                width={block.w}
                height={block.h}
                sizes="(max-width: 860px) 90vw, 420px"
                className={styles.img}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
