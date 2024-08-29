import { FC } from 'react';
import styles from './ContactValues.module.scss';
import { Value } from '@/constants/valuesItems';
import { ContactValuesItem } from '../ContactValuesItem/ContactValuesItem';

export interface ContactValuesProps {
  values: Value[];
}

export const ContactsValues: FC<ContactValuesProps> = ({ values }) => {
  return (
    <section className={styles.contactValues} >
      <div className={styles.container}>
        {values.map((item: Value) => (
          <ContactValuesItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
