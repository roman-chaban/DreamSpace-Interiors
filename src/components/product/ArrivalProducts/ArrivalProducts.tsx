import { FC, useEffect, useState } from 'react';
import currentProducts from '@/services/products/products.json';
import { ArrivalProduct } from '../ArrivalProduct/ArrivalProduct';
import styles from './ArrivalProducts.module.scss';
import { Swiper as ArrivalSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import './ArrivalSwiper.scss';
import { inter } from '@/fonts/basic-fonts';
import { colors } from '@/theme/theme-variables';
import { FormNextLink } from 'grommet-icons';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getArrivalTitleStyle } from '@/components/themeStyles/arrivalProductStyles/arrivalProductStyles';
import { NavPaths } from '@/enums/navPaths';
import { Product, Products } from '@/types/products';

export const ArrivalProducts: FC = () => {
  const [products, setProducts] = useState<Products>([]);
  const theme = useAppSelector((state) => state.theme.theme);

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  useEffect(() => {
    setProducts(currentProducts);
  }, []);

  return (
    <section className={`${styles.products} ${inter.className}`}>
      <div className={styles.productsContainer}>
        <div className={styles.arrivalsNav}>
          <h3
            className={styles.arrivalTitle}
            style={getArrivalTitleStyle(theme)}
          >
            New Arrivals
          </h3>
          <Link
            href={NavPaths.SHOP}
            className={`${styles.arrivalLink} ${themeClass}`}
            style={getArrivalTitleStyle(theme)}
          >
            More Products{' '}
            <FormNextLink
              color={theme === 'dark' ? colors.black : colors.white}
            />
          </Link>
        </div>
        <ArrivalSwiper
          className={`${styles.arrivalSwiper} ${themeClass}`}
          modules={[Navigation, Autoplay, Scrollbar]}
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
