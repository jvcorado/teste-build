"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const LoaderContext = createContext<{ loading: boolean; isFirstLoad: boolean }>(
  {
    loading: false,
    isFirstLoad: false,
  }
);

const RouteLoader = dynamic(() => import("@/components/routerLoader"), {
  ssr: false,
});

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(true);

      const timeout = setTimeout(() => {
        setLoading(false);
        setIsFirstLoad(false); // após a primeira animação, já não é mais primeira carga
      }, 2300);

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return (
    <LoaderContext.Provider value={{ loading, isFirstLoad }}>
      <RouteLoader>{children}</RouteLoader>
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
