"use client";
import Title from "@/components/title";
import Image from "next/image";
import CurriculoCard from "@/components/curriculo-card";
import SocialResponsabilityHero from "@/components/hero/social-responsibility";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { Suspense } from "react";
import Loading from "../loading";

export default function SocialResponsability() {
  const TextSocialResponsibility = [
    {
      id: 2,
      title: ["Agentes indispensáveis à", "sociedade e ao planeta."],
      description: [
        "É impossível dissociar o papel de uma indústria recicladora, como a",
        "GUAPI PAPÉIS®, dos coletores que são verdadeiros agentes",
        "socioambientais indispensáveis à sociedade.",
        "Além de retirar o seu sustento por meio desta atividade, os catadores",
        "contribuem para a redução dos resíduos nos aterros sanitários e",
        "contribuem para suprir com matéria-prima as fábricas de papéis",
        "reciclados.",

        "Levantamento da Associação Nacional de Catadores e Catadoras de",
        "Materiais Recicláveis (ANCAT) apontou que um agente ambiental recolhe,",
        "em média, 1,6 tonelada de lixo reciclável por mês: no caso da GUAPI",
        "PAPÉIS®, podemos calcular uma base de 3500 a 4200 catadores",
        "beneficiados pela entrega de matéria-prima só em nossa empresa!",
      ],
    },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col !overflow-x-hidden">
        <SocialResponsabilityHero />

        <div className="py-6 container mx-auto max-md:px-6 lg:px-24 lg:pt-6">
          <DynamicBreadcrumb />

          <div className="flex flex-col-reverse gap-10 justify-between lg:flex-row pt-6 ">
            {TextSocialResponsibility.map((item) => (
              <div className="" key={item.id}>
                <Title
                  title={item.title}
                  text={item.description}
                  subTitle="É mais que papel"
                />
              </div>
            ))}

            <Image
              className=" object-cover  rounded-2xl"
              src={"/IMAGE_SOCIAL_CAMINHAO.svg"}
              alt="texto de responsabilidade social caminhão"
              height={480}
              width={600}
            />
          </div>

          <div className=" my-20">
            <p
              className={`max-md:!text-xl md:text-2xl lg:text-[40px] lg:!leading-[50px] text-primary-black-950 font-semibold mb-8 `}
            >
              União em tempos difíceis
            </p>
            <p className="font-normal !text-sm lg:text-base text-primary-black-700">
              É impossível dissociar o papel de uma indústria recicladora, como
              a GUAPI PAPÉIS®, dos coletores que são verdadeiros agentes
              socioambientais indispensáveis à sociedade. Além de retirar o seu
              sustento por meio desta atividade, os catadores contribuem para a
              redução dos resíduos nos aterros sanitários e contribuem para
              suprir com matéria-prima as fábricas de papéis reciclados.
              Levantamento da Associação Nacional de Catadores e Catadoras de
              Materiais Recicláveis (ANCAT) apontou que um agente ambiental
              recolhe, em média, 1,6 tonelada de lixo reciclável por mês: no
              caso da GUAPI PAPÉIS®, podemos calcular uma base de 3500 a 4200
              catadores beneficiados pela entrega de matéria-prima só em nossa
              empresa!
            </p>
          </div>
        </div>

        <div className="flex flex-1">
          <Image
            src={"/IMAGE_OFFICE.svg"}
            width={2008}
            height={360}
            alt="image"
            className="md:hidden lg:block"
          />
        </div>

        <div
          className="bg-cover flex flex-col  mb-20"
          style={{ backgroundImage: "url('/responsibility.svg')" }}
        >
          <div className="flex flex-col gap-16  justify-start pt-16 md:flex-row container mx-auto max-md:px-6 lg:px-24 mb-20">
            <div className="flex flex-col  flex-1   mb-5">
              <p className="max-md:!text-xl md:text-2xl lg:text-[40px] lg:!leading-[50px] text-white font-semibold mb-8">
                Novos Projetos, Novos Horizontes: <br /> Caminhando para um
                Futuro de <br /> Inovação e Expansão
              </p>

              <p className="font-normal !text-sm lg:text-base  text-[#fff]">
                {" "}
                Toda a nossa equipe – dos gestores aos colaboradores – sabe o
                quanto é recompensador investir,{" "}
              </p>
              <p className="font-normal !text-sm lg:text-base  text-[#fff]">
                principalmente, no ser humano! Por isso estamos desenvolvendo
                com muito carinho novos projetos sociais
              </p>
              <p className="font-normal !text-sm lg:text-base  text-[#fff]">
                em diferentes vertentes, que esperamos se tornem realidade o
                mais breve possível.
              </p>

              <br />
              <p className="font-normal !text-sm lg:text-base  text-[#fff]">
                O objetivo é trazer para a sociedade programas que valorizem
                cada <br />
                pessoa e beneficiem a toda a sociedade:{" "}
              </p>
            </div>

            <div className="flex flex-col flex-1  pb-16">
              <div className="flex flex-col border-l-4 border-primary-light-green-500 my-5 ">
                <div className="pl-6">
                  <p className="font-semibold text-[18px] text-[#fff]">
                    Programa Jovem Aprendiz:
                  </p>
                  <p className="font-normal text-[14px] text-[#fff]">
                    Para investir no talento de jovens que querem aprender um
                    ofício e que poderão ser futuramente{" "}
                  </p>
                  <p className="font-normal text-[14px] text-[#fff]">
                    contratados pela GUAPI PAPÉIS®.{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-l-4 border-primary-light-green-500 my-5 ">
                <div className="pl-6">
                  <p className="font-semibold text-[18px] text-[#fff]">
                    Projeto Guapi Ensina
                  </p>
                  <p className="font-normal text-[14px] text-[#fff]">
                    Dividido nos programas PRIMEIROS PASSOS, direcionado ao
                    ensino fundamental com alfabetização de crianças para formar
                    pequenos cidadãos; SEMPRE É TEMPO voltado para jovens e
                    adultos não alfabetizados; e o MINHA PROFISSÃO que almeja a
                    qualificação por meio de cursos profissionalizantes nos mais
                    variados temas como: técnicos em manutenção, auxiliar
                    financeiro, RH, carpintaria, mecânica, entre outros.
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-l-4 border-primary-light-green-500 my-5 ">
                <div className="pl-6">
                  <p className="font-semibold text-[18px] text-[#fff]">
                    Programa Guapi é 10
                  </p>
                  <p className="font-normal text-[14px] text-[#fff]">
                    Programa de transparência e responsabilidade social
                    empresarial (SER), corporativa (RSC), ambiental (RSA) e
                    individual (RSI).
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-l-4 border-primary-light-green-500 my-5  ">
                <div className="pl-6">
                  <p className="font-semibold text-[18px] text-[#fff]">
                    Programa Guapi Inclui
                  </p>
                  <p className="font-normal text-[14px] text-[#fff]">
                    Série de ações permanentes para auxílio e fortalecimento da
                    comunidade com ampliação da distribuição de cestas básicas,
                    patrocínio de atletas e eventos esportivos, eventos
                    culturais e outros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col container mx-auto max-md:px-6 lg:px-24 mb-16">
          <CurriculoCard />
        </div>
      </div>
    </Suspense>
  );
}
