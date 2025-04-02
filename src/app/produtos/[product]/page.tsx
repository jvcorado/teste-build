"use client";

import Cards from "@/components/card";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import ProductCarton from "@/components/hero/productCarton";
import ProductDuo from "@/components/hero/productDuo";
import ProductUni from "@/components/hero/productUni";
import { carbonData, duoData, uniData } from "@/constants/products";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const item = searchParams.get("item");
  const router = useRouter();

  return (
    <>
      {item == "uni" && <ProductUni />}
      {item == "duo" && <ProductDuo />}
      {item == "carton" && <ProductCarton />}
      <div className="pt-6 container mx-auto max-md:px-6 lg:px-24 ">
        <div className="w-full flex flex-col justify-between items-start ">
          <div className="ms-7">
            <DynamicBreadcrumb />
          </div>
          {item == "uni" && (
            <div className="w-full flex items-center justify-center md:justify-center flex-wrap  gap-8 py-8">
              {uniData.products.map((item, index) => (
                <Cards
                  key={index}
                  text={item.card.text.toUpperCase()}
                  img={item.card.imgheels}
                  noButton
                  link={`/produtos/product/details/?item=${item.card.key}`}
                  onClick={() =>
                    router.push(
                      `/produtos/product/details/?item=${item.card.key}`
                    )
                  }
                  hoverTitle={item.card.text}
                  hoverSubTitle={item.card.subTitle}
                  hoverDescription={item.card.description}
                  hoverImage={item.card.img}
                  onHover
                />
              ))}
            </div>
          )}
          {item == "duo" && (
            <div className="w-full flex items-center justify-center md:justify-start flex-wrap gap-8 py-8">
              {duoData.products.map((item, index) => (
                <Cards
                  key={index}
                  text={item.card.text.toUpperCase()}
                  img={item.card.imgheels}
                  noButton
                  link={`/produtos/product/details/?item=${item.card.key}`}
                  onClick={() =>
                    router.push(
                      `/produtos/product/details/?item=${item.card.key}`
                    )
                  }
                  hoverTitle={item.card.text}
                  hoverSubTitle={item.card.subTitle}
                  hoverDescription={item.card.description}
                  hoverImage={item.card.img}
                  onHover
                />
              ))}
            </div>
          )}
          {item == "carton" && (
            <div className="w-full flex items-center justify-center md:justify-start flex-wrap gap-8 py-8">
              {carbonData.products.map((item, index) => (
                <Cards
                  key={index}
                  text={item.card.text.toUpperCase()}
                  img={item.card.imgheels}
                  noButton
                  link={`/produtos/product/details/?item=${item.card.key}`}
                  onClick={() =>
                    router.push(
                      `/produtos/product/details/?item=${item.card.key}`
                    )
                  }
                  hoverTitle={item.card.text}
                  hoverSubTitle={item.card.subTitle}
                  hoverDescription={item.card.description}
                  hoverImage={item.card.img}
                  onHover
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
