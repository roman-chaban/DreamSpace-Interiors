'use client';

import { AuthForm } from '@/components/layout/AuthForm/AuthForm';
import { useScreenResize } from '@/hooks/useScreenResize';
import styles from '@/styles/pagesStyles/Auth/Auth.module.scss';
import { FormClose } from 'grommet-icons';

export default function SignUp() {
  const { isResize } = useScreenResize(1024);
  return (
    <section className={styles.signIn}>
      <div className={styles.signInContainer}>
        <div className={styles.signBanner}>
          {isResize && <h4 className={styles.elegantTitle}>3legant</h4>}
        </div>
        <AuthForm
          title="Sign Up"
          subTitle="Already have an account?"
          buttonLabel="Sign Up"
        />
      </div>
    </section>
  );
}
