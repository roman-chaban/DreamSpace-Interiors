import Link from 'next/link';
import styles from '@/components/layout/Footer/Footer.module.scss';

export interface SocialItem {
  id: number;
  icon: JSX.Element;
}

export type SocialItems = SocialItem[];

export const footerSocialItems: SocialItems = [
  {
    id: 1,
    icon: (
      <Link href={''}>
        <svg
          className={styles.socialIconMedium}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            stroke="#FEFEFE"
            strokeWidth="1.5"
          />
          <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
          <circle cx="12" cy="12" r="5" stroke="#FEFEFE" strokeWidth="1.5" />
        </svg>
      </Link>
    ),
  },
  {
    id: 2,
    icon: (
      <Link href={''}>
        <svg
          className={styles.socialIconMedium}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
            stroke="#FEFEFE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    ),
  },
  {
    id: 3,
    icon: (
      <Link href={''}>
        <svg
          className={styles.socialIconMedium}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="18"
            rx="4"
            stroke="#FEFEFE"
            strokeWidth="1.5"
          />
          <path
            d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
            stroke="#FEFEFE"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Link>
    ),
  },
];
