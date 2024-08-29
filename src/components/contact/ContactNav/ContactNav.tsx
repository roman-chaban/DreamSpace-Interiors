import type { FC } from 'react';
import styles from './ContactNav.module.scss';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';

export const ContactNav: FC = () => {
  return (
    <nav className={styles.contactNav}>
      <div className={styles.navContainer}>
        <ul className={styles.navMenu}>
          <li className={styles.navListItem}>
            <Link href={NavPaths.HOME} className={styles.navLink}>
              Home{' '}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.58423 3L7.58423 6L4.58423 9"
                  stroke="#605F5F"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className={styles.navListItem}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};
