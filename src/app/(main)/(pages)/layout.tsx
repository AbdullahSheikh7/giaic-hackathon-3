"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCart } from "@/hooks/useCart";
import React, { useEffect } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { dispatch } = useCart();
  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      dispatch({ type: "SET_DATA", payload: JSON.parse(data) });
    } else {
      localStorage.setItem("cart", "[]");
      dispatch({ type: "SET_DATA", payload: [] });
    }
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
