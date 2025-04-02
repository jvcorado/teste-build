"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Dicionário de traduções
const breadcrumbTranslations: Record<string, string> = {
  products: "Produtos",
  sustainability: "Sustentabilidade",
  "social-responsibility": "Responsabilidade Social",
  company: "Empresa",
  "talk-to-us": "Fale Conosco",
  conduct: "Codígo de Conduta",
  // Adicione mais traduções conforme necessário
};

const DynamicBreadcrumb = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [breadcrumbs, setBreadcrumbs] = React.useState<BreadcrumbItem[]>([]);

  React.useEffect(() => {
    if (!pathname) return;

    const pathParts = pathname.split("/").filter(Boolean);
    const itemParam = searchParams?.get("item");

    // Se for a página de detalhes de produto com parâmetro item
    if (pathParts.join("/") === "produtos/product/details" && itemParam) {
      const itemParts = itemParam.split("-");
      const mainItem = itemParts[0].toUpperCase(); // Get "DUO" from "duo-size-rec-ex"

      setBreadcrumbs([
        {
          label: breadcrumbTranslations["produtos"] || "Produtos",
          href: "/produtos",
        },
        {
          label: mainItem, // "DUO"
          href: `/produtos/product?item=${mainItem.toLowerCase()}`, // Link to product page
        },
        {
          label: itemParam.replace(/-/g, " ").toUpperCase(), // "DUO SIZE REC EX"
          href: pathname + `?item=${itemParam}`,
        },
      ]);
      return;
    }

    // Se for a página de produto com parâmetro item
    if (pathParts.join("/") === "produtos/product" && itemParam) {
      setBreadcrumbs([
        {
          label: breadcrumbTranslations["produtos"] || "Produtos",
          href: "/produtos",
        },
        {
          label: itemParam.toUpperCase(), // "DUO"
          href: pathname + `?item=${itemParam}`,
        },
      ]);
      return;
    }

    // Lógica padrão para outras páginas
    const crumbs = pathParts
      .map((part, index) => {
        const href = `/${pathParts.slice(0, index + 1).join("/")}`;
        const translatedLabel =
          breadcrumbTranslations[part.toLowerCase()] ||
          part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");

        return {
          label: translatedLabel,
          href: href,
        };
      })
      .filter((item): item is BreadcrumbItem => item !== null);

    setBreadcrumbs(crumbs);
  }, [pathname, searchParams]);

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BreadcrumbRoot>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="text-primary-black-300 hover:text-primary-black-500"
              >
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.length > 0 && (
            <BreadcrumbSeparator className="text-primary-black-300" />
          )}

          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={crumb.href}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-black">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={crumb.href}
                        className="text-primary-black-300 hover:text-primary-black-500"
                      >
                        {crumb.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && (
                  <BreadcrumbSeparator className="text-primary-black-300" />
                )}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </BreadcrumbRoot>
    </React.Suspense>
  );
};

export default DynamicBreadcrumb;
