'use client';

import { TopBanner } from '@/components/common/TopBanner/TopBanner';
import { BlogArticles } from '@/components/layout/BlogArticles/BlogArticles';
import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import styles from '@/styles/pagesStyles/Blog/Blog.module.scss';
import { colors } from '@/theme/theme-variables';
import { blogParams } from '@/types/params';

export default function Blog() {
  const theme = useAppSelector((state) => state.theme.theme);
  useChangePageTitle('DreamSpace Interiors | Blog');
  return (
    <section>
      <Header />
      <main
        className={styles.main}
        style={{
          backgroundColor:
            theme === 'dark' ? colors.white : colors.globalBackground,
        }}
      >
        <section className={styles.blogContainer}>
          <TopBanner params={blogParams} />
          <BlogArticles />
        </section>
      </main>
      <Footer isVisible />
    </section>
  );
}
