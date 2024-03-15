/* eslint-disable react/jsx-key */
"use client";
import MessagePopUpIconBtnModal from "@/components/MessagePopUpIconBtnModal/MessagePopUpIconBtnModal";
import MessagePopUpModal from "@/components/MessagePopUpModal/MessagePopUpModal";
import ReserveServiceCard from "@/components/ReserveServiceCard/ReserveServiceCard";
import ServiceDetailsListSlider from "@/components/ServiceDetailsListSlider/ServiceDetailsListSlider";
import ServiceDetailsProgress from "@/components/ServiceDetailsProgress/ServiceDetailsProgress";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import DotIconBtnShow from "@/json/icons/DotIconBtnShow";
import HeartIconSave from "@/json/icons/HeartIconSave";
import HeartIconSave2 from "@/json/icons/HeartIconSave2";
import InfoNotiFicPublishIcon from "@/json/icons/InfoNotiFicPublishIcon";
import PaginationArrow1 from "@/json/icons/PaginationArrow1";
import PaginationArrow2 from "@/json/icons/PaginationArrow2";
import TableTickIcon from "@/json/icons/TableTickIcon";
import TableUnderlineIcon from "@/json/icons/TableUnderlineIcon";
import TranslateLanguageIcon from "@/json/icons/TranslateLanguageIcon";
import Image from "next/image";
import { useRef, useState } from "react";
import Container from "../../../../../components/Container";
import StarRating from "../../../../../components/Ratting/Ratting";

