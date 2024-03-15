/* eslint-disable react/jsx-key */
"use client";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import Container from "../../../../../components/Container";

import CommonPagination from "@/components/CommonPagination/CommonPagination";
import ListingCard from "@/components/ListingCard/ListingCard";
import StarRating from "@/components/Ratting/Ratting";
import ServiceDetailsProgress from "@/components/ServiceDetailsProgress/ServiceDetailsProgress";
import { Button } from "@/components/ui/button";
import CalendarIconLeft from "@/json/icons/CalendarIconLeft";
import CalendarIconRight from "@/json/icons/CalendarIconRight";
import EditPenPopUpIcons from "@/json/icons/EditPenPopUpIcons";
import StarIconNewYellowIcon from "@/json/icons/StarIconNewYellowIcon";
import TranslateLanguageIcon from "@/json/icons/TranslateLanguageIcon";
import { serviceList3 } from "@/json/mock/serviceList.mock";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Index() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
  };
  var settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
  };
  const slider = useRef<Slider | null>(null);

  return (
    <div className="relative py-10 border-t border-newborder border-solid md:py-6">
      <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid pb-6">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </a>
        <p className="absolute left-[50%] translate-x-[-50%] top-[2px] text-[16px] text-gray-900 font-satoshi_medium">
          Vendor profile
        </p>
      </div>
      <Container>
        <div className="relative">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
          <div className="relative flex flex-wrap py-6 w-full">
            <div className="w-[34%] lg:w-full lg:px-0 lg:mb-6">
              <div className="sticky top-[10px] bg-white rounded-[12px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] p-6 lg:p-4 md:p-0 md:shadow-none">
                <figure className="relative w-[120px] h-[120px] flex items-center rounded-full max-w-[120px] mx-auto mb-4">
                  <Image
                    src={assets.vendorCompanyProfileImg1}
                    alt="clientimg"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <span className="bg-green-500 border-2 border-white p-1 absolute bottom-[8px] right-[8px] z-10 rounded-full w-[18px] h-[18px]"></span>
                </figure>
                <h2 className="text-center text-[36px] text-gray-900 xl:text-[30px] md:text-[24px]">
                  Health Life
                </h2>
                <p className="text-center text-[16px] text-gray-400 mb-4">
                  Recreation and rest center
                </p>
                <Button
                  type="button"
                  className="bg-transparent transition-all w-full text-[16px] font-satoshi_medium text-gray-900 border-newborder rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-secondary hover:text-white"
                >
                  <i className="pr-4">
                    <EditPenPopUpIcons />
                  </i>
                  Edit your profile
                </Button>
                <div className="flex flex-wrap mx-[-8px] pt-6">
                  <div className="relative w-1/2 px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Rating
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        4.6
                        <StarIconNewYellowIcon />
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Reviews
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        90
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-full px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Company size
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        236 employees
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        From{" "}
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        United States
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Avg. reply
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        1 hour
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-full px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Languages
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        English, Urdu, Spanish, German
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Member since{" "}
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        May 2014
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4">
                    <div className="relative bg-gray-50 rounded-[8px] p-4">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Last delivery
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        1 day
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] text-gray-500">
                  I will help you put your house in order, get rid of
                  unnecessary things that litter your house, throwing away,
                  without regret. I will help you put your house in order, get
                  rid of unnecessary things that litter your house, throwing
                  away, without regret.{" "}
                </p>
                <div className="relative flex items-center pt-4">
                  <i>
                    <TranslateLanguageIcon />
                  </i>
                  <p className="text-xs pl-1 pr-2 text-gray-400">Translated</p>
                  <Button
                    type="button"
                    className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                  >
                    Show original
                  </Button>
                </div>
              </div>
            </div>
            <div className="sliderTopsWrap_mainRight realtive pl-[32px] w-[66%] lg:w-full lg:pl-0 ">
              <div className="relative w-full overflow-hidden md:hidden">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <h2 className="text-[24px] text-gray-900">
                    Services provide
                  </h2>
                  <div className="flex items-center">
                    <button
                      className="h-10 w-10  rounded-full border-[#D1D1D6] border flex items-center justify-center hover:text-[#E4E4E7] transition-all"
                      onClick={() =>
                        slider.current && slider.current.slickPrev()
                      }
                    >
                      <CalendarIconLeft />
                    </button>
                    <button
                      className="h-10 w-10   ml-4 rounded-full border-[#D1D1D6] border flex items-center justify-center  hover:text-[#E4E4E7] transition-all"
                      onClick={() =>
                        slider.current && slider.current.slickNext()
                      }
                    >
                      <CalendarIconRight />
                    </button>
                  </div>
                </div>
                <Slider {...settings} className="request_slider" ref={slider}>
                  {serviceList3.map((item, index) => (
                    <div className="mb-6" key={index}>
                      <ListingCard
                        availablenow={item.availablenow}
                        showaviability={item.showaviability}
                        listingImage={item.listingimg}
                        ImageHeight={"197px"}
                        ImageWidth={"410px"}
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
              <div className="relative hidden md:block overflow-hidden">
                <h2 className="text-[24px] text-gray-900 mb-4">
                  Services provide
                </h2>
                <div className="mr-[-16px] mb-4">
                  <Slider {...settings2} className="request_sliderNewWRaps">
                    {serviceList3.map((item, index) => (
                      <div className="mb-6" key={index}>
                        <ListingCard
                          availablenow={item.availablenow}
                          showaviability={item.showaviability}
                          listingImage={item.listingimg}
                          ImageHeight={"197px"}
                          ImageWidth={"410px"}
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
                <Button
                  type="button"
                  className="bg-transparent transition-all w-full text-[16px] font-satoshi_medium text-gray-900 border-newborder rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-transparent hover:opacity-75 mb-6"
                >
                  Show all
                </Button>
              </div>
              <div className="realtive pt-12 border-t border-gray-200 md:hidden">
                <div className="relative flex">
                  <div className="relative w-2/4">
                    <h3 className="text-[24px] text-gray-900 font-satoshi_medium mb-1">
                      Average Rating
                    </h3>
                    <div className="relative flex items-center mb-2">
                      <h4 className="text-[24px] text-Black-100 font-satoshi_medium pr-3">
                        4.0
                      </h4>
                      <i>
                        <StarRating totalStars={5} />
                      </i>
                    </div>
                    <p className="text-[14px] text-gray-400 font-satoshi_medium pr-3">
                      Average rate on this year{" "}
                    </p>
                  </div>
                  <div className="relative w-2/4">
                    <div className="relative">
                      <div className="flex items-center">
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pr-2">
                          5
                        </p>
                        <div className="w-[40%] inline-flex px-2`">
                          <ServiceDetailsProgress />
                        </div>
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pl-2">
                          87
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pr-2">
                          4
                        </p>
                        <div className="w-[70%] inline-flex px-2`">
                          <ServiceDetailsProgress />
                        </div>
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pl-2">
                          150
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pr-2">
                          3
                        </p>
                        <div className="w-[20%] inline-flex px-2`">
                          <ServiceDetailsProgress />
                        </div>
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pl-2">
                          30
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pr-2">
                          2
                        </p>
                        <div className="w-[6%] inline-flex px-2`">
                          <ServiceDetailsProgress />
                        </div>
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pl-2">
                          5
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pr-2">
                          1
                        </p>
                        <div className="w-[1%] inline-flex px-2`">
                          <ServiceDetailsProgress />
                        </div>
                        <p className="text-[12px] text-gray-900 font-satoshi_regular pl-2">
                          0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pt-8">
                  <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-4">
                    All Reviews
                  </h3>
                  <div className="realtive">
                    <div className="relative p-8 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-4 rounded-[8px]">
                      <div className="relative flex flex-wrap items-center mb-2">
                        <figure className="text-0 leading-none mr-4 relative">
                          <Image
                            className="w-[48px] h-[48px] rounded-full"
                            src={assets.imgDetailsReviewAllsa1}
                            alt=""
                            width={48}
                            height={48}
                          />{" "}
                          <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                        </figure>
                        <div className="relative">
                          <h5 className="text-[16px] text-[#1F1F1F] font-satoshi_medium mb-0">
                            Pavel G.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Service provided: Chef
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <i>
                          <StarRating totalStars={5} />
                        </i>
                        <p className="relative px-2 text-[14px] text-gray-500 font-satoshi_regular">
                          4
                        </p>
                        <p className="relative pr-2 pl-3 text-[14px] text-gray-500 font-satoshi_regular before:absolute before:content before:w-[4px] before:h-[4px] before:rounded-full before:bg-gray-500 before:left-0 before:top-[10px]">
                          Jun 2023
                        </p>
                      </div>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular my-3 leading-[1.6]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. <br />
                        Amet minim mollit non deserunt ullamco est.
                      </p>
                      <div className="relative flex items-center">
                        <i>
                          <TranslateLanguageIcon />
                        </i>
                        <p className="text-xs pl-1 pr-2 text-gray-400">
                          Translated
                        </p>
                        <Button
                          type="button"
                          className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                        >
                          Show original
                        </Button>
                      </div>
                    </div>
                    <div className="relative p-8 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-4 rounded-[8px]">
                      <div className="relative flex flex-wrap items-center mb-2">
                        <figure className="text-0 leading-none mr-4 relative">
                          <Image
                            className="w-[48px] h-[48px] rounded-full"
                            src={assets.imgDetailsReviewAllsa1}
                            alt=""
                            width={48}
                            height={48}
                          />{" "}
                          <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                        </figure>
                        <div className="relative">
                          <h5 className="text-[16px] text-[#1F1F1F] font-satoshi_medium mb-0">
                            Pavel G.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Service provided: Chef
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <i>
                          <StarRating totalStars={5} />
                        </i>
                        <p className="relative px-2 text-[14px] text-gray-500 font-satoshi_regular">
                          4
                        </p>
                        <p className="relative pr-2 pl-3 text-[14px] text-gray-500 font-satoshi_regular before:absolute before:content before:w-[4px] before:h-[4px] before:rounded-full before:bg-gray-500 before:left-0 before:top-[10px]">
                          Jun 2023
                        </p>
                      </div>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular my-3 leading-[1.6]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                      </p>
                      <div className="relative flex items-center">
                        <i>
                          <TranslateLanguageIcon />
                        </i>
                        <p className="text-xs pl-1 pr-2 text-gray-400">
                          Translated
                        </p>
                        <Button
                          type="button"
                          className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                        >
                          Show original
                        </Button>
                      </div>
                    </div>
                    <div className="relative p-8 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-6 rounded-[8px]">
                      <div className="relative flex flex-wrap items-center mb-2">
                        <figure className="text-0 leading-none mr-4 relative">
                          <Image
                            className="w-[48px] h-[48px] rounded-full"
                            src={assets.imgDetailsReviewAllsa1}
                            alt=""
                            width={48}
                            height={48}
                          />{" "}
                          <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                        </figure>
                        <div className="relative">
                          <h5 className="text-[16px] text-[#1F1F1F] font-satoshi_medium mb-0">
                            Pavel G.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Service provided: Chef
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <i>
                          <StarRating totalStars={5} />
                        </i>
                        <p className="relative px-2 text-[14px] text-gray-500 font-satoshi_regular">
                          4
                        </p>
                        <p className="relative pr-2 pl-3 text-[14px] text-gray-500 font-satoshi_regular before:absolute before:content before:w-[4px] before:h-[4px] before:rounded-full before:bg-gray-500 before:left-0 before:top-[10px]">
                          Jun 2023
                        </p>
                      </div>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular my-3 leading-[1.6]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                      </p>
                      <div className="relative flex items-center">
                        <i>
                          <TranslateLanguageIcon />
                        </i>
                        <p className="text-xs pl-1 pr-2 text-gray-400">
                          Translated
                        </p>
                        <Button
                          type="button"
                          className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                        >
                          Show original
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <CommonPagination />
                  </div>
                </div>
              </div>
              <div className="relative pt-2 hidden md:block">
                <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-4 md:text-[20px]">
                  Reviews
                </h3>
                <div className="mb-4">
                  <Slider {...settings2} className="request_sliderNewWRaps">
                    <div className="relative p-8 sm:p-4 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-4 rounded-[8px]">
                      <div className="relative flex flex-wrap items-center mb-2">
                        <figure className="text-0 leading-none mr-4 relative">
                          <Image
                            className="w-[48px] h-[48px] rounded-full"
                            src={assets.imgDetailsReviewAllsa1}
                            alt=""
                            width={48}
                            height={48}
                          />{" "}
                          <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                        </figure>
                        <div className="relative">
                          <h5 className="text-[16px] text-[#1F1F1F] font-satoshi_medium mb-0">
                            Pavel G.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Service provided: Chef
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <i>
                          <StarRating totalStars={5} />
                        </i>
                        <p className="relative px-2 text-[14px] text-gray-500 font-satoshi_regular">
                          4
                        </p>
                        <p className="relative pr-2 pl-3 text-[14px] text-gray-500 font-satoshi_regular before:absolute before:content before:w-[4px] before:h-[4px] before:rounded-full before:bg-gray-500 before:left-0 before:top-[10px]">
                          Jun 2023
                        </p>
                      </div>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular my-3 leading-[1.6]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. <br />
                        Amet minim mollit non deserunt ullamco est.
                      </p>
                      <div className="relative flex items-center">
                        <i>
                          <TranslateLanguageIcon />
                        </i>
                        <p className="text-xs pl-1 pr-2 text-gray-400">
                          Translated
                        </p>
                        <Button
                          type="button"
                          className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                        >
                          Show original
                        </Button>
                      </div>
                    </div>
                    <div className="relative p-8 sm:p-4 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-4 rounded-[8px]">
                      <div className="relative flex flex-wrap items-center mb-2">
                        <figure className="text-0 leading-none mr-4 relative">
                          <Image
                            className="w-[48px] h-[48px] rounded-full"
                            src={assets.imgDetailsReviewAllsa1}
                            alt=""
                            width={48}
                            height={48}
                          />{" "}
                          <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                        </figure>
                        <div className="relative">
                          <h5 className="text-[16px] text-[#1F1F1F] font-satoshi_medium mb-0">
                            Pavel G.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Service provided: Chef
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <i>
                          <StarRating totalStars={5} />
                        </i>
                        <p className="relative px-2 text-[14px] text-gray-500 font-satoshi_regular">
                          4
                        </p>
                        <p className="relative pr-2 pl-3 text-[14px] text-gray-500 font-satoshi_regular before:absolute before:content before:w-[4px] before:h-[4px] before:rounded-full before:bg-gray-500 before:left-0 before:top-[10px]">
                          Jun 2023
                        </p>
                      </div>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular my-3 leading-[1.6]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. <br />
                        Amet minim mollit non deserunt ullamco est.
                      </p>
                      <div className="relative flex items-center">
                        <i>
                          <TranslateLanguageIcon />
                        </i>
                        <p className="text-xs pl-1 pr-2 text-gray-400">
                          Translated
                        </p>
                        <Button
                          type="button"
                          className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                        >
                          Show original
                        </Button>
                      </div>
                    </div>
                  </Slider>
                </div>
                <Button
                  type="button"
                  className="bg-transparent transition-all w-full text-[16px] font-satoshi_medium text-gray-900 border-newborder rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-transparent hover:opacity-75"
                >
                  Show all
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
