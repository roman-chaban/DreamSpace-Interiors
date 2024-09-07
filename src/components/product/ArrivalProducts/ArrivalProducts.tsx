'use client';

import { Product, Products } from '@/types/products';
import { useEffect, useState, FC } from 'react';
import currentProducts from '@/services/products/products.json';
import { ArrivalProduct } from '../ArrivalProduct/ArrivalProduct';
import styles from './ArrivalProducts.module.scss';
import { Swiper as ArrivalSwiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import './ArrivalSwiper.scss';
import Image from 'next/image';
import { inter } from '@/fonts/basic-fonts';

export const ArrivalProducts: FC = () => {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    setProducts(currentProducts);
  }, []);

  return (
    <section className={`${styles.products} ${inter.className}`}>
      <div className={styles.productsContainer}>
        <div className={styles.arrivalsNav}>
          <h3 className={styles.arrivalTitle}>New Arrivals</h3>
          <Link href="" className={styles.arrivalLink}>
            More Products{' '}
            <Image
              src="/images/banner/arrow-right.svg"
              alt="Arrow right icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <ArrivalSwiper
          className={styles.arrivalSwiper}
          modules={[Pagination, Navigation, Autoplay, Scrollbar]}
          spaceBetween={30}
          slidesPerView={4}
          loop={false}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            900: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {products.map((product: Product) => (
            <SwiperSlide
              key={product.productId}
              className={styles.arrivalSlide}
            >
              <ArrivalProduct product={product} />
            </SwiperSlide>
          ))}
        </ArrivalSwiper>
      </div>
    </section>
  );
};
