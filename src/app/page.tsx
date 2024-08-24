import { poppins } from '@/fonts/basic-fonts';
import { Metadata } from 'next';
import styles from './Home.module.scss';
import { Hero } from '@/components/layout/Hero/Hero';
import { ProductBanners } from '@/components/product/ProductsBanners/ProductsBanners';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';

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
      <Footer />
    </main>
  );
}
