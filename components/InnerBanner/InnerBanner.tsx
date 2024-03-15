import React from "react";
import Container from "../Container";

interface innerbannerProps {
  bannerTitle: string;
  children?: React.ReactNode;
  subTitle?: string;
}

export default function InnerBanner({
  bannerTitle,
  children,
  subTitle,
}: innerbannerProps) {
  return (
    <div className="py-24 pt-52 w-full lg:pt-[160px] md:pt-[80px] lg:pb-[60px] md:overflow-hidden">
      <Container>
        <div className="border-t border-solid border-gray-200 md:block hidden mx-[-16px] pb-[40px]" />
        <div className="text-center md:text-left">
          {subTitle && (
            <h5 className=" font-satoshi_medium text-gray-500 text-base mb-[12px]">
              {subTitle}
            </h5>
          )}

          <h1 className="text-5xl mb-6 md:text-[36px] sm:text-[36px] ">
            {bannerTitle}
          </h1>
          {children}
        </div>
      </Container>
    </div>
  );
}
