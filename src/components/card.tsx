"use client";

import { Card, CardFooter } from "@/components/ui/card";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";

export default function Cards({
  text,
  img,
  blog = false,
  data_blog,
  data_blog_text,
  title_blog,
  blog_row = false,
  noButton = false,
  company = false,
  width = 0,
  height = 0,
  cn = "",
  description = "",
  title = "",
  onClick,
  link = "/",
  onHover = false,
  hoverImage = "",
  hoverDescription,
  hoverSubTitle,
  hoverTitle,
  imgCn = "",
}: {
  text: string;
  img: string;
  blog?: boolean;
  data_blog?: string;
  data_blog_text?: string;
  title_blog?: string;
  blog_row?: boolean;
  noButton?: boolean;
  onClick?: () => void;
  company?: boolean;
  width?: number;
  height?: number;
  cn?: string;
  id?: number;
  description?: string | string[];
  link?: string;
  title?: string;
  onHover?: boolean;
  hoverImage?: string;
  hoverDescription?: string;
  hoverSubTitle?: string;
  hoverTitle?: string;
  imgCn?: string;
}) {
  const parseJSXString = (jsxString: string) => {
    try {
      const cleanedString = jsxString
        .replace(/^\(\s*/, "")
        .replace(/\s*\)$/, "");
      return parse(cleanedString);
    } catch (error) {
      console.error("Error parsing JSX string:", error);
      return null;
    }
  };

  const router = useRouter();

  return (
    <>
      {blog && !blog_row ? (
        <Card
          onClick={() => router.push(link)}
          className="lg:w-[416px] md:w-[416px] cursor-pointer hover:!shadow-lg h-full  lg:max-w-[416px] !border hover:border-primary-brand-800 rounded-t-3xl rounded-b-2xl p-4 md:hover:scale-105 transition-all duration-700 ease-in-out"
        >
          <div className="block md:hidden text-xs font-normal mb-4 text-primary-black-300 ">
            <span className="bg-primary-black-50 rounded-md px-2 py-1 mr-2">
              {data_blog}
            </span>
            <span className="bg-primary-black-50 rounded-md px-2 py-1">
              {data_blog_text}
            </span>
          </div>
          <Image
            width={500}
            height={224}
            src={img}
            className="rounded-2xl min-h-[224px] max-h-[224px] object-cover"
            alt={text}
          ></Image>
          <CardFooter className="flex mt-2 flex-col justify-between !p-0 ">
            <div className="text-2xl font-semibold">
              {parseJSXString(title_blog ?? "")}
            </div>
            <div className="max-w-full overflow-hidden text-primary-black-700 text-xs font-normal mt-4 line-clamp-2">
              {parseJSXString(text)}
            </div>
            <div className="w-full md:flex flex-row items-center justify-between mt-4 pt-2 border-t ">
              <div className=" md:block hidden  text-xs font-normal text-primary-black-300">
                <div className="bg-primary-black-50 rounded-md px-2 py-1 ">
                  {data_blog}
                </div>

                <div className="mt-1">{data_blog_text}</div>
              </div>
              <Link
                href={link || "/"}
                className=" font-semibold text-base flex flex-row items-center justify-center gap-2 bg-primary-brand-700 text-white py-2 px-4 rounded-xl "
              >
                Leia Matéria
                <ArrowRight size={16} className="text-white" />
              </Link>
            </div>
          </CardFooter>
        </Card>
      ) : blog && blog_row ? (
        <Card
          onClick={() => router.push(link)}
          className="w-full !border-none !shadow-none flex gap-6 rounded-b-2xl p-2 !border transition-all duration-700 ease-in-out"
        >
          <Image
            width={540}
            height={224}
            src={img}
            className="rounded-2xl"
            alt={text}
          ></Image>
          <CardFooter className="flex flex-col items-start justify-between !pb-0 !px-0  w-full">
            <div>
              <div className="text-3xl font-semibold">
                {parseJSXString(title_blog ?? "")}
              </div>
              <div className="border-l border-primary-black-700 pl-2 text-primary-black-700 text-xs font-normal mt-4 truncate-2-lines">
                {parseJSXString(text)}
              </div>
            </div>

            <div className="w-full flex flex-row items-center justify-between mt-4 pt-2 border-t">
              <div className="text-xs font-normal mb-4 text-primary-black-300 flex mt-2">
                <div className="bg-primary-black-50 rounded-md px-2 py-1 mr-2">
                  {data_blog}
                </div>
                <div className="bg-primary-black-50 rounded-md px-2 py-1">
                  {data_blog_text}
                </div>
              </div>

              <Link
                href={link || "/"}
                className=" font-semibold text-base flex flex-row items-center gap-2 bg-primary-brand-700 text-white py-2 px-4 rounded-xl "
              >
                Leia Matéria
                <ArrowRight size={16} className="text-white" />
              </Link>
            </div>
          </CardFooter>
        </Card>
      ) : company ? (
        <Card
          className={` ${cn} transition-all duration-700 ease-in-out w-full items-center justify-center h-[400px]  rounded-2xl flex flex-col`}
        >
          <Image
            width={width}
            height={height}
            src={`${img}`}
            className={`rounded-2xl   object-cover ${imgCn}`}
            alt={text}
          />

          <div className="">
            <p className="text-primary-black-950 text-xl font-semibold">
              {title}
            </p>
            <p className="text-primary-black-700 text-sm font-normal">
              {description}
            </p>
          </div>
        </Card>
      ) : (
        <div
          onClick={() => router.push(link)}
          className="group flex flex-col justify-between  bg-primary-light-green-200 w-full md:w-[300px] md:max-w-[300px] h-[300px] cursor-pointer overflow-hidden text-gray-50 rounded-2xl transition-all duration-700 ease-in-out"
        >
          {/* Imagem que diminui no hover */}
          <div className="relative overflow-hidden h-full w-full  transition-all ease-in-out duration-700">
            <Image
              width={500}
              height={204}
              src={`/linha/${img}`}
              className={`rounded-t-2xl min-h-full object-cover w-full 
                ${
                  onHover &&
                  "group-hover:!min-h-[130px] group-hover:!max-h-[130px] group-hover:rounded-b-none transition-all ease-in-out duration-700"
                }`}
              alt={text}
            />

            <CardFooter
              className={`${
                onHover && "group-hover:h-[calc(100%_-_114px)] "
              }  flex  items-center justify-center bottom-0 absolute bg-primary-brand-800 w-full  md:w-[300px] md:max-w-[300px] rounded-t-2xl border border-primary-brand-700 !pb-0 !px-4  h-[65px] transition-all duration-700 ease-in-out`}
            >
              <div className="flex items-center  justify-center h-full w-full ">
                <p
                  className={` ${
                    onHover && "group-hover:hidden "
                  } text-white text-sm lg:text-xl font-semibold flex-1`}
                >
                  {text}
                </p>
                {!noButton && (
                  <div className={`${onHover && "group-hover:hidden "}`}>
                    <Button
                      onClick={onClick}
                      color="secondary"
                      text="Conheça"
                      cn="!flex !items-center !justify-center max-lg:!w-[97px] max-lg:!h-[37px]"
                      icon={false}
                    />
                  </div>
                )}

                {onHover && (
                  <>
                    <div className="h-0 hidden group-hover:block group-hover:h-full  px-0 p-4 transition-all duration-700 ease-in-out">
                      <div className="flex gap-4 justify-between">
                        <div className="w-2/4">
                          <h2 className="font-semibold text-base line-clamp-1 uppercase">
                            {hoverTitle}
                          </h2>
                          <h3 className="font-semibold text-xs mt-1">
                            {hoverSubTitle}
                          </h3>
                          <p className="font-normal text-xs mt-2 line-clamp-3">
                            {hoverDescription}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="font-normal text-[10px]">
                            Produto final produzido
                          </span>
                          <Image
                            src={`/linha/${hoverImage}`}
                            width={140}
                            height={80}
                            alt="imagem"
                            className="rounded-2xl max-h-[80px] object-contain mt-1"
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <Button
                          onClick={onClick}
                          color="secondary"
                          text="Ver mais"
                          cn="!flex !w-full !py-2 !justify-between !h-10"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardFooter>

            {/*   {onHover && (
              <div
                className="hidden group-hover:block absolute left-0 bottom-0 bg-red-500 rounded-t-2xl border border-primary-brand-700 rounded-b-2xl 
                         transition-all ease-in-out duration-700 overflow-hidden h-0 md:h-[200px]"
              >
                <div className="p-4">
                  <div className="flex gap-4 justify-between">
                    <div className="w-2/4">
                      <h2 className="font-semibold text-base line-clamp-1">
                        {hoverTitle}
                      </h2>
                      <h3 className="font-semibold text-xs mt-1">
                        {hoverSubTitle}
                      </h3>
                      <p className="font-normal text-xs mt-2 line-clamp-3">
                        {hoverDescription}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-normal text-[10px]">
                        Produto final produzido
                      </span>
                      <Image
                        src={`/linha/${hoverImage}`}
                        width={140}
                        height={80}
                        alt="imagem"
                        className="rounded-2xl max-h-[80px] object-contain mt-1"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <Button
                      onClick={onClick}
                      color="secondary"
                      text="Ver mais"
                      cn="!flex !w-full !py-2 !justify-between !h-10"
                    />
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      )}
    </>
  );
}
