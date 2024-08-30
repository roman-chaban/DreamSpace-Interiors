import { FC, FormEvent } from 'react';
import styles from './SignUpForm.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextInput } from '../TextInput/TextInput';
import { CheckBoxWrapper } from '../CheckboxWrapper/CheckboxWrapper';

interface SignUpForm {
  yourName: string;
  userName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export const SignUpForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpForm>({
    defaultValues: {
      yourName: '',
      userName: '',
      email: '',
      password: '',
      agreeToTerms: false,
    },
    mode: 'onChange',
  });
  const handleSubmitSignUpForm = (
    data: SubmitHandler<SignUpForm>,
    event: FormEvent<HTMLFormElement>
  ) => {
    console.log(data);
    event.preventDefault();
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpContainer}>
        <div className={styles.signUpInfoBlock}>
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
          className={styles.signForm}
          onSubmit={handleSubmit(() => handleSubmitSignUpForm)}
        >
          <TextInput
            type="text"
            placeholder="Your name"
            id="yourName"
            register={{ ...register('yourName', {}) }}
          />
          <TextInput
            type="text"
            placeholder="User name"
            id="userName"
            register={{ ...register('userName', {}) }}
          />
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
          <div className={styles.termsBlock}>
            <CheckBoxWrapper
              register={{ ...register('agreeToTerms', {}) }}
              label=""
            />
            <span className={styles.forgotTitle}>
              I agree with{' '}
              <strong className={styles.forgotTitleBold}>
                Privacy Policy{' '}
              </strong>
              and
              <strong className={styles.forgotTitleBold}> Terms of Use</strong>
            </span>
          </div>
          <Button type="submit" className={styles.submitFormButton}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};
