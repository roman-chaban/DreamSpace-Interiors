'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { useScreenResize } from '@/hooks/useScreenResize';
import { BlogArticle } from '@/fixtures/blogArticles/blogArticles';
import styles from '@/components/blog/CurrentArticle/CurrentArticle.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getNavTitleLinkStyle } from '@/components/themeStyles/articleNav/articleNav';

interface ArticleBlog {
  article: BlogArticle;
}

export const ArticleBlog: FC<ArticleBlog> = ({ article }) => {
  const { isResize } = useScreenResize(670);
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      {article.articleBlock.map((blogItem) => (
        <div className={styles.newsBlocks} key={blogItem.articleId}>
          <div className={styles.newsBlock}>
            <Image
              className={styles.newsBanner}
              src={blogItem.image}
              alt={blogItem.title}
              width={1120}
              height={645}
            />
            <div className={styles.newsInfo}>
              <p
                className={styles.newsSubTitle}
                style={getNavTitleLinkStyle(theme)}
              >
                {blogItem.subTitle}
              </p>
              <h3
                className={styles.newsTitle}
                style={getNavTitleLinkStyle(theme)}
              >
                {blogItem.title}
              </h3>
              <p
                className={styles.newsSecondTitle}
                style={getNavTitleLinkStyle(theme)}
              >
                {blogItem.secondTitle}
              </p>
            </div>
          </div>
          {isResize ? (
            <div className={styles.newContent}>
              {blogItem.secondBlock.map((secondNews, index) => (
                <div className={styles.secondNews} key={index}>
                  <div className={styles.newContentBlock}>
                    <Image
                      src={secondNews.primaryImage}
                      alt={secondNews.blockInfo?.title}
                      width={548}
                      height={729}
                      className={styles.newsImageBanner}
                    />
                    <h3
                      className={styles.secondNewsBlockTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.title}
                    </h3>
                    <p
                      className={styles.secondNewsBlockSubTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.subTitle}
                    </p>
                  </div>
                  <div className={styles.newContentBlock}>
                    <Image
                      src={secondNews.secondaryImage}
                      alt={secondNews.blockInfo?.title}
                      width={548}
                      height={729}
                      className={styles.newsImageBanner}
                    />
                    <h3
                      className={styles.secondNewsBlockTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.secondTitle}
                    </h3>
                    <p
                      className={styles.secondNewsBlockSubTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.secondSubTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.secondNewsBlock}>
              {blogItem.secondBlock.map((secondNews, index) => (
                <div className={styles.secondNews} key={index}>
                  <div className={styles.secondNewsImages}>
                    <Image
                      src={secondNews.primaryImage}
                      alt={secondNews.blockInfo?.title}
                      width={548}
                      height={729}
                      className={styles.newsImageBanner}
                    />
                    <Image
                      src={secondNews.secondaryImage}
                      alt={secondNews.blockInfo?.title}
                      width={548}
                      height={729}
                      className={styles.newsImageBanner}
                    />
                  </div>
                  <div className={styles.secondNewsBlock}>
                    <h3
                      className={styles.secondNewsBlockTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.title}
                    </h3>
                    <p
                      className={styles.secondNewsBlockSubTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.subTitle}
                    </p>
                    <h3
                      className={styles.secondNewsBlockTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.secondTitle}
                    </h3>
                    <p
                      className={styles.secondNewsBlockSubTitle}
                      style={getNavTitleLinkStyle(theme)}
                    >
                      {secondNews.blockInfo.secondSubTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={styles.tertiaryNewsBlock}>
            {blogItem.tertiaryBlock.map((tertiaryNews, index) => (
              <div className={styles.tertiaryNewsBlockItems} key={index + 1}>
                <div className={styles.tertiaryNewsImages}>
                  <Image
                    src={tertiaryNews.primaryImage}
                    alt={tertiaryNews.blockInfo?.title}
                    width={548}
                    height={729}
                    className={styles.newsImageBanner}
                  />
                </div>
                <div className={styles.tertiaryNewsBlock}>
                  <h3
                    className={styles.tertiaryNewsBlockTitle}
                    style={getNavTitleLinkStyle(theme)}
                  >
                    {tertiaryNews.blockInfo.title}
                  </h3>
                  <p
                    className={styles.tertiaryNewsBlockSubTitle}
                    style={getNavTitleLinkStyle(theme)}
                  >
                    {tertiaryNews.blockInfo.subTitle}
                  </p>
                  <h3
                    className={styles.tertiaryNewsBlockTitle}
                    style={getNavTitleLinkStyle(theme)}
                  >
                    {tertiaryNews.blockInfo.secondTitle}
                  </h3>
                  <p
                    className={styles.tertiaryNewsBlockSubTitle}
                    style={getNavTitleLinkStyle(theme)}
                  >
                    {tertiaryNews.blockInfo.secondSubTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
