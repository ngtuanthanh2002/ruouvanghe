import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { WINE_PRODUCTS } from "@/lib/wine-data";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { generateProductSchema } from "@/lib/seo-helpers";
import WineCard from "@/components/ui/WineCard";
import {
  AwardIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
  TemperatureIcon,
  TruckIcon,
  WineBottleIcon,
} from "@/components/ui/Icons";

export async function generateStaticParams() {
  return WINE_PRODUCTS.map((wine) => ({
    slug: wine.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const wine = WINE_PRODUCTS.find((w) => w.slug === slug);

  if (!wine) {
    return {
      title: "Không tìm thấy sản phẩm | Rượu Vang Hè",
      description: "Sản phẩm không tồn tại hoặc đã ngừng kinh doanh tại Rượu Vang Hè.",
    };
  }

  const title = `${wine.name} - ${wine.vietnameseName}`;
  const description = `${wine.summary} Rượu vang nhập khẩu chính hãng từ ${wine.origin}, niên vụ ${wine.vintage}, nồng độ ${wine.alcohol}. Giao nhanh 2H tại Rượu Vang Hè.`;

  return {
    title,
    description,
    keywords: [
      wine.name.toLowerCase(),
      wine.vietnameseName.toLowerCase(),
      `rượu vang ${wine.winery.toLowerCase()}`,
      `mua ${wine.name.toLowerCase()}`,
      `giá ${wine.name.toLowerCase()}`,
      wine.origin.toLowerCase(),
      ...wine.grapes.map((g) => g.toLowerCase()),
    ],
    alternates: {
      canonical: `/san-pham/${wine.slug}`,
    },
    openGraph: {
      title: `${title} | Rượu Vang Hè`,
      description,
      url: `${siteConfig.url}/san-pham/${wine.slug}`,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: wine.name,
        },
      ],
    },
  };
}

export default async function WineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wine = WINE_PRODUCTS.find((w) => w.slug === slug);

  if (!wine) {
    notFound();
  }

  const productSchema = generateProductSchema(wine);
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(wine.price);
  const formattedOriginalPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(wine.originalPrice);

  const relatedWines = WINE_PRODUCTS.filter(
    (w) => w.id !== wine.id && (w.origin === wine.origin || w.type === wine.type)
  ).slice(0, 3);

  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <JsonLd data={productSchema} />

      <Breadcrumb
        items={[
          { name: "Sản phẩm", item: "/san-pham" },
          { name: wine.name, item: `/san-pham/${wine.slug}` },
        ]}
      />

      <article className={styles.productDetail}>
        {/* Product Visual Column */}
        <div className={styles.visualCol}>
          <div className={styles.bottleVisualBox} style={{ "--accent": wine.accentColor } as React.CSSProperties}>
            {wine.badge && <span className={styles.badge}>{wine.badge}</span>}
            <div className={styles.auraGlow} />
            <div className={styles.bottleBig}>
              <WineBottleIcon size={180} />
            </div>
            <div className={styles.criticBadgeBig}>
              <AwardIcon size={20} />
              <span>{wine.criticScore}</span>
            </div>
          </div>

          <div className={styles.guaranteeBox}>
            <div className={styles.guaranteeItem}>
              <ShieldCheckIcon size={20} className={styles.goldIcon} />
              <span>100% Chính hãng đầy đủ tem hải quan & CO/CQ</span>
            </div>
            <div className={styles.guaranteeItem}>
              <TemperatureIcon size={20} className={styles.goldIcon} />
              <span>Bảo quản hầm rượu chuyên dụng tiêu chuẩn 16°C</span>
            </div>
            <div className={styles.guaranteeItem}>
              <TruckIcon size={20} className={styles.goldIcon} />
              <span>Giao hỏa tốc 2 giờ nội thành Hà Nội & TP.HCM</span>
            </div>
          </div>
        </div>

        {/* Product Info Column */}
        <div className={styles.infoCol}>
          <div className={styles.topMeta}>
            <span className={styles.originTag}>{wine.origin}</span>
            <span className={styles.typeTag}>{wine.type}</span>
            <span className={styles.vintageTag}>Niên vụ {wine.vintage}</span>
          </div>

          <h1 className={styles.title}>{wine.name}</h1>
          <p className={styles.subtitle}>{wine.vietnameseName}</p>

          <div className={styles.ratingBar}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={18} fill="#D4AF37" />
              ))}
            </div>
            <span className={styles.ratingNumber}>{wine.ratingValue} / 5.0</span>
            <span className={styles.reviewText}>({wine.reviewCount} đánh giá từ khách hàng)</span>
          </div>

          {/* Pricing Box */}
          <div className={styles.priceContainer}>
            <div className={styles.priceRow}>
              <span className={styles.mainPrice}>{formattedPrice}</span>
              {wine.originalPrice > wine.price && (
                <span className={styles.strikePrice}>{formattedOriginalPrice}</span>
              )}
            </div>
            <p className={styles.vatNote}>Giá đã bao gồm thuế VAT 10% • Xuất hóa đơn đỏ hợp lệ</p>
          </div>

          <p className={styles.description}>{wine.description}</p>

          {/* Specifications Table */}
          <div className={styles.specSection}>
            <h2 className={styles.specHeading}>Thông Số & Đặc Tính Rượu</h2>
            <div className={styles.specGrid}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Nhà sản xuất:</span>
                <span className={styles.specValue}>{wine.winery}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Vùng làm vang:</span>
                <span className={styles.specValue}>{wine.region}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Giống nho:</span>
                <span className={styles.specValue}>{wine.grapes.join(", ")}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Nồng độ cồn:</span>
                <span className={styles.specValue}>{wine.alcohol}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Dung tích:</span>
                <span className={styles.specValue}>{wine.volume}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Tình trạng:</span>
                <span className={styles.specValueInStock}>✓ Còn hàng tại showroom</span>
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className={styles.actionButtons}>
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className="btn-gold"
              style={{ flex: 1.2, padding: "1rem 1.5rem" }}
            >
              <PhoneIcon size={18} />
              <span>Gọi Đặt Hàng: {siteConfig.contact.hotlineDisplay}</span>
            </a>
            <a
              href={siteConfig.contact.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ flex: 1, padding: "1rem 1.5rem" }}
            >
              Tư Vấn Zalo 24/7
            </a>
          </div>
        </div>
      </article>

      {/* Tasting Notes & Pairing Guide */}
      <section className={styles.tastingNotesSection}>
        <h2 className={styles.tastingMainTitle}>
          Ghi Chú Nếm Thử Từ Chuyên Gia Sommelier (Tasting Notes)
        </h2>

        <div className={styles.tastingGrid}>
          <div className={styles.tastingCard}>
            <div className={styles.tastingIcon}>🍇</div>
            <h3>Hương Thơm (Aroma)</h3>
            <p>{wine.tastingNotes.aroma}</p>
          </div>

          <div className={styles.tastingCard}>
            <div className={styles.tastingIcon}>🍷</div>
            <h3>Vị Giác & Cấu Trúc (Palate)</h3>
            <p>{wine.tastingNotes.palate}</p>
          </div>

          <div className={styles.tastingCard}>
            <div className={styles.tastingIcon}>✨</div>
            <h3>Hậu Vị (Finish)</h3>
            <p>{wine.tastingNotes.finish}</p>
          </div>

          <div className={styles.tastingCard}>
            <div className={styles.tastingIcon}>🥩</div>
            <h3>Kết Hợp Ẩm Thực (Food Pairing)</h3>
            <p>{wine.tastingNotes.pairing}</p>
          </div>

          <div className={styles.tastingCard}>
            <div className={styles.tastingIcon}>❄️</div>
            <h3>Nhiệt Độ Thưởng Thức</h3>
            <p>{wine.tastingNotes.temperature}</p>
          </div>

          <div className={styles.tastingCard}>
            <div className={styles.tastingIcon}>⏳</div>
            <h3>Thời Gian Thở (Decanting)</h3>
            <p>{wine.tastingNotes.decanting}</p>
          </div>
        </div>
      </section>

      {/* Winery Story */}
      <section className={styles.winerySection}>
        <h2>Câu Chuyện Điền Trang {wine.winery}</h2>
        <p>{wine.producerStory}</p>
      </section>

      {/* Related Products */}
      {relatedWines.length > 0 && (
        <section className={styles.relatedSection}>
          <h2>Các Dòng Vang Cùng Phân Khúc Đáng Thử</h2>
          <div className={styles.relatedGrid}>
            {relatedWines.map((item) => (
              <WineCard key={item.id} wine={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
