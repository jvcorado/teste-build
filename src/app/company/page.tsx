"use client";

import Factory from "@/components/hero/company";
import Title from "@/components/title";
import Card from "@/components/card";
import Image from "next/image";
import CurriculoCard from "@/components/curriculo-card";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { Suspense } from "react";
import Carousel from "@/components/carousel";
import Loading from "./loading";

/* import PageTransition from "@/components/pageTransition";
import { usePathname } from "next/navigation";
 */
export default function Company() {
  const Welcome = [
    {
      id: 1,
      title: [
        "Somos uma das principais indústrias de papéis reciclados de alta",
        "performance do Brasil",
      ],
      sub_title: [
        // "Somos uma das principais",
        // "indústrias de papéis reciclados de",
        // "alta performance do Brasil",
      ],
      description: [
        "Com estrutura física de 200.000m² na UNIDADE FABRICADORA, a GUAPI PAPÉIS® atende e supre, nacional e internacionalmente, o setor de embalagens em",
        "geral, incluindo o segmento tissue.",

        "Possuir o título de uma das grandes fabricantes nacionais de papéis reciclados, no entanto, não é o suficiente: há que se atuar sustentavelmente do início",
        " ao fim, com a consciência de que sempre é possível fazer mais e melhor para o meio ambiente e as futuras gerações.",
        "Por tudo isso, reafirmamos que a sustentabilidade é a nossa matéria-prima.",
        "Agradecemos sua visita: agora convidamos você a conhecer melhor em nosso site, além dos produtos, nossa história, políticas, ações sustentáveis e",
        "sociais.",
      ],
    },
  ];

  const items = [
    /*   {
      id: 1,
      title: "",
      description: [""],
      image: "/IMAGE_M_V_V.svg",
      width: 392,
      height: 370,
      cn: "!flex !items-center !justify-end !p-0 !bg-primary-light-green-200 ",
    }, */
    {
      id: 2,
      title: "Missão",
      description: [
        "Produzir e fornecer papel reciclado para embalagens, atendendo",
        "todas as necessidades e expectativas dos nossos clientes com ",
        "qualidade, valorizando fornecedores, colaboradores e a natureza.",
      ],
      image: "/IMAGE_MISSAO.svg",
      width: 200,
      height: 200,
      cn: "bg-primary-light-green-100 !p-8",
      imgCn:
        "w-[200px] h-[200px] min-h-[200px] min-w-[200px] max-h-[200px] max-w-[200px]",
    },

    {
      id: 3,
      title: "Visão",
      description: [
        "Sermos reconhecidos como a empresa mais eficiente na",
        "fabricação e fornecimento de papel reciclado no segmento.",
      ],
      image: "/IMAGE_VISAO.svg",
      width: 500,
      height: 500,
      cn: "bg-primary-light-green-100 !p-8",
      imgCn:
        "w-[200px] h-[200px] min-h-[200px] min-w-[200px] max-h-[200px] max-w-[200px]",
    },
    {
      id: 4,
      title: "Valores",
      description: [
        "Valorização do cliente; Trabalho em equipe; Ética; Compromisso;",
        "Sustentabilidade.",
      ],
      image: "/IMAGE_VALORES.svg",
      width: 180,
      height: 180,
      cn: "bg-primary-light-green-100 !p-8",
      imgCn:
        "w-[200px] h-[200px] min-h-[200px] min-w-[200px] max-h-[200px] max-w-[200px]",
    },
  ];

  const descriptionSG1 = [
    {
      id: 1,
      description: [
        "Assegurar o compromisso com o aumento da satisfação dos clientes e atender as expectativas ",
        "das outras partes interessadas;",
      ],
    },
    {
      id: 2,
      description: ["Promover a melhoria contínua do sistema de gestão;"],
    },
    {
      id: 3,
      description: [
        "Garantir o empreendimento de ações de caráter sustentável, enfatizando a conduta ética, o",
        "desenvolvimento social, o comprometimento com a proteção do meio ambiente e a prevenção",
        "da poluição, reduzindo os impactos ambientais;",
      ],
    },
    {
      id: 4,
      description: [
        "Capacitar continuamente os recursos humanos, visando desenvolver competências individuais",
        "e valorizar o trabalho em equipe;",
      ],
    },
    {
      id: 5,
      description: [
        "Buscar excelência e inovação que visem ao crescimento sustentável;",
      ],
    },
    {
      id: 6,
      description: [
        "Comprometer-se em atender a legislação aplicável e outros requisitos.",
      ],
    },
  ];

  const numbers = [1, 2, 3, 4, 5, 6];

  const Guapiway = [
    {
      id: 1,
      title:
        "Cada ser humano tem o seu jeito de ser, agir e interagir com outras pessoas e com o mundo ao redor.",
      description: [
        "Sermos únicos, diferentes uns dos outros, é algo não menos que fantástico, pois a diversidade humana enriquece toda jornada.",
        "Com as empresas, isso não é diferente: cada organização tem seu jeito de atuar, produzir, gerenciar. Enfim, seu jeito singular de mostrar a que veio!",
        "Desde o nosso início, em 2014, passamos juntos por muitos desafios: acreditar em um sonho, adquirir e reconstruir estruturas, investir e ousar mesmo que em tempos difíceis, como na pandemia da Covid 2019.",
        "Com união, honestidade e persistência, vencemos: hoje, temos orgulho do que chamamos de JEITO GUAPI PAPÉIS.",
        "Porque se temos um ativo principal e precioso, são todas as pessoas que, juntas, fazem o nosso time: é uma família que aumenta a cada ano!",
        "É uma grande equipe com seu jeito especial de ser, uma cultura própria de relacionamentos transparentes, espírito colaborativo, criatividade e vontade constante de aprender para evoluir e multiplicar!",
        "Gente que brilha e sabe, muito bem, o quanto é recompensador facilitar a vida do próximo, seja dentro ou fora da empresa. Gente que tem o JEITO GUAPI PAPÉIS® DE SER!",
      ],
    },
  ];

  /* const path = usePathname(); */

  return (
    /*  <PageTransition routeKey={path}> */
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col !overflow-x-hidden">
        <Factory />

        <div className="lg:container lg:mx-auto lg:px-24 py-6 max-lg:mx-6 lg:pt-6">
          <DynamicBreadcrumb />
        </div>
        <section className="lg:container lg:mx-auto lg:px-24  max-lg:mx-6   flex flex-col md:flex-row items-center justify-between gap-14 ">
          <div>
            {Welcome.map((item) => (
              <Title
                key={item.id}
                subTitle="Bem-vindo(a) à GUAPI PAPÉIS®"
                title={item.title}
                text={item.description}
              />
            ))}
          </div>
        </section>

        <div
          className="bg-cover flex flex-1 items-center justify-center flex-col mt-16  py-4"
          style={{ backgroundImage: "url('/responsibility.svg')" }}
        >
          <div className="flex flex-col justify-between container lg:px-24 flex-grow my-10">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[18px] text-[#fff] text-center">
                Nossa história
              </p>
              <p className="flex  text-[#fff] text-center font-semibold text-[34px]">
                Conheça um pouco de toda nossa
              </p>
              <p className="flex  text-[#fff] text-center font-semibold text-[34px]">
                história durante os anos
              </p>
            </div>

            <Carousel />
          </div>
        </div>

        <h1 className="flex items-center font-semibold text-[34px] text-primary-black-800 container pt-20 pb-10 mx-auto max-md:px-6 lg:px-24">
          Missão, Visão e Valores
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 !gap-4 w-full container mx-auto max-md:px-6 lg:px-24">
          {items.map((item) => (
            <Card
              cn={item.cn}
              key={item.id}
              text={item.title}
              img={item.image}
              height={item.height}
              width={item.width}
              title={item.title}
              description={item.description}
              imgCn={item.imgCn}
              company
            />
          ))}
        </div>
        <div className="flex flex-col container mx-auto  max-md:px-6 lg:px-24 pt-20 md:pt-16 pb-8">
          <p className="font-semibold text-[34px] text-primary-black-800  mb-2 mt-5">
            Políticas do Sistema de Gestão Integrada – SGI
          </p>
          <p className="font-normal text-[16px] text-primary-black-800 mt-5">
            Visando assegurar que as atividades da GUAPI PAPÉIS®, na produção de
            papel reciclado para embalagens, sejam conduzidas em conformidade{" "}
            <br /> com o Sistema de Gestão Integrada – SGI, deve-se buscar:
          </p>
        </div>

        <div className=" container mx-auto max-md:px-6 lg:px-24">
          {numbers.map((num) => {
            const correspondingDesc = descriptionSG1.find(
              (item) => item.id === num
            );

            return (
              <div
                className="flex border border-primary-black-100 rounded-md p-2 gap-6 my-3 items-center"
                key={num}
              >
                <div className="bg-[#006C3E] text-[#ffffff] text-[28px] font-semibold h-[64px] w-[64px] min-w-[64px] rounded-md flex items-center justify-center">
                  {num.toString().padStart(2, "0")}
                </div>
                <div className="flex flex-row">
                  {correspondingDesc && (
                    <div
                      className="font-normal text-sm"
                      key={correspondingDesc.id}
                    >
                      {correspondingDesc.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-1 flex-col lg:flex-row items-center container mx-auto max-md:px-6 lg:px-24 gap-11 mt-20">
          {/* Imagem - aparece primeiro no mobile, depois escondida no desktop (será mostrada no container direito) */}
          <div className="w-full lg:hidden h-[50vh] pb-8">
            <Image
              className="w-full h-full rounded-md"
              src={"/MULTIDAO_SVG.svg"}
              alt="Foto dos colaboradores"
              width={0}
              height={0}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Texto - aparece depois da imagem no mobile, à esquerda no desktop */}
          <div className="w-full lg:w-1/2 flex flex-col flex-1 justify-between h-full order-2 lg:order-1">
            {Guapiway.map((item) => (
              <div key={item.id}>
                <p className="font-semibold text-[18px] text-primary-black-950">
                  Jeito Guapi
                </p>
                <Title title={item.title} text={item.description} />
              </div>
            ))}
          </div>

          {/* Container de imagens - escondido no mobile, visível no desktop */}
          <div className="hidden lg:flex flex-col w-1/2 h-[50vh] order-1 lg:order-2">
            <div className="h-2/4 pb-8">
              <Image
                className="w-full h-full rounded-md"
                src={"/MULTIDAO_SVG.svg"}
                alt="Foto dos colaboradores"
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="flex flex-row h-2/4 gap-8">
              <Image
                className="w-1/2 h-full rounded-md"
                src={"/IMAGE_QUIMICAL_SVG.svg"}
                alt="Foto dos colaboradores"
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                priority
              />
              <Image
                className="w-1/2 h-full rounded-md"
                src={"/IMAGE_WORKERS_SVG.svg"}
                alt="Foto dos colaboradores"
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        <section className=" lg:container lg:mx-auto lg:px-24 py-12 max-lg:mx-6 lg:py-[88px]">
          <CurriculoCard />
        </section>
      </div>
    </Suspense>
    /*   </PageTransition> */
  );
}
