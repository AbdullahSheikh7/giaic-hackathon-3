"use client";

import CartContext, {
  cartReducer,
  initialState as fromCartContext,
} from "@/context/CartContext";
import { useReducer, useState } from "react";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [initialState] = useState(fromCartContext);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
