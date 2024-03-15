"use client";
import React from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import ArrowBtnSeeIcon from "@/json/icons/ArrowBtnSeeIcon";
import TickArrowRightIcon from "@/json/icons/TickArrowRightIcon";
export default function ReadMoreTextCancelationModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-transparent text-[16px] text-gray-900 font-satoshi_medium p-0 flex item-center hover:bg-transparent hover:opacity-70"
          >
            Show more
            <i className="pl-2">
              <ArrowBtnSeeIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Cancellation policy
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="px-10 md:px-4 py-4 md:basis-full">
            <p className="text-[18px] text-gray-900">Before you proceed, please be aware of our non-refundable cancellation policy. By confirming your reservation, you acknowledge and accept the following terms:</p>
            <ul className="py-4 !list-decimal">
              <li className="relative flex items-start  mb-3 font-satoshi_regular !list-decimal">No Cancellations: Reservations under this policy cannot be cancelled or modified. The booking amount will not be refunded, regardless of the reason for cancellation.</li>
              <li className="relative flex items-start  mb-3 font-satoshi_regular !list-decimal">No Shows: If you do not show up on the scheduled date, the full booking cost will be forfeited.</li>
              <li className="relative flex items-start font-satoshi_regular !list-decimal">Commitment: This policy allows us to offer you the best possible rates. We recommend double-checking your dates before confirming.</li>
            </ul>
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center  sm:w-full">
                <li className="sm:w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white sm:w-full"
                  >
                    Got it!
                  </Button>
                  </DialogClose>
                </li>
              </ul>
            </div>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
