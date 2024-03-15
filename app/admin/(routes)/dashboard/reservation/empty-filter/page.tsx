"use client";

import Container from "@/components/Container";
import ReservationHeader from "@/components/ReservationHeader/ReservationHeader";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import TableComponent from "@/components/TableComponent/TableComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";
import CaklendarIcon from "@/json/icons/CaklendarIcon";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import CloseIcon from "@/json/icons/CloseIcon";
import LocationIcon from "@/json/icons/LocationIcon";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface popoverProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  classNamePopoverContent?: string;
  classNameBtn?: string;
}
const PopOverComponent = ({
  label,
  children,
  className,
  classNamePopoverContent,
  classNameBtn,
}: popoverProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover>
      <PopoverTrigger asChild className={cn("w-auto", className)}>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          disabled={open}
          className={cn("bg-gray-100 border-0 min-w-[120px]", classNameBtn)}
        >
          {label}
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
        className={cn(
          "w-full max-w-[384px] sm:!max-w-[95vw] sm:!min-w-[95vw] bg-white rounded-xl border-none shadow-[1px_1px_30px_10px_rgba(0,0,0,0.07)]",
          classNamePopoverContent
        )}
        align={"start"}
        onInteractOutside={() => setOpen(false)}
      >
        <div>{children}</div>
      </PopoverContent>
    </Popover>
  );
};

