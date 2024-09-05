import type { FC } from 'react';
import { ReviewComment } from '@/types/reviews-comments';
import Image from 'next/image';
import styles from './FeedbackPanel.module.scss';

export type FeedbackPanelType = {
  comment: ReviewComment;
};

export const FeedbackPanel: FC<FeedbackPanelType> = ({ comment }) => {
  return (
    <article className={styles.feedbackPanel}>
      <h4 className={styles.author}>{comment.author}</h4>
    </article>
  );
};
