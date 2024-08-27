export interface Param {
  bannerImage: string;
  bannerLinks: {
    home: string;
    anotherLink: string;
  };
  title: string;
  subTitle: string;
}

export const params: Param = {
  bannerImage: '/banner/banner.svg',
  bannerLinks: { home: 'Home', anotherLink: 'Shop' },
  title: 'Shop Page',
  subTitle: 'Let’s design the place you always imagined.',
};

export const blogParams: Param = {
  bannerImage: '/banner/blogBanner.svg',
  bannerLinks: { home: 'Home', anotherLink: 'Blog' },
  title: 'Our Blog',
  subTitle: 'Home ideas and design inspiration',
};
