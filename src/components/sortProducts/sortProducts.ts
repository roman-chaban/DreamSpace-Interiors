import { Products } from '@/types/products';

export const sortProducts = (products: Products, sortBy: string) => {
  switch (sortBy) {
    case 'Lowest price':
      return [...products].sort((a, b) => a.originalPrice - b.originalPrice);
    case 'Highest price':
      return [...products].sort((a, b) => b.originalPrice - a.originalPrice);
    case 'Popularity':
      return [...products].sort((a, b) => a.popularity - b.popularity);
    case 'Rating':
      return [...products].sort((a, b) => a.ratingItem - b.ratingItem);
    default:
      return products;
  }
};
