"use client";

import Link from "next/link";
import React from "react";

interface cardProps {
  bgColor?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function HelpCard({
  bgColor,
  description,
  icon,
  title,
}: cardProps) {
  return (
    <Link
      href="/"
      className={`bg-[${bgColor}] rounded-xl p-6 text-center shadow_card h-full block`}
    >
      <i className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full mx-auto mb-4 border border-primary border-solid">
        {icon}
      </i>
      <h4 className="mb-2">{title}</h4>
      <p className="text-gray-600 max-w-[344px] mx-auto ">{description}</p>
    </Link>
  );
}
