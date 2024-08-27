export interface BlogArticle {
  id: number;
  image: string;
  title: string;
  dateTime?: string;
}

export type BlogArticles = BlogArticle[];

export const blogList: BlogArticles = [
  {
    id: 1,
    image: '/images/articles/primary-image.svg',
    title: '7 ways to decor your home',
    dateTime: 'November 29, 2023',
  },
  {
    id: 2,
    image: '/images/articles/secondary-image.svg',
    title: 'Kitchen organization',
    dateTime: 'December 5, 2023',
  },
  {
    id: 3,
    image: '/images/articles/tertiary-image.svg',
    title: 'Decor your bedroom',
    dateTime: 'August 16, 2024',
  },
  {
    id: 4,
    image: '/images/articles/four-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 5,
    image: '/images/articles/five-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 6,
    image: '/images/articles/six-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 7,
    image: '/images/articles/seven-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 8,
    image: '/images/articles/eight-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 9,
    image: '/images/articles/nine-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 10,
    image: '/images/articles/primary-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 11,
    image: '/images/articles/four-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
  {
    id: 12,
    image: '/images/articles/eight-image.svg',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    dateTime: 'September 1, 2024',
  },
];
