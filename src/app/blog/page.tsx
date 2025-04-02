"use client";

import Cards from "@/components/card";
import CurriculoCard from "@/components/curriculo-card";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { blogPosts } from "@/const/blog";
import { Suspense } from "react";
import Loading from "../loading";

export default function Blog() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="lg:container lg:mx-auto lg:px-24 py-6 max-lg:mx-6 lg:pt-6 ">
        <DynamicBreadcrumb />
      </div>

      <main className="container mx-auto max-md:px-6 lg:px-24 ">
        <div className="relative mb-8">
          {/* 
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={handleClear}
                >
                  {searchQuery ? (
                    <X size={24} className="text-primary-black-500" />
                  ) : (
                    <Search size={24} className="text-primary-black-500" />
                  )}
                </button> */}
        </div>
        <section className="flex flex-col gap-8 pb-14 ">
          <div className="xl:block hidden">
            {blogPosts.slice(0, 1).map((post, index) => (
              <Cards
                key={index}
                blog
                img={post.img}
                data_blog={post.date}
                data_blog_text={post.dateText}
                title_blog={post.title}
                text={post.excerpt}
                link={`/blog/post/?id=${post.id}`}
                blog_row
              />
            ))}
          </div>
          <div className=" xl:hidden block ">
            {blogPosts.slice(0, 1).map((post, index) => (
              <Cards
                key={index}
                blog
                img={post.img}
                data_blog={post.date}
                data_blog_text={post.dateText}
                title_blog={post.title}
                text={post.excerpt}
                link={`/blog/post/?id=${post.id}`}
              />
            ))}
          </div>
          <div className="flex flex-col flex-wrap md:flex-row gap-12 items-start justify-between text">
            {blogPosts.slice(1).map((post, index) => (
              <Cards
                key={index}
                blog
                img={post.img}
                data_blog={post.date}
                data_blog_text={post.dateText}
                title_blog={post.title}
                text={post.excerpt}
                link={`/blog/post/?id=${post.id}`}
              />
            ))}
          </div>
        </section>

        <section className="lg:py-[88px] pb-10">
          <CurriculoCard />
        </section>
      </main>
    </Suspense>
  );
}
