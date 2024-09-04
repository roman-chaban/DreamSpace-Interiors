export interface Product {
    productId: number;
    title: string;
    discountedTitle: string;
    discountPercentage: string;
    imageUrl: string;
    rating: string[];
    originalPrice: string;
    discountedPrice: string;
    reviewsCount: string;
    subTitle: string;
    measurements: string;
    sku: number;
    category: string;
};


export type Products = Product[];