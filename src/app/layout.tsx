import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "sonner";

import AOSInitializer from "@/components/AOSInitializer";
import { LoaderProvider } from "@/context/LoaderProvider";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Guapi Papéis",
  description: "Landing page da Guapi Papéis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} font-sans antialiased !overflow-x-hidden scroll-transparent`}
      >
        <LoaderProvider>
          <div className="sticky top-0  z-[999]">
            <Header />
          </div>
          <AOSInitializer>{children}</AOSInitializer>

          <Toaster />
          <Footer />
          <ScrollToTopButton />
        </LoaderProvider>
      </body>
    </html>
  );
}
