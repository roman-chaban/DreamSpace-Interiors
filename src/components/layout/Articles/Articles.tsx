import type { FC } from 'react';
import styles from './Articles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleListItem, articlesList } from '@/constants/articlesList';

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
            <div className={styles.articlesItem} key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                width={357}
                height={325}
                className={styles.itemImage}
              />
              <div className={styles.articleTitles}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <Link className={styles.itemLink} href="">
                  Read More
                  <Image
                    src="/images/articles/arrow-right.svg"
                    alt="Arrow Right Icon"
                    width={20}
                    height={20}
                    className={styles.rightIcon}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
