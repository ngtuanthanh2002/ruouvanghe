"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
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
  ClockIcon,
  WhatsAppIcon,
  ZaloIcon,
} from "@/components/ui/Icons";
import BookingNotice, { type Notice } from "@/components/ui/BookingNotice";

// w/h là kích thước gốc — hiển thị đúng tỉ lệ, không cắt ảnh
const SPACE_PHOTOS = [
  {
    id: 1,
    src: "/images/2.jpg",
    w: 1724,
    h: 2584,
    alt: "Quầy Bar & Không Gian Đón Khách Vang Hè",
    title: "Quầy Bar & Không Gian Đón Khách",
    titleEn: "Welcome Bar & Cozy Lounge",
  },
  {
    id: 2,
    src: "/images/gallery-bar.jpg",
    w: 1724,
    h: 2584,
    alt: "Kệ Vang Tuyển Chọn & Ly Pha Lê",
    title: "Kệ Vang & Ly Pha Lê",
    titleEn: "Curated Vintages & Crystal Glassware",
  },
  {
    id: 3,
    src: "/images/10.jpg",
    w: 1724,
    h: 2584,
    alt: "Nến Sáp & Hoa Tươi",
    title: "Nến Sáp & Hoa Tươi",
    titleEn: "Candlelight & Fresh Lilies",
  },
  {
    id: 4,
    src: "/images/tablescape-main.jpg",
    w: 1920,
    h: 2560,
    alt: "Bàn Tiệc Tablescape Hoa & Cold Cut",
    title: "Bàn Tiệc Hoa & Cold Cut",
    titleEn: "Floral Tablescape & Charcuterie",
  },
  {
    id: 5,
    src: "/images/11.png",
    // ảnh gốc 9:16 — cắt về 2:3 cho đồng đều với các ảnh khác
    w: 1724,
    h: 2584,
    crop: true,
    alt: "Toàn Cảnh Bàn Tiệc Vang Hè",
    title: "Toàn Cảnh Dạ Tiệc",
    titleEn: "Evening Tablescape",
  },
  {
    id: 6,
    src: "/images/12.png",
    w: 1724,
    h: 2584,
    alt: "Băng Ghế Banquette Ấm Cúng",
    title: "Góc Banquette",
    titleEn: "Banquette Nook",
  },
];

const REVIEWS = [
  { comment: "feedback.c1_comment", name: "feedback.c1_name", role: "feedback.c1_role" },
  { comment: "feedback.c2_comment", name: "feedback.c2_name", role: "feedback.c2_role" },
  { comment: "feedback.c3_comment", name: "feedback.c3_name", role: "feedback.c3_role" },
] as const;

// "Hôm nay" theo giờ Việt Nam (quán ở Nha Trang), dạng YYYY-MM-DD.
// Đọc qua useSyncExternalStore để trang vẫn prerender tĩnh: server trả "", trình duyệt trả ngày thật.
const todayInVietnam = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh" }).format(new Date());
const noSubscribe = () => () => {};

