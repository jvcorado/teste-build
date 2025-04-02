import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import { carouselData } from "@/constants/carousel";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);
  console.log("chama no carousel: ", carouselData);

  useEffect(() => {
    if (activeHoverIndex !== null) {
      const timer = setTimeout(() => {
        setActiveHoverIndex(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeHoverIndex]);
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]} // Adicione o módulo Autoplay aqui
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{
          height: "auto",
          paddingBottom: "40px",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col items-center relative ${
                activeIndex === index ? "active-slide" : ""
              }`}
            >
              {/* Ano - fora do hover */}
              <p className="font-semibold text-[20px] text-[#ffffff]">
                {carouselData[index].card.year}
              </p>

              {/* Linhas de conexão - fora do hover */}
              <div className="flex items-center justify-center w-full relative -mb-2">
                <div className="flex flex-col items-center relative z-10">
                  <div className="h-4 w-4 rounded-full bg-white" />
                  <div
                    className="w-[1px] h-4 border-l-2 border-dashed border-white mx-auto"
                    style={{ minHeight: "16px", transform: "translateX(0px)" }}
                  />
                </div>
                {index < 11 && (
                  <div
                    className="absolute left-1/2 h-[2px] bg-white transform translate-x-2"
                    style={{
                      width: `calc(100% + ${30}px)`,
                      top: "8px",
                      zIndex: 1,
                    }}
                  />
                )}
              </div>

              {/* Container do card com hover */}
              <div className="relative group w-full h-[250px] hover:cursor-pointer">
                {" "}
                {/* Container do hover */}
                {/* Overlay - só no conteúdo do card */}
                <div className="absolute inset-0 bg-black mt-2 -mb-2 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white text-center p-4 text-lg">
                    {carouselData[index].card.text}
                  </p>
                </div>
                {/* Conteúdo do card */}
                <Image
                  src={`/image_carousel/${carouselData[index].card.img}`}
                  alt={`Carousel item ${index + 1}`}
                  fill
                  className="object-none mt-2 rounded-lg group-hover:opacity-70 transition-opacity duration-300 border-2 border-[#FFFFFF]"
                />
              </div>
              <p className="font-semibold text-[24px] text-white mt-2 mb-4">
                {" "}
                {/* Adicionei mb-4 para espaçamento */}
                {carouselData[index].card.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
