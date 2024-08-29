import { poppins } from '@/fonts/basic-fonts';
import { Metadata } from 'next';
import styles from '@/styles/pagesStyles/Home/Home.module.scss';
import { Hero } from '@/components/layout/Hero/Hero';
import { ProductBanners } from '@/components/product/ProductsBanners/ProductsBanners';
import Header from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Values } from '@/components/layout/Values/Values';
import { Sales } from '@/components/layout/Sales/Sales';
import { Articles } from '@/components/layout/Articles/Articles';
import { ArrivalProducts } from '@/components/product/ArrivalProducts/ArrivalProducts';
import { valuesItems } from '@/constants/valuesItems';

const classNames = {
  item: styles.item,
  itemContainer: styles.itemContainer,
  itemIcon: styles.itemIcon,
  itemTitles: styles.itemTitles,
  itemSubTitle: styles.itemSubTitle,
  itemTitle: styles.itemTitle,
};

export const metadata: Metadata = {
  title: 'DreamSpace Interiors | Home',
  description:
    'Welcome to DreamSpace_Interiors, where we turn your interior design dreams into reality. Our website is a comprehensive resource for homeowners and businesses looking to revitalize their spaces with stylish, functional, and innovative design solutions.',
};

export default function Home() {
  return (
    <main className={`${poppins.className} ${styles.main}`}>
      <Header />
      <Hero />
      <ProductBanners />
      <ArrivalProducts />
      <Values container={styles.valuesContainer} values={valuesItems} classNames={classNames} />
      <Sales
        image="/images/sales/sales-banner.svg"
        title="SALE UP TO 35% OFF"
        secondTitle="HUNDREDS of New lower prices!"
        subTitle="It’s more affordable than ever to give every room in your home a
              stylish makeover"
        linkPath="Shop Now"
        className={{ blockInfo: '' }}
      />
      <Articles />
      <Footer isVisible />
    </main>
  );
}
