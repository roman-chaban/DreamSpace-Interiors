'use client';

import { useRef, type FC } from 'react';
import styles from './Burger.module.scss';
import Image from 'next/image';
import { Input } from '@/components/ui/Input/Input';
import { NavItem, navMenuItems } from '@/constants/navMenuItems';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { Github, Instagram, Linkedin } from 'grommet-icons';
import { useBodyOverFlow } from '@/hooks/useBodyOverflow';
import { motion } from 'framer-motion';
import { menuVariants } from '@/animations/burger/burger';

interface BurgerProps {
  onClose: () => void;
  isActive: boolean;
}

export const Burger: FC<BurgerProps> = ({ isActive, onClose }) => {
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  useBodyOverFlow(isActive);

  return (
    <div className={styles.burger}>
      <motion.nav
        ref={burgerMenuRef}
        className={`${styles.burgerMenu} ${isActive ? styles.active : ''}`}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        exit="exit"
        variants={menuVariants}
      >
        <div className={styles.burgerHeader}>
          <div className={styles.burgerLogo}>
            <h3 className={styles.logo}>3legant</h3>
            <button className={styles.close} onClick={onClose}>
              <Image
                src="/icons/header-nav/close.svg"
                alt="Close Icon"
                width={24}
                height={24}
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
            {navMenuItems.map((item: NavItem) => (
              <li className={styles.listItem} key={item.id}>
                <Link href={item.href} className={styles.listLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.burgerFooter}>
          <div className={styles.cart}>
            <h5 className={styles.title}>
              Cart{' '}
              <div className={styles.icons}>
                <Image
                  src="/icons/header-nav/shopping bag.svg"
                  width={24}
                  height={24}
                  alt="Cart Icon"
                />{' '}
                <span className={styles.circleCounter}>0</span>
              </div>
            </h5>
          </div>
          <div className={styles.wishlist}>
            <h5 className={styles.title}>
              Wishlist
              <div className={styles.icons}>
                <Image
                  src="/icons/header-nav/wishlist.svg"
                  width={24}
                  height={24}
                  alt="Cart Icon"
                />{' '}
                <span className={styles.circleCounter}>0</span>
              </div>
            </h5>
          </div>
          <Button type="button" className={styles.signIn}>
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
