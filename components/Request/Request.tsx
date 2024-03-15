/* eslint-disable react/jsx-key */

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import assets from "@/json/assets";
import LeftArrowIcon from "@/json/icons/LeftArrowIcon";
import RightArrowIcon from "@/json/icons/RightArrowIcon";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CommonHeader from "../CommonHeader/CommonHeader";
import Container from "../Container";
import ListingCard from "../ListingCard/ListingCard";

import DropDownIcon from "@/json/icons/DropDownIcon";

export const serviceList = [
  {
    listingimg: assets.slider_image1,

    clientImg: assets.clientImage,
    listTitle: "Deep Tissue Massage",
    rattedPerson: "(56)",
    rattingvalue: "4.6",
    userName: "Julia Brown",

    listingText:
      "Thorough cleaning of soft and hard furniture surfaces from dirt of various types.",
    priceText: 23,
    availablenow: true,
  },
  {
    listingimg: assets.listingimg,

    clientImg: assets.clientImage,
    listTitle: "Deep Tissue Massage",
    rattedPerson: "(56)",
    rattingvalue: "4.6",
    userName: "Julia Brown",

    listingText:
      "Thorough cleaning of soft and hard furniture surfaces from dirt of various types.",
    priceText: 23,
    availablenow: true,
  },
  {
    listingimg: assets.slider_image2,

    clientImg: assets.clientImage,
    listTitle: "Deep Tissue Massage",
    rattedPerson: "(56)",
    rattingvalue: "4.6",
    userName: "Julia Brown",

    listingText:
      "Thorough cleaning of soft and hard furniture surfaces from dirt of various types.",
    priceText: 23,
    availablenow: true,
  },
  {
    listingimg: assets.slider_image1,

    clientImg: assets.clientImage,
    listTitle: "Deep Tissue Massage",
    rattedPerson: "(56)",
    rattingvalue: "4.6",
    userName: "Julia Brown",

    listingText:
      "Thorough cleaning of soft and hard furniture surfaces from dirt of various types.",
    priceText: 23,
    availablenow: true,
  },
  {
    listingimg: assets.listingimg,

    clientImg: assets.clientImage,
    listTitle: "Deep Tissue Massage",
    rattedPerson: "(56)",
    rattingvalue: "4.6",
    userName: "Julia Brown",

    listingText:
      "Thorough cleaning of soft and hard furniture surfaces from dirt of various types.",
    priceText: 23,
    availablenow: true,
  },
  {
    listingimg: assets.slider_image2,

    clientImg: assets.clientImage,
    listTitle: "Deep Tissue Massage",
    rattedPerson: "(56)",
    rattingvalue: "4.6",
    userName: "Julia Brown",

    listingText:
      "Thorough cleaning of soft and hard furniture surfaces from dirt of various types.",
    priceText: 23,
    availablenow: true,
  },
];
export const cityList = [
  "New York",
  "Chicago",
  "Boston",
  "Los Angeles",
  "San Francisco",
  "Houston",
];

export default function Request() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "40px 0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px 0",
        },
      },
    ],
  };
  const slider = useRef<Slider | null>(null);

  const [city, setCity] = useState("New York");

  const onSelect = (e: any) => {
    if (e.target) {
      const labelText = e.target.textContent;
      setCity(labelText);
    }
  };
  return (
    <div className="py-24 xl:pb-20 xl:pt-0">
      <Container>
        <div className="flex flex-wrap items-center justify-between mb-12">
          <CommonHeader
            title={`The most requested services in  ${city}`}
            className="lg:text-[30px] sm:text-[24px]"
          >
            <DropdownMenu>
              <DropdownMenuTrigger>
                <DropDownIcon />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#fff] rounded-xl shadow-[1px_1px_20px_10px_rgba(0,0,0,.05)] border-0  p-5 pr-2 w-60 max-h-60 overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                {cityList.map((data, index) => (
                  <div key={index}>
                    <DropdownMenuLabel
                      onClick={(data) => onSelect(data)}
                      className="pt-0 pl-0 pr-0 pb-3 mb-3 cursor-pointer  border-[#F4F4F5] border-b-[1px] last:pb-0 last:mb-0 last:border-b-[0px]"
                    >
                      {data}
                    </DropdownMenuLabel>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </CommonHeader>
          <div className="flex items-center md:hidden">
            <button
              className="h-10 w-10  rounded-full border-[#D1D1D6] border flex items-center justify-center hover:text-[#E4E4E7] transition-all"
              onClick={() => slider.current && slider.current.slickPrev()}
            >
              <LeftArrowIcon />
            </button>
            <button
              className="h-10 w-10   ml-4 rounded-full border-[#D1D1D6] border flex items-center justify-center  hover:text-[#E4E4E7] transition-all"
              onClick={() => slider.current && slider.current.slickNext()}
            >
              <RightArrowIcon />
            </button>
          </div>
        </div>
        <div className="md:ml-[-40px]">
          <Slider {...settings} className="request_slider" ref={slider}>
            {serviceList.map((item, index) => (
              <div key={index}>
                <ListingCard
                  availablenow={item.availablenow}
                  listingImage={item.listingimg}
                  ImageHeight={"197px"}
                  ImageWidth={"406px"}
                  clientImg={item.clientImg}
                  listTitle={item.listTitle}
                  rattedPerson={item.rattedPerson}
                  rattingvalue={item.rattingvalue}
                  userName={item.userName}
                  listingText={item.listingText}
                  priceText={item.priceText}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
