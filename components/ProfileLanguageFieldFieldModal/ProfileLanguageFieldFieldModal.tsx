"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RightArrowIcon from "@/json/icons/RightArrowIcon";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
export default function ProfileLanguageFieldFieldModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-transparent w-full text-left justify-between text-gray-900 font-satoshi_medium p-0 "
          >
            English, Urdu, Spanish, German
            <i>
              <RightArrowIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] overflow-hidden">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Languages you speak
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="p-6 overflow-hidden md:p-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for language"
                  className="bg-[#FAFAFA] border-0 p-4 h-[54px]"
                />
              </div>
              <div className="relative px-1 h-[300px] lg:max-h-[200px] md:max-h-[350px] overflow-y-auto pb-6">
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Afrikaans
                  </label>
                  <Checkbox id="1" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Albanian
                  </label>
                  <Checkbox id="2" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="3"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Arabic
                  </label>
                  <Checkbox id="3" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="4"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Armenian
                  </label>
                  <Checkbox id="4" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="5"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Azerbaijani
                  </label>
                  <Checkbox id="5" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="6"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Afrikaans
                  </label>
                  <Checkbox id="6" />
                </div>
                
              </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
