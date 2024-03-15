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
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CustomInputWithLabel from "../ui/CustomInputWithLabel";
import CommonInput from "../CommonInput/CommonInput";
import RenameIcon from "@/json/icons/RenameIcon";
import ChevronRightIcon from "@/json/icons/ChevronRightIcon";
import MasterIcon from "@/json/icons/MasterIcon";



export default function ProfileSettingEditCardModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
        <Button className="w-full px-10 md:px-4 pt-4 h-[auto] pb-6 flex items-center bg-[transparent] hover:bg-[transparent] border-gray-200 border-solid border-b rounded-[0]">
            <i className="inline-block mr-3">
              <RenameIcon />
            </i>
            <span className="inline-block text-gray-900 text-[16px] font-satoshi_medium mr-3">
              Edit
            </span>
            <i className="inline-block ml-auto">
              <ChevronRightIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] z-[999]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Edit credit card ****6375
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:basis-full md:flex md:flex-col md:pb-0">
            <div className=" md:basis-full">
              <div className="flex flex-wrap mx-[-16px] p-10 md:p-2 md:mx-0">
                  <div className="relative px-[16px] w-full mb-8 md:mb-4 md:px-[12px]">
                      <CommonInput placeholderLabel="Card holder" valueTxt="Julia Brown"/>
                  </div>
                  <div className="relative px-[16px] w-full mb-8 md:mb-4 md:px-[12px]">
                      <CommonInput placeholderLabel="Card number" valueTxt="4393 3746 4924 5683"/>
                      <i className="absolute right-[24px] top-[50%] translate-y-[-50%]"><MasterIcon/></i>
                  </div>
                  <div className="relative px-[16px] w-1/2 md:px-[12px]">
                      <CommonInput placeholderLabel="Expiration date" valueTxt="02/24"/>
                  </div>
                  <div className="relative px-[16px] w-1/2 md:px-[12px]">
                      <CommonInput placeholderLabel="CVV" valueTxt="745"/>
                  </div>
              </div>
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center md:flex-wrap md:w-full">
                <li className="pr-2 md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                  >
                    Save
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
