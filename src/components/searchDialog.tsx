"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import Link from "next/link";

// Definição do tipo para os itens de busca
type SearchItem = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

const mockSearchData: SearchItem[] = [
  {
    id: "1",
    title: "Papel Kraft",
    description: "Papel ecológico ideal para embalagens sustentáveis.",
    link: "/produtos",
    tags: [
      "papel",
      "kraft",
      "embalagem",
      "sustentável",
      "ecológico",
      "reciclado",
      "Papel Kraft Reciclado",
    ],
  },
  {
    id: "2",
    title: "Papel White",
    description: "Papel branco premium para diversas aplicações.",
    link: "/produtos",
    tags: ["papel", "white", "branco", "premium", "qualidade", "wtl"],
  },
  {
    id: "3",
    title: "Papel Cervejeiro",
    description: "Papel especial para rótulos de cervejas e bebidas.",
    link: "/produtos",
    tags: ["papel", "cervejeiro", "rótulos", "bebidas"],
  },
  {
    id: "4",
    title: "Papel para Frigorífico",
    description: "Papel resistente para uso em frigoríficos e alimentos.",
    link: "/produtos",
    tags: ["papel", "frigorífico", "alimentício", "embalagem", "resistência"],
  },
  {
    id: "5",
    title: "Bobinas de Papel",
    description: "Bobinas para diferentes tipos de impressão e uso industrial.",
    link: "/produtos",
    tags: ["papel", "bobinas", "impressão", "industrial"],
  },
  {
    id: "6",
    title: "Linha Uni",
    description: "Linha de papéis com características únicas e especiais.",
    link: "/produtos",
    tags: ["papel", "uni", "linha", "especial"],
  },
  {
    id: "7",
    title: "Linha Duo",
    description: "Linha de papéis com dupla face e maior resistência.",
    link: "/produtos",
    tags: ["papel", "duo", "resistência", "dupla face", "duo size"],
  },
  {
    id: "8",
    title: "Linha Carton",
    description: "Linha de papéis voltados para cartonagem e embalagens.",
    link: "/produtos",
    tags: ["papel", "carton", "cartonagem", "embalagem"],
  },
  {
    id: "9",
    title: "Gramatura 90g",
    description: "Papel com gramatura de 90g, ideal para diversas aplicações.",
    link: "/produtos",
    tags: ["papel", "gramatura", "90g", "resistência"],
  },
  {
    id: "10",
    title: "Gramatura 110g",
    description:
      "Papel com gramatura de 110g, perfeito para impressões de qualidade.",
    link: "/produtos",
    tags: ["papel", "gramatura", "110g", "qualidade"],
  },
  {
    id: "11",
    title: "Gramatura 120g",
    description:
      "Papel de 120g para aplicações específicas e maior resistência.",
    link: "/produtos",
    tags: ["papel", "gramatura", "120g", "resistência"],
  },
  {
    id: "12",
    title: "Gramatura 200g",
    description: "Papel com 200g, indicado para projetos robustos.",
    link: "/produtos",
    tags: ["papel", "gramatura", "200g", "projetos robustos"],
  },
  {
    id: "13",
    title: "Cobb 50",
    description: "Papel com absorção controlada para aplicações específicas.",
    link: "/produtos",
    tags: ["papel", "cobb", "50", "absorção"],
  },
  {
    id: "14",
    title: "Cobb 30",
    description: "Papel com menor absorção de umidade, ideal para embalagens.",
    link: "/produtos",
    tags: ["papel", "cobb", "30", "umidade", "embalagem"],
  },
  {
    id: "15",
    title: "Sustentabilidade",
    description: "Conheça nossas iniciativas de sustentabilidade ambiental.",
    link: "/sustainability",
    tags: [
      "meio ambiente",
      "sustentabilidade",
      "ecologia",
      "logística reversa",
      "100% reciclado",
      "50% reciclado",
    ],
  },
  {
    id: "16",
    title: "Trabalhe Conosco",
    description: "Venha fazer parte do time Guapi Papéis.",
    link: "/work-us",
    tags: ["carreira", "emprego", "vagas"],
  },
  {
    id: "17",
    title: "Papelão Ondulado",
    description: "Descubra a resistência do papelão ondulado para embalagens.",
    link: "/produtos",
    tags: ["papelão ondulado", "embalagem", "resistência", "Papel Ondulado"],
  },
  {
    id: "18",
    title: "Miolo Size",
    description: "Papel miolo size para aplicações específicas.",
    link: "/produtos",
    tags: ["papel", "miolo", "size", "miolo size"],
  },
  {
    id: "19",
    title: "Orçamentos",
    description: "Solicite um orçamento personalizado para suas necessidades.",
    link: "/produtos",
    tags: ["orçamento", "cotação", "comprar"],
  },
  {
    id: "20",
    title: "Ocorrências",
    description: "Registre uma ocorrência e receba suporte especializado.",
    link: "/produtos",
    tags: ["suporte", "problema", "reclamação", "atendimento"],
  },
  {
    id: "21",
    title: "Papel Kraft",
    description: "Papel ecológico ideal para embalagens sustentáveis.",
    link: "/produtos",
    tags: ["papel", "kraft", "embalagem", "sustentável", "ecológico"],
  },
  {
    id: "22",
    title: "Papel White",
    description: "Papel branco premium para diversas aplicações.",
    link: "/produtos",
    tags: ["papel", "white", "branco", "premium", "qualidade"],
  },
  {
    id: "23",
    title: "Papel Cervejeiro",
    description: "Papel especial para rótulos de cervejas e bebidas.",
    link: "/produtos",
    tags: ["papel", "cervejeiro", "rótulos", "bebidas"],
  },
  {
    id: "24",
    title: "Papel para Frigorífico",
    description: "Papel resistente para uso em frigoríficos e alimentos.",
    link: "/produtos",
    tags: ["papel", "frigorífico", "alimentício", "embalagem"],
  },
  {
    id: "25",
    title: "Bobinas de Papel",
    description: "Bobinas para diferentes tipos de impressão e uso industrial.",
    link: "/produtos",
    tags: ["papel", "bobinas", "impressão", "industrial"],
  },
  {
    id: "26",
    title: "Linha Uni",
    description: "Linha de papéis com características únicas e especiais.",
    link: "/produtos",
    tags: ["papel", "uni", "linha", "especial"],
  },
  {
    id: "27",
    title: "Linha Duo",
    description: "Linha de papéis com dupla face e maior resistência.",
    link: "/produtos",
    tags: ["papel", "duo", "resistência", "dupla face"],
  },
  {
    id: "28",
    title: "Linha Carton",
    description: "Linha de papéis voltados para cartonagem e embalagens.",
    link: "/produtos",
    tags: ["papel", "carton", "cartonagem", "embalagem"],
  },
  {
    id: "29",
    title: "Gramatura 90g",
    description: "Papel com gramatura de 90g, ideal para diversas aplicações.",
    link: "/produtos",
    tags: ["papel", "gramatura", "90g", "resistência"],
  },
  {
    id: "30",
    title: "Gramatura 110g",
    description:
      "Papel com gramatura de 110g, perfeito para impressões de qualidade.",
    link: "/produtos",
    tags: ["papel", "gramatura", "110g", "qualidade"],
  },
  {
    id: "31",
    title: "Gramatura 120g",
    description:
      "Papel de 120g para aplicações específicas e maior resistência.",
    link: "/produtos",
    tags: ["papel", "gramatura", "120g", "resistência"],
  },
  {
    id: "32",
    title: "Gramatura 200g",
    description: "Papel com 200g, indicado para projetos robustos.",
    link: "/produtos",
    tags: ["papel", "gramatura", "200g", "projetos robustos"],
  },
  {
    id: "33",
    title: "Cobb 50",
    description: "Papel com absorção controlada para aplicações específicas.",
    link: "/produtos",
    tags: ["papel", "cobb", "50", "absorção"],
  },
  {
    id: "34",
    title: "Cobb 30",
    description: "Papel com menor absorção de umidade, ideal para embalagens.",
    link: "/produtos",
    tags: ["papel", "cobb", "30", "umidade", "embalagem"],
  },
  {
    id: "35",
    title: "Sustentabilidade",
    description: "Conheça nossas iniciativas de sustentabilidade ambiental.",
    link: "/sustainability",
    tags: ["meio ambiente", "sustentabilidade", "ecologia"],
  },
  {
    id: "36",
    title: "Trabalhe Conosco",
    description: "Venha fazer parte do time Guapi Papéis.",
    link: "/work-us",
    tags: ["carreira", "emprego", "vagas"],
  },
  {
    id: "37",
    title: "Contato",
    description: "Entre em contato com nossa equipe.",
    link: "/talk-to-us",
    tags: ["fale conosco", "contato", "suporte"],
  },
  {
    id: "38",
    title: "Sou Cliente",
    description: "Acesse seu portal exclusivo para clientes da Guapi Papéis.",
    link: "/clients",
    tags: ["cliente", "meus pedidos", "portal do cliente"],
  },
  {
    id: "39",
    title: "Quero ser Cliente",
    description: "Cadastre-se e torne-se nosso cliente.",
    link: "/become-client",
    tags: ["novo cliente", "cadastro", "comprar"],
  },
  {
    id: "20",
    title: "Sou Fornecedor",
    description: "Acesse seu portal de fornecedor e acompanhe suas entregas.",
    link: "/suppliers",
    tags: ["fornecedor", "entregas", "portal do fornecedor"],
  },
  {
    id: "40",
    title: "Quero ser Fornecedor",
    description: "Cadastre-se para se tornar um fornecedor da Guapi Papéis.",
    link: "/become-supplier",
    tags: ["novo fornecedor", "cadastro", "fornecimento"],
  },
  {
    id: "41",
    title: "Sou Representante",
    description: "Área exclusiva para representantes comerciais.",
    link: "/representatives",
    tags: ["representante", "vendas", "comercial"],
  },
  {
    id: "42",
    title: "Orçamentos",
    description: "Solicite um orçamento personalizado para suas necessidades.",
    link: "/quotes",
    tags: ["orçamento", "cotação", "comprar"],
  },
  {
    id: "43",
    title: "Ocorrências",
    description: "Registre uma ocorrência e receba suporte especializado.",
    link: "/occurrences",
    tags: ["suporte", "problema", "reclamação", "atendimento"],
  },
  {
    id: "44",
    title: "Separador",
    description: "Carton Separador REC",
    link: "/occurrences",
    tags: ["Rec", "reciclado", "separador", "carton", "frigorífico"],
  },
  {
    id: "45",
    title: "Tubete",
    description: "Carton Tubete REC",
    link: "/occurrences",
    tags: ["Rec", "reciclado", "Tubete", "carton"],
  },
  {
    id: "46",
    title: "Tubete HIG",
    description: "Carton Tubete HIG",
    link: "/occurrences",
    tags: ["Rec", "reciclado", "separador", "carton", "higiênico"],
  },
  {
    id: "47",
    title: "Duo Size White EX",
    description: "Duo Size White EX",
    link: "/occurrences",
    tags: ["Exportação", "exportar", "wtl", "white", "branco", "duo size"],
  },
  {
    id: "48",
    title: "Duo Kraft",
    description: "Duo Size KFT EX",
    link: "/occurrences",
    tags: ["kraft", "duo size", "exportação", "duo", "miolo"],
  },
  {
    id: "49",
    title: "Duo Size EX",
    description: "Duo Size REC EX",
    link: "/occurrences",
    tags: ["Exportação", "reciclado", "wtl", "miolo", "duo size"],
  },
  {
    id: "50",
    title: "Uni Size",
    description: "Uni Size NE",
    link: "/occurrences",
    tags: ["uni", "uni size", "ne", "miolo", "miolo size", "size", "reciclado"],
  },
  {
    id: "51",
    title: "Uni Comum",
    description: "Uni Comum NE",
    link: "/occurrences",
    tags: ["comum", "uni comum", "ne", "miolo", "reciclado"],
  },
  {
    id: "52",
    title: "RU 30",
    description: "Uni Size RU 30",
    link: "/occurrences",
    tags: [
      "uni",
      "uni size",
      "ne",
      "miolo",
      "miolo size",
      "size",
      "reciclado",
      "Reciclado",
      "30",
      "RU",
    ],
  },
  {
    id: "53",
    title: "Uni ES",
    description: "Uni Size ES",
    link: "/occurrences",
    tags: [
      "Exportação",
      "exportar",
      "uni",
      "uni size",
      "ne",
      "miolo",
      "miolo size",
      "size",
      "reciclado",
      "Reciclado",
      "30",
      "50",
    ],
  },
];

