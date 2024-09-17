'use client';

import type { FC } from 'react';
import { ReviewComment } from '@/types/reviews-comments';
import styles from './FeedbackPanel.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { getFeedbackPanelStyles } from '@/components/themeStyles/feedbackPanelStyles/feedbackPanelStyles';
import { Like } from 'grommet-icons';

export type FeedbackPanelType = {
  comment: ReviewComment;
};

export const FeedbackPanel: FC<FeedbackPanelType> = ({ comment }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const colorThemeStyle = { color: theme === 'dark' ? '' : colors.white };

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
          style={getFeedbackPanelStyles(theme)}
        />
        <div className={styles.commentInfo}>
          <h4 className={styles.authorTitle} style={colorThemeStyle}>
            {comment.author}
            <span className={styles.authorDate}>Date: {comment.date}</span>
          </h4>
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
          <p className={styles.comment} style={colorThemeStyle}>
            {comment.comment}
          </p>
          <div className={styles.commentLikes}>
            <div className={styles.likesBlock}>
              <Button
                type="button"
                className={styles.commentLike}
                style={colorThemeStyle}
              >
                {comment.like}
              </Button>
              <Button
                type="button"
                className={styles.commentReply}
                style={colorThemeStyle}
              >
                {comment.reply}
              </Button>
            </div>
            <h5 className={styles.likes}>
              {comment.rating}{' '}
              <Like color="#121212" style={{ width: 14, height: 14 }} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
