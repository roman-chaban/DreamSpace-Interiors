import type { FC } from 'react';
import styles from './Values.module.scss';
import { Value } from '@/constants/valuesItems';
import { ValueItem } from '../ValueItem/ValueItem';
import { ValuesProps } from '@/types/values';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export const Values: FC<ValuesProps> = ({ values, classNames, container }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <section className={styles.values}>
      <div
        className={container}
      >
        {values.map((item: Value) => (
          <ValueItem classNames={classNames} item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
