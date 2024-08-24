import type { FC } from 'react';
import styles from './Values.module.scss';
import { Value, valuesItems } from '@/constants/valuesItems';
import { ValueItem } from '../ValueItem/ValueItem';

export const Values: FC = () => {
  return (
    <section className={styles.values}>
      <div className={styles.valuesContainer}>
        {valuesItems.map((item: Value) => (
          <ValueItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
