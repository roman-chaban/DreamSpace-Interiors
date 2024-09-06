export interface ArticleItemProps {
    item: {
      id: number;
      image: string;
      title: string;
      link?: string;
      dateTime?: string;
      dynamicPath: string;
    };
    classNames: {
      articlesItem: string;
      imageContainer: string;
      itemImage: string;
      overlay: string;
      metaIcon: string;
      articleTitles: string;
      itemTitle: string;
      itemLink: string;
      rightIcon: string;
      dateTitle?: string;
      largeIcon?: string;
    };
  }