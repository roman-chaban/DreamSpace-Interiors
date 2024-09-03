'use client';

import type { FC } from 'react';
import styles from './Coupon.module.scss';
import { TextInput } from '@/components/auth/TextInput/TextInput';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';

interface CouponProps {
  couponCode: string;
}

export const Coupon: FC = () => {
  const { register, formState, handleSubmit } = useForm<CouponProps>({
    defaultValues: { couponCode: '' },
  });
  return (
    <div className={styles.coupon}>
      <div className={styles.couponContainer}>
        <div className={styles.couponTitles}>
          <h3 className={styles.couponTitle}>Have a coupon?</h3>
          <p className={styles.couponSubTitle}>
            Add your code for an instant cart discount
          </p>
        </div>
        <div className={styles.couponInputBlock}>
          <div className={styles.couponLabel}>
            <TextInput
              placeholder="Coupon Code"
              type="text"
              id="coupon"
              className={styles.formInput}
              labelClassName={styles.couponLabel}
              register={{ ...register('couponCode', {}) }}
            />
            <Image
              src="/icons/coupon-icon.svg"
              width={24}
              height={24}
              alt="Coupon Icon"
            />
          </div>
          <Button type="button" className={styles.applyButton}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};
