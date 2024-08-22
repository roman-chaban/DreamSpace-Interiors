import type { FC } from 'react';
import styles from './TopBarMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';

export const TopBarMenu: FC = () => {
  return (
    <div className={styles.topBarMenu}>
      <ul className={styles.topBarItems}>
        <li className={styles.topBarItem}>
          <Image
            src="/icons/nav/ticket-percent.svg"
            alt="Ticket percent icon"
            width={24}
            height={24}
          />
        </li>
        <li className={styles.topBarItem}>30% off storewide — Limited time!</li>
        <li className={styles.topBarItem}>
          <Link className={styles.showLink} href={''}>
            Shop Now
          </Link>
          <Image
            src="/icons/nav/arrow-right.svg"
            alt="Arrow right icon"
            width={18}
            height={18}
          />
        </li>
      </ul>
      <Button type="button" className={styles.closeButton}>
        <Image
          src="/icons/nav/close.svg"
          alt="Close icon"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};
