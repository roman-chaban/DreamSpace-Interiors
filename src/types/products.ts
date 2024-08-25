export interface Product {
    productId: number;
    title: string;
    discountedTitle: string;
    discountPercentage: string;
    imageUrl: string;
    rating: string[];
    originalPrice: string;
    discountedPrice: string;
};


export type Products = Product[];