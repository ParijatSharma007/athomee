import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import Image from "next/image";
import assets from "@/json/assets";
import { Badge } from "../ui/badge";

export default function DeclineReservationModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="mr-4 text-red-500 bg-red-50 border-0 hover:text-white hover:bg-primary"
          >
            Decline
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl">
              Decline this reservation?
            </DialogTitle>
          </DialogHeader>
          <div>
            <div className="px-10 pb-10 pt-6 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <div className="pb-2 flex flex-wrap items-center">
                <div className="w-[82px] h-[82px] rounded-[12px]">
                  <Image
                    src={assets.reservationImageOne}
                    width={82}
                    height={82}
                    alt=""
                  />
                </div>
                <div className="pl-4">
                  <div className="flex flex-wrap iterms-center mb-2">
                    <p className="mr-5 text-[16px] text-gray-900 font-satoshi_medium">
                      Deep Tissue Massage
                    </p>
                    <Badge className="rounded-[100px] text-gray-900 font-satoshi_medium bg-[#F7F4F1] px-4 py-1 leading-[1.4]">
                      30-Minute
                    </Badge>
                  </div>
                  <p className="mb-2 text-gray-400">
                    Date & time:
                    <span className="inline-block text-gray-900 align-middle ml-1">
                      20 May 2023, 10:00-11:00 AM
                    </span>
                  </p>

                  <p className="m text-gray-400">
                    Address:
                    <span className="inline-block text-gray-900 align-middle ml-1">
                      25 Draper Street, San Francisco, CA, USA
                    </span>
                  </p>
                </div>
                <p className="text-gray-900 text-[16px] font-satoshi_medium ml-[auto] self-end">
                  $50
                </p>
              </div>
            </div>
            <div className="relative px-10 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center">
                <li className="mr-4">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] border-gray-200 hover:bg-black hover:text-white"
                    >
                      Undo
                    </Button>
                  </DialogClose>
                </li>
                <li>
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white"
                  >
                    Decline
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
