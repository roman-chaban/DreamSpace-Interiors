import { Value } from '@/constants/valuesItems';
import Image from 'next/image';
import type { FC } from 'react';
import styles from '@/components/layout/Values/Values.module.scss';

interface ValueItemProps {
  item: Value;
}

export const ValueItem: FC<ValueItemProps> = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemContainer}>
        <Image
          className={styles.itemIcon}
          src={item.icon}
          alt={item.title}
          width={48}
          height={48}
        />
        <div className={styles.itemTitles}>
          <h4 className={styles.itemTitle}>{item.title}</h4>
          <p className={styles.itemSubTitle}>{item.subTitle}</p>
        </div>
      </div>
    </div>
  );
};
