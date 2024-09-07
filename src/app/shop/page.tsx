'use client';

import { TopBanner } from '@/components/common/TopBanner/TopBanner';
import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { ShopProducts } from '@/components/product/ShopProducts/ShopProducts';
import { shopNavItems } from '@/constants/shopNav';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { params } from '@/types/params';
import { useState, ReactNode, Suspense, useEffect } from 'react';
import Loading from '../loading';
import { ShopNav } from '@/components/common/ShopNav/ShopNav';
import { ShopFeatures } from '@/components/product/ShopFeatures/ShopFeatures';
import { ShopCategoriesPrices } from '@/components/product/ShopCategoriesPrices/ShopCategoriesPrices';
import currentProducts from '@/services/products/products.json';
import { Products } from '@/types/products';

export default function Shop() {
  useChangePageTitle('DreamSpace Interiors | Shop');
  const [selectedTab, setSelectedTab] = useState<number>(shopNavItems[0].id);
  const handleSelectTab = (id: number) => setSelectedTab(id);
  const [products, setProducts] = useState<Products>(currentProducts);

  useEffect(() => {
    setProducts(currentProducts);
  }, []);

  const contentMap: Record<number, ReactNode> = {
    1: (
      <>
        <Sidebar />
        <ShopProducts
          items={shopNavItems}
          selectedItemId={selectedTab}
          onSelectContent={handleSelectTab}
        />
      </>
    ),
    2: (
      <>
        <ShopProducts
          items={shopNavItems}
          selectedItemId={selectedTab}
          onSelectContent={handleSelectTab}
        />
      </>
    ),
    3: (
      <div className={styles.shopFeatures}>
        <div className={styles.shopFeaturesProducts}>
          <ShopFeatures />
          <ShopNav
            items={shopNavItems}
            onSelectContent={handleSelectTab}
            selectedItemId={selectedTab}
          />
        </div>
        <ShopCategoriesPrices products={products} />
      </div>
    ),
  };

  const renderContent = () => contentMap[selectedTab] || contentMap[1];

  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <main className={styles.shopMain}>
        <section className={styles.shop}>
          <div className={styles.shopContainer}>
            <TopBanner params={params} />
            <div className={styles.shopContent}>{renderContent()}</div>
          </div>
        </section>
      </main>
      <Footer isVisible />
    </Suspense>
  );
}
