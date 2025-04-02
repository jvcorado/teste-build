import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  text: string;
  color?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  icon?: boolean;
  cn?: string;
}

export default function Button({
  text,
  color = "primary",
  onClick,
  icon = true,
  cn,
}: ButtonProps) {
  return (
    <button
      className={`cta ${cn} ${
        color === "primary"
          ? " text-primary-brand-800  h-[3.688rem] px-6 lg:py-4 lg:px-8 "
          : color === "secondary"
          ? "border-primary-brand-600 text-white bg-primary-brand-700 rounded-xl h-10 px-4 py-2 "
          : "border-primary-black-200 text-primary-black-200  h-[3.688rem] px-6 lg:py-4 lg:px-8 "
      } w-full md:w-auto border rounded-lg py-[0.875rem] border-border gap-4 font-semibold text-sm md:text-base lg:text-lg flex items-center justify-between lg:justify-center duration-300 transition-all `}
      onClick={onClick}
    >
      {text}
      {icon && (
        <ArrowRight
          size={20}
          className={`
            ${
              color === "primary"
                ? "text-primary-brand-800"
                : color === "secondary"
                ? "text-white"
                : "text-black"
            }
            `}
        />
      )}
    </button>
  );
}
