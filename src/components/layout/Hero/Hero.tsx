'use client';

import Image from 'next/image';
import styles from './Hero.module.scss';
import type { FC } from 'react';
import { Swiper as HeroSwiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './Swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export const Hero: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const containerStyle = {
    color: theme === 'dark' ? colors.darkGray : colors.white,
  };
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <HeroSwiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ disableOnInteraction: false }}
        >
          <SwiperSlide>
            <Image
              priority
              src="images/slider/slider-banner.svg"
              alt="Slide Image"
              width={1120}
              height={536}
              className="sliderImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              priority
              src="images/slider/secondSlider-banner.svg"
              alt="Slide Image"
              width={1120}
              height={536}
              className="sliderImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              priority
              src="images/slider/tertiarySlider-banner.svg"
              alt="Slide Image"
              width={1120}
              height={536}
              className="sliderImage"
            />
          </SwiperSlide>
        </HeroSwiper>
        <div className={styles.heroContent}>
          <h1
            className={styles.heroTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            Simply Unique <span className={styles.titleMark}>/</span>
            Simply Better <span className={styles.titleMark}>.</span>
          </h1>
          <p className={styles.heroSubTitle} style={containerStyle}>
            <span
              className={styles.subTitleMark}
              style={{ color: theme === 'dark' ? colors.black : colors.white }}
            >
              3legant
            </span>{' '}
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.
          </p>
        </div>
      </div>
    </section>
  );
};
