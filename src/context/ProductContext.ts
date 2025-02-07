import { Category } from "@/types/Category";
import { Product } from "@/types/Product";
import { createContext } from "react";

const ProductContext = createContext<{
  products: Product[];
  categories: Category[];
}>({ categories: [], products: [] });

export default ProductContext;
