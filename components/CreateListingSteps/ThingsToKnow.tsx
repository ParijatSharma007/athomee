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
import { Button } from "@/components/ui/button";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
import { ChevronDown } from "lucide-react";
export default function ThingsToKnow() {
  return (
    <div className="relative">
        <div className="flex flex-wrap">
          <div className="w-full">
          <div className="relative max-w-[736px] mr-auto lg:max-w-full">
              <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb-4">
                <h2 className="text-[18px] text-gray-900 mb-1 md:text-[16px]">
                  Cancellation policy
                </h2>
                <p className="text-[14px] text-gray-500">
                  A transparent policy builds trust and makes for smoother
                  interactions.
                </p>
                <div className="relative w-full flex md:flex-wrap flex-wrap mt-[24px] mx-[-8px] md:mx-0">
                  <div className="relative w-1/3 md:w-full md:mb-4 md:px-0 px-[8px]">
                    <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Type
                      </label>
                      <Select>
                        <SelectTrigger icon={<ChevronDown color="#70707B" />} className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium ">
                          <SelectValue
                            placeholder="Non-refundable"
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
                    <div className=" border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Description
                      </label>
                      <Input
                        type="text"
                        placeholder="This reservation is non-refundable."
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mb-6 md:mb-4">
                <h2 className="text-[18px] text-gray-900 mb-1 md:text-[16px]">
                  Add other rules?
                </h2>
                <p className="text-[14px] text-gray-500">
                  Tell more thing the client has to know before reservation
                </p>
                <div className="relative w-full flex flex-wrap mt-[24px] mx-[-8px] md:mx-0">
                  <div className="relative w-1/3 md:w-full md:mb-4 md:px-0 px-[8px]">
                    <div className=" border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Input name
                      </label>
                      <Input
                        type="text"
                        placeholder="Name the rule"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="relative w-2/3 md:w-full md:px-0 px-[8px]">
                    <div className=" border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Input name
                      </label>
                      <Input
                        type="text"
                        placeholder="Add description"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mb-12 md:mb-6">
                <Button
                  type="button"
                  className="relative rounded-[32px] bg-gray-100 text-[14px] text-gray-900 font-satoshi_medium px-6 hover:bg-secondary hover:text-white"
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
