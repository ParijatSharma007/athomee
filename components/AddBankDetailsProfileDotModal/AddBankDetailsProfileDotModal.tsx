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
import ThreeDots from "@/json/icons/ThreeDots";
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
export default function AddBankDetailsProfileDotModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="p-0 border-0 h-auto rounded-full ml-4 bg-[transparent] hover:bg-[transparent]">
            <ThreeDots />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Enter bank account info
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px]">
            <div className="flex flex-wrap mx-[-16px] p-10">
              <div className="relative px-[16px] w-1/2 mb-8">
                <CommonInput
                  placeholderLabel="Account owner"
                  valueTxt="Julia Brown"
                />
              </div>
              <div className="relative px-[16px] w-1/2 mb-8">
                <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
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
              <div className="relative px-[16px] w-1/2 mb-8">
                <CommonInput
                  placeholderLabel="Country"
                  valueTxt="United States"
                />
              </div>
              <div className="relative px-[16px] w-1/2 mb-8">
                <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
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

              <div className="relative px-[16px] w-1/2">
                <CommonInput
                  placeholderLabel="Account number"
                  valueTxt="9876543210"
                />
              </div>
              <div className="relative px-[16px] w-1/2">
                <CommonInput
                  placeholderLabel="Routing number"
                  valueTxt="223452098716"
                />
              </div>
              <div className="relative px-[16px] w-full mt-6">
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
            <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center">
                <li className="pr-2">
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
                <li>
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white"
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
