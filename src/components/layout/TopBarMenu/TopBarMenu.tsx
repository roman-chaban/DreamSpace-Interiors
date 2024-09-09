'use client';

import { useState, type FC } from 'react';
import styles from './TopBarMenu.module.scss';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { motion, AnimatePresence, color } from 'framer-motion';
import { animation } from '@/animations/topBarHidden/topBarHidden';
import { colors } from '@/theme/theme-variables';
import { FormClose, LinkNext, Ticket } from 'grommet-icons';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getBackgroundContainer,
  getLink,
  getThemeClass,
  getTitle,
} from '@/components/themeStyles/topBarMenuStyles/topBarMenuStyles';

export const TopBarMenu: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const theme = useAppSelector((state) => state.theme.theme);

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
          style={getBackgroundContainer(theme)}
        >
          <motion.ul className={styles.topBarItems}>
            <li className={styles.topBarItem}>
              <Ticket color={theme === 'dark' ? colors.black : colors.white} />
            </li>
            <li className={styles.topBarItem} style={getTitle(theme)}>
              30% off storewide — Limited time!
            </li>
            <li className={`${styles.topBarItem} ${getThemeClass(theme)}`}>
              <Link
                className={`${styles.showLink} ${getThemeClass(theme)}`}
                href={''}
                style={getLink(theme)}
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
