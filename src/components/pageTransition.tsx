// components/PageTransition.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  routeKey: string;
}

export default function PageTransition({ children, routeKey }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, scale: 1 }} // Começa transparente e um pouco menor
        animate={{ opacity: 1, scale: 1 }} // Torna-se totalmente visível e no tamanho normal
        exit={{ opacity: 0, scale: 1 }} // Some reduzindo opacidade e diminuindo levemente
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
