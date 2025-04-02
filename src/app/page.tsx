"use client";

import Button from "@/components/button";
import Hero from "@/components/hero/hero";
import Title from "@/components/title";
import Image from "next/image";
import Maquina from "../../public/somos-guapi.svg";
import Current from "../../public/current.svg";
import Cards from "@/components/card";
import ListCards from "@/components/list-cards";
import CurriculoCard from "@/components/curriculo-card";
import { aboutUs, cards, current, development, tomorrow } from "@/const/home";
import { blogPosts } from "@/const/blog";
import { useRouter } from "next/navigation";
import futurosProjetos from "../../public/animations/futuros-projetos.json";
import guapiEnsina from "../../public/animations/guapi-ensina.json";
import jeitoGuapi from "../../public/animations/jeito-guapi.json";
import responsabilidadeSocial from "../../public/animations/responsabilidade-social.json";
import uniao from "../../public/animations/união.json";
import AnimatedCounter from "@/components/numberAnimation";
import { useRef } from "react";
import CarouselHome from "@/components/carousel-home";

export default function Home() {
  const lottieRef1 = useRef(null);
  const lottieRef2 = useRef(null);
  const lottieRef3 = useRef(null);
  const lottieRef4 = useRef(null);
  const lottieRef5 = useRef(null);

  const socialProjects = [
    {
      title: "União em tempos difíceis",
      ref: lottieRef1,
      animation: uniao, // Ícone representando capacitaço
      description:
        "A pandemia da Covid-19 trouxe desafios significativos para a sociedade, e a GUAPI PAPÉIS® reforçou seu compromisso com ações de apoio e inclusão social para minimizar os impactos desse período.",
    },
    {
      title: "Futuros projetos, novos horizontes",
      ref: lottieRef2,
      animation: futurosProjetos, // Ícone representando educação
      description:
        "Nossa equipe, do operacional à gestão, trabalha continuamente para desenvolver iniciativas inovadoras que ampliam o impacto da reciclagem e fortalecem a sustentabilidade.",
    },
    {
      title: "Programa Jeito Guapi de Ser",
      ref: lottieRef3,
      animation: jeitoGuapi, // Ícone representando união/soldariedade
      description:
        "Investimos no futuro! O Programa oferece capacitação e oportunidades para jovens ingressarem no mercado de trabalho, contribuindo para sua formação profissional e social.",
    },
    {
      title: "Projeto Guapi Ensina",
      ref: lottieRef4,
      animation: guapiEnsina, // Ícone representando reciclage
      description:
        "Acreditamos que a educação é a base para a transformação social. Por isso, o Projeto Guapi Ensina inclui programas como Primeiros Passos, voltados para o ensino fundamental, incentivando o conhecimento e o desenvolvimento de novas gerações.",
    },
    {
      title: "Responsabilidade Social",
      ref: lottieRef5,
      animation: responsabilidadeSocial, // Ícone representando reciclage
      description:
        "Com quase 10 anos de atuação, a GUAPI PAPÉIS® promove ações que beneficiam comunidades, fortalecem a economia circular e impulsionam um futuro mais sustentável para todos.",
    },
  ];

  const router = useRouter();

  return (
    <div className="flex flex-col lg:relative !overflow-x-hidden">
      <Hero />

      <div className="container mx-auto max-md:px-6 lg:px-24">
        {/* ABOUT US */}
        <section className="py-12 lg:py-48  flex flex-col md:flex-row items-center justify-between gap-14">
          <Image
            data-aos="fade-right"
            src={Maquina}
            width={859}
            height={565}
            alt="machine"
            className="hidden lg:block lg:flex-1 lg:absolute lg:left-0 lg:py-20"
          />
          <div className="flex-1 flex lg:items-end lg:justify-end flex-col">
            <div
              data-aos="fade-left"
              className=""
              onClick={() => router.push(`/company`)}
            >
              {aboutUs.map((item) => (
                <Title
                  key={item.id}
                  subTitle="Somos a Guapi Papéis"
                  title={item.title}
                  text={item.description}
                />
              ))}

              <Button text="Saiba Mais" cn="mt-10 bg-white" />
            </div>
          </div>
        </section>

        {/* Development */}
        <section className="flex flex-col items-center justify-center gap-10  w-full">
          {development.map((item) => (
            <Title
              cnTitle="text-center text-xl md:text-[34px]"
              key={item.id}
              title={item.title}
            />
          ))}

          <div className="flex flex-col md:flex-row gap-8  w-full items-center justify-center ">
            {cards.map((item) => (
              <Cards
                key={item.id}
                text={item.text}
                img={item.img}
                link={`/produtos/product/?item=${item.key}`}
                onClick={() =>
                  router.push(`/produtos/product/?item=${item.key}`)
                }
              />
            ))}
          </div>
        </section>

        {/* Current */}
        <section className="py-12 lg:py-48 flex  items-center justify-between gap-14 ">
          <div className="flex-1 flex items-start justify-start flex-col ">
            <div data-aos="fade-left" className="flex flex-col gap-4 ">
              {current.map((item) => (
                <Title key={item.id} title={item.title} />
              ))}

              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex gap-8">
                  <div>
                    <p className="text-primary-brand-800 text-5xl font-semibold">
                      <AnimatedCounter target={10} duration={1.5} />
                    </p>
                    <p className="text-primary-brand-800 text-lg font-semibold leading-5">
                      Anos de <br /> experiência
                    </p>
                  </div>
                  <div>
                    <p className="text-primary-brand-800 text-5xl font-semibold">
                      <AnimatedCounter target={200} duration={2} />
                    </p>
                    <p className="text-primary-brand-800 text-lg font-semibold leading-5">
                      Colaboradores <br /> diretos
                    </p>
                  </div>

                  <div className="hidden lg:block">
                    <p className="text-primary-brand-800 text-5xl font-semibold">
                      <AnimatedCounter
                        target={17}
                        suffix=" Milhões"
                        duration={2.5}
                      />
                    </p>
                    <p className="text-primary-brand-800 text-lg font-semibold leading-5">
                      de Árvores poupadas
                    </p>
                  </div>
                </div>

                <div className="lg:hidden block">
                  <p className="text-primary-brand-800 text-5xl font-semibold">
                    <AnimatedCounter
                      target={17}
                      suffix=" Milhões"
                      duration={2.5}
                    />
                  </p>
                  <p className="text-primary-brand-800 text-lg font-semibold leading-5">
                    de Árvores poupadas
                  </p>
                </div>
              </div>

              <h2 className="text-primary-black-950 font-semibold text-lg md:text-2xl ">
                Tecnologia e sustentabilidade que se somam
              </h2>
              <p className="text-primary-black-700 text-sm ">
                Sabemos, no entanto, que para ser realmente grande há que se ter
                plena <br /> consciência e total responsabilidade. E
                demonstramos diariamente – na <br /> prática – nosso compromisso
                sólido com a sustentabilidade, visando assegurar <br /> um
                futuro promissor para o nosso planeta e para as próximas
                gerações
              </p>

              <div
                className="mt-6"
                onClick={() => router.push("/sustainability")}
              >
                <Button text="Entenda mais" />
              </div>
            </div>
          </div>
          <Image
            src={Current}
            width={859}
            height={504}
            alt="current"
            data-aos="fade-up-left"
            className="hidden lg:block lg:flex-1 lg:absolute lg:right-0 lg:my-20 "
          />
          <Image
            src={Current}
            width={494}
            height={260}
            alt="current"
            className="hidden md:block md:flex-1  md:absolute md:-top-5 md:right-0 md:my-20 lg:hidden"
          />
        </section>
      </div>

      {/* Tomorrow */}
      <section
        className="bg-cover py-12 md:py-[88px]"
        style={{ backgroundImage: "url('/responsibility.svg')" }}
      >
        <div className="lg:container lg:mx-auto lg:px-24 flex flex-col w-full max-lg:gap-10 max-lg:px-6 lg:flex-row">
          <div className="flex flex-col gap-6 lg:gap-14 flex-1">
            {tomorrow.map((item) => (
              <Title
                subTitleCn="!text-white"
                cnTitle="!text-white "
                key={item.id}
                subTitle={item.subTitle}
                title={item.title}
              />
            ))}

            <p className="text-white text-sm max-md:font-normal md:text-base ">
              É impossível dissociar o papel de uma indústria recicladora, como
              a <br />
              GUAPI PAPÉIS®, dos coletores que são verdadeiros agentes <br />
              socioambientais indispensáveis à sociedade.
            </p>

            <p className="text-white text-sm max-md:font-normal md:text-base ">
              Além de retirar o seu sustento por meio desta atividade, os <br />
              catadores contribuem para a redução dos resíduos nos aterros{" "}
              <br />
              sanitários e contribuem para suprir com matéria-prima as fábricas
              de
              <br />
              papéis reciclados.
            </p>
            <p className="text-white text-sm max-md:font-normal md:text-base ">
              Juntos, reciclamos o presente para transformar o futuro.
            </p>

            <div
              className="hidden lg:block "
              onClick={() => router.push("/social-responsibility")}
            >
              <Button text="Saiba mais" color="secondary" />
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1 ">
            {socialProjects.map((item) => (
              <ListCards
                key={item.title}
                animation={item.animation}
                /*   animationRef={item.ref} */
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="lg:hidden block">
            <Button text="Saiba mais" color="secondary" />
          </div>
        </div>
      </section>

      {/* Curriculo */}
      <section className=" lg:container lg:mx-auto lg:px-24 py-12 max-lg:mx-6 lg:py-[88px]">
        <CurriculoCard />
      </section>

      {/* Blog */}
      <section className=" max-md:px-6 lg:px-24 md:container md:mx-auto max-md:pb-12 md:pb-[88px] flex flex-col gap-4 md:gap-8">
        <h1 className="text-4xl text-primary-black-950 font-semibold text-center">
          Guapi Blog
        </h1>
        <div>
          {/* Mostrar Carousel apenas em telas pequenas (sm) */}
          <div className="block md:hidden">
            <CarouselHome />
          </div>

          {/* Mostrar Cards apenas em telas médias (md) para cima */}
          <div className="hidden md:flex flex-col flex-wrap md:flex-row gap-12 items-start justify-between">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Cards
                key={index}
                blog
                img={post.img}
                data_blog={post.date}
                title_blog={post.title}
                data_blog_text={post.dateText}
                text={post.excerpt}
                link={`/blog/post/?id=${post.id}`}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={() => router.push("/blog")}
          color="primary"
          text="Veja mais artigos"
          cn="md:!w-[251px] mx-auto"
        />
      </section>
    </div>
  );
}
