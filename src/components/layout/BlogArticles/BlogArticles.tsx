'use client';

import { useEffect, useState, type FC } from 'react';
import styles from './BlogArticles.module.scss';
import { BlogArticle } from '@/constants/blogArticles';
import { ArticleItem } from '@/components/layout/ArticleItem/ArticleItem';
import { Button } from '@/components/ui/Button/Button';
import blogArticles from '@/services/blogArticles/blogArticles.json';

export const BlogArticles: FC = () => {
  const [articles, setArticles] = useState<BlogArticle[]>(blogArticles);

  useEffect(() => {
    setArticles(articles);
  }, [articles]);

  return (
    <div className={styles.blogList}>
      {articles.map((item: BlogArticle) => (
        <ArticleItem
          item={item}
          key={item.id}
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
      ))}
      <div className={styles.showMoreContainer}>
        <Button className={styles.showMoreButton} type="button">
          Show more
        </Button>
      </div>
    </div>
  );
};
