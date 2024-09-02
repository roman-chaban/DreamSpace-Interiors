'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomRadioButton } from '@/components/ui/CustomRadioButton/CustomRadioButton';
import styles from './CartSummary.module.scss';

interface FormValues {
  option: string;
}

export const CartSummary: FC = () => {
  const { register, watch, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      option: '',
    }
  });
  const selectedValue = watch('option', '');

  const onSubmitRadio: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.cartSummary} onSubmit={handleSubmit(onSubmitRadio)}>
      <div className={styles.summaryContainer}>
        <h4 className={styles.title}>Cart summary</h4>
        <div className={styles.summaryCheckoutButtons}>
          <div className={styles.checkoutButtonBlock}>
            <CustomRadioButton
              className={styles.radio}
              labelClassName={styles.radioLabel}
              label="Free shipping"
              value="option1"
              checked={selectedValue === 'option1'}
              onChange={() => setValue('option', 'option1')}
            />
            <span className={styles.price}>$0.00</span>
          </div>
          <div className={styles.checkoutButtonBlock}>
            <CustomRadioButton
              className={styles.radio}
              labelClassName={styles.radioLabel}
              label="Express shipping"
              value="option2"
              checked={selectedValue === 'option2'}
              onChange={() => setValue('option', 'option2')}
            />
            <span className={styles.price}>+$15.00</span>
          </div>
          <div className={styles.checkoutButtonBlock}>
            <CustomRadioButton
              className={styles.radio}
              labelClassName={styles.radioLabel}
              label="Pick Up"
              value="option3"
              checked={selectedValue === 'option3'}
              onChange={() => setValue('option', 'option3')}
            />
            <span className={styles.price}>$21.00</span>
          </div>
        </div>
        <h5 className={styles.subTotalTitle}>Subtotal</h5>
        <h3 className={styles.totalTitle}>Total</h3>
        <button type="submit" className={styles.checkoutButton}>
          Checkout
        </button>
      </div>
    </form>
  );
};
