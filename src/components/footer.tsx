"use client";

import Link from "next/link";
import Image from "next/image";
import { about, contacts, socialLinks, support } from "@/constants/footer";

export default function Footer() {
  return (
    <footer
      className="px-5 bg-primary-brand-900 text-white "
      style={{ backgroundImage: "url('/bgImage.svg')" }}
    >
      <div className=" py-16  lg:container lg:mx-auto lg:px-24 max-lg:px-6 ">
        <div className="grid grid-cols-10 justify-between gap-y-8 gap-x-4 xl:gap-x-8 ">
          {/* Logo da empresa teste */}
          <div className="col-span-10 xl:col-span-2 space-y-4 ">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/LOGO_TOTALBRANCA_1.svg"
                  alt="Logo"
                  width={220}
                  height={72}
                />
              </Link>
            </div>
          </div>

          {/* Sobre */}
          <div className="col-span-5 md:col-span-3 xl:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg">Guapi Papéis</h3>
            <ul className="space-y-2 text-xs">
              {about.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-black-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-5 md:col-span-3 xl:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <ul className="space-y-2 text-xs">
              {contacts.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-black-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div className="col-span-5 md:col-span-2 xl:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg">Suporte</h3>
            <ul className="space-y-2 text-xs">
              {support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-black-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="col-span-5 md:col-span-2 xl:col-span-2 space-y-4  ">
            <h3 className="font-semibold text-lg">Siga a Guapi</h3>
            <ul className="flex space-x-4">
              {socialLinks.map(({ href, Icon, label }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="hover:text-primary-black-300"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-full w-full flex items-center justify-center pt-4 pb-8">
        <p className=" font-normal text-xs ">
          ©2025 Guapi Papéis, Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
