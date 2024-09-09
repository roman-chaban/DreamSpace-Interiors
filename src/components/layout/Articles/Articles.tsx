'use client';

import type { FC } from 'react';
import styles from './Articles.module.scss';
import Link from 'next/link';
import { ArticleListItem, articlesList } from '@/constants/articlesList';
import { ArticleItem } from '@/components/layout/ArticleItem/ArticleItem';
import { colors } from '@/theme/theme-variables';
import { FormNextLink } from 'grommet-icons';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getArticlesTitle } from '@/components/themeStyles/articlesStyles/articlesStyles';

export const Articles: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  return (
    <section className={styles.articles}>
      <div className={styles.articlesContainer}>
        <div className={styles.articlesNav}>
          <h3 className={styles.articlesTitle} style={getArticlesTitle(theme)}>
            Articles
          </h3>
          <Link
            href=""
            className={`${styles.articlesLink} ${themeClass}`}
            style={getArticlesTitle(theme)}
          >
            More Articles{' '}
            <FormNextLink
              color={theme === 'dark' ? colors.black : colors.white}
            />
          </Link>
        </div>
        <div className={styles.articlesList}>
          {articlesList.map((item: ArticleListItem) => (
            <ArticleItem
              item={item}
              key={item.id}
              classNames={{
                articlesItem: styles.articlesItem,
                imageContainer: styles.imageContainer,
                itemImage: styles.itemImage,
                overlay: styles.overlay,
                metaIcon: styles.metaIcon,
                articleTitles: styles.articleTitles,
                itemTitle: styles.itemTitle,
                itemLink: styles.itemLink,
                rightIcon: styles.rightIcon,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
