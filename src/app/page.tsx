import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { WINE_PRODUCTS, WINE_CATEGORIES, FAQS } from "@/lib/wine-data";
import { WINE_ARTICLES } from "@/lib/article-data";
import WineCard from "@/components/ui/WineCard";
import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd from "@/components/seo/JsonLd";
import { generateFAQSchema } from "@/lib/seo-helpers";
import {
  AwardIcon,
  CheckCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TemperatureIcon,
  TruckIcon,
  WineBottleIcon,
  WineGlassIcon,
} from "@/components/ui/Icons";

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQS);
  const featuredWines = WINE_PRODUCTS.filter((w) => w.featured);

  return (
    <>
      {/* FAQ Schema for SERP Rich Snippets */}
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className={styles.hero} aria-label="Giới thiệu thương hiệu Rượu Vang Hè">
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <span className="badge-gold">
                ★ BẢO QUẢN TIÊU CHUẨN HẦM RƯỢU QUỐC TẾ 16°C
              </span>
            </div>

            <h1 className={styles.heroTitle}>
              Tuyệt Tác Rượu Vang Nhập Khẩu <span className={styles.goldText}>Chính Hãng</span> Thượng Hạng
            </h1>

            <p className={styles.heroSubtitle}>
              Chào mừng quý khách đến với <strong>Rượu Vang Hè</strong> – Đơn vị uy tín hàng đầu
              chuyên phân phối các dòng rượu vang nhập khẩu độc quyền từ Pháp, Ý, Chile, Tây Ban Nha.
              Mỗi giọt vang là một câu chuyện lịch sử, được chọn lọc khắt khe bởi đội ngũ chuyên gia Sommelier.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/san-pham" className="btn-gold">
                <WineBottleIcon size={18} />
                <span>Khám Phá Bộ Sưu Tập Vang</span>
              </Link>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className="btn-outline-gold"
              >
                <PhoneIcon size={18} />
                <span>Tư Vấn Sommelier: {siteConfig.contact.hotlineDisplay}</span>
              </a>
            </div>

            {/* Quick stats */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1.500+</span>
                <span className={styles.statLabel}>Chai Vang Tuyển Chọn</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Chính Ngạch CO/CQ</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>16°C</span>
                <span className={styles.statLabel}>Hầm Trữ Chuẩn Vị</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2 Giờ</span>
                <span className={styles.statLabel}>Giao Hỏa Tốc Hà Nội & HCM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Categories Grid */}
      <section className={styles.categoriesSection} aria-label="Danh mục các dòng rượu vang">
        <div className="container">
          <SectionHeading
            badge="DANH MỤC THƯỢNG HẠNG"
            title="Khám Phá Các Dòng Vang Trứ Danh Thế Giới"
            description="Tìm kiếm hương vị hoàn hảo phù hợp với từng dịp lễ, tiệc sum họp gia đình hoặc biếu tặng đối tác quan trọng."
          />

          <div className={styles.categoriesGrid}>
            {WINE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/san-pham?category=${cat.slug}`}
                className={styles.catCard}
              >
                <div className={styles.catIconCircle}>
                  <WineGlassIcon size={32} />
                </div>
                <span className={styles.catCount}>{cat.count}</span>
                <h3 className={styles.catName}>{cat.name}</h3>
                <span className={styles.catEn}>{cat.nameEn}</span>
                <p className={styles.catDesc}>{cat.description}</p>
                <span className={styles.catLinkAction}>
                  Xem sản phẩm →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className={styles.featuredSection} aria-label="Sản phẩm rượu vang tiêu biểu">
        <div className="container">
          <div className={styles.sectionHeaderFlex}>
            <SectionHeading
              align="left"
              badge="SOMMELIER TUYỂN CHỌN"
              title="Bộ Sưu Tập Tuyệt Tác Vang Nổi Bật"
              description="Những chai vang đạt thang điểm 95 - 99 từ các nhà phê bình thế giới, được yêu thích nhất tại Rượu Vang Hè."
            />
            <Link href="/san-pham" className="btn-outline-gold" style={{ alignSelf: "flex-start" }}>
              Xem Toàn Bộ {WINE_PRODUCTS.length}+ Chai Vang →
            </Link>
          </div>

          <div className={styles.productsGrid}>
            {featuredWines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T Value Proposition Section */}
      <section className={styles.trustSection} aria-label="Lý do chọn Rượu Vang Hè">
        <div className="container">
          <SectionHeading
            badge="UY TÍN HÀNG ĐẦU"
            title="Tại Sao Khách Hàng Thượng Lưu Chọn Rượu Vang Hè?"
            description="Chúng tôi không chỉ bán rượu vang – Chúng tôi bảo tồn nghệ thuật và trao gửi sự an tâm tuyệt đối đến khách hàng."
          />

          <div className={styles.trustCardsGrid}>
            <div className={styles.trustFeatureCard}>
              <div className={styles.featureIcon}>
                <ShieldCheckIcon size={36} />
              </div>
              <h3 className={styles.featureTitle}>100% Nhập Khẩu Đầy Đủ CO/CQ</h3>
              <p className={styles.featureDesc}>
                Cam kết bồi thường 300% nếu phát hiện hàng giả, hàng nhái.
                Mọi chai rượu đều có hóa đơn đỏ VAT, tem nhập khẩu hải quan sắc nét và hồ sơ kiểm định an toàn vệ sinh thực phẩm.
              </p>
            </div>

            <div className={styles.trustFeatureCard}>
              <div className={styles.featureIcon}>
                <TemperatureIcon size={36} />
              </div>
              <h3 className={styles.featureTitle}>Bảo Quản Hầm Rượu Chuẩn 16°C - 18°C</h3>
              <p className={styles.featureDesc}>
                Khác biệt lớn nhất của Rượu Vang Hè là hệ thống hầm trữ chuyên nghiệp đạt chuẩn Bordeaux:
                độ ẩm 70%, chống tia UV, hạn chế rung chấn, giữ vẹn nguyên hương vị nguyên bản của nhà sản xuất.
              </p>
            </div>

            <div className={styles.trustFeatureCard}>
              <div className={styles.featureIcon}>
                <AwardIcon size={36} />
              </div>
              <h3 className={styles.featureTitle}>Tư Vấn Trực Tiếp Cùng Sommelier</h3>
              <p className={styles.featureDesc}>
                Đội ngũ chuyên gia nếm thử rượu vang quốc tế giàu kinh nghiệm luôn sẵn sàng tư vấn
                lựa chọn giống nho, phối món ăn chuẩn vị (Wine Pairing) và chuẩn bị hộp quà theo ngân sách.
              </p>
            </div>

            <div className={styles.trustFeatureCard}>
              <div className={styles.featureIcon}>
                <TruckIcon size={36} />
              </div>
              <h3 className={styles.featureTitle}>Giao Hàng Hỏa Tốc & Thùng Chống Sốc</h3>
              <p className={styles.featureDesc}>
                Giao hàng nội thành Hà Nội & TP.HCM chỉ trong 2 giờ.
                Bao bì cao cấp đóng gói túi bảo ôn nhiệt chuyên dụng và bảo hiểm vỡ hỏng 100% trong quá trình vận chuyển toàn quốc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sommelier Consultation Banner */}
      <section className={styles.consultBanner} aria-label="Tư vấn rượu vang cùng chuyên gia">
        <div className={`container ${styles.consultInner}`}>
          <div className={styles.consultText}>
            <span className="badge-gold">DỊCH VỤ ĐỘC BẢN VIP</span>
            <h2 className={styles.consultTitle}>
              Cần Tư Vấn Rượu Vang Cho Tiệc Cưới Hoặc Quà Biếu Doanh Nghiệp?
            </h2>
            <p className={styles.consultDesc}>
              Liên hệ ngay để nhận bảng báo giá chiết khấu doanh nghiệp tốt nhất cùng dịch vụ
              khắc laser tên thương hiệu lên hộp gỗ và in thiệp mừng cao cấp miễn phí.
            </p>
            <div className={styles.consultChecklist}>
              <div><CheckCircleIcon size={18} /> Chiết khấu ưu đãi lên đến 25% cho đơn quà tặng</div>
              <div><CheckCircleIcon size={18} /> Hỗ trợ in logo dập nổi nhũ vàng theo yêu cầu</div>
              <div><CheckCircleIcon size={18} /> Xuất hóa đơn VAT minh bạch ngay trong ngày</div>
            </div>
          </div>

          <div className={styles.consultActionBox}>
            <div className={styles.callCard}>
              <span className={styles.callBadge}>ĐƯỜNG DÂY NÓNG 24/7</span>
              <div className={styles.phoneNumber}>{siteConfig.contact.hotlineDisplay}</div>
              <p className={styles.phoneNote}>Nhận tư vấn nhanh qua Zalo & Điện thoại</p>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className="btn-gold"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                <PhoneIcon size={18} /> Gọi Ngay Cho Sommelier
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Knowledge / Articles */}
      <section className={styles.articlesSection} aria-label="Cẩm nang kiến thức rượu vang">
        <div className="container">
          <SectionHeading
            badge="KIẾN THỨC & THƯỞNG THỨC"
            title="Cẩm Nang Rượu Vang Cùng Chuyên Gia"
            description="Nâng tầm trải nghiệm thưởng thức với các bài viết chuyên sâu về văn hóa, lịch sử và nghệ thuật nếm thử rượu vang."
          />

          <div className={styles.articlesGrid}>
            {WINE_ARTICLES.map((article) => (
              <article key={article.slug} className={styles.articleCard}>
                <div className={styles.articleHeader}>
                  <span className={styles.articleCategory}>{article.category}</span>
                  <span className={styles.readTime}>{article.readTime}</span>
                </div>
                <h3 className={styles.articleTitle}>
                  <Link href={`/kienthuc-ruouvang/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <div className={styles.articleFooter}>
                  <span className={styles.authorName}>Tác giả: {article.author}</span>
                  <Link
                    href={`/kienthuc-ruouvang/${article.slug}`}
                    className={styles.readMoreLink}
                  >
                    Đọc tiếp →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQs Section with Schema.org */}
      <section className={styles.faqSection} aria-label="Câu hỏi thường gặp về rượu vang">
        <div className="container">
          <SectionHeading
            badge="GIẢI ĐÁP THẮC MẮC"
            title="Câu Hỏi Thường Gặp Về Rượu Vang Nhập Khẩu"
            description="Những thắc mắc phổ biến nhất của quý khách hàng khi tìm mua rượu vang chính hãng tại Việt Nam."
          />

          <div className={styles.faqList}>
            {FAQS.map((faq, index) => (
              <details key={index} className={styles.faqItem} open={index === 0}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.faqToggleIcon} aria-hidden="true">+</span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
