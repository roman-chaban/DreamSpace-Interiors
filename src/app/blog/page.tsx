import { TopBanner } from '@/components/common/TopBanner/TopBanner';
import { BlogArticles } from '@/components/layout/BlogArticles/BlogArticles';
import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import styles from '@/styles/pagesStyles/Blog/Blog.module.scss';
import { blogParams } from '@/types/params';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'DreamSpace Interiors | Blog'
}

export default function Blog() {
  return (
    <section>
      <Header />
      <main className={styles.main}>
        <section className={styles.blogContainer}>
          <TopBanner params={blogParams} />
          <BlogArticles />
        </section>
      </main>
      <Footer isVisible />
    </section>
  );
}
