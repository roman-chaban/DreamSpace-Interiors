'use client';

import type { FC } from 'react';
import styles from './OrderSummary.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { TextInput } from '@/components/auth/TextInput/TextInput';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

export const OrderSummary: FC = () => {
  const { register } = useForm();

  return (
    <div className={styles.orderSummary}>
      <div className={styles.orderSummaryContainer}>
        <div className={styles.orderHeader}>
          <h3 className={styles.summaryTitle}>Order summary</h3>
        </div>
        <div className={styles.orderMain}>main</div>
        <div className={styles.orderFooter}>
          <div className={styles.applyBlock}>
            <TextInput
              id="coupon"
              className={styles.input}
              type="text"
              placeholder="Choose your coupon"
              register={{ ...register('coupon') }}
            />
            <Button type="button" className={styles.apply}>
              Apply
            </Button>
          </div>
          <div className={styles.orderFields}>
            <div className={styles.discountField}>
              <div className={styles.fieldItem}>
                <Image
                  src="/icons/ticket-percent.svg"
                  width={24}
                  height={24}
                  alt="Coupon Icon"
                />
                <h5 className={styles.itemTitle}>Jenkem</h5>
              </div>
              <strong className={styles.discountHeading}>
                -$25.00 [Remove]
              </strong>
            </div>
            <div className={styles.shippingField}>
              <h5 className={styles.shippingTitle}>Shipping</h5>
              <strong className={styles.freeTitle}>Free</strong>
            </div>
            <div className={styles.subtotalField}>
              <h5 className={styles.subtotalTitle}>Subtotal</h5>
              <strong className={styles.price}></strong>
            </div>
            <div className={styles.totalField}>
              <h5 className={styles.totalTitle}>Total</h5>
              <strong className={styles.totalPrice}></strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
