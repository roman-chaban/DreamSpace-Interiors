import type { FC } from 'react';
import styles from './ContactNav.module.scss';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { Next } from 'grommet-icons';

export const ContactNav: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <nav className={styles.contactNav}>
      <div className={styles.navContainer}>
        <ul className={styles.navMenu}>
          <li className={styles.navListItem}>
            <Link
              href={NavPaths.HOME}
              className={styles.navLink}
              style={{ color: theme === 'dark' ? '' : colors.white }}
            >
              Home{' '}
              <Next
                color={theme === 'dark' ? colors.darkGray : colors.white}
                style={{ width: 12, height: 10 }}
              />
            </Link>
          </li>
          <li
            className={styles.navListItem}
            style={{ color: theme === 'dark' ? '' : colors.white }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};
