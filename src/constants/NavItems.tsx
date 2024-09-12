'use client';

import { NavPaths } from '@/enums/navPaths';
import Link from 'next/link';
import styles from '@/components/product/ProductNav/ProductNav.module.scss';
import { FormNext } from 'grommet-icons';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

export const NavItems = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const themeTitle = (theme: 'dark' | 'light') => ({
    color: theme === 'dark' ? '' : colors.white,
  });

  const iconColor = theme === 'dark' ? '' : colors.white;
  6;
  return (
    <div className={styles.navItems}>
      <Link
        href={NavPaths.HOME}
        className={styles.link}
        style={themeTitle(theme)}
      >
        Home
        <FormNext style={{ width: 16, height: 16 }} color={iconColor} />
      </Link>
      <Link
        href={NavPaths.SHOP}
        className={styles.link}
        style={themeTitle(theme)}
      >
        Shop
        <FormNext style={{ width: 16, height: 16 }} color={iconColor} />
      </Link>
      <span className={styles.productItem} style={themeTitle(theme)}>
        Product <FormNext style={{ width: 16, height: 16 }} color={iconColor} />
      </span>
    </div>
  );
};
