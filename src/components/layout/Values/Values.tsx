import type { FC } from 'react';
import styles from './Values.module.scss';
import { Value } from '@/constants/valuesItems';
import { ValueItem } from '../ValueItem/ValueItem';
import { ValuesProps } from '@/types/values';

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
