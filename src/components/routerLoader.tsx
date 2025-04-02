"use client";

import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/logo.json";

export default function RouteLoader() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed inset-0  z-[9999] flex items-center justify-center bg-white`}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-24 h-24"
        />
      </motion.div>
    </AnimatePresence>
  );
}
