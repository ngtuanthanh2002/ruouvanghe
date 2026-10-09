"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { WINE_PRODUCTS, FAQS, type WineItem } from "@/lib/wine-data";
import WineCard from "@/components/ui/WineCard";
import JsonLd from "@/components/seo/JsonLd";
import { generateFAQSchema } from "@/lib/seo-helpers";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2",
    purpose: "Hẹn hò lãng mạn",
    winePreference: "Sommelier tự chọn theo menu",
    notes: "",
  });

  // IntersectionObserver for tasteful smooth scroll animations (.rv -> .rv.in)
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
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".rv");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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

  const filteredWines =
    activeCategory === "all"
      ? WINE_PRODUCTS.slice(0, 6)
      : WINE_PRODUCTS.filter((w) => w.typeSlug === activeCategory).slice(0, 6);

  // SEO Rich Schemas
  const faqSchema = generateFAQSchema(FAQS);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Winery",
    "@id": `${siteConfig.url}/#winery`,
    name: "Vanghé — The Wine Corner",
    alternateName: "Rượu Vang Hè",
    url: siteConfig.url,
    logo: `${siteConfig.url}/Logo_VH.png`,
    image: `${siteConfig.url}/images/1.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.hotline,
    email: siteConfig.contact.email,
    priceRange: "$$ - $$$",
    servesCuisine: "Wine, Cold Cut, Cheese, Tablescape",
    address: {
      "@type": "PostalAddress",
      streetAddress: "65 Trịnh Phong, Phường Tân Lập",
      addressLocality: "Nha Trang",
      addressRegion: "Khánh Hòa",
      postalCode: "650000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.primaryLocation.geo.latitude,
      longitude: siteConfig.primaryLocation.geo.longitude,
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
  };

  return (
    <>
      {/* SERP Structured Data */}
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* ================= HERO SECTION ================= */}
      <header className={styles.hero} id="top" aria-label="Giới thiệu Vang Hè The Wine Corner">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className="rv">
              <p className={styles.eyebrow}>VANGHÈ — THE WINE CORNER · NHA TRANG</p>
              <h1 className={styles.heroTitle}>
                Nơi Bàn Tiệc <em>Mở Lời</em> Cho Cuộc Vui
              </h1>
              <p className={styles.tagline}>
                Khi bàn tiệc trở thành tác phẩm nghệ thuật, và đêm vui kéo dài bên những ly rượu vang nồng ấm.
              </p>
              <div className={styles.facts}>
                <span>65 Trịnh Phong, Nha Trang</span>
                <span>18:00 — 23:30 mỗi tối</span>
                <span>Hầm trữ 16°C & Sommelier tuyển chọn</span>
              </div>
              <div className={styles.heroActions}>
                <a href="#dat-ban" className="btn">
                  Đặt Bàn Trải Nghiệm
                </a>
                <a href="#cau-chuyen" className="btn-outline">
                  Khám Phá Câu Chuyện
                </a>
              </div>
            </div>

            <div className={styles.heroPhoto}>
              <div className={styles.sun} aria-hidden="true" />
              <div className={styles.arch}>
                <Image
                  src="/images/1791444307752_8243178211297854059_8243178211297854059_8f29dd6bd775d279e54c36a613abb961.jpg"
                  alt="Cánh cửa đón chào khách vào không gian ấm cúng tại Vanghé The Wine Corner"
                  width={440}
                  height={620}
                  priority
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.sticker} aria-hidden="true">
                <span>
                  Tablescape
                  <br />
                  &amp; Wine
                  <b>VANGHÈ</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= CHAPTER I: STORY ================= */}
      <section className={styles.story} id="cau-chuyen" aria-label="Chương 1: Câu chuyện Vang Hè">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={`${styles.storyLeft} rv`}>
              <p className={styles.label}>Chương I · Khởi nguồn</p>
              <h2 className={styles.sectionHeading}>
                Nơi bàn tiệc <em>mở lời</em> cho những tri âm
              </h2>
              <div className={styles.vibe}>
                <span>sang trọng</span>
                <span>ấm cúng</span>
                <span>gần gũi</span>
                <span>tinh tế</span>
                <span>nguyên bản</span>
              </div>
            </div>

            <div className={`${styles.storyRight} rv`}>
              <p className={styles.lead}>
                Có những đêm người ta nhớ vì tiếng cười của người đối diện. Có những đêm người ta nhớ vì một hương vị nồng nàn lắng đọng trên vòm họng. Tại Vanghé, cả hai cùng hội ngộ.
              </p>
              <p>
                Khởi đầu từ niềm say mê vô tận với văn hóa rượu vang thế giới, <strong>Vanghé — The Wine Corner</strong> ra đời không đơn thuần là một nơi bán rượu, mà là một góc trú ẩn thi vị nép mình trên con phố Trịnh Phong, Nha Trang. Nơi đây, từng chai vang từ Bordeaux, Chianti, Rioja hay Casablanca đều được người sành sỏi nâng niu như một tác phẩm.
              </p>
              <p>
                Ánh đèn hổ phách dịu mắt, chất liệu gỗ mộc, tiếng chạm ly pha lê trong trẻo và hương thơm của gỗ sồi hòa cùng đĩa cold cut phô mai hảo hạng... Tất cả được sắp đặt để kéo mọi người lại gần nhau, khơi những câu chuyện, và giữ cho nhịp vui luôn ấm. Đủ sang để thấy đặc biệt, đủ thân quen để thấy như ở nhà.
              </p>

              <figure className={styles.storyPhotoCard}>
                <Image
                  src="/images/1791444307638_8243178211297854059_8243178211297854059_8c2871b3c9166f3aa02ab80db1ad85e2.jpg"
                  alt="Khách thư thái bên ô cửa kính Vang Hè với ánh đèn hổ phách và nét vẽ nghệ thuật"
                  width={680}
                  height={425}
                  loading="lazy"
                />
                <figcaption className={styles.photoCaption}>
                  * Một góc tĩnh lặng bên khung cửa kính Vanghé — Open daily 18:00 - 23:30
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHAPTER II: TABLESCAPE ================= */}
      <section className={styles.tableSec} id="ban-tiec" aria-label="Chương 2: Nghệ thuật Tablescape và Bàn Tiệc">
        <div className="container">
          <div className={styles.tableGrid}>
            <div className={`${styles.tableImgWrapper} rv`}>
              <figure className={styles.tableImg}>
                <Image
                  src="/images/1791444307731_8243178211297854059_8243178211297854059_4a3fd4530fd03bc586554e1829a08c4b.jpg"
                  alt="Bàn tiệc tablescape nghệ thuật với hoa tươi, khăn linen và ly vang pha lê tại Vanghé"
                  width={560}
                  height={700}
                  loading="lazy"
                />
                <figcaption>Bàn tiệc Tablescape của Vanghé</figcaption>
              </figure>
              <div className={styles.pairingPreview}>
                <Image
                  src="/images/1791445317444_8243178211297854059_8243178211297854059_57ab304fc5f49f6332852522703d2ff8.jpg"
                  alt="Ly rượu vanghè khắc tên riêng kết hợp cùng đĩa Cold Cuts phô mai thượng hạng và vang tuyển chọn"
                  width={560}
                  height={315}
                  loading="lazy"
                />
              </div>
              <p className={styles.inspo}>* Sắp đặt thủ công tỉ mỉ cho từng bàn tiệc riêng tư</p>
            </div>

            <div className="rv">
              <p className={styles.label}>Chương II · Bàn Tiệc</p>
              <h2 className={styles.sectionHeading}>
                Một đêm tiệc, <em>ba điều</em> để nhớ
              </h2>
              <ul className={styles.points}>
                <li>
                  <span className={styles.n}>01</span>
                  <div>
                    <h3>Tablescape nghệ thuật</h3>
                    <p>
                      Bàn tiệc được tạo hình thủ công với khăn linen thô mộc, đế gỗ tự nhiên, hoa tươi và những gam màu ấm áp. Không chỉ để ngắm, mà là để tạo nên xúc cảm kết nối cho cả đêm tiệc.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.n}>02</span>
                  <div>
                    <h3>Ham &amp; Cheese Tuyển Chọn</h3>
                    <p>
                      Bàn snack cold cut với Jamon Iberico, Truffle Sheep Cheese, phô mai Brie béo ngậy, hạt óc chó và bánh mì nướng giòn — sự hòa quyện hoàn hảo để nhâm nhi và chia sẻ suốt buổi tối.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.n}>03</span>
                  <div>
                    <h3>Rượu vang &amp; Những câu chuyện</h3>
                    <p>
                      Rượu vang thơm nồng, âm nhạc acoustic êm đềm và những người bạn tri âm, trong một không khí vui mà vẫn ấm cúng, riêng tư và thăng hoa đến tận khuya.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHAPTER III: CURATED CELLAR ================= */}
      <section className={`${styles.cellar} dark-section`} id="ham-vang" aria-label="Chương 3: Hầm vang tuyển chọn">
        <div className="container">
          <div className={`${styles.cellarHead} rv`}>
            <div>
              <p className={styles.label}>Chương III · Tinh Tuyển</p>
              <h2 className={styles.sectionHeading}>
                Những chai vang <em>có linh hồn</em> tại hầm rượu
              </h2>
            </div>
            <p className={styles.cellarDesc}>
              Từng chai vang tại Vanghé được nhập khẩu chính ngạch 100% (đầy đủ chứng chỉ CO/CQ), bảo quản nghiêm ngặt ở nhiệt độ 16°C và độ ẩm 70% để giữ trọn từng tầng hương vị tinh hoa.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className={`${styles.filterTabs} rv`}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === "all" ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              Tất Cả Tuyển Chọn
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === "vang-do" ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory("vang-do")}
            >
              Rượu Vang Đỏ (Red Wine)
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === "vang-trang" ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory("vang-trang")}
            >
              Rượu Vang Trắng (White Wine)
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === "vang-no" ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory("vang-no")}
            >
              Champagne &amp; Vang Nổ
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === "hop-qua" ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory("hop-qua")}
            >
              Hộp Quà Thượng Hạng
            </button>
          </div>

          {/* Wine Cards Showcase */}
          <div className={`${styles.winesGrid} rv`}>
            {filteredWines.map((wine: WineItem) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>

          <div className={`${styles.cellarBottom} rv`}>
            <Link href="/san-pham" className="btn-outline">
              Khám Phá Toàn Bộ Bộ Sưu Tập Vang ({WINE_PRODUCTS.length}+ Chai) →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CHAPTER IV: VENUE GALLERY ================= */}
      <section className={`${styles.venue} dark-section-2`} id="khong-gian" aria-label="Chương 4: Không gian Vanghé Nha Trang">
        <div className="container">
          <div className={`${styles.venueHead} rv`}>
            <div>
              <p className={styles.label}>Chương IV · Không gian</p>
              <h2 className={styles.sectionHeading}>
                Vanghé <em>— The Wine Corner</em>
              </h2>
            </div>
            <p>
              Một góc rượu vang nhỏ giữa lòng Nha Trang, với ánh đèn hổ phách, ghế da êm ái, tường gạch đồng nung và những kệ rượu sáng đèn. Nơi hoàn hảo để một đêm tiệc bắt đầu.
              <br />
              <a
                href="https://www.instagram.com/vanghe.thewinecorner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Theo dõi Instagram @vanghe.thewinecorner ↗
              </a>
            </p>
          </div>

          {/* Asymmetric Gallery with authentic images */}
          <div className={styles.gallery}>
            <figure className={`${styles.g1} rv`}>
              <Image
                src="/images/1.jpg"
                alt="Không gian quầy bar và bàn tiệc ấm áp tại Vanghé Nha Trang"
                width={800}
                height={600}
                loading="lazy"
              />
            </figure>
            <figure className={`${styles.g2} rv`}>
              <Image
                src="/images/9.jpg"
                alt="Kệ rượu vang và ly pha lê rực rỡ ánh đèn hổ phách"
                width={500}
                height={600}
                loading="lazy"
              />
            </figure>
            <figure className={`${styles.g3} rv`}>
              <Image
                src="/images/6.jpg"
                alt="Bảng đồng khắc tên vanghè The Wine Corner"
                width={500}
                height={600}
                loading="lazy"
              />
            </figure>
            <figure className={`${styles.g4} rv`}>
              <Image
                src="/images/3.jpg"
                alt="Bàn nhỏ với đèn bàn lung linh và ghế băng da êm ái"
                width={500}
                height={600}
                loading="lazy"
              />
            </figure>
            <figure className={`${styles.g5} rv`}>
              <Image
                src="/images/10.jpg"
                alt="Chân nến sáp chảy nghệ thuật trên thân chai vang bên hoa tươi và ly rượu"
                width={500}
                height={600}
                loading="lazy"
              />
            </figure>
            <figure className={`${styles.g6} rv`}>
              <Image
                src="/images/1791444307745_8243178211297854059_8243178211297854059_8a09c2d9a895ad0ede8a13193d959fb5.jpg"
                alt="Bàn tiệc Wine Tasting chuyên nghiệp với hoa tươi, cold cuts phô mai và phiếu ghi chú nếm rượu"
                width={1200}
                height={650}
                loading="lazy"
                style={{ objectPosition: "center 50%" }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ================= CHAPTER V: RESERVATION ================= */}
      <section className={styles.reservation} id="dat-ban" aria-label="Chương 5: Đặt bàn và trải nghiệm thưởng vang">
        <div className="container">
          <div className={`${styles.resHead} rv`}>
            <p className={styles.label}>Chương V · Trải nghiệm</p>
            <h2 className={styles.sectionHeading}>
              Giữ một góc bàn <em>ấm áp</em> bên người thương
            </h2>
            <p>
              Hãy để Vanghé chuẩn bị chu đáo trước giờ bạn đến: từ vị trí ngồi ưng ý, chiếc bàn tablescape hoa tươi đến những chai vang chuẩn vị.
            </p>
            <div className={styles.resSteps}>
              <span>
                <b>1.</b> Chọn ngày &amp; giờ
              </span>
              <span>
                <b>2.</b> Điền yêu cầu trải nghiệm
              </span>
              <span>
                <b>3.</b> Sommelier xác nhận chu đáo
              </span>
            </div>
          </div>

          <div className={styles.resGrid}>
            {/* Left Card: Experience Info */}
            <aside className={`${styles.resInfoCard} rv`}>
              <h3>Trải Nghiệm Tại Vanghé</h3>
              <p className={styles.resInfoSub}>
                Không gian giới hạn với số lượng bàn ấm cúng để đảm bảo sự riêng tư và chất lượng phục vụ tốt nhất.
              </p>

              <ul className={styles.perksList}>
                <li>
                  <span className={styles.perkIcon}>🕯️</span>
                  <div>
                    <strong>Setup Tablescape theo chủ đề</strong>
                    <p style={{ opacity: 0.8, fontSize: "13px" }}>
                      Bàn hoa tươi, nến lung linh cho hẹn hò, kỷ niệm hoặc tiếp đối tác thân mật.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.perkIcon}>🧀</span>
                  <div>
                    <strong>Phối vị Cold Cuts &amp; Phô mai</strong>
                    <p style={{ opacity: 0.8, fontSize: "13px" }}>
                      Được thiết kế riêng để cộng hưởng trọn vẹn với dòng vang bạn lựa chọn.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.perkIcon}>🍷</span>
                  <div>
                    <strong>Sommelier đồng hành tư vấn</strong>
                    <p style={{ opacity: 0.8, fontSize: "13px" }}>
                      Chia sẻ câu chuyện về từng giống nho, xuất xứ và nghệ thuật thưởng thức chuẩn quốc tế.
                    </p>
                  </div>
                </li>
              </ul>

              <div className={styles.directCallBox}>
                <span>Hotline Đặt Bàn Nhanh:</span>
                <a
                  href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                  className={styles.directCallLink}
                >
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </div>
            </aside>

            {/* Right: Reservation Form */}
            <div className="rv">
              {formSubmitted ? (
                <div className={styles.successBox}>
                  <h3>
                    Cảm ơn quý khách <em>{formData.name}</em>!
                  </h3>
                  <p>
                    Vanghé đã nhận được thông tin đặt bàn của quý khách cho ngày{" "}
                    <strong>{formData.date || "hôm nay"}</strong> lúc <strong>{formData.time}</strong> ({formData.guests} khách).
                  </p>
                  <p>
                    Đội ngũ Sommelier sẽ liên hệ qua số điện thoại <strong>{formData.phone}</strong> trong vòng 10 phút để xác nhận vị trí bàn và chuẩn bị chu đáo nhất.
                  </p>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Gửi Yêu Cầu Khác
                  </button>
                </div>
              ) : (
                <form className={styles.resForm} onSubmit={handleFormSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="res-name">Họ và tên *</label>
                      <input
                        id="res-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="res-phone">Số điện thoại *</label>
                      <input
                        id="res-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="09xx xxx xxx"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="res-date">Ngày ghé thăm</label>
                      <input
                        id="res-date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="res-time">Giờ đến dự kiến</label>
                      <select
                        id="res-time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                      >
                        <option value="18:00">18:00 - Hoàng hôn</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00 - Giờ tối</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00 - Đêm muộn</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="res-guests">Số lượng khách</label>
                      <select
                        id="res-guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                      >
                        <option value="1 - 2 người">1 - 2 người (Bàn đôi ấm cúng)</option>
                        <option value="3 - 4 người">3 - 4 người (Bàn tròn thân mật)</option>
                        <option value="5 - 8 người">5 - 8 người (Bàn dài Tablescape)</option>
                        <option value="Tiệc riêng > 8 người">Tiệc riêng &gt; 8 người (Đặt trọn góc riêng)</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="res-purpose">Dịp trải nghiệm</label>
                      <select
                        id="res-purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                      >
                        <option value="Hẹn hò lãng mạn">Hẹn hò lãng mạn</option>
                        <option value="Sinh nhật / Kỷ niệm">Sinh nhật / Kỷ niệm ngày vui</option>
                        <option value="Tụ họp bạn bè">Tụ họp bạn bè tri âm</option>
                        <option value="Thử nếm rượu cùng Sommelier">Thử nếm rượu cùng Sommelier</option>
                        <option value="Tiếp đãi đối tác">Tiếp đãi đối tác quan trọng</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="res-wine">Dòng vang quan tâm (nếu có)</label>
                    <select
                      id="res-wine"
                      name="winePreference"
                      value={formData.winePreference}
                      onChange={handleInputChange}
                    >
                      <option value="Sommelier tự chọn theo menu">Sommelier tư vấn trực tiếp tại bàn</option>
                      <option value="Vang Đỏ đậm đà (Ý / Pháp)">Vang Đỏ đậm đà (Ý / Pháp / Chile)</option>
                      <option value="Vang Trắng tươi mát (Chardonnay / Sauvignon)">Vang Trắng tươi mát (Chardonnay / Sauvignon)</option>
                      <option value="Vang Nổ / Champagne khai tiệc">Vang Nổ / Champagne khai tiệc</option>
                      <option value="Set Tasting nếm thử nhiều dòng">Set Wine Tasting nếm thử nhiều dòng</option>
                    </select>
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="res-notes">Ghi chú thêm (dị ứng, yêu cầu setup đặc biệt...)</label>
                    <textarea
                      id="res-notes"
                      name="notes"
                      placeholder="Ví dụ: Xin chuẩn bị hoa hồng nhỏ trên bàn kỷ niệm 2 năm..."
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn-wine" style={{ width: "100%" }}>
                    Xác Nhận Đặt Bàn Tại Vanghé →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHAPTER VI: DETAILS & COORDINATES ================= */}
      <section className={styles.details} id="thong-tin" aria-label="Chương 6: Thông tin và tọa độ Vanghé">
        <svg className={styles.detailsArt} viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="90" fill="#A9502F" opacity="0.8" />
          <circle cx="100" cy="100" r="54" fill="#D99A45" />
        </svg>

        <div className="container">
          <div className="rv">
            <p className={styles.label}>Chương VI · Điểm hẹn</p>
            <h2 className={styles.sectionHeading}>
              Hẹn gặp bạn <em>ở Nha Trang</em>
            </h2>
          </div>

          <div className={`${styles.detailsGrid} rv`}>
            <div className={styles.detailCol}>
              <small>Thời Gian</small>
              <strong>18:00 — 23:30</strong>
              <span>Mở cửa mỗi ngày từ hoàng hôn đến khuya</span>
            </div>

            <div className={styles.detailCol}>
              <small>Địa Điểm</small>
              <strong>Vanghé</strong>
              <span>
                65 Trịnh Phong, P. Tân Lập, Nha Trang ·{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=65+Tr%E1%BB%8Bnh+Phong%2C+Nha+Trang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Xem Bản Đồ ↗
                </a>
              </span>
            </div>

            <div className={styles.detailCol}>
              <small>Hotline &amp; Zalo</small>
              <strong>{siteConfig.contact.hotlineDisplay}</strong>
              <span>
                Tư vấn Sommelier &amp; chuẩn bị bàn chu đáo ·{" "}
                <a href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}>
                  Gọi Ngay ↗
                </a>
              </span>
            </div>

            <div className={styles.detailCol}>
              <small>Hầm Vang Toàn Quốc</small>
              <strong>Giao Hỏa Tốc</strong>
              <span>
                Đóng thùng chuyên dụng, bảo quản nhiệt độ chuẩn tại Nha Trang, Hà Nội &amp; TP.HCM
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
