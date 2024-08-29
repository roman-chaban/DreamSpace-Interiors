import type { FC } from 'react';
import styles from './Values.module.scss';
import { Value, valuesItems } from '@/constants/valuesItems';
import { ClassNames, ValueItem } from '../ValueItem/ValueItem';

export interface ValuesProps {
  values: Value[];
  classNames: {
    item: string;
    itemContainer: string;
    itemIcon: string;
    itemTitles: string;
    itemTitle: string;
    itemSubTitle: string;
  };
  container: string;
}

export const Values: FC<ValuesProps> = ({ values, classNames, container }) => {
  return (
    <section className={styles.values}>
      <div className={container}>
        {values.map((item: Value) => (
          <ValueItem classNames={classNames} item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
