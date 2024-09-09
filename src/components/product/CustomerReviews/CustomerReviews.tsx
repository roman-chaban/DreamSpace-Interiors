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
import { useCallback, useState } from 'react';
import { useScreenResize } from '@/hooks/useScreenResize';
import { CustomSelect } from '@/components/ui/Select/Select';
import { SelectClassNames } from '@/types/select-options';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export type CustomerReviewsType = {
  product: Product;
};

const tabs = ['Additional Info', 'Questions', 'Reviews'];

const options = [{ label: 'Newest', value: 'Newest' }];

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

  const { data, error, loading } = useFetching<ReviewComment[]>({
    url: '/reviews/reviews.json',
  });

  const handleLoadMore = () => {
    setVisibleCommentsCount((prevCount) => prevCount + 5);
  };

  return (
    <div className={styles.reviews}>
      <CustomerReviewsTabsNav onTabSelect={handleTabSelect} tabs={tabs} />
      <div className={styles.reviewsInfoBlock}>
        <h3
          className={styles.reviewsTitle}
          style={{ color: theme === 'dark' ? '' : colors.white }}
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
            style={{ color: theme === 'dark' ? '' : colors.white }}
          >
            {product.reviewsCount} Reviews
          </span>
        </div>
        <div className={styles.areaBlock}>
          <Textarea
            name=""
            id=""
            className={styles.reviewsArea}
            style={{
              backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
            }}
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
            <Button type="button" className={styles.writeButton}>
              Write Review
            </Button>
          )}
        </div>
      </div>
      <article className={styles.commentsSection}>
        <div className={styles.reviewsBlock}>
          <h3
            className={styles.commentsTitle}
            style={{ color: theme === 'dark' ? '' : colors.white }}
          >
            {data?.length} Reviews
          </h3>
          <CustomSelect
            defaultValue="Newest"
            options={options}
            classNames={classNames}
          />
        </div>
        {loading && <CommentsLoader />}
        {error && <p>Error loading comments: Something went wrong!</p>}
        {data &&
          data
            .slice(0, visibleCommentsCount)
            .map((comment) => (
              <FeedbackPanel key={comment.commentId} comment={comment} />
            ))}
        {visibleCommentsCount < (data?.length || 0) && (
          <Button
            type="button"
            onClick={handleLoadMore}
            className={styles.loadMoreButton}
            style={{
              color: theme === 'dark' ? '' : colors.white,
              border: theme === 'dark' ? '' : `1.5px solid ${colors.white}`,
            }}
          >
            Load more
          </Button>
        )}
      </article>
    </div>
  );
};
