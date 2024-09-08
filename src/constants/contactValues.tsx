import Image from 'next/image';

const storeIconUrl = '/icons/contact-icons/store.svg';
const callIconUrl = '/icons/contact-icons/call.svg';
const mailIconUrl = '/icons/contact-icons/mail.svg';

type ValuesType = {
  id: number;
  icon: (theme: string) => JSX.Element;
  title: string;
  subTitle: string;
};

export const contactValues: ValuesType[] = [
  {
    id: 1,
    icon: (theme: string) => (
      <Image src={storeIconUrl} alt="Store Icon" width={32} height={32} />
    ),
    title: 'Address',
    subTitle: '234 Hai Trieu, Ho Chi Minh City, Viet Nam',
  },
  {
    id: 2,
    icon: (theme: string) => (
      <Image src={callIconUrl} alt="Call Icon" width={32} height={32} />
    ),
    title: 'Contact Us',
    subTitle: '+84 234 567 890',
  },
  {
    id: 3,
    icon: (theme: string) => (
      <Image src={mailIconUrl} alt="Mail Icon" width={32} height={32} />
    ),
    title: 'Email',
    subTitle: 'hello@3legant.com',
  },
];
