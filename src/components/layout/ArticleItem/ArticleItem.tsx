'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Meta } from 'grommet-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/navPaths';
import { useScreenResize } from '@/hooks/useScreenResize';

export interface ArticleItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    link?: string;
    dateTime?: string;
    dynamicPath: string;
  };
  classNames: {
    articlesItem: string;
    imageContainer: string;
    itemImage: string;
    overlay: string;
    metaIcon: string;
    articleTitles: string;
    itemTitle: string;
    itemLink: string;
    rightIcon: string;
    dateTitle?: string;
    largeIcon?: string;
  };
}
export const ArticleItem: FC<ArticleItemProps> = ({ item, classNames }) => {
  const pathname = usePathname();
  const { isResize } = useScreenResize(900);

  return (
    <div className={classNames.articlesItem} key={item.id}>
      <div className={classNames.imageContainer}>
        <Link href={`/blog/article/${item.dynamicPath}`}>
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
        </Link>
      </div>
      <div className={classNames.articleTitles}>
        <h4 className={classNames.itemTitle}>{item.title}</h4>
        {pathname === NavPaths.HOME ? (
          <Link className={classNames.itemLink} href="">
            Read More
            <Image
              src="/images/articles/arrow-right.svg"
              alt="Arrow Right Icon"
              width={20}
              height={20}
              className={classNames.rightIcon}
            />
          </Link>
        ) : (
          <h5 className={classNames.dateTitle}>{item.dateTime}</h5>
        )}
      </div>
    </div>
  );
};
