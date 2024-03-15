import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  status?: string;
  title?: string;
  timetaken?: string;
  price?: number;
  dateTime?: string;
}

const ReservationCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("bg-inherit", className)} ref={ref} {...props}>
        <figure className="h-[200px] rounded-xl overflow-hidden relative">
          <Image
            src={props?.image}
            alt="image"
            width={412}
            height={200}
            className="w-full h-full object-cover"
          />
          <Badge
            className={` 
            absolute
             right-4
             top-4
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
              py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg`}
          >
            {props?.status}
          </Badge>
        </figure>
        <div className="rounded-xl bg-white -mt-6 relative z-10 p-6">
          <div className="flex items-center justify-between flex-wrap pb-[20px] border-b border-[#F4F4F5]">
            <div className="bg-inherit ">
              <h3 className="mb-1 xs:text-[18px]">
                <Link href="#" className="text-inherit hover:text-secondary">
                  {props?.title}
                </Link>
              </h3>
              <p className="text-base font-satoshi_medium xs:text-sm">
                {props?.timetaken}
              </p>
            </div>
            <div className="text-end">
              <h3 className="mb-1 xs:text-[18px]">${props?.price}</h3>
              <p className="text-gray-500 xs:text-sm">Total</p>
            </div>
          </div>

          <div className="border-b py-[20px]">
            <p className="text-gray-500 xs:text-[12px]">Date & time</p>
            <h4 className="xs:text-sm">{props?.dateTime}</h4>
          </div>

          <div className="py-[20px]">
            <Button
              variant="outline"
              className="border-0 min-w-full bg-gray-100"
            >
              View details
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ReservationCard.displayName = "ReservationCard";

export default ReservationCard;
