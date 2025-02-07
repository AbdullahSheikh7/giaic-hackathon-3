import { CartProvider } from "@/providers/CartProvider";
import ProductProviderWrapper from "@/providers/ProductContextProvider";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider>
        <ProductProviderWrapper>{children}</ProductProviderWrapper>
      </CartProvider>
    </>
  );
};

export default layout;
