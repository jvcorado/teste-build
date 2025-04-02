"use client";

import React, { useState } from "react";
import {
  DynamicTable,
  TableDataType,
} from "@/app/produtos/[product]/[details]/tableProducts";
import { CircleCheck, Download, Eye, Forward, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  carbonData,
  duoData,
  uniData,
  techSheetMock,
} from "@/constants/products";
import Image from "next/image";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { useSearchParams } from "next/navigation";

// Define the product type
type ProductData = {
  card: {
    text: string;
    img: string;
    imgheels: string;
    key: string;
  };
  info: {
    title: string;
    subTitle: string;
    description: string;
    subTitleList: string;
    list: Array<{ text: string }>;
    tableSpec?: {
      title: string;
      description: string;
      tableHeader: Array<{ head: string }>;
      tableHeader2: Array<{ head: string }>;
      tableSubHeader: Array<{ subHaed: string }>;
      tableData: TableDataType[];
    };
  };
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const details = searchParams.get("item");
  const [techSheetItem, setTechSheetItem] = useState<{
    PRODUTO: string;
    LINK: string;
  } | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  let productData: ProductData | undefined;

  // Find the product based on the key
  // eslint-disable-next-line prefer-const
  productData = [
    ...uniData.products,
    ...duoData.products,
    ...carbonData.products,
  ].find((item) => item.card.key === details);

  if (!productData) return <div>Produto não encontrado</div>;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleOpenModal = () => {
    try {
      if (!techSheetMock || !Array.isArray(techSheetMock)) {
        console.error("Dados técnicos não carregados corretamente");
        return;
      }

      const searchText = productData.card.text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const foundItem = techSheetMock.find((item) => {
        const itemText = item.PRODUTO.trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return itemText.includes(searchText) || searchText.includes(itemText);
      });

      if (!foundItem?.LINK) {
        console.error(
          "Ficha técnica não encontrada para:",
          productData.card.text
        );
        return;
      }

      setTechSheetItem(foundItem);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Erro ao buscar ficha técnica:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadTechnicalSheet = async () => {
    if (typeof window === "undefined") return;

    setIsDownloading(true); // Ativa o loading
    try {
      if (!techSheetMock || !Array.isArray(techSheetMock)) {
        console.error("Dados técnicos não carregados corretamente");
        return;
      }

      const searchText = productData.card.text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const techSheetItem = techSheetMock.find((item) => {
        const itemText = item.PRODUTO.trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return itemText.includes(searchText) || searchText.includes(itemText);
      });

      if (!techSheetItem?.LINK) {
        console.error(
          "Ficha técnica não encontrada para:",
          productData.card.text
        );
        console.log(
          "Itens disponíveis:",
          techSheetMock.map((item) => item.PRODUTO)
        );
        return;
      }

      const fileName = `${techSheetItem.PRODUTO.replace(/\s+/g, "_")}.pdf`;
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${techSheetItem.LINK.trim()}`;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro durante o download:", error);
    } finally {
      setTimeout(() => setIsDownloading(false), 3000);
    }
  };

  return (
    <>
      <div className="py-8 container mx-auto max-md:px-6 lg:px-24 ">
        <DynamicBreadcrumb />

        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 h-full">
          {/* Product Image com efeito de flip */}
          <div className="xl:mt-0 md:mt-64 mt-44 flex-1 relative w-full h-full perspective-1000">
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Frente do card */}
              <div
                className={`absolute w-full h-full backface-hidden flex items-center justify-center  ${
                  isFlipped ? "hidden" : ""
                }`}
              >
                <Image
                  width={600}
                  height={600}
                  src={`/linha/${productData.card.imgheels}`}
                  alt={productData.card.text}
                  className="max-md:mt-10 border rounded-2xl object-cover max-md:max-h-[310px] md:max-h-[481.81px] min-h-[340px] max-h-[340px] bg-[#FAFAFA] border-primary-black-200"
                />
              </div>

              {/* Verso do card */}
              <div
                className={`absolute w-full h-full  flex items-center justify-center backface-hidden rotate-y-180 ${
                  !isFlipped ? "hidden" : ""
                }`}
              >
                <Image
                  width={600}
                  height={600}
                  src={`/linha/${productData.card.img}`}
                  alt={productData.card.text}
                  className="max-md:mt-10 border rounded-2xl bg-[#FAFAFA] md:min-h-[481.81px] md:max-h-[481.81px] border-primary-black-200"
                />
              </div>
            </div>

            <button
              onClick={handleFlip}
              className="absolute 2xl:right-12 xl:right-5 lg:right-36  md:right-28 right-5 2xl:bottom-[-200px] xl:bottom-[-180px] bottom-[-170px] md:bottom-[-200px] p-2 z-50 rounded-2xl border border-primary-brand-800 bg-primary-brand-700"
            >
              {!isFlipped ? (
                <Forward
                  color="white"
                  className={`transition-transform duration-300 ${
                    isFlipped ? "rotate-180" : "rotate-0"
                  }`}
                />
              ) : (
                <Forward
                  color="white"
                  className={`transition-transform duration-300 ${
                    isFlipped ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </button>
          </div>

          {/* Product Information */}
          <div className="xl:mt-0 mt-40 flex-1 flex-col gap-4 pb-4 md:py-8">
            <h1 className="font-semibold text-6xl">
              {productData.card.text.toUpperCase()}
            </h1>

            <div>
              <h2 className="font-semibold text-xl text-primary-brand-800">
                {productData.info.title}
              </h2>
              <div className="border-dashed border-l border-primary-black-300 pl-3">
                <h3 className="font-semibold text-lg">
                  {productData.info.subTitle}
                </h3>
                <p className="font-normal text-md">
                  {productData.info.description}
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-primary-brand-800">
                {productData.info.subTitleList}
              </h2>
              {productData.info.list.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-1 border-dashed border-l border-primary-black-300 pl-3 pt-2"
                >
                  <CircleCheck className="flex-shrink-0 w-5 h-5 text-primary-brand-800 bg-primary-light-green-100 rounded-full mt-2" />
                  <p className="font-normal text-sm py-2">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              {techSheetMock.length > 0 && (
                <div className="flex md:hidden flex-1 flex-col md:flex-row gap-3 justify-end">
                  {techSheetMock.length > 0 && (
                    <Button
                      className="md:hidden w-full md:w-56 h-12 bg-primary-brand-700 font-normal text-base text-white rounded-2xl"
                      onClick={handleOpenModal}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Baixando...
                        </>
                      ) : (
                        <>
                          Visualizar Ficha Técnica
                          <Eye className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pb-8 xl:pb-11">
          <div className="pb-2 flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg text-primary-brand-800">
                Ficha Técnica
              </h2>
              <p className="font-normal text-xs">
                Confira as especificações técnicas detalhadas
              </p>
            </div>

            <div className="hidden md:flex flex-col md:flex-row gap-3 mt-2">
              {techSheetMock.length > 0 && (
                <div className="flex flex-1 flex-col md:flex-row gap-3 justify-end">
                  {techSheetMock.length > 0 && (
                    <Button
                      className="hidden md:flex md:w-56 h-12 bg-primary-brand-700 font-normal text-base text-white rounded-2xl"
                      onClick={handleDownloadTechnicalSheet}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Baixando...
                        </>
                      ) : (
                        <>
                          Baixar Ficha Técnica
                          <Download className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-full sticky overflow-x-auto">
            <DynamicTable
              headers={productData.info.tableSpec?.tableHeader || []}
              headers2={productData.info.tableSpec?.tableHeader2 || []}
              subHeaders={productData.info.tableSpec?.tableSubHeader ?? []}
              data={
                (productData.info.tableSpec?.tableData as TableDataType[]) || []
              }
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-xl font-semibold">Ficha Técnica:</h3>
                {techSheetItem &&
                techSheetItem.PRODUTO &&
                techSheetItem.PRODUTO.length > 22 ? (
                  <span className="text-xl font-semibold mt-1">
                    {techSheetItem.PRODUTO.toUpperCase().slice(22)}
                  </span>
                ) : (
                  <span className="text-xl font-semibold">
                    {techSheetItem?.PRODUTO || productData.info.title}
                  </span>
                )}
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="p-4 flex justify-center">
                <div className="relative w-full h-[80vh]">
                  {techSheetItem && (
                    <iframe
                      src={`https://drive.google.com/file/d/${techSheetItem.LINK}/preview`}
                      width="100%"
                      height="100%"
                      allow="autoplay"
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
