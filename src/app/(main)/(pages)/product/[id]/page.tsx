"use client";

import FeaturedCatalog from "@/components/FeaturedCatalog";
import Spinner from "@/components/Spinner";
import useProductContext from "@/hooks/useProductContext";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { MouseEvent, Usable, use } from "react";
import { useCart } from "@/hooks/useCart";
import { MdRemoveShoppingCart } from "react-icons/md";

type Props = { params: { id: string } };

const Page = ({ params }: Props) => {
  const { id } = params;
  const { state, dispatch } = useCart();

  const inCart = state.items.find((item) => item.id === id);

  const { products } = useProductContext();
  const product = products.find((product) => product._id === id);

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
      payload: {
        id,
        imageUrl: product?.image.asset.url || "",
        name: product?.title || "",
        price: product?.price!,
        tag: product?.tags[0] || "",
        unit: "$",
        oldPrice: product?.priceWithoutDiscount!,
      },
    });
  };

  return (
    <>
      {product ? (
        <main className="text-gray-600 body-font overflow-hidden max-w-screen-xl m-auto md:px-20 px-2">
          <div className="max-md:flex-col max-md:items-center py-24 mx-auto flex justify-between gap-8">
            <Image
              alt="ecommerce"
              width={600}
              height={600}
              className="object-cover object-center rounded-lg md:w-1/2"
              src={product?.image.asset.url || ""}
            />
            <div className="flex flex-col gap-6 md:w-1/2">
              <h1 className="text-gray-900 text-[60px] title-font font-bold mb-1 text-primary">
                {product?.title}
              </h1>

              {product?.priceWithoutDiscount && (
                <span className="text-gray-500 line-through text-[14px] text-gray">
                  {product.priceWithoutDiscount} USD
                </span>
              )}
              <span className="text-[14px] p-2 bg-secondary mr-auto text-white rounded-full title-font font-medium text-gray-900">
                {product?.price} USD
              </span>

              <hr />

              <p className="leading-relaxed text-[16px] text-gray">
                {product?.description}
              </p>

              <button
                className="flex items-center gap-2 mr-auto text-white bg-secondary border-0 py-4 px-8 text-[16px] focus:outline-none rounded-lg"
                onClick={
                  state.items && inCart ? handleRemoveFromCart : handleAddToCart
                }
              >
                {inCart ? (
                  <>
                    <span>
                      <MdRemoveShoppingCart />
                    </span>
                    <p>Remove from Cart</p>
                  </>
                ) : (
                  <>
                    <span>
                      <IoCartOutline />
                    </span>
                    <p>Add to Cart</p>
                  </>
                )}
                {/* <span>
                  <IoCartOutline />
                </span>
                <p>Add to Cart</p> */}
              </button>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex justify-between">
              <h1 className="text-[28px] mb-4 font-bold">Featured Products</h1>
              <p className="underline text-[18px] font-bold">View all</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <FeaturedCatalog
                name="Library Stool Chair"
                imageUrl="/products/product-7.jpeg"
                price="$20"
              />

              <FeaturedCatalog
                name="Library Stool Chair"
                imageUrl="/products/product-8.jpeg"
                price="$20"
              />

              <FeaturedCatalog
                name="Library Stool Chair"
                imageUrl="/products/product-9.jpeg"
                price="$20"
              />

              <FeaturedCatalog
                name="Library Stool Chair"
                imageUrl="/products/product-5.jpeg"
                price="$20"
              />

              <FeaturedCatalog
                name="Library Stool Chair"
                imageUrl="/products/product-3.jpeg"
                price="$20"
              />
            </div>
          </div>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Page;
