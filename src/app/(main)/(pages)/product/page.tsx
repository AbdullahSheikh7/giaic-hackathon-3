"use client";

import Catalog from "@/components/Catalog";
import Spinner from "@/components/Spinner";
import useProductContext from "@/hooks/useProductContext";
import Link from "next/link";

const Page = () => {
  const { products } = useProductContext();

  return (
    <section className="container px-5 py-24 mx-auto max-w-screen-xl">
      <h1 className="text-[32px] mb-4 font-semibold">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products.length === 0 ? (
          <Spinner />
        ) : (
          products.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              <Catalog
                id={product._id}
                tag={product.tags[0]}
                name={product.title}
                imageUrl={product.image.asset.url}
                price={product.price}
                oldPrice={product.priceWithoutDiscount!}
                unit="$"
                tagColor={
                  Math.random() > 0.5
                    ? Math.random() < 0.5
                      ? "bg-orange-500"
                      : "bg-yellow-500"
                    : "bg-green-500"
                }
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Page;
