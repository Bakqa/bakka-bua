import type { Product } from "./types";
import productsData from "./products.json";

export async function getProducts(): Promise<Product[]> {
  // In a real app, this would fetch from an API or database
  // For this example, we're using a local JSON file
  return productsData;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
