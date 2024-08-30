import type { FC, FormEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './SignInForm.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { TextInput } from '../TextInput/TextInput';
import { CheckBoxWrapper } from '../CheckboxWrapper/CheckboxWrapper';
import { Alert } from 'grommet-icons';

interface SignInForm {
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export const SignInForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
      agreeToTerms: false,
    },
    mode: 'onChange',
  });

  const handleSubmitSignInForm = (
    data: SubmitHandler<SignInForm>,
    event: FormEvent<HTMLFormElement>
  ) => {
    console.log(data);
    event.preventDefault();
  };

  return (
    <div className={styles.signiN}>
      <div className={styles.signInContainer}>
        <div className={styles.signInInfoBlock}>
          <h1 className={styles.signInTitle}>Sign In</h1>
          <div className={styles.signInTitles}>
            <span className={styles.accountTitle}>
              Don&apos;t have an account yet?
            </span>
            <Button type="button" className={styles.signUpButton}>
              {' '}
              Sign Up
            </Button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(() => handleSubmitSignInForm)}
          className={styles.signForm}
        >
          <TextInput
            type="email"
            placeholder="Your email address"
            id="email"
            register={{
              ...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              }),
            }}
            className={styles.emailInput}
          />
          {errors.email && (
            <span className={styles.errorMessage}>
              <Alert color="#ff5630" style={{ width: 20, height: 20 }} />{' '}
              {errors.email.message}
            </span>
          )}
          <TextInput
            type="password"
            placeholder="Password"
            id="password"
            register={{
              ...register('password', {
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                validate: {
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) ||
                    'Password must contain at least one uppercase letter',
                  hasLowerCase: (value) =>
                    /[a-z]/.test(value) ||
                    'Password must contain at least one lowercase letter',
                  hasNumber: (value) =>
                    /[0-9]/.test(value) ||
                    'Password must contain at least one number',
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                    'Password must contain at least one special character',
                },
              }),
            }}
            className={styles.passwordInput}
          />
          {errors.password && (
            <span className={styles.errorMessage}>
              {errors.password.message}
            </span>
          )}
          <div className={styles.termsBlock}>
            <CheckBoxWrapper
              register={{ ...register('agreeToTerms', {}) }}
              label="Remember Me"
            />
            <span className={styles.forgotTitle}>Forgot password?</span>
          </div>
          <Button type="submit" className={styles.submitFormButton}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};
