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
import { Textarea } from "@/components/ui/textarea";

export default function MessagePopUpModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="bg-transparent outline-hover transition-all text-[16px] font-satoshi_medium text-gray-900 border-newborder rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-primary hover:text-white"
          >
            <i className="mr-2">
              <MessageIcon />
            </i>
            Message
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] text-left font-satoshi_medium m-0 md:text-[16px] sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Contact the vendor
            </DialogTitle>
          </DialogHeader>
          <div className="relative md:basis-full md:flex md:flex-col">
            <div className=" md:basis-full">
              <div className="relative px-10 md:px-4 flex flex-wrap items-center mb-4">
                <figure className="text-0 leading-none mr-4 relative">
                  <Image
                    className="w-[48px] h-[48px] rounded-full"
                    src={assets.imgaboutDetails1}
                    alt=""
                    width={64}
                    height={64}
                  />{" "}
                </figure>
                <div className="relative">
                  <h3 className="text-[16px] text-[#1F1F1F] font-satoshi_medium mb-0">
                    Julia Brown
                  </h3>
                  <p className="text-[14px] text-gray-400 font-satoshi_regular">
                    Usually responds within a few hours
                  </p>
                </div>
              </div>
              <div className="relative px-10 md:px-4 mt-4 mb-10">
                <h4 className="text-[20px] font-satoshi_medium m-0">
                  What would you like to ask?
                </h4>
                <div className="relative py-[11px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                  <label className="text-[12px] text-gray-400">Message</label>
                  <Textarea
                    className="border-0 resize-none p-0 text-[16px] text-gray-900 font-satoshi_medium sm:min-h-[120px]"
                    placeholder="Hello! I would like to know about the refund policy if I cancel my order today. Where can I find this information?"
                  />
                </div>
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
