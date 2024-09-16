import { FC } from 'react';
import styles from './ContactValues.module.scss';
import { Value } from '@/fixtures/valuesItems/valuesItems';
import { ContactValuesItem } from '../ContactValuesItem/ContactValuesItem';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export interface ContactValuesProps {
  values: Value[];
}

export const ContactsValues: FC<ContactValuesProps> = ({ values }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <section
      className={styles.contactValues}
      style={{
        backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
      }}
    >
      <div className={styles.container}>
        {values.map((item: Value) => (
          <ContactValuesItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
