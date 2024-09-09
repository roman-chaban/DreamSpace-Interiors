'use client';

import type { FC } from 'react';
import styles from './Coupon.module.scss';
import { TextInput } from '@/components/auth/TextInput/TextInput';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { Ticket } from 'grommet-icons';
import {
  getThemeInputBox,
  getThemeInputTransparentBackground,
  getThemeTitlesStyles,
} from '@/components/themeStyles/couponStyles/couponStyles';

interface CouponProps {
  couponCode: string;
}

export const Coupon: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const { register, formState, handleSubmit } = useForm<CouponProps>({
    defaultValues: { couponCode: '' },
  });
  return (
    <div className={styles.coupon}>
      <div className={styles.couponContainer}>
        <div className={styles.couponTitles}>
          <h3
            className={styles.couponTitle}
            style={getThemeTitlesStyles(theme)}
          >
            Have a coupon?
          </h3>
          <p
            className={styles.couponSubTitle}
            style={getThemeTitlesStyles(theme)}
          >
            Add your code for an instant cart discount
          </p>
        </div>
        <div
          className={styles.couponInputBlock}
          style={getThemeInputBox(theme)}
        >
          <div className={styles.couponLabel}>
            <TextInput
              placeholder="Coupon Code"
              type="text"
              id="coupon"
              className={`${styles.formInput} ${
                theme === 'dark' ? styles.darkTheme : styles.lightTheme
              }`}
              style={getThemeInputTransparentBackground(theme)}
              labelClassName={styles.couponLabel}
              register={{ ...register('couponCode', {}) }}
            />
            <Ticket color={theme === 'dark' ? colors.darkGray : colors.white} />
          </div>
          <Button
            type="button"
            className={styles.applyButton}
            style={getThemeTitlesStyles(theme)}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};
