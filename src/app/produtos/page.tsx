"use client";

import Cards from "@/components/card";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import ProductLine from "@/components/hero/productLine";
import Title from "@/components/title";
import { aboutUs, cardsLine } from "@/constants/products";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Loading from "../loading";

export default function Products() {
  const router = useRouter();

  return (
    <Suspense fallback={<Loading />}>
      <section className="lg:pb-20 ">
        <ProductLine />
        <div className="py-6  container mx-auto max-md:px-6 lg:px-24 lg:pt-6">
          <DynamicBreadcrumb />
        </div>
        <div className="pb-6 container mx-auto max-md:px-6 lg:px-24">
          {aboutUs.map((item, index) => (
            <Title
              key={index}
              subTitle={item.subTitle}
              title={item.title}
              text={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8  w-full items-center justify-start  container mx-auto max-md:px-6 lg:px-24 py-6">
          {cardsLine.map((item) => (
            <Cards
              key={item.key}
              text={item.text}
              img={item.img}
              link={`/produtos/product/?item=${item.key}`}
              onClick={() => router.push(`/produtos/product/?item=${item.key}`)}
            />
          ))}
        </div>
      </section>
    </Suspense>
  );
}
