import { TextInput } from '@/components/auth/TextInput/TextInput';
import { Button } from '@/components/ui/Button/Button';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import { ContactFormProps } from '@/types/contact-form';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getButtonThemeStyles,
  getLabelStyle,
} from '@/components/themeStyles/contactFormStyles/contactFormStyles';

export const ContactForm: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

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
        style={getLabelStyle(theme)}
        register={{ ...register('yourName', {}) }}
      />
      <TextInput
        type="email"
        id="email"
        labelText="Email address"
        placeholder="Your Email"
        className={styles.contactFormInput}
        labelClassName={styles.label}
        style={getLabelStyle(theme)}
        register={{ ...register('email', {}) }}
      />
      <label
        htmlFor="message"
        className={styles.contactFormLabel}
        style={getLabelStyle(theme)}
      >
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
        style={getButtonThemeStyles(theme)}
      >
        Send Message
      </Button>
    </form>
  );
};
