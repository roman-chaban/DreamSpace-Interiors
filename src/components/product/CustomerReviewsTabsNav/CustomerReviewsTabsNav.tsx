'use client';

import { useState, type FC } from 'react';
import styles from './CustomerReviewsTabsNav.module.scss';

export type CustomerReviewsTabsNavType = {
  tabs: string[];
  onTabSelect: (selectedTab: string) => void;
};

export const CustomerReviewsTabsNav: FC<CustomerReviewsTabsNavType> = ({
  tabs,
  onTabSelect,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabClick = (selectedTab: string) => {
    setActiveTab(selectedTab);
    onTabSelect(selectedTab);
  };

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab}
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
