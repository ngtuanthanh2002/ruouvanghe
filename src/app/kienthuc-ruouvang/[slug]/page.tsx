import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { WINE_ARTICLES } from "@/lib/article-data";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { generateArticleSchema } from "@/lib/seo-helpers";
import { PhoneIcon, WineBottleIcon } from "@/components/ui/Icons";

export async function generateStaticParams() {
  return WINE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = WINE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Không tìm thấy bài viết | Rượu Vang Hè",
      description: "Bài viết không tồn tại trên hệ thống Rượu Vang Hè.",
    };
  }

  return {
    title: `${article.title}`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `/kienthuc-ruouvang/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Rượu Vang Hè`,
      description: article.excerpt,
      url: `${siteConfig.url}/kienthuc-ruouvang/${article.slug}`,
      type: "article",
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = WINE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = generateArticleSchema(article);
  const formattedPublishedDate = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "long",
  }).format(new Date(article.publishedTime));

  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <JsonLd data={articleSchema} />

      <Breadcrumb
        items={[
          { name: "Kiến thức rượu vang", item: "/kienthuc-ruouvang" },
          { name: article.title, item: `/kienthuc-ruouvang/${article.slug}` },
        ]}
      />

      <article className={styles.articleContainer}>
        <header className={styles.header}>
          <div className={styles.metaTop}>
            <span className={styles.categoryBadge}>{article.category}</span>
            <time dateTime={article.publishedTime} className={styles.publishDate}>
              Xuất bản: {formattedPublishedDate}
            </time>
            <span className={styles.readTime}>• {article.readTime}</span>
          </div>

          <h1 className={styles.mainTitle}>{article.title}</h1>
          <p className={styles.subtitle}>{article.vietnameseTitle}</p>

          <div className={styles.authorCard}>
            <div className={styles.authorAvatar}>🍷</div>
            <div>
              <div className={styles.authorName}>{article.author}</div>
              <div className={styles.authorRole}>{article.authorRole}</div>
            </div>
          </div>
        </header>

        {/* Lead Excerpt */}
        <div className={styles.leadExcerpt}>
          <p>{article.excerpt}</p>
        </div>

        {/* Article Body Content */}
        <div className={styles.bodyContent}>
          {article.content.map((section, idx) => (
            <section key={idx} className={styles.sectionBlock}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        {/* Internal Link CTA Box */}
        <div className={styles.wineCallout}>
          <div className={styles.calloutIcon}>
            <WineBottleIcon size={36} />
          </div>
          <div>
            <h3>Trải Nghiệm Rượu Vang Nhập Khẩu Chính Hãng Tại Rượu Vang Hè</h3>
            <p>
              Mỗi chai rượu tại hầm vang chúng tôi đều có giấy chứng nhận CO/CQ và được bảo quản ở
              16°C nghiêm ngặt. Đặt lịch nếm thử miễn phí hoặc nhận tư vấn trực tiếp từ Sommelier.
            </p>
            <div className={styles.calloutActions}>
              <Link href="/san-pham" className="btn-gold">
                Xem Danh Mục Vang
              </Link>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className="btn-outline-gold"
              >
                <PhoneIcon size={16} /> Hotline: {siteConfig.contact.hotlineDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className={styles.tagsRow}>
          <span className={styles.tagLabel}>Chủ đề liên quan:</span>
          {article.tags.map((tag, i) => (
            <span key={i} className={styles.tagItem}>
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
