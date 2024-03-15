"use client";

import CancelReservationModal from "@/components/CancelReservationModal/CancelReservationModal";
import ChangeReservationStatusModal from "@/components/ChangeReservationStatusModal/ChangeReservationStatusModal";
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import Container from "@/components/Container";
import ContasctVendorModal from "@/components/ContasctVendorModal/ContasctVendorModal";
import HelpCenterModal from "@/components/HelpCenterModal/HelpCenterModal";

import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assets from "@/json/assets";
import ArrowNarrowLeft from "@/json/icons/ArrowNarrowLeft";
import CardIcon from "@/json/icons/CardIcon";
import DotIconBtnShow from "@/json/icons/DotIconBtnShow";
import InfoIconGray from "@/json/icons/InfoIconGray";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Page() {
  const reservationStatus = useAppSelector(
    (state) => state.globalSlice.changeStatus
  );

  console.log("statusvcbxcvb", reservationStatus);
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

  const slider = useRef(null);

  return (
    <div className="pt-8 pb-16">
      <Container>
        <Button
          variant="outline"
          className="border-0 mb-8 font-satoshi_medium text-base transition-all hover:text-inherit hover:bg-inherit hover:scale-110 p-0 md:mb-4 md:h-auto"
        >
          <i className="inline-block mr-4">
            <ArrowNarrowLeft />
          </i>
          Back
        </Button>
        <CommonHeader
          title="Reservation details"
          className="mb-8 md:mb-[20px] md:text-[30px]"
        />
        <div className="flex flex-wrap flex-row">
          <div className=" w-[60%] pr-8 border-r border-gray-100 xl:pr-4 lg:w-full lg:border-0 lg:pr-0">
            <div className="relative pb-6 flex flex-wrap -mx-1 md:hidden">
              <div className="relative w-1/2 px-1">
                <figure className="m-0 leading-0 w-full h-full max-h-[216px]">
                  <Image
                    className="rounded-xl w-full h-full"
                    src={assets.listingDetailsImg1}
                    alt="image"
                    width={308}
                    height={216}
                  />
                </figure>
              </div>
              <div className="relative w-1/2 flex flex-wrap px-1 ">
                <div className="w-1/2 px-1 mb-2">
                  <figure className="m-0 leading-0 w-full h-[104px]">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={assets.listingDetailsImg2}
                      alt="image"
                      width={180}
                      height={105}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1 mb-2">
                  <figure className="m-0 leading-0 w-full h-[104px]">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={assets.listingDetailsImg3}
                      alt="image"
                      width={180}
                      height={105}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1">
                  <figure className="m-0 leading-0 w-full h-[104px]">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={assets.listingDetailsImg4}
                      alt="image"
                      width={180}
                      height={105}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1 relative">
                  <figure className="m-0 leading-0 w-full h-[104px]">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={assets.listingDetailsImg5}
                      alt="image"
                      width={180}
                      height={105}
                    />
                  </figure>
                  <Button
                    type="button"
                    className="rounded-[8px] bg-btnBorderColor absolute bottom-[7px] backdrop-blur-[52px] right-[11px] transition-all text-base text-primary-foreground px-2.5 py-2 flex item-center h-auto hover:bg-black"
                  >
                    <i className="mr-2">
                      <DotIconBtnShow />
                    </i>
                    Show all photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block pt-[20px] md:pt-0">
              <div className="hidden md:block absolute left-4 top-6 z-10">
                <ChangeReservationStatusModal />
              </div>
              <Slider {...settings} className="request_slider" ref={slider}>
                {mobileimgSlider.map((item, index) => (
                  <div className="mb-0 relative" key={index}>
                    <figure className="m-0 leading-0 w-full h-full max-h-[200px] overflow-hidden">
                      <Image
                        className="rounded-[8px] w-full h-[200px] object-cover"
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
            <div className="flex items-center justify-between flex-wrap mb-4 md:mt-[20px]">
              <div>
                <h3 className="mb-1 md:text-[24px]">Deep Tissue Massage</h3>
                <p className="md:text-sm">30-Minute</p>
              </div>
              <div className="md:hidden">
                <ChangeReservationStatusModal />
              </div>
            </div>
            <div className="py-4 border-b border-gray-100">
              <p className="text-gray-400 text-sm mb-1">Reservation number</p>
              <h4 className="text-base">#4947408635</h4>
            </div>
            <div className="py-4 border-b border-gray-100 flex items-center justify-between flex-wrap">
              <div>
                <p className="text-gray-400 text-sm mb-1">Client</p>
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
              </div>
              <div>
                <ContasctVendorModal />
              </div>
            </div>
            <div className="py-4 border-b border-gray-100 flex items-center justify-between flex-wrap">
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <h4 className="text-base">
                  25 Draper Street, San Francisco, CA, USA
                </h4>
              </div>
            </div>
            <div className="py-4 flex items-center justify-between flex-wrap">
              <div>
                <p className="text-gray-400 text-sm mb-1">Date & time</p>
                <h4 className="text-base">20 May 2023, 10:00 AM</h4>
              </div>
            </div>

            <div className="flex justify-between items-center rounded-xl bg-[#F7F4F1] py-[20px] px-6 mt-4">
              <div>
                <h4 className="flex text-base mb-1">
                  30-Minute{" "}
                  <span className="inline-block ml-2 font-satoshi_regular text-gray-500">
                    $50
                  </span>
                </h4>
                <p>Complex basic massage to revitalize.</p>
              </div>

              <CancelReservationModal />
            </div>
          </div>
          <div className="w-[40%] pl-16 xl:pl-4 lg:w-full lg:pl-0">
            <h3 className="text-2xl mb-[20px] md:mt-8">Payment info</h3>
            <div>
              <div className="flex justify-between items-center mb-3">
                <p>Deep Tissue Massage, 30-Minute</p>
                <p>$50.00</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p>Wrap it up as a gift!</p>
                <p>$7.00</p>
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="flex items-center">
                  Service fee
                  <span className="inline-block ml-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <i>
                            <InfoIconGray />
                          </i>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, dolor.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </p>
                <p>$26.00</p>
              </div>

              <div className="flex justify-between items-center py-[20px] border-b border-t border-gray-100">
                <h4>Total</h4>
                <h4>$293.00</h4>
              </div>
              <div className="flex justify-between items-center py-[20px]">
                <p className="flex items-center">
                  Blocked security deposit
                  <span className="inline-block ml-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <i>
                            <InfoIconGray />
                          </i>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, dolor.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </p>
                <p>$293.00</p>
              </div>
              <div className="flex justify-start items-center py-[20px] border-b border-gray-100">
                <i className="inline-block mr-[16px] px-[12px] py-[8px] border border-gray-100 rounded-[8px]">
                  <CardIcon />
                </i>
                <div>
                  <p className="text-primary text-[16px] font-satoshi_medium">
                    Ending in 6375
                  </p>
                  <p className="text-[var(--textgray)] text-[12px]">
                    Expiration date: 08/2031
                  </p>
                </div>
              </div>
              <div className="text-sm font-satoshi_regular">
                If you have any questions about payment or your reservation, you
                can contact the{" "}
                <div className="inline-block">
                  <HelpCenterModal />
                </div>
                .
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
