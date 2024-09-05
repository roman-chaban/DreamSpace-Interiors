interface RatingStar {
  star: string;
}

export interface ReviewComment {
  commentId: number;
  author: string;
  authorImage: string;
  comment: string;
  like: string;
  reply: string;
  ratingStars: RatingStar[];
}
