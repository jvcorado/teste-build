"use client";

import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { blogPosts } from "@/const/blog";
import useFilter from "@/hooks/useFilter";

import { RefObject, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import ShareButtons from "@/components/shareButton";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { InputForm } from "@/app/talk-to-us/inputForm";
import { Search } from "lucide-react";
import nextDynamic from "next/dynamic";
import Loading from "@/app/loading";

const ConteudoDynamic = nextDynamic(() => import("./conteudo"), {
  ssr: false,
});

export default function Post() {
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const data = blogPosts.find((post) => post.id === Number(postId));
  const [searchQuery, setSearchQuery] = useState("");

  // Hook que gerencia filtro, scroll e seleção
  const { filteredTags, selectedTag, contentRef, tagRefs, handleTagClick } =
    useFilter(data?.tags || []);

  if (!data) return <div>Post não encontrado</div>;

  // Função para filtrar tags baseadas na pesquisa
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Filtra as tags pelo texto da pesquisa
  const searchedTags = filteredTags.filter((tag) =>
    tag.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col">
        <div className="flex flex-1 w-full h-56 md:h-72 xl:h-80">
          <Image
            src={data.img}
            alt="Imagem de logística reversa"
            width={1000}
            height={320}
            className="object-cover min-h-[320px] max-h-[320px] w-full"
          />
        </div>

        <section className="flex flex-col gap-6 pb-14 pt-8 container mx-auto max-md:px-6 lg:px-24 md:pt-6 relative ">
          <DynamicBreadcrumb />
          <div className="md:sticky md:top-0 md:right-0 z-50 flex flex-col-reverse gap-4 items-end md:flex-row md:items-center justify-between mb-3 ">
            <div className="w-full  md:w-[30%]">
              <InputForm
                name={searchQuery}
                icon={Search}
                label={""}
                placeholder={"Faça sua busca..."}
                blog
                onChange={handleInputChange}
                value={searchQuery}
              />
            </div>

            <div className=" flex flex-col gap-2">
              <h2 className="font-bold text-end text-xl border-r-4 border-r-primary-brand-800 text-primary-black-700 pe-2 mb-3">
                Compartilhe
              </h2>

              <ShareButtons
                postUrl={`https://ts-next-lp.vercel.app/blog/post?id=${postId}`}
                postTitle={data.title}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:gap-4 xl:gap-16 ">
            {/* Componente de Filtro (lateral) */}

            <div className="md:flex md:flex-1 flex-col md:max-w-[400px] md:h-[60vh] pb-6 md:pb-16">
              <h2 className="font-bold text-xl border-l-4 border-l-primary-brand-800 text-primary-black-700 ps-2 ">
                Sumário
              </h2>

              {/* Select para mobile */}
              <div className="md:hidden mt-3">
                <Select
                  onValueChange={handleTagClick}
                  value={selectedTag ?? undefined}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma seção" />
                  </SelectTrigger>
                  <SelectContent>
                    {searchedTags.map((tag) => (
                      <SelectItem key={tag.title} value={tag.title}>
                        {tag.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:hidden block">
                <ConteudoDynamic
                  filteredTags={filteredTags}
                  selectedTag={selectedTag}
                  contentRef={contentRef as RefObject<HTMLDivElement>}
                  tagRefs={tagRefs}
                />
              </div>

              {/* Lista para desktop - agora usando searchedTags */}
              <ul className="ms-2 hidden md:block">
                {searchedTags.length > 0 ? (
                  searchedTags.map((tag) => (
                    <li
                      key={tag.title}
                      className={`relative text-sm px-4 py-2 transition-all duration-700 ease-in-out cursor-pointer ${
                        selectedTag === tag.title
                          ? "text-primary-brand-800 font-bold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-green-600"
                          : "font-normal"
                      }`}
                      onClick={() => handleTagClick(tag.title)}
                    >
                      {tag.title}
                    </li>
                  ))
                ) : (
                  <li className="text-sm px-4 py-2 text-primary-black-400">
                    Nenhum resultado encontrado
                  </li>
                )}
              </ul>

              {/* Restante do código permanece igual */}
              <div className="mt-8 flex flex-col gap-3">
                <h2 className="font-bold text-xl border-l-4 border-l-primary-brand-800 text-primary-black-700 ps-2">
                  Outros Artigos
                </h2>

                {blogPosts
                  .filter((item) => item.id !== Number(postId))
                  .map((post) => (
                    <Link
                      href={`/blog/post?id=${post.id}`}
                      key={post.id}
                      className="border p-3 rounded-xl"
                    >
                      <p className="text-base text-primary-black-700">
                        <strong className="font-bold">{post.title}</strong>
                      </p>

                      <div className="mt-2">
                        <p className="text-xs text-primary-black-700">
                          {post.excerpt}
                        </p>
                      </div>
                      <p className="text-primary-black-300 text-xs px-2 mt-2">
                        {post.date}
                      </p>
                    </Link>
                  ))}
              </div>

              <div className="border p-3 rounded-xl mt-8">
                <p className="text-base text-primary-black-700">
                  <strong className="font-bold">
                    Inscreva-se no nosso newsletter
                  </strong>{" "}
                  para conhecer todos nossos artigos sobre sustentabilidade e
                  inovação.
                </p>

                <div className="flex items-center gap-2 mb-2 my-2">
                  <Input
                    placeholder="Digite seu E-mail"
                    className="border bg-primary-black-100 px-2 py-3 h-10 text-primary-black-400 rounded-lg"
                  />
                  <button className="border-primary-brand-800 text-white bg-primary-brand-800 px-2 py-3 text-xs rounded-lg h-10 w-28">
                    Inscreva-se
                  </button>
                </div>

                <div>
                  <p className="text-xs text-primary-black-700">
                    Eu aceito receber comunicações por e-mail sobre novidades e
                    atualizações.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <ConteudoDynamic
                filteredTags={filteredTags}
                selectedTag={selectedTag}
                contentRef={contentRef as RefObject<HTMLDivElement>}
                tagRefs={tagRefs}
              />
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
}
