'use client';

import { SignUpForm } from '@/components/auth/SignUpForm/SignUpForm';
import styles from '@/styles/pagesStyles/Auth/Auth.module.scss';

export default function SignUp() {
  return (
    <section className={styles.signIn}>
      <div className={styles.signInContainer}>
        <div className={styles.banner}>
          <div className={styles.signInBanner}></div>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
}
