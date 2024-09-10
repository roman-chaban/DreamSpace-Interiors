'use client';

import { useState, type FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import styles from './CartProcess.module.scss';
import { Steps } from '../Steps/Steps';
import { CartContent } from '../CartContent/CartContent';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

export const CartProcess: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(2);
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={styles.cartProcess}>
      <h1 className={styles.title} style={{color: theme === 'dark' ? '' : colors.white}} >Cart</h1>
      <Steps activeTab={activeTab} onTabClick={setActiveTab} />
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <CartContent activeTab={activeTab} />
        </AnimatePresence>
      </div>
    </div>
  );
};
