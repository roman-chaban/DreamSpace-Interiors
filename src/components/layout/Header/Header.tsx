import { Fragment, type FC } from 'react';
import styles from './Header.module.scss';
import { TopBarMenu } from '../TopBarMenu/TopBarMenu';
import { NavItem, navMenuItems } from '@/constants/navMenuItems';
import Link from 'next/link';
import { NavIcon, navMenuIcons } from '@/constants/navMenuIcons';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <TopBarMenu />
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <h4 className={styles.headerLogoIcon}>3legant</h4>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerMenu}>
            {navMenuItems.map((item: NavItem) => (
              <li key={item.id} className={styles.listItem}>
                <Link href={item.href} className={styles.listLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.headerSubNav}>
          {navMenuIcons.map((icon: NavIcon) => (
            <Fragment key={icon.id}>{icon.icon}</Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};
