"use client";
import assets from "@/json/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import CommonHeader from "../CommonHeader/CommonHeader";
import Container from "../Container";
import LeftArrowIcon from "@/json/icons/LeftArrowIcon";
import RightArrowIcon from "@/json/icons/RightArrowIcon";
import { useRef } from "react";

export default function CategorySec() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
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
  const cardList = [
    {
      image: assets?.category1,
      title: "Pet care and services",
      description: "Professionals in the field of mental and physical health.",
    },
    {
      image: assets?.category2,
      title: "Home cleaning and maintenance",
      description: "The best housekeepers are already waiting for you.",
    },
    {
      image: assets?.category3,
      title: "At-home schooling and homework help",
      description: "Study when it's convenient for you.",
    },
    {
      image: assets?.category4,
      title: "Childcare and babysitting",
      description: "Study when it's convenient for you.",
    },
    {
      image: assets?.category1,
      title: "Pet care and services",
      description: "Professionals in the field of mental and physical health.",
    },
  ];
  const slider = useRef<Slider | null>(null);
  return (
    <div className="py-24 xl:py-20 sm:py-12">
      <Container>
        <div className="flex flex-wrap items-center justify-between mb-12">
          <CommonHeader
            title="Explore popular categories"
            className="lg:text-[30px] sm:text-[24px]"
          >
            <Image
              src={assets?.twinkle_star}
              alt="star"
              width={40}
              height={56}
              className="sm:w-[30px]"
            />
          </CommonHeader>
          <div className="flex items-center md:hidden">
            <button
              className="h-10 w-10   ml-4 rounded-full border-[#D1D1D6] border flex items-center justify-center  hover:text-[#E4E4E7] transition-all"
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
        <div className="content md:ml-[-40px]">
          <Slider {...settings} className="cmn_slider" ref={slider}>
            {cardList?.map((item, index) => (
              <CategoryCard {...item} key={index + 1} />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
