"use client";
import { ChevronDown } from "lucide-react";

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
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
export default function AddBankDetailsProfileModal() {
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
              Enter bank account info
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] overflow-hidden md:basis-full md:flex md:flex-col md:pb-0">
            <div className=" md:basis-full">
              <div className="flex flex-wrap mx-[-16px] p-10 md:p-1 md:mx-[0]">
                <div className="relative px-[16px] w-1/2 mb-8 md:mb-3 md:px-[12px] md:w-full">
                  <CommonInput
                    placeholderLabel="Account owner"
                    valueTxt="Julia Brown"
                  />
                </div>
                <div className="relative px-[16px] w-1/2 mb-8 md:mb-3 md:px-[12px]">
                  <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px]">
                    <label className="text-[12px] text-gray-400 m-0 leading-0">
                      Account type
                    </label>
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="rgba(228, 228, 231, 1)" />}
                        className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      >
                        <SelectValue placeholder="Company" />
                      </SelectTrigger>
                      <SelectContent className="p-0">
                        <SelectGroup>
                          <SelectLabel>Company</SelectLabel>
                          <SelectItem value="1">Company 1</SelectItem>
                          <SelectItem value="2">Company 2</SelectItem>
                          <SelectItem value="3">Company 3</SelectItem>
                          <SelectItem value="4">Company 4</SelectItem>
                          <SelectItem value="5">Company 5</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="relative px-[16px] w-1/2 mb-8 md:mb-0 md:px-[12px]">
                  <CommonInput
                    placeholderLabel="Country"
                    valueTxt="United States"
                  />
                </div>
                <div className="relative px-[16px] w-1/2 mb-8 md:mb-3 md:px-[12px] md:w-full">
                  <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px]">
                    <label className="text-[12px] text-gray-400 m-0 leading-0">
                      Currency
                    </label>
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="rgba(228, 228, 231, 1)" />}
                        className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      >
                        <SelectValue placeholder="USD" />
                      </SelectTrigger>
                      <SelectContent className="p-0">
                        <SelectGroup>
                          <SelectLabel>USD</SelectLabel>
                          <SelectItem value="1">EUR</SelectItem>
                          <SelectItem value="2">DIN</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="relative px-[16px] w-1/2 md:px-[12px]">
                  <CommonInput
                    placeholderLabel="Account number"
                    valueTxt="9876543210"
                  />
                </div>
                <div className="relative px-[16px] w-1/2 md:px-[12px]">
                  <CommonInput
                    placeholderLabel="Routing number"
                    valueTxt="223452098716"
                  />
                </div>
                <div className="relative px-[16px] w-full mt-6 md:mb-3 md:px-[12px]">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      icon={<CheckboxTickIcon />}
                      className="rounded-[4px] border-gray-200"
                    />
                    <label
                      htmlFor="terms"
                      className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Save this payment method
                    </label>
                  </div>
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
                <li className=" md:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                  >
                    Add payout method
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
