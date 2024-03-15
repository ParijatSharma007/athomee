"use client";

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
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
export default function AddCardProfileModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="flex items-center bg-transparent w-autot ext-[14px] text-gray-900 border-gray-200 border-solid border rounded-[32px] hover:text-white hover:bg-secondary"
          >
            <i className="inline-flex mr-2">
              <PluseBtnIcon />
            </i>
            Add new
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Add credit card
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] overflow-hidden md:basis-full md:flex md:flex-col md:pb-0">
            <div className=" md:basis-full">
              <div className="flex flex-wrap mx-[-16px] p-10 md:p-4 md:mx-[-12px]">
                <div className="relative px-[16px] md:px-[12px] w-full mb-8 md:mb-4">
                  <CommonInput placeholderLabel="Card holder" />
                </div>
                <div className="relative px-[16px] md:px-[12px] w-full mb-8 md:mb-4">
                  <CommonInput placeholderLabel="Card number" />
                </div>
                <div className="relative px-[16px] md:px-[12px] w-1/2">
                  <CommonInput placeholderLabel="Expiration date" />
                </div>
                <div className="relative px-[16px] md:px-[12px] w-1/2">
                  <CommonInput placeholderLabel="CVV" />
                </div>
              </div>
            </div>
            <div className="fixed md:relative bottom-0 left-0 rounded-[12px] md:rounded-[0] md:border-b-0 w-full p-4 md:pb-0 bg-white border-gray-100 border border-solid flex justify-end items-center">
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
                    Save card
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
