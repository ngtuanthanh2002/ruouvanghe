import React from "react";
import Link from "next/link";
import styles from "./WineCard.module.css";
import type { WineItem } from "@/lib/wine-data";
import { StarIcon, WineBottleIcon } from "./Icons";

interface WineCardProps {
  wine: WineItem;
}

export default function WineCard({ wine }: WineCardProps) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(wine.price);

  const formattedOriginalPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(wine.originalPrice);

  const discountPercent = Math.round(
    ((wine.originalPrice - wine.price) / wine.originalPrice) * 100
  );

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {wine.badge && <span className={styles.badge}>{wine.badge}</span>}
        {discountPercent > 0 && (
          <span className={styles.discountBadge}>-{discountPercent}%</span>
        )}

        <div className={styles.bottleVisual} style={{ "--accent": wine.accentColor } as React.CSSProperties}>
          <div className={styles.glowAura} />
          <div className={styles.wineSilhouette}>
            <WineBottleIcon size={84} />
          </div>
          <div className={styles.vintageTag}>{wine.vintage}</div>
        </div>

        <div className={styles.criticTag}>
          <span>★</span> {wine.criticScore}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.originRow}>
          <span className={styles.origin}>{wine.origin}</span>
          <span className={styles.dot}>•</span>
          <span className={styles.type}>{wine.type}</span>
        </div>

        <h3 className={styles.title}>
          <Link href={`/san-pham/${wine.slug}`} title={wine.name}>
            {wine.name}
          </Link>
        </h3>

        <p className={styles.summary}>{wine.summary}</p>

        <div className={styles.ratingRow}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} size={14} fill="#D4AF37" />
            ))}
          </div>
          <span className={styles.ratingScore}>{wine.ratingValue}</span>
          <span className={styles.reviewCount}>({wine.reviewCount} đánh giá)</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>{formattedPrice}</span>
            {wine.originalPrice > wine.price && (
              <span className={styles.originalPrice}>{formattedOriginalPrice}</span>
            )}
          </div>

          <Link
            href={`/san-pham/${wine.slug}`}
            className={styles.viewBtn}
            aria-label={`Xem chi tiết rượu ${wine.name}`}
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
