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
import DelectPopUpIcon from "@/json/icons/DelectPopUpIcon";
export default function DelectVendorItemsListModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-transparent text-[16px] text-red-500 font-satoshi_medium p-0 ml-2 flex item-center hover:bg-transparent hover:opacity-70"
          >
            <i className="pr-2">
              <DelectPopUpIcon />
            </i>
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Delete service
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="px-10 py-4 md:basis-full md:px-4">
              <p className="text-[18px] text-gray-900">
              The service listed ”Deep Tissue Massage” will be permanently deleted.
              </p>
            </div>
            <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center  sm:w-full">
                <li className="pr-2  sm:w-full sm:pr-0 sm:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white  sm:w-full"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                    <Button
                      type="button"
                      className="rounded-[50px] px-[20px] py-[6px] text-white bg-red-500 hover:bg-secondary  hover:text-white  sm:w-full"
                    >
                      Delete
                    </Button>
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
