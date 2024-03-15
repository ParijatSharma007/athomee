"use client";
import CommonTipsListCart from "@/components/CommonTipsListCart/CommonTipsListCart";
import Container from "@/components/Container";
import TipListingListThreeModal from "@/components/TipListingListThreeModal/TipListingListThreeModal";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import CheckIconTick from "@/json/icons/CheckIconTick";
import DelectPopUpIcon from "@/json/icons/DelectPopUpIcon";
import NotificationToolTipIcon from "@/json/icons/NotificationToolTipIcon";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import PreviewTriIcon from "@/json/icons/PreviewTriIcon";
import ThreeDot from "@/json/icons/ThreeDot";
import { addDays } from "date-fns";
import { ChevronDown } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";

export default function Availability() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 11, 25),
    to: addDays(new Date(2023, 12, 27), 0),
  });
  const [date2, setDate2] = React.useState<DateRange | undefined>({
    from: new Date(2023, 11, 25),
    to: addDays(new Date(2023, 12, 27), 0),
  });
  return (
    <div className="relative py-10 md:py-6 lg:overflow-hidden">
      <div className="relative hidden md:flex justify-between border-b border-solid border-gray-200 pb-4 px-4">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
          Service editing
        </a>
        <div className="relative flex items-center">
          <TipListingListThreeModal />
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-tranparent hover:border-black hover:text-black border-[#E4E4E7] ml-2 mr-2 p-2 w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <i className="">
              <PreviewTriIcon />
            </i>
          </Button>
          <Button
            variant="outline"
            className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <ThreeDot />
          </Button>
        </div>
      </div>
      <Container>
        <div className="relative mb-6">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[80%] pr-[32px] lg:w-full lg:pr-0">
            <div className="relative flex justify-between item-center mb-10 md:mb-6">
              <h1 className="text-[36px] text-gray-900 lg:text-[30px] md:text-[24px]">
                Availability
              </h1>
            </div>
            <div className="relative max-w-[736px] lg:max-w-full mr-auto">
              <div className="relative mb-8 border-gray-200 border-solid border-b pb-10 md:pb-6">
                <div className="relative mb-10  md:mb-6">
                  <h2 className="text-[18px] text-gray-900 mb-1">
                    Define when you is unvailable
                  </h2>
                  <p className="text-[14px] text-gray-500">
                    Please, choose the dates when your service is unavailable.
                  </p>
                </div>
                <div className="relative custom_avalCalender mb-10 md:mb-6">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    className="md:hidden"
                  />
                  <Calendar
                    initialFocus
                    mode="single"
                    numberOfMonths={1}
                    className="md:block hidden"
                  />
                </div>
                <div className="relative">
                  <ul className="flex items-center">
                    <li className="mr-10 relative flex items-center text-[16px] text-gray-900">
                      <span className="w-[12px] h-[12px] rounded-full bg-red-500 flex items-center mr-3"></span>
                      Today
                    </li>
                    <li className="mr-10 relative flex items-center text-[16px] text-gray-900">
                      <span className="w-[12px] h-[12px] rounded-full bg-gray-300 flex items-center mr-3"></span>
                      Unavailable
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="relative mb-6">
                  <h2 className="text-[18px] text-gray-900 mb-1">
                    What are the operating hours?
                  </h2>
                  <p className="text-[14px] text-gray-500">
                    It&#39;s time to let your customers know when they can enjoy
                    your fantastic service.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative flex flex-wrap mb-8 border-gray-200 border-solid border-b pb-10 md:pb-6 md:pr-[25px]">
                    <div className="w-[17%] md:w-full md:mb-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox icon={<CheckIconTick />} id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-[16px] font-satoshi_medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Monday
                        </label>
                      </div>
                    </div>
                    <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          From
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="10:30 AM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:30 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:45 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                11:00 AM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          To
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="1:00 PM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:00 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:15 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:30 PM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[21%] lg:w-[22%] md:w-full pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          Max revervations
                        </label>
                        <Input
                          type="text"
                          placeholder="1"
                          className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                        <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="border-0 p-0 w-auto h-auto bg-transparent"
                                >
                                  <NotificationToolTipIcon />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white">
                                <p>Lorem Ipsum is simply dummy text.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                    <div className="w-[20%] lg:w-[17%] flex justify-between md:mt-4 md:pl-0 pl-3">
                      <div className="flex items-center justify-center w-auto md:hidden">
                        <Button
                          type="button"
                          className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                        >
                          <DelectPopUpIcon />
                        </Button>
                      </div>
                      <div className="relative">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                    <div
                      className="md:flex items-center justify-center w-auto hidden absolute top-[36%]
                    right-0"
                    >
                      <Button
                        type="button"
                        className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                      >
                        <DelectPopUpIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-8 border-gray-200 border-solid border-b pb-10 md:pb-6">
                    <div className="w-[17%] md:w-full md:mb-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox icon={<CheckIconTick />} id="tuesday" />
                        <label
                          htmlFor="tuesday"
                          className="text-[16px] font-satoshi_medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Tuesday
                        </label>
                      </div>
                    </div>
                    <div className="w-[63%] md:w-[100%] md:mb-3 pr-3">
                      <p className="text-gray-400">Unavailable</p>
                    </div>
                    <div className="w-[20%] md:w-full flex justify-between md:pl-0 pl-3">
                      <div className="relative ml-auto md:ml-0">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-8 border-gray-200 border-solid border-b pb-10 md:pb-6">
                    <div className="relative flex flex-wrap w-full mt-4 md:pr-[25px]">
                      <div className="w-[17%] md:w-full md:mb-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox icon={<CheckIconTick />} id="wednesday" />
                          <label
                            htmlFor="wednesday"
                            className="text-[16px] font-satoshi_medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Wednesday
                          </label>
                        </div>
                      </div>
                      <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            From
                          </label>
                          <Select>
                            <SelectTrigger
                              icon={<ChevronDown color="#70707B" />}
                              className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                            >
                              <SelectValue
                                placeholder="10:30 AM"
                                className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                              />
                            </SelectTrigger>
                            <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                              <SelectGroup className="p-0">
                                <SelectItem
                                  value="1"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  10:30 AM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  10:45 AM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  11:00 AM
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            To
                          </label>
                          <Select>
                            <SelectTrigger
                              icon={<ChevronDown color="#70707B" />}
                              className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                            >
                              <SelectValue
                                placeholder="1:00 PM"
                                className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                              />
                            </SelectTrigger>
                            <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                              <SelectGroup className="p-0">
                                <SelectItem
                                  value="1"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  1:00 PM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  1:15 PM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  1:30 PM
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="w-[21%] lg:w-[22%] md:w-[100%] md:mb-3 pr-3">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            Max revervations
                          </label>
                          <Input
                            type="text"
                            placeholder="1"
                            className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                          />
                          <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="border-0 p-0 w-auto h-auto bg-transparent"
                                  >
                                    <NotificationToolTipIcon />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white">
                                  <p>Lorem Ipsum is simply dummy text.</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      <div className="w-[20%] lg:w-[17%]  md:mt-4 md:pl-0 flex justify-between pl-3 md:hidden">
                        <div className="flex items-center justify-center w-auto">
                          <Button
                            type="button"
                            className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                          >
                            <DelectPopUpIcon />
                          </Button>
                        </div>
                        <div className="relative">
                          <Button
                            variant={"outline"}
                            type="button"
                            className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                          >
                            <PluseBtnIcon />
                          </Button>
                        </div>
                      </div>
                      <div
                        className="md:flex items-center justify-center w-auto hidden absolute top-[50%]
                    right-0"
                      >
                        <Button
                          type="button"
                          className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                        >
                          <DelectPopUpIcon />
                        </Button>
                      </div>
                    </div>
                    <div className="relative flex flex-wrap w-full mt-4 md:pr-[25px]">
                      <div className="w-[17%] md:w-full"></div>
                      <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            From
                          </label>
                          <Select>
                            <SelectTrigger
                              icon={<ChevronDown color="#70707B" />}
                              className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                            >
                              <SelectValue
                                placeholder="10:30 AM"
                                className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                              />
                            </SelectTrigger>
                            <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                              <SelectGroup className="p-0">
                                <SelectItem
                                  value="1"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  10:30 AM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  10:45 AM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  11:00 AM
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            To
                          </label>
                          <Select>
                            <SelectTrigger
                              icon={<ChevronDown color="#70707B" />}
                              className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                            >
                              <SelectValue
                                placeholder="1:00 PM"
                                className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                              />
                            </SelectTrigger>
                            <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                              <SelectGroup className="p-0">
                                <SelectItem
                                  value="1"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  1:00 PM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  1:15 PM
                                </SelectItem>
                                <SelectItem
                                  value="2"
                                  className="text-[16px] text-gray-900 font-satoshi_medium"
                                >
                                  1:30 PM
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="w-[21%] lg:w-[22%] md:w-[100%] md:mb-3 pr-3">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            Max revervations
                          </label>
                          <Input
                            type="text"
                            placeholder="1"
                            className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                          />
                          <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="border-0 p-0 w-auto h-auto bg-transparent"
                                  >
                                    <NotificationToolTipIcon />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white">
                                  <p>Lorem Ipsum is simply dummy text.</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      <div className="w-[20%] lg:w-[17%] md:mt-2 md:pl-0 flex justify-between pl-3">
                        <div className="flex items-center justify-center w-auto md:hidden">
                          <Button
                            type="button"
                            className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                          >
                            <DelectPopUpIcon />
                          </Button>
                        </div>
                        <div className="relative hidden md:block">
                          <Button
                            variant={"outline"}
                            type="button"
                            className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                          >
                            <PluseBtnIcon />
                          </Button>
                        </div>
                      </div>
                      <div
                        className="md:flex items-center justify-center w-auto hidden absolute top-[30%]
                    right-0"
                      >
                        <Button
                          type="button"
                          className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                        >
                          <DelectPopUpIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-8 border-gray-200 border-solid border-b pb-10 md:pb-6">
                    <div className="w-[17%] md:w-full md:mb-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox icon={<CheckIconTick />} id="thursday" />
                        <label
                          htmlFor="thursday"
                          className="text-[16px] font-satoshi_medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Thursday
                        </label>
                      </div>
                    </div>
                    <div className="w-[63%] md:w-[100%] md:mb-3 pr-3">
                      <p className="text-gray-400">Unavailable</p>
                    </div>
                    <div className="w-[20%] md:w-full flex justify-between md:pl-0 pl-3">
                      <div className="relative ml-auto md:ml-0">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-wrap mb-8 border-gray-200 border-solid border-b pb-10 md:pb-6 md:pr-[25px]">
                    <div className="w-[17%] md:w-full md:mb-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox icon={<CheckIconTick />} id="friday" />
                        <label
                          htmlFor="friday"
                          className="text-[16px] font-satoshi_medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Friday
                        </label>
                      </div>
                    </div>
                    <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          From
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="10:30 AM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:30 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:45 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                11:00 AM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[21%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          To
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="1:00 PM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:00 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:15 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:30 PM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[21%] lg:w-[22%] md:w-full pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          Max revervations
                        </label>
                        <Input
                          type="text"
                          placeholder="1"
                          className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                        <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="border-0 p-0 w-auto h-auto bg-transparent"
                                >
                                  <NotificationToolTipIcon />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white">
                                <p>Lorem Ipsum is simply dummy text.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                    <div className="w-[20%] lg:w-[17%] flex justify-between md:mt-4 md:pl-0 pl-3">
                      <div className="flex items-center justify-center w-auto md:hidden">
                        <Button
                          type="button"
                          className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                        >
                          <DelectPopUpIcon />
                        </Button>
                      </div>
                      <div className="relative">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                    <div
                      className="md:flex items-center justify-center w-auto hidden absolute top-[36%]
                    right-0"
                    >
                      <Button
                        type="button"
                        className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                      >
                        <DelectPopUpIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-8 border-gray-200 border-solid border-b pb-10 md:pb-6">
                    <div className="w-[17%] md:w-full md:mb-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox icon={<CheckIconTick />} id="saturday " />
                        <label
                          htmlFor="saturday"
                          className="text-[16px] font-satoshi_medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Saturday
                        </label>
                      </div>
                    </div>
                    <div className="w-[63%] md:w-[100%] md:mb-3 pr-3">
                      <p className="text-gray-400">Unavailable</p>
                    </div>
                    <div className="w-[20%] md:w-full flex justify-between md:pl-0 pl-3">
                      <div className="relative ml-auto md:ml-0">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-8 border-gray-200 border-solid border-b pb-10 md:pb-0 md:border-0">
                    <div className="w-[17%] md:w-full md:mb-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox icon={<CheckIconTick />} id="sunday " />
                        <label
                          htmlFor="sunday"
                          className="text-[16px] font-satoshi_medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Sunday
                        </label>
                      </div>
                    </div>
                    <div className="w-[63%] md:w-[100%] md:mb-3 pr-3">
                      <p className="text-gray-400">Unavailable</p>
                    </div>
                    <div className="w-[20%] md:w-full flex justify-between md:pl-0 pl-3">
                      <div className="relative ml-auto md:ml-0">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Button
                  type="button"
                  className="relative rounded-[32px] px-6 hover:bg-secondary md:w-full"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[20%] lg:hidden">
            <div className="sticky top-8">
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
