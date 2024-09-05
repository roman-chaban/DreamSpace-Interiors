import type { FC } from 'react';
import { ReviewComment } from '@/types/reviews-comments';
import styles from './FeedbackPanel.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';

export type FeedbackPanelType = {
  comment: ReviewComment;
};

export const FeedbackPanel: FC<FeedbackPanelType> = ({ comment }) => {
  return (
    <div className={styles.feedbackPanel}>
      <div className={styles.commentBlock}>
        <Image
          priority
          src={comment.authorImage}
          alt={comment.author}
          width={80}
          height={80}
          className={styles.authorImage}
        />
        <div className={styles.commentInfo}>
          <h4 className={styles.authorTitle}>{comment.author}</h4>
          <div className={styles.commentStars}>
            {comment.ratingStars.map((icon, indx) => (
              <Image
                key={indx}
                src={icon.star}
                alt="Star fill"
                width={14}
                height={14}
              />
            ))}
          </div>
          <p className={styles.comment}>{comment.comment}</p>
          <div className={styles.likesBlock}>
            <Button type="button" className={styles.commentLike}>
              {comment.like}
            </Button>
            <Button type="button" className={styles.commentReply}>
              {comment.reply}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
