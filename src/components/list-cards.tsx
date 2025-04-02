"use client";

import dynamic from "next/dynamic";
import React from "react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ListCards({
  animation,
  title,
  description,
  aos = "",
}: {
  animation?: object;
  title: string;
  description: string;
  aos?: string;
}) {
  return (
    <div data-aos={aos} className="w-full flex items-center gap-8">
      <div className="bg-primary-brand-700 border border-primary-brand-600 min-w-20 h-20 md:min-w-24 md:h-24 rounded-2xl flex items-center justify-center">
        <div className="flex h-[50px] min-h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-[8px] bg-primary md:h-[100px] md:min-h-[100px] md:w-[100px] md:min-w-[100px]">
          <Lottie animationData={animation} loop autoplay />
        </div>
      </div>
      <div>
        <h1 className="text-sm md:text-lg font-semibold text-white">{title}</h1>
        <p className="text-white font-normal text-[10px] md:text-sm text-wrap">
          {description}
        </p>
      </div>
    </div>
  );
}
