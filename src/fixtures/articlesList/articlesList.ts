export interface ArticleListItem {
  id: number;
  image: string;
  title: string;
  link: string;
  dateTime?: string;
  dynamicPath: string;
}

export type ArticlesList = ArticleListItem[];

export const articlesList: ArticlesList = [
  {
    id: 1,
    image: '/images/articles/primary-image.svg',
    title: '7 ways to decor your home',
    link: 'Read More',
    dynamicPath: '',
  },
  {
    id: 2,
    image: '/images/articles/secondary-image.svg',
    title: 'Kitchen organization',
    link: 'Read More',
    dynamicPath: '',
  },
  {
    id: 3,
    image: '/images/articles/tertiary-image.svg',
    title: 'Decor your bedroom',
    link: 'Read More',
    dynamicPath: '',
  },
];
