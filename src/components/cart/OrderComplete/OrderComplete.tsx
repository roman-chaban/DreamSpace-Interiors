import { useMemo, type FC } from 'react';
import styles from './OrderComplete.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { CompleteProduct } from '../CompleteProduct/CompleteProduct';
import {
  getOrderBackground,
  getOrderTitle,
} from '@/components/themeStyles/orderComplete/orderComplete';

interface OrderCompleteProps {
  total: number;
}

export const OrderComplete: FC<OrderCompleteProps> = ({ total }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const cartProducts = useAppSelector((state) => state.cart.goods);
  const goodCounter = useAppSelector((state) => state.cart.goodCounter);

  const hasProducts = cartProducts.length > 0;

  const orderDate = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, []);

  return (
    <div className={styles.orderComplete}>
      <div className={styles.completeContainer}>
        <div className={styles.orderBlock} style={getOrderBackground(theme)}>
          <h4 className={styles.thanksTitle} style={getOrderTitle(theme)}>
            {hasProducts ? 'Thank you! 🎉' : 'No products in your order'}
          </h4>
          <h2 className={styles.orderTitle} style={getOrderTitle(theme)}>
            {hasProducts
              ? 'Your order has been received'
              : 'Please add products to complete your order'}
          </h2>

          {hasProducts && (
            <div className={styles.orderProducts}>
              {cartProducts.map((good) => (
                <CompleteProduct
                  key={good.productId}
                  good={good}
                  goodCounter={goodCounter}
                />
              ))}
            </div>
          )}

          <ul className={styles.orderList}>
            <li className={styles.orderListItem} style={getOrderTitle(theme)}>
              Order code:
              <strong
                className={styles.orderListMark}
                style={getOrderTitle(theme)}
              >
                {hasProducts ? '#0123_45678' : '-'}
              </strong>
            </li>
            <li className={styles.orderListItem} style={getOrderTitle(theme)}>
              Date:
              <strong
                className={styles.orderListMark}
                style={getOrderTitle(theme)}
              >
                {hasProducts ? orderDate : '-'}
              </strong>
            </li>
            <li className={styles.orderListItem} style={getOrderTitle(theme)}>
              Total:
              <strong
                className={styles.orderListMark}
                style={getOrderTitle(theme)}
              >
                {hasProducts ? `$${total.toFixed(2)}` : '-'}
              </strong>
            </li>
            <li className={styles.orderListItem} style={getOrderTitle(theme)}>
              Payment method:
              <strong
                className={styles.orderListMark}
                style={getOrderTitle(theme)}
              >
                {hasProducts ? 'Credit card' : '-'}
              </strong>
            </li>
          </ul>

          <Button
            type="button"
            className={styles.orderButton}
            disabled={!hasProducts}
          >
            {hasProducts ? 'Purchase order' : 'Add products to purchase'}
          </Button>
        </div>
      </div>
    </div>
  );
};
