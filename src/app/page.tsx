"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { FAQS } from "@/lib/wine-data";
import JsonLd from "@/components/seo/JsonLd";
import { generateFAQSchema } from "@/lib/seo-helpers";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPinIcon,
  PhoneIcon,
  WineGlassIcon,
  ClockIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
  ExpandIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  WhatsAppIcon,
  ZaloIcon,
  StarIcon,
  QuoteIcon,
} from "@/components/ui/Icons";
import AmbientDepthBackground from "@/components/ui/AmbientDepthBackground";

// 8 Authentic Venue Space Photos — Preserves Full Native Framing Without Cropping
const SPACE_PHOTOS = [
  {
    id: 1,
    src: "/images/2.jpg",
    alt: "Quầy Bar & Không Gian Đón Khách Vang Hè",
    title: "Quầy Bar & Không Gian Đón Khách",
    titleEn: "Welcome Bar & Cozy Lounge",
    category: "bar",
    categoryLabel: "Quầy Bar & Kệ Vang",
    categoryLabelEn: "Bar & Cellar",
    aspectRatio: "2 / 3",
    desc: "Ánh sáng vàng ấm, quầy bar gỗ mộc và ghế da êm ái đón khách từ 17:00 mỗi chiều.",
    descEn: "Warm golden ambiance, rustic wood bar, and plush seating welcoming guests from 17:00.",
  },
  {
    id: 2,
    src: "/images/gallery-bar.jpg",
    alt: "Kệ Vang Tuyển Chọn & Ly Pha Lê Pha Đèn Vàng Ấm",
    title: "Kệ Vang & Bộ Sưu Tập Ly Pha Lê",
    titleEn: "Curated Vintages & Crystal Glassware",
    category: "bar",
    categoryLabel: "Quầy Bar & Kệ Vang",
    categoryLabelEn: "Bar & Cellar",
    aspectRatio: "2 / 3",
    desc: "Kệ rượu vang lung linh với ánh đèn vàng ấm, ly pha lê Sommelier xếp tầng tinh tế.",
    descEn: "Illuminated wine shelves and sommelier crystal stemware gleaming in warm amber light.",
  },
  {
    id: 3,
    src: "/images/tablescape-main.jpg",
    alt: "Bàn Tiệc Tablescape Hoa Đồng Tiền Đỏ & Cold Cut Thượng Hạng",
    title: "Bàn Tiệc Tablescape Hoa & Cold Cut",
    titleEn: "Floral Tablescape & Artisanal Cold Cut",
    category: "tablescape",
    categoryLabel: "Bàn Tiệc Tablescape",
    categoryLabelEn: "Tablescape",
    aspectRatio: "3 / 4",
    desc: "Tablescape nghệ thuật với hoa tươi rực rỡ, khay cold cut phô mai hảo hạng và ly vang pha lê.",
    descEn: "Artistic tablescape featuring fresh vibrant blooms, artisan cheese charcuterie board, and crystal glasses.",
  },
  {
    id: 4,
    src: "/images/10.jpg",
    alt: "Nến Chai Sáp Chảy Tự Nhiên Bên Hoa Loa Kèn Trắng",
    title: "Nến Sáp Mộc Mạc & Hoa Tươi",
    titleEn: "Rustic Candlelight & Fresh Lilies",
    category: "tablescape",
    categoryLabel: "Bàn Tiệc Tablescape",
    categoryLabelEn: "Tablescape",
    aspectRatio: "2 / 3",
    desc: "Ánh nến sáp tự nhiên cùng hoa tươi thanh tao đưa nhịp sống chậm lại trong từng ngụm vang.",
    descEn: "Natural dripping candle wax beside fresh white lilies, setting an unhurried, intimate pace.",
  },
  {
    id: 5,
    src: "/images/1791444307745_8243178211297854059_8243178211297854059_8a09c2d9a895ad0ede8a13193d959fb5.jpg",
    alt: "Toàn Cảnh Bàn Tiệc Hoa Nến Vang Hè Về Đêm",
    title: "Toàn Cảnh Dạ Tiệc Vang Hè",
    titleEn: "Evening Tablescape Panorama",
    category: "tablescape",
    categoryLabel: "Bàn Tiệc Tablescape",
    categoryLabelEn: "Tablescape",
    aspectRatio: "3 / 4",
    desc: "Khung cảnh bàn tiệc dài lộng lẫy dưới ánh nến và hoa tươi, chuẩn bị chu đáo cho nhóm bạn bè.",
    descEn: "Panoramic celebration table decorated with candle glow and seasonal floral art for memorable gatherings.",
  },
  {
    id: 6,
    src: "/images/gallery-interior.jpg",
    alt: "Băng Ghế Banquette & Bàn Tiệc Ấm Cúng Bên Tranh Nghệ Thuật",
    title: "Băng Ghế Banquette Thư Thái",
    titleEn: "Banquette Nook & Minimalist Art",
    category: "intimate",
    categoryLabel: "Góc Hẹn Thân Mật",
    categoryLabelEn: "Intimate Corners",
    aspectRatio: "2 / 3",
    desc: "Bàn ghế gỗ ấm cúng và tranh nghệ thuật tối giản cho những cuộc trò chuyện sâu lắng.",
    descEn: "Cozy banquette seating and minimalist sketches for relaxed, heartfelt conversations.",
  },
  {
    id: 7,
    src: "/images/3.jpg",
    alt: "Góc Bàn Hẹn Hò Nhỏ Xinh & Tranh Ký Họa Rượu Vang",
    title: "Góc Bàn Đôi & Tranh Ký Họa Vang",
    titleEn: "Romantic Table & Wine Sketches",
    category: "intimate",
    categoryLabel: "Góc Hẹn Thân Mật",
    categoryLabelEn: "Intimate Corners",
    aspectRatio: "2 / 3",
    desc: "Đèn nấm kim loại thanh lịch, bàn gỗ đôi riêng tư cho hai người cùng tranh tường cách điệu.",
    descEn: "Minimalist mushroom lamp, intimate two-person table, and stylized wine wall art.",
  },
  {
    id: 8,
    src: "/images/gallery-shelves.jpg",
    alt: "Tủ Kệ Vang Gỗ Bảo Quản Chuẩn Sommelier 16°C",
    title: "Tủ Kệ Vang Chuẩn Sommelier",
    titleEn: "Cellar Collection at Optimal 16°C",
    category: "bar",
    categoryLabel: "Quầy Bar & Kệ Vang",
    categoryLabelEn: "Bar & Cellar",
    aspectRatio: "2 / 3",
    desc: "Bảo quản các dòng vang Ý, Pháp, Tây Ban Nha ở điều kiện nhiệt độ và độ ẩm tiêu chuẩn.",
    descEn: "Curated European wine selections stored at sommelier-standard temperature and humidity.",
  },
];

