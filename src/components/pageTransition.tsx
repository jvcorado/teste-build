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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
