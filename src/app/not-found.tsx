import { NavPaths } from '@/enums/navPaths';
import styles from '@/styles/pagesStyles/NotFound/NotFound.module.scss';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DreamSpace | Not-Found 404',
};

function NotFoundPage() {
  return (
    <div className={styles.notFoundBanner}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.notFoundTitle}>
          Page not found | <strong className={styles.error}>404</strong>
        </h1>
        <Link href={NavPaths.HOME} className={styles.goBackLink}>
          Go back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
