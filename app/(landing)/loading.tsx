"use client";

import assets from "@/json/assets";
import Image from "next/image";

export default function Loading() {
  return (
    <div className=" fixed w-full h-full bg-white flex justify-center items-center z-[99999]">
      <div>
        <Image
          src={assets?.athomee_animate}
          alt="image"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}
