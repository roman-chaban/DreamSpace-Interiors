import { TextInput } from '@/components/auth/TextInput/TextInput';
import { Button } from '@/components/ui/Button/Button';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import { ContactFormProps } from '@/types/contact-form';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

export const ContactForm: FC = () => {
  const { theme } = useTheme();

  const buttonThemeStyles = {
    color: theme === 'dark' ? '' : colors.globalBackground,
    backgroundColor: theme === 'dark' ? '' : colors.white,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormProps>();
  const submitContactForm: SubmitHandler<ContactFormProps> = (data) => {};

  return (
    <form autoComplete="off" className={styles.contactForm}>
      <TextInput
        labelText="Full Name"
        type="text"
        id="yourName"
        placeholder="Your Name"
        labelClassName={styles.label}
        className={styles.contactFormInput}
        register={{ ...register('yourName', {}) }}
      />
      <TextInput
        type="email"
        id="email"
        labelText="Email address"
        placeholder="Your Email"
        className={styles.contactFormInput}
        labelClassName={styles.label}
        register={{ ...register('email', {}) }}
      />
      <label htmlFor="message" className={styles.contactFormLabel}>
        Message
        <textarea
          placeholder="Your message"
          id="message"
          {...register('message', {})}
          className={styles.textMessage}
        />
      </label>
      <Button
        className={styles.sendButton}
        type="submit"
        style={buttonThemeStyles}
      >
        Send Message
      </Button>
    </form>
  );
};
