"use client";

import { imgListItems } from "@/json/mock/imageList.mock";
import dynamic from "next/dynamic";

const DragDropComponent = dynamic(
  () => import("./DragDropComponent/DragDropComponent"),
  { ssr: false }
);

export default function DargDrop() {
  return (
    <div className="relative flex flex-wrap mx-[-8px]">
      <div className="relative w-full px-[8px] mb-[16px] md:w-full">
        <DragDropComponent list={imgListItems} maxItem={3} />
      </div>
    </div>
  );
}
