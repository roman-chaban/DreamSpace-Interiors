import { Products } from '@/types/products';

export const sortedFeaturesProducts = (products: Products, sortBy: string) => {
  switch (sortBy) {
    case 'living-room':
      return products.filter(
        (product) => product.subCategory === 'living-room'
      );
    case 'bedroom-room':
      return products.filter(
        (product) => product.subCategory === 'bedroom-room'
      );
    case 'bathroom-room':
      return products.filter(
        (product) => product.subCategory === 'bathroom-room'
      );
    case 'lightning':
      return products.filter((product) => product.subCategory === 'lightning');
    case 'outdoor':
      return products.filter((product) => product.subCategory === 'outdoor');
    default:
      return products;
  }
};
