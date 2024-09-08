import type { FC } from 'react';
import styles from './Values.module.scss';
import { Value } from '@/constants/valuesItems';
import { ValueItem } from '../ValueItem/ValueItem';
import { ValuesProps } from '@/types/values';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

export const Values: FC<ValuesProps> = ({ values, classNames, container }) => {
  const { theme } = useTheme();
  return (
    <section
      className={styles.values}
      style={{
        borderBottom: theme === 'dark' ? 'none' : `2px solid ${colors.white}`,
      }}
    >
      <div className={container}>
        {values.map((item: Value) => (
          <ValueItem classNames={classNames} item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
