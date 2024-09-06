'use client';

import type { FC } from 'react';
import styles from './ContactInformation.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input/Input';
import { FormBox } from '@/components/containers/FormBox/FormBox';
import { FormValues } from '@/types/form-values';



export const ContactInformation: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const handleSubmitContactForm: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormBox
      $width={'100%'}
      $maxWidth={'643px'}
      $borderRadius={'4px'}
      className={styles.contactForm}
      onSubmit={handleSubmit(handleSubmitContactForm)}
    >
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>Contact Information</h3>
        <div className={styles.formUserInfo}>
          <Input
            name="firstName"
            type="text"
            id="firstName"
            className={styles.input}
            labelClassName={styles.label}
            labelText="First Name"
            placeholder="First Name"
            register={{ ...register('firstName') }}
          />
          <Input
            name="lastName"
            type="text"
            id="lastName"
            className={styles.input}
            labelClassName={styles.label}
            labelText="Last Name"
            placeholder="Last Name"
            register={{ ...register('lastName') }}
          />
        </div>
        <Input
          name="phoneNumber"
          type="tell"
          id="phoneNumber"
          placeholder="Phone number"
          labelText="Phone number"
          className={styles.input}
          labelClassName={styles.label}
          register={{ ...register('phone') }}
        />
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Your Email"
          labelText="Email address"
          className={styles.input}
          labelClassName={styles.label}
          register={{ ...register('email') }}
        />
      </div>
    </FormBox>
  );
};
