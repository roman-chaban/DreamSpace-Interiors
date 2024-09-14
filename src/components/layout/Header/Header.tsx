'use client';

import { type FC, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { TopBarMenu } from '../TopBarMenu/TopBarMenu';
import { NavItem, navMenuItems } from '@/fixtures/navMenuItems/navMenuItems';
import Link from 'next/link';
import { HeaderIcons } from '@/fixtures/navMenuIcons/navMenuIcons';
import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/navPaths';
import { Burger } from '../Burger/Burger';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { buttonHoverTap } from '@/animations/dropDown/dropDown';
import { poppins } from '@/fonts/basic-fonts';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher/ThemeSwitcher';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getContainerStyle,
  getHeaderLinkStyle,
} from '@/components/themeStyles/headerStyles/headerStyles';
import { themesDefaultActiveLinks } from './linkThemes/linkThemes';

const Header: FC = () => {
  const pathname = usePathname();
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const theme = useAppSelector((state) => state.theme.theme);
  const toggleBurgerMenu = () => setIsBurgerActive(!isBurgerActive);

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const themeColors =
    themesDefaultActiveLinks[theme] || themesDefaultActiveLinks.light;

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
      <div className={styles.headerContainer} style={getContainerStyle(theme)}>
        <div className={styles.headerLogo}>
          <button
            className={`${styles.burgerButton} ${themeClass}`}
            onClick={toggleBurgerMenu}
            aria-label="Toggle menu"
          ></button>
          <h4 className={styles.headerLogoIcon}>
            <Link
              href={NavPaths.HOME}
              className={`${styles.logoLink} ${themeClass}`}
              style={getHeaderLinkStyle(theme)}
            >
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
                  <Link
                    href={item.href}
                    className={styles.listLink}
                    style={{
                      color: isActiveLink
                        ? themeColors.activeLinkColor
                        : themeColors.linkColor,
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.headerSubNav}>
          <HeaderIcons />
          <ThemeSwitcher />
        </div>
      </div>
      <Burger isActive={isBurgerActive} onClose={toggleBurgerMenu} />
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
