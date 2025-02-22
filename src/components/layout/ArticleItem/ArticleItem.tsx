'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { FormNextLink, Meta } from 'grommet-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/navPaths';
import { useScreenResize } from '@/hooks/useScreenResize';
import { ArticleItemProps } from '@/types/article-item';
import { colors } from '@/theme/theme-variables';
import styles from '@/components/layout/Articles/Articles.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getSecondTitleStyle,
  getTitleItemStyle,
} from '@/components/themeStyles/articleItemStyles/ArticleItemStyles';

export const ArticleItem: FC<ArticleItemProps> = ({ item, classNames }) => {
  const pathname = usePathname();
  const { isResize } = useScreenResize(900);
  const theme = useAppSelector((state) => state.theme.theme);

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={classNames.articlesItem} key={item.id}>
      <div className={classNames.imageContainer}>
        <Image
          priority
          src={item.image}
          alt={item.title}
          width={357}
          height={325}
          className={classNames.itemImage}
        />
        <div className={classNames.overlay}>
          <Meta
            color="white"
            className={`${classNames.metaIcon} ${
              isResize ? classNames.largeIcon : ''
            }`}
          />
          Buy one or buy a few and make every space where you sit more
          convenient. Light and easy to move around with removable tray top,
          handy for serving snacks.
        </div>
      </div>
      <div className={classNames.articleTitles}>
        <Link
          href={`/blog/article/${item.dynamicPath}`}
          style={{ textDecoration: 'none' }}
        >
          <h4 className={classNames.itemTitle} style={getTitleItemStyle(theme)}>
            {item.title}
          </h4>
        </Link>
        {pathname === NavPaths.HOME ? (
          <Link
            className={`${classNames.itemLink} ${themeClass}`}
            href={NavPaths.BLOG}
            style={getSecondTitleStyle(theme)}
          >
            Read More
            <FormNextLink
              color={theme === 'dark' ? colors.black : colors.white}
            />
          </Link>
        ) : (
          <h5
            className={classNames.dateTitle}
            style={getSecondTitleStyle(theme)}
          >
            {item.dateTime}
          </h5>
        )}
      </div>
    </div>
  );
};
