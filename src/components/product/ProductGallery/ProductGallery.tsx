'use client';

import type { FC } from 'react';
import styles from './ProductGallery.module.scss';
import { Product } from '@/types/products';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProductSwiper.scss';

export type ProductGalleryType = {
  product: Product;
};

export const ProductGallery: FC<ProductGalleryType> = ({ product }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryMainImage}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ disableOnInteraction: false }}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.slide}>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={400}
              height={400}
              className={styles.mainImage}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={400}
              height={400}
              className={styles.mainImage}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={400}
              height={400}
              className={styles.mainImage}
              priority
            />
          </SwiperSlide>
        </Swiper>
        <div className={styles.discountTitles}>
          <span className={styles.discountedTitle}>
            {product.discountedTitle}
          </span>
          <span className={styles.discountPercentage}>
            {product.discountPercentage}
          </span>
        </div>
      </div>
    </div>
  );
};
