'use client';

import { SignInForm } from '@/components/auth/SingInForm/SignInForm';
import styles from '@/styles/pagesStyles/Auth/Auth.module.scss';
import type { Metadata } from 'next';



export default function SignIn() {
  return (
    <section className={styles.signIn}>
      <div className={styles.signInContainer}>
        <div className={styles.banner}>
          <div className={styles.signInBanner}></div>
        </div>
        <SignInForm />
      </div>
    </section>
  );
}
