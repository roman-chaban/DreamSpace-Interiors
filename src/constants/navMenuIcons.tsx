import Image from 'next/image';
import styles from '@/components/layout/Header/Header.module.scss';
import { NavPaths } from '@/enums/navPaths';
import Link from 'next/link';
import { Search, Shop, User } from 'grommet-icons';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

export interface NavIcon {
  id: number;
  icon: JSX.Element;
}

export type NavMenuIcons = NavIcon[];

export const HeaderIcons = () => {
  const { theme } = useTheme();

  const iconColor = theme === 'dark' ? colors.black : colors.white;
  const iconSettings = { width: 20, height: 20 };

  const navMenuIcons: NavMenuIcons = [
    {
      id: 1,
      icon: <Search color={iconColor} style={iconSettings} />,
    },
    {
      id: 2,
      icon: <User color={iconColor} style={iconSettings} />,
    },
    {
      id: 3,
      icon: (
        <Link href={NavPaths.CART} className={styles.cartLink}>
          <Shop color={iconColor} style={iconSettings} />
        </Link>
      ),
    },
    {
      id: 4,
      icon: (
        <span
          className={styles.circleIcon}
          style={{
            background: iconColor,
            color: theme === 'dark' ? colors.white : colors.black,
          }}
        >
          0
        </span>
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
