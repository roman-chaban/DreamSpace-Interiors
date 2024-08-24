'use client';

import { FC, useState, ChangeEvent, Fragment } from 'react';
import { Input } from '@/components/ui/Input/Input';
import styles from './AuthForm.module.scss';
import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';
import { CheckBox } from '@/components/ui/CheckBox/CheckBox';
import { FormClose } from 'grommet-icons';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';

interface AuthFormProps {
  title: string;
  subTitle: string;
  buttonLabel: string;
}

export const AuthForm: FC<AuthFormProps> = ({
  title,
  subTitle,
  buttonLabel,
}) => {
  const [formData, setFormData] = useState({
    yourName: '',
    userName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      agreeToTerms: checked,
    }));
  };

  return (
    <form className={styles.authForm}>
      <div className={styles.formInfo}>
        <h3 className={styles.signTitle}>{title}</h3>
        <div className={styles.signSubTitle}>
          {subTitle}
          <Button type="button" className={styles.signButton}>
            {buttonLabel}
          </Button>
        </div>
      </div>

      <div className={styles.formLabelsBlock}>
        {buttonLabel === 'Sign Up' && (
          <Fragment>
            <label htmlFor="yourName" className={styles.formLabel}>
              <Input
                type="text"
                id="yourName"
                name="yourName"
                placeholder="Your name"
                value={formData.yourName}
                onChange={handleInputChange}
                className={styles.formInput}
              />
            </label>
            <label htmlFor="userName" className={styles.formLabel}>
              <Input
                type="text"
                id="userName"
                name="userName"
                placeholder="Username"
                value={formData.userName}
                onChange={handleInputChange}
                className={styles.formInput}
              />
            </label>
          </Fragment>
        )}
        <label htmlFor="email" className={styles.formLabel}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </label>
        <label htmlFor="password" className={styles.formLabel}>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          <Image
            src="/icons/eye.svg"
            alt="Eye Icon"
            width={24}
            height={24}
            className={styles.passwordIcon}
          />
        </label>
        <div className={styles.authCheckBox}>
          <CheckBox
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleCheckboxChange}
            className={styles.formCheckBox}
          />
          {buttonLabel === 'Sign In' ? (
            <div className={styles.rememberForgotBlock}>
              <span className={styles.authCheckBoxSubTitle}>Remember me</span>
              <strong className={styles.subTitleMarkForgot}>
                Forgot password?
              </strong>
            </div>
          ) : (
            <span className={styles.authCheckBoxSubTitle}>
              I agree with{' '}
              <strong className={styles.subTitleMark}>Privacy Policy</strong>{' '}
              and <strong className={styles.subTitleMark}>Terms of Use</strong>
            </span>
          )}
        </div>
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
