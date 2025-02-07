"use client";

import Catalog from "@/components/Catalog";
import CategoryCard from "@/components/CategoryCard";
import useProductContext from "@/hooks/useProductContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const { products, categories } = useProductContext();

  return (
    <div className="max-w-screen-xl m-auto">
      <section>
        <div className="flex max-lg:flex-col max-lg:items-center lg:justify-between py-24 px-2 md:px-20 max-lg:gap-20">
          <div className="max-lg:flex text-primary max-lg:flex-col max-lg:text-center max-lg:items-center">
            <p className="text-gray-500 text-lg">WELCOME TO CHAIRY</p>
            <h1 className="text-[60px] font-bold my-4">
              Best Furniture
              <br />
              Collection For Your
              <br />
              Interior.
            </h1>
            <Link href="/product">
              <button className="bg-secondary text-[16px] text-white py-4 px-8 flex items-center rounded-md outline-none">
                Shop Now
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>

          <div>
            <Image
              src="/images/chair.png"
              width={350}
              height={500}
              alt="Chair"
            />
          </div>
        </div>
      </section>

      <section className="flex gap-24 flex-wrap justify-center items-center my-8">
        {[
          { src: "/companies/zapier.png" },
          { src: "/companies/pipedrive.png" },
          { src: "/companies/bank.png" },
          { src: "/companies/z.png" },
          { src: "/companies/burnt.png" },
          { src: "/companies/doc.png" },
          { src: "/companies/moz.png" },
        ].map(({ src }, index) => (
          <Image key={index} src={src} alt="logo" width={100} height={100} />
        ))}
      </section>

      <section className="container px-5 py-24 mx-auto">
        <h1 className="text-[32px] mb-4 font-semibold">Featured Products</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {products.slice(0, 4).map((product) => (
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
          ))}
        </div>
      </section>

      <section className="container px-5 py-24 mx-auto">
        <h1 className="text-[32px] mb-4 font-semibold">Top Categories</h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {categories.map((category, index) => (
            <CategoryCard imageUrl={category.image.asset.url} key={index} />
          ))}
        </div>
      </section>

      <section className="container px-5 py-24 mx-auto flex">
        <p className="uppercase text-[32px] vertical-text">
          Explore new and popular styles
        </p>
        <div className="grid gallery-grid-lg xl:gallery-grid-xl gap-2 m-auto">
          <Image
            className="rounded-lg"
            style={{ gridArea: "gallery-1" }}
            src="/gallery/1.jpeg"
            height={600}
            width={600}
            alt="gallery 1"
          />
          <Image
            className="rounded-lg"
            style={{ gridArea: "gallery-2" }}
            src="/gallery/2.jpeg"
            width={300}
            height={300}
            alt="gallery 1"
          />
          <Image
            className="rounded-lg"
            style={{ gridArea: "gallery-3" }}
            src="/gallery/3.jpeg"
            height={300}
            width={300}
            alt="gallery 1"
          />
          <Image
            className="rounded-lg"
            style={{ gridArea: "gallery-4" }}
            src="/gallery/4.jpeg"
            height={300}
            width={300}
            alt="gallery 2"
          />
          <Image
            className="rounded-lg"
            style={{ gridArea: "gallery-5" }}
            src="/gallery/5.jpeg"
            height={300}
            width={300}
            alt="gallery 3"
          />
        </div>
      </section>

      <section className="container px-5 py-24 mx-auto">
        <h1 className="text-[32px] mb-4 font-semibold">Our Products</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {products.slice(0, 8).map((product) => (
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
          ))}
        </div>
      </section>
    </div>
  );
}
