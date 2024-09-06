'use client';

import { Fragment, type FC, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { TopBarMenu } from '../TopBarMenu/TopBarMenu';
import { NavItem, navMenuItems } from '@/constants/navMenuItems';
import Link from 'next/link';
import { NavIcon, navMenuIcons } from '@/constants/navMenuIcons';
import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/navPaths';
import { Burger } from '../Burger/Burger';
import dynamic from 'next/dynamic';
import { DropDown } from '@/components/ui/DropDown/DropDown';
import { motion } from 'framer-motion';
import { buttonHoverTap } from '@/animations/dropDown/dropDown';
import { poppins } from '@/fonts/basic-fonts';
import { ClassNameType } from '@/types/class-names';
import { options } from '@/types/options';

const classNames: ClassNameType = {
  container: styles.dropDownContainer,
  button: styles.dropDownButton,
  menu: styles.dropDownMenu,
  listItem: styles.dropDownListItem,
  link: styles.dropDownLink,
};

const Header: FC = () => {
  const pathname = usePathname();
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleBurgerMenu = () => setIsBurgerActive(!isBurgerActive);

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
      } ${poppins.className}`}
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
            <Link href={NavPaths.HOME} className={styles.logoLink}>
              3legant
            </Link>
          </h4>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerMenu}>
            {navMenuItems.map((item: NavItem) => {
              const isActiveLink = pathname === item.href;
              return (
                <motion.li
                  {...buttonHoverTap}
                  key={item.id}
                  className={styles.listItem}
                >
                  {item.label === 'Product' ? (
                    <DropDown
                      buttonLabel="Product"
                      classNames={classNames}
                      options={options}
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
                </motion.li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.headerSubNav}>
          {navMenuIcons.map((icon: NavIcon) => (
            <Fragment key={icon.id}>
              {icon.id === 2 ? (
                <div className={styles.userIcon}>{icon.icon}</div>
              ) : (
                icon.icon
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <Burger isActive={isBurgerActive} onClose={toggleBurgerMenu} />
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
