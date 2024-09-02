import type { FC } from 'react';
import styles from './Payment.module.scss';
import { FormBox } from '@/components/containers/FormBox/FormBox';
import { CustomRadioButton } from '@/components/ui/CustomRadioButton/CustomRadioButton';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';

type PaymentFormValues = {
  paymentMethod: string;
  cardNumber: string;
  date: string;
  cvcCode: string;
};

export const Payment: FC = () => {
  const { register, handleSubmit, watch } = useForm<PaymentFormValues>();

  const onSubmit = (data: PaymentFormValues) => {
    console.log('Selected Payment Method:', data.paymentMethod);
  };

  const selectedPaymentMethod = watch('paymentMethod');

  return (
    <FormBox
      styles={{
        $width: '100%',
        $maxWidth: '643px',
        $borderRadius: '4px',
        $display: 'flex',
        $maxHeight: '468px',
        $direction: 'column',
      }}
      className={styles.paymentForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>Payment method</h3>
        <div className={styles.payBlock}>
          <div className={styles.paymentBlock}>
            <CustomRadioButton
              value="credit_card"
              checked={selectedPaymentMethod === 'credit_card'}
              label="Pay by Credit Card"
              {...register('paymentMethod')}
              className={styles.radio}
              labelClassName={styles.radioLabel}
            />
            <Image
              src="/icons/cash-icon.svg"
              width={20}
              height={20}
              alt="Credit Card Icon"
            />
          </div>
          <div className={styles.paymentBlock}>
            <CustomRadioButton
              value="paypal"
              checked={selectedPaymentMethod === 'paypal'}
              label="Pay by PayPal"
              {...register('paymentMethod')}
              className={styles.radio}
              labelClassName={styles.radioLabel}
            />
          </div>
        </div>
        <Input
          name="card"
          className={styles.input}
          labelClassName={styles.label}
          type="text"
          placeholder="1234 1234 1234"
          labelText="Card Number"
        />
        <div className={styles.dateCvcBlock}>
          <Input
            name="date"
            type="text"
            className={styles.input}
            labelClassName={styles.label}
            placeholder="MM/YY"
            labelText="Expiration date"
          />
          <Input
            name="cvcCode"
            type="text"
            className={styles.input}
            labelClassName={styles.label}
            placeholder="CVC code"
            labelText="CVC"
          />
        </div>
      </div>
      <Button type="submit" className={styles.placeOrderButton}>
        Place Order
      </Button>
    </FormBox>
  );
};
