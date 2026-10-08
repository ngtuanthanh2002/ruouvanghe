import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { WINE_PRODUCTS } from "@/lib/wine-data";
import WineCard from "@/components/ui/WineCard";
import Breadcrumb from "@/components/seo/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bộ Sưu Tập Rượu Vang Nhập Khẩu Chính Hãng Cao Cấp",
  description:
    "Danh mục rượu vang nhập khẩu chính hãng từ Ý, Pháp, Chile, Tây Ban Nha tại Rượu Vang Hè. Đầy đủ tem hải quan CO/CQ, bảo quản hầm lạnh 16°C, giá ưu đãi chiết khấu cao.",
  keywords: [
    "rượu vang nhập khẩu",
    "bảng giá rượu vang",
    "vang ý chính hãng",
    "vang pháp cao cấp",
    "mua rượu vang uy tín",
    "hộp quà rượu vang",
  ],
  alternates: {
    canonical: "/san-pham",
  },
  openGraph: {
    title: "Bộ Sưu Tập Rượu Vang Nhập Khẩu Chính Hãng Cao Cấp | Rượu Vang Hè",
    description:
      "Danh mục rượu vang nhập khẩu chính ngạch từ các lâu đài, điền trang danh tiếng thế giới. Cam kết chất lượng thượng hạng, hoàn tiền 300% nếu phát hiện hàng giả.",
    url: `${siteConfig.url}/san-pham`,
  },
};

export default async function WineCatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; origin?: string; search?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category;
  const activeOrigin = params.origin;
  const searchQuery = params.search?.toLowerCase();

  let filteredWines = WINE_PRODUCTS;

  if (activeCategory) {
    filteredWines = filteredWines.filter((w) => w.typeSlug === activeCategory);
  }

  if (activeOrigin) {
    filteredWines = filteredWines.filter((w) => w.origin.includes(activeOrigin));
  }

  if (searchQuery) {
    filteredWines = filteredWines.filter(
      (w) =>
        w.name.toLowerCase().includes(searchQuery) ||
        w.vietnameseName.toLowerCase().includes(searchQuery) ||
        w.winery.toLowerCase().includes(searchQuery) ||
        w.grapes.some((g) => g.toLowerCase().includes(searchQuery))
    );
  }

  // Schema for ItemList (CollectionPage)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bộ Sưu Tập Rượu Vang Nhập Khẩu Rượu Vang Hè",
    description:
      "Danh mục các dòng rượu vang đỏ, vang trắng, champagne và hộp quà tết chính ngạch tại Rượu Vang Hè.",
    numberOfItems: filteredWines.length,
    itemListElement: filteredWines.map((wine, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: wine.name,
      url: `${siteConfig.url}/san-pham/${wine.slug}`,
    })),
  };

  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <JsonLd data={itemListSchema} />

      <Breadcrumb items={[{ name: "Bộ sưu tập rượu vang", item: "/san-pham" }]} />

      <header className={styles.catalogHeader}>
        <SectionHeading
          badge="BỘ SƯU TẬP 2026"
          title="Tuyển Tập Rượu Vang Thượng Hạng Nhập Khẩu"
          description="Khám phá các dòng vang danh tiếng được tuyển chọn kỹ lưỡng bởi chuyên gia Sommelier, lưu trữ trong điều kiện hầm tiêu chuẩn 16°C."
        />
      </header>

      {/* Filter Tabs */}
      <div className={styles.filtersBar}>
        <div className={styles.categoryFilters}>
          <Link
            href="/san-pham"
            className={`${styles.filterBtn} ${!activeCategory && !activeOrigin ? styles.active : ""}`}
          >
            Tất Cả Sản Phẩm
          </Link>
          <Link
            href="/san-pham?category=vang-do"
            className={`${styles.filterBtn} ${activeCategory === "vang-do" ? styles.active : ""}`}
          >
            Vang Đỏ
          </Link>
          <Link
            href="/san-pham?category=vang-trang"
            className={`${styles.filterBtn} ${activeCategory === "vang-trang" ? styles.active : ""}`}
          >
            Vang Trắng
          </Link>
          <Link
            href="/san-pham?category=vang-no"
            className={`${styles.filterBtn} ${activeCategory === "vang-no" ? styles.active : ""}`}
          >
            Champagne & Vang Nổ
          </Link>
          <Link
            href="/san-pham?category=hop-qua"
            className={`${styles.filterBtn} ${activeCategory === "hop-qua" ? styles.active : ""}`}
          >
            Hộp Quà Cao Cấp
          </Link>
        </div>

        <div className={styles.originFilters}>
          <span className={styles.originLabel}>Xuất xứ:</span>
          <Link
            href="/san-pham?origin=Ý"
            className={`${styles.originLink} ${activeOrigin === "Ý" ? styles.activeOrigin : ""}`}
          >
            Ý 🇮🇹
          </Link>
          <Link
            href="/san-pham?origin=Pháp"
            className={`${styles.originLink} ${activeOrigin === "Pháp" ? styles.activeOrigin : ""}`}
          >
            Pháp 🇫🇷
          </Link>
          <Link
            href="/san-pham?origin=Chile"
            className={`${styles.originLink} ${activeOrigin === "Chile" ? styles.activeOrigin : ""}`}
          >
            Chile 🇨🇱
          </Link>
        </div>
      </div>

      {/* Catalog Results Grid */}
      {filteredWines.length > 0 ? (
        <div className={styles.wineGrid}>
          {filteredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>Không tìm thấy sản phẩm phù hợp với bộ lọc đã chọn.</p>
          <Link href="/san-pham" className="btn-gold" style={{ marginTop: "1rem" }}>
            Xem Lại Tất Cả Sản Phẩm
          </Link>
        </div>
      )}

      {/* Bottom SEO Content Section for Keyword Authority */}
      <section className={styles.seoContentBlock}>
        <h2>Kinh Nghiệm Chọn Mua Rượu Vang Nhập Khẩu Chuẩn Vị</h2>
        <p>
          Khi chọn mua rượu vang tại <strong>Rượu Vang Hè</strong>, quý khách luôn được cam kết 100%
          sản phẩm nhập khẩu chính ngạch từ các quốc gia sản xuất rượu vang hàng đầu. Để chọn được chai vang
          ưng ý nhất cho bữa tiệc của mình:
        </p>
        <ul>
          <li>
            <strong>Đối với tiệc thịt đỏ, bò nướng, cừu đút lò:</strong> Ưu tiên các dòng rượu vang đỏ
            đậm đà (Full-bodied) như <em>Negroamaro, Primitivo từ Ý</em> hoặc <em>Cabernet Sauvignon từ Bordeaux</em>.
          </li>
          <li>
            <strong>Đối với tiệc hải sản, hàu sống, gỏi cá:</strong> Các chai vang trắng như <em>Chablis, Sauvignon Blanc</em>{" "}
            với độ chua thanh thoát và khoáng chất tự nhiên sẽ làm bùng nổ hương vị tươi ngọt của hải sản.
          </li>
          <li>
            <strong>Đối với tiệc khai tiệc, chúc mừng, sinh nhật:</strong> <em>Champagne Dom Pérignon hoặc Sparkling wine</em>{" "}
            với lớp bọt khí sủi tăm mịn màng sẽ mang đến không khí trang trọng, sôi động.
          </li>
        </ul>
      </section>
    </div>
  );
}
