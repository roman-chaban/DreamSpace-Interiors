import Image from 'next/image';
import styles from '@/components/layout/Footer/Footer.module.scss';

export interface PaymentIcon {
  iconId: number;
  icon: JSX.Element;
}

export type PaymentIcons = PaymentIcon[];

export const paymentIcons: PaymentIcons = [
  {
    iconId: 1,
    icon: (
      <span className={styles.iconContainer}>
        <Image
          src="/images/payments/visa.svg"
          width={42}
          height={16}
          alt="Visa icon"
          className={styles.icon}
        />
      </span>
    ),
  },
  {
    iconId: 2,
    icon: (
      <span className={styles.iconContainer}>
        <Image
          src="/images/payments/american-express.svg"
          width={42}
          height={16}
          alt="American express icon"
          className={`${styles.icon} ${styles.rightIcon}`}
        />
      </span>
    ),
  },
  {
    iconId: 3,
    icon: (
      <span className={styles.iconContainer}>
        <Image
          src="/images/payments/master-card.svg"
          width={42}
          height={16}
          alt="Master card Icon"
          className={styles.icon}
        />
      </span>
    ),
  },
  {
    iconId: 4,
    icon: (
      <span className={styles.iconContainer}>
        <Image
          src="/images/payments/stripe.svg"
          width={42}
          height={16}
          alt="Stripe icon"
          className={styles.icon}
        />
      </span>
    ),
  },
  {
    iconId: 5,
    icon: (
      <span className={styles.iconContainer}>
        <Image
          src="/images/payments/paypal.svg"
          width={42}
          height={16}
          alt="Paypal icon"
          className={styles.icon}
        />
      </span>
    ),
  },
  {
    iconId: 6,
    icon: (
      <span className={styles.iconContainer}>
        <Image
          src="/images/payments/apple-pay.svg"
          width={42}
          height={16}
          alt="Apple pay icon"
          className={styles.icon}
        />
      </span>
    ),
  },
];
