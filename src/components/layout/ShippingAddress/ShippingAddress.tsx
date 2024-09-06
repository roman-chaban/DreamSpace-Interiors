import type { FC } from 'react';
import styles from './ShippingAddress.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input/Input';
import { CheckBoxWrapper } from '@/components/auth/CheckboxWrapper/CheckboxWrapper';
import { FormBox } from '@/components/containers/FormBox/FormBox';
import { FormValuesProps } from '@/types/form-values';

export const ShippingAddress: FC = () => {
  const { register, handleSubmit } = useForm<FormValuesProps>({
    defaultValues: {
      streetAddress: '',
      townOrCity: '',
      state: '',
      zipCode: '',
      agreeToTerms: false,
    },
  });
  const handleSubmitContactForm: SubmitHandler<FormValuesProps> = (data) => {
    console.log(data);
  };
  return (
    <FormBox
      $width={'100%'}
      $maxWidth={'643px'}
      $borderRadius={'4px'}
      $maxHeight={'643px'}
      className={styles.shippingAddressForm}
      onSubmit={handleSubmit(handleSubmitContactForm)}
    >
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>Shipping Address</h3>
        <Input
          name="streetAddress"
          type="text"
          id="streetAddress"
          className={styles.input}
          labelClassName={styles.label}
          placeholder="Street Address"
          labelText="Street Address *"
          register={{ ...register('streetAddress', {}) }}
        />
        <Input
          name="townCity"
          type="text"
          id="townCity"
          className={styles.input}
          labelClassName={styles.label}
          placeholder="Town / City"
          labelText="Town / City *"
          register={{ ...register('townOrCity', {}) }}
        />
        <div className={styles.addressBlock}>
          <Input
            name="state"
            type="text"
            id="state"
            className={styles.input}
            labelClassName={styles.label}
            placeholder="State"
            labelText="State"
            register={{ ...register('state', {}) }}
          />
          <Input
            name="zipCode"
            type="text"
            id="zipCode"
            className={styles.input}
            labelClassName={styles.label}
            placeholder="Zip Code"
            labelText="Zip Code"
            register={{ ...register('zipCode', {}) }}
          />
        </div>
        <CheckBoxWrapper
          label="Use a different billing address (optional)"
          register={{ ...register('agreeToTerms') }}
        />
      </div>
    </FormBox>
  );
};
