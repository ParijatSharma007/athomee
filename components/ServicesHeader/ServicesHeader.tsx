"use client";

import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CaklendarIcon from "@/json/icons/CaklendarIcon";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";

import CollectionSettingsModal from "../CollectionSettingsModal/CollectionSettingsModal";

export default function ServicesHeader({
  headerName,
  className,
  getValue
//   isMenu,
//   dropdownShow = true,
}: {
  headerName?: string;
  className?: string;
  getValue?:(keyword:string)=>void
//   isMenu?: boolean;
//   dropdownShow?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const [open1, setOpen1] = useState<boolean>(false);

  const [date, setDate] = useState<Date>();

  const [date1, setDate1] = useState<Date>();

  const services = [
    {
      value: "value1",
      label: "Deep Tissue Massage",
    },
    {
      value: "value2",
      label: "Deep Tissue Massage",
    },
    {
      value: "value3",
      label: "Deep Tissue Massage",
    },
    {
      value: "value4",
      label: "Deep Tissue Massage",
    },
    {
      value: "value5",
      label: "Lymphatic Drainage Massage",
    },
    {
      value: "value6",
      label: "Hot Stone Massage",
    },
    {
      value: "value7",
      label: "Shiatsu Massage",
    },
    {
      value: "value8",
      label: "Sports Massage",
    },
    {
      value: "value9",
      label: "Sports Massage",
    },
    {
      value: "value10",
      label: "Aromatherapy Massage",
    },
    {
      value: "value11",
      label: "Aromatherapy Massage",
    },
    {
      value: "value12",
      label: "Lymphatic Drainage Massage",
    },
    {
      value: "value13",
      label: "Deep Tissue Massage",
    },
    {
      value: "value14",
      label: "Deep Tissue Massage",
    },
    {
      value: "value15",
      label: "Deep Tissue Massage",
    },
    {
      value: "value16",
      label: "Deep Tissue Massage",
    },
    {
      value: "value17",
      label: "Trigger Point Massage",
    },
    {
      value: "value18",
      label: "Trigger Point Massage",
    },
  ];
  return (
    <div
      className={cn(
        "flex flex-wrap justify-between items-center mb-6 relative",
        className
      )}
    >
      <h1 className=" text-4xl font-satoshi_medium tracking-[-0.72px] lg:w-full lg:mb-4 sm:mb-2 sm:text-[22px]">
        {headerName || "Reservations"}
      </h1>
      <div className=" flex flex-wrap items-center lg:w-full sm:w-full">
        <SerachInputComponent
          className="flex items-center flex-wrap py-2 px-4 max-w-[400px] bg-gray-100 rounded-xl mx-auto min-w-[400px] sm:min-w-full sm:max-w-full lg:w-full lg:max-w-full lg:min-w-full lg:mb-4"
          placeholderText="Search"
          onInputChange={getValue}
        />
        {/* {!isMenu ? (
          <>
            {dropdownShow && (
              <>
                <div className="ml-4 lg:ml-0">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setOpen(true)}
                        disabled={open}
                        className=" bg-gray-100 border-0 min-w-[120px]"
                      >
                        By period
                        <i className="inline-flex items-center justify-center ml-2">
                          {open ? (
                            <ChevronUp height={16} width={16} />
                          ) : (
                            <ChevronDown height={16} width={16} />
                          )}
                        </i>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-full max-w-[384px] bg-white rounded-xl border-none shadow-[1px_1px_30px_10px_rgba(0,0,0,0.07)]"
                      align={"end"}
                      onInteractOutside={() => setOpen(false)}
                    >
                      <div>
                        <div className="border-b border-solid pb-[24px] border-[#E4E4E7]">
                          <p className="text-primary text-base font-satoshi_medium mb-2.5">
                            By period
                          </p>
                          <div className="flex items-center justify-between space-x-[16px]">
                            <div className="flex items-center justify-between space-x-[8px]">
                              <p className="text-[var(--cmn-grey2)] text-[14px]">
                                From
                              </p>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                                      !date && "text-muted-foreground"
                                    )}
                                  >
                                    <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)] ">
                                      {date ? (
                                        format(date, "MM/dd/yyyy")
                                      ) : (
                                        <>Pick a date</>
                                      )}
                                    </span>

                                    <i>
                                      <CaklendarIcon />
                                    </i>
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div className="flex items-center justify-between space-x-[8px]">
                              <p className="text-[var(--cmn-grey2)] text-[14px]">
                                To
                              </p>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                                      !date && "text-muted-foreground"
                                    )}
                                  >
                                    <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)]">
                                      {date1 ? (
                                        format(date1, "MM/dd/yyyy")
                                      ) : (
                                        <>Pick a date</>
                                      )}
                                    </span>

                                    <i>
                                      <CaklendarIcon />
                                    </i>
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate1}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end items-center pt-6 pb-4">
                          <Button
                            type="button"
                            className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                          >
                            Clear All
                          </Button>
                          <Button type="button">Show results</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="ml-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setOpen1(true)}
                        disabled={open1}
                        className=" bg-gray-100 border-0 min-w-[120px]"
                      >
                        By service
                        <i className="inline-flex items-center justify-center ml-2">
                          {open1 ? (
                            <ChevronUp height={16} width={16} />
                          ) : (
                            <ChevronDown height={16} width={16} />
                          )}
                        </i>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-full max-w-[1280px] bg-white rounded-xl border-none shadow-[1px_1px_30px_10px_rgba(0,0,0,0.07)] xl:max-w-[600px] sm:max-w-[320px]"
                      align={"end"}
                      onInteractOutside={() => setOpen1(false)}
                    >
                      <div className="border-b border-solid pb-1 border-[#E4E4E7]">
                        <p className="text-primary text-base font-satoshi_medium mb-2.5">
                          Your services
                        </p>

                        <div className="flex flex-row flex-wrap justify-start">
                          {services.map((checkbox, i) => (
                            <div
                              className="flex items-center space-x-2.5 mb-4 pr-2 w-[20%] xl:w-1/2 sm:w-full"
                              key={i}
                            >
                              <Checkbox
                                id={checkbox.value}
                                className="rounded border-[#E4E4E7]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={checkbox.value}
                                className="text-sm text-primary font-satoshi_regular leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {checkbox.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end items-center pt-6 pb-4">
                        <Button
                          type="button"
                          className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                        >
                          Clear All
                        </Button>
                        <Button type="button">Show results</Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="lg:absolute lg:right-0 lg:top-[0px] z-[9]">
              <CollectionSettingsModal />
            </div>
          </>
        )} */}
      </div>
    </div>
  );
}
