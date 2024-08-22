import Image from 'next/image';
import styles from '@/components/layout/Header/Header.module.scss';

export interface NavIcon {
  id: number;
  icon: JSX.Element;
}

export type NavMenuIcons = NavIcon[];

export const navMenuIcons: NavMenuIcons = [
  {
    id: 1,
    icon: (
      <Image
        src="icons/header-nav/search.svg"
        alt="Search icon"
        width={24}
        height={24}
      />
    ),
  },
  {
    id: 2,
    icon: (
      <Image
        src="icons/header-nav/user-circle.svg"
        alt="Search icon"
        width={24}
        height={24}
      />
    ),
  },
  {
    id: 3,
    icon: (
      <Image
        src="icons/header-nav/shopping bag.svg"
        alt="Search icon"
        width={24}
        height={24}
      />
    ),
  },
  {
    id: 4,
    icon: <span className={styles.circleIcon}>0</span>,
  },
];
