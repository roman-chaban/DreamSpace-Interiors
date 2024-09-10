'use client';

import styles from '@/components/layout/Footer/Footer.module.scss';
import { getMarkStyle } from '@/components/themeStyles/heroStyles/heroStyles';
import { footerNav, NavItem } from '@/constants/footerNav';
import { footerSocialItems } from '@/constants/footerSocial';
import { paymentIcons } from '@/constants/payments';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import Link from 'next/link';
import { FC, Fragment } from 'react';

export const FooterNav: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={styles.footerContainer}>
      <nav className={styles.footerNav}>
        <div className={styles.footerNavLogo}>
          <h3 className={styles.navLogo}>
            3legant{' '}
            <span className={styles.logoMark} style={getMarkStyle(theme)}>
              .
            </span>
          </h3>
          <p className={`${styles.navLogoSubtitle} ${themeClass}`}>
            Gift & Decoration Store
          </p>
        </div>
        <ul className={styles.navMenu}>
          {footerNav.map((item: NavItem) => (
            <li key={item.id} className={styles.listItem}>
              <Link href={item.href} className={styles.listLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.copyPayments}>
        <div className={styles.footerCopyrightBlock}>
          <div className={styles.copyrightItemBlock}>
            <h5 className={styles.copyrightTitle}>
              Copyright © 2024 3legant. All rights reserved
            </h5>
            <div className={styles.policyTermsItemBlock}>
              <span className={styles.privacy}>Privacy Policy</span>
              <span className={styles.terms}>Terms of Use</span>
            </div>
          </div>
          <div className={styles.footerSocial}>
            {footerSocialItems.map((icon) => (
              <span className={styles.socialIcon} key={icon.id}>
                {icon.icon}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.paymentsIconsBlock}>
          {paymentIcons.map((icon) => (
            <Fragment key={icon.iconId}>{icon.icon}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
