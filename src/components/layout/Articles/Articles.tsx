import type { FC } from 'react';
import styles from './Articles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleListItem, articlesList } from '@/constants/articlesList';
import { ArticleItem } from '@/components/layout/ArticleItem/ArticleItem';

export const Articles: FC = () => {
  return (
    <section className={styles.articles}>
      <div className={styles.articlesContainer}>
        <div className={styles.articlesNav}>
          <h3 className={styles.articlesTitle}>Articles</h3>
          <Link href="" className={styles.articlesLink}>
            More Articles{' '}
            <Image
              src="/images/banner/arrow-right.svg"
              alt="Arrow right icon"
              width={20}
              height={20}
              className={styles.rightIcon}
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
