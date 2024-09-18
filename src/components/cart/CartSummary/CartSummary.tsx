'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomRadioButton } from '@/components/ui/CustomRadioButton/CustomRadioButton';
import styles from './CartSummary.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { Button } from '@/components/ui/Button/Button';
import {
  getSummaryButtonStyles,
  getSummaryContainerStyles,
  getSummaryTitleThemeStyle,
} from '@/components/themeStyles/cartSummaryStyles/cartSummaryStyles';

interface FormValues {
  option?: string;
  total: number;
  subTotal: number;
}

export const CartSummary: FC<FormValues> = ({ subTotal, total }) => {
  const { register, watch, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      option: '',
    },
  });

  const theme = useAppSelector((state) => state.theme.theme);

  const selectedValue = watch('option', '');
  const onSubmitRadio: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.cartSummary} onSubmit={handleSubmit(onSubmitRadio)}>
      <div
        className={styles.summaryContainer}
        style={getSummaryContainerStyles(theme)}
      >
        <h4 className={styles.title} style={getSummaryTitleThemeStyle(theme)}>
          Cart summary
        </h4>
        <div className={styles.summaryCheckoutButtons}>
          <div
            className={styles.checkoutButtonBlock}
            style={getSummaryContainerStyles(theme)}
          >
            <CustomRadioButton
              className={styles.radio}
              labelClassName={styles.radioLabel}
              label="Free shipping"
              value="option1"
              checked={selectedValue === 'option1'}
              onChange={() => setValue('option', 'option1')}
              style={getSummaryTitleThemeStyle(theme)}
            />
            <span
              className={styles.price}
              style={getSummaryTitleThemeStyle(theme)}
            >
              $0.00
            </span>
          </div>
          <div
            className={styles.checkoutButtonBlock}
            style={getSummaryContainerStyles(theme)}
          >
            <CustomRadioButton
              className={styles.radio}
              labelClassName={styles.radioLabel}
              label="Express shipping"
              value="option2"
              checked={selectedValue === 'option2'}
              onChange={() => setValue('option', 'option2')}
              style={getSummaryTitleThemeStyle(theme)}
            />
            <span
              className={styles.price}
              style={getSummaryTitleThemeStyle(theme)}
            >
              +$15.00
            </span>
          </div>
          <div
            className={styles.checkoutButtonBlock}
            style={getSummaryContainerStyles(theme)}
          >
            <CustomRadioButton
              className={styles.radio}
              labelClassName={styles.radioLabel}
              label="Pick Up"
              value="option3"
              checked={selectedValue === 'option3'}
              onChange={() => setValue('option', 'option3')}
              style={getSummaryTitleThemeStyle(theme)}
            />
            <span
              className={styles.price}
              style={getSummaryTitleThemeStyle(theme)}
            >
              $21.00
            </span>
          </div>
        </div>
        <h5
          className={styles.subTotalTitle}
          style={getSummaryTitleThemeStyle(theme)}
        >
          Subtotal: <span>{subTotal.toFixed(2)}$</span>
        </h5>
        <h3
          className={styles.totalTitle}
          style={getSummaryTitleThemeStyle(theme)}
        >
          Total:{' '}
          {total < 0 ? <span>0.00$</span> : <span>{total.toFixed(2)}$</span>}
        </h3>
        <Button
          type="submit"
          className={styles.checkoutButton}
          style={getSummaryButtonStyles(theme)}
        >
          Checkout
        </Button>
      </div>
    </form>
  );
};
