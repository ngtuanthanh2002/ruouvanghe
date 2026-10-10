"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/site-config";
import { MENU_HIGHLIGHTS, MENU_SCAN_PAGES, MenuItem } from "@/lib/menu-data";
import {
  ArrowRightIcon,
  PhoneIcon,
  WineGlassIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@/components/ui/Icons";

export default function MenuPage() {
  const { t, lang } = useLanguage();

  // Carousel slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const maxSlide = Math.max(0, MENU_HIGHLIGHTS.length - itemsPerView);

  // Modal Lightbox state
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMenuPageIdx, setActiveMenuPageIdx] = useState(0);

  // Resize listener for responsive itemsPerView in carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation for modal & carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft") {
        setActiveMenuPageIdx((prev) =>
          prev > 0 ? prev - 1 : MENU_SCAN_PAGES.length - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActiveMenuPageIdx((prev) =>
          prev < MENU_SCAN_PAGES.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  const openModalWithPage = (pageIndex: number) => {
    setActiveMenuPageIdx(pageIndex);
    setModalOpen(true);
  };

  return (
    <div className={styles.menuPageWrapper}>
      {/* ========================================================
          1. HERO PANORAMIC BANNER — ELEGANT WINE ATMOSPHERE
      ======================================================== */}
      <section className={styles.heroBanner}>
        <div className={styles.heroBgWrap}>
          <Image
            src="/images/gallery-glasses.jpg"
            alt="Thực đơn Vang Hè — The Wine Corner Nha Trang"
            fill
            priority
            className={styles.heroBgImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <WineGlassIcon size={14} />
              <span>VANGHÉ · THE WINE CORNER</span>
            </span>
            <h1 className={styles.heroTitle}>{t("menu.hero_title")}</h1>
            <p className={styles.heroSubtitle}>{t("menu.hero_subtitle")}</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION: THỰC ĐƠN GỌI MÓN (A LA CARTE / COLD CUT)
      ======================================================== */}
      <section className={styles.alacarteSection}>
        <div className={styles.alacarteContainer}>
          <div className={styles.alacarteGrid}>
            {/* Left Content */}
            <div className={styles.alacarteTextCol}>
              <span className={styles.alacartePreBadge}>
                {lang === "en" ? "COLD CUT & TAPAS" : "ẨM THỰC THƯỞNG VANG"}
              </span>
              <h2 className={styles.scriptHeading}>{t("menu.alacarte_title")}</h2>
              <p className={styles.alacarteDesc}>{t("menu.alacarte_desc")}</p>

              <div className={styles.actionRow}>
                <a
                  href={siteConfig.contact.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnExploreRef}
                >
                  <span>{lang === "en" ? "Menu" : "Thực đơn"}</span>
                  <ArrowRightIcon size={15} />
                </a>
              </div>
            </div>

            {/* Right Featured Image */}
            <div className={styles.alacarteVisualCol}>
              <a
                href={siteConfig.contact.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.alacarteImgFrame}
                title={lang === "en" ? "View full menu" : "Xem toàn bộ thực đơn"}
              >
                <Image
                  src="/images/coldcut-glass.jpg"
                  alt="Khay Cold Cut và ly rượu vang Vang Hè"
                  width={560}
                  height={350}
                  className={styles.alacarteImg}
                />
                <div className={styles.alacarteHoverOverlay}>
                  <SparklesIcon size={18} />
                  <span>{lang === "en" ? "View full menu" : "Xem toàn bộ thực đơn"}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION: CAROUSEL MÓN ĂN & THỨC UỐNG ĐẶC SẮC
          Streamlined & minimalist card layout (Reduced text)
      ======================================================== */}
      <section className={styles.carouselSection}>
        <div className="container">
          <div className={styles.carouselHeader}>
            <div>
              <h3 className={styles.carouselMainTitle}>
                {t("menu.slider_title")}
              </h3>
            </div>

            {/* Carousel Control Buttons */}
            <div className={styles.carouselControls}>
              <button
                type="button"
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className={styles.carouselArrowBtn}
                aria-label="Previous dishes"
              >
                <ChevronLeftIcon size={18} />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                disabled={currentSlide >= maxSlide}
                className={styles.carouselArrowBtn}
                aria-label="Next dishes"
              >
                <ChevronRightIcon size={18} />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${(currentSlide * 100) / itemsPerView}%)`,
              }}
            >
              {MENU_HIGHLIGHTS.map((item) => (
                <div
                  key={item.id}
                  className={styles.carouselItem}
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <a
                    href={siteConfig.contact.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dishCard}
                  >
                    <div className={styles.dishImgWrap}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 25vw"
                        className={styles.dishImg}
                      />
                      {item.badge && (
                        <span className={styles.dishBadge}>{item.badge}</span>
                      )}
                    </div>

                    <div className={styles.dishInfo}>
                      <h4 className={styles.dishName}>
                        {lang === "en" ? item.name : (item.subName || item.name)}
                      </h4>
                      <div className={styles.dishFooterRow}>
                        <span className={styles.dishPrice}>{item.price}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className={styles.carouselDots}>
            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.activeDot : ""
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SECTION: "MỘT ĐIỀU GÌ ĐÓ MỚI HƠN...."
      ======================================================== */}
      <section className={styles.moreSection}>
        <div className="container">
          <div className={styles.moreHeader}>
            <h2 className={styles.scriptHeadingCenter}>
              {t("menu.more_title")}
            </h2>
            <p className={styles.moreSubtitle}>{t("menu.more_subtitle")}</p>
          </div>

          <div className={styles.moreGrid}>
            {/* Box 1: Tapas / Cold Cut */}
            <div className={styles.moreCard}>
              <div className={styles.moreContentCol}>
                <span className={styles.moreTag}>SET 01</span>
                <h3 className={styles.moreCardTitle}>{t("menu.tapas_title")}</h3>
                <p className={styles.moreCardDesc}>{t("menu.tapas_desc")}</p>
                <a
                  href={siteConfig.contact.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnExploreRef}
                >
                  <span>{lang === "en" ? "Menu" : "Thực đơn"}</span>
                  <ArrowRightIcon size={15} />
                </a>
              </div>
              <div className={styles.moreImgCol}>
                <Image
                  src="/images/1791444307770_8243178211297854059_8243178211297854059_52b0a90d325388b8b3bee750cac163ed.jpg"
                  alt={t("menu.tapas_title")}
                  width={340}
                  height={240}
                  className={styles.moreImg}
                />
              </div>
            </div>

            {/* Box 2: Bread & Sides */}
            <div className={styles.moreCard}>
              <div className={styles.moreContentCol}>
                <span className={styles.moreTag}>SET 02</span>
                <h3 className={styles.moreCardTitle}>{t("menu.bread_title")}</h3>
                <p className={styles.moreCardDesc}>{t("menu.bread_desc")}</p>
                <a
                  href={siteConfig.contact.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnExploreRef}
                >
                  <span>{lang === "en" ? "Menu" : "Thực đơn"}</span>
                  <ArrowRightIcon size={15} />
                </a>
              </div>
              <div className={styles.moreImgCol}>
                <Image
                  src="/images/1791444307758_8243178211297854059_8243178211297854059_2153babe5b013813bf90f2f8d0b093dc.jpg"
                  alt={t("menu.bread_title")}
                  width={340}
                  height={240}
                  className={styles.moreImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SECTION: BỘ SƯU TẬP RƯỢU VANG (WINE COLLECTION)
      ======================================================== */}
      <section className={styles.wineSection}>
        <div className="container">
          <div className={styles.wineBannerBox}>
            <div className={styles.wineContentSide}>
              <span className={styles.winePreTag}>SOMMELIER SELECTION</span>
              <h2 className={styles.wineHugeTitle}>{t("menu.wine_title")}</h2>
              <p className={styles.wineDesc}>{t("menu.wine_desc")}</p>

              <div className={styles.wineActionRow}>
                <a
                  href={siteConfig.contact.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnExploreRefLight}
                >
                  <span>{lang === "en" ? "Menu" : "Thực đơn"}</span>
                  <ArrowRightIcon size={15} />
                </a>

                <div className={styles.wineCategoriesPills}>
                  <a
                    href={siteConfig.contact.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.wineMiniPill}
                  >
                    Sparkling ↗
                  </a>
                  <a
                    href={siteConfig.contact.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.wineMiniPill}
                  >
                    Rose Wine ↗
                  </a>
                  <a
                    href={siteConfig.contact.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.wineMiniPill}
                  >
                    White Wine ↗
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.wineVisualSide}>
              <div className={styles.wineImgFrame}>
                <Image
                  src="/images/wine-selection.jpg"
                  alt="Bộ sưu tập rượu vang tuyển chọn tại Vang Hè Nha Trang"
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className={styles.winePhoto}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SECTION: CTA ĐẶT BÀN & THƯỞNG VANG TỐI NAY
      ======================================================== */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <div className={styles.bottomCtaCard}>
            <div className={styles.bottomCtaText}>
              <span className={styles.bottomCtaEyebrow}>
                {lang === "en" ? "RESERVE YOUR CORNER" : "ĐẶT BÀN TỐI NAY"}
              </span>
              <h3>
                {lang === "en"
                  ? "Experience Warm Evenings at Vang Hè"
                  : "Dành Trọn Cho Bạn Một Buổi Tối Đáng Nhớ"}
              </h3>
              <p>
                {lang === "en"
                  ? "65 Trinh Phong, Nha Trang · Open Daily 18:00 — 23:30"
                  : "65 Trịnh Phong, P. Tân Lập, Nha Trang · Mở cửa mỗi tối 18:00 — 23:30"}
              </p>
            </div>

            <div className={styles.bottomCtaButtons}>
              <Link href="/#dat-ban" className={styles.btnReserveGold}>
                <span>{lang === "en" ? "Book Table Now" : "Đặt Bàn Trải Nghiệm"}</span>
                <ArrowRightIcon size={16} />
              </Link>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className={styles.btnHotlineDark}
              >
                <PhoneIcon size={15} />
                <span>Hotline: {siteConfig.contact.hotlineDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. MODAL LIGHTBOX — XEM 4 TRANG MENU THẬT TỪ QUÁN
      ======================================================== */}
      {modalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t("menu.modal_title")}
        >
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleBlock}>
                <WineGlassIcon size={18} className={styles.modalIcon} />
                <div>
                  <h3 className={styles.modalTitle}>
                    {MENU_SCAN_PAGES[activeMenuPageIdx].titleVi}
                  </h3>
                  <p className={styles.modalSubtitle}>
                    {MENU_SCAN_PAGES[activeMenuPageIdx].descVi}
                  </p>
                </div>
              </div>

              <div className={styles.modalHeaderActions}>
                <a
                  href={siteConfig.contact.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalDriveBtn}
                >
                  <span>Google Drive ↗</span>
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className={styles.modalCloseBtn}
                  aria-label="Đóng"
                >
                  <XIcon size={20} />
                </button>
              </div>
            </div>

            {/* Modal Navigation Tabs */}
            <div className={styles.modalTabsBar}>
              {MENU_SCAN_PAGES.map((page, idx) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setActiveMenuPageIdx(idx)}
                  className={`${styles.modalTabBtn} ${
                    activeMenuPageIdx === idx ? styles.activeModalTab : ""
                  }`}
                >
                  <span className={styles.tabNum}>0{idx + 1}</span>
                  <span className={styles.tabText}>
                    {lang === "en" ? page.titleEn : page.titleVi}
                  </span>
                </button>
              ))}
            </div>

            {/* Modal Main Image Viewer with Prev/Next Controls */}
            <div className={styles.modalImageStage}>
              <button
                type="button"
                onClick={() =>
                  setActiveMenuPageIdx((prev) =>
                    prev > 0 ? prev - 1 : MENU_SCAN_PAGES.length - 1
                  )
                }
                className={`${styles.modalNavArrow} ${styles.modalArrowLeft}`}
                aria-label="Trang trước"
              >
                <ChevronLeftIcon size={24} />
              </button>

              <div className={styles.modalImgWrap}>
                <Image
                  src={MENU_SCAN_PAGES[activeMenuPageIdx].image}
                  alt={MENU_SCAN_PAGES[activeMenuPageIdx].titleVi}
                  width={800}
                  height={1100}
                  quality={95}
                  priority
                  className={styles.modalScanImg}
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveMenuPageIdx((prev) =>
                    prev < MENU_SCAN_PAGES.length - 1 ? prev + 1 : 0
                  )
                }
                className={`${styles.modalNavArrow} ${styles.modalArrowRight}`}
                aria-label="Trang sau"
              >
                <ChevronRightIcon size={24} />
              </button>
            </div>

            {/* Modal Footer Note */}
            <div className={styles.modalFooter}>
              <p className={styles.modalVatNote}>{t("menu.vat_notice")}</p>
              <div className={styles.modalPageIndicator}>
                {activeMenuPageIdx + 1} / {MENU_SCAN_PAGES.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
