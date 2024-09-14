'use client';

import { CartProcess } from '@/components/cart/CartProcess/CartProcess';
import PageLayout from '@/components/common/PageLayout/PageLayout';
import { NavPaths } from '@/enums/navPaths';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import { useScreenResize } from '@/hooks/useScreenResize';
import styles from '@/styles/pagesStyles/Cart/Cart.module.scss';
import { FormPrevious } from 'grommet-icons';
import Link from 'next/link';

export default function Cart() {
  useChangePageTitle('DreamSpace Interiors | Cart');
  const { isResize } = useScreenResize(500);
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      <PageLayout>
        <section className={styles.cart}>
          {isResize && (
            <Link href={NavPaths.HOME} className={styles.goBackLink}>
              <FormPrevious style={{ width: 20, height: 20 }} />
              Back
            </Link>
          )}
          <CartProcess />
        </section>
      </PageLayout>
    </>
  );
}
