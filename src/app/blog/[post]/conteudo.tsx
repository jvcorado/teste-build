"use client";

import Loading from "@/app/loading";
import parse from "html-react-parser";
import { RefObject, Suspense } from "react";

interface ConteudoProps {
  filteredTags: { title: string; text: string }[];
  selectedTag: string | null;
  contentRef: RefObject<HTMLDivElement>;
  tagRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}

export default function Conteudo({
  filteredTags,
  selectedTag,
  contentRef,
  tagRefs,
}: ConteudoProps) {
  const parseJSXString = (jsxString: string) => {
    try {
      return parse(jsxString.replace(/^\(\s*/, "").replace(/\s*\)$/, ""));
    } catch (error) {
      console.error("Error parsing JSX:", error);
      return null;
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        ref={contentRef as RefObject<HTMLDivElement>}
        className="flex flex-1 lg:pl-32 flex-col gap-8  min-h-screen overflow-y-auto max-h-screen scroll-transparent"
      >
        {filteredTags.length > 0 ? (
          filteredTags.map((tag) => (
            <div
              key={tag.title}
              ref={(el) => {
                tagRefs.current[tag.title] = el;
              }}
              data-tag-title={tag.title}
              className={`${
                selectedTag === tag.title
                  ? "border-primary-brand-800"
                  : "border-transparent"
              }`}
            >
              <div
                className={`font-bold text-2xl capitalize pb-4 ${
                  selectedTag === tag.title
                    ? "text-primary-brand-800"
                    : "text-primary-black-950"
                }`}
              >
                {parseJSXString(tag.title)}
              </div>
              <div className="font-normal text-xs">
                {parseJSXString(tag.text)}
              </div>
            </div>
          ))
        ) : (
          <div className="pt-4 text-primary-black-500">
            Nenhum conteúdo encontrado.
          </div>
        )}
      </div>
    </Suspense>
  );
}
