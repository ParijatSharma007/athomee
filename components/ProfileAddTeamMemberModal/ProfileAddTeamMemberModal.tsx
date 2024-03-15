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
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
export default function AddMemberModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center  w-autot ext-[14px]  border-gray-200 border-solid border rounded-[32px] bg-primary  hover:text-white hover:bg-secondary">
            <i className="inline-flex mr-2">
              <PluseBtnIcon IconColor="#fff" />
            </i>
            <span className="md:hidden">Add Member</span>
            <span className="md:block hidden">Add</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Invite team member
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] p-10 md:basis-full md:flex md:flex-col md:p-0 md:pb-0">
            <div className=" md:basis-full md:p-4">
              <p className=" mb-6 md:mb-4">
                Members can place orders with the account&#39;s payment method.
              </p>
              <div className="flex flex-wrap  ">
                <div className="relative pr-[16px] md:pr-0 w-[70%] md:w-full mb-8 md:mb-4">
                  <CommonInput placeholderLabel="Member’s email" />
                </div>
                <div className="w-[30%] md:w-full relative h-[66px] flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] md:mb-6">
                  <Select>
                    <SelectTrigger
                      icon={<ChevronDown color="#70707B" />}
                      className="w-full border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_medium "
                    >
                      <SelectValue
                        placeholder="Role"
                        className="text-[16px] text-gray-400 font-satoshi_medium  placeholder:font-satoshi_medium placeholder:text-[16px]"
                      />
                    </SelectTrigger>
                    <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                      <SelectGroup className="p-0">
                        <SelectItem
                          value="1"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Role
                        </SelectItem>
                        <SelectItem
                          value="2"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 1
                        </SelectItem>
                        <SelectItem
                          value="3"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 2
                        </SelectItem>
                        <SelectItem
                          value="4"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 3
                        </SelectItem>
                        <SelectItem
                          value="5"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 4
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full relative mb-8">
                  <h2 className="text-[18px] text-gray-900 mb-1">
                    Add a message (optional)
                  </h2>

                  <div className="relative w-full border-gray-200 border border-solid rounded-[8px] pt-[12px] pb-[6px] px-[16px] mt-[24px]">
                    <Textarea
                      placeholder="Message"
                      className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium resize-none h-[160px] xl:h-[80px] placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed md:relative bottom-0 rounded-[12px] md:rounded-[0] left-0 w-full p-4 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full">
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
                    Send invite
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
