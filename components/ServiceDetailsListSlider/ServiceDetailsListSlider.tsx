/* eslint-disable react/jsx-key */

"use client";

import LeftArrowIcon from "@/json/icons/LeftArrowIcon";
import RightArrowIcon from "@/json/icons/RightArrowIcon";
import { serviceList } from "@/json/mock/serviceList.mock";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ListingCard from "../ListingCard/ListingCard";
import { ServiceListInterface } from "@/typescript/interfaces";
import assets from "@/json/assets";

export const cityList = [
  "New York",
  "Chicago",
  "Boston",
  "Los Angeles",
  "San Francisco",
  "Houston",
];

interface ServiceDetailsListSliderProps{
  serviceRecomendationList ?: ServiceListInterface["data"]
}

export default function ServiceDetailsListSlider({serviceRecomendationList} : ServiceDetailsListSliderProps) {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="py-8 md:py-6">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium md:text-[20px]">
          Recommended for you
        </h3>
        <div className="flex items-center">
          {settings.infinite && <button
            className="h-10 w-10 md:w-8 md:h-8  rounded-full border-[#D1D1D6] border flex items-center justify-center hover:text-[#E4E4E7] transition-all"
            onClick={() => slider.current && slider.current.slickPrev()}
          >
            <LeftArrowIcon />
          </button>}
          {settings.infinite && <button
            className="h-10 w-10 md:w-8 md:h-8  ml-4 md:ml-2 rounded-full border-[#D1D1D6] border flex items-center justify-center  hover:text-[#E4E4E7] transition-all"
            onClick={() => slider.current && slider.current.slickNext()}
          >
            <RightArrowIcon />
          </button>}
        </div>
      </div>
      <Slider {...settings} className="request_slider" ref={slider}>
        {serviceRecomendationList?.map((item, index) => (
          <ListingCard
            // availablenow={item.availablenow}
            // showaviability={item.availability}
            id = {item._id}
            listingImage={item.cover_image || assets.noImage}
            ImageHeight={"197px"}
            ImageWidth={"410px"}
            clientImg={item.vendor_data.profilePicture}
            listTitle={item.title}
            rattedPerson={String(item.rating_data.avg_rating)}
            rattingvalue={String(item.rating_data.total_count)}
            userName={item.vendor_data.fullName}
            listingText={item.description}
            priceText={item.price_low}
            key={index}
          />
        ))}
      </Slider>
    </div>
  );
}
