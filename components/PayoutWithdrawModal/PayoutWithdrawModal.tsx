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
import PayWithCardDetailsModal from "../PayWithCardDetailsModal/PayWithCardDetailsModal";
import PayWithPaypalDetailsModal from "../PayWithPaypalDetailsModal/PayWithPaypalDetailsModal";
import PayWithdrawBankDetailsModal from "../PayWithdrawBankDetailsModal/PayWithdrawBankDetailsModal";
export default function PayoutWithdrawModal() {
  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (i: React.SetStateAction<number>) => {
    setCheckBtn(i);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button" className="rounded-[32px]">
            <span className="md:hidden">Withdraw funds</span>
            <span className="hidden md:block">Withdraw</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] overflow-hidden">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Select the withdrawal type
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="relative px-10 pt-4 md:px-4 md:basis-full">
              <div className="mb-4">
                <PayWithCardDetailsModal />
              </div>
              <div className="mb-4">
                <PayWithdrawBankDetailsModal />
              </div>
              <div className="mb-4">
                <PayWithPaypalDetailsModal />
              </div>
            </div>
            <div className="fixed md:relative bottom-0 md:pb-0 left-0 w-full p-4 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
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
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                  >
                    Next
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
