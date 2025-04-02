"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchDialog from "./searchDialog";
import { usePathname } from "next/navigation";
import React from "react";

// Componente para os itens de dropdown
interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  pathname?: string;
}

const DropdownItem = ({
  href,
  children,
  className = "",
  pathname,
}: DropdownItemProps) => (
  <Link
    href={href}
    className={`block px-4 py-2 text-white md:text-primary-brand-800 md:hover:bg-primary-brand-800 hover:text-white rounded-md ${
      pathname === href
        ? "bg-primary-brand-800 !text-white my-2 font-medium hover:text-primary-brand-800"
        : ""
    } ${className}`}
  >
    {children}
  </Link>
);

// Componente para o dropdown
interface DropdownProps {
  title: string;
  children: React.ReactNode;
  align?: "left" | "center";
  pathname?: string;
  href?: string;
}

const Dropdown = ({
  title,
  children,
  align = "left",
  pathname,
  href,
}: DropdownProps) => {
  const isActive = React.Children.toArray(children).some((child) => {
    if (React.isValidElement<{ href: string }>(child)) {
      return child.props.href === pathname;
    }
    return false;
  });

  return (
    <div className="group relative">
      <div
        className={`flex items-center gap-2 text-sm hover:text-white/80 cursor-pointer ${
          isActive || pathname === href
            ? "text-primary-light-500 font-medium"
            : ""
        }`}
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </div>
      <div
        className={`absolute ${
          align === "center"
            ? "-left-10 top-7 transform [translateX(calc(50vw-50%))]"
            : "-left-10 top-7"
        } top-full mt-1 z-10 hidden w-48 rounded-md bg-white text-primary-brand-900 py-2 px-2 shadow-lg group-hover:block`}
      >
        {children}
      </div>
    </div>
  );
};

// Componente para os links de navegação
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  pathname?: string;
}

const NavLink = ({
  href,
  children,
  mobile = false,
  pathname,
}: NavLinkProps) => (
  <li>
    <Link
      href={href}
      className={`block py-2  ${
        pathname === href ? "text-primary-brand-401 font-semibold" : ""
      } ${mobile ? "" : ""}`}
    >
      {children}
      {mobile && <ChevronRight className="ml-auto h-4 w-4" />}
    </Link>
  </li>
);

// Componente do logo
const Logo = () => (
  <Link href="/" className="flex items-center">
    <div className="relative h-10 w-40 hidden md:flex items-center justify-center">
      <Image
        src="/LOGO_TOTALBRANCA_1.svg"
        alt="Guapi Papéis"
        width={150}
        height={40}
        className="object-contain"
      />
    </div>
  </Link>
);

// Componente do menu mobile
const MobileMenu = ({
  isOpen,
  pathname,
}: {
  isOpen: boolean;
  pathname: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden mt-3 pb-3 ">
      <ul className="space-y-2 text-sm mx-6">
        <NavLink href="/" pathname={pathname}>
          Início
        </NavLink>
        <NavLink href="/company" pathname={pathname}>
          A Empresa
        </NavLink>
        <NavLink href="/produtos" pathname={pathname}>
          Linha de Produtos
        </NavLink>
        <NavLink href="/sustainability" pathname={pathname}>
          Sustentabilidade e Tecnologia
        </NavLink>
        <NavLink href="/social-responsibility" pathname={pathname}>
          Responsabilidade Social
        </NavLink>
        <NavLink href="/blog" pathname={pathname}>
          Blog
        </NavLink>
        <NavLink href="/trabalhe-conosco" pathname={pathname}>
          Trabalhe Conosco
        </NavLink>
        <NavLink href="/talk-to-us" pathname={pathname}>
          Contato
        </NavLink>
        <NavLink href="/termos-e-condicoes" pathname={pathname}>
          Termos e Condições
        </NavLink>

        <li>
          <Accordion
            type="single"
            collapsible
            className="border border-primary-brand-700 rounded-xl px-8 bg-primary-brand-800"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                Acesso ao portal
              </AccordionTrigger>
              <AccordionContent>
                <DropdownItem href="/cliente" pathname={pathname}>
                  Cliente
                </DropdownItem>
                <hr className="border-[0.5px] border-primary-brand-700" />
                <DropdownItem href="/fornecedor" pathname={pathname}>
                  Fornecedor
                </DropdownItem>
                <hr className="border-[0.5px] border-primary-brand-700" />
                <DropdownItem href="/representante" pathname={pathname}>
                  Representante
                </DropdownItem>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      </ul>
    </div>
  );
};

