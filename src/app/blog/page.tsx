import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { getBlogPosts } from "@/lib/blog";
import NewPostButton from "@/components/admin/NewPostButton";

export const metadata: Metadata = {
  title: "Blog & Sự Kiện",
  description:
    "Các sự kiện, đêm nhạc, workshop và tin tức mới nhất tại Vanghè — The Wine Corner, 65 Trịnh Phong, Nha Trang.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog & Sự Kiện | ${siteConfig.name}`,
    description: "Các sự kiện, đêm nhạc, workshop và tin tức mới nhất tại Vanghè Nha Trang.",
    url: `${siteConfig.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className={styles.page}>
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.title}>Blog</h1>
        <NewPostButton className={styles.newPost} />
      </section>

      {posts.length === 0 && <p className={styles.empty}>Chưa có bài viết nào.</p>}

      <section className={`container ${styles.grid}`}>
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority={i < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 380px"
                className={styles.img}
              />
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
