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
import CommonInput from "../CommonInput/CommonInput";
import RenameIcon from "@/json/icons/RenameIcon";
import ChevronRightIcon from "@/json/icons/ChevronRightIcon";
import MasterIcon from "@/json/icons/MasterIcon";
import TipsListIconBlack from "@/json/icons/TipsListIconBlack";
import CommonTipsListCart from "../CommonTipsListCart/CommonTipsListCart";
import ChangeCurrencyCard from "../CommonTipsListCart/ChangeCurrencyCard";

export default function TipListingListFourModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-tranparent hover:border-black hover:text-black border-[#E4E4E7] p-2 w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <i className="">
              <TipsListIconBlack />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] z-[999]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium m-0 text-center">
                Tips
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:px-4 px-10 pt-10 md:pt-6 md:pb-6">
            <div className="relative mb-8">
              <CommonTipsListCart
                title="Tip 1"
                subText="Create a title that's both descriptive and attention-grabbing. A well-crafted title can pique interest."
                bgColor="#FFF9D7"
              />
            </div>
            <div className="relative mb-8">
              <CommonTipsListCart
                title="Tip 2"
                subText="Write a comprehensive description that highlights what makes your service unique. Be clear and concise."
                bgColor="#F7F4F1"
              />
            </div>
            <div className="relative">
              <CommonTipsListCart
                title="Tip 3"
                subText="If your service is location-dependent, provide clear details about the area you cover. Accuracy in location information enhances trust and improves the customer experience."
                bgColor="#E8FBDA"
              />
            </div>
            <div className="relative">
                <ChangeCurrencyCard />
              </div>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
