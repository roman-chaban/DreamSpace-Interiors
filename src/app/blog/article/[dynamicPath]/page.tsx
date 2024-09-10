'use client';

import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import styles from '@/styles/pagesStyles/Article/Article.module.scss';
import articles from '@/services/blogArticles/blogArticles.json';
import { ArticleNav } from '@/components/blog/ArticleNav/ArticleNav';
import { CurrentArticle } from '@/components/blog/CurrentArticle/CurrentArticle';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

export interface ArticleProps {
  params: { dynamicPath: string };
}

export default function Article({ params: { dynamicPath } }: ArticleProps) {
  const article = articles.find(
    (article) => article.dynamicPath === dynamicPath
  )!;
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      <Header />
      <main
        className={styles.main}
        style={{
          backgroundColor:
            theme === 'dark' ? colors.white : colors.globalBackground,
        }}
      >
        <section className={styles.article}>
          <div className={styles.articleContainer}>
            <ArticleNav article={article} />
            <CurrentArticle article={article} />
          </div>
        </section>
      </main>
      <Footer isVisible />
    </>
  );
}
