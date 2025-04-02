import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { blogPosts } from "@/const/blog";
import Cards from "@/components/card";
// import { Pagination } from 'swiper/modules';

export default function CarouselHome() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper 
        pagination={{ clickable: true }} 
        // modules={[Pagination]} 
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
      >
        {blogPosts.slice(0, 3).map((post, index) => (
          <SwiperSlide key={index}>
            <Cards
              blog
              img={post.img}
              data_blog={post.date}
              title_blog={post.title}
              text={post.excerpt}
              link={`/blog/post/?id=${post.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}