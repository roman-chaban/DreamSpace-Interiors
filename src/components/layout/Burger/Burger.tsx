'use client';

import { useRef, type FC } from 'react';
import styles from './Burger.module.scss';
import Image from 'next/image';
import { Input } from '@/components/ui/Input/Input';
import {
  burgerNavMenuItems,
  NavItem,
} from '@/fixtures/navMenuItems/navMenuItems';
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
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher/ThemeSwitcher';

interface BurgerProps {
  onClose: () => void;
  isActive: boolean;
}

export const Burger: FC<BurgerProps> = ({ isActive, onClose }) => {
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const cartCounter = useAppSelector((state) => state.cart.goodCounter);
  const favoriteCounter = useAppSelector(
    (state) => state.favorite.favoriteCounter
  );

  const theme = useAppSelector((state) => state.theme.theme);

  const listVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 60,
        damping: 12,
        duration: 0.6,
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
                animate={isActive ? 'visible' : 'hidden'}
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
            <h5 className={styles.title}>
              <Link
                href={NavPaths.CART}
                className={styles.link}
                style={getBurgerLinkStyle(theme)}
              >
                Cart
              </Link>
              <div className={styles.icons}>
                <Link href={NavPaths.CART} className={styles.cartLink}>
                  <Basket
                    style={{ width: 18, height: 18 }}
                    color={theme === 'dark' ? 'plain' : colors.white}
                  />
                </Link>
                <span
                  className={styles.circleCounter}
                  style={burgerButtonStyle(theme)}
                >
                  {cartCounter}
                </span>
              </div>
            </h5>
          </div>
          <div className={styles.wishlist}>
            <h5 className={styles.title}>
              <Link
                href={NavPaths.FAVORITE}
                className={styles.link}
                style={getBurgerLinkStyle(theme)}
              >
                Wishlist
              </Link>
              <div className={styles.icons}>
                <Link href={NavPaths.FAVORITE} className={styles.favoriteLink}>
                  <Favorite
                    style={{ width: 18, height: 18 }}
                    color={theme === 'dark' ? 'plain' : colors.white}
                  />
                </Link>
                <span
                  className={styles.circleCounter}
                  style={burgerButtonStyle(theme)}
                >
                  {favoriteCounter}
                </span>
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
              <Instagram color={theme === 'dark' ? '#141718"' : colors.white} />
            </Link>
            <Link href="">
              <Github color={theme === 'dark' ? '#141718"' : colors.white} />
            </Link>
            <Link href="">
              <Linkedin color={theme === 'dark' ? '#141718"' : colors.white} />
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
