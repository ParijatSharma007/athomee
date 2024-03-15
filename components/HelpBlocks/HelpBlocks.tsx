"use client";

import { helpList } from "@/json/mock/helpList.mock";
import Container from "../Container";
import HelpCard from "../HelpCard/HelpCard";

export default function HelpBlocks() {
  return (
    <div className="bg-inherit pb-[80px] md:pb-[30px]">
      <Container>
        <div className="flex flex-wrap flex-row -m-4">
          {helpList?.map((item, index) => (
            <div className="flex-col w-1/3 p-4 lg:w-1/2 sm:w-full" key={index}>
              <HelpCard {...item} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
