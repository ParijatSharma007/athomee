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
export default function ProfileSignOutModalThree() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-gray-50 text-gray-900 rounded-[32px] font-satoshi_medium hover:text-white hover:bg-secondary"
          >
            Sign Out
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
          <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Sign out
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px]] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="px-10 md:px-4 py-6 md:basis-full">
              <h3 className="text-[16px] text-gray-900 font-satoshi_medium mb-1.5">
              Chrome 114, Mac OS X
              </h3>
              <ul className="flex item-center">
                <li className="relative pr-[20px] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:right-[8px] before:top-[10px] before:bg-gray-400">
                  <p className="text-[14px] text-gray-400">
                  Last activity just now
                  </p>
                </li>
                <li>
                  <p className="text-[14px] text-gray-400">New York, United States</p>
                </li>
              </ul>
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
                <li className=" md:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-red-500 hover:bg-secondary  hover:text-white md:w-full"
                  >
                    Sign out
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
