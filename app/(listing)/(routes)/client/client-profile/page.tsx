/* eslint-disable react/jsx-key */
"use client";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import Container from "../../../../../components/Container";

import CommonPagination from "@/components/CommonPagination/CommonPagination";
import StarRating from "@/components/Ratting/Ratting";
import { Button } from "@/components/ui/button";
import MessageIcon from "@/json/icons/MessageIcon";
import StarIconNewYellowIcon from "@/json/icons/StarIconNewYellowIcon";
import TranslateLanguageIcon from "@/json/icons/TranslateLanguageIcon";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ClientProfile() {
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
    centerPadding: "20px",
  };
  const slider = useRef<Slider | null>(null);

  return (
    <div className="relative py-10 md:pt-6 md:pb-0 border-t border-newborder border-solid">
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
          Client profile
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
            <div className="w-[34%] lg:w-full">
              <div className="sticky top-[10px] bg-white rounded-[12px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] p-6 md:p-0 md:shadow-none">
                <figure className="relative w-[120px] h-[120px] flex items-center rounded-full max-w-[120px] mx-auto mb-4">
                  <Image
                    src={assets.clientProfileImgmain1}
                    alt="clientimg"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <span className="bg-green-500 border-2 border-white p-1 absolute bottom-[8px] right-[8px] z-10 rounded-full w-[18px] h-[18px]"></span>
                </figure>
                <h2 className="text-center text-[36px] text-gray-900 mb-4 lg:text-[24px]">
                  Amelia G.
                </h2>
                <Button
                  type="button"
                  className="bg-transparent transition-all w-full text-[16px] font-satoshi_medium text-gray-900 border-newborder rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-transparent hover:opacity-75"
                >
                  <i className="mr-2">
                    <MessageIcon />
                  </i>
                  Message
                </Button>
                <div className="flex flex-wrap mx-[-8px] pt-6 sm:mx-[-4px] md:mb-2">
                  <div className="relative w-1/2 px-[8px] mb-4  sm:mb-2 sm:px-[4px]">
                    <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Rating
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14 sm:p-3px]">
                        4.6
                        <StarIconNewYellowIcon />
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4  sm:mb-2 sm:px-[4px]">
                    <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Reviews
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900">
                        90
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-full px-[8px] mb-4  sm:mb-2 sm:px-[4px]">
                    <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Languages
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                        English, Urdu, Spanish, German
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4  sm:mb-2 sm:px-[4px]">
                    <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                      <p className="flex items-center text-[14px] text-gray-500">
                        From{" "}
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                        United States
                      </h3>
                    </div>
                  </div>
                  <div className="relative w-1/2 px-[8px] mb-4  sm:mb-2 sm:px-[4px]">
                    <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                      <p className="flex items-center text-[14px] text-gray-500">
                        Member since{" "}
                      </p>
                      <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                        May 2014
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
            <div className="sliderTopsWrap_mainRight realtive w-[66%] pl-[32px] lg:pl-0 lg:w-full lg:mt-6]">
              <div className="relative md:hidden">
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
                      dolor do amet sint. Velit officia consequat duis.
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
              <div className="relative py-4 hidden md:block">
                <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-4 md:text-[20px]">
                  All Reviews
                </h3>
                <div className="mb-6">
                  <Slider
                    {...settings2}
                    className="request_sliderNewWRaps"
                    ref={slider}
                  >
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
