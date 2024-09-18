'use client';

import { useMemo, type FC } from 'react';
import styles from './OrderSummary.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { TextInput } from '@/components/auth/TextInput/TextInput';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getFormButtonStyles,
  getFormContainerStyle,
  getFormTitleStyle,
} from '@/components/themeStyles/contactInformationStyles/contactInformationStyles';
import { Ticket } from 'grommet-icons';
import { colors } from '@/theme/theme-variables';
import { OrderProduct } from '../OrderProduct/OrderProduct';

interface OrderSummaryProps {
  total: number;
  subTotal: number;
}

export const OrderSummary: FC<OrderSummaryProps> = ({ total, subTotal }) => {
  const { register } = useForm();
  const theme = useAppSelector((state) => state.theme.theme);
  const cartProducts = useAppSelector((state) => state.cart.goods);

  return (
    <div className={styles.orderSummary}>
      <div
        className={styles.orderSummaryContainer}
        style={getFormContainerStyle(theme)}
      >
        <div className={styles.orderHeader}>
          <h3 className={styles.summaryTitle} style={getFormTitleStyle(theme)}>
            Order summary
          </h3>
        </div>
        <div className={styles.orderMain} style={getFormTitleStyle(theme)}>
          {cartProducts.length > 0 ? (
            cartProducts.map((good) => (
              <OrderProduct key={good.productId} good={good} />
            ))
          ) : (
            <h4 className={styles.notGoodsTitle} >No goods yet</h4>
          )}
        </div>
        <div className={styles.orderFooter}>
          <div className={styles.applyBlock}>
            <TextInput
              id="coupon"
              className={styles.input}
              type="text"
              placeholder="Choose your coupon"
              register={{ ...register('coupon') }}
            />
            <Button
              type="button"
              className={styles.apply}
              style={getFormButtonStyles(theme)}
            >
              Apply
            </Button>
          </div>
          <div className={styles.orderFields}>
            <div className={styles.discountField}>
              <div className={styles.fieldItem}>
                <Ticket color={theme === 'dark' ? '' : colors.white} />
                <h5
                  className={styles.itemTitle}
                  style={getFormTitleStyle(theme)}
                >
                  Jenkem
                </h5>
              </div>
              <strong
                className={styles.discountHeading}
                style={getFormTitleStyle(theme)}
              >
                -$25.00 [Remove]
              </strong>
            </div>
            <div className={styles.shippingField}>
              <h5
                className={styles.shippingTitle}
                style={getFormTitleStyle(theme)}
              >
                Shipping:
              </h5>
              <strong
                className={styles.freeTitle}
                style={getFormTitleStyle(theme)}
              >
                Free
              </strong>
            </div>
            <div className={styles.subtotalField}>
              <h5
                className={styles.subtotalTitle}
                style={getFormTitleStyle(theme)}
              >
                Subtotal:
              </h5>
              <strong className={styles.price} style={getFormTitleStyle(theme)}>
                {subTotal.toFixed(2)}$
              </strong>
            </div>
            <div className={styles.totalField}>
              <h5
                className={styles.totalTitle}
                style={getFormTitleStyle(theme)}
              >
                Total:
              </h5>
              <strong
                className={styles.totalPrice}
                style={getFormTitleStyle(theme)}
              >
                {total < 0 ? '0.00$' : total.toFixed(2)}$
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
