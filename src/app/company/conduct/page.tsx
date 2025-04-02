"use client";

import TitleList from "@/components/titleList";
import { InputForm } from "@/app/talk-to-us/inputForm";
import { Search } from "lucide-react";
import { useState, useEffect, useRef, Suspense } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { conduct, textFooter } from "@/constants/conduct";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import Loading from "@/app/loading";

export default function Conditions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredTerms, setFilteredTerms] = useState(conduct);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filtra os termos com base na pesquisa
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTerms(conduct);
    } else {
      const filtered = conduct.filter((term) =>
        term.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTerms(filtered);
    }
  }, [searchQuery]);

  // Inicializa os refs com base no número de termos filtrados
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, filteredTerms.length);
  }, [filteredTerms]);

  // Configura o Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              const termIndex = id.split("-")[1];
              setSelectedTag(filteredTerms[parseInt(termIndex)].title);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -50% 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredTerms]);

  const handleTagClick = (title: string) => {
    setSelectedTag(title);
    const index = filteredTerms.findIndex((term) => term.title === title);
    if (index !== -1 && sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Suspense fallback={<Loading />}>
      <section className="lg:container lg:mx-auto lg:px-24 max-lg:px-6">
        <div className="py-6  container mx-auto max-md:px-6 lg:pt-6">
          <DynamicBreadcrumb />
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 xl:gap-16">
          {/* Sidebar - Sumário (fixo) */}
          <div className="md:w-1/4 mb-8 md:mb-0 md:sticky md:top-20 md:self-start md:h-[calc(100vh-80px)] md:overflow-y-auto">
            <div className="relative mb-8">
              <div className="relative">
                <InputForm
                  name="search"
                  icon={Search}
                  label={""}
                  placeholder={"Faça sua busca..."}
                  blog
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              <h2 className="font-bold text-xl border-l-4 border-l-primary-brand-800 text-primary-black-700 ps-2 mt-4">
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
                    {filteredTerms.map((term) => (
                      <SelectItem key={term.title} value={term.title}>
                        {term.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Lista de itens do sumário */}
              <ul className="mt-4 hidden md:block">
                {filteredTerms.length > 0 ? (
                  filteredTerms.map((term) => (
                    <li
                      key={term.title}
                      className={`relative text-sm px-4 py-2 transition-all duration-700 ease-in-out cursor-pointer ${
                        selectedTag === term.title
                          ? "text-primary-brand-800 font-bold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-green-600"
                          : "font-normal hover:text-primary-brand-800"
                      }`}
                      onClick={() => handleTagClick(term.title)}
                    >
                      {term.title}
                    </li>
                  ))
                ) : (
                  <li className="text-sm px-4 py-2 text-primary-black-500">
                    Nenhum resultado encontrado
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="md:w-3/4">
            <h2 className="font-bold text-2xl text-primary-brand-800 capitalize">
              Código De Conduta
            </h2>

            <div ref={contentRef}>
              {filteredTerms.map((term, index) => (
                <div
                  key={index}
                  ref={(el: HTMLDivElement | null) => {
                    sectionRefs.current[index] = el;
                  }}
                  id={`section-${index}`}
                  className="scroll-mt-20"
                >
                  <div className=" pt-4">
                    <TitleList
                      title={term.title}
                      text={term.text}
                      text2={term.text2}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-normal text-xs text-primary-black-400 py-4 border-t mt-4">
                {textFooter}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
