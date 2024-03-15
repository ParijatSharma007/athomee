"use client";

import {
  getReservationDetails,
  searchCategories,
  updateReservationCategoryDetails,
  updateReservationDetails,
} from "@/api/functions/admin.api";
import ChangeAddressModal from "@/components/ChangeAddressModal/ChangeAddressModal";
import ChangeDateTimeModal from "@/components/ChangeDateTimeModal/ChangeDateTimeModal";
import ChangeReservationCategoryModal from "@/components/ChangeReservationCategoryModal/ChangeReservationCategoryModal";
import AdminChangeReservationStatusModal from "@/components/ChangeReservationStatusModal/AdminChangeReservationStatusModal";
import ChangeReservationStatusModal from "@/components/ChangeReservationStatusModal/ChangeReservationStatusModal";
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import ContactClientModal from "@/components/ContactClientModal/ContactClientModal";
import Container from "@/components/Container";
import ContasctVendorModal from "@/components/ContasctVendorModal/ContasctVendorModal";
import DeletePaymentModal from "@/components/DeletePaymentModal/DeletePaymentModal";
import { MessageThumb } from "@/components/MessageThumb/MessageThumb";
import RefundDetailsModal from "@/components/RefundDetailsModal/RefundDetailsModal";
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
// import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assets from "@/json/assets";
import ArrowNarrowLeft from "@/json/icons/ArrowNarrowLeft";
import CardIcon from "@/json/icons/CardIcon";
import DotIconBtnShow from "@/json/icons/DotIconBtnShow";
import GiftIcon from "@/json/icons/GiftIcon";
import InfoIconGray from "@/json/icons/InfoIconGray";
import MsgTick from "@/json/icons/MsgTick";
import PencilIcon from "@/json/icons/PencilIcon";
import { SeachBlack } from "@/json/icons/SeachBlack";
import {
  calculateTimeDifference,
  formatDate,
  formatDateTwo,
  getAmPmFromTime,
} from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function Page({ params }: { params: { id: string } }) {
  const [category_id, setcategory_id] = useState<string>("");
  const [sub_category, setsub_category] = useState<string>("");
  const router = useRouter();

  const { data, refetch } = useQuery(["get_reserv_details"], async () =>
    getReservationDetails(params.id)
  );

  const { mutateAsync: updateReserv } = useMutation({
    mutationFn: updateReservationDetails,
    onSuccess: () => {
      refetch();
    },
  });
  const { mutateAsync: updateReservCategory } = useMutation({
    mutationFn: updateReservationCategoryDetails,
    onSuccess: () => {
      refetch();
    },
  });

  const reservationData = data?.data;
  const reservationServiceCategoryId = data?.data?.service_data?._id;

  useEffect(() => {
    if (data?.data) {
      setcategory_id(data.data.category_id || "");
      setsub_category(data.data.sub_category_id || "");
    }
  }, [data]);

  console.log("reservationData", reservationData?.service_data);

  return (
    <>
      <div className="pt-8 pb-16 lg:pb-8">
        <Container>
          <Button
            variant="outline"
            onClick={() => router.push("/admin/dashboard/reservation")}
            className="border-0 mb-8 font-satoshi_medium text-base transition-all hover:text-inherit hover:bg-inherit hover:scale-110 p-0 lg:mb-4 lg:h-auto"
          >
            <i className="inline-block mr-4">
              <ArrowNarrowLeft />
            </i>
            Back
          </Button>
          <CommonHeader
            title="Reservation details"
            className="mb-8 lg:text-[30px] sm:text-[24px] sm:mb-4"
          />
          <div className="flex flex-wrap flex-row">
            {/* Basic Details */}
            <div className=" w-[60%] pr-8 border-r border-gray-100 md:w-full md:pr-0 md:border-0">
              {data?.data?.service_data.images &&
              data?.data?.service_data.images.length > 0 ? (
                <>
                  <div className="relative pb-6 flex flex-wrap -mx-1">
                    {data.data.service_data.images[0] && (
                      <div className="relative w-1/2 px-1 sm:w-full sm:mb-2">
                        <figure className="m-0 leading-0 w-full h-full max-h-[216px] md:max-h-none">
                          <Image
                            className="rounded-xl w-full h-full"
                            src={data.data.service_data.images[0]}
                            alt="image"
                            width={308}
                            height={216}
                          />
                        </figure>
                      </div>
                    )}
                    {/* {data.data.service_data.images[0] && ()} */}
                    {/* {data.data.service_data.images[0] && ()} */}
                    {/* {data.data.service_data.images[0] && ()} */}
                    {/* {data.data.service_data.images[0] && ()} */}

                    {data?.data?.service_data.images.length > 1 ? (
                      <>
                        {" "}
                        <div className="relative w-1/2 flex flex-wrap px-1 sm:w-full">
                          {data.data.service_data.images[1] && (
                            <div className="w-1/2 px-1 mb-2 sm:w-full">
                              <figure className="m-0 leading-0 w-full h-[104px] md:h-auto">
                                <Image
                                  className="rounded-xl w-full h-full object-cover"
                                  src={data.data.service_data.images[1]}
                                  alt="image"
                                  width={180}
                                  height={105}
                                />
                              </figure>
                            </div>
                          )}

                          {data.data.service_data.images[2] && (
                            <div className="w-1/2 px-1 mb-2 sm:w-full">
                              <figure className="m-0 leading-0 w-full h-[104px] md:h-auto">
                                <Image
                                  className="rounded-xl w-full h-full object-cover"
                                  src={data.data.service_data.images[2]}
                                  alt="image"
                                  width={180}
                                  height={105}
                                />
                              </figure>
                            </div>
                          )}
                          {data.data.service_data.images[3] && (
                            <div className="w-1/2 px-1 mb-2 sm:w-full">
                              <figure className="m-0 leading-0 w-full h-[104px] md:h-auto">
                                <Image
                                  className="rounded-xl w-full h-full object-cover"
                                  src={data.data.service_data.images[3]}
                                  alt="image"
                                  width={180}
                                  height={105}
                                />
                              </figure>
                            </div>
                          )}
                          {data.data.service_data.images[4] && (
                            <div className="w-1/2 px-1 mb-2 sm:w-full">
                              <figure className="m-0 leading-0 w-full h-[104px] md:h-auto">
                                <Image
                                  className="rounded-xl w-full h-full object-cover"
                                  src={data.data.service_data.images[4]}
                                  alt="image"
                                  width={180}
                                  height={105}
                                />
                              </figure>
                              <Button
                                type="button"
                                className="rounded-[8px] bg-btnBorderColor absolute bottom-[14px] backdrop-blur-[52px] right-[11px] transition-all text-base text-primary-foreground px-2.5 py-2 flex item-center h-auto hover:bg-black"
                              >
                                <i className="mr-2">
                                  <DotIconBtnShow />
                                </i>
                                Show all photos
                              </Button>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="flex items-center justify-between flex-wrap mb-4">
                <div className="md:w-[60%]">
                  <h3 className="mb-1 sm:text-[20px]">
                    {data?.data?.service_title}
                  </h3>
                  <p>
                    {calculateTimeDifference(
                      data?.data?.start_time,
                      data?.data?.end_time
                    )}
                  </p>
                </div>
                <div className="md:w-[calc(100%_-_60%)] md:flex md:justify-end">
                  <AdminChangeReservationStatusModal
                    status={data?.data?.status}
                    updateReserv={updateReserv}
                    id={params.id}
                  />
                </div>
              </div>
              <div className="py-4 border-b border-gray-100 flex items-center justify-between flex-wrap">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Category</p>
                  <h4 className="text-base">{data?.data?.category_title}</h4>
                </div>
                <div>
                  <ChangeReservationCategoryModal
                    category_id={category_id}
                    sub_category={sub_category}
                    reservationServiceCategoryId={reservationServiceCategoryId}
                    setcategory_id={setcategory_id}
                    setsub_category_id={setsub_category}
                    reservationData={reservationData}
                    updateReservcategory={updateReservCategory}
                    refetchMainData={refetch}
                  />
                </div>
              </div>
              <div className="py-4 border-b border-gray-100">
                <p className="text-gray-400 text-sm mb-1">Reservation number</p>
                <h4 className="text-base">#{data?.data?.ref_no}</h4>
              </div>
              <div className="py-4 border-b border-gray-100 flex items-center justify-between flex-wrap">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Vendor</p>
                  <div className="flex items-center ">
                    <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                      <Image
                        src={
                          data?.data?.vendor_data?.profilePicture
                            ? data?.data?.vendor_data?.profilePicture
                            : assets.health_icon
                        }
                        alt="clientimg"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover "
                      />
                    </i>
                    <h4 className="text-sm ">
                      {data?.data?.vendor_data?.firstName}{" "}
                      {data?.data?.vendor_data?.lastName}
                    </h4>
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
                        src={
                          data?.data?.client_data?.profilePicture
                            ? data?.data?.client_data?.profilePicture
                            : assets.clientImage
                        }
                        alt="clientimg"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover "
                      />
                    </i>
                    <h4 className="text-sm ">
                      {data?.data?.client_data?.firstName}{" "}
                      {data?.data?.client_data?.lastName}
                    </h4>
                  </div>
                </div>
                <div>
                  <ContactClientModal />
                </div>
              </div>
              <div className="py-4 border-b border-gray-100 flex items-center justify-between flex-wrap">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <h4 className="text-base">{data?.data?.address}</h4>
                </div>

                <div>
                  <ChangeAddressModal
                    address={data?.data?.address}
                    updateReserv={updateReserv}
                    id={params?.id}
                  />
                </div>
              </div>
              <div className="py-4 flex items-center justify-between flex-wrap">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Date & time</p>
                  <h4 className="text-base">
                    {formatDateTwo(data?.data?.date)} {" , "}
                    {data?.data?.start_time} - {data?.data?.end_time}{" "}
                    {getAmPmFromTime(data?.data?.end_time)}
                  </h4>
                </div>
                <ChangeDateTimeModal
                  primarydate={data?.data?.date}
                  start_time={data?.data?.start_time}
                  end_time={data?.data?.end_time}
                  updateReserv={updateReserv}
                  id={params?.id}
                  avialable_data={reservationData?.service_data}
                />
              </div>
              <div className="flex justify-between items-center rounded-xl bg-[#F7F4F1] py-[20px] px-6 mt-4">
                <div>
                  <h4 className="flex text-base mb-1">
                    {calculateTimeDifference(
                      data?.data?.start_time,
                      data?.data?.end_time
                    )}{" "}
                    <span className="inline-block ml-2 font-satoshi_regular text-gray-500">
                      ${data?.data?.package_price}
                    </span>
                  </h4>
                  <p className="w-11/12">{data?.data?.service_description}</p>
                </div>
                {/* <CancelReservationModal /> */}
                {data?.data?.gift_wrapper ? (
                  <>
                    {" "}
                    <p className="inline-flex items-center font-satoshi_medium text-sm">
                      <span className=" inline-flex items-center justify-center mr-1">
                        <GiftIcon />
                      </span>
                      Gift
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className="flex border border-gray-200 rounded-lg mt-10">
                <div className="w-full">
                  <div className="border-gray-200 border-b">
                    <MessageThumb
                      textContent="Last seen: 54 min ago"
                      showUnread
                    />
                  </div>
                  <div className="bg-inherit">
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
                            Hello! I offer a variety of massage services
                            designed to promote relaxation and well-being. We
                            have Swedish massage, which uses gentle strokes to
                            ease tension, and deep tissue massage, which targets
                            deeper muscle layers to alleviate chronic pain.
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
                            durations: 30 minutes, 60 minutes, and 90 minutes.
                            The{" "}
                            {calculateTimeDifference(
                              data?.data?.start_time,
                              data?.data?.end_time
                            )}{" "}
                            session is more focused on specific areas, while the
                            60-minute session allows for a more balanced
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
                            Hello! I offer a variety of massage services
                            designed to promote relaxation and well-being. We
                            have Swedish massage, which uses gentle strokes to
                            ease tension, and deep tissue massage, which targets
                            deeper muscle layers to alleviate chronic pain.
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
                              ease tension, and deep tissue massage, which
                              targets deeper muscle layers to alleviate chronic
                              pain.
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
                            durations: 30 minutes, 60 minutes, and 90 minutes.
                            The{" "}
                            {calculateTimeDifference(
                              data?.data?.start_time,
                              data?.data?.end_time
                            )}{" "}
                            session is more focused on specific areas, while the
                            60-minute session allows for a more balanced
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
                      {/* <div className="p-6">
                    <MessageInput />
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* payment Info */}
            <div className="w-[40%] pl-16 lg:pl-8 md:w-full md:mt-4 md:pl-0">
              <h3 className="text-2xl mb-[20px]">Payment info</h3>
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p>
                    Deep Tissue Massage,{" "}
                    {calculateTimeDifference(
                      data?.data?.start_time,
                      data?.data?.end_time
                    )}
                  </p>
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
                <div className="flex justify-end items-center py-[20px] sm:pb-0">
                  <RefundDetailsModal />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
