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
import { CommentsLoader } from '@/components/ui/CommentsLoader/CommentsLoader';
import { lazy, useCallback, useEffect, useState } from 'react';
import { useScreenResize } from '@/hooks/useScreenResize';
import { CustomSelect } from '@/components/ui/Select/Select';
import { SelectClassNames } from '@/types/select-options';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getAreaStyle,
  getButtonStyle,
  getCustomerTitleStyle,
  getMoreButtonStyle,
} from '@/components/themeStyles/customerReviewsStyles/customerReviewsStyles';
import { reviewsCommentsSort } from '../reviewsCommentsSort/reviewsCommentsSort';
import { motion } from 'framer-motion';

export type CustomerReviewsType = {
  product: Product;
};

const tabs = ['Additional Info', 'Questions', 'Reviews'];

const options = [
  { label: 'Sort by name', value: 'Sort by name' },
  { label: 'Sort by date', value: 'Sort by date' },
  { label: 'Sort by likes', value: 'Sort by likes' },
];

const classNames: SelectClassNames = {
  label: styles.customSelect,
  select: styles.select,
  defaultOption: styles.selectDefaultOption,
  option: styles.selectOption,
  optionsContainer: styles.optionsContainer,
  selectContainer: styles.selectContainer,
};

export const CustomerReviews: FC<CustomerReviewsType> = ({ product }) => {
  const [visibleCommentsCount, setVisibleCommentsCount] = useState<number>(5);
  const handleTabSelect = useCallback((selectedTab: string) => {
    console.log(`Selected Tab: ${selectedTab}`);
  }, []);
  const theme = useAppSelector((state) => state.theme.theme);
  const { isResize } = useScreenResize(470);
  const [sortOption, setSortOption] = useState<string>('');
  const [sortedComments, setSortedComments] = useState<ReviewComment[]>([]);

  const { data, error, loading } = useFetching<ReviewComment[]>({
    url: '/reviews/reviews.json',
  });

  const handleLoadMore = () => {
    setVisibleCommentsCount((prevCount) => prevCount + 5);
  };

  const handleSortComments = (option: string) => {
    setSortOption(option);
    console.log(option);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const sorted = reviewsCommentsSort([...data], sortOption);
      setSortedComments(sorted);
    }
  }, [data, sortOption]);

  return (
    <div className={styles.reviews}>
      <CustomerReviewsTabsNav onTabSelect={handleTabSelect} tabs={tabs} />
      <div className={styles.reviewsInfoBlock}>
        <h3
          className={styles.reviewsTitle}
          style={getCustomerTitleStyle(theme)}
        >
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
          <span
            className={styles.reviewsRatingTitle}
            style={getCustomerTitleStyle(theme)}
          >
            {product.reviewsCount} Reviews
          </span>
        </div>
        <div className={styles.areaBlock}>
          <Textarea
            name=""
            id=""
            className={styles.reviewsArea}
            style={getAreaStyle(theme)}
          />
          {isResize ? (
            <Button type="button" className={styles.writeButtonSmall}>
              <Image
                src="/images/feedback-profile/arrow-right.svg"
                alt="Arrow right icon"
                width={12}
                height={12}
              />
            </Button>
          ) : (
            <Button
              type="button"
              className={styles.writeButton}
              style={getButtonStyle(theme)}
            >
              Write Review
            </Button>
          )}
        </div>
      </div>
      <article className={styles.commentsSection}>
        <div className={styles.reviewsBlock}>
          <h3
            className={styles.commentsTitle}
            style={getCustomerTitleStyle(theme)}
          >
            {sortedComments.length} Reviews
          </h3>
          <CustomSelect
            defaultValue="Sort by"
            options={options}
            classNames={classNames}
            onChange={handleSortComments}
          />
        </div>
        {loading && <CommentsLoader />}
        {error && <p>Error loading comments: Something went wrong!</p>}
        {sortedComments.slice(0, visibleCommentsCount).map((comment, index) => (
          <motion.div
            key={comment.commentId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <FeedbackPanel comment={comment} />
          </motion.div>
        ))}
        {visibleCommentsCount < sortedComments.length && (
          <Button
            type="button"
            onClick={handleLoadMore}
            className={styles.loadMoreButton}
            style={getMoreButtonStyle(theme)}
          >
            Load more
          </Button>
        )}
      </article>
    </div>
  );
};
