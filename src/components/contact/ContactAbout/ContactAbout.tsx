import { Sales } from '@/components/layout/Sales/Sales';
import { FC } from 'react';
import styles from './ContactAbout.module.scss';

const contactClassNames = {
  blockInfo: styles.contactBlock,
};

export const ContactAbout: FC = () => {
  return (
    <>
      <Sales
        image="/images/sales/sales-banner.svg"
        secondTitle="About Us"
        subTitle="3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
Our customer service is always prepared to support you 24/7"
        linkPath="Shop Now"
        className={contactClassNames}
      />
    </>
  );
};
