'use client';

import { useState, type FC } from 'react';
import styles from './TopBarMenu.module.scss';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { motion, AnimatePresence, color } from 'framer-motion';
import { animation } from '@/animations/topBarHidden/topBarHidden';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';
import { FormClose, LinkNext, Ticket } from 'grommet-icons';

export const TopBarMenu: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { theme } = useTheme();

  const backgroundContainer = {
    backgroundColor:
      theme === 'dark' ? colors.lightGray : colors.globalBackground,
    borderBottom: theme === 'dark' ? 'none' : `1.5px solid ${colors.white}`,
  };

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  const handleCloseTopBarMenu = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="topBarMenu"
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
          className={styles.topBarMenu}
          style={backgroundContainer}
        >
          <motion.ul className={styles.topBarItems}>
            <li className={styles.topBarItem}>
              <Ticket color={theme === 'dark' ? colors.black : colors.white} />
            </li>
            <li
              className={styles.topBarItem}
              style={{
                color: theme === 'dark' ? colors.darkGray : colors.white,
              }}
            >
              30% off storewide — Limited time!
            </li>
            <li className={`${styles.topBarItem} ${themeClass}`}>
              <Link
                className={`${styles.showLink} ${themeClass}`}
                href={''}
                style={{
                  color: theme === 'dark' ? colors.primary : colors.white,
                }}
              >
                Shop Now
              </Link>
              <LinkNext
                style={{
                  width: 10,
                  height: 10,
                }}
                color={theme === 'dark' ? colors.primary : colors.white}
              />
            </li>
          </motion.ul>
          <Button
            type="button"
            title="Hide banner"
            className={styles.closeButton}
            onClick={handleCloseTopBarMenu}
          >
            <FormClose
              color={theme === 'dark' ? colors.darkerGray : colors.white}
            />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
