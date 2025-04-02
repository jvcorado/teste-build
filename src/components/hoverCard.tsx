import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function HoverCard({
  hoverTitle,
  hoverSubTitle,
  hoverDescription,
  hoverImage = "",
  onClick,
}: {
  hoverTitle?: string;
  hoverSubTitle?: string;
  hoverDescription?: string;
  hoverImage?: string;
  onClick?: () => void;
}) {
  return (
    <div className="w-full md:w-[240px] md:max-h-[266px]  lg:w-[392px] h-full lg:max-h-[392px] transition-all duration-700 cursor-pointer text-white flex flex-col ">
      <div className="h-32 bg-primary-light-green-500 rounded-t-2xl opacity-50"></div>
      <div className="bg-primary-light-green-500 rounded-b-2xl">
        <div className="flex gap-4 justify-between px-6 pt-8 ">
          <div>
            <h2 className="font-semibold text-xl ">{hoverTitle}</h2>
            <h3 className="font-semibold text-sm ">{hoverSubTitle}</h3>
            <p className="font-normal text-sm ">{hoverDescription}</p>
          </div>
          <div className="flex flex-col items-center ">
            <span className="font-normal text-[10px] ">
              Produto final produzido
            </span>
            <Image
              src={`/linha/${hoverImage}`}
              width={140}
              height={90}
              alt="imagem"
            />
          </div>
        </div>
        <div className=" p-6">
          <Button
            onClick={onClick}
            className=" h-10 w-full flex items-center justify-between border border-white"
          >
            Ver Mais
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
