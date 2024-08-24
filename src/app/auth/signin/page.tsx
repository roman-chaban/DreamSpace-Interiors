'use client';

import { AuthForm } from '@/components/layout/AuthForm/AuthForm';
import { useScreenResize } from '@/hooks/useScreenResize';
import styles from '@/styles/pagesStyles/Auth/Auth.module.scss';

export default function SignIn() {
  const { isResize } = useScreenResize(1024);

  return (
    <section className={styles.signIn}>
      <div className={styles.signInContainer}>
        <div className={styles.signBanner}>
          {isResize && <h4 className={styles.elegantTitle}>3legant</h4>}
        </div>
        <AuthForm
          title="Sign In"
          subTitle="Don’t have an account yet?"
          buttonLabel="Sign In"
        />
      </div>
    </section>
  );
}
