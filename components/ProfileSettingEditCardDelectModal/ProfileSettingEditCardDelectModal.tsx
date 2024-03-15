"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
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
import DeleteIcon from "@/json/icons/DeleteIcon";
import VisaIcon from "@/json/icons/VisaIcon";

export default function ProfileSettingEditCardDelectModal({
  handleCloseCallback,
}: {
  handleCloseCallback?: (data: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  // const modalOpen = () =>{
  //   setOpen(true)
  // }
  const modalClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full px-10 md:px-4 pt-6 h-[auto] pb-4 flex items-center bg-[transparent] hover:bg-[transparent] rounded-[0]">
            <i className="inline-block mr-3">
              <DeleteIcon />
            </i>
            <span className="inline-block text-gray-900 text-[16px] font-satoshi_medium mr-3">
              Delete
            </span>
            <i className="inline-block ml-auto">
              <ChevronRightIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] z-[999]">
          <DialogHeader
            className="border-gray-200 border-solid border-b px-10 py-4"
            onClick={modalClose}
          >
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Delect credit card ****6375
            </DialogTitle>
          </DialogHeader>
          <div className="pb-[80px] relative overflow-hidden md:basis-full md:flex md:flex-col md:pb-0">
            <div className="hidden md:block px-4 md:basis-full">
              <div
                className="relative border-gray-100 border-solid border rounded-[12px] p-4 w-full"
              >
                <div className="relative flex justify-between">
                  <div className="text-[16px] text-gray-900 font-satoshi_medium mb-0">
                    Credit card
                  </div>
                </div>
                <p className="text-[14px] text-gray-400">Expires 10/24</p>
                <div className="flex justify-between mt-4">
                  <p>Ending in 6375</p>
                  <MasterIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
            <ul className="flex items-center md:w-full md:flex-wrap">
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
                  className="rounded-[50px] px-[20px] py-[6px] text-white bg-red-500 hover:bg-secondary  hover:text-white md:w-full"
                >
                  Delete
                </Button>
              </li>
            </ul>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
