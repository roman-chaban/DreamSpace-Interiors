export interface ArticleSubBlock {
  primaryImage: string;
  secondaryImage: string;
  blockInfo: {
    title: string;
    secondTitle?: string;
    subTitle: string;
    secondSubTitle?: string;
  };
}

export interface ArticleBlock {
  articleId: number;
  image: string;
  title: string;
  secondTitle: string;
  subTitle: string;
  secondBlock: ArticleSubBlock[];
  tertiaryBlock: ArticleSubBlock[];
}

export interface BlogArticle {
  id: number;
  image: string;
  title: string;
  dateTime?: string;
  dynamicPath: string;
  category: string;
  articleAuthor: string;
  articleBlock: ArticleBlock[];
}

export type BlogArticles = BlogArticle[];
