import { Product } from "../types/Products";
import { ProductDetail } from "../types/ProductDetail";

const BASE_URL = 'https://fakestoreapi.com'

export const ProductService = {
	//Aquí adentro vamos a declarar los métodos
    getProducts: async (): Promise<Product[]> => {
        const response = await fetch(`${BASE_URL}/products/`);
        const data = await response.json();
        return data;
        },
    getProduct: async (id: number): Promise<ProductDetail> => {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const data = await response.json();
        return data;
        },
};
