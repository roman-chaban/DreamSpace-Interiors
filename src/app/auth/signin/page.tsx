'use client';

import { SignInForm } from '@/components/auth/SingInForm/SignInForm';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import styles from '@/styles/pagesStyles/Auth/Auth.module.scss';
import { colors } from '@/theme/theme-variables';

export default function SignIn() {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <section
      className={styles.signIn}
      style={{
        backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
      }}
    >
      <div className={styles.signInContainer}>
        <div className={styles.banner}>
          <div className={styles.signInBanner}></div>
        </div>
        <SignInForm />
      </div>
    </section>
  );
}
