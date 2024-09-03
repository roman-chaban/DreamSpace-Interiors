'use client';

import { Fragment, type FC, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { TopBarMenu } from '../TopBarMenu/TopBarMenu';
import { NavItem, navMenuItems } from '@/constants/navMenuItems';
import Link from 'next/link';
import { NavIcon, navMenuIcons } from '@/constants/navMenuIcons';
import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/navPaths';
import { Login, Logout, FormDown } from 'grommet-icons';
import { Burger } from '../Burger/Burger';
import dynamic from 'next/dynamic';
import DropDown from '@/components/ui/DropDown/DropDown';

const classNames = {
  container: styles.dropDownContainer,
  header: styles.dropDownHeader,
  list: styles.dropDownList,
  listItem: styles.dropDownListItem,
  link: styles.dropDownLink,
  icon: styles.iconArrow,
};

const Header: FC = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleBurgerMenu = () => setIsBurgerActive(!isBurgerActive);

  const options = [{ label: 'Blog', value: 'Blog', href: '/blog' }];

  const handleProductDropDownSelect = (value: string) => {
    console.log('Selected product:', value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.header} ${
        isScrollingUp ? styles.visible : styles.hidden
      }`}
    >
      <TopBarMenu />
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <button
            className={styles.burgerButton}
            onClick={toggleBurgerMenu}
            aria-label="Toggle menu"
          ></button>
          <h4 className={styles.headerLogoIcon}>
            <Link href={NavPaths.HOME} className={styles.logoLink}>3legant</Link>
          </h4>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerMenu}>
            {navMenuItems.map((item: NavItem) => {
              const isActiveLink = pathname === item.href;
              return (
                <li key={item.id} className={styles.listItem}>
                  {item.label === 'Product' ? (
                    <DropDown
                      classNames={classNames}
                      onSelect={handleProductDropDownSelect}
                      options={options}
                      placeholder="Product"
                      icon={<FormDown className={styles.iconArrow} />}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={styles.listLink}
                      style={{ color: isActiveLink ? '#141718' : '#6c7275' }}
                    >
                      {item.label}
                    </Link>
                  )}
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
            <ul className={styles.userDropDown}>
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
      <Burger isActive={isBurgerActive} onClose={toggleBurgerMenu} />
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