import ReadMoreTextCancelationModal from "@/components/ReadMoreTextCancelationModal/ReadMoreTextCancelationModal";
import ReadMoreTextServiceDetailsModal from "@/components/ReadMoreTextServiceDetailsModal/ReadMoreTextServiceDetailsModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function ListingPublish() {
  const thingDataList = [
    {
      title: "Title is here",
      subtext:
        "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Title is here",
      subtext:
        "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Cancellation policy",
      subtext: "This reservation is non-refundable.",
    },
  ];

  const listDataList = [
    {
      topTetxt: "From ",
      BtmText: "United States",
    },
    {
      topTetxt: "Avg. reply",
      BtmText: "1 hour",
    },
    {
      topTetxt: "Languages",
      BtmText: "English, Urdu, Spanish, German",
      widthMobileFull: true,
    },
    {
      topTetxt: "Member since",
      BtmText: "May 2014",
    },
    {
      topTetxt: "Last delivery",
      BtmText: "1 day",
    },
  ];

  const ListRatingDetails = [
    {
      fisrtNumber: "5",
      valueWidth: 40,
      lastNumber: "87",
    },
    {
      fisrtNumber: "4",
      valueWidth: 80,
      lastNumber: "150",
    },
    {
      fisrtNumber: "3",
      valueWidth: 20,
      lastNumber: "30",
    },
    {
      fisrtNumber: "2",
      valueWidth: 10,
      lastNumber: "5",
    },
    {
      fisrtNumber: "1",
      valueWidth: 4,
      lastNumber: "0",
    },
  ];

  const [saveBtnUpdate, setSaveBtnUpdate] = useState(false);
  const handelSaveBtn = () => {
    setSaveBtnUpdate(!saveBtnUpdate);
  };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
  };

  const mobileimgSlider = [
    {
      imgpath: `${assets.listingimg}`,
    },
    {
      imgpath: `${assets.listingDetailsImg8}`,
    },
    {
      imgpath: `${assets.listingDetailsImg9}`,
    },
    {
      imgpath: `${assets.listingDetailsImg11}`,
    },
    {
      imgpath: `${assets.listingDetailsImg9}`,
    },
    {
      imgpath: `${assets.slider_image2}`,
    },
    {
      imgpath: `${assets.listingDetailsImg10}`,
    },
    {
      imgpath: `${assets.listingDetailsImg12}`,
    },
    {
      imgpath: `${assets.listingDetailsImg17}`,
    },
  ];
  const slider = useRef<Slider | null>(null);
  return (
    <div className="relative py-10 border-t border-newborder border-solid md:overflow-hidden md:pt-6 md:pb-0">
      <Container>
        <div className="mb-10">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
          <div className="relative hidden md:flex justify-between">
            <a
              href="#"
              className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
            >
              <i className="pr-4">
                <ArrowBackIcon />
              </i>
              Service details
            </a>
            <ul className="flex items-start">
              <li className="mr-2">
                <Button
                  type="button"
                  variant={"outline"}
                  className="bg-transparent outline-hover transition-all text-base text-primary border-newborder border-solid border px-1 py-1 w-[36px] h-[36px] rounded-full flex item-center items-center justify-center "
                  onClick={handelSaveBtn}
                >
                  <i className="mr-0">
                    {saveBtnUpdate === true ? (
                      <HeartIconSave2 />
                    ) : (
                      <HeartIconSave />
                    )}
                  </i>
                </Button>
              </li>
              <li>
                <MessagePopUpIconBtnModal />
              </li>
            </ul>
          </div>
          <div className="relative hidden sm:block pt-[20px] mx-[-15px]">
            <Slider {...settings} className="request_slider" ref={slider}>
              {mobileimgSlider.map((item, index) => (
                <div className="mb-0 relative" key={index}>
                  <figure className="m-0 leading-0 w-full h-full max-h-[200px] overflow-hidden">
                    <Image
                      className="rounded-0 w-full h-[200px] object-cover"
                      src={item.imgpath}
                      alt="image"
                      width={600}
                      height={200}
                    />
                  </figure>
                  <p className="absolute right-[10px] bottom-[10px] z-[9] text-white bg-[rgba(19,19,22,0.40)] py-[2px] rounded-[32px] px-3">
                    {index + 1}/{mobileimgSlider.length}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="relative flex items-center justify-between mt-8 sm:mt-2">
            <div className="relative">
              <h1 className="inline-flex items-center transition-all text-4xl lg:text-[30px] md:text-[24px] md:mb-[4px] text-primary font-satoshi_medium mb-4">
                Deep Tissue Massage
              </h1>
              <div className="flex items-center">
                <div className="flex items-center ">
                  <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                    <Image
                      src={assets.clientImage}
                      alt="clientimg"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover "
                    />
                    <span className="bg-green-500 border-2 border-white p-1 absolute -bottom-1 -right-1 z-10 rounded-full "></span>
                  </i>
                  <h4 className="text-sm ">Julia Brown</h4>
                </div>
                <ul className="flex items-center">
                  <li className="mr-2">
                    <p className="text-xs">4.6</p>
                  </li>
                  <li className="mr-2">
                    <StarRating totalStars={5} />
                  </li>
                  <li>
                    <p className="text-xs text-textgray">(56)</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative  md:hidden">
              <ul className="flex items-start">
                <li className="mr-4">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="bg-transparent outline-hover transition-all text-base text-primary border-newborder border-solid border px-4 py-2 flex item-center h-auto "
                    onClick={handelSaveBtn}
                  >
                    <i className="mr-2">
                      {saveBtnUpdate === true ? (
                        <HeartIconSave2 />
                      ) : (
                        <HeartIconSave />
                      )}
                    </i>
                    Save
                  </Button>
                </li>
                <li>
                  <MessagePopUpModal />
                </li>
              </ul>
            </div>
          </div>
          <div className="relative py-8 flex flex-wrap mx-[-4px] sm:hidden">
            <div className="relative w-2/3 lg:w-full px-1">
              <figure className="m-0 leading-0 w-full h-full">
                <Image
                  className="rounded-xl w-full h-full"
                  src={assets.listingDetailsImg1}
                  alt="image"
                  width={904}
                  height={368}
                />
              </figure>
            </div>
            <div className="relative w-1/3 lg:w-full flex flex-wrap px-1 mx-[-4px] lg:mx-0 lg:px-0 lg:mt-[8px]">
              <div className="w-1/2 px-1 mb-2">
                <figure className="m-0 leading-0 w-full">
                  <Image
                    className="rounded-xl w-full"
                    src={assets.listingDetailsImg2}
                    alt="image"
                    width={180}
                    height={180}
                  />
                </figure>
              </div>
              <div className="w-1/2 px-1 mb-2">
                <figure className="m-0 leading-0 w-full">
                  <Image
                    className="rounded-xl w-full"
                    src={assets.listingDetailsImg3}
                    alt="image"
                    width={180}
                    height={180}
                  />
                </figure>
              </div>
              <div className="w-1/2 px-1">
                <figure className="m-0 leading-0 w-full">
                  <Image
                    className="rounded-xl w-full"
                    src={assets.listingDetailsImg4}
                    alt="image"
                    width={180}
                    height={180}
                  />
                </figure>
              </div>
              <div className="w-1/2 px-1 relative">
                <figure className="m-0 leading-0 w-full">
                  <Image
                    className="rounded-xl w-full"
                    src={assets.listingDetailsImg5}
                    alt="image"
                    width={180}
                    height={180}
                  />
                </figure>
                <Button
                  type="button"
                  className="rounded-[8px] bg-btnBorderColor absolute bottom-[11px] backdrop-blur-[52px] left-[50%] translate-x-[-50%] transition-all text-base text-primary-foreground px-2.5 py-2 flex item-center h-auto hover:bg-black xl:text-[12px] lg:hidden"
                >
                  <i className="mr-2">
                    <DotIconBtnShow />
                  </i>
                  Show all photos
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px] lg:mx-0 lg:border-t lg:border-solid lg:border-gray-200 lg:pt-[16px] lg:mt-[20px]">
            <div className="relative w-2/3 px-4 lg:px-0 lg:w-full">
              <div className="relative pb-10 md:pb-6 border-b border-newborder border-solid">
                <h2 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-2">
                  About service
                </h2>
                <p className="text-lg text-gray-500 mb-4 md:text-[16px]">
                  I will help you put your house in order, get rid of
                  unnecessary things that litter your house, throwing away,
                  without regret. I will help you put your house in order, get
                  rid of unnecessary things that litter your house, throwing
                  away, without regret.{" "}
                </p>
                <div className="relative flex items-center">
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
              <div className="relative pt-10 md:pt-6">
                <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-6 md:text-[20px]">
                  Types of service
                </h3>
                <div className="relative flex flex-wrap">
                  <div className="relative w-1/4 lg:hidden">
                    <h4 className="text-[20px] font-satoshi_medium text-gray-900 pt-8 pb-[90px] border-b border-solid border-[rgba(19,19,22,0.03)]">
                      Package
                    </h4>
                    <ul>
                      <li className="py-[22px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                        Focus
                      </li>
                      <li className="py-[22px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                        Techniques
                      </li>
                      <li className="py-[22px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                        Benefits
                      </li>
                      <li className="py-[22px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                        Muscle Rehabilitation
                      </li>
                      <li className="py-[22px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                        Posture Improvement
                      </li>
                      <li className="py-[22px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                        Circulation Enhancement
                      </li>
                      <li className="py-[22px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                        Pain Relief
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-3/4 lg:w-full flex flex-wrap md:shadow-none shadow-[0px_12px_29px_0px_rgba(0,0,0,0.04)] rounded-[12px] overflow-hidden">
                    <div className="relative w-1/3 md:w-full md:mb-4 md:rounded-[12px] bg-[#FFF9D7]">
                      <div className="px-6 pt-6 pb-12 md:pb-6 border-b border-solid border-[rgba(19,19,22,0.03)]">
                        <h5 className="text-[20px] font-satoshi_medium text-gray-900 mb-2">
                          Training light
                        </h5>
                        <p className="text-[14px] text-gray-500 leading-normal">
                          I will help you put your house in order.
                        </p>
                      </div>
                      <ul>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Focus</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Techniques</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Benefits</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Muscle Rehabilitation</p>
                          <TableUnderlineIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Posture Improvement</p>
                          <TableUnderlineIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Circulation Enhancement</p>
                          <TableUnderlineIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Pain Relief</p>
                          <TableUnderlineIcon />
                        </li>
                      </ul>
                      <div className="relative p-6 flex items-center flex-col">
                        <p className="text-[24px] font-satoshi_medium text-gray-900 mb-6 md:text-[20px]">
                          $204887.50
                        </p>
                        <Button type="button">Reserve service</Button>
                      </div>
                    </div>
                    <div className="relative w-1/3 md:w-full md:mb-4 md:rounded-[12px] bg-[#E8FBDA]">
                      <div className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)]">
                        <h5 className="text-[20px] font-satoshi_medium text-gray-900 mb-2">
                          Medium training difficulty
                        </h5>
                        <p className="text-[14px] text-gray-500 leading-normal">
                          I will help you put your house in order.
                        </p>
                      </div>
                      <ul>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Focus</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Techniques</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Benefits</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Muscle Rehabilitation</p>
                          <TableUnderlineIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Posture Improvement</p>
                          <TableUnderlineIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Circulation Enhancement</p>
                          <TableUnderlineIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Pain Relief</p>
                          <TableUnderlineIcon />
                        </li>
                      </ul>
                      <div className="relative p-6 flex items-center flex-col">
                        <p className="text-[24px] font-satoshi_medium text-gray-900 mb-6 md:text-[20px]">
                          $368797.50
                        </p>
                        <Button type="button">Reserve service</Button>
                      </div>
                    </div>
                    <div className="relative w-1/3 md:w-full md:mb-4 md:rounded-[12px] bg-[#F5EFFD]">
                      <div className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)]">
                        <h5 className="text-[20px] font-satoshi_medium text-gray-900 mb-2">
                          Heavy: only for the experienced
                        </h5>
                        <p className="text-[14px] text-gray-500 leading-normal">
                          I will help you put your house in order.
                        </p>
                      </div>
                      <ul>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Focus</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Techniques</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Benefits</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Muscle Rehabilitation</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Posture Improvement</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Circulation Enhancement</p>
                          <TableTickIcon />
                        </li>
                        <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                          <p>Pain Relief</p>
                          <TableTickIcon />
                        </li>
                      </ul>
                      <div className="relative p-6 flex items-center flex-col">
                        <p className="text-[24px] font-satoshi_medium text-gray-900 mb-6 md:text-[20px]">
                          $491730.00
                        </p>
                        <Button type="button">Reserve service</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative py-12 md:py-6 border-t border-b border-gray-200 mt-12 md:mt-8">
                <h3 className="inline-flex items-center transition-all text-2xl md:text-[20px] text-primary font-satoshi_medium mb-6">
                  Things to know
                </h3>
                <div className="relative flex flex-wrap mx-[-12px]">
                  <div className="relative w-1/3 md:w-full md:mb-6 px-[12px]">
                    <h4 className="inline-flex items-center transition-all text-[18px] text-gray-900 font-satoshi_medium mb-2">
                      Title is here
                    </h4>
                    <p className="inline-flex items-center transition-all text-[18px] md:text-[16px] text-gray-900 font-satoshi_regular mb-3 md:mb-1.5">
                      Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <ReadMoreTextServiceDetailsModal />
                  </div>
                  <div className="relative w-1/3 md:w-full md:mb-6 px-[12px]">
                    <h4 className="inline-flex items-center transition-all text-[18px] text-gray-900 font-satoshi_medium mb-2">
                      Title is here
                    </h4>
                    <p className="inline-flex items-center transition-all text-[18px] md:text-[16px] text-gray-900 font-satoshi_regular mb-3 md:mb-1.5">
                      Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <ReadMoreTextServiceDetailsModal />
                  </div>
                  <div className="relative w-1/3 md:w-full px-[12px]">
                    <h4 className="inline-flex items-center transition-all text-[18px] text-gray-900 font-satoshi_medium mb-2">
                      Cancellation policy
                    </h4>
                    <p className="inline-flex items-center transition-all text-[18px] md:text-[16px] text-gray-900 font-satoshi_regular mb-3 md:mb-1.5">
                      This reservation is non-refundable.
                    </p>
                    <ReadMoreTextCancelationModal />
                  </div>
                </div>
              </div>
              <div className="relative py-12 lg:py-6 border-b border-gray-200">
                <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-6">
                  About me
                </h3>
                <div className="relative flex flex-wrap items-center mb-6">
                  <figure className="text-0 leading-none mr-4 relative">
                    <Image
                      className="w-[64px] h-[64px] rounded-full"
                      src={assets.imgaboutDetails1}
                      alt=""
                      width={64}
                      height={64}
                    />{" "}
                    <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                  </figure>
                  <div className="relative">
                    <h5 className="text-[24px] text-[#1F1F1F] font-satoshi_medium mb-1">
                      Julia B.
                    </h5>
                    <p className="text-[16px] text-gray-500 font-satoshi_regular">
                      Massage Specialist{" "}
                    </p>
                  </div>
                </div>
                <div className="relative flex lg:flex-wrap sm:justify-between">
                  {listDataList.map((item, index) => (
                    <div
                      className={`{relative p-4 bg-gray-50 rounded-[8px] mr-4 lg:mb-4 sm:min-w-[48%] sm:mr-0 ${
                        item.widthMobileFull === true ? "sm:!min-w-[100%]" : ""
                      }`}
                      key={index}
                    >
                      <p className="text-[14px] text-gray-500 font-satoshi_regular mb-1">
                        {item.topTetxt}
                      </p>
                      <p className="text-[16px] text-gray-900 font-satoshi_medium mb-1">
                        {item.BtmText}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="relative my-4 lg:mt-0">
                  <p className="text-[18px] text-gray-500 font-satoshi_regular mb-4 leading-[1.6] sm:text-[16px]">
                    I will help you put your house in order, get rid of
                    unnecessary things that litter your house, throwing away,
                    without regret. I will help you put your house in order, get
                    rid of unnecessary things that litter your house, throwing
                    away, without regret.{" "}
                  </p>
                  <p className="text-[18px] text-gray-500 font-satoshi_regular leading-[1.6] sm:text-[16px]">
                    I will help you put your house in order, get rid of
                    unnecessary things that litter your house, throwing away,
                    without regret. I will help you put your house in order, get
                    rid of unnecessary things that litter your house, throwing
                    away, without regret.{" "}
                  </p>
                </div>
                <div className="relative flex items-center">
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
              <div className="relative">
                <ServiceDetailsListSlider />
              </div>
              <div className="realtive py-12 md:py-6 border-t border-b border-gray-200 md:border-0">
                <div className="relative flex">
                  <div className="relative w-2/4 md:w-full">
                    <h3 className="text-[24px] text-gray-900 font-satoshi_medium mb-1 md:text-[20px]">
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
                  <div className="relative w-2/4 md:hidden">
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
                <div className="relative pt-12 md:pt-8">
                  <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-4 md:text-[20px] md:mb-2">
                    All Reviews
                  </h3>
                  <div className="realtive">
                    <div className="relative p-8 md:p-4 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-4 rounded-[8px]">
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
                            Julia B.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Massage Specialist{" "}
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
                    <div className="relative p-8 md:p-4 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-4 rounded-[8px]">
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
                            Julia B.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Massage Specialist{" "}
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
                    <div className="relative p-8 md:p-4 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-6 rounded-[8px]">
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
                            Julia B.
                          </h5>
                          <p className="text-[14px] text-gray-400 font-satoshi_regular">
                            Massage Specialist{" "}
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
                    <ul className="flex flex-wrap items-center justify-center">
                      <li className="px-1.5 md:px-[2px]">
                        <Button
                          type="button"
                          className="bg-transparent transition-all w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white"
                        >
                          <PaginationArrow1 />
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px]">
                        <Button
                          type="button"
                          className="bg-gray-900 transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          1
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px]">
                        <Button
                          type="button"
                          className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          2
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px]">
                        <Button
                          type="button"
                          className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          3
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px]  md:hidden">
                        <Button
                          type="button"
                          className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          4
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px] md:block hidden">
                        <Button
                          type="button"
                          className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          ...
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px]">
                        <Button
                          type="button"
                          className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          5
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px] md:hidden">
                        <Button
                          type="button"
                          className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          ...
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px] md:hidden">
                        <Button
                          type="button"
                          className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                        >
                          23
                        </Button>
                      </li>
                      <li className="px-1.5 md:px-[2px]">
                        <Button
                          type="button"
                          className="bg-transparent transition-all w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white"
                        >
                          <PaginationArrow2 />
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-4 lg:w-full lg:px-0 lg:mt-[10px]">
              <div className="sticky top-[40px] ">
                {/* <ReserveServiceCard /> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="sticky bottom-0 left-0 w-full p-4 border-t border-solid border-gray-200 bg-white md:px-0 md:py-4">
        <Container>
          <div className="flex justify-between items-center md:flex-wrap">
            <h4 className="flex items-center text-[16px] text-gray-900 md:w-full md:mb-3">
              <i className="pr-2">
                <InfoNotiFicPublishIcon />
              </i>
              This is a preview mode, so you can check out how clients will
              experience your service!
            </h4>
            <ul className="flex items-center md:justify-end md:ml-auto">
              <li className="pr-2">
                <Button
                  type="button"
                  variant={"outline"}
                  className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white md:hidden"
                >
                  Cancel
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  className="rounded-[50px] px-[20px] py-[6px] text-white  hover:bg-secondary  hover:text-white"
                >
                  Publish
                </Button>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}
