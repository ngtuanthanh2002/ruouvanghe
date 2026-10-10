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
} from "@/components/ui/Icons";
import AmbientDepthBackground from "@/components/ui/AmbientDepthBackground";

export default function HomePage() {
  const { t, lang } = useLanguage();

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
          MỤC 2: KHÔNG GIAN VANGHÉ (SEAMLESS EDITORIAL MOSAIC)
          Ảnh nối liền nhau, không đóng khung, không bo góc, cách điệu đẹp, ít text
      ======================================================== */}
      <section id="khong-gian" className={styles.gallerySection}>
        <AmbientDepthBackground variant="space" theme="espresso" />
        <div className={styles.spaceFloatingLightOrb} aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("space.badge")}</span>
            <h2 className={styles.sectionTitleLight}>{t("space.title")}</h2>
          </div>

          {/* Seamless Editorial Tapestry Grid — Zero rigid boxes, zero border radius */}
          <div className={`${styles.seamlessSpaceGrid} rv`}>
            {/* Top Row: Asymmetrical Magazine Mosaic */}
            <div className={styles.seamlessRowTop}>
              {/* Column 1: Tall Left Photo */}
              <div className={styles.seamlessTallCell}>
                <Image
                  src="/images/2.jpg"
                  alt="Quầy bar & không gian đón khách Vang Hè"
                  fill
                  sizes="(max-width: 992px) 100vw, 38vw"
                  className={styles.seamlessPhoto}
                />
                <div className={styles.seamlessCellAura} />
              </div>

              {/* Column 2: Stacked 2 Photos */}
              <div className={styles.seamlessColStacked}>
                <div className={styles.seamlessSmallCell}>
                  <Image
                    src="/images/gallery-bar.jpg"
                    alt="Kệ vang & ly pha lê"
                    fill
                    sizes="(max-width: 992px) 100vw, 31vw"
                    className={styles.seamlessPhoto}
                  />
                  <div className={styles.seamlessCellAura} />
                </div>

                <div className={styles.seamlessSmallCell}>
                  <Image
                    src="/images/gallery-interior.jpg"
                    alt="Bàn tiệc banquette ấm cúng"
                    fill
                    sizes="(max-width: 992px) 100vw, 31vw"
                    className={styles.seamlessPhoto}
                  />
                  <div className={styles.seamlessCellAura} />
                </div>
              </div>

              {/* Column 3: Stacked 2 Photos */}
              <div className={styles.seamlessColStacked}>
                <div className={styles.seamlessSmallCell}>
                  <Image
                    src="/images/gallery-shelves.jpg"
                    alt="Tủ vang bảo quản chuẩn 16°C"
                    fill
                    sizes="(max-width: 992px) 100vw, 31vw"
                    className={styles.seamlessPhoto}
                  />
                  <div className={styles.seamlessCellAura} />
                </div>

                <div className={styles.seamlessSmallCell}>
                  <Image
                    src="/images/10.jpg"
                    alt="Nến chai mộc mạc bên hoa tươi"
                    fill
                    sizes="(max-width: 992px) 100vw, 31vw"
                    className={styles.seamlessPhoto}
                  />
                  <div className={styles.seamlessCellAura} />
                </div>
              </div>
            </div>

            {/* Bottom Row: Panoramic Seamless Flow */}
            <div className={styles.seamlessRowBottom}>
              <div className={styles.seamlessWideCell}>
                <Image
                  src="/images/1791444307745_8243178211297854059_8243178211297854059_8a09c2d9a895ad0ede8a13193d959fb5.jpg"
                  alt="Toàn cảnh bàn tiệc hoa nến Vang Hè"
                  fill
                  sizes="(max-width: 992px) 100vw, 62vw"
                  className={styles.seamlessPhoto}
                />
                <div className={styles.seamlessCellAura} />
              </div>

              <div className={styles.seamlessWideCell}>
                <Image
                  src="/images/tablescape-main.jpg"
                  alt="Không gian thư thái đêm Nha Trang"
                  fill
                  sizes="(max-width: 992px) 100vw, 38vw"
                  className={styles.seamlessPhoto}
                />
                <div className={styles.seamlessCellAura} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MỤC 4: ĐIỂM HẸN NHA TRANG & BẢN ĐỒ GOOGLE MAPS
      ======================================================== */}
      <section id="diem-hen" className={styles.locationSection}>
        <div className="container">
          <div className={`${styles.sectionHeaderLight} rv`}>
            <span className={styles.chapterBadgeLight}>{t("loc.badge")}</span>
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
          MỤC 5: ĐẶT BÀN & TRẢI NGHIỆM THƯỞNG VANG
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
                          ? "Romantic Date"
                          : "Hẹn hò lãng mạn"}
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
                  <Link
                    href="/thuc-don"
                    className={styles.resSidebarMenuBtn}
                  >
                    <span>{lang === "en" ? "📖 View Full Menu ↗" : "📖 Xem Thực Đơn & Menu Vang ↗"}</span>
                  </Link>
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
