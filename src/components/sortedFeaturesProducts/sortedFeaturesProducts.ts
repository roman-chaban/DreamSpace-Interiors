import { Products } from '@/types/products';

export const sortedFeaturesProducts = (products: Products, sortBy: string) => {
  switch (sortBy) {
    case 'living-room':
      [...products].find((product) => product.category === 'living-room');

    default:
      products;
  }
};