export default function Index() {
  const tableHeadListForServices = [
    "Category",
    "Service",
    "Vendor",
    "Publication date",
    "Price",
    "",
  ];
  const select1 = [
    {
      mainText: "Beauty and Wellness Services",
      subList: [
        {
          eachSubListItem: "Hair Styling and Cutting",
        },
        {
          eachSubListItem: "Makeup and Cosmetics",
        },
        {
          eachSubListItem: "Nail Care and Manicure/Pedicure",
        },
        {
          eachSubListItem: "Spa and Massage Therapy",
        },
        {
          eachSubListItem: "Skincare and Facials",
        },
      ],
    },
    {
      mainText: "Home Cleaning and Maintenance",
      subList: [
        {
          eachSubListItem: "General House Cleaning",
        },
        {
          eachSubListItem: "Deep Cleaning Services",
        },
      ],
    },
  ];

  const select2 = [
    {
      itemBold: "San",
      itemPara: "Francisco, CA, USA",
    },
    {
      itemBold: "San1",
      itemPara: "Francisco, CA, USA 1",
    },
    {
      itemBold: "San2",
      itemPara: "Francisco, CA, USA 2",
    },
    {
      itemBold: "San3",
      itemPara: "Francisco, CA, USA 3",
    },
    {
      itemBold: "San4",
      itemPara: "Francisco, CA, USA 4",
    },
    {
      itemBold: "San5",
      itemPara: "Francisco, CA, USA 5",
    },
    {
      itemBold: "San 6",
      itemPara: "Francisco, CA, USA 6",
    },
  ];
  const select3 = [
    {
      itemPara: "Upcoming",
    },
    {
      itemPara: "Requested",
    },
    {
      itemPara: "Completed",
    },
    {
      itemPara: "Declined",
    },
    {
      itemPara: "Canceled",
    },
  ];

  const select4 = [
    {
      itemPara: "Individual vendors",
    },
    {
      itemPara: "Company vendors",
    },
  ];
  const [date, setDate] = useState<Date>();
  const [date1, setDate1] = useState<Date>();

  const CheapButtons = ({ btnName }: { btnName: string }) => {
    return (
      <Button
        variant="outline"
        className=" border-gray-200 h-auto py-1 px-3 font-satoshi_regula bg-gray-100"
      >
        {btnName}
        <span className=" inline-flex items-center justify-center ml-2 ">
          <CloseIcon />
        </span>
      </Button>
    );
  };
  return (
    <div className="py-10 sm:pt-[30px]">
      <Container>
        <ReservationHeader
          dropdownShow={false}
          className="mb-8"
          headerName="Services"
        />
        <div>
          <div className="flex items-center flex-wrap mb-4">
            <PopOverComponent
              label="Status"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNamePopoverContent="min-w-[385px]"
              classNameBtn=" font-satoshi_regular"
            >
              <div className="pb-[60px]">
                <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                  Status
                </h5>
                <div className="h-auto">
                  <ul className="">
                    {select3?.map((item, index) => (
                      <li key={index} className="py-2">
                        {/* <SelectItem value={item?.eachSubListItem}> */}
                        <div
                          className="flex items-center space-x-2"
                          key={index}
                        >
                          <Checkbox
                            id={`${item.itemPara}`}
                            className="checkBox border-gray-200 rounded-[4px]"
                            icon={<CheckboxTickIcon />}
                          />
                          <label
                            htmlFor={`${item.itemPara}`}
                            className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item?.itemPara}
                          </label>
                        </div>
                        {/* </SelectItem> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-0 hover:bg-black hover:text-white"
                      >
                        Clear all
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Show results
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </PopOverComponent>
            <PopOverComponent
              label="Vendor type"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNamePopoverContent="min-w-[385px]"
              classNameBtn="font-satoshi_regular"
            >
              <div className="pb-[60px]">
                <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                  Status
                </h5>
                <div className="h-auto">
                  <ul className="">
                    {select4?.map((item, index) => (
                      <li key={index} className="py-2">
                        {/* <SelectItem value={item?.eachSubListItem}> */}
                        <div
                          className="flex items-center space-x-2"
                          key={index}
                        >
                          <Checkbox
                            id={`${item.itemPara}`}
                            className="checkBox border-gray-200 rounded-[4px]"
                            icon={<CheckboxTickIcon />}
                          />
                          <label
                            htmlFor={`${item.itemPara}`}
                            className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item?.itemPara}
                          </label>
                        </div>
                        {/* </SelectItem> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-0 hover:bg-black hover:text-white"
                      >
                        Clear all
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Show results
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </PopOverComponent>
            <PopOverComponent
              label="Category"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNameBtn=" bg-primary text-white font-satoshi_regular"
            >
              <div className="pb-[60px]">
                <div>
                  <SerachInputComponent className="mb-6" />
                </div>
                <div className="h-[300px] overflow-y-auto">
                  {select1?.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-2 px-4 py-1">
                        <Checkbox
                          id={`${item.mainText}`}
                          className="checkBox border-gray-200 rounded-[4px]"
                          icon={<CheckboxTickIcon />}
                        />
                        <label
                          htmlFor={`${item.mainText}`}
                          className="text-base font-satoshi_medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item?.mainText}
                        </label>
                      </div>

                      <ul className="pl-4 py-1">
                        {item?.subList?.map((item, index) => (
                          <li key={index} className="py-2 pl-4">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Checkbox
                                id={`${item.eachSubListItem}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={`${item.eachSubListItem}`}
                                className="text-base font-satoshi_medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.eachSubListItem}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        type="button"
                        variant={"outline"}
                        className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                      >
                        Cancel
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Apply
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </PopOverComponent>
            <PopOverComponent
              label="Execution date"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNameBtn="font-satoshi_regular"
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
                      <p className="text-[var(--cmn-grey2)] text-[14px]">To</p>
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
            </PopOverComponent>
            <PopOverComponent
              label="Location"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNamePopoverContent="min-w-[350px]"
              classNameBtn=" bg-primary text-white font-satoshi_regular"
            >
              <div className="pb-[60px]">
                <div>
                  <SerachInputComponent className="mb-6" />
                </div>
                <div className="h-[300px] overflow-y-auto">
                  <ul>
                    {select2?.map((item, index) => (
                      <li key={index} className="mb-[20px] last:mb-0">
                        <div className="flex items-center py-0.5">
                          <i className="mr-2">
                            <LocationIcon />
                          </i>
                          <p className="text-gray-400 text-base">
                            <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                              {item?.itemBold}
                            </span>
                            {item?.itemPara}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        type="button"
                        variant={"outline"}
                        className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                      >
                        Clear all
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Show results
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </PopOverComponent>
          </div>
          <div className="flex items-center flex-wrap pb-8 -mx-2">
            <div className="p-2">
              <Button
                variant="outline"
                className=" border-gray-200 h-auto py-1 px-3 font-satoshi_regular"
              >
                Clear all
              </Button>
            </div>
            <div className="p-2">
              <CheapButtons btnName="Hair Styling and Cutting" />
            </div>
            <div className="p-2">
              <CheapButtons btnName="Makeup and Cosmetics" />
            </div>
            <div className="p-2">
              <CheapButtons btnName="Skincare and Facials" />
            </div>
            <div className="p-2">
              <CheapButtons btnName="From 11/10/2023 to 12/10/2023" />
            </div>
            <div className="p-2">
              <CheapButtons btnName="San Francisco, CA, USA" />
            </div>
          </div>
          <TableComponent
            theadList={tableHeadListForServices}
            tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
            className="border-gray-100 rounded-xl border border-separate border-spacing-0"
          >
            <TableRow>
              <TableCell
                colSpan={tableHeadListForServices?.length}
                align="center"
                className="py-[135px]"
              >
                <h6 className="text-[18px] mb-4 font-satoshi_medium">
                  No results...
                </h6>
                <p className=" text-gray-500 text-base">
                  There are currently no results for your request.
                </p>
              </TableCell>
            </TableRow>
          </TableComponent>
        </div>
      </Container>
    </div>
  );
}
