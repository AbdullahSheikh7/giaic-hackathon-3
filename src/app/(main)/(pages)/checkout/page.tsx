import CheckoutForm from "@/components/CheckoutForm";
import OrderSummary from "@/components/OrderSummary";
import React from "react";

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-2/3">
        <CheckoutForm />
      </div>
      <div className="md:w-1/3">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
