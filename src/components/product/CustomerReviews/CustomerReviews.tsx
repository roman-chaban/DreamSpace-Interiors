'use client';

import type { FC } from 'react';
import { CustomerReviewsTabsNav } from '../CustomerReviewsTabsNav/CustomerReviewsTabsNav';
import { Product } from '@/types/products';
import styles from './CustomerReviews.module.scss';
import Image from 'next/image';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { Button } from '@/components/ui/Button/Button';
import { useFetching } from '@/hooks/useFetching';
import { ReviewComment } from '@/types/reviews-comments';
import { FeedbackPanel } from '@/components/layout/FeedbackPanel/FeedbackPanel';

export type CustomerReviewsType = {
  product: Product;
};

const tabs = ['Additional Info', 'Questions', 'Reviews'];

export const CustomerReviews: FC<CustomerReviewsType> = ({ product }) => {
  const handleTabSelect = (selectedTab: string) => {
    console.log(`Selected Tab: ${selectedTab}`);
  };

  const { data, error, loading } = useFetching<ReviewComment[]>({
    url: '/reviews/reviews.json',
  });

  return (
    <div className={styles.reviews}>
      <CustomerReviewsTabsNav onTabSelect={handleTabSelect} tabs={tabs} />
      <div className={styles.reviewsInfoBlock}>
        <h3 className={styles.reviewsTitle}>
          Customer Reviews | {product.title}
        </h3>
        <div className={styles.reviewsRatingBlock}>
          <div className={styles.starsFill}>
            {product.rating.map((star, index) => (
              <Image
                key={index}
                src={star}
                alt={`Star ${index + 1}`}
                width={16}
                height={16}
              />
            ))}
          </div>
          <span className={styles.reviewsRatingTitle}>
            {product.reviewsCount} Reviews
          </span>
        </div>
        <div className={styles.areaBlock}>
          <Textarea name="" id="" className={styles.reviewsArea} />
          <Button type="button" className={styles.writeButton}>
            Write Review
          </Button>
        </div>
      </div>
      <div className={styles.commentsSection}>
        {loading && <p>Loading comments...</p>}
        {error && <p>Error loading comments: {error}</p>}
        {data &&
          data.map((comment) => (
            <FeedbackPanel key={comment.commentId} comment={comment} />
          ))}
      </div>
    </div>
  );
};
