"use client";

import ChangeAddressModal from "@/components/ChangeAddressModal/ChangeAddressModal";
import ChangeDateTimeModal from "@/components/ChangeDateTimeModal/ChangeDateTimeModal";
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import Container from "@/components/Container";
import ContasctVendorModal from "@/components/ContasctVendorModal/ContasctVendorModal";
import DeletePaymentModal from "@/components/DeletePaymentModal/DeletePaymentModal";
import { MessageThumb } from "@/components/MessageThumb/MessageThumb";
import ReservationVendorContactModal from "@/components/ReservationVendorContactModal/ReservationVendorContactModal";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import assets from "@/json/assets";
import ArrowNarrowLeft from "@/json/icons/ArrowNarrowLeft";
import CardIcon from "@/json/icons/CardIcon";
import DotIconBtnShow from "@/json/icons/DotIconBtnShow";
import GiftIcon from "@/json/icons/GiftIcon";
import InfoIconGray from "@/json/icons/InfoIconGray";
import MsgTick from "@/json/icons/MsgTick";
import PencilIcon from "@/json/icons/PencilIcon";
import { SeachBlack } from "@/json/icons/SeachBlack";
import Image from "next/image";

export default function Index() {
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
          className="mb-8 sm:text-[30px]"
        />
        <div className="flex flex-wrap flex-row">
          <div className=" w-[60%] pr-8 border-r border-gray-100 md:w-full md:pr-0 md:border-r-0">
            <div className="relative pb-6 flex flex-wrap -mx-1">
              <div className="relative w-1/2 px-1 sm:w-full sm:mb-2">
                <figure className="m-0 leading-0 w-full h-full max-h-[216px] sm:max-h-none">
                  <Image
                    className="rounded-xl w-full h-full"
                    src={assets.listingDetailsImg1}
                    alt="image"
                    width={308}
                    height={216}
                  />
                </figure>
              </div>
              <div className="relative w-1/2 flex flex-wrap px-1 sm:w-full">
                <div className="w-1/2 px-1 mb-2 sm:w-full">
                  <figure className="m-0 leading-0 w-full h-[104px] sm:h-auto">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={assets.listingDetailsImg2}
                      alt="image"
                      width={180}
                      height={105}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1 mb-2 sm:w-full">
                  <figure className="m-0 leading-0 w-full h-[104px] sm:h-auto">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={assets.listingDetailsImg3}
                      alt="image"
                      width={180}
                      height={105}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1 sm:w-full sm:mb-2">
                  <figure className="m-0 leading-0 w-full h-[104px] sm:h-auto">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={assets.listingDetailsImg4}
                      alt="image"
                      width={180}
                      height={105}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1 relative sm:w-full">
                  <figure className="m-0 leading-0 w-full h-[104px] sm:h-auto">
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

            <div className="flex items-center justify-between flex-wrap mb-4">
              <div>
                <h3 className="mb-1">Deep Tissue Massage</h3>
                <p>30-Minute</p>
              </div>
              <div>
                {/* <Badge className="bg-[#F5EFFD] ml-3 text-[#7757BD] border-[1px]  border-[#7757BD] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg">
                  Upcoming
                </Badge> */}
                {/* <Badge className="bg-[#FFF8EB] ml-3 text-[#F59F00] border-[1px]  border-[#FFEAC2] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg">
                  <i className="flex items-center justify-center mr-2">
                    <PencilIcon />
                  </i>
                  Requested
                </Badge> */}
                {/* <Badge className="bg-[#EBFFEB] ml-3 text-[#04D100] border-[1px]  border-[#C3FFC2] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg">
                  Completed
                </Badge> */}
                {/* <Badge className="bg-[#FAFAFA] ml-3 text-[#70707B] border-[1px]  border-[#F4F4F5] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg">
                  Declined
                </Badge> */}
                <Badge className="bg-[#FEF2F2] ml-3 text-[#EF4444] border-[1px]  border-[#FEE2E2] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg md:ml-0 md:mt-3">
                  <i className="flex items-center justify-center mr-2">
                    <PencilIcon />
                  </i>
                  Canceled
                </Badge>
              </div>
            </div>
            <div className="py-4 border-b border-gray-100 flex items-center justify-between flex-wrap">
              <div>
                <p className="text-gray-400 text-sm mb-1">Category</p>
                <h4 className="text-base">Cleaning Services</h4>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="transition-all text-[14px] rounded-[100px] font-satoshi_medium border-none hover:bg-primary hover:text-white"
                >
                  Change
                </Button>
              </div>
            </div>
            <div className="py-4 border-b border-gray-100">
              <p className="text-gray-400 text-sm mb-1">Reservation number</p>
              <h4 className="text-base">#4947408635</h4>
            </div>
            <div className="py-4 border-b border-gray-100 flex items-center justify-between flex-wrap">
              <div>
                <p className="text-gray-400 text-sm mb-1">Vendor</p>
                <div className="flex items-center ">
                  <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                    <Image
                      src={assets.health_icon}
                      alt="clientimg"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover "
                    />
                  </i>
                  <h4 className="text-sm ">Health Life</h4>
                </div>
              </div>
              <div>
                <ReservationVendorContactModal />
              </div>
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

              <div>{/* <ChangeAddressModal /> */}</div>
            </div>
            <div className="py-4 flex items-center justify-between flex-wrap">
              <div>
                <p className="text-gray-400 text-sm mb-1">Date & time</p>
                <h4 className="text-base">20 May 2023, 10:00 AM</h4>
              </div>
              {/* <ChangeDateTimeModal /> */}
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
              {/* <CancelReservationModal /> */}
              <p className="inline-flex items-center font-satoshi_medium text-sm">
                <span className=" inline-flex items-center justify-center mr-1">
                  <GiftIcon />
                </span>
                Gift
              </p>
            </div>

            <div className="flex border border-gray-200 rounded-lg mt-10 md:flex-wrap">
              <div className="w-[278px] border-gray-200 border-r md:w-full md:border-r-0">
                <div className="">
                  <SerachInputComponent
                    placeholderText="Search message"
                    className={
                      "bg-transparent px-4 py-8 border-gray-100 border-b rounded-none placeholder:text-gray-900"
                    }
                    classNameForInput="pl-10"
                    classNameForSearchIcon="absolute p-0"
                    searchIcon={<SeachBlack />}
                  />
                  <div className="h-[400px] overflow-y-auto md:h-[200px]">
                    <MessageThumb
                      textContent="Lorem ipsum dolor sit amet somethi..."
                      showUnread
                      userActive
                      showTimePanel
                    />
                  </div>
                </div>
              </div>
              <div className="w-[calc(100%-278px)] md:w-full">
                <div className="border-gray-200 border-b">
                  <MessageThumb
                    textContent="Last seen: 54 min ago"
                    showUnread
                  />
                </div>
                <div className="flex">
                  <div className="w-full">
                    <div className="px-6 pt-6 h-[400px] overflow-y-auto">
                      <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                        <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                          Amelia G.
                          <span className="pl-1 font-normal text-gray-400 text-sm">
                            (You)
                          </span>
                        </h3>
                        <p className="text-base	text-gray-900">
                          Hello! I offer a variety of massage services designed
                          to promote relaxation and well-being. We have Swedish
                          massage, which uses gentle strokes to ease tension,
                          and deep tissue massage, which targets deeper muscle
                          layers to alleviate chronic pain.
                        </p>
                        <div className="flex justify-end items-center	pt-1">
                          <p className="text-xs	text-gray-400">5:50 PM</p>
                          <i className="pl-[5px]">
                            <MsgTick />
                          </i>
                        </div>
                      </div>

                      <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                        <p className="text-center px-4 bg-white inline-flex mx-auto">
                          3 August 2023
                        </p>
                      </div>

                      <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                        <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                          Amelia G.
                          <span className="pl-1 font-normal text-gray-400 text-sm">
                            (You)
                          </span>
                        </h3>
                        <p className="text-base	text-gray-900">
                          Our massage sessions are available in different
                          durations: 30 minutes, 60 minutes, and 90 minutes. The
                          30-minute session is more focused on specific areas,
                          while the 60-minute session allows for a more balanced
                          approach, covering multiple areas. The 90-minute
                          session offers a thorough, full-body massage with
                          extra time to target specific concerns.
                        </p>
                        <div className="flex justify-end items-center	pt-1">
                          <p className="text-xs	text-gray-400">5:50 PM</p>
                          <i className="pl-[5px]">
                            <MsgTick />
                          </i>
                        </div>
                      </div>

                      <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                        <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                          Amelia G.
                          <span className="pl-1 font-normal text-gray-400 text-sm">
                            (You)
                          </span>
                        </h3>
                        <p className="text-base	text-gray-900">
                          Hello! I offer a variety of massage services designed
                          to promote relaxation and well-being. We have Swedish
                          massage, which uses gentle strokes to ease tension,
                          and deep tissue massage, which targets deeper muscle
                          layers to alleviate chronic pain.
                        </p>
                        <div className="flex justify-end items-center	pt-1">
                          <p className="text-xs	text-gray-400">5:50 PM</p>
                          <i className="pl-[5px]">
                            <MsgTick />
                          </i>
                        </div>
                      </div>

                      <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                        <p className="text-center px-4 bg-white inline-flex mx-auto">
                          3 August 2023
                        </p>
                      </div>

                      <div className="flex items-end mb-4">
                        <figure className="rounded-full overflow-hidden w-[32px] h-[32px] min-w-[32px] flex mr-4">
                          <Image
                            alt=""
                            width={32}
                            height={32}
                            src={assets.msg_user}
                          />
                        </figure>
                        <div className="bg-gray-50 px-3 py-2 rounded-md max-w-[440px]">
                          <h3 className="text-[#246AEA] text-sm font-medium	mb-[5px] ">
                            Amelia G.
                            <span className="pl-1 font-normal text-gray-400 text-sm">
                              (You)
                            </span>
                          </h3>
                          <p className="text-base	text-gray-900">
                            Hello! I offer a variety of massage services
                            designed to promote relaxation and well-being. We
                            have Swedish massage, which uses gentle strokes to
                            ease tension, and deep tissue massage, which targets
                            deeper muscle layers to alleviate chronic pain.
                          </p>
                          <div className="flex justify-end items-center	pt-1">
                            <p className="text-xs	text-gray-400">5:50 PM</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                        <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                          Amelia G.
                          <span className="pl-1 font-normal text-gray-400 text-sm">
                            (You)
                          </span>
                        </h3>
                        <p className="text-base	text-gray-900">
                          Our massage sessions are available in different
                          durations: 30 minutes, 60 minutes, and 90 minutes. The
                          30-minute session is more focused on specific areas,
                          while the 60-minute session allows for a more balanced
                          approach, covering multiple areas. The 90-minute
                          session offers a thorough, full-body massage with
                          extra time to target specific concerns.
                        </p>
                        <div className="flex justify-end items-center	pt-1">
                          <p className="text-xs	text-gray-400">5:50 PM</p>
                          <i className="pl-[5px]">
                            <MsgTick />
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] pl-16 md:w-full md:mt-4 md:pl-0">
            <h3 className="text-2xl mb-[20px]">Payment info</h3>
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
                <p className=" text-red-500">Refunded</p>
                <p className=" text-red-500">$5.00</p>
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
              <div className="flex justify-between items-center flex-wrap pt-[20px">
                <div className="flex justify-start items-center ">
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
                <DeletePaymentModal />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
