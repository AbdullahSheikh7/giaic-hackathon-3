import ProductContext from "@/context/ProductContext";
import { useContext } from "react";

const useProductContext = () => {
  if (!ProductContext)
    console.error("useProductContext must be used within a ProductProvider");
  return useContext(ProductContext);
};

export default useProductContext;