// Componente do menu de navegação desktop
const DesktopNav = ({ pathname }: { pathname: string }) => (
  <nav className="hidden lg:block mt-2 max-md:mx-4 border-t-[0.5px] pt-4 border-primary-brand-800">
    <ul className="flex justify-between text-sm lg:container lg:mx-auto lg:px-24">
      <li className="group relative pt-2">
        <Dropdown title="A empresa" align="center" pathname={pathname}>
          <DropdownItem href="/company" pathname={pathname}>
            Sobre nós
          </DropdownItem>
          <DropdownItem href="/company/conduct" pathname={pathname}>
            Código de Conduta
          </DropdownItem>
        </Dropdown>
      </li>
      <NavLink href="/produtos" pathname={pathname}>
        Linha de Produtos
      </NavLink>
      <NavLink href="/sustainability" pathname={pathname}>
        Sustentabilidade e Tecnologia
      </NavLink>
      <NavLink href="/social-responsibility" pathname={pathname}>
        Responsabilidade Social
      </NavLink>
      <NavLink href="/blog" pathname={pathname}>
        Blog
      </NavLink>
      <NavLink href="/trabalhe-conosco" pathname={pathname}>
        Trabalhe Conosco
      </NavLink>
      <NavLink href="/talk-to-us" pathname={pathname}>
        Contato
      </NavLink>
    </ul>
  </nav>
);

// Componente do portal de acesso
const PortalAccess = ({ pathname }: { pathname: string }) => (
  <div className="hidden lg:flex items-center">
    <Dropdown title="Acesso ao portal" pathname={pathname}>
      <DropdownItem href="/cliente" pathname={pathname}>
        Cliente
      </DropdownItem>
      <DropdownItem href="/fornecedor" pathname={pathname}>
        Fornecedor
      </DropdownItem>
      <DropdownItem href="/representante" pathname={pathname}>
        Representante
      </DropdownItem>
    </Dropdown>
  </div>
);

// Componente do botão do menu mobile
const MobileMenuButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button
    className={`lg:hidden transition-transform duration-300 ${
      isOpen ? "rotate-90" : "rotate-0"
    }`}
    onClick={toggle}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
);

// Componente principal do Header
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isScrolled ? "bg-primary-brand-900" : "bg-primary-brand-900"
      } text-white  lg:h-[164px] transition-all duration-300 `}
    >
      <div className="py-3 flex flex-col justify-between h-full relative">
        <div className=" container mx-auto lg:px-24 max-lg:px-6 flex lg:h-[96px] items-center justify-between max-md:mx-2">
          <Logo />

          <div className="hidden md:block flex-grow max-w-xl mx-4 ">
            <SearchDialog />
          </div>

          <PortalAccess pathname={pathname} />

          <MobileMenuButton
            isOpen={mobileMenuOpen}
            toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />

          <div className="block md:hidden flex-grow max-w-xl mx-4 ">
            <SearchDialog />
          </div>
        </div>

        <DesktopNav pathname={pathname} />
        <div className="absolute top-16 left-0 w-full bg-primary-brand-900">
          <MobileMenu isOpen={mobileMenuOpen} pathname={pathname} />
        </div>
      </div>
    </div>
  );
}
