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
import GlobeIcon from "@/json/icons/GlobeIcon";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MessageIcon from "@/json/icons/MessageIcon";
import assets from "@/json/assets";
import Image from "next/image";
import CheckBoxDownArrw from "@/json/icons/CheckBoxDownArrw";

export default function ServiceTypeTimeModal() {

  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (i: React.SetStateAction<number>) => {
    setCheckBtn(i);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="rounded-[100px] bg-transparent border border-gray-200 text-[14px] text-gray-900 font-satoshi_regular hover:bg-secondary hover:text-white hover:border-secandary"
          >
            Change
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
                Edit service type
            </DialogTitle>
          </DialogHeader>
          <div className="relative md:basis-full md:flex md:flex-col">
            <div className="relative px-10 md:px-4 mt-4 mb-10 md:basis-full">
              <h4 className="text-[16px] font-satoshi_medium mb-4">
                Service types:
              </h4>
              <div className="relative">
                <RadioGroup
                  defaultValue="comfortable"
                  className="flex flex-wrap gap-0 m-[-8px] pb-[24px] items-start overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin"
                >
                  <div className=" w-1/3 md:w-full p-2 relative">
                    <div
                      className={` relative !bg-[#F7F4F1] w-full px-4 py-4 rounded-[8px] border-transparent border-solid border overflow-hidden  ${
                        checkBtn === 0 && "!border-gray-400 border-solid border"
                      } `}
                      onClick={()=>handelCheck(0)}
                    >
                      <RadioGroupItem
                        value={`1`}
                        id={`1`}
                        className="absolute w-full h-full left-0 top-0 appearance-none opacity-0 data-[state=checked]:bg-[#F5EFFD] data-[state=checked]:opacity-1 min-h-0"
                      />
                      <Label
                        htmlFor={`1`}
                        className="w-full flex item-center justify-center text-center p-1 font-satoshi_regular text-gray-500"
                      >
                        <span className="flex pr-1 text-gray-900 font-satoshi_medium leading-[1]">
                        30-Minute
                        </span>
                        $50
                        <i className="pr-[16px] flex items-center ml-auto">
                          <CheckBoxDownArrw />
                        </i>
                      </Label>
                    </div>
                  </div>
                  <div className=" w-1/3 md:w-full p-2 relative">
                    <div
                      className={` relative !bg-[#E8FBDA] w-full px-4 py-4 rounded-[8px] border-transparent border-solid border overflow-hidden  ${
                        checkBtn === 1 && "!border-gray-400 border-solid border"
                      } `}
                      onClick={()=>handelCheck(1)}
                    >
                      <RadioGroupItem
                        value={`2`}
                        id={`2`}
                        className="absolute w-full h-full left-0 top-0 rounded-[8px] appearance-none opacity-0 data-[state=checked]:bg-[#F5EFFD] data-[state=checked]:!opacity-1 min-h-0"
                      />
                      <Label
                        htmlFor={`2`}
                        className="w-full flex item-center justify-center text-center p-1 font-satoshi_regular text-gray-500"
                      >
                        <span className="flex pr-1 text-gray-900 font-satoshi_medium leading-[1]">
                        60-Minute
                        </span>
                        $90
                        <i className="pr-[16px] flex items-center ml-auto">
                          <CheckBoxDownArrw />
                        </i>
                      </Label>
                    </div>
                  </div>
                  <div className=" w-1/3 md:w-full p-2 relative">
                    <div
                      className={` relative !bg-[#F5EFFD] w-full px-4 py-4 rounded-[8px] border-transparent border-solid border overflow-hidden  ${
                        checkBtn === 2 && "!border-gray-400 border-solid border"
                      } `}
                      onClick={() => handelCheck(2)}
                    >
                      <RadioGroupItem
                        value={`3`}
                        id={`3`}
                        className="absolute w-full h-full left-0 top-0 appearance-none opacity-0 data-[state=checked]:bg-[#F5EFFD] data-[state=checked]:opacity-1 min-h-0"
                      />
                      <Label
                        htmlFor={`3`}
                        className="w-full flex item-center justify-center text-center p-1 font-satoshi_regular text-gray-500"
                      >
                        <span className="flex pr-1 text-gray-900 font-satoshi_medium leading-[1]">
                        90-Minute
                        </span>
                        $120
                        <i className="pr-[16px] flex items-center ml-auto">
                          <CheckBoxDownArrw />
                        </i>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="relative px-10 md:px-4 w-full pt-4 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center sm:w-full sm:flex-wrap">
                <li className="mr-2 sm:mr-0 sm:mb-4 sm:w-full">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white sm:w-full"
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
