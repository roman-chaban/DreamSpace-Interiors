import styles from '@/components/layout/Footer/Footer.module.scss';
import { footerNav, NavItem } from '@/constants/footerNav';
import { footerSocialItems } from '@/constants/footerSocial';
import Link from 'next/link';
import { FC, Fragment } from 'react';

export const FooterNav: FC = () => {
  return (
    <div className={styles.footerContainer}>
      <nav className={styles.footerNav}>
        <div className={styles.footerNavLogo}>
          <h3 className={styles.navLogo}>
            3legant <span className={styles.logoMark}>.</span>
          </h3>
          <p className={styles.navLogoSubtitle}>Gift & Decoration Store</p>
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
            <span className={styles.socialIcon} key={icon.id}>{icon.icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
