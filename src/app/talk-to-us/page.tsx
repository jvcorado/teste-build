"use client";

import {
  Facebook,
  FileText,
  Headset,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  SquareUser,
  X,
} from "lucide-react";
import Link from "next/link";
import { InputForm } from "./inputForm";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UnitContact } from "./unitContact";
import { talkToUs } from "@/constants/talkToUs";
import { Suspense, useState } from "react";
import { toast } from "sonner";
import { carbonData, duoData, uniData } from "@/constants/products";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";
import { formatCnpj, formatPhone } from "@/utils/mask";
import Loading from "../loading";

export default function TalkToUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    desiredLine: "",
    product: "",
    cnpj: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/ms/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao enviar mensagem");

      const data = await res.json();
      toast.success("Mensagem enviada com sucesso!", {
        position: "top-right",
      });
      console.log(data);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        desiredLine: "",
        product: "",
        cnpj: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar a mensagem.", {
        position: "top-right",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        desiredLine: "",
        product: "",
        cnpj: "",
      });
    }
  };

  const getProductsByLine = (lineKey: string) => {
    switch (lineKey) {
      case "uni":
        return uniData.products;
      case "duo":
        return duoData.products;
      case "carton":
        return carbonData.products;
      default:
        return [];
    }
  };

  const isFormValid = () => {
    const baseFieldsFilled =
      form.name && form.email && form.phone && form.subject && form.message;

    if (form.subject === "quero_ser_cliente") {
      return baseFieldsFilled && form.desiredLine && form.product;
    }

    return baseFieldsFilled;
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const removeOption = (value: string) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== value));
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="py-6  container mx-auto max-md:px-6 lg:px-24 lg:pt-6">
        <DynamicBreadcrumb />
      </div>
      <div className="grid grid-cols-2 xl:gap-16  lg:container lg:mx-auto lg:px-24 pb-12 max-lg:mx-6">
        <section className="col-span-2 xl:col-span-1 overflow-auto">
          <h2 className="font-bold text-2xl text-primary-brand-800">
            Fale Conosco
          </h2>
          <p className="font-normal text-xs pt-4 ">
            {talkToUs.description1}
            <br />
            <br />
            {/*           {talkToUs.description2} */}
          </p>
          <div className="grid grid-cols-2">
            <div className=" col-span-2 md:col-span-1 flex flex-col gap-2 pt-4 md:pt-0 md:pr-3">
              <h3 className="font-semibold text-base">Unidade Fabricadora</h3>
              <UnitContact
                icon={Headset}
                title={talkToUs.manufacturingUnit.phone.title}
                description={talkToUs.manufacturingUnit.phone.description}
                href={talkToUs.manufacturingUnit.phone.href}
                noNewWebOpen
              />
              <UnitContact
                icon={MapPin}
                title={talkToUs.manufacturingUnit.location.title}
                description={talkToUs.manufacturingUnit.location.description}
                href={talkToUs.manufacturingUnit.location.href}
              />
            </div>
            <div className=" col-span-2 md:col-span-1 flex flex-col gap-2 pt-4 md:pt-0 md:border-l md:pl-3">
              <h3 className="font-semibold text-base">
                Unidade Administrativa
              </h3>
              <UnitContact
                icon={Headset}
                title={talkToUs.administrativeUnit.phone.title}
                description={talkToUs.administrativeUnit.phone.description}
                href={talkToUs.administrativeUnit.phone.href}
                noNewWebOpen
              />
              <UnitContact
                icon={MapPin}
                title={talkToUs.administrativeUnit.location.title}
                description={talkToUs.administrativeUnit.location.description}
                href={talkToUs.administrativeUnit.location.href}
              />
            </div>
          </div>
          <div className="border-spacing-0 border-t my-3 "></div>
          <UnitContact
            icon={Mail}
            title={talkToUs.administrativeUnit.email.title}
            description={talkToUs.administrativeUnit.email.description}
            href={talkToUs.administrativeUnit.email.href}
            noNewWebOpen
          />

          <div className="flex flex-col gap-2 py-4">
            <h3 className="font-semibold text-base">Redes Sociais</h3>
            <div className="flex flex-row gap-3">
              <Link
                href={talkToUs.socialMedia.hrefInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-brand-800 hover:scale-105 transition-all duration-700 ease-in-out"
              >
                <Instagram className="h-6 w-6 text-white" />
              </Link>
              <Link
                href={talkToUs.socialMedia.hrefFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-brand-800 hover:scale-105 transition-all duration-700 ease-in-out"
              >
                <Facebook className="h-6 w-6 text-white" />
              </Link>
              <Link
                href={talkToUs.socialMedia.hrefLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-brand-800 hover:scale-105 transition-all duration-700 ease-in-out"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </Link>
            </div>
          </div>
        </section>
        <section className="col-span-2 xl:col-span-1">
          <div>
            <h2 className="font-semibold text-2xl">Formulário para Contato</h2>
            <InputForm
              name="name"
              icon={SquareUser}
              label="Nome Completo"
              placeholder="Digite seu nome"
              value={form.name} // <-- aqui
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <InputForm
              name="email"
              icon={Mail}
              label="E-mail"
              placeholder="Seu e-mail de acesso"
              value={form.email} // <-- aqui
              onChange={(e) => handleChange("email", e.target.value)}
              email
            />

            <InputForm
              name="phone"
              icon={Phone}
              label="Telefone"
              placeholder="(00) 9000-0000"
              value={formatPhone(form.phone)}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/\D/g, "");
                handleChange("phone", rawValue);
              }}
            />
          </div>

          <div className="py-2">
            <p className="font-normal text-xs pb-2">Assunto</p>
            <Select
              value={form.subject}
              onValueChange={(value) => handleChange("subject", value)}
            >
              <SelectTrigger
                className={form.subject ? "text-primary-light-green-500" : ""}
              >
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="quero_ser_cliente">
                    Quero Ser Cliente
                  </SelectItem>
                  <SelectItem value="quero_ser_fornecedor">
                    Quero Ser Fornecedor
                  </SelectItem>
                  <SelectItem value="frota">Frota</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {form.subject === "quero_ser_cliente" && (
            <>
              <div className="py-2">
                <p className="font-normal text-xs pb-2">Linha Desejada</p>
                <Select
                  value={form.desiredLine}
                  onValueChange={(value) => handleChange("desiredLine", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="uni">Linha Uni</SelectItem>
                      <SelectItem value="duo">Linha Duo</SelectItem>
                      <SelectItem value="carton">Linha Carton</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {form.desiredLine && (
                <>
                  <div className="py-2">
                    <p className="font-normal text-xs pb-2">
                      Especifique o Produto
                    </p>
                    <Select
                      value={form.product}
                      onValueChange={(value) => {
                        handleChange("product", value);
                        toggleOption(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {getProductsByLine(form.desiredLine).map((item) => (
                            <SelectItem
                              key={item.card.key}
                              value={item.card.key}
                            >
                              {item.card.text}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-1 flex flex-wrap gap-2">
                    {selectedOptions.map((option, index) => (
                      <div key={index} className="flex items-center">
                        <span className="p-2 rounded-lg font-medium text-sm text-primary-black-400 bg-primary-black-50  ">
                          {
                            getProductsByLine(form.desiredLine).find(
                              (opt) => opt.card.key === option
                            )?.card.text
                          }
                        </span>
                        <Button
                          key={option}
                          variant="outline"
                          className=" border-none flex"
                          onClick={() => removeOption(option)}
                        >
                          <X className="h-3 w-3 text-primary-black-100 mb-3 -ml-2" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div className="pb-2">
                <InputForm
                  name="cnpj"
                  icon={FileText}
                  label="Digite seu CNPJ"
                  placeholder="Digite seu CNPJ"
                  value={formatCnpj(form.cnpj)} // Aplica a formatação no value
                  onChange={(e) => {
                    // Remove a formatação antes de salvar no estado
                    const rawValue = e.target.value.replace(/\D/g, "");
                    handleChange("cnpj", rawValue);
                  }}
                />
              </div>
            </>
          )}

          {form.subject === "quero_ser_fornecedor" && (
            <div className="pb-2">
              <InputForm
                name="cnpj"
                icon={FileText}
                label="Digite seu CNPJ"
                placeholder="Digite seu CNPJ"
                value={formatCnpj(form.cnpj)}
                onChange={(e) => {
                  // Remove a formatação antes de salvar no estado
                  const rawValue = e.target.value.replace(/\D/g, "");
                  handleChange("cnpj", rawValue);
                }}
              />
            </div>
          )}

          <div>
            <p className="font-normal text-xs pb-2">Mensagem</p>
            <textarea
              className="w-full min-h-20 border rounded-lg p-2 outline-none focus:ring-1 focus:ring-primary-brand-800"
              placeholder="Dê mais detalhes para entendermos melhor."
              onChange={(e) => handleChange("message", e.target.value)}
              value={form.message}
            />
          </div>
          <div className="flex justify-end">
            <Button
              className="h-10 w-full md:w-40 xl:w-full bg-primary-brand-800 text-white py-2 mt-4 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={!isFormValid()}
            >
              Enviar Mensagem
            </Button>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
