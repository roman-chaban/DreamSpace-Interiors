import type { FC } from 'react';
import styles from './CurrentArticle.module.scss';
import { ArticleBlock, BlogArticle } from '@/constants/blogArticles';
import Image from 'next/image';
import { useScreenResize } from '@/hooks/useScreenResize';
import { ArticleBlog } from '../ArticleBlog/ArticleBlog';

interface CurrentArticleProps {
  article: BlogArticle;
}

export const CurrentArticle: FC<CurrentArticleProps> = ({ article }) => {
  return (
    <article className={styles.article}>
      <div className={styles.articleContainer}>
        <div className={styles.articleInfo}>
          <span className={styles.articleCategory}>{article.category}</span>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.articleAuthorBlock}>
            <h6 className={styles.authorTitle}>
              <Image
                src="/icons/nav/user-circle.svg"
                alt="User Circle Icon"
                width={24}
                height={24}
                className={styles.navIcon}
              />
              {article.articleAuthor}
            </h6>
            <data value={article.dateTime} className={styles.articleData}>
              <Image
                src="/icons/nav/calendar.svg"
                alt="User Calendar Icon"
                width={24}
                height={24}
                className={styles.navIcon}
              />
              {article.dateTime}
            </data>
          </div>
        </div>
        <div className={styles.articleNews}>
          <ArticleBlog article={article} />
        </div>
      </div>
    </article>
  );
};
