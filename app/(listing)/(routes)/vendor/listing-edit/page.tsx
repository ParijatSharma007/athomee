/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import CommonTipsListCart from "@/components/CommonTipsListCart/CommonTipsListCart";
import Container from "@/components/Container";
import ReadMoreTextCancelationModal from "@/components/ReadMoreTextCancelationModal/ReadMoreTextCancelationModal";
import ReadMoreTextServiceDetailsModal from "@/components/ReadMoreTextServiceDetailsModal/ReadMoreTextServiceDetailsModal";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import PreviewTriIcon from "@/json/icons/PreviewTriIcon";
import TableTickIcon from "@/json/icons/TableTickIcon";
import TableUnderlineIcon from "@/json/icons/TableUnderlineIcon";
import ThreeDot from "@/json/icons/ThreeDot";
import Image from "next/image";
import { Button } from "../../../../../components/ui/CustomButtonPrimary/CustomButtonPrimary";

import TipListingListModal from "@/components/TipListingListModal/TipListingListModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const tableHeadlist = [
  {
    tableHeadTitle: "Monday",
  },
  {
    tableHeadTitle: "Tuesday",
  },
  {
    tableHeadTitle: "Wednesday",
  },
  {
    tableHeadTitle: "Thursday",
  },
  {
    tableHeadTitle: "Friday",
  },
  {
    tableHeadTitle: "Saturday",
  },
  {
    tableHeadTitle: "Sunday",
  },
];

const invoices = [
  {
    monData: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
      {
        dataTxt: "2:30am - 4:00pm",
      },
    ],
    tueData: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
    ],
    wedData: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
      {
        dataTxt: "2:30am - 4:00pm",
      },
    ],
    thusData: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
    ],
    friData: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
      {
        dataTxt: "2:30am - 4:00pm",
      },
    ],
    satData: [
      {
        dataTxt: "Unavailable",
      },
    ],
    sunData: [
      {
        dataTxt: "Unavailable",
      },
    ],
  },
];

const invoicesTwo = [
  {
    titleTxtdata: "Monday",
    dataListall: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
      {
        dataTxt: "2:30am - 4:00pm",
      },
    ],
  },
  {
    titleTxtdata: "Tuesday",
    dataListall: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
    ],
  },
  {
    titleTxtdata: "Wednesday",
    dataListall: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
      {
        dataTxt: "2:30am - 4:00pm",
      },
    ],
  },
  {
    titleTxtdata: "Thursday",
    dataListall: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
    ],
  },
  {
    titleTxtdata: "Friday",
    dataListall: [
      {
        dataTxt: "10:30am - 1:00pm",
      },
      {
        dataTxt: "2:30am - 4:00pm",
      },
    ],
  },
  {
    titleTxtdata: "Saturday",
    dataListall: [
      {
        dataTxt: "Unavailable",
      },
    ],
  },
  {
    titleTxtdata: "Sunday",
    dataListall: [
      {
        dataTxt: "Unavailable",
      },
    ],
  },
];
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
  centerMode: true,
  centerPadding: "20px",
};

const mobileimgSlider = [
  {
    imgpath: `${assets.pricingImgListImg1}`,
  },
  {
    imgpath: `${assets.pricingImgListImg2}`,
  },
  {
    imgpath: `${assets.pricingImgListImg3}`,
  },
  {
    imgpath: `${assets.pricingImgListImg1}`,
  },
];

