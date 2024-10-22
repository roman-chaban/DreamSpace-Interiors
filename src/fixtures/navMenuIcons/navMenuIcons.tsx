'use client';

import styles from '@/components/layout/Header/Header.module.scss';
import { NavPaths } from '@/enums/navPaths';
import Link from 'next/link';
import { Favorite, Search, Shop, User } from 'grommet-icons';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { usePathname } from 'next/navigation';

export interface NavIcon {
  id: number;
  icon: JSX.Element;
}

export type NavMenuIcons = NavIcon[];

export const HeaderIcons = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const cartCounter = useAppSelector((state) => state.cart.goodCounter);
  const favoriteCounter = useAppSelector(
    (state) => state.favorite.favoriteCounter
  );

  const iconColor = theme === 'dark' ? colors.black : colors.white;
  const iconSettings = { width: 20, height: 20 };

  const pathname = usePathname();

  const navMenuIcons: NavMenuIcons = [
    {
      id: 1,
      icon: <Search color={iconColor} style={iconSettings} />,
    },
    {
      id: 2,
      icon: (
        <Link href={NavPaths.SIGNIN}>
          <User color={iconColor} style={iconSettings} />
        </Link>
      ),
    },
    {
      id: 3,
      icon: (
        <Link
          href={NavPaths.CART}
          className={`${styles.cartLink} ${
            pathname === NavPaths.CART
              ? theme === 'dark'
                ? styles.activeIconDark
                : styles.activeIconLight
              : ''
          }`}
        >
          <Shop color={iconColor} style={iconSettings} />
          <span
            className={styles.circleIcon}
            style={{
              background: iconColor,
              color: theme === 'dark' ? colors.white : colors.black,
            }}
          >
            {cartCounter}
          </span>
        </Link>
      ),
    },
    {
      id: 4,
      icon: (
        <Link
          href={NavPaths.FAVORITE}
          className={`${styles.cartLink} ${
            pathname === NavPaths.FAVORITE
              ? theme === 'dark'
                ? styles.activeIconDark
                : styles.activeIconLight
              : ''
          }`}
        >
          <Favorite color={iconColor} style={iconSettings} />
          <span
            className={styles.circleIcon}
            style={{
              background: iconColor,
              color: theme === 'dark' ? colors.white : colors.black,
            }}
          >
            {favoriteCounter}
          </span>
        </Link>
      ),
    },
  ];

  return (
    <div className={styles.navIcons}>
      {navMenuIcons.map((navIcon) => (
        <div key={navIcon.id} className={styles.navIcon}>
          {navIcon.icon}
        </div>
      ))}
    </div>
  );
};
