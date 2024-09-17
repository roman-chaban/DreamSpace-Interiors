import { ReviewComment } from '@/types/reviews-comments';

export const reviewsCommentsSort = (
  comments: ReviewComment[],
  sortComment: string
): ReviewComment[] => {
  switch (sortComment) {
    case 'Sort by name':
      return [...comments].sort((a, b) => a.author.localeCompare(b.author));
    case 'Sort by date':
      return [...comments].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case 'Sort by likes':
      return [...comments].sort((a, b) => b.rating - a.rating);
    default:
      return comments;
  }
};
