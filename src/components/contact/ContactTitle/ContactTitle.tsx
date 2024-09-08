import type { FC } from 'react';
import styles from './ContactTitle.module.scss';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

export const ContactTitle: FC = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.contactTitles}>
      <h1
        className={styles.contactTitle}
        style={{ color: theme === 'dark' ? '' : colors.white }}
      >
        We believe in sustainable decor. We’re passionate about life at home.
      </h1>
      <p
        className={styles.contactSubTitle}
        style={{ color: theme === 'dark' ? '' : colors.white }}
      >
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>
    </div>
  );
};
