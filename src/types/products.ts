export interface Product {
  productId: number;
  title: string;
  discountedTitle: string;
  discountPercentage: string;
  imageUrl: string;
  rating: string[];
  originalPrice: number;
  discountedPrice: string;
  reviewsCount: string;
  subTitle: string;
  measurements: string;
  sku: number;
  category: string;
  popularity: number;
  ratingItem: number;
  subCategory: string;
}

export type Products = Product[];
