import Image from "next/image";
import CurriculoImg from "../../public/curriculo-img.svg";
import Button from "./button";

export default function CurriculoCard() {
  return (
    <div
      className="bg-cover md:h-[264px]  lg:h-[360px] rounded-2xl flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-[72px]"
      style={{ backgroundImage: "url('/responsibility.svg')" }}
    >
      <Image
        src={CurriculoImg}
        width={608}
        height={360}
        alt="image"
        className="md:hidden lg:block rounded-2xl"
      />

      <Image
        src={CurriculoImg}
        alt="image"
        className="hidden md:block w-full max-w-[50%] object-cover !h-full bg-cover lg:hidden rounded-2xl"
      />

      <div className="flex flex-col max-md:px-6 max-md:pb-6 justify-center gap-8 flex-1">
        <h1 className="text-xl lg:text-3xl font-semibold text-white">
          Venha fazer parte dessa missão <br /> junto com a Guapi, transforme o{" "}
          <br />
          presente e construa um futuro <br /> melhor para todos
        </h1>
        <div className="w-full md:w-[265px] lg:w-80">
          <Button color="secondary" text="Cadastre seu currículo" />
        </div>
      </div>
    </div>
  );
}
