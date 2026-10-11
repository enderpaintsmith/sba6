
import { Product } from "../models/Product.js";
import { AppError } from "../utils/errorHandler.js";

const API_URL = "https://dummyjson.com/products";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new AppError(`Failed to fetch products: ${response.status}`);
    }

    
const data: { products: Product[] } = await response.json();

return data.products.map(
  (item) =>
    new Product(
      item.id,
      item.title,
      item.description,
      item.price,
      item.discountPercentage,
      item.category,
      item.rating,
      item.stock
    )
);

  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError("Unable to retrieve products from the API.");
  }
}