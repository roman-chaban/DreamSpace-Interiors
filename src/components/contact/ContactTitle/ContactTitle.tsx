import type { FC } from 'react';
import styles from './ContactTitle.module.scss';

export const ContactTitle: FC = () => {
  return (
    <div className={styles.contactTitles}>
      <h1 className={styles.contactTitle}>
        We believe in sustainable decor. We’re passionate about life at home.
      </h1>
      <p className={styles.contactSubTitle}>
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>
    </div>
  );
};
