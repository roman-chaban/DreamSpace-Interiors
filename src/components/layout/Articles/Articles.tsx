import type { FC } from 'react';
import styles from './Articles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleListItem, articlesList } from '@/constants/articlesList';
import { ArticleItem } from '@/components/layout/ArticleItem/ArticleItem';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';
import { FormNextLink } from 'grommet-icons';

export const Articles: FC = () => {
  const { theme } = useTheme();

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  return (
    <section className={styles.articles}>
      <div className={styles.articlesContainer}>
        <div className={styles.articlesNav}>
          <h3
            className={styles.articlesTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            Articles
          </h3>
          <Link
            href=""
            className={`${styles.articlesLink} ${themeClass}`}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
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
