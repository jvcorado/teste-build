"use client";

import HeroSustainability from "@/components/hero/sustainability";
import Title from "@/components/title";
import { itemAccordion, sustainability } from "@/const/sustainability";
import FSC from "../../../public/image_FSC.svg";
import Image from "next/image";
import CurriculoCard from "@/components/curriculo-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse from "html-react-parser";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { Suspense } from "react";
import React from "react";
import Loading from "../loading";

export default function Sustainability() {
  const parseJSXString = (jsxString: string) => {
    try {
      // Remove os parênteses extras e espaços desnecessários
      const cleanedString = jsxString
        .replace(/^\(\s*/, "") // Remove "(" no início
        .replace(/\s*\)$/, ""); // Remove ")" no final

      // Usa o parser para converter a string em elementos React
      return parse(cleanedString);
    } catch (error) {
      console.error("Error parsing JSX string:", error);
      return null;
    }
  };
  const declarationFSC = `https://drive.google.com/file/d/1KJzzpmQuHT2YSIJTPpznKjwaMnoMINTP/view?usp=drive_link`;
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col !overflow-x-hidden">
        <HeroSustainability />

        <div className="lg:container lg:mx-auto lg:px-24 py-12 max-lg:mx-6 lg:py-6">
          <DynamicBreadcrumb />
        </div>

        <section className="lg:container lg:mx-auto lg:px-24  max-lg:mx-6   flex flex-col md:flex-row items-center justify-between gap-14 ">
          <div className="flex-1 flex gap-12 items-start justify-between flex-col lg:flex-row">
            {sustainability.map((item) => (
              <div
                key={item.id}
                onClick={() => window.open(declarationFSC, "_blank")}
              >
                <Title
                  subTitle="Compromisso com o futuro"
                  title={item.title}
                  text={item.description}
                  singleLine
                />
              </div>
            ))}
            <Image
              src={FSC}
              alt="fsc"
              className="hidden lg:block w-[50%] h-full"
            />
          </div>
        </section>
        <div className="flex flex-col lg:container lg:mx-auto lg:px-24  max-lg:mx-6 pb-10 -mt-3">
          <p className="font-normal text-[16px] text-primary-black-700">
            Além disso, contamos com o Selo Verde Ambipar, uma certificação que
            atesta a rastreabilidade e a destinação ambientalmente correta de
            resíduos, incluindo papel reciclável. Esse selo garante que seguimos
            boas práticas de sustentabilidade, reduzindo impactos ambientais e
            promovendo a economia circular.
          </p>
          <br />
          <strong className="font-semibold text-[16px] text-primary-black-700">
            Ele assegura nossa conformidade com normas ambientais e a
            transparência em todo o processo de reciclagem.
          </strong>
          <br />
          <br />
          <p className="font-normal text-[16px] text-primary-black-700">
            Comprometidos com a excelência, também buscamos continuamente as
            certificações ISO 9001 e ISO 14001, reafirmando nossa dedicação à
            qualidade total e à gestão ambiental. A GUAPI PAPÉIS® investe em
            capacitação humana e tecnologias inovadoras, criativas e
            autossustentáveis, não apenas fortalecendo o mercado de reciclagem
            de papéis, mas também impulsionando mudanças positivas para as
            pessoas e o meio ambiente.
          </p>
        </div>

        <section
          className="bg-cover py-12 md:py-[88px] "
          style={{ backgroundImage: "url('/responsibility.svg')" }}
        >
          <div className="lg:container lg:mx-auto lg:px-24 flex flex-col w-full items-center text-white max-lg:px-6 ">
            <span
              className={` max-md:text-sm text-lg font-semibold text-white mb-4`}
            >
              Nosso Processo
            </span>
            <h1
              className={` max-md:!text-xl md:text-2xl lg:text-[40px] lg:!leading-[50px] text-white font-semibold text-center `}
            >
              Entenda o porque a Guapi é lider em reciclagem
            </h1>

            <div className="flex flex-col mt-8 gap-4 w-full">
              {itemAccordion.map((item) => (
                <React.Fragment key={item.id}>
                  <Accordion
                    key={item.id}
                    type="single"
                    collapsible
                    className="border border-primary-brand-700 bg-primary-brand-800 rounded-xl px-8"
                  >
                    <AccordionItem value={`item-${item.id}`}>
                      <AccordionTrigger className="hover:no-underline text-base">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={1000}
                          height={400}
                          className="w-full"
                        />
                        <div
                          className={` max-md:!text-xl pt-10 pb-8 md:text-xl lg:text-[34px] lg:!leading-[50px] text-white font-semibold `}
                        >
                          {parseJSXString(item.text)}
                        </div>
                        <div>{parseJSXString(item.content)}</div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculo */}
        <section className=" lg:container lg:mx-auto lg:px-24 py-12 max-lg:mx-6 lg:py-[88px]">
          <CurriculoCard />
        </section>
      </div>
    </Suspense>
  );
}
