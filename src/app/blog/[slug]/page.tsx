import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import { formatBlogDate } from "@/lib/blog-data";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { ClockIcon, MapPinIcon } from "@/components/ui/Icons";

export async function generateStaticParams() {
  // Cache Components yêu cầu ít nhất 1 tham số; slug giữ chỗ sẽ trả về 404
  const posts = await getBlogPosts();
  return posts.length > 0 ? posts.map((post) => ({ slug: post.slug })) : [{ slug: "_" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Không tìm thấy bài viết" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: post.cover.startsWith("http") ? post.cover : `${siteConfig.url}${post.cover}` }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const others = (await getBlogPosts())
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className={styles.page}>
      <header className={`container ${styles.head}`}>
        <Link href="/blog" className={styles.back}>
          ← Tất cả sự kiện
        </Link>
        <span className={styles.category}>{post.category}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <ul className={styles.meta}>
          <li>
            <ClockIcon size={15} /> {formatBlogDate(post.date)} · {post.time}
          </li>
          <li>
            <MapPinIcon size={15} /> {post.location}
          </li>
        </ul>
      </header>

      <div className={`container ${styles.coverWrap}`}>
        <div className={styles.cover}>
          <Image src={post.cover} alt={post.title} fill priority sizes="(max-width: 960px) 100vw, 960px" className={styles.img} />
        </div>
      </div>

      <div className={`container ${styles.body}`}>
        <p className={styles.excerpt}>{post.excerpt}</p>
        {post.contentHtml ? (
          // HTML đã được lọc bằng sanitizeBlogHtml trong src/lib/blog.ts
          <div className={styles.rich} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        ) : (
          post.content.map((para, i) => <p key={i}>{para}</p>)
        )}

        <div className={styles.cta}>
          <p>Muốn giữ chỗ cho sự kiện này?</p>
          <Link href="/#dat-ban" className={styles.ctaBtn}>
            Đặt bàn ngay
          </Link>
        </div>
      </div>

      {others.length > 0 && (
        <section className={`container ${styles.others}`}>
          <h2 className={styles.othersTitle}>Sự kiện khác</h2>
          <div className={styles.othersGrid}>
            {others.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.otherCard}>
                <div className={styles.otherImg}>
                  <Image src={p.cover} alt={p.title} fill sizes="(max-width: 640px) 100vw, 320px" className={styles.img} />
                </div>
                <span className={styles.otherDate}>{formatBlogDate(p.date)}</span>
                <h3 className={styles.otherName}>{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
