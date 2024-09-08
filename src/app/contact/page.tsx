'use client';

import { ContactAbout } from '@/components/contact/ContactAbout/ContactAbout';
import { ContactNav } from '@/components/contact/ContactNav/ContactNav';
import { ContactTitle } from '@/components/contact/ContactTitle/ContactTitle';
import { ContactUs } from '@/components/contact/ContactUs/ContactUs';
import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { useTheme } from '@/hooks/useTheme';
import styles from '@/styles/pagesStyles/Contact/Contact.module.scss';
import { colors } from '@/theme/theme-variables';

export default function Contact() {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <main
        className={styles.main}
        style={{
          backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
        }}
      >
        <section className={styles.contact}>
          <div className={styles.contactContainer}>
            <ContactNav />
            <ContactTitle />
            <ContactAbout />
          </div>
          <ContactUs />
        </section>
      </main>
      <Footer isVisible={false} />
    </>
  );
}
