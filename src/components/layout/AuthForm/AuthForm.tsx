'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormClose } from 'grommet-icons';
import styles from './AuthForm.module.scss';
import { FormTitle } from '@/components/authUi/FormTitle/FormTitle';
import { TextInput } from '@/components/authUi/TextInput/TextInput';
import { PasswordInput } from '@/components/authUi/PasswordInput/PasswordInput';
import { CheckBoxWrapper } from '@/components/authUi/CheckboxWrapper/CheckboxWrapper';

interface AuthFormProps {
  title: string;
  subTitle: string;
  buttonLabel: string;
}

interface IAuthForm {
  yourName: string;
  userName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export const AuthForm: FC<AuthFormProps> = ({
  title,
  subTitle,
  buttonLabel,
}) => {
  const { register, formState, handleSubmit } = useForm<IAuthForm>({
    defaultValues: {
      email: '',
      userName: '',
      yourName: '',
      password: '',
      agreeToTerms: false,
    },
    mode: 'onChange',
  });

  const submitForm: SubmitHandler<IAuthForm> = (data) => {
    console.log(data.password);
  };

  const requiredFieldMessage = 'This field is required';

  return (
    <form
      className={styles.authForm}
      autoComplete="off"
      onSubmit={handleSubmit(submitForm)}
    >
      <FormTitle title={title} subTitle={subTitle} buttonLabel={buttonLabel} />

      <div className={styles.formLabelsBlock}>
        {buttonLabel === 'Sign Up' && (
          <>
            <TextInput
              id="yourName"
              type="text"
              placeholder="Your name"
              register={register('yourName', {
                required: requiredFieldMessage,
              })}
            />
            <TextInput
              id="userName"
              type="text"
              placeholder="Username"
              register={register('userName', {
                required: requiredFieldMessage,
              })}
            />
          </>
        )}

        <TextInput
          id="email"
          type="email"
          placeholder="Email address"
          register={register('email', {
            required: requiredFieldMessage,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'This email is not valid',
            },
          })}
        />
        {formState.errors.email?.message && (
          <span>{formState.errors.email?.message}</span>
        )}

        <PasswordInput
          id="password"
          placeholder="Password"
          register={register('password', { required: requiredFieldMessage })}
        />

        <CheckBoxWrapper
          label={
            buttonLabel === 'Sign In'
              ? 'Remember me'
              : 'I agree with Privacy Policy and Terms of Use'
          }
          register={register('agreeToTerms', {
            required: requiredFieldMessage,
          })}
        />

        <Button type="submit" className={styles.primaryButton}>
          {buttonLabel}
        </Button>
      </div>

      <Link title="Go home" href={NavPaths.HOME}>
        <FormClose
          className={styles.closeIcon}
          style={{ width: 32, height: 32 }}
        />
      </Link>
    </form>
  );
};
