'use client';

import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { ProductNav } from '@/components/product/ProductNav/ProductNav';
import products from '@/services/products/products.json';
import { Product as ProductType } from '@/types/products';
import styles from '@/styles/pagesStyles/Product/Product.module.scss';
import { Container } from '@/components/ui/Container/Container';
import { ProductGallery } from '@/components/product/ProductGallery/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo/ProductInfo';

interface Params {
  params: {
    title: string;
  };
}

export default function Product({ params: { title } }: Params) {
  const findCurrentProduct = products.find(
    (product) => product.title === title.replaceAll('-', ' ')
  ) as ProductType;

  return (
    <>
      <Header />
      <main>
        <section className={styles.product}>
          <div className={styles.productContainer}>
            <ProductNav product={findCurrentProduct} />
            <Container className={styles.productInformation}>
              <ProductGallery product={findCurrentProduct} />
              <ProductInfo product={findCurrentProduct} />
            </Container>
          </div>
        </section>
      </main>
      <Footer isVisible />
    </>
  );
}
