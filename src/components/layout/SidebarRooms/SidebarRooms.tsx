'use client';

import { getButtonMarkStyle, getButtonStyle } from '@/components/themeStyles/customerReviewsStyles/customerReviewsStyles';
import { getStrokeStyle, getTitleStyle } from '@/components/themeStyles/sidebarStyles/sidebarStyles';
import { Button } from '@/components/ui/Button/Button';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { FC } from 'react';
import styles from '@/components/layout/Sidebar/Sidebar.module.scss';
import { roomTitles } from '@/fixtures/allRooms/allRooms';

export const SidebarRooms: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      <div className={styles.filterItem}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.filterIcon}
        >
          <path
            d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21"
            stroke={getStrokeStyle(theme)}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <h5 className={styles.filterTitle} style={getTitleStyle(theme)}>
          Filter
        </h5>
      </div>
      <div className={styles.categories}>
        <h5 className={styles.categoriesTitle} style={getTitleStyle(theme)}>
          CATEGORIES
        </h5>
        <div className={styles.roomsTitles}>
          <h4 className={styles.allRoomsTitle} style={getTitleStyle(theme)}>
            All Rooms
          </h4>
          {roomTitles.map((title) => (
            <Button
              type="button"
              key={title}
              className={styles.title}
              style={getButtonMarkStyle(theme)}
            >
              {title}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
