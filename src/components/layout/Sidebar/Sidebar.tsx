'use client';

import type { FC } from 'react';
import styles from './Sidebar.module.scss';
import { roomTitles } from '@/constants/allRooms';
import PriceList, { priceItems } from '@/constants/allPrice';
import { Button } from '@/components/ui/Button/Button';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export const Sidebar: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
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
              stroke={theme === 'dark' ? colors.black : colors.white}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <h5
            className={styles.filterTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            Filter
          </h5>
        </div>
        <div className={styles.categories}>
          <h5
            className={styles.categoriesTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            CATEGORIES
          </h5>
          <div className={styles.roomsTitles}>
            <h4
              className={styles.allRoomsTitle}
              style={{ color: theme === 'dark' ? colors.black : colors.white }}
            >
              All Rooms
            </h4>
            {roomTitles.map((title) => (
              <Button
                type="button"
                key={title}
                className={styles.title}
                style={{
                  color: theme === 'dark' ? colors.darkGray : colors.white,
                }}
              >
                {title}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.price}>
          <h5
            className={styles.priceTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            PRICE
          </h5>
          <PriceList />
        </div>
      </div>
    </aside>
  );
};
