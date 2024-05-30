import { Product } from "../types/Products";
import { ProductDetail } from "../types/ProductDetail";

const BASE_URL = 'https://fakestoreapi.com';

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await fetch(`${BASE_URL}/products/`);
      if (!response.ok) {
        throw new Error(`Error fetching products: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
  getProduct: async (id: number): Promise<ProductDetail> => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching product with id ${id}: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};
