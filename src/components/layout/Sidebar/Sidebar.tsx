'use client';

import { FC } from 'react';
import { SideBarPrices } from '../SidebarPrices/SidebarPrices';
import styles from './Sidebar.module.scss';
import { SidebarRooms } from '../SidebarRooms/SidebarRooms';

export const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <SidebarRooms />
        <SideBarPrices />
      </div>
    </aside>
  );
};
