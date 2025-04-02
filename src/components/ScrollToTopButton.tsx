// components/ScrollToTopButton.tsx
"use client";
import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const toggleVisibility = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 w-[50px] h-[50px] z-50 rounded-full bg-primary-brand-700 border border-primary-brand-600 text-white shadow-lg hover:bg-primary-brand-700 transition-opacity"
      aria-label="Voltar ao topo"
    >
      <ChevronsUp size={24} color="white" />
    </button>
  );
}
