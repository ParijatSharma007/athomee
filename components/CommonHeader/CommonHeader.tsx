import { cn } from "@/lib/utils";
import React from "react";

interface headerProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export default function CommonHeader({
  children,
  title,
  className,
}: headerProps) {
  return (
    <h2 className={cn("flex items-center", className)}>
      {title}
      <span className="inline-block ml-2 leading-[0]">{children}</span>
    </h2>
  );
}
