import React from "react";
import CommonTipsListCart from "@/components/CommonTipsListCart/CommonTipsListCart";
import Container from "@/components/Container";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
export default function ThingsToKnow() {
  return (
    <div className="relative">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative max-w-[736px] mr-auto">
            <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb-4">
              <h2 className="text-[18px] text-gray-900 mb-1">
                Cancellation policy
              </h2>
              <p className="text-[14px] text-gray-500">
                A transparent policy builds trust and makes for smoother
                interactions.
              </p>
              <div className="relative w-full flex flex-wrap mt-[24px] mx-[-8px] md:mx-0">
                <div className="relative w-1/3 md:w-full md:mb-3 md:px-0 px-[8px]">
                  <div className="relative h-[66px] flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-400 font-satoshi_medium "
                      >
                        <SelectValue
                          placeholder="Type"
                          className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_medium"
                          >
                            Non-refundable
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_medium"
                          >
                            Refundable
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="relative w-2/3 md:w-full md:px-0 px-[8px]">
                  <CommonInput placeholderLabel="Add description" />
                </div>
              </div>
            </div>
            <div className="relative mb-6">
              <h2 className="text-[18px] text-gray-900 mb-1">
                Add other rules?
              </h2>
              <p className="text-[14px] text-gray-500">
                Tell more thing the client has to know before reservation
              </p>
              
            </div>
            <div className="relative">
              <Button
              value={"primary"}
                className="relative rounded-[32px] bg-transparent md:bg-gray-200 border-gray-100 border-solid border text-[14px] text-gray-900 font-satoshi_medium px-6 hover:bg-secondary hover:text-white"
              >
                <i className="pr-2">
                  <PluseBtnIcon />
                </i>
                Add rule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