export default function SearchDialog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
      setIsOpen(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredResults(results);
    setIsOpen(results.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const highlightMatches = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={index}
          className="bg-primary-light-green-100 px-1 rounded-md text-primary-brand-900 "
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
    setFilteredResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative flex-grow max-w-xl mx-4" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => {
            setIsFocus(true);
            if (searchQuery) setIsOpen(true);
          }}
          onBlur={() => setIsFocus(false)}
          className={`w-full h-[48px] rounded-full border border-primary-brand-700 
          ${
            isFocus || searchQuery
              ? "bg-white placeholder-gray-800 text-gray-800"
              : "bg-primary-brand-800 placeholder-white/70 text-white"
          } 
          py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors duration-200`}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={handleClear}
        >
          {searchQuery ? (
            <X
              className={`h-5 w-5 ${
                isFocus || searchQuery ? "text-gray-800" : "text-white"
              }`}
            />
          ) : (
            <Search
              className={`h-5 w-5 ${isFocus ? "text-gray-800" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Dropdown de resultados */}
      {isOpen && filteredResults.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-lg bg-white shadow-lg overflow-hidden border border-gray-200">
          <div className="max-h-96 overflow-y-auto">
            {filteredResults.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                <h3 className="font-semibold text-lg text-primary-brand-900">
                  {highlightMatches(item.title, searchQuery)}
                </h3>
                <p className="text-primary-black-950 mt-1 text-sm">
                  {highlightMatches(item.description, searchQuery)}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-primary-black-950"
                    >
                      {highlightMatches(tag, searchQuery)}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mensagem quando não há resultados */}
      {searchQuery && filteredResults.length === 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-lg bg-white shadow-lg p-4 border border-gray-200">
          <p className="text-primary-black-950 text-center">
            Nenhum resultado encontrado para{" "}
            <span className="text-primary-brand-9">
              &quot;{searchQuery}&quot;
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
