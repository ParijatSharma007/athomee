/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import { getServiceDetails } from "@/api/functions/admin.api";
import Container from "@/components/Container";
import Loading from "@/components/Loading/Loading";
import ReadMoreTextCancelationModal from "@/components/ReadMoreTextCancelationModal/ReadMoreTextCancelationModal";
import ReadMoreTextServiceDetailsModal from "@/components/ReadMoreTextServiceDetailsModal/ReadMoreTextServiceDetailsModal";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// const invoices = [
//   {
//     monData: [
//       {
//         dataTxt: "10:30am - 1:00pm",
//       },
//       {
//         dataTxt: "2:30am - 4:00pm",
//       },
//     ],
//     tueData: [
//       {
//         dataTxt: "10:30am - 1:00pm",
//       },
//     ],
//     wedData: [
//       {
//         dataTxt: "10:30am - 1:00pm",
//       },
//       {
//         dataTxt: "2:30am - 4:00pm",
//       },
//     ],
//     thusData: [
//       {
//         dataTxt: "10:30am - 1:00pm",
//       },
//     ],
//     friData: [
//       {
//         dataTxt: "10:30am - 1:00pm",
//       },
//       {
//         dataTxt: "2:30am - 4:00pm",
//       },
//     ],
//     satData: [
//       {
//         dataTxt: "Unavailable",
//       },
//     ],
//     sunData: [
//       {
//         dataTxt: "Unavailable",
//       },
//     ],
//   },
// ];

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

