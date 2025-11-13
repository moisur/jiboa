
export interface Review {
  id: number;
  author: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
}

export interface ColorVariant {
  colorName: string;
  colorHex: string;
  imageUrls: string[]; // Gallery for this color
  sizes: {
    size: 'S' | 'M' | 'L' | 'XL';
    sku: string;
  }[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  details: string[];
  story: string;
  reviews: Review[];
  colorVariants: ColorVariant[];
}

export interface CartItem {
  productId: number;
  sku: string;
  productName: string;
  price: number;
  quantity: number;
  size: 'S' | 'M' | 'L' | 'XL';
  colorName: string;
  imageUrl: string;
}
