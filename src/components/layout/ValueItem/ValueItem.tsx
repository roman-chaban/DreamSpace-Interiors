import { Value } from '@/constants/valuesItems';
import Image from 'next/image';
import type { FC } from 'react';

interface ValueItemProps {
  item: Value;
}

export interface ClassNames {
  classNames: {
    item: string;
    itemContainer: string;
    itemIcon: string;
    itemTitles: string;
    itemTitle: string;
    itemSubTitle: string;
  }
}

export const ValueItem: FC<ValueItemProps & ClassNames> = ({ item, classNames }) => {
  return (
    <div className={classNames.item}>
      <div className={classNames.itemContainer}>
        <Image
          className={classNames.itemIcon}
          src={item.icon}
          alt={item.title}
          width={48}
          height={48}
        />
        <div className={classNames.itemTitles}>
          <h4 className={classNames.itemTitle}>{item.title}</h4>
          <p className={classNames.itemSubTitle}>{item.subTitle}</p>
        </div>
      </div>
    </div>
  );
};
