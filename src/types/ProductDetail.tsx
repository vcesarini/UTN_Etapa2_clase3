import { Product } from './Products';

export interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}

export interface ProductDetail extends Product {
    rating: Rating;
  }