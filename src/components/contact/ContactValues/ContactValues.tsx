import { FC } from 'react';
import styles from './ContactValues.module.scss';
import { Value } from '@/constants/valuesItems';
import { ContactValuesItem } from '../ContactValuesItem/ContactValuesItem';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

export interface ContactValuesProps {
  values: Value[];
}

export const ContactsValues: FC<ContactValuesProps> = ({ values }) => {
  const { theme } = useTheme();
  return (
    <section
      className={styles.contactValues}
      style={{
        backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
      }}
    >
      <div
        className={styles.container}
        style={{
          borderBottom: theme === 'dark' ? 'none' : `2px solid ${colors.white}`,
        }}
      >
        {values.map((item: Value) => (
          <ContactValuesItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
