"use client";

import { useOnScreen } from "@/hooks/useOnScreen";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useOnScreen() as [
    React.RefObject<HTMLSpanElement>,
    boolean
  ];

  const hasAnimated = useRef(false); // Controle persistente

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true; // Marca como já animado
    const increment = target / (duration * 60); // 60 fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return (
    <span ref={ref} className="animate-fadeInUp">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
