"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";
import notFoundImage from "../../public/404.svg";
import { useLoader } from "@/context/LoaderProvider";

export default function NotFound() {
  const router = useRouter();
  const { loading } = useLoader();

  return (
    <>
      {!loading ? (
        <div className="p-20 flex flex-col items-center justify-center text-center bg-[#ffffff] text-primary-brand-800 ">
          <Image src={notFoundImage} width={300} height={300} alt="not found" />
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-lg mb-6">Página não encontrada</p>
          <Button
            text="  Voltar pra home"
            onClick={() => router.push("/")}
          ></Button>
        </div>
      ) : null}
    </>
  );
}
