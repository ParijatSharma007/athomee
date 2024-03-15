import assets from "@/json/assets";
import InfoIcon from "@/json/icons/InfoIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";

interface ReservationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title?: string;
  status?: string;
  timetaken?: string;
  dateTime?: string;
  address?: string;
  price: number;
  refundstatus?: boolean | undefined;
}

const ReservationListCard = React.forwardRef<
  HTMLDivElement,
  ReservationCardProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex flex-wrap pb-8 md:pb-6 items-center border-b-[1px] border-[#F4F4F5]",
        className
      )}
      {...props}
      ref={ref}
    >
      <div className="w-[200px] basis-[200px] md:w-full md:basis-full md:mb-2 md:relative">
        <figure className="h-[126px] overflow-hidden rounded-lg md:h-[200px] ">
          <Image
            src={props?.image}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </figure>
        <Image
          src={
            props?.status === "Requested"
              ? assets?.requested_btn
              : props?.status === "Upcoming"
              ? assets?.upcoming_btn
              : props?.status === "Completed"
              ? assets?.accepted_btn
              : props?.status === "Declined"
              ? assets?.decline_btn
              : props?.status === "Canceled"
              ? assets?.cancel_btn
              : ""
          }
          alt="icon"
          width={32}
          height={32}
          className=" hidden md:block md:absolute md:top-4 md:left-4 md:z-10"
        />
      </div>
      <div className="basis-[calc(100%-200px)] pl-6 flex flex-wrap justify-between md:w-full md:basis-full md:pl-0 md:block">
        <div className="bg-inherit w-auto">
          <div className="flex items-center flex-wrap mb-2 md:text-[18px]">
            <h3>{props?.title}</h3>
            <Badge
              className={` 
              ${
                props?.status === "Requested"
                  ? "bg-yellow-50"
                  : props?.status === "Upcoming"
                  ? "bg-[#F5EFFD]"
                  : props?.status === "Completed"
                  ? "bg-[#EBFFEB]"
                  : props?.status === "Declined"
                  ? "bg-gray-50"
                  : props?.status === "Canceled"
                  ? "bg-red-50"
                  : ""
              }
              
              ml-3 ${
                props?.status === "Requested"
                  ? "text-[#F59F00]"
                  : props?.status === "Upcoming"
                  ? "text-[#7757BD]"
                  : props?.status === "Completed"
                  ? "text-[#04D100]"
                  : props?.status === "Declined"
                  ? "text-gray-500"
                  : props?.status === "Canceled"
                  ? "text-red-500"
                  : ""
              } border-[1px] 
              
              ${
                props?.status === "Requested"
                  ? "border-yellow-100"
                  : props?.status === "Upcoming"
                  ? "border-[#7757BD]"
                  : props?.status === "Completed"
                  ? "border-[#87FF85]"
                  : props?.status === "Declined"
                  ? "border-gray-200"
                  : props?.status === "Canceled"
                  ? "border-red-200"
                  : ""
              }
              py-[6px] px-[10px] font-satoshi_medium text-sm md:hidden`}
            >
              {props?.status}
            </Badge>
          </div>
          <Badge className="bg-[#F7F4F1] text-gray-900 border-none mb-2 py-[6px] px-[10px] font-satoshi_medium text-sm md:text-[12px]">
            {props?.timetaken}
          </Badge>
          <p className="text-gray-900 mb-2 md:text-[12px]">
            <span className="text-gray-400">Date & time:</span>{" "}
            {props?.dateTime}
          </p>
          <p className="text-gray-900 mb-2 md:text-[12px]">
            <span className="text-gray-400">Address:</span>&nbsp;{" "}
            {props?.address}
          </p>
        </div>
        <div className="ml-auto flex flex-col justify-between items-end md:flex-row">
          <Button
            variant="outline"
            className="max-w-[100px] md:order-2 md:text-sm"
          >
            Details
          </Button>
          <h4 className="text-[40px] mt-auto md:text-[24px]">
            {props?.refundstatus ? (
              <span className="inline-flex items-center mr-6  font-satoshi_medium text-red-500 text-sm">
                <i className="inline-flex items-center justify-center mr-2">
                  <InfoIcon />
                </i>
                Refund applied
              </span>
            ) : undefined}
            ${props?.price}
          </h4>
        </div>
      </div>
    </div>
  );
});

ReservationListCard.displayName = "ReservationListCard";
export { ReservationListCard };
