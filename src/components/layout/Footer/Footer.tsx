import type { FC } from 'react';
import styles from './Footer.module.scss';
import { Input } from '@/components/ui/Input/Input';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { FooterNav } from '../FooterNav/FooterNav';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBanner}>
        <div className={styles.footerJoinBlock}>
          <div className={styles.footerJoinBlockTitles}>
            <h4 className={styles.joinTitle}>Join Our Newsletter</h4>
            <p className={styles.joinSubTitle}>
              Sign up for deals, new products and promotions
            </p>
          </div>
          <label htmlFor="email" className={styles.signUp}>
            <Image
              src="/images/footer/icons/email.svg"
              width={24}
              height={24}
              alt="Email Icon"
            />
            <Input
              id="email"
              name="email"
              type="email"
              className={styles.signUpInput}
              placeholder="Email address"
            />
            <Button type="button" className={styles.signUpButton}>
              Sign up
            </Button>
          </label>
        </div>
      </div>
      <div className={styles.footerInformation}>
        <FooterNav />
      </div>
    </footer>
  );
};
