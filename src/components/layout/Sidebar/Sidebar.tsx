import { Fragment, type FC } from 'react';
import styles from './Sidebar.module.scss';
import Image from 'next/image';
import { roomTitles } from '@/constants/allRooms';
import PriceList, { priceItems } from '@/constants/allPrice';
import { Button } from '@/components/ui/Button/Button';

export const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <div className={styles.filterItem}>
          <Image
            src="/sidebar/filter-icon.svg"
            alt="Filter Icon"
            width={24}
            height={24}
            className={styles.filterIcon}
          />
          <h5 className={styles.filterTitle}>Filter</h5>
        </div>
        <div className={styles.categories}>
          <h5 className={styles.categoriesTitle}>CATEGORIES</h5>
          <div className={styles.roomsTitles}>
            <h4 className={styles.allRoomsTitle}>All Rooms</h4>
            {roomTitles.map((title) => (
              <Button type="button" key={title} className={styles.title}>
                {title}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.price}>
          <h5 className={styles.priceTitle}>PRICE</h5>
          <PriceList />
        </div>
      </div>
    </aside>
  );
};
