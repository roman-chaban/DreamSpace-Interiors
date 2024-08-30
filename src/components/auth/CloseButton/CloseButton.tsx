import { NavPaths } from '@/enums/navPaths';
import { Close } from 'grommet-icons';
import { FC } from 'react';
import styles from './CloseButton.module.scss';
import Link from 'next/link';

export const CloseButton: FC = () => {
  return (
    <button className={styles.closeButton} title="Close page">
      <Link href={NavPaths.HOME}>
        <Close />
      </Link>
    </button>
  );
};
