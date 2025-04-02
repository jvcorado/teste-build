"use client"; // Necessário pois usamos useEffect e acesso ao window

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactNode } from "react";

const AOSInitializer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: "mobile",
    });
  }, []);

  return children;
};

export default AOSInitializer;
