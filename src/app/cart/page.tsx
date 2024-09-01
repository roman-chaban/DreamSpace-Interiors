'use client';

import { CartProcess } from '@/components/cart/CartProcess/CartProcess';
import { CartProducts } from '@/components/cart/CartProducts/CartProducts';
import { CartSummary } from '@/components/cart/CartSummary/CartSummary';
import { Box } from '@/components/common/Box/Box';
import { Coupon } from '@/components/common/Coupon/Coupon';
import PageLayout from '@/components/common/PageLayout/PageLayout';
import { NavPaths } from '@/enums/navPaths';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import { useScreenResize } from '@/hooks/useScreenResize';
import styles from '@/styles/pagesStyles/Cart/Cart.module.scss';
import { FormPrevious } from 'grommet-icons';
import Link from 'next/link';

export default function Cart() {
  useChangePageTitle('DreamSpace Interiors | Cart');
  const { isResize } = useScreenResize(500);
  return (
    <PageLayout>
      <section className={styles.cart}>
        {isResize && (
          <Link href={NavPaths.HOME} className={styles.goBackLink}>
            <FormPrevious style={{ width: 20, height: 20 }} />
            Back
          </Link>
        )}
        <CartProcess />
        <Box className={styles.productsRowReverse}>
          <div className={styles.productsSummaryBlock}>
            <CartProducts />
            <CartSummary />
          </div>
          <Coupon />
        </Box>
      </section>
    </PageLayout>
  );
}
