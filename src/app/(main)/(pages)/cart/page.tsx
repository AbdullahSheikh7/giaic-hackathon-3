"use client";

import CartProductCatalog from "@/components/CartProductCatalog";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const { state } = useCart();

  let total = 0;
  const extra = 0;

  state.items.forEach((item) => {
    total += item.price * item.quantity;
  });

  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
          <div className="space-y-6">
            {state.items.length > 0 ? (
              state.items.map((item) => {
                return (
                  <CartProductCatalog
                    key={item.id}
                    id={item.id}
                    imgSrc={item.imageUrl}
                    mrp={item.price}
                    name={item.name}
                    tag={item.tag}
                    quantity={item.quantity}
                    oldPrice={item.oldPrice!}
                    unit={item.unit}
                  />
                );
              })
            ) : (
              <>
                <div className="m-auto">
                  <p>No Items in cart</p>
                  <Link href="/product">
                    <button className="p-3 text-white rounded-md bg-secondary">
                      Continue to product
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-6">Summary</h2>
          <div className="border rounded-lg p-6 space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Delivery & Handling</span>
              <span className={extra === 0 ? "text-green-600" : "text-black"}>
                {extra === 0 ? "Free" : extra}
              </span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total + extra}</span>
            </div>
            <button className="w-full text-white rounded-full bg-secondary p-5">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
