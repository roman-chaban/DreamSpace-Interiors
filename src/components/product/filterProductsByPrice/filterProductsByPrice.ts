import { Products } from '@/types/products';

export const filterProductsByPrice = (
  products: Products,
  selectedPrices: Array<number>
) => {
  if (selectedPrices.length === 0) {
    return products;
  }

  return products.filter((product) => {
    const price = product.originalPrice;

    if (selectedPrices.includes(1)) return true;

    if (selectedPrices.includes(2) && price >= 0 && price <= 99.99) return true;
    if (selectedPrices.includes(3) && price >= 100 && price <= 199.99)
      return true;
    if (selectedPrices.includes(4) && price >= 200 && price <= 299.99)
      return true;
    if (selectedPrices.includes(5) && price >= 300 && price <= 399.99)
      return true;
    if (selectedPrices.includes(6) && price >= 400) return true;

    return false;
  });
};

export const filterFeaturesProductsByPrice = (
  products: Products,
  selectedPrice: string
) => {
  if (products.length === 0) {
    return products;
  }

  return products.filter((product) => {
    const price = product.originalPrice;

    switch (selectedPrice) {
      case '0-50':
        return price <= 0;
      case '50-100':
        return price > 50 && price <= 100;
      case '100-200':
        return price > 100 && price <= 200;
      case '200+':
        return price > 200;
      default:
        return true;
    }
  });
};
