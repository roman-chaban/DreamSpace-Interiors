'use client';

import { Fragment, type FC, useState } from 'react';
import styles from './Header.module.scss';
import { TopBarMenu } from '../TopBarMenu/TopBarMenu';
import { NavItem, navMenuItems } from '@/constants/navMenuItems';
import Link from 'next/link';
import { NavIcon, navMenuIcons } from '@/constants/navMenuIcons';
import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/navPaths';
import { Login, Logout } from 'grommet-icons';

export const Header: FC = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className={styles.header}>
      <TopBarMenu />
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <button className={styles.burgerButton}></button>
          <h4 className={styles.headerLogoIcon}>3legant</h4>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerMenu}>
            {navMenuItems.map((item: NavItem) => {
              const isActiveLink = pathname === item.href;
              return (
                <li key={item.id} className={styles.listItem}>
                  <Link
                    href={item.href}
                    className={styles.listLink}
                    style={{ color: isActiveLink ? '#141718' : '#6c7275' }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.headerSubNav}>
          {navMenuIcons.map((icon: NavIcon) => (
            <Fragment key={icon.id}>
              {icon.id === 2 ? (
                <div className={styles.userIcon} onClick={toggleDropdown}>
                  {icon.icon}
                </div>
              ) : (
                icon.icon
              )}
            </Fragment>
          ))}
          <div
            className={`${styles.dropdownMenu} ${
              dropdownOpen ? styles.open : ''
            }`}
          >
            <ul className={styles.dropDownList}>
              <li className={styles.dropDownListItem}>
                <Login style={{ width: 18, height: 18 }} color="#343839" />
                <Link href={NavPaths.SIGNIN}>Sign In</Link>
              </li>
              <li className={styles.dropDownListItem}>
                <Logout style={{ width: 18, height: 18 }} color="#343839" />
                <Link href={NavPaths.SIGNUP}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