const tableHeadlist = [
  {
    tableHeadTitle: "Mon",
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

export default function ListingEdit({ params }: { params: { id: string } }) {
  const router = useRouter();

  const { data, isLoading, refetch } = useQuery(
    ["get_service_details"],
    async () => getServiceDetails(params.id)
  );

  const serviceData = data?.data;
  console.log("servc data", serviceData);

  const tableHeadlist = [];
  for (let key in serviceData?.availability) {
    tableHeadlist.push(key);
  }

  const timetable = serviceData?.availability.monday.time_slots;

  console.log("serviceData", serviceData);

  return (
    <div className="relative py-10">
      <Container>
        <div className="relative mb-6">
          <Link
            href="/admin/dashboard/services"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </Link>
        </div>
        {isLoading && <Loading />}
        {serviceData ? (
          <>
            <div className="w-full pr-[32px] lg:w-full lg:pr-0">
              <div className="relative flex justify-between item-center border-b border-solid border-gray-100 pb-6 mb-10 md:hidden">
                <h1 className="text-[36px] text-gray-900 lg:text-[30px]">
                  {serviceData?.title}
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
                    onClick={() =>
                      router.push(
                        `/admin/dashboard/services/edit/title-description/${params.id}`
                      )
                    }
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
                  {serviceData?.title}
                </h3>
                <Badge className="bg-gray-50 border-solid border-gray-100 rounded-[32px] text-gray-600 py-1.5 px-4 mb-5 md:text-[14px]">
                  {serviceData?.category_title}
                </Badge>
                <h3 className="text-[20px] text-gray-900 mb-2 md:hidden">
                  {serviceData?.title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{ __html: serviceData?.description }}
                  className="text-[16px] font-satoshi_regular text-gray-800 mb-3 break-all"
                >
                  {/* {serviceData?.description} */}
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
                  <RadioGroup disabled value={serviceData?.booking_type}>
                    <div className="flex items-start">
                      <RadioGroupItem
                        value="direct"
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
                {serviceData?.images.length > 0 ? (
                  <>
                    <div className="relative flex flex-wrap mx-[-4px] md:hidden">
                      {serviceData.images?.slice(0, 3).map((img, i) => (
                        <div className="relative w-1/3 px-[4px]">
                          <figure className="w-full m-0 leading-0" key={i}>
                            <Image
                              src={img}
                              className="w-full rounded-[8px] object-cover"
                              alt=""
                              width={330}
                              height={216}
                            />
                          </figure>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative flex flex-wrap mx-[-4px] md:hidden">
                      <p>No images added.</p>
                    </div>
                  </>
                )}

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

                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      <p>Focus</p>
                    </li>

                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      <p>Techniques</p>
                    </li>
                    <li className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900">
                      <p>Benefits</p>
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
                  </div>

                  <div className="relative w-3/4 lg:w-full flex flex-wrap md:shadow-none shadow-[0px_12px_29px_0px_rgba(0,0,0,0.04)] rounded-[12px] overflow-hidden">
                    {serviceData.packages_data.map((it) => {
                      return (
                        <>
                          <div className="relative w-1/3 md:w-full md:mb-4 md:rounded-[12px] bg-[#FFF9D7]">
                            <div className="px-6 pt-6 pb-12 md:pb-6 border-b border-solid border-[rgba(19,19,22,0.03)]">
                              <h5 className="text-[20px] font-satoshi_medium text-gray-900 mb-2">
                                {it.name}
                              </h5>
                              <p className="text-[14px] text-gray-500 leading-normal">
                                {it.description}
                              </p>
                            </div>

                            <ul>
                              <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                                <p>Focus</p>
                                {serviceData?.packages_data?.map((item) => {
                                  return (
                                    <>
                                      {item?.features?.map((ele) => {
                                        return (
                                          <>
                                            {ele?.is_available === true ? (
                                              <TableTickIcon />
                                            ) : (
                                              ""
                                            )}
                                          </>
                                        );
                                      })}
                                    </>
                                  );
                                })}
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

                                {serviceData?.packages_data?.map((item) => {
                                  return (
                                    <>
                                      {item?.features?.map((ele) => {
                                        return (
                                          <>
                                            {ele?.is_available === true ? (
                                              <TableTickIcon />
                                            ) : (
                                              ""
                                            )}
                                          </>
                                        );
                                      })}
                                    </>
                                  );
                                })}
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
                        </>
                      );
                    })}
                    {/* <div className="relative w-1/3 md:w-full md:mb-4 md:rounded-[12px] bg-[#E8FBDA]">
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
                    </div> */}
                    {/* <div className="relative w-1/3 md:w-full md:mb-4 md:rounded-[12px] bg-[#F5EFFD]">
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
                    </div> */}
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
                            {item}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* {invoices.map((data, index) => ( */}
                      <TableRow>
                        <TableCell className="text-center border-gray-200 border-r">
                          {serviceData?.availability?.monday?.is_available ===
                          true ? (
                            serviceData?.availability?.monday?.time_slots.map(
                              (items, index) => (
                                <>
                                  <p className="pb-2" key={index}>
                                    {items.start_time}
                                  </p>
                                  <p> {items.end_time}</p>
                                </>
                              )
                            )
                          ) : (
                            <p className="pb-2">Unavailable</p>
                          )}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {serviceData?.availability?.tuesday?.is_available ===
                          true ? (
                            serviceData?.availability?.tuesday?.time_slots.map(
                              (items, index) => (
                                <>
                                  <p className="pb-2" key={index}>
                                    {items.start_time}
                                  </p>
                                  <p> {items.end_time}</p>
                                </>
                              )
                            )
                          ) : (
                            <p className="pb-2">Unavailable</p>
                          )}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {serviceData?.availability?.wednesday
                            ?.is_available === true ? (
                            serviceData?.availability?.wednesday?.time_slots.map(
                              (items, index) => (
                                <>
                                  <p className="pb-2" key={index}>
                                    {items.start_time}
                                  </p>
                                  <p> {items.end_time}</p>
                                </>
                              )
                            )
                          ) : (
                            <p className="pb-2">Unavailable</p>
                          )}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {serviceData?.availability?.thursday?.is_available ===
                          true ? (
                            serviceData?.availability?.thursday?.time_slots.map(
                              (items, index) => (
                                <>
                                  <p className="pb-2" key={index}>
                                    {items.start_time}
                                  </p>
                                  <p> {items.end_time}</p>
                                </>
                              )
                            )
                          ) : (
                            <p className="pb-2">Unavailable</p>
                          )}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {serviceData?.availability?.friday?.is_available ===
                          true ? (
                            serviceData?.availability?.friday?.time_slots.map(
                              (items, index) => (
                                <>
                                  <p className="pb-2" key={index}>
                                    {items.start_time}
                                  </p>
                                  <p> {items.end_time}</p>
                                </>
                              )
                            )
                          ) : (
                            <p className="pb-2">Unavailable</p>
                          )}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r">
                          {serviceData?.availability?.saturday?.is_available ===
                          true ? (
                            serviceData?.availability?.saturday?.time_slots.map(
                              (items, index) => (
                                <>
                                  <p className="pb-2" key={index}>
                                    {items.start_time}
                                  </p>
                                  <p> {items.end_time}</p>
                                </>
                              )
                            )
                          ) : (
                            <p className="pb-2">Unavailable</p>
                          )}
                        </TableCell>
                        <TableCell className="text-center border-gray-200 border-r-0">
                          {serviceData?.availability?.sunday?.is_available ===
                          true ? (
                            serviceData?.availability?.sunday?.time_slots.map(
                              (items, index) => (
                                <>
                                  <p className="pb-2" key={index}>
                                    {items.start_time}
                                  </p>
                                  <p> {items.end_time}</p>
                                </>
                              )
                            )
                          ) : (
                            <p className="pb-2">Unavailable</p>
                          )}
                        </TableCell>
                      </TableRow>
                      {/* ))} */}
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
                  {serviceData?.rules?.map((item, index) => (
                    <div className="relative w-1/3 md:w-full md:mb-6 px-[12px]">
                      <div key={index}>
                        <h4 className="inline-flex items-center transition-all text-[18px] text-gray-900 font-satoshi_medium mb-2">
                          {item.name}
                        </h4>{" "}
                        <br />
                        {item.description}
                        <ReadMoreTextServiceDetailsModal
                          title={item.name}
                          description={item.description}
                        />
                      </div>
                    </div>
                  ))}
                  {/* {serviceData?.rules.length === 0 && <p> data not found</p>} */}
                  {/* <div className="relative w-1/3 md:w-full md:mb-6 px-[12px]">
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
                  </div> */}
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
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}
