'use client';

import { useRef, type FC } from 'react';
import styles from './Burger.module.scss';
import Image from 'next/image';
import { Input } from '@/components/ui/Input/Input';
import { burgerNavMenuItems, NavItem } from '@/constants/navMenuItems';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import {
  Basket,
  Close,
  Favorite,
  Github,
  Instagram,
  Linkedin,
} from 'grommet-icons';
import { useBodyOverFlow } from '@/hooks/useBodyOverflow';
import { motion } from 'framer-motion';
import { menuVariants } from '@/animations/burger/burger';
import {
  burgerButtonStyle,
  getBurgerBackgroundStyle,
  getBurgerLinkStyle,
} from '@/components/themeStyles/burgerStyles/burgerStyles';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getHeaderLinkStyle } from '@/components/themeStyles/headerStyles/headerStyles';
import { NavPaths } from '@/enums/navPaths';
import { colors } from '@/theme/theme-variables';
import { duration } from '@mui/material';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher/ThemeSwitcher';

interface BurgerProps {
  onClose: () => void;
  isActive: boolean;
}

export const Burger: FC<BurgerProps> = ({ isActive, onClose }) => {
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  const theme = useAppSelector((state) => state.theme.theme);

  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  useBodyOverFlow(isActive);

  return (
    <div className={styles.burger}>
      <motion.nav
        ref={burgerMenuRef}
        className={`${styles.burgerMenu} ${isActive ? styles.active : ''}`}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        exit="exit"
        style={getBurgerBackgroundStyle(theme)}
        variants={menuVariants}
      >
        <div className={styles.burgerHeader}>
          <div className={styles.burgerLogo}>
            <h3 className={styles.logo} style={getHeaderLinkStyle(theme)}>
              3legant
            </h3>
            <ThemeSwitcher />
            <button className={styles.close} onClick={onClose}>
              <Close
                style={{ width: 20, height: 20 }}
                color={theme === 'dark' ? 'plain' : colors.white}
              />
            </button>
          </div>
          <label htmlFor="search" className={styles.searchLabel}>
            <Image
              src="/icons/header-nav/search.svg"
              alt="Search Icon"
              width={22}
              height={22}
            />
            <Input
              type="search"
              name="search"
              id="search"
              className={styles.searchInput}
              placeholder="Search"
            />
          </label>
          <ul className={styles.burgerList}>
            {burgerNavMenuItems.map((item: NavItem, index: number) => (
              <motion.li
                className={styles.listItem}
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={listVariants}
              >
                <Link
                  href={item.href}
                  className={styles.listLink}
                  style={getBurgerLinkStyle(theme)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className={styles.burgerFooter}>
          <div className={styles.cart}>
            <h5 className={styles.title} style={getBurgerLinkStyle(theme)}>
              Cart{' '}
              <div className={styles.icons}>
                <Link href={NavPaths.CART} className={styles.cartLink}>
                  <Basket
                    style={{ width: 18, height: 18 }}
                    color={theme === 'dark' ? 'plain' : colors.white}
                  />
                </Link>
                <span className={styles.circleCounter}>0</span>
              </div>
            </h5>
          </div>
          <div className={styles.wishlist}>
            <h5 className={styles.title} style={getBurgerLinkStyle(theme)}>
              Wishlist
              <div className={styles.icons}>
                <Link href={NavPaths.FAVORITE} className={styles.favoriteLink}>
                  <Favorite
                    style={{ width: 18, height: 18 }}
                    color={theme === 'dark' ? 'plain' : colors.white}
                  />
                </Link>
                <span className={styles.circleCounter}>0</span>
              </div>
            </h5>
          </div>
          <Button
            type="button"
            className={styles.signIn}
            style={burgerButtonStyle(theme)}
          >
            Sign In
          </Button>
          <div className={styles.burgerSocials}>
            <Link href="">
              <Instagram color="#141718" />
            </Link>
            <Link href="">
              <Github color="#141718" />
            </Link>
            <Link href="">
              <Linkedin color="#141718" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
