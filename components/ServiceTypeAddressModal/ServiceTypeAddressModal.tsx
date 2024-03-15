"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CheckBoxDownArrw from "@/json/icons/CheckBoxDownArrw";
import { Input } from "../ui/input";

export default function ServiceTypeAddressModal() {
  const payWithCartList = [
    {
      titleTxt: "30-Minute",
      pricetxt: "$50",
      iconPath: <CheckBoxDownArrw />,
      bgColor: "#F7F4F1",
    },
    {
      titleTxt: "60-Minute",
      pricetxt: "$90",
      iconPath: <CheckBoxDownArrw />,
      bgColor: "#E8FBDA",
    },
    {
      titleTxt: "90-Minute",
      pricetxt: "$120",
      iconPath: <CheckBoxDownArrw />,
      bgColor: "#F5EFFD",
    },
  ];
  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (index: number) => {
    setCheckBtn(index);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="rounded-[100px] bg-transparent border border-gray-200 text-[14px] text-gray-900 font-satoshi_regular hover:bg-secondary hover:text-white hover:border-secandary"
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Edit location
            </DialogTitle>
          </DialogHeader>
          <div className="relative md:basis-full md:flex md:flex-col">
            <div className="relative px-10 md:px-4 mt-4 mb-10 md:basis-full">
              <h4 className="text-[20px] md:text-[14px] font-satoshi_medium m-0">
                What would you like to ask?
              </h4>
              <div className="relative py-[6px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                <label className="text-[12px] text-gray-400">Address</label>
                <Input
                  className="border-0 resize-none p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  placeholder="25 Draper Street, San Francisco, CA, USA"
                />
              </div>
              <div className="relative py-[6px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                <label className="text-[12px] text-gray-400">
                  Address Line 2
                </label>
                <Input
                  className="border-0 resize-none p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  placeholder="25 Draper Street, San Francisco, CA, USA"
                />
              </div>
              <div className="relative py-[6px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                <label className="text-[12px] text-gray-400">
                  Apartment/House No.
                </label>
                <Input
                  className="border-0 resize-none p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  placeholder="2"
                />
              </div>
              <div className="relative py-[6px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                <label className="text-[12px] text-gray-400">City</label>
                <Input
                  className="border-0 resize-none p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  placeholder="San Francisco"
                />
              </div>
              <div className="relative py-[6px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                <label className="text-[12px] text-gray-400">State</label>
                <Input
                  className="border-0 resize-none p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  placeholder="CA"
                />
              </div>
              <div className="relative py-[6px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                <label className="text-[12px] text-gray-400">Country</label>
                <Input
                  className="border-0 resize-none p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  placeholder="USA"
                />
              </div>
            </div>
            <div className="relative px-10 md:px-4 w-full pt-4 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center sm:w-full sm:flex-wrap">
                <li className="mr-2 sm:mr-0 sm:mb-4 sm:w-full">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] sm:w-full hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] sm:w-full hover:bg-secondary hover:text-white"
                  >
                    Send message
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
