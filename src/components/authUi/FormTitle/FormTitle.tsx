import { FC } from 'react';
import styles from './FormTitle.module.scss';
import { Button } from '@/components/ui/Button/Button';

interface FormTitleProps {
  title: string;
  subTitle: string;
  buttonLabel: string;
}

export const FormTitle: FC<FormTitleProps> = ({
  title,
  subTitle,
  buttonLabel,
}) => (
  <div className={styles.formInfo}>
    <h3 className={styles.signTitle}>{title}</h3>
    <div className={styles.signSubTitle}>
      {subTitle}
      <Button type="button" className={styles.signButton}>
        {buttonLabel}
      </Button>
    </div>
  </div>
);
