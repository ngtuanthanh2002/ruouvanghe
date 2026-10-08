import React from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";
import JsonLd from "./JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo-helpers";

export interface Crumb {
  name: string;
  item: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Always include Home as first crumb if not already present
  const fullItems: Crumb[] = [
    { name: "Trang chủ", item: "/" },
    ...items.filter((i) => i.item !== "/"),
  ];

  const schema = generateBreadcrumbSchema(fullItems);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={styles.nav}>
        <ol className={styles.list}>
          {fullItems.map((crumb, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={crumb.item} className={styles.item}>
                {index > 0 && <span className={styles.separator} aria-hidden="true">/</span>}
                {isLast ? (
                  <span className={styles.current} aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.item} className={styles.link}>
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