export default function HomePage() {
  const { t, lang } = useLanguage();

  const [spaceFilter, setSpaceFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredSpacePhotos =
    spaceFilter === "all"
      ? SPACE_PHOTOS
      : SPACE_PHOTOS.filter((p) => p.category === spaceFilter);

  const ROMAN_NUMS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  const renderSpaceCard = (
    photo: (typeof SPACE_PHOTOS)[number],
    badgeNumber: string
  ) => {
    const photoIdx = filteredSpacePhotos.findIndex((p) => p.id === photo.id);
    const clickIdx = photoIdx >= 0 ? photoIdx : 0;

    return (
      <div
        key={photo.id}
        className={styles.spaceArtCard}
        onClick={() => setLightboxIndex(clickIdx)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setLightboxIndex(clickIdx);
          }
        }}
        aria-label={`Xem ảnh lớn: ${lang !== "vi" ? photo.titleEn : photo.title}`}
      >
        <div
          className={
            photo.aspectRatio === "3 / 4"
              ? styles.spaceArtImgWrap34
              : styles.spaceArtImgWrap
          }
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw"
            className={styles.spaceArtImg}
          />
          <div className={styles.spaceArtAura} />
        </div>

        <div className={styles.spaceArtNumber}>{badgeNumber}</div>

        <div
          className={styles.spaceArtZoomBtn}
          title={lang !== "vi" ? "View Full HD" : "Xem ảnh lớn"}
        >
          <ExpandIcon size={15} />
        </div>

        <div className={styles.spaceArtCaption}>
          <span className={styles.spaceArtCatTag}>
            {lang !== "vi" ? photo.categoryLabelEn : photo.categoryLabel}
          </span>
          <h3 className={styles.spaceArtTitle}>
            {lang !== "vi" ? photo.titleEn : photo.title}
          </h3>
        </div>
      </div>
    );
  };

  // Keyboard navigation for Space Lightbox modal
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? prev === 0
              ? filteredSpacePhotos.length - 1
              : prev - 1
            : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null
            ? prev === filteredSpacePhotos.length - 1
              ? 0
              : prev + 1
            : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredSpacePhotos.length]);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    occasion: "Hẹn hò lãng mạn",
    seatingArea: "Bàn do quán sắp xếp",
    notes: "",
  });

  // Scroll Reveal Observer with blur-to-clear & cascading stagger support
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(
      ".rv, .rv-left, .rv-right, .rv-scale"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [lang]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const faqSchema = generateFAQSchema(FAQS);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Winery",
    "@id": `${siteConfig.url}/#winery`,
    name: "Vang Hè — The Wine Corner",
    alternateName: "Vanghé Nha Trang",
    url: siteConfig.url,
    logo: `${siteConfig.url}/Logo_VH.png`,
    image: `${siteConfig.url}/images/1.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.hotline,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "65 Trịnh Phong, Phường Tân Lập",
      addressLocality: "Nha Trang",
      addressRegion: "Khánh Hòa",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.2392716,
      longitude: 109.1904063,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "17:00",
        closes: "23:30",
      },
    ],
    sameAs: [
      siteConfig.contact.facebook,
      siteConfig.contact.instagram,
      siteConfig.contact.tiktok,
      siteConfig.contact.zalo,
      siteConfig.contact.whatsapp,
      "https://www.google.com/maps/place/Vang+H%C3%A8+-+The+Wine+Corner/@12.2388798,109.1905037,1721m/data=!3m1!1e3!4m12!1m5!8m4!1e2!2s114553681489507271886!3m1!1e1!3m5!1s0x3170670038805a7b:0x49cf297aba1a22d4!8m2!3d12.2392716!4d109.1904063!16s%2Fg%2F11z648jrtc",
    ],
  };

  const googleMapsUrl =
    "https://www.google.com/maps/place/Vang+H%C3%A8+-+The+Wine+Corner/@12.2388798,109.1905037,1721m/data=!3m1!1e3!4m12!1m5!8m4!1e2!2s114553681489507271886!3m1!1e1!3m5!1s0x3170670038805a7b:0x49cf297aba1a22d4!8m2!3d12.2392716!4d109.1904063!16s%2Fg%2F11z648jrtc?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D";


  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* ========================================================
          HERO SECTION — CENTERED, FULL BACKGROUND /images/1.jpg
          WITH CINEMATIC LUXURY GRADIENT OVERLAY & AMBIENT LIGHT ORBS
      ======================================================== */}
      <section className={styles.heroCentered}>
        <div className={styles.heroBgWrapper}>
          <Image
            src="/images/1.jpg"
            alt={t("hero.eyebrow")}
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroCinematicOverlay} />
        </div>

        {/* Floating Luminous Light Orbs */}
        <div className={styles.heroLightOrbContainer} aria-hidden="true">
          <div className={styles.heroLightOrbAmber} />
          <div className={styles.heroLightOrbChampagne} />
          <div className={styles.heroLightOrbWine} />
        </div>

        {/* Ambient Multi-Depth Bobbing Symbols */}
        <AmbientDepthBackground variant="hero" theme="dark" />

        {/* Centered Luxury Content */}
        <div className={`container ${styles.heroCenterContent}`}>
          <div className={styles.heroHeaderBlock}>
            <div className={styles.heroStatusBadge}>
              <span className={styles.livePulseDot} />
              <span className={styles.statusText}>{t("hero.live_badge")}</span>
            </div>

            <span className={styles.heroEyebrow}>{t("hero.eyebrow")}</span>

            <span className={styles.heroScriptFlourish}>{t("script.hero")}</span>

            <h1 className={styles.heroTitleCentered}>
              <span className={styles.heroTitleWhite}>
                {t("hero.title_white")}
              </span>
              <span className={styles.heroTitleGold}>{t("hero.title_gold")}</span>
            </h1>

            <p className={styles.heroTaglineCentered}>{t("hero.tagline")}</p>
          </div>

          <div className={styles.heroCtasCentered}>
            {/* Primary Menu Button */}
            <Link href="/thuc-don" className={styles.btnPrimaryLuxury}>
              <span>{t("hero.cta_menu")}</span>
              <ArrowRightIcon size={16} />
            </Link>

            {/* Reservation Button */}
            <Link href="/#dat-ban" className={styles.btnMenuLuxury}>
              <span>{t("hero.cta_reserve")}</span>
            </Link>

            {/* Space Button */}
            <Link href="/#khong-gian" className={styles.btnVideoLuxury}>
              <WineGlassIcon size={15} />
              <span>{t("hero.cta_space")}</span>
            </Link>

            {/* Maps Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnMapLuxury}
            >
              <MapPinIcon size={16} />
              <span>{t("hero.cta_map")}</span>
            </a>
          </div>

          {/* Mouse Scroll Down Indicator */}
          <a
            href="#gioi-thieu"
            className={styles.heroScrollDown}
            aria-label={t("hero.scroll_down")}
          >
            <span className={styles.scrollMouse}>
              <span className={styles.scrollWheel} />
            </span>
            <span className={styles.scrollText}>{t("hero.scroll_down")}</span>
          </a>
        </div>
      </section>

      {/* ========================================================
          MỤC 1: GIỚI THIỆU GỌN GÀNG (ABOUT US)
          Sửa lại từ Khởi nguồn & Triết lý rườm rà thành súc tích, ấm áp
      ======================================================== */}
      <section id="gioi-thieu" className={styles.storySection}>
        <AmbientDepthBackground variant="story" theme="dark" />
        <div className={styles.candleWarmthHalo} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("about.badge")}</span>
            <span className={styles.titleScriptFlourish}>{t("script.about")}</span>
            <h2 className={styles.sectionTitleLight}>{t("about.title")}</h2>
          </div>

          {/* Poetic Pull Quote Banner */}
          <div className={`${styles.storyQuoteBox} rv rv-scale`}>
            <span className={styles.quoteMark}>“</span>
            <blockquote className={styles.quoteText}>
              {t("about.quote")}
            </blockquote>
            <cite className={styles.quoteAuthor}>
              {t("about.quote_author")}
            </cite>
          </div>

          <div className={styles.storyGrid}>
            <div className={`${styles.storyText} rv rv-left`}>
              <p className={styles.storyLead}>{t("about.lead")}</p>
              <p className={styles.storyBody}>{t("about.body1")}</p>
            </div>

            <div className={`${styles.storyVisual} rv rv-right`}>
              <div className={styles.storySingleSpaceWrap}>
                <Image
                  src="/images/gallery-cozy.jpg"
                  alt="Không gian thưởng vang ấm cúng tại Vang Hè — 65 Trịnh Phong, Nha Trang"
                  fill
                  sizes="(max-width: 960px) 100vw, 48vw"
                  className={styles.storySingleSpaceImg}
                />
                <div className={styles.storySpaceImgBadge}>
                  <SparklesIcon size={14} className={styles.accentBadgeSvg} />
                  <span>Vang Hè · 65 Trịnh Phong, Nha Trang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MỤC 2: KHÔNG GIAN VANGHÉ (UNCROPPED EDITORIAL GALLERY & LIGHTBOX)
          Bảo tồn trọn vẹn bố cục khung hình gốc, sắp xếp hài hòa, xem ảnh phóng to full-screen
      ======================================================== */}
      <section id="khong-gian" className={styles.gallerySection}>
        <AmbientDepthBackground variant="space" theme="espresso" />
        <div className={styles.spaceFloatingLightOrb} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("space.badge")}</span>
            <span className={styles.titleScriptFlourish}>{t("script.space")}</span>
            <h2 className={styles.sectionTitleLight}>{t("space.title")}</h2>
            <p className={styles.sectionSubtitleLight}>{t("space.subtitle")}</p>
          </div>

          {/* Category Filter Tabs */}
          <div className={`${styles.spaceFilterRow} rv`}>
            <button
              type="button"
              onClick={() => setSpaceFilter("all")}
              className={`${styles.spaceFilterBtn} ${spaceFilter === "all" ? styles.spaceFilterBtnActive : ""}`}
            >
              {lang === "ru"
                ? `Все зоны (${SPACE_PHOTOS.length})`
                : lang === "ko"
                ? `전체 공간 (${SPACE_PHOTOS.length})`
                : lang === "zh"
                ? `全部空间 (${SPACE_PHOTOS.length})`
                : lang === "en"
                ? `All Spaces (${SPACE_PHOTOS.length})`
                : `Tất Cả Không Gian (${SPACE_PHOTOS.length})`}
            </button>
            <button
              type="button"
              onClick={() => setSpaceFilter("tablescape")}
              className={`${styles.spaceFilterBtn} ${spaceFilter === "tablescape" ? styles.spaceFilterBtnActive : ""}`}
            >
              {lang === "ru"
                ? "Столы и свечи"
                : lang === "ko"
                ? "테이블 세팅 & 캔들"
                : lang === "zh"
                ? "烛光餐桌与鲜花"
                : lang === "en"
                ? "Tablescape & Candles"
                : "Bàn Tiệc Tablescape & Hoa Nến"}
            </button>
            <button
              type="button"
              onClick={() => setSpaceFilter("bar")}
              className={`${styles.spaceFilterBtn} ${spaceFilter === "bar" ? styles.spaceFilterBtnActive : ""}`}
            >
              {lang === "ru"
                ? "Бар и винный погреб"
                : lang === "ko"
                ? "바 & 와인 셀러"
                : lang === "zh"
                ? "吧台与恒温酒柜"
                : lang === "en"
                ? "Bar & Wine Cellar"
                : "Quầy Bar & Kệ Vang"}
            </button>
            <button
              type="button"
              onClick={() => setSpaceFilter("intimate")}
              className={`${styles.spaceFilterBtn} ${spaceFilter === "intimate" ? styles.spaceFilterBtnActive : ""}`}
            >
              {lang === "ru"
                ? "Уютные уголки"
                : lang === "ko"
                ? "프라이빗 좌석"
                : lang === "zh"
                ? "私密卡座"
                : lang === "en"
                ? "Intimate Nooks"
                : "Góc Hẹn Thân Mật"}
            </button>
          </div>

          {/* Asymmetrical Editorial Cascade Gallery — Preserves 100% Uncropped Ratios */}
          <div className={`${styles.spaceEditorialGrid} rv`}>
            {spaceFilter === "all" ? (
              <>
                {/* Column 1: Tablescape Hero, Intimate Couple Table, Sommelier Cellar */}
                <div className={styles.spaceCol}>
                  {renderSpaceCard(SPACE_PHOTOS[2], "I")}
                  {renderSpaceCard(SPACE_PHOTOS[6], "IV")}
                  {renderSpaceCard(SPACE_PHOTOS[7], "VII")}
                </div>

                {/* Column 2 (Offset downward 48px): Welcome Bar, Sommelier Quote, Candlelight */}
                <div className={styles.spaceCol}>
                  {renderSpaceCard(SPACE_PHOTOS[0], "II")}
                  <div className={styles.spaceQuoteCard}>
                    <span className={styles.spaceQuoteIcon}>🍷</span>
                    <blockquote className={styles.spaceQuoteText}>
                      {lang === "ru"
                        ? "“Тепло натурального дерева и мастерство сомелье — камерная атмосфера для душевных бесед.”"
                        : lang === "ko"
                        ? "“원목의 따스함과 소믈리에의 전문성이 만나는 곳 — 소중한 사람들과의 진솔한 대화를 위한 아늑한 안식처.”"
                        : lang === "zh"
                        ? "“温润原木与专业侍酒相得益彰 — 为每一段走心畅谈构筑的微醺秘境。”"
                        : lang === "en"
                        ? "“Where rustic wood warmth meets sommelier finesse — an intimate sanctuary for heartfelt conversations.”"
                        : "“Nơi nét mộc mạc giao thoa cùng chuẩn mực vang Sommelier — góc trú ẩn ấm êm cho từng cuộc chuyện trò.”"}
                    </blockquote>
                    <cite className={styles.spaceQuoteAuthor}>— VANG HÈ · NHA TRANG</cite>
                  </div>
                  {renderSpaceCard(SPACE_PHOTOS[3], "V")}
                </div>

                {/* Column 3 (Offset downward 24px): Wine Shelf & Stemware, Evening Panorama, Banquette */}
                <div className={styles.spaceCol}>
                  {renderSpaceCard(SPACE_PHOTOS[1], "III")}
                  {renderSpaceCard(SPACE_PHOTOS[4], "VI")}
                  {renderSpaceCard(SPACE_PHOTOS[5], "VIII")}
                </div>
              </>
            ) : (
              <>
                {/* Dynamically distributed columns when filtered */}
                <div className={styles.spaceCol}>
                  {filteredSpacePhotos
                    .filter((_, i) => i % 3 === 0)
                    .map((photo, i) =>
                      renderSpaceCard(
                        photo,
                        ROMAN_NUMS[filteredSpacePhotos.findIndex((p) => p.id === photo.id)] || `${i + 1}`
                      )
                    )}
                </div>
                <div className={styles.spaceCol}>
                  {filteredSpacePhotos
                    .filter((_, i) => i % 3 === 1)
                    .map((photo, i) =>
                      renderSpaceCard(
                        photo,
                        ROMAN_NUMS[filteredSpacePhotos.findIndex((p) => p.id === photo.id)] || `${i + 1}`
                      )
                    )}
                </div>
                <div className={styles.spaceCol}>
                  {filteredSpacePhotos
                    .filter((_, i) => i % 3 === 2)
                    .map((photo, i) =>
                      renderSpaceCard(
                        photo,
                        ROMAN_NUMS[filteredSpacePhotos.findIndex((p) => p.id === photo.id)] || `${i + 1}`
                      )
                    )}
                </div>
              </>
            )}
          </div>

          {/* Space Experience CTA Banner */}
          <div className={`${styles.spaceCtaBanner} rv`}>
            <div className={styles.spaceCtaBannerLeft}>
              <span className={styles.spaceCtaBadge}>
                {lang === "ru"
                  ? "ПРИВИЛЕГИИ ГОСТЕЙ"
                  : lang === "ko"
                  ? "VIP 고객 서비스"
                  : lang === "zh"
                  ? "贵宾尊享礼遇"
                  : lang === "en"
                  ? "EXCLUSIVE HOSPITALITY"
                  : "TIẾP ĐÓN CHU ĐÁO"}
              </span>
              <h3 className={styles.spaceCtaTitle}>
                {lang === "ru"
                  ? "Забронируйте заранее для лучшей атмосферы"
                  : lang === "ko"
                  ? "가장 아늑한 자리를 위해 미리 예약해 주세요"
                  : lang === "zh"
                  ? "提前预订以享最佳赏味环境"
                  : lang === "en"
                  ? "Reserve In Advance For The Best Ambiance"
                  : "Đặt Bàn Trước Để Có Vị Trí Thưởng Vang Ấm Cúng Nhất"}
              </h3>
              <p className={styles.spaceCtaSubtitle}>
                {lang === "ru"
                  ? "Мы заранее украсим стол живыми цветами и охладим ваше вино до идеальной температуры."
                  : lang === "ko"
                  ? "방문 전 생화 장식과 함께 원하시는 와인을 가장 맛있는 온도로 칠링해 준비합니다."
                  : lang === "zh"
                  ? "我们将在您抵达前备好当季鲜花桌花，并将您喜爱的佳酿冰镇至最佳温度。"
                  : lang === "en"
                  ? "We prepare your table with fresh seasonal blooms and chill your preferred vintage prior to arrival."
                  : "Vang Hè sẽ ướp lạnh sẵn chai vang yêu thích và trang trí hoa tươi, nến ấm chu đáo trước giờ đón tiếp."}
              </p>
            </div>

            <div className={styles.spaceCtaActions}>
              <Link href="/#dat-ban" className={styles.spaceCtaBtnReserve}>
                <span>
                  {lang === "ru"
                    ? "Забронировать ↗"
                    : lang === "ko"
                    ? "테이블 예약 ↗"
                    : lang === "zh"
                    ? "预订座位 ↗"
                    : lang === "en"
                    ? "Reserve A Table ↗"
                    : "Đặt Bàn Trải Nghiệm ↗"}
                </span>
              </Link>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className={styles.spaceCtaBtnHotline}
                title={`Hotline: ${siteConfig.contact.hotlineDisplay}`}
              >
                <PhoneIcon size={15} />
                <span>Hotline: {siteConfig.contact.hotlineDisplay}</span>
              </a>
              <a
                href={siteConfig.contact.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.spaceCtaBtnZalo}
                title="Nhắn tin Zalo Sommelier"
              >
                <ZaloIcon size={15} />
                <span>Chat Zalo: 0868 833 059 ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Full-Screen Lightbox Modal (Uncropped, Complete HD Photo Display) */}
        {lightboxIndex !== null && filteredSpacePhotos[lightboxIndex] && (
          <div
            className={styles.lightboxBackdrop}
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Xem ảnh không gian Vang Hè phóng to"
          >
            {/* Close Button */}
            <button
              type="button"
              className={styles.lightboxCloseBtn}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              aria-label="Đóng xem ảnh"
            >
              <XIcon size={22} />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              className={`${styles.lightboxNavBtn} ${styles.lightboxNavPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? prev === 0
                      ? filteredSpacePhotos.length - 1
                      : prev - 1
                    : null
                );
              }}
              aria-label="Ảnh trước đó"
            >
              <ChevronLeftIcon size={24} />
            </button>

            {/* Main Modal Image Container */}
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightboxImageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={filteredSpacePhotos[lightboxIndex].src}
                  alt={filteredSpacePhotos[lightboxIndex].alt}
                  className={styles.lightboxImage}
                />
              </div>

              <div className={styles.lightboxFooter}>
                <div className={styles.lightboxCounter}>
                  {lang !== "vi"
                    ? `Photo ${lightboxIndex + 1} of ${filteredSpacePhotos.length} · ${filteredSpacePhotos[lightboxIndex].categoryLabelEn}`
                    : `Ảnh ${lightboxIndex + 1} / ${filteredSpacePhotos.length} · ${filteredSpacePhotos[lightboxIndex].categoryLabel}`}
                </div>
                <h4 className={styles.lightboxTitle}>
                  {lang !== "vi"
                    ? filteredSpacePhotos[lightboxIndex].titleEn
                    : filteredSpacePhotos[lightboxIndex].title}
                </h4>
                <p className={styles.lightboxDesc}>
                  {lang !== "vi"
                    ? filteredSpacePhotos[lightboxIndex].descEn
                    : filteredSpacePhotos[lightboxIndex].desc}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              className={`${styles.lightboxNavBtn} ${styles.lightboxNavNext}`}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? prev === filteredSpacePhotos.length - 1
                      ? 0
                      : prev + 1
                    : null
                );
              }}
              aria-label="Ảnh tiếp theo"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
        )}
      </section>

      {/* ========================================================
          MỤC 4: ĐIỂM HẸN NHA TRANG & BẢN ĐỒ GOOGLE MAPS
      ======================================================== */}
      <section id="diem-hen" className={styles.locationSection}>
        <div className="container">
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("loc.badge")}</span>
            <span className={styles.titleScriptFlourish}>{t("script.location")}</span>
            <h2 className={styles.sectionTitleLight}>{t("loc.title")}</h2>
            <p className={styles.sectionSubtitleLight}>{t("loc.subtitle")}</p>
          </div>

          <div className={styles.locationInfoGrid}>
            <div className={`${styles.locCard} rv rv-d1`}>
              <div className={styles.locCardHeader}>
                <ClockIcon size={18} className={styles.locSvgGold} />
                <span className={styles.locLabel}>{t("loc.c1_label")}</span>
              </div>
              <p className={styles.locValue}>{t("loc.c1_val")}</p>
              <span className={styles.locSub}>{t("loc.c1_sub")}</span>
            </div>

            <div className={`${styles.locCard} rv rv-d2`}>
              <div className={styles.locCardHeader}>
                <MapPinIcon size={18} className={styles.locSvgGold} />
                <span className={styles.locLabel}>{t("loc.c2_label")}</span>
              </div>
              <p className={styles.locValue}>{t("loc.c2_val")}</p>
              <span className={styles.locSub}>{t("loc.c2_sub")}</span>
            </div>

            <div className={`${styles.locCard} rv rv-d3`}>
              <div className={styles.locCardHeader}>
                <PhoneIcon size={18} className={styles.locSvgGold} />
                <span className={styles.locLabel}>{t("loc.c3_label")}</span>
              </div>
              <p className={styles.locValue}>{t("loc.c3_val")}</p>
              <span className={styles.locSub}>{t("loc.c3_sub")}</span>
            </div>

            <div className={`${styles.locCard} rv rv-d4`}>
              <div className={styles.locCardHeader}>
                <WineGlassIcon size={18} className={styles.locSvgGold} />
                <span className={styles.locLabel}>{t("loc.c4_label")}</span>
              </div>
              <p className={styles.locValue}>{t("loc.c4_val")}</p>
              <span className={styles.locSub}>{t("loc.c4_sub")}</span>
            </div>
          </div>

          {/* Interactive Google Map Box */}
          <div className={`${styles.mapBox} rv rv-scale`}>
            <div className={styles.mapTopBar}>
              <div className={styles.mapMeta}>
                <MapPinIcon size={20} className={styles.mapSvg} />
                <div>
                  <strong>{t("loc.map_title")}</strong>
                  <p>{t("loc.map_addr")}</p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapOpenBtn}
              >
                <span>{t("loc.map_btn")}</span>
                <ArrowRightIcon size={15} />
              </a>
            </div>

            <div className={styles.mapIframeWrap}>
              <iframe
                title="Bản đồ chỉ đường đến Vang Hè The Wine Corner Nha Trang"
                src="https://maps.google.com/maps?q=12.2392716,109.1904063+(Vang+H%C3%A8+-+The+Wine+Corner)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapFrame}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MỤC 5: CẢM NHẬN & ĐÁNH GIÁ THỰC KHÁCH (FEEDBACK)
      ======================================================== */}
      <section id="danh-gia" className={styles.feedbackSection}>
        <div className={styles.feedbackAura} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("feedback.badge")}</span>
            <span className={styles.titleScriptFlourish}>{t("script.feedback")}</span>
            <h2 className={styles.sectionTitleLight}>{t("feedback.title")}</h2>
            <p className={styles.sectionSubtitleLight}>{t("feedback.subtitle")}</p>
          </div>

          <div className={styles.feedbackGrid}>
            {/* Feedback 1 */}
            <div className={`${styles.feedbackCard} rv rv-d1`}>
              <div>
                <div className={styles.feedbackCardHeader}>
                  <div className={styles.feedbackStars} aria-label="5 trên 5 sao">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={15} />
                    ))}
                  </div>
                  <div className={styles.feedbackQuoteIcon}>
                    <QuoteIcon size={18} />
                  </div>
                </div>

                <p className={styles.feedbackText}>
                  “{t("feedback.c1_comment")}”
                </p>
              </div>

              <div className={styles.feedbackAuthorWrap}>
                <div className={styles.feedbackAvatar}>HY</div>
                <div className={styles.feedbackAuthorMeta}>
                  <div className={styles.feedbackAuthorName}>{t("feedback.c1_name")}</div>
                  <div className={styles.feedbackAuthorRole}>{t("feedback.c1_role")}</div>
                  <span className={styles.feedbackPill}>✓ {t("feedback.c1_tag")}</span>
                </div>
              </div>
            </div>

            {/* Feedback 2 */}
            <div className={`${styles.feedbackCard} rv rv-d2`}>
              <div>
                <div className={styles.feedbackCardHeader}>
                  <div className={styles.feedbackStars} aria-label="5 trên 5 sao">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={15} />
                    ))}
                  </div>
                  <div className={styles.feedbackQuoteIcon}>
                    <QuoteIcon size={18} />
                  </div>
                </div>

                <p className={styles.feedbackText}>
                  “{t("feedback.c2_comment")}”
                </p>
              </div>

              <div className={styles.feedbackAuthorWrap}>
                <div className={styles.feedbackAvatar}>MT</div>
                <div className={styles.feedbackAuthorMeta}>
                  <div className={styles.feedbackAuthorName}>{t("feedback.c2_name")}</div>
                  <div className={styles.feedbackAuthorRole}>{t("feedback.c2_role")}</div>
                  <span className={styles.feedbackPill}>✓ {t("feedback.c2_tag")}</span>
                </div>
              </div>
            </div>

            {/* Feedback 3 */}
            <div className={`${styles.feedbackCard} rv rv-d3`}>
              <div>
                <div className={styles.feedbackCardHeader}>
                  <div className={styles.feedbackStars} aria-label="5 trên 5 sao">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={15} />
                    ))}
                  </div>
                  <div className={styles.feedbackQuoteIcon}>
                    <QuoteIcon size={18} />
                  </div>
                </div>

                <p className={styles.feedbackText}>
                  “{t("feedback.c3_comment")}”
                </p>
              </div>

              <div className={styles.feedbackAuthorWrap}>
                <div className={styles.feedbackAvatar}>EA</div>
                <div className={styles.feedbackAuthorMeta}>
                  <div className={styles.feedbackAuthorName}>{t("feedback.c3_name")}</div>
                  <div className={styles.feedbackAuthorRole}>{t("feedback.c3_role")}</div>
                  <span className={styles.feedbackPill}>✓ {t("feedback.c3_tag")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.feedbackSummaryStrip} rv`}>
            <span style={{ color: "#E5A955" }}>✦</span>
            <span className={styles.feedbackSummaryText}>
              {t("feedback.rating_summary")}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          MỤC 6: ĐẶT BÀN & TRẢI NGHIỆM THƯỞNG VANG
      ======================================================== */}
      <section id="dat-ban" className={styles.reservationSection}>
        <AmbientDepthBackground variant="reservation" theme="dark" />
        <div className={styles.vipHaloAura} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("res.badge")}</span>
            <span className={styles.titleScriptFlourish}>{t("script.reservation")}</span>
            <h2 className={styles.sectionTitleLight}>{t("res.title")}</h2>
            <p className={styles.sectionSubtitleLight}>{t("res.subtitle")}</p>
          </div>

          <div className={styles.reservationGrid}>
            <div className={`${styles.resFormWrapper} rv rv-left`}>
              {formSubmitted ? (
                <div className={styles.successState}>
                  <CheckCircleIcon size={54} className={styles.successSvg} />
                  <h3>{t("res.success_title")}</h3>
                  <p>
                    {lang !== "vi" ? (
                      <>
                        Thank you <strong>{formData.name}</strong>. A Vang Hè
                        sommelier will contact you at{" "}
                        <strong>{formData.phone}</strong> within 15 minutes to
                        confirm your table for{" "}
                        <strong>{formData.date || "tonight"}</strong> at{" "}
                        <strong>{formData.time}</strong>.
                      </>
                    ) : (
                      <>
                        Cảm ơn bạn <strong>{formData.name}</strong>. Sommelier
                        của Vang Hè sẽ liên hệ qua số điện thoại{" "}
                        <strong>{formData.phone}</strong> trong vòng 15 phút để
                        xác nhận bàn tiệc cho ngày{" "}
                        <strong>{formData.date || "hôm nay"}</strong> lúc{" "}
                        <strong>{formData.time}</strong>.
                      </>
                    )}
                  </p>
                  <p className={styles.successHotline}>
                    {t("res.success_hotline")}{" "}
                    <a
                      href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                    >
                      {siteConfig.contact.hotlineDisplay}
                    </a>
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className={styles.btnPrimaryLuxury}
                    style={{ marginTop: "1.25rem" }}
                  >
                    <span>{t("res.success_btn")}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.resForm}>
                  <div className={styles.formTwoCols}>
                    <div className={styles.formItem}>
                      <label htmlFor="name">{t("res.label_name")}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={
                          lang !== "vi" ? "John Doe" : "Nguyễn Văn A"
                        }
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formItem}>
                      <label htmlFor="phone">{t("res.label_phone")}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="0866 817 884"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formThreeCols}>
                    <div className={styles.formItem}>
                      <label htmlFor="date">{t("res.label_date")}</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formItem}>
                      <label htmlFor="time">{t("res.label_time")}</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                      >
                        <option value="17:00">
                          {lang !== "vi"
                            ? "17:00 — Early Sunset"
                            : "17:00 — Hoàng hôn sớm"}
                        </option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">
                          {lang !== "vi"
                            ? "18:00 — Golden Hour"
                            : "18:00 — Giờ vàng ấm áp"}
                        </option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">
                          {lang !== "vi"
                            ? "19:00 — Cozy Evening"
                            : "19:00 — Giờ tối ấm cúng"}
                        </option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">
                          {lang !== "vi"
                            ? "20:00 — Deep Night"
                            : "20:00 — Đêm sâu lắng"}
                        </option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">
                          {lang !== "vi"
                            ? "21:00 — Late Night Chats"
                            : "21:00 — Trò chuyện khuya"}
                        </option>
                        <option value="21:30">21:30</option>
                      </select>
                    </div>

                    <div className={styles.formItem}>
                      <label htmlFor="guests">{t("res.label_guests")}</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                      >
                        <option value="1-2">
                          {lang !== "vi"
                            ? "1 - 2 guests (Cozy couple)"
                            : "1 - 2 người (Bàn đôi ấm cúng)"}
                        </option>
                        <option value="3-4">
                          {lang !== "vi"
                            ? "3 - 4 guests (Small group)"
                            : "3 - 4 người (Nhóm nhỏ)"}
                        </option>
                        <option value="5-8">
                          {lang !== "vi"
                            ? "5 - 8 guests (Intimate banquet)"
                            : "5 - 8 người (Bàn tiệc thân mật)"}
                        </option>
                        <option value="9+">
                          {lang !== "vi"
                            ? "8+ guests (Private VIP area)"
                            : "Trên 8 người (Đặt trọn khu vực VIP)"}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formItem}>
                    <label htmlFor="occasion">
                      {t("res.label_occasion")}
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                    >
                      <option value="Hẹn hò lãng mạn">
                        {lang !== "vi"
                          ? "Romantic Date"
                          : "Hẹn hò lãng mạn"}
                      </option>
                      <option value="Kỷ niệm ngày đặc biệt">
                        {lang !== "vi"
                          ? "Anniversary / Birthday Celebration"
                          : "Kỷ niệm ngày đặc biệt / Sinh nhật"}
                      </option>
                      <option value="Gặp gỡ bạn bè thân mật">
                        {lang !== "vi"
                          ? "Intimate Gathering with Friends"
                          : "Gặp gỡ bạn bè thân mật"}
                      </option>
                      <option value="Tiếp đãi đối tác">
                        {lang !== "vi"
                          ? "Business & Partner Dinner"
                          : "Tiếp đãi đối tác / Công việc"}
                      </option>
                      <option value="Thưởng vang một mình">
                        {lang !== "vi"
                          ? "Solo Wine Tasting Relaxation"
                          : "Thư giãn thưởng vang một mình"}
                      </option>
                    </select>
                  </div>

                  <div className={styles.formItem}>
                    <label htmlFor="notes">{t("res.label_notes")}</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      placeholder={t("res.notes_placeholder")}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.btnSubmitReservation}
                  >
                    <span>{t("res.submit_btn")}</span>
                    <ArrowRightIcon size={16} />
                  </button>

                  <p className={styles.resMiniNote}>
                    {lang === "ru"
                      ? "✓ Бесплатная бронь · Сомелье подтвердит стол в течение 15 минут"
                      : lang === "ko"
                      ? "✓ 예약 무료 · 15분 이내로 확정 안내 전화를 드립니다"
                      : lang === "zh"
                      ? "✓ 免费预订 · 侍酒师将在15分钟内致电确认"
                      : lang === "en"
                      ? "✓ Free booking · Sommelier will call to confirm in 15 mins"
                      : "✓ Đặt bàn miễn phí · Sommelier sẽ gọi điện xác nhận trong 15 phút"}
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar Direct Hotline */}
            <div className={`${styles.resSidebar} rv rv-right`}>
              <div className={styles.resSidebarBox}>
                <div className={styles.sidebarBadge}>
                  <SparklesIcon size={13} className={styles.sidebarBadgeIcon} />
                  <span>{t("res.sidebar_badge")}</span>
                </div>

                <h3 className={styles.resSidebarTitle}>
                  {t("res.sidebar_title")}
                </h3>
                <p className={styles.resSidebarDesc}>{t("res.sidebar_desc")}</p>

                <a
                  href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                  className={styles.resHotlineLink}
                >
                  <div className={styles.hotlineIconCircle}>
                    <PhoneIcon size={18} />
                  </div>
                  <div className={styles.hotlineTextGroup}>
                    <span className={styles.hotlineSubLabel}>
                      {t("res.hotline_sub")}
                    </span>
                    <span className={styles.hotlineNumber}>{siteConfig.contact.hotlineDisplay}</span>
                  </div>
                </a>

                {/* 2-Column Direct Messaging */}
                <div className={styles.resChatRow}>
                  <a
                    href={siteConfig.contact.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resSidebarZaloBtn}
                    title="Nhắn Zalo Sommelier"
                  >
                    <ZaloIcon size={16} />
                    <span>Chat Zalo</span>
                  </a>
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resSidebarWhatsAppBtn}
                    title="WhatsApp / KakaoTalk Sommelier"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp / Kakao</span>
                  </a>
                </div>

                <div className={styles.sidebarFooterNote}>
                  <span>● {t("res.sidebar_note")} · 65 Trịnh Phong, Nha Trang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
