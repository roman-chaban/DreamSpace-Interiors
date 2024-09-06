import { ClassNames, ValueItemProps } from '@/types/value-item';
import Image from 'next/image';
import type { FC } from 'react';

export const ValueItem: FC<ValueItemProps & ClassNames> = ({
  item,
  classNames,
}) => {
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
export { ClassNames };

