"use client";

/* eslint-disable react/jsx-key */
import LeftArrowIconTwo from "@/json/icons/LeftArrowIconTwo";
import RightArrowIconTwo from "@/json/icons/RightArrowIconTwo";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CommonHeader from "../CommonHeader/CommonHeader";
import Container from "../Container";
import ListingCard from "../ListingCard/ListingCard";
import { serviceList } from "../Request/Request";

export default function DiscoverSec() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="bg-inherit">
      <Container>
        <div className="flex flex-wrap items-center justify-between mb-12 sm:mb-6">
          <CommonHeader
            title="Discover services"
            className="sm:text-[30px] xs:text-[24px]"
          />

          <div className="flex items-center">
            <button
              className="h-10 w-10   ml-4 rounded-full border-[#D1D1D6] border flex items-center justify-center  hover:text-[#E4E4E7] transition-all sm:w-8 sm:h-8 sm:ml-0"
              onClick={() => slider.current && slider.current.slickPrev()}
            >
              <LeftArrowIconTwo />
            </button>
            <button
              className="h-10 w-10   ml-4 rounded-full border-[#D1D1D6] border flex items-center justify-center  hover:text-[#E4E4E7] transition-all sm:w-8 sm:h-8"
              onClick={() => slider.current && slider.current.slickNext()}
            >
              <RightArrowIconTwo />
            </button>
          </div>
        </div>
        <Slider {...settings} className="request_slider" ref={slider}>
          {serviceList.map((item, index) => (
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
              showaviability
              key={index}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
}
