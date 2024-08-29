import { FC } from 'react';
import styles from './Loader.module.scss';

export const Loader: FC = () => {
    return <div className={styles.loader}>
      <div className={styles.loaderContainer}></div>
  </div>;
};
