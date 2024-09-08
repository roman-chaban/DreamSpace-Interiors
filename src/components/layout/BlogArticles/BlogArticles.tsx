'use client';

import { useEffect, useState, type FC } from 'react';
import { color, motion } from 'framer-motion';
import styles from './BlogArticles.module.scss';
import { BlogArticle } from '@/constants/blogArticles';
import { ArticleItem } from '@/components/layout/ArticleItem/ArticleItem';
import { Button } from '@/components/ui/Button/Button';
import blogArticles from '@/services/blogArticles/blogArticles.json';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

export const BlogArticles: FC = () => {
  const [articles, setArticles] = useState<BlogArticle[]>(blogArticles);
  const [visibleArticleCount, setVisibleArticlesCount] = useState<number>(6);
  const { theme } = useTheme();

  const buttonThemeStyles = {
    border: theme === 'dark' ? '' : `1.5px solid ${colors.white}`,
    color: theme === 'dark' ? '' : colors.white,
    backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
  };

  useEffect(() => {
    setArticles(articles);
  }, [articles]);

  const handleLoadMore = () => {
    setVisibleArticlesCount((prevCount) => prevCount + 3);
  };

  return (
    <div className={styles.blogList}>
      {articles.slice(0, visibleArticleCount).map((item: BlogArticle) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={styles.blogListItem}
        >
          <ArticleItem
            item={item}
            classNames={{
              articlesItem: styles.blogListItem,
              imageContainer: styles.imageContainer,
              itemImage: styles.itemImage,
              overlay: styles.overlay,
              metaIcon: styles.metaIcon,
              articleTitles: styles.blogTitles,
              itemTitle: styles.itemTitle,
              itemLink: styles.itemLink,
              rightIcon: styles.rightIcon,
              dateTitle: styles.dateTitle,
              largeIcon: styles.largeIcon,
            }}
          />
        </motion.div>
      ))}

      <div className={styles.showMoreContainer}>
        {visibleArticleCount === articles.length ? (
          ''
        ) : (
          <Button
            className={styles.showMoreButton}
            onClick={handleLoadMore}
            type="button"
            style={buttonThemeStyles}
          >
            Show more
          </Button>
        )}
      </div>
    </div>
  );
};
