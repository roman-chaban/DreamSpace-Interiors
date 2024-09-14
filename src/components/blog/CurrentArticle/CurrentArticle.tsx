'use client';

import type { FC } from 'react';
import styles from './CurrentArticle.module.scss';
import { BlogArticle } from '@/fixtures/blogArticles/blogArticles';
import { ArticleBlog } from '../ArticleBlog/ArticleBlog';
import { getNavTitleLinkStyle } from '@/components/themeStyles/articleNav/articleNav';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { Calendar, User } from 'grommet-icons';
import { colors } from '@/theme/theme-variables';

interface CurrentArticleProps {
  article: BlogArticle;
}

export const CurrentArticle: FC<CurrentArticleProps> = ({ article }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <article className={styles.article}>
      <div className={styles.articleContainer}>
        <div className={styles.articleInfo}>
          <span
            className={styles.articleCategory}
            style={getNavTitleLinkStyle(theme)}
          >
            {article.category}
          </span>
          <h1
            className={styles.articleTitle}
            style={getNavTitleLinkStyle(theme)}
          >
            {article.title}
          </h1>
          <div className={styles.articleAuthorBlock}>
            <h6
              className={styles.authorTitle}
              style={getNavTitleLinkStyle(theme)}
            >
              <User
                style={{ width: 20, height: 20 }}
                color={theme === 'dark' ? '' : colors.white}
              />
              {article.articleAuthor}
            </h6>
            <data
              value={article.dateTime}
              className={styles.articleData}
              style={getNavTitleLinkStyle(theme)}
            >
              <Calendar
                style={{ width: 20, height: 20 }}
                color={theme === 'dark' ? '' : colors.white}
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
