'use client';

import { useState, type FC } from 'react';
import styles from './Footer.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { FooterNav } from '../FooterNav/FooterNav';
import { useScreenResize } from '@/hooks/useScreenResize';
import { inter, poppins } from '@/fonts/basic-fonts';
import { MailOption } from 'grommet-icons';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getFooterStyles } from '@/components/themeStyles/footerStyles/footerStyles';

interface FooterProps {
  isVisible: boolean;
}

export const Footer: FC<FooterProps> = ({ isVisible }) => {
  const { isResize } = useScreenResize(580);
  const [isVisibleBlock, setIsVisible] = useState<boolean>(isVisible);
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <footer
      className={`${styles.footer} ${isResize && styles.bgLight} ${
        inter.className
      }`}
      style={getFooterStyles(theme)}
    >
      {isVisibleBlock && (
        <div
          className={`${styles.footerBanner} ${
            isResize ? styles.bgTransparent : ''
          }`}
        >
          <div className={` ${poppins.className} ${styles.footerJoinBlock}`}>
            <div className={styles.footerJoinBlockTitles}>
              <h4 className={styles.joinTitle}>Join Our Newsletter</h4>
              <p className={styles.joinSubTitle}>
                Sign up for deals, new products and promotions
              </p>
            </div>
            <label htmlFor="email" className={styles.signUp}>
              <MailOption />
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
      )}
      <div className={styles.footerInformation}>
        <FooterNav />
      </div>
    </footer>
  );
};
