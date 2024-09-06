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
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
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
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        >
          <h1 className={styles.heroTitle}>
            Simply Unique <span className={styles.titleMark}>/</span>
            Simply Better <span className={styles.titleMark}>.</span>
          </h1>
          <p className={styles.heroSubTitle}>
            <span className={styles.subTitleMark}>3legant</span> is a gift &
            decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
