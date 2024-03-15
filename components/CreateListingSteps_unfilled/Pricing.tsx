import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import DelectPopUpIcon from "@/json/icons/DelectPopUpIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import TickArrowRightIcon from "@/json/icons/TickArrowRightIcon";
import TableTickUnderLineIcon from "@/json/icons/TableTickUnderLineIcon";
import { Textarea } from "../ui/textarea";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
import { ChevronDown } from "lucide-react";

const Pricing = () => {
  return (
    <div className="flex items-start md:flex-wrap h-full md:h-auto">
      <div className="w-[85%] xl:w-[80%] md:w-full md:pr-0 xl:pr-4 pr-6">
        <div className="relative max-w-[736px] mr-auto">
          <div className="relative mb-12">
            <h2 className="text-[18px] text-gray-900 mb-1">Add packages</h2>
            <p className="text-[14px] text-gray-500">
              Spice up your service by creating different packages that cater to
              various needs and preferences.
            </p>
          </div>
          <div className="relative pr-[44px] md:pr-0">
            <div className="relative flex justify-start mb-8 md:mb-4 md:flex-wrap">
              <div className="w-[40%] md:w-full md:mb-4 pr-6">
                <p className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900">
                  Package name
                </p>
              </div>

              <div className="w-[60%] md:w-full">
                <CommonInput placeholderLabel="Add name" />
              </div>
            </div>
            <div className="relative flex justify-start flex-wrap mb-8 md:mb-4 md:w-full">
              <div className="w-[40%] md:w-full md:mb-4 pr-6">
                <p className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 mb-1">
                  Description
                </p>
                <p className="text-[14px] text-gray-900 font-satoshi_regular placeholder:text-gray-500">
                  Spice up your service by creating different packages that
                  cater to various needs and preferences.
                </p>
              </div>

              <div className="w-[60%] md:w-full relative border-gray-200 border border-solid rounded-[8px] pt-[12px] pb-[6px] px-[16px]">
                <Textarea
                  placeholder="Describe details of your offering..."
                  className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium resize-none h-[100px] placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="relative flex flex-wrap mb-8">
              <div className="w-[40%] md:w-full md:mb-4 pr-6">
                <p className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 mb-1">
                  Service duration
                </p>
                <p className="text-[14px] text-gray-900 font-satoshi_regular placeholder:text-gray-500">
                  Lorem Ipsum.{" "}
                </p>
              </div>

              <div className="w-[60%] md:w-full relative h-[66px] flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                <Select>
                  <SelectTrigger
                    icon={<ChevronDown color="#70707B" />}
                    className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-400 font-satoshi_regular "
                  >
                    <SelectValue
                      placeholder="Duration"
                      className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                    />
                  </SelectTrigger>
                  <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                    <SelectGroup className="p-0">
                      <SelectItem
                        value="1"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        15 min
                      </SelectItem>
                      <SelectItem
                        value="2"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        30 min
                      </SelectItem>
                      <SelectItem
                        value="3"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        45 min
                      </SelectItem>
                      <SelectItem
                        value="4"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        1 h
                      </SelectItem>
                      <SelectItem
                        value="5"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        1 h 15 min
                      </SelectItem>
                      <SelectItem
                        value="6"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        1 h 30 min
                      </SelectItem>
                      <SelectItem
                        value="7"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        1 h 45 min
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="relative pr-[44px] mb-4 md:pr-[25px]">
            <div className="w-full flex flex-wrap border-gray-200 border-solid border rounded-[8px]">
              <div className="w-[40%] md:w-full md:p-3 md:border-r-0 md:border-b p-5 text-gray-400 border-gray-200 border-solid border-r">
                <p>Package feature</p>
              </div>
              <div className="w-[60%] md:w-full md:p-3 p-5 ">
                <Select>
                  <SelectTrigger
                    icon={<ChevronDown color="#70707B" />}
                    className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-400 font-satoshi_regular "
                  >
                    <SelectValue
                      placeholder={<TableTickUnderLineIcon />}
                      className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                    />
                  </SelectTrigger>
                  <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                    <SelectGroup className="p-0">
                      <SelectItem
                        value="1"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        <TickArrowRightIcon />
                      </SelectItem>
                      <SelectItem
                        value="2"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        <TableTickUnderLineIcon />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="absolute right-0 top-[50%] translate-y-[-50%]">
              <Button
                type="button"
                className="p-0 w-auto bg-transparent h-auto hover:opacity-75 "
              >
                <DelectPopUpIcon />
              </Button>
            </div>
          </div>
          <div className="relative pr-[44px] mb-4 md:pr-[25px]">
            <div className="w-full flex flex-wrap border-gray-200 border-solid border rounded-[8px]">
              <div className="w-[40%] md:w-full md:p-3 md:border-r-0 md:border-b p-5 text-gray-400 border-gray-200 border-solid border-r">
                <p>Package feature</p>
              </div>
              <div className="w-[60%]  md:w-full md:p-3 p-5 ">
                <Select>
                  <SelectTrigger
                    icon={<ChevronDown color="#70707B" />}
                    className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-400 font-satoshi_regular "
                  >
                    <SelectValue
                      placeholder={<TableTickUnderLineIcon />}
                      className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                    />
                  </SelectTrigger>
                  <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                    <SelectGroup className="p-0">
                      <SelectItem
                        value="1"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        <TickArrowRightIcon />
                      </SelectItem>
                      <SelectItem
                        value="2"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        <TableTickUnderLineIcon />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="absolute right-0 top-[50%] translate-y-[-50%]">
              <Button
                type="button"
                className="p-0 w-auto bg-transparent h-auto hover:opacity-75 "
              >
                <DelectPopUpIcon />
              </Button>
            </div>
          </div>
          <div className="relative pr-[44px] mb-4 md:pr-[25px]">
            <div className="w-full flex flex-wrap border-gray-200 border-solid border rounded-[8px]">
              <div className="w-[40%] md:w-full md:p-3 md:border-r-0 md:border-b p-5 text-gray-400 border-gray-200 border-solid border-r">
                <p>Package feature</p>
              </div>
              <div className="w-[60%] md:w-full md:p-3  p-5 ">
                <Select>
                  <SelectTrigger
                    icon={<ChevronDown color="#70707B" />}
                    className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-400 font-satoshi_regular "
                  >
                    <SelectValue
                      placeholder={<TableTickUnderLineIcon />}
                      className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                    />
                  </SelectTrigger>
                  <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                    <SelectGroup className="p-0">
                      <SelectItem
                        value="1"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        <TickArrowRightIcon />
                      </SelectItem>
                      <SelectItem
                        value="2"
                        className="text-[16px] text-gray-900 font-satoshi_regular"
                      >
                        <TableTickUnderLineIcon />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="absolute right-0 top-[50%] translate-y-[-50%]">
              <Button
                type="button"
                className="p-0 w-auto bg-transparent h-auto hover:opacity-75 "
              >
                <DelectPopUpIcon />
              </Button>
            </div>
          </div>

          <div className="relative mb-8 md:mb-4">
            <Button
              type="button"
              className="p-0 w-auto bg-transparent text-gray-900 font-satoshi_regular text-[14px] inline-flex items-center h-auto hover:opacity-75 "
            >
              <i className="pr-2">
                <PluseBtnIcon />
              </i>
              New feature
            </Button>
          </div>
          <div className="relative pr-[44px] mb-12 md:pr-0 md:mb-4">
            <div className="relative border-gray-200 border-solid border rounded-[8px]">
              <div className="w-full flex flex-wrap border-gray-200 border-solid border-b">
                <div className="w-[40%] md:w-1/2 md:p-3 sm:w-[55%] xs:p-2 p-5 border-gray-200 border-solid border-r">
                  <p className="text-[16px] text-gray-900 font-satoshi_regular">
                    Your rate
                  </p>
                </div>
                <div className="w-[60%] md:w-1/2 md:p-3 sm:w-[45%] xs:p-2 flex items-center p-5 ">
                  <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                    $
                  </p>
                  <Input
                    type="text"
                    placeholder="0.00"
                    className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap border-gray-200 border-solid border-b">
                <div className="w-[40%] md:w-1/2 md:p-3 sm:w-[55%] xs:p-2 p-5 border-gray-200 border-solid border-r">
                  <p className="text-[16px] text-gray-900 font-satoshi_regular">
                    20% Service Fee
                  </p>
                </div>
                <div className="w-[60%] md:w-1/2 md:p-3 sm:w-[45%] xs:p-2 flex items-center p-5 ">
                  <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                    $
                  </p>
                  <Input
                    type="text"
                    placeholder="0.00"
                    className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap border-gray-200 border-solid border-b">
                <div className="w-[40%] md:w-1/2 md:p-3 sm:w-[55%] xs:p-2 p-5 border-gray-200 border-solid border-r">
                  <p className="text-[16px] text-gray-900 font-satoshi_regular">
                    5% Transaction Fee
                  </p>
                </div>
                <div className="w-[60%] md:w-1/2 md:p-3 sm:w-[45%] xs:p-2 flex items-center p-5 ">
                  <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                    $
                  </p>
                  <Input
                    type="text"
                    placeholder="0.00"
                    className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap">
                <div className="w-[40%] md:w-1/2 md:p-3 sm:w-[55%] xs:p-2 p-5 border-gray-200 border-solid border-r">
                  <p className="text-[16px] text-gray-900 font-satoshi_regular">
                    You&#39;ll receive
                  </p>
                </div>
                <div className="w-[60%] md:w-1/2 md:p-3 sm:w-[45%] xs:p-2 flex items-center p-5 ">
                  <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                    $
                  </p>
                  <Input
                    type="text"
                    placeholder="0.00"
                    className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[15%] xl:w-[20%] md:w-full h-[90%] md:h-[auto]">
        <Button
          variant="outline"
          className=" h-full w-full rounded-[8px]  bg-gray-50 hover:bg-gray-100 text-[16px] border-dashed border-[#E4E4E7] flex flex-col  md:py-6"
        >
          <PluseBtnIcon />
          Add package
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
