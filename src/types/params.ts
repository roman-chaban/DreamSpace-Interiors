export interface Param {
  bannerImage: string;
  bannerLinks: {
    home: string;
    shop: string;
  };
  title: string;
  subTitle: string;
}

export const params: Param = {
  bannerImage: '/banner/banner.svg',
  bannerLinks: { home: 'Home', shop: 'Shop' },
  title: 'Shop Page',
  subTitle: 'Let’s design the place you always imagined.',
};
