'use client';

import type { FC } from 'react';
import styles from './ArticleNav.module.scss';
import { BlogArticle } from '@/constants/blogArticles';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';
import Image from 'next/image';
import { useScreenResize } from '@/hooks/useScreenResize';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getNavTitleLinkStyle } from '@/components/themeStyles/articleNav/articleNav';

interface ArticleNavProps {
  article: BlogArticle;
}

export const ArticleNav: FC<ArticleNavProps> = ({ article }) => {
  const { isResize } = useScreenResize(670);
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <nav className={styles.articleNav}>
      {isResize ? (
        <Link href={NavPaths.BLOG} className={styles.goBackLink}>
          <Image
            src="/icons/nav/arrow-back.svg"
            alt="Arrow Back Icon"
            width={14}
            height={14}
          />{' '}
          Back
        </Link>
      ) : (
        <div className={styles.articleNavContainer}>
          <Link href={NavPaths.HOME} className={styles.navLink} style={getNavTitleLinkStyle(theme)}>
            Home{' '}
            <Image
              src="/icons/nav/gray-right.svg"
              alt="Arrow Right Icon"
              width={16}
              height={16}
            />
          </Link>
          <Link href={NavPaths.BLOG} className={styles.navLink} style={getNavTitleLinkStyle(theme)}>
            Blog{' '}
            <Image
              src="/icons/nav/gray-right.svg"
              alt="Arrow Right Icon"
              width={16}
              height={16}
            />
          </Link>
          <h5 className={styles.navTitle} style={getNavTitleLinkStyle(theme)}>{article.title}</h5>
        </div>
      )}
    </nav>
  );
};
