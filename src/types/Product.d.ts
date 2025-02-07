import { Category } from "./Category";

export interface Product {
  _id: string;
  title: string;
  priceWithoutDiscount?: number | null; // Optional field
  category: Category; // Reference to Category
  tags: string[];
  price: number;
  badge?: string | null; // Optional field
  image: { asset: { url: string } };
  description: string;
  inventory: number;
}
