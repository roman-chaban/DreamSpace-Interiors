'use client';

import { useState, type FC } from 'react';
import styles from './CustomerReviewsTabsNav.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getCustomerTitleStyle,
  getTabsNavContainerStyle,
} from '@/components/themeStyles/customerReviewsStyles/customerReviewsStyles';

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
      style={getTabsNavContainerStyle(theme)}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          style={getCustomerTitleStyle(theme)}
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
