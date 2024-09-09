'use client';

import { useState, type FC } from 'react';
import styles from './CustomerReviewsTabsNav.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

export type CustomerReviewsTabsNavType = {
  tabs: string[];
  onTabSelect: (selectedTab: string) => void;
};

export const CustomerReviewsTabsNav: FC<CustomerReviewsTabsNavType> = ({
  tabs,
  onTabSelect,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const theme = useAppSelector((state) => state.theme.theme);

  const handleTabClick = (selectedTab: string) => {
    setActiveTab(selectedTab);
    onTabSelect(selectedTab);
  };

  return (
    <div
      className={styles.tabsContainer}
      style={{
        borderBottom: theme === 'dark' ? '' : 'none',
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          style={{ color: theme === 'dark' ? '' : colors.white }}
          className={`${styles.tabItem} ${
            tab === activeTab ? styles.active : ''
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
