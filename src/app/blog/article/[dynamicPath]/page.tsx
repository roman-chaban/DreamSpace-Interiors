'use client';

import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import styles from '@/styles/pagesStyles/Article/Article.module.scss';
import articles from '@/services/blogArticles/blogArticles.json';
import { ArticleNav } from '@/components/blog/ArticleNav/ArticleNav';
import { CurrentArticle } from '@/components/blog/CurrentArticle/CurrentArticle';

export interface ArticleProps {
  params: { dynamicPath: string };
}

export default function Article({ params: { dynamicPath } }: ArticleProps) {
  const article = articles.find(
    (article) => article.dynamicPath === dynamicPath
  )!;
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.article}>
          <div className={styles.articleContainer}>
            <ArticleNav article={article} />
            <CurrentArticle article={article} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
