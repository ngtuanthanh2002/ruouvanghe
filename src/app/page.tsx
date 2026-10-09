"use client";

import React, { useState, useEffect, useRef } from "react";
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
  PlayIcon,
  PauseIcon,
  Volume2Icon,
  VolumeXIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@/components/ui/Icons";
import AmbientDepthBackground from "@/components/ui/AmbientDepthBackground";

export default function HomePage() {
  const { t, lang } = useLanguage();

  const [currentVideoIdx, setCurrentVideoIdx] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    occasion: "Hẹn hò lãng mạn",
    notes: "",
  });

  // Localized Video Playlist
  const videoPlaylist = [
    {
      id: "atmosphere",
      title: t("film.tab1_title"),
      tag: t("film.tab1_tag"),
      desc: t("film.tab1_desc"),
      src: "/videos/vanghe-atmosphere.mp4",
    },
    {
      id: "tablescape",
      title: t("film.tab2_title"),
      tag: t("film.tab2_tag"),
      desc: t("film.tab2_desc"),
      src: "/videos/vanghe-tablescape.mp4",
    },
    {
      id: "moments",
      title: t("film.tab3_title"),
      tag: t("film.tab3_tag"),
      desc: t("film.tab3_desc"),
      src: "/videos/vanghe-moments.mp4",
    },
  ];

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

  const handleSelectVideo = (idx: number) => {
    setCurrentVideoIdx(idx);
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

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
        opens: "18:00",
        closes: "23:30",
      },
    ],
    sameAs: [
      siteConfig.contact.facebook,
      siteConfig.contact.instagram,
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
        {/* Full-bleed background image with subtle zoom */}
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

        {/* Floating Luminous Light Orbs (Hình tròn mờ, sáng, trôi nổi chuyển động) */}
        <div className={styles.heroLightOrbContainer} aria-hidden="true">
          <div className={styles.heroLightOrbAmber} />
          <div className={styles.heroLightOrbChampagne} />
          <div className={styles.heroLightOrbWine} />
        </div>

        {/* Ambient Multi-Depth Bobbing Symbols (Ly vang pha lê, sao kim 4 cánh, giọt vang nhấp nhô liên tục tạo chiều sâu) */}
        <AmbientDepthBackground variant="hero" theme="dark" />

        {/* Centered Luxury Content */}
        <div className={`container ${styles.heroCenterContent}`}>
          <div className={styles.heroHeaderBlock}>
            <div className={styles.heroStatusBadge}>
              <span className={styles.livePulseDot} />
              <span className={styles.statusText}>
                {lang === "en" ? (
                  <>
                    Open Tonight: <strong>18:00 — 23:30</strong> · 65 Trinh Phong,
                    Nha Trang
                  </>
                ) : (
                  <>
                    Mở cửa mỗi tối: <strong>18:00 — 23:30</strong> · 65 Trịnh
                    Phong, Nha Trang
                  </>
                )}
              </span>
            </div>

            <span className={styles.heroEyebrow}>{t("hero.eyebrow")}</span>

            <h1 className={styles.heroTitleCentered}>
              <span className={styles.heroTitleWhite}>
                {t("hero.title_white")}
              </span>
              <span className={styles.heroTitleGold}>{t("hero.title_gold")}</span>
            </h1>

            <p className={styles.heroTaglineCentered}>{t("hero.tagline")}</p>
          </div>

          <div className={styles.heroCtasCentered}>
            <Link href="/#khong-gian" className={styles.btnPrimaryLuxury}>
              <span>{t("hero.cta_space")}</span>
              <ArrowRightIcon size={16} />
            </Link>

            <a
              href={siteConfig.contact.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnMenuLuxury}
            >
              <span>{lang === "en" ? "Explore Menu ↗" : "Mở Thực Đơn & Menu ↗"}</span>
            </a>

            <Link href="/#video" className={styles.btnVideoLuxury}>
              <span className={styles.playIconCircle}>
                <PlayIcon size={12} />
              </span>
              <span>{t("hero.cta_film")}</span>
            </Link>

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

          {/* Elegant Mouse Scroll Down Indicator */}
          <a
            href="#cau-chuyen"
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
          CHƯƠNG I: KHỞI NGUỒN & TRIẾT LÝ (EMOTIONAL DESIGN)
      ======================================================== */}
      <section id="cau-chuyen" className={styles.storySection}>
        <AmbientDepthBackground variant="story" theme="light" />
        <div className={styles.candleWarmthHalo} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeader} rv`}>
            <span className={styles.chapterBadge}>{t("story.badge")}</span>
            <h2 className={styles.sectionTitle}>{t("story.title")}</h2>
          </div>

          {/* Poetic Pull Quote Banner */}
          <div className={`${styles.storyQuoteBox} rv rv-scale`}>
            <span className={styles.quoteMark}>“</span>
            <blockquote className={styles.quoteText}>
              {t("story.quote")}
            </blockquote>
            <cite className={styles.quoteAuthor}>
              {t("story.quote_author")}
            </cite>
          </div>

          <div className={styles.storyGrid}>
            <div className={`${styles.storyText} rv rv-left`}>
              <p className={styles.storyLead}>{t("story.lead")}</p>
              <p className={styles.storyBody}>{t("story.body1")}</p>
              <p className={styles.storyBody}>{t("story.body2")}</p>

              {/* 4 Sensory Pillars */}
              <div className={styles.sensoryGrid}>
                <div className={`${styles.sensoryItem} rv rv-d1`}>
                  <div className={styles.sensoryNum}>01</div>
                  <div>
                    <strong>{t("story.p1_title")}</strong>
                    <p>{t("story.p1_desc")}</p>
                  </div>
                </div>
                <div className={`${styles.sensoryItem} rv rv-d2`}>
                  <div className={styles.sensoryNum}>02</div>
                  <div>
                    <strong>{t("story.p2_title")}</strong>
                    <p>{t("story.p2_desc")}</p>
                  </div>
                </div>
                <div className={`${styles.sensoryItem} rv rv-d3`}>
                  <div className={styles.sensoryNum}>03</div>
                  <div>
                    <strong>{t("story.p3_title")}</strong>
                    <p>{t("story.p3_desc")}</p>
                  </div>
                </div>
                <div className={`${styles.sensoryItem} rv rv-d4`}>
                  <div className={styles.sensoryNum}>04</div>
                  <div>
                    <strong>{t("story.p4_title")}</strong>
                    <p>{t("story.p4_desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.storyVisual} rv rv-right`}>
              <div className={styles.storyCollageFrame}>
                {/* Main Large Photo */}
                <div className={styles.storyImgMainWrap}>
                  <Image
                    src="/images/story-facade.jpg"
                    alt={t("story.img_tag")}
                    width={560}
                    height={560}
                    className={styles.storyImgMain}
                  />
                  <div className={styles.storyImgTag}>
                    <strong>{t("story.img_tag")}</strong>
                    <span>{t("story.img_sub")}</span>
                  </div>
                </div>

                {/* Overlapping Secondary Photo */}
                <div className={styles.storyImgAccentWrap}>
                  <Image
                    src="/images/3.jpg"
                    alt={t("story.accent_badge")}
                    width={260}
                    height={260}
                    className={styles.storyImgAccent}
                  />
                  <div className={styles.accentBadge}>
                    <SparklesIcon size={14} className={styles.accentBadgeSvg} />
                    <span>{t("story.accent_badge")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CHƯƠNG II: BÀN TIỆC & TABLESCAPE (UNCLIPPED PHOTOS)
      ======================================================== */}
      <section id="ban-tiec" className={styles.tablescapeSection}>
        <AmbientDepthBackground variant="tablescape" theme="espresso" />
        <div className={styles.tablescapeShimmerAura} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>
              {t("tablescape.badge")}
            </span>
            <h2 className={styles.sectionTitleLight}>
              {t("tablescape.title")}
            </h2>
            <p className={styles.sectionSubtitleLight}>
              {t("tablescape.subtitle")}
            </p>
            <div className={styles.tablescapeHeaderAction}>
              <a
                href={siteConfig.contact.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnTablescapeMenu}
              >
                <span>{lang === "en" ? "Explore Full Menu & Wine List ↗" : "Mở Thực Đơn & Menu Vang (Drive) ↗"}</span>
              </a>
            </div>
          </div>

          <div className={styles.tablescapeGrid}>
            <div className={`${styles.tablescapeCard} rv rv-d1`}>
              <div className={styles.cardImgFrame}>
                <Image
                  src="/images/tablescape-main.jpg"
                  alt={t("tablescape.c1_title")}
                  width={560}
                  height={420}
                  className={styles.cardPhoto}
                />
                <span className={styles.cardNumberBadge}>01</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t("tablescape.c1_title")}</h3>
                <p className={styles.cardDesc}>{t("tablescape.c1_desc")}</p>
                <div className={styles.cardPillRow}>
                  <span className={styles.cardPill}>
                    {t("tablescape.c1_tag1")}
                  </span>
                  <span className={styles.cardPill}>
                    {t("tablescape.c1_tag2")}
                  </span>
                </div>
              </div>
            </div>

            <div className={`${styles.tablescapeCard} rv rv-d2`}>
              <div className={styles.cardImgFrame}>
                <Image
                  src="/images/coldcut-glass.jpg"
                  alt={t("tablescape.c2_title")}
                  width={560}
                  height={420}
                  className={styles.cardPhoto}
                />
                <span className={styles.cardNumberBadge}>02</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t("tablescape.c2_title")}</h3>
                <p className={styles.cardDesc}>{t("tablescape.c2_desc")}</p>
                <div className={styles.cardPillRow}>
                  <span className={styles.cardPill}>
                    {t("tablescape.c2_tag1")}
                  </span>
                  <span className={styles.cardPill}>
                    {t("tablescape.c2_tag2")}
                  </span>
                </div>
              </div>
            </div>

            <div className={`${styles.tablescapeCard} rv rv-d3`}>
              <div className={styles.cardImgFrame}>
                <Image
                  src="/images/gallery-table.jpg"
                  alt={t("tablescape.c3_title")}
                  width={560}
                  height={420}
                  className={styles.cardPhoto}
                />
                <span className={styles.cardNumberBadge}>03</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t("tablescape.c3_title")}</h3>
                <p className={styles.cardDesc}>{t("tablescape.c3_desc")}</p>
                <div className={styles.cardPillRow}>
                  <span className={styles.cardPill}>
                    {t("tablescape.c3_tag1")}
                  </span>
                  <span className={styles.cardPill}>
                    {t("tablescape.c3_tag2")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Callout Banner */}
          <div className={`${styles.menuCalloutBanner} rv rv-scale`}>
            <div className={styles.menuCalloutInfo}>
              <span className={styles.menuCalloutBadge}>
                {lang === "en" ? "FULL MENU & WINE LIST" : "THỰC ĐƠN & MENU VANG"}
              </span>
              <h4 className={styles.menuCalloutTitle}>
                {lang === "en"
                  ? "Explore All Vintages, Cold Cut Platters & Tasting Sets"
                  : "Khám Phá Toàn Bộ Menu Vang, Khay Cold Cut & Bàn Tiệc"}
              </h4>
              <p className={styles.menuCalloutDesc}>
                {lang === "en"
                  ? "Browse the complete selection of cellared wines, cheese boards, and tablescape offerings on Google Drive."
                  : "Mở menu chi tiết trên Google Drive với đầy đủ danh mục rượu vang theo quốc gia, các set khai vị và giá dịch vụ."}
              </p>
            </div>
            <a
              href={siteConfig.contact.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuCalloutBtn}
            >
              <span>{lang === "en" ? "Open Menu (Google Drive) ↗" : "Mở Menu Vang Hè ↗"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          CHƯƠNG III: KHÔNG GIAN VANGHÉ (MASTER EDITORIAL MOSAIC)
      ======================================================== */}
      <section id="khong-gian" className={styles.gallerySection}>
        <AmbientDepthBackground variant="space" theme="espresso" />
        <div className={styles.spaceFloatingLightOrb} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("space.badge")}</span>
            <h2 className={styles.sectionTitleLight}>{t("space.title")}</h2>
            <p className={styles.sectionSubtitleLight}>{t("space.subtitle")}</p>
          </div>

          {/* Master Space Collage Frame Matching User's Curated Layout */}
          <div className={`${styles.spaceCollageFrame} rv`}>
            {/* Top Row: 3 Columns (Tall Left + Stacked Middle + Stacked Right) */}
            <div className={styles.spaceMosaicTop}>
              {/* Column 1: Tall Card — Quầy Bar & Không Gian Đón Khách */}
              <div
                className={`${styles.spaceCard} ${styles.spaceCardTall} rv rv-left`}
              >
                <Image
                  src="/images/2.jpg"
                  alt={t("space.g1_title")}
                  fill
                  sizes="(max-width: 992px) 100vw, 36vw"
                  className={styles.spacePhoto}
                />
                <div className={styles.spaceCardOverlay}>
                  <span className={styles.spaceCardTag}>
                    {t("space.g1_tag")}
                  </span>
                  <h3 className={styles.spaceCardTitle}>
                    {t("space.g1_title")}
                  </h3>
                  <p className={styles.spaceCardDesc}>{t("space.g1_desc")}</p>
                </div>
              </div>

              {/* Column 2: Stacked 2 Cards */}
              <div className={styles.spaceColStacked}>
                {/* 2.1: Kệ Vang & Ly Pha Lê */}
                <div
                  className={`${styles.spaceCard} ${styles.spaceCardSmall} rv rv-d1`}
                >
                  <Image
                    src="/images/gallery-bar.jpg"
                    alt={t("space.g2_title")}
                    fill
                    sizes="(max-width: 992px) 100vw, 32vw"
                    className={styles.spacePhoto}
                  />
                  <div className={styles.spaceCardOverlay}>
                    <span className={styles.spaceCardTag}>
                      {t("space.g2_tag")}
                    </span>
                    <h3 className={styles.spaceCardTitle}>
                      {t("space.g2_title")}
                    </h3>
                    <p className={styles.spaceCardDesc}>
                      {t("space.g2_desc")}
                    </p>
                  </div>
                </div>

                {/* 2.2: Băng Ghế Banquette & Bàn Tiệc */}
                <div
                  className={`${styles.spaceCard} ${styles.spaceCardSmall} rv rv-d2`}
                >
                  <Image
                    src="/images/gallery-table.jpg"
                    alt={t("space.g3_title")}
                    fill
                    sizes="(max-width: 992px) 100vw, 32vw"
                    className={styles.spacePhoto}
                  />
                  <div className={styles.spaceCardOverlay}>
                    <span className={styles.spaceCardTag}>
                      {t("space.g3_tag")}
                    </span>
                    <h3 className={styles.spaceCardTitle}>
                      {t("space.g3_title")}
                    </h3>
                    <p className={styles.spaceCardDesc}>
                      {t("space.g3_desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 3: Stacked 2 Cards */}
              <div className={styles.spaceColStacked}>
                {/* 3.1: Biển Đồng Vanghé & Góc Check-in */}
                <div
                  className={`${styles.spaceCard} ${styles.spaceCardSmall} rv rv-d2`}
                >
                  <Image
                    src="/images/4.jpg"
                    alt={t("space.g4_title")}
                    fill
                    sizes="(max-width: 992px) 100vw, 32vw"
                    className={styles.spacePhoto}
                  />
                  <div className={styles.spaceCardOverlay}>
                    <span className={styles.spaceCardTag}>
                      {t("space.g4_tag")}
                    </span>
                    <h3 className={styles.spaceCardTitle}>
                      {t("space.g4_title")}
                    </h3>
                    <p className={styles.spaceCardDesc}>
                      {t("space.g4_desc")}
                    </p>
                  </div>
                </div>

                {/* 3.2: Nến Chai Mộc & Bình Hoa Bàn Tiệc */}
                <div
                  className={`${styles.spaceCard} ${styles.spaceCardSmall} rv rv-d3`}
                >
                  <Image
                    src="/images/10.jpg"
                    alt={t("space.g5_title")}
                    fill
                    sizes="(max-width: 992px) 100vw, 32vw"
                    className={styles.spacePhoto}
                  />
                  <div className={styles.spaceCardOverlay}>
                    <span className={styles.spaceCardTag}>
                      {t("space.g5_tag")}
                    </span>
                    <h3 className={styles.spaceCardTitle}>
                      {t("space.g5_title")}
                    </h3>
                    <p className={styles.spaceCardDesc}>
                      {t("space.g5_desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Full-Width Panoramic Tablescape Banner */}
            <div className={`${styles.spaceWideBanner} rv rv-scale`}>
              <Image
                src="/images/1791444307745_8243178211297854059_8243178211297854059_8a09c2d9a895ad0ede8a13193d959fb5.jpg"
                alt={t("space.banner_title")}
                fill
                sizes="100vw"
                className={styles.spacePhoto}
              />
              <div className={styles.spaceBannerOverlay}>
                <div className={styles.spaceBannerBadgeWrap}>
                  <SparklesIcon size={14} className={styles.spaceBannerSvg} />
                  <span className={styles.spaceBannerBadge}>
                    {t("space.banner_badge")}
                  </span>
                </div>
                <h3 className={styles.spaceBannerTitle}>
                  {t("space.banner_title")}
                </h3>
                <p className={styles.spaceBannerDesc}>
                  {t("space.banner_desc")}
                </p>
                <div className={styles.spaceBannerPills}>
                  <span className={styles.spaceBannerPill}>
                    {t("space.banner_tag1")}
                  </span>
                  <span className={styles.spaceBannerPill}>
                    {t("space.banner_tag2")}
                  </span>
                  <span className={styles.spaceBannerPill}>
                    {t("space.banner_tag3")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CHƯƠNG IV: THƯỚC PHIM CẢM XÚC (CINEMATIC PLAYER)
      ======================================================== */}
      <section id="video" className={styles.videoSection}>
        <AmbientDepthBackground variant="video" theme="light" />
        <div className={styles.theaterBeamGlow} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeader} rv`}>
            <span className={styles.chapterBadge}>
              {t("film.badge")}
            </span>
            <h2 className={styles.sectionTitle}>{t("film.title")}</h2>
            <p className={styles.sectionSubtitle}>{t("film.subtitle")}</p>
          </div>

          {/* Video Selector Tabs */}
          <div className={`${styles.videoSelectorTabs} rv rv-scale`}>
            {videoPlaylist.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleSelectVideo(idx)}
                className={`${styles.videoTab} ${
                  currentVideoIdx === idx ? styles.activeVideoTab : ""
                }`}
              >
                <span className={styles.videoTabTag}>{item.tag}</span>
                <strong className={styles.videoTabTitle}>{item.title}</strong>
              </button>
            ))}
          </div>

          {/* Video Player */}
          <div className={`${styles.videoPlayerFrame} rv`}>
            <video
              ref={videoRef}
              key={videoPlaylist[currentVideoIdx].src}
              className={styles.videoElement}
              autoPlay
              loop
              muted={isVideoMuted}
              playsInline
              preload="metadata"
            >
              <source
                src={videoPlaylist[currentVideoIdx].src}
                type="video/mp4"
              />
              {lang === "en"
                ? "Your browser does not support the video tag."
                : "Trình duyệt của bạn không hỗ trợ thẻ video."}
            </video>

            {/* Video Player Overlay Bar */}
            <div className={styles.videoPlayerBar}>
              <div className={styles.videoPlayerMeta}>
                <h4>{videoPlaylist[currentVideoIdx].title}</h4>
                <p>{videoPlaylist[currentVideoIdx].desc}</p>
              </div>

              <div className={styles.videoPlayerControls}>
                <button
                  onClick={togglePlayPause}
                  className={styles.ctrlBtn}
                  aria-label={
                    isVideoPlaying ? t("film.btn_pause") : t("film.btn_play")
                  }
                >
                  {isVideoPlaying ? (
                    <>
                      <PauseIcon size={14} />
                      <span>{t("film.btn_pause")}</span>
                    </>
                  ) : (
                    <>
                      <PlayIcon size={14} />
                      <span>{t("film.btn_play")}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className={styles.ctrlBtn}
                  aria-label={
                    isVideoMuted ? t("film.btn_unmute") : t("film.btn_mute")
                  }
                >
                  {isVideoMuted ? (
                    <>
                      <VolumeXIcon size={16} />
                      <span>{t("film.btn_unmute")}</span>
                    </>
                  ) : (
                    <>
                      <Volume2Icon size={16} />
                      <span>{t("film.btn_mute")}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CHƯƠNG V: ĐIỂM HẸN NHA TRANG & BẢN ĐỒ GOOGLE MAPS
      ======================================================== */}
      <section id="diem-hen" className={styles.locationSection}>
        <div className="container">
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("loc.badge")}</span>
            <h2 className={styles.sectionTitleLight}>{t("loc.title")}</h2>
            <p className={styles.sectionSubtitleLight}>{t("loc.subtitle")}</p>
          </div>

          {/* Quick Info Grid with SVG Icons */}
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
          CHƯƠNG VI: ĐẶT BÀN & TRẢI NGHIỆM THƯỞNG VANG (VIP LOUNGE)
      ======================================================== */}
      <section id="dat-ban" className={styles.reservationSection}>
        <AmbientDepthBackground variant="reservation" theme="dark" />
        <div className={styles.vipHaloAura} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("res.badge")}</span>
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
                    {lang === "en" ? (
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
                          lang === "en" ? "John Doe" : "Nguyễn Văn A"
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
                        placeholder="0988 123 456"
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
                        <option value="18:00">
                          {lang === "en"
                            ? "18:00 — Early Sunset"
                            : "18:00 — Hoàng hôn sớm"}
                        </option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">
                          {lang === "en"
                            ? "19:00 — Cozy Evening"
                            : "19:00 — Giờ tối ấm cúng"}
                        </option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">
                          {lang === "en"
                            ? "20:00 — Deep Night"
                            : "20:00 — Đêm sâu lắng"}
                        </option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">
                          {lang === "en"
                            ? "21:00 — Late Night Chats"
                            : "21:00 — Trò chuyện khuya"}
                        </option>
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
                          {lang === "en"
                            ? "1 - 2 guests (Cozy couple)"
                            : "1 - 2 người (Bàn đôi ấm cúng)"}
                        </option>
                        <option value="3-4">
                          {lang === "en"
                            ? "3 - 4 guests (Small group)"
                            : "3 - 4 người (Nhóm nhỏ)"}
                        </option>
                        <option value="5-8">
                          {lang === "en"
                            ? "5 - 8 guests (Intimate banquet)"
                            : "5 - 8 người (Bàn tiệc thân mật)"}
                        </option>
                        <option value="9+">
                          {lang === "en"
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
                        {lang === "en"
                          ? "Romantic Date (Candle & floral tablescape)"
                          : "Hẹn hò lãng mạn (Tablescape nến hoa)"}
                      </option>
                      <option value="Kỷ niệm ngày đặc biệt">
                        {lang === "en"
                          ? "Anniversary / Birthday Celebration"
                          : "Kỷ niệm ngày đặc biệt / Sinh nhật"}
                      </option>
                      <option value="Gặp gỡ bạn bè thân mật">
                        {lang === "en"
                          ? "Intimate Gathering with Friends"
                          : "Gặp gỡ bạn bè thân mật"}
                      </option>
                      <option value="Tiếp đãi đối tác">
                        {lang === "en"
                          ? "Business & Partner Dinner"
                          : "Tiếp đãi đối tác / Công việc"}
                      </option>
                      <option value="Thưởng vang một mình">
                        {lang === "en"
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
                      rows={3}
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
                </form>
              )}
            </div>

            {/* Sidebar Direct Hotline — Cohesive Luxury Design */}
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
                    <span className={styles.hotlineNumber}>0988 123 456</span>
                  </div>
                </a>

                <div className={styles.resPerksList}>
                  <div className={styles.resPerk}>
                    <CheckCircleIcon
                      size={18}
                      className={styles.perkSvgGold}
                    />
                    <span>{t("res.perk1")}</span>
                  </div>
                  <div className={styles.resPerk}>
                    <CheckCircleIcon
                      size={18}
                      className={styles.perkSvgGold}
                    />
                    <span>{t("res.perk2")}</span>
                  </div>
                  <div className={styles.resPerk}>
                    <CheckCircleIcon
                      size={18}
                      className={styles.perkSvgGold}
                    />
                    <span>{t("res.perk3")}</span>
                  </div>
                </div>

                <div className={styles.resSidebarQuickLinks}>
                  <a
                    href={siteConfig.contact.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resSidebarMenuBtn}
                  >
                    <span>{lang === "en" ? "📖 View Menu (Google Drive) ↗" : "📖 Xem Thực Đơn & Menu Vang ↗"}</span>
                  </a>
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resSidebarInstaBtn}
                  >
                    <span>📸 Instagram: @vanghe.thewinecorner ↗</span>
                  </a>
                </div>

                <div className={styles.sidebarFooterNote}>
                  <span>{t("res.sidebar_note")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
