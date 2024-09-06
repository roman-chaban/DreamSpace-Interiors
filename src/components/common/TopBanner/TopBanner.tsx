'use client';


import type { FC } from 'react';
import styles from './TopBanner.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { NavPaths } from '@/enums/navPaths';
import { useScreenResize } from '@/hooks/useScreenResize';


interface TopBannerProps {
  params: {
    bannerImage: string;
    smallBannerImage: string;
    bannerLinks: {
      home: string;
      anotherLink: string;
    };
    title: string;
    subTitle: string;
  };
}

export const TopBanner: FC<TopBannerProps> = ({ params }) => {
  const { isResize } = useScreenResize(500);
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: isResize ? `url(${params.smallBannerImage})` : `url(${params.bannerImage})` }}

    >
      <div className={styles.bannerNav}>
        <Link className={styles.bannerLink} href={NavPaths.HOME}>
          {params.bannerLinks.home}{' '}
          <Image
            src="/banner/arrow-right.svg"
            alt="Arrow Right Icon"
            width={14}
            height={14}
          />{' '}
        </Link>
        <Link className={styles.bannerLink} href={NavPaths.SHOP}>
          {params.bannerLinks.anotherLink}
        </Link>
      </div>
      <div className={styles.bannerTitles}>
        <h1 className={styles.bannerTitle}>{params.title}</h1>
        <p className={styles.bannerSubTitle}>{params.subTitle}</p>
      </div>
    </div>
  );
};