export default function ListingEdit() {
  return (
    <div className="relative py-10 md:py-6 lg:overflow-hidden">
      <div className="relative hidden md:flex justify-between border-b border-solid border-gray-200 pb-4 px-4">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
          Service editing
        </a>
        <div className="relative flex items-center">
          <TipListingListModal />
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-tranparent hover:border-black hover:text-black border-[#E4E4E7] ml-2 mr-2 p-2 w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <i className="">
              <PreviewTriIcon />
            </i>
          </Button>
          <Button
            variant="outline"
            className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <ThreeDot />
          </Button>
        </div>
      </div>
      <Container>
        <div className="relative mb-6">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[80%] pr-[32px] lg:w-full lg:pr-0">
            <div className="relative flex justify-between item-center border-b border-solid border-gray-100 pb-6 mb-10 md:hidden">
              <h1 className="text-[36px] text-gray-900 lg:text-[30px]">
                Deep Tissue Massage
              </h1>
              <div className="relative flex items-center">
                <Button
                  type="button"
                  variant={"outline"}
                  className="hover:bg-tranparent hover:border-black hover:text-black border-[#E4E4E7] mr-3"
                >
                  <i className="pr-2">
                    <PreviewTriIcon />
                  </i>
                  Preview
                </Button>
                <Button
                  variant="outline"
                  className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                >
                  <ThreeDot />
                </Button>
              </div>
            </div>
            <div className="relative flex justify-between item-center mb-8 md:mb-4">
              <h2 className="text-[24px] text-gray-900 md:text-[20px]">
                Title and description
              </h2>
              <div className="relative flex items-center">
                <Button
                  type="button"
                  variant={"outline"}
                  className="hover:bg-secondary  border-[#E4E4E7] sm:text-[14px] sm:py-2 sm:px-4"
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className="relative mb-10">
              <h3 className="hidden text-[20px] text-gray-900 mb-2 md:block md:mb-2 md:text-[16px]">
                Deep Tissue Massage
              </h3>
              <Badge className="bg-gray-50 border-solid border-gray-100 rounded-[32px] text-gray-600 py-1.5 px-4 mb-5 md:text-[14px]">
                Spa and Massage Therapy
              </Badge>
              <h3 className="text-[20px] text-gray-900 mb-2 md:hidden">
                Deep Tissue Massage
              </h3>
              <p className="text-[16px] font-satoshi_regular text-gray-800 mb-3">
                Experience the ultimate relaxation and relief with our Deep
                Tissue Massage service. Our skilled therapists use precise
                techniques to target deep layers of muscle tissue, releasing
                tension and promoting healing. Whether you&#39;re seeking relief
                from muscle pain or simply want to unwind, our Deep Tissue
                Massage is designed to rejuvenate your body and mind.
              </p>
              <p className="text-[16px] font-satoshi_regular text-gray-800 mb-3">
                Benefits:
              </p>
              <ul className="list-disc pl-5 mb-3">
                <li className="!list-dish text-[16px] font-satoshi_regular text-gray-800 mb-1.5">
                  Alleviate chronic muscle tension and stiffness
                </li>
                <li className="!list-dish text-[16px] font-satoshi_regular text-gray-800 mb-1.5">
                  Improve blood circulation and lymphatic flow
                </li>
                <li className="!list-dish text-[16px] font-satoshi_regular text-gray-800 mb-1.5">
                  Reduce stress and promote relaxation
                </li>
                <li className="!list-dish text-[16px] font-satoshi_regular text-gray-800 mb-1.5">
                  Enhance flexibility and range of motion
                </li>
              </ul>
              <p className="text-[16px] font-satoshi_regular text-gray-800 mb-3">
                Our trained therapists customize each session to address your
                specific needs. With a focus on providing a tranquil and
                soothing experience, our Deep Tissue Massage is the perfect
                choice for those looking to rejuvenate and refresh. Book your
                session now and embark on a journey to renewed vitality.
              </p>
            </div>
            <div className="relative border-t border-solid border-gray-100 pt-10 mb-10 md:pt-6 md:mb-6">
              <div className="relative flex justify-between item-center mb-8 md:mb-4">
                <h2 className="text-[24px] text-gray-900 md:text-[20px] md:leading-[1.8]">
                  How to handle the bookings?
                </h2>
                <div className="relative flex items-center">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="hover:bg-secondary  border-[#E4E4E7]"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="relative">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-start">
                    <RadioGroupItem
                      value="default"
                      id="1"
                      className="mr-3 mt-1"
                    />
                    <Label
                      htmlFor="1"
                      className="block text-[14px] font-satoshi_regular text-gray-500 leading-[1.3]"
                    >
                      <span className="block text-[16px] font-satoshi_medium text-gray-900 mb-1">
                        Direct bookings
                      </span>
                      Streamline reservations by allowing clients to instantly
                      book <br />
                      your services without additional approval steps.
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="relative border-t border-solid border-gray-100 pt-10 mb-10 md:pt-6 md:mb-6">
              <div className="relative flex justify-between item-center mb-8 md:mb-4">
                <h2 className="text-[24px] text-gray-900 md:text-[20px] md:leading-[1.8]">
                  Photos
                </h2>
                <div className="relative flex items-center">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="hover:bg-secondary  border-[#E4E4E7]"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="relative flex flex-wrap mx-[-4px] md:hidden">
                <div className="relative w-1/3 px-[4px]">
                  <figure className="w-full m-0 leading-0">
                    <Image
                      src={assets.pricingImgListImg1}
                      className="w-full rounded-[8px] object-cover"
                      alt=""
                      width={330}
                      height={216}
                    />
                  </figure>
                </div>
                <div className="relative w-1/3 px-[4px]">
                  <figure className="w-full m-0 leading-0">
                    <Image
                      src={assets.pricingImgListImg2}
                      className="w-full rounded-[8px] object-cover"
                      alt=""
                      width={330}
                      height={216}
                    />
                  </figure>
                </div>
                <div className="relative w-1/3 px-[4px]">
                  <figure className="w-full m-0 leading-0">
                    <Image
                      src={assets.pricingImgListImg3}
                      className="w-full rounded-[8px] object-cover"
                      alt=""
                      width={330}
                      height={216}
                    />
                  </figure>
                </div>
              </div>
              <div className="relative hidden md:block pt-[10px] sliderListingEdit">
                <Slider {...settings}>
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
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="relative border-t border-solid border-gray-100 pt-10 mb-10 md:pt-6 md:mb-6">
              <div className="relative flex justify-between item-center mb-8 md:mb-6">
                <h2 className="text-[24px] text-gray-900 md:text-[20px] md:leading-[1.8]">
                  Pricing
                </h2>
                <div className="relative flex items-center">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="hover:bg-secondary  border-[#E4E4E7]"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="relative flex flex-wrap md:hidden">
                <div className="relative w-1/4 lg:hidden">
                  <h4 className="text-[20px] font-satoshi_medium text-gray-900 pt-8 pb-[90px] border-b border-solid border-[rgba(19,19,22,0.03)] ">
                    Package
                  </h4>
                  <ul>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      Focus
                    </li>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      Techniques
                    </li>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      Benefits
                    </li>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      Muscle Rehabilitation
                    </li>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      Posture Improvement
                    </li>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      Circulation Enhancement
                    </li>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
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
                      <Button type="button" className="hidden">
                        Reserve service
                      </Button>
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
                      <Button type="button" className="hidden">
                        Reserve service
                      </Button>
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
                      <Button type="button" className="hidden">
                        Reserve service
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block sliderListingEdit">
                <Slider {...settings}>
                  <div className="relative md:rounded-[12px] bg-[#FFF9D7]">
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
                  <div className="relative md:rounded-[12px] bg-[#E8FBDA]">
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
                  <div className="relative md:rounded-[12px] bg-[#F5EFFD]">
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
                </Slider>
              </div>
            </div>
            <div className="relative border-t border-solid border-gray-100 pt-10 mb-10 md:pt-6 md:mb-6">
              <div className="relative flex justify-between item-center mb-8 md:mb-6">
                <h2 className="text-[24px] text-gray-900 md:text-[20px] md:leading-[1.8]">
                  Availability
                </h2>
                <div className="relative flex items-center">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="hover:bg-secondary  border-[#E4E4E7]"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="relative md:hidden">
                <Table className="border-solid border-gray-200 border rounded-[12px] border-separate border-spacing-0">
                  <TableHeader>
                    <TableRow>
                      {tableHeadlist.map((item, index) => (
                        <TableHead
                          key={index}
                          className="text-center border-gray-200 border-b border-r last:border-r-0"
                        >
                          {item.tableHeadTitle}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center border-gray-200 border-r">
                          {data.monData.map((items, index) => (
                            <p key={index}>{items.dataTxt}</p>
                          ))}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {data.tueData.map((items, index) => (
                            <p key={index}>{items.dataTxt}</p>
                          ))}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {data.wedData.map((items, index) => (
                            <p key={index}>{items.dataTxt}</p>
                          ))}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {data.thusData.map((items, index) => (
                            <p key={index}>{items.dataTxt}</p>
                          ))}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {data.friData.map((items, index) => (
                            <p key={index}>{items.dataTxt}</p>
                          ))}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {data.satData.map((items, index) => (
                            <p key={index}>{items.dataTxt}</p>
                          ))}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r-0">
                          {data.sunData.map((items, index) => (
                            <p key={index}>{items.dataTxt}</p>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="relative hidden md:block">
                <div className="flex w-full border border-gray-200 border-solid rounded-[12px]">
                  <ul className="w-full">
                    {invoicesTwo.map((data, index) => (
                      <li
                        className="text-left border-gray-200 border-b last:border-b-0 flex items-center"
                        key={index}
                      >
                        <p className="px-4 w-[50%] sm:w-[40%]">
                          {data.titleTxtdata}
                        </p>
                        <div
                          key={index}
                          className="w-[50%] sm:w-[60%] border-gray-200 border-l text-gray-500 py-3"
                        >
                          <p className="text-left px-4">
                            {data.dataListall.map((items, index) => (
                              <span key={index} className="block">
                                {items.dataTxt}
                              </span>
                            ))}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative border-t border-solid border-gray-100 pt-10 mb-10 md:pt-6 md:mb-6">
              <div className="relative flex justify-between item-center mb-8 md:mb-6">
                <h2 className="text-[24px] text-gray-900 md:text-[20px] md:leading-[1.8]">
                  Things to know
                </h2>
                <div className="relative flex items-center">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="hover:bg-secondary  border-[#E4E4E7]"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="relative flex flex-wrap mx-[-12px]">
                <div className="relative w-1/3 md:w-full md:mb-6 px-[12px]">
                  <h4 className="inline-flex items-center transition-all text-[18px] text-gray-900 font-satoshi_medium mb-2">
                    Title is here
                  </h4>
                  <p className="inline-flex items-center transition-all text-[18px] md:text-[16px] text-gray-900 font-satoshi_regular mb-3 md:mb-1.5">
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                  </p>
                  <ReadMoreTextServiceDetailsModal />
                </div>
                <div className="relative w-1/3 md:w-full md:mb-6 px-[12px]">
                  <h4 className="inline-flex items-center transition-all text-[18px] text-gray-900 font-satoshi_medium mb-2">
                    Title is here
                  </h4>
                  <p className="inline-flex items-center transition-all text-[18px] md:text-[16px] text-gray-900 font-satoshi_regular mb-3 md:mb-1.5">
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
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
            <div className="relative border-t border-solid border-gray-100 pt-10 md:pt-6">
              <div className="relative flex justify-between item-center mb-8 md:mb-6">
                <h2 className="text-[24px] text-gray-900 md:text-[20px] md:leading-[1.8]">
                  Location
                </h2>
                <div className="relative flex items-center">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="hover:bg-secondary  border-[#E4E4E7]"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="relative w-full md:hidden">
                <Image
                  className="w-full rounded-[12px]"
                  src={assets.mapImgMain}
                  alt="map"
                  width={1010}
                  height={205}
                />
              </div>
              <div className="relative w-full hidden md:block">
                <Image
                  className="w-full rounded-[12px]"
                  src={assets.mapNewImgWraploc1}
                  alt="map"
                  width={1010}
                  height={205}
                />
              </div>
            </div>
          </div>
          <div className="w-[20%] lg:hidden">
            <div className="sticky top-8">
              <CommonTipsListCart
                title="Tip 1"
                subText="Create a title that's both descriptive and attention-grabbing. A well-crafted title can pique interest."
                bgColor="#FFF9D7"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
