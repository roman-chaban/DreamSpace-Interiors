import { FC } from 'react';
import styles from './ContactUs.module.scss';
import { Values } from '@/components/layout/Values/Values';
import { contactValues } from '@/constants/contactValues';
import { ClassNames } from '@/components/layout/ValueItem/ValueItem';
import { Map } from '@/components/common/Map/Map';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsValues } from '../ContactValues/ContactValues';
import { valuesItems } from '@/constants/valuesItems';

export const classNames: ClassNames = {
  classNames: {
    item: `${styles.contactItem} ${styles.secondContactItem}`,
    itemContainer: styles.contactItemContainer,
    itemIcon: styles.contactItemIcon,
    itemTitles: styles.contactItemTitles,
    itemSubTitle: styles.contactItemSubTitle,
    itemTitle: styles.contactItemTitle,
  },
};

export const ContactUs: FC = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.contactUsContainer}>
        <h2 className={styles.contactUsTitle}>Contact Us</h2>
        <Values
          container={styles.contactValuesContainer}
          classNames={classNames.classNames}
          values={contactValues}
        />
        <div className={styles.FormMapContainer}>
          <ContactForm />
          <Map center={{ lat: 49.8397, lng: 24.0297 }} />
        </div>
      </div>
      <ContactsValues values={valuesItems} />
    </section>
  );
};
