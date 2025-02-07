"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { MouseEvent } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md";

type Props = {
  id: string;
  name: string;
  tag: string;
  imageUrl: string;
  oldPrice?: number;
  price: number;
  tagColor?: string;
  unit: string;
};

const Catalog = ({
  id,
  name,
  tag,
  imageUrl,
  oldPrice,
  price,
  tagColor,
  unit,
}: Props) => {
  const { state, dispatch } = useCart();

  const inCart = state.items.find((item) => item.id === id);

  const handleRemoveFromCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id },
    });
  };

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, tag, imageUrl, oldPrice, price, unit },
    });
  };

  return (
    <div className="relative rounded-lg overflow-hidden cursor-pointer">
      {tag && (
        <span
          className={`absolute top-2 left-2 px-2 py-1 rounded ${tagColor} text-white`}
        >
          {tag}
        </span>
      )}
      <Image
        alt="ecommerce"
        className="object-cover object-center rounded-lg"
        src={imageUrl}
        height={280}
        width={280}
      />
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] text-primary">{name}</h2>
          <div>
            <p className={`flex text-primary ${oldPrice ? "gap-2" : ""}`}>
              <span className="font-bold">
                {unit}
                {price}
              </span>
              {oldPrice && (
                <span className="text-gray-500 line-through text-[14px] text-gray">
                  {unit}
                  {oldPrice}
                </span>
              )}
            </p>
          </div>
        </div>
        <button
          className="w-[50px] h-[50px] p-2 hover:bg-secondary rounded-md hover:text-white text-2xl grid place-items-center"
          onClick={
            state.items && inCart ? handleRemoveFromCart : handleAddToCart
          }
        >
          <span>{inCart ? <MdRemoveShoppingCart /> : <IoCartOutline />}</span>
        </button>
      </div>
    </div>
  );
};

export default Catalog;
