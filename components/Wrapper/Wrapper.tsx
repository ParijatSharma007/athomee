"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <div>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <> {children}</>
      )}
    </div>
  );
}
