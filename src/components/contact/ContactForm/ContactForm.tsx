import { TextInput } from '@/components/auth/TextInput/TextInput';
import { Button } from '@/components/ui/Button/Button';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';

interface IForm {
  yourName: string;
  email: string;
  message: string;
}

export const ContactForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const submitContactForm: SubmitHandler<IForm> = (data) => {};

  return (
    <form autoComplete="off" className={styles.contactForm}>
      <TextInput
        labelText="  Full Name"
        type="text"
        id="yourName"
        placeholder="Your Name"
        labelClassName={styles.contactFormLabel}
        className={styles.contactFormInput}
        register={{ ...register('yourName', {}) }}
      />

      <TextInput
        type="email"
        id="email"
        labelText="Email address"
        placeholder="Your Email"
        className={styles.contactFormInput}
        labelClassName={styles.contactFormLabel}
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
      <Button className={styles.sendButton} type="submit">
        Send Message
      </Button>
    </form>
  );
};