export default function HomePage() {
  const { t, lang } = useLanguage();
  const isVi = lang === "vi";
  // Alex Brush chỉ hỗ trợ chữ Latin
  const hasScript = lang === "vi" || lang === "en";

  // Tô font viết tay cho n từ cuối của câu
  const accent = (text: string, n: number) => {
    const words = text.split(" ");
    if (!hasScript || words.length <= n) return text;
    return (
      <>
        {words.slice(0, -n).join(" ")}{" "}
        <span className={styles.script}>{words.slice(-n).join(" ")}</span>
      </>
    );
  };

  const EMPTY_FORM = {
    name: "",
    phone: "",
    email: "",
    date: "", // "" = hôm nay (xem bookingDate)
    time: "19:00",
    guests: "2",
    notes: "",
  };
  const [formData, setFormData] = useState(EMPTY_FORM);
  const today = useSyncExternalStore(noSubscribe, todayInVietnam, () => "");
  const bookingDate = formData.date || today;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".rv");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, [lang]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formSending, setFormSending] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);
  const closeNotice = useCallback(() => setNotice(null), []);

  const sendBooking = async () => {
    if (!formData.name || !formData.phone || formSending) return;
    setFormSending(true);
    try {
      if (!siteConfig.bookingScriptUrl) throw new Error("bookingScriptUrl chưa được cấu hình");
      // text/plain để tránh preflight CORS; Apps Script trả Access-Control-Allow-Origin: *
      const res = await fetch(siteConfig.bookingScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...formData, date: bookingDate }),
      });
      const result = await res.json();
      if (!result.ok) throw new Error(result.error);

      const date = bookingDate.split("-").reverse().join("/");
      setNotice({
        type: "success",
        name: formData.name,
        phone: formData.phone,
        summary: [isVi ? `${formData.guests} người` : `${formData.guests} guests`, formData.time, date].filter(Boolean).join(" · "),
      });
      setFormData(EMPTY_FORM);
    } catch {
      setNotice({ type: "error" });
    } finally {
      setFormSending(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendBooking();
  };

  const retryBooking = () => {
    setNotice(null);
    sendBooking();
  };

  const telHref = `tel:${siteConfig.contact.hotline.replace(/\./g, "")}`;

  const faqSchema = generateFAQSchema(FAQS);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Winery",
    "@id": `${siteConfig.url}/#winery`,
    name: "Vang Hè — The Wine Corner",
    alternateName: "Vanghè Nha Trang",
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
    <div className={styles.page}>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className={styles.hero}>
        <Image
          src="/images/1.jpg"
          alt={t("hero.eyebrow")}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroEyebrow}>{t("hero.eyebrow")}</span>
          <h1 className={styles.heroTitle}>
            {t("hero.title_white")}{" "}
            {hasScript ? (
              <span className={styles.script}>{t("hero.title_gold")}</span>
            ) : (
              t("hero.title_gold")
            )}
          </h1>
          <p className={styles.heroText}>{t("hero.tagline")}</p>
          <div className={styles.heroCtas}>
            <Link
              href="/#dat-ban"
              className={styles.btn}
              onClick={(e) => {
                // Đã ở trang chủ: Next không scroll lại khi hash không đổi → tự cuộn
                const target = document.getElementById("dat-ban");
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", "/#dat-ban");
                }
              }}
            >
              {t("hero.cta_reserve")}
            </Link>
            <Link href="/thuc-don" className={styles.btnLight}>
              {t("hero.cta_menu")}
            </Link>
          </div>
        </div>

        <div className={styles.heroInfo}>
          <span>
            <MapPinIcon size={14} /> {t("loc.map_addr")}
          </span>
          <span>
            <ClockIcon size={14} /> {t("loc.c1_val")}
          </span>
          <a href={telHref}>
            <PhoneIcon size={14} /> {siteConfig.contact.hotlineDisplay}
          </a>
        </div>
      </section>

      {/* GIỚI THIỆU */}
      <section id="gioi-thieu" className={styles.section}>
        <div className={`container ${styles.narrow} rv`}>
          <h2 className={styles.title}>{accent(t("about.title"), 2)}</h2>
          <p className={styles.text}>{t("about.lead")}</p>
          <p className={styles.text}>{t("about.body1")}</p>
        </div>
      </section>

      {/* KHÔNG GIAN */}
      <section id="khong-gian" className={styles.section}>
        <div className="container">
          <div className={`${styles.narrow} rv`}>
            <h2 className={styles.title}>
              {accent(t("space.title"), isVi ? 3 : 2)}
            </h2>
            <p className={styles.text}>{t("space.subtitle")}</p>
          </div>

          <div className={styles.photoGrid}>
            {SPACE_PHOTOS.map((photo) => (
              <figure key={photo.id} className={`${styles.photo} rv`}>
                <div className={styles.photoImgWrap}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.w}
                    height={photo.h}
                    sizes="(max-width: 960px) 50vw, 33vw"
                    className={`${styles.photoImg} ${"crop" in photo ? styles.photoImgCrop : ""}`}
                  />
                </div>
                <figcaption className={styles.photoCaption}>
                  {isVi ? photo.title : photo.titleEn}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* THỰC ĐƠN */}
      <section id="thuc-don" className={styles.section}>
        <div className={`container ${styles.split} rv`}>
          <div className={styles.splitImgWrap}>
            <Image
              src="/images/coldcut-glass.jpg"
              alt="Rượu vang và cold cut tại Vang Hè — 65 Trịnh Phong, Nha Trang"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              className={styles.splitImg}
            />
          </div>
          <div className={styles.splitText}>
            <h2 className={styles.title}>{t("homemenu.title")}</h2>
            <p className={styles.text}>{t("homemenu.subtitle")}</p>
            <Link href="/thuc-don" className={styles.btnOutline}>
              {t("homemenu.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ĐÁNH GIÁ */}
      <section id="danh-gia" className={styles.section}>
        <div className="container">
          <h2 className={`${styles.title} rv`}>{t("feedback.title")}</h2>
          <div className={styles.reviews}>
            {REVIEWS.map((item) => (
              <blockquote key={item.name} className={`${styles.review} rv`}>
                <div className={styles.reviewStars} aria-label="5/5">★★★★★</div>
                <p className={styles.reviewText}>{t(item.comment)}</p>
                <footer className={styles.reviewAuthor}>
                  <strong>{t(item.name)}</strong>
                  <span>{t(item.role)}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ĐẶT BÀN & LIÊN HỆ */}
      <section id="dat-ban" className={styles.section}>
        <div className="container">
          <div className={`${styles.narrow} rv`}>
            <h2 className={styles.title}>{t("res.title")}</h2>
            <p className={styles.text}>{t("res.subtitle")}</p>
          </div>

          <div className={`${styles.booking} rv`}>
            <ul className={styles.contactList}>
              <li>
                <MapPinIcon size={18} />
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  {t("loc.map_addr")}
                </a>
              </li>
              <li>
                <ClockIcon size={18} />
                <span>{t("loc.c1_val")}</span>
              </li>
              <li>
                <PhoneIcon size={18} />
                <a href={telHref}>{siteConfig.contact.hotlineDisplay}</a>
              </li>
              <li className={styles.chatRow}>
                <a
                  href={siteConfig.contact.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ZaloIcon size={16} /> Zalo
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnOutline}
                >
                  {t("loc.map_btn")}
                </a>
              </li>
            </ul>

            <form onSubmit={handleFormSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <label>
                  {t("res.label_name")}
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={isVi ? "Nguyễn Văn A" : "John Doe"}
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  {t("res.label_phone")}
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="0866 817 884"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <label>
                {t("res.label_email")}
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>

              <div className={styles.formRow3}>
                <label>
                  {t("res.label_date")}
                  <input
                    type="date"
                    name="date"
                    required
                    min={today || undefined}
                    value={bookingDate}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  {t("res.label_time")}
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                  >
                    {[
                      "17:00", "17:30", "18:00", "18:30", "19:00",
                      "19:30", "20:00", "20:30", "21:00", "21:30",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {t("res.label_guests")}
                  <input
                    type="number"
                    name="guests"
                    min={1}
                    max={200}
                    inputMode="numeric"
                    value={formData.guests}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <label>
                {t("res.label_notes")}
                <textarea
                  name="notes"
                  rows={3}
                  placeholder={t("res.notes_placeholder")}
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </label>

              <button type="submit" className={styles.btn} disabled={formSending}>
                {formSending ? (isVi ? "Đang gửi…" : "Sending…") : t("res.submit_btn")}
              </button>
            </form>

            <BookingNotice
              notice={notice}
              isVi={isVi}
              hotline={siteConfig.contact.hotlineDisplay}
              onClose={closeNotice}
              onRetry={retryBooking}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
