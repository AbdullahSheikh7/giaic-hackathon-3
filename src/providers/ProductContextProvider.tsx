"use client";

import ProductContext from "@/context/ProductContext";
import { client } from "@/sanity/lib/client";
import { Category } from "@/types/Category";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";

const ProductProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState<{
    products: Product[];
    categories: Category[];
  }>({ products: [], categories: [] });

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        "products": *[_type == "product"] {
          _id,
          title,
          price,
          priceWithoutDiscount,
          category -> {
            title,
            image {
              asset -> {
                url
              }
            }
          },
          tags,
          badge,
          image {
            asset -> {
              url
            }
          },
          description,
          inventory
        },
        "categories": *[_type == "category"] {
          _id,
          title,
          image {
            asset -> {
              url
            }
          }
        }
      }`;
      const data = await client.fetch(query);
      setValue(data);
    };

    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProviderWrapper;
