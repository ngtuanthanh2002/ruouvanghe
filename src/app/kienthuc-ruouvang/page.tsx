import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { WINE_ARTICLES } from "@/lib/article-data";
import Breadcrumb from "@/components/seo/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Cẩm Nang Kiến Thức Rượu Vang Chuẩn Chuyên Gia Sommelier",
  description:
    "Kho tàng kiến thức rượu vang chuẩn quốc tế: Cách nếm thử, nhiệt độ phục vụ, phân biệt rượu vang thật giả, bí quyết chọn quà tết và phối rượu cùng ẩm thực Việt.",
  keywords: [
    "kiến thức rượu vang",
    "cách thưởng thức rượu vang",
    "phân biệt rượu vang thật giả",
    "nhiệt độ phục vụ rượu vang",
    "kết hợp rượu vang và món ăn",
  ],
  alternates: {
    canonical: "/kienthuc-ruouvang",
  },
  openGraph: {
    title: "Cẩm Nang Kiến Thức Rượu Vang Chuẩn Chuyên Gia | Rượu Vang Hè",
    description:
      "Chuyên trang kiến thức, văn hóa và nghệ thuật thưởng vang cùng đội ngũ Sommelier Rượu Vang Hè.",
    url: `${siteConfig.url}/kienthuc-ruouvang`,
  },
};

export default function KnowledgePage() {
  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <Breadcrumb items={[{ name: "Kiến thức rượu vang", item: "/kienthuc-ruouvang" }]} />

      <header className={styles.header}>
        <SectionHeading
          badge="CẨM NANG SOMMELIER"
          title="Văn Hóa & Kiến Thức Thưởng Thức Rượu Vang"
          description="Cùng các chuyên gia nếm thử rượu vang của Rượu Vang Hè khám phá những câu chuyện văn hóa, bí kíp phân biệt và chuẩn mực thưởng vang thế giới."
        />
      </header>

      <div className={styles.articlesList}>
        {WINE_ARTICLES.map((article) => (
          <article key={article.slug} className={styles.articleCard}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryBadge}>{article.category}</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>

            <h2 className={styles.articleTitle}>
              <Link href={`/kienthuc-ruouvang/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className={styles.excerpt}>{article.excerpt}</p>

            <div className={styles.authorBar}>
              <div>
                <strong>{article.author}</strong>
                <span className={styles.authorRole}> • {article.authorRole}</span>
              </div>
              <Link href={`/kienthuc-ruouvang/${article.slug}`} className={styles.readBtn}>
                Đọc toàn bài →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
