'use client';

import { useState, type FC } from 'react';
import styles from './TopBarMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { motion } from 'framer-motion';
import { animation } from '@/animations/topBar/topBar';

export const TopBarMenu: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleCloseTopBarMenu = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.topBarMenu}>
      <motion.ul
        initial={animation.initial}
        animate={animation.animate}
        transition={animation.transition}
        className={styles.topBarItems}
      >
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
            className={styles.arrowIcon}
          />
        </li>
      </motion.ul>
      <Button
        type="button"
        title="Hide banner"
        className={styles.closeButton}
        onClick={handleCloseTopBarMenu}
      >
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
