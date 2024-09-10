'use client';

import { NavPaths } from '@/enums/navPaths';
import { Close } from 'grommet-icons';
import { FC } from 'react';
import styles from './CloseButton.module.scss';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

export const CloseButton: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <button className={styles.closeButton} title="Close page">
      <Link href={NavPaths.HOME}>
        <Close color={theme === 'dark' ? '' : colors.white} />
      </Link>
    </button>
  );
};
