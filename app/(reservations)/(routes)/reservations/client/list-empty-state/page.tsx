"use client";
/* eslint-disable react/no-unescaped-entities */
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import Container from "@/components/Container";
import DiscoverSec from "@/components/DiscoverSec/DiscoverSec";

export default function page() {
  return (
    <div className="py-16 sm:py-6">
      <Container>
        <div className="bg-inherit">
          <CommonHeader
            title="Reservations"
            className="sm:text-[30px] xs:text-[24px]"
          />
          <div className="my-10 text-center py-20 sm:py-12 sm:my-[20px]">
            <h5 className="text-lg font-satoshi_medium mb-1">
              There is no reservations yet!
            </h5>
            <p className="max-w-[295px] text-gray-500 text-base mx-auto">
              Once you've reserved services, they'll be right here for you.
            </p>
          </div>
        </div>
      </Container>
      <DiscoverSec />
    </div>
  );
}
