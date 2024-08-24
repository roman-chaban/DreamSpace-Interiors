export interface Value {
  id: number;
  icon: string;
  title: string;
  subTitle: string;
}

export type Values = Value[];

export const valuesItems: Values = [
  {
    id: 1,
    icon: '/images/values/fast-delivery.svg',
    title: 'Free Shipping',
    subTitle: 'Order above $200',
  },
  {
    id: 2,
    icon: '/images/values/money.svg',
    title: 'Money-back',
    subTitle: '30 days guarantee',
  },
  {
    id: 3,
    icon: '/images/values/lock.svg',
    title: 'Secure Payments',
    subTitle: 'Secured by Stripe',
  },
  {
    id: 4,
    icon: '/images/values/call.svg',
    title: '24/7 Support',
    subTitle: 'Phone and Email support',
  },
];
