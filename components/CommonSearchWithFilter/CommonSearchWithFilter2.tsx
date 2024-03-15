"use client";
/* eslint-disable react/jsx-key */
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import ChevornDown from "@/json/icons/ChevornDown";
import LocationIcon from "@/json/icons/LocationIcon";
import RatingFill from "@/json/icons/RatingFill";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Container from "../Container";
import CustomCalenderTime from "../CustomCalenderTime/CustomCalenderTime";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { useQuery } from "react-query";
import {
  searchCategories,
  searchCategorieswithtoken,
} from "@/api/functions/admin.api";
import { useDebounce } from "use-debounce";

interface buttonProps {
  closeButton: any;
  CommonSearchComponentWithFilter: any;
}

export default function CommonSearchComponentWithFilter({
  closeButton,
  CommonSearchComponentWithFilter,
}: buttonProps) {
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

  const [date, setDate] = React.useState<Date>();
  const [openFilter, setopenFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const toggleFilter = () => {
    setopenFilter(!openFilter);
  };

  // Fetch Category Details
  const [searchCat, setSearchCat] = useState("");
  const [query2] = useDebounce(searchCat, 600);

  const { data: catData } = useQuery(["get_list_cat", query2], async () =>
    searchCategorieswithtoken({
      search: searchCat,
    })
  );


  return (
    <div className="-mt-12  relative lg:mt-0">
      <div className="hidden lg:flex fixed top-0 left-0 w-full px-[16px] border-b bg-white border-gray-200 border-solid py-6 z-[999]">
        <Button
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium bg-transparent p-0 h-auto w-auto hover:opacity-50 hover:bg-transparent"
          onClick={closeButton}
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </Button>
        <p className="absolute left-[50%] translate-x-[-50%] top-[24px] text-[16px] text-gray-900 font-satoshi_medium">
          Client profile
        </p>
        <Button
          type="button"
          className="p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium ml-auto bg-transparent hover:bg-transparent"
        >
          Clear all
        </Button>
      </div>
      <Container>
        <div className="customCheckBox_wrap lg:z-[99] lg:h-[100vh] lg:overflow-y-auto lg:pt-[110px] lg:mt-20px bg-white py-6 px-10 lg:px-0 xl:px-4 rounded-xl shadow-custom lg:!shadow-none relative md:rounded-[0]">
          <div className="flex w-full items-center justify-between flex-wrap ">
            {" "}
            <div className="flex w-[calc(100%-202px)] lg:w-full md:w-full items-center justify-between flex-wrap md:border-b-[1px] md:pb-6">
              <div className="relative lg:mb-3 pr-8 xl:pr-3 after:content-[''] after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2 w-1/3 lg:w-full lgmb-3  lg:border lg:border-gray-200 lg:rounded-[8px] lg:px-4 lg:py-3">
                <p className="text-sm text-textgray font-satoshi_medium">
                  Service Type
                </p>
                <Select>
                  <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] xl:text-[16px]  font-satoshi_medium text-gray-900">
                    <SelectValue placeholder="Cleaning Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {catData?.data?.map((item: any, index: any) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              value={item._id}
                              className="checkBox border-gray-200 rounded-[4px]"
                            />
                            <label
                              htmlFor={`${item.name}`}
                              className="text-base font-satoshi_medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item?.name}
                            </label>
                          </div>
                          <ul className="pl-4 py-1">
                            {item?.sub_categories?.map(
                              (subitem: any, index: number) => (
                                <li key={index} className="py-2 pl-4">
                                  <div
                                    className="flex items-center space-x-2"
                                    key={index}
                                  >
                                    <Checkbox
                                      id={`${subitem.name}`}
                                      className="checkBox border-gray-200 rounded-[4px]"
                                    />
                                    <label
                                      htmlFor={`${subitem.name}`}
                                      className="text-base font-satoshi_medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      {subitem?.name}
                                    </label>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                      {/* {select1?.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              id={`${item.mainText}`}
                              className="checkBox border-gray-200 rounded-[4px]"
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
                                <div
                                  className="flex items-center space-x-2"
                                  key={index}
                                >
                                  <Checkbox
                                    id={`${item.eachSubListItem}`}
                                    className="checkBox border-gray-200 rounded-[4px] "
                                  />
                                  <label
                                    htmlFor={`${item.eachSubListItem}`}
                                    className="text-base font-satoshi_medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {item?.eachSubListItem}
                                  </label>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))} */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative px-8 xl:px-3 after:content-[''] after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2 w-1/3 lg:w-full lg:mb-3 lg:border lg:border-gray-200 lg:rounded-[8px] lg:px-4 lg:py-3">
                <p className="text-sm text-textgray font-satoshi_medium">
                  Location
                </p>

                <Select>
                  <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] xl:text-[16px]  font-satoshi_medium text-gray-900">
                    <SelectValue placeholder="Chicago, IL" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {select2?.map((item, index) => (
                        <SelectItem value={`${index + 1}`} key={index}>
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
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative px-8 xl:px-3 w-1/3 after:content-[''] after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2  lg:w-full lg:mb-3 lg:border lg:border-gray-200 lg:rounded-[8px] lg:px-4 lg:py-3">
                <p className="text-sm text-textgray font-satoshi_medium">
                  Date & time
                </p>
                <div>
                  <Select>
                    <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] font-satoshi_medium text-gray-900 text-left">
                      <SelectValue placeholder="Wed, Aug 3 from 10:45 to 11:00" />
                    </SelectTrigger>
                    <SelectContent
                      className="min-w-[690px]  md:min-w-fit md:max-w-[95vw] md:w-[95vw] min-h-[480px] right-0 left-inherit md:!right-auto md:!left-[50%] md:!translate-x-[-50%]"
                      align="end"
                    >
                      <SelectGroup className="min-w-[100%]">
                        <CustomCalenderTime onDataFromChild={undefined} />
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <Button
              variant={null}
              className=" h-[52px] lg:hidden"
              onClick={toggleFilter}
            >
              Filter <ChevornDown />
            </Button>
            <div className="relative w-[106px] basis-[106px] lg:hidden">
              <Button
                variant="default"
                className="w-full h-[52px]"
              >
                Search
              </Button>
            </div>
          </div>

          {openFilter && (
            <div
              className={`transition-all duration-75 ease-in absolute lg:relative bg-white z-10 w-full left-0 p-10 pt-0 rounded-b-[8px]  `}
            >
              <div className="border-t-[1px] border-[#E4E4E7] mt-6 -mx-10  ">
                <div className="flex w-[calc(100%-202px)] items-center justify-between flex-wrap pt-6 pb-6 px-10">
                  <div className="w-1/3">
                    <p className="text-md  font-satoshi_medium mb-4">
                      Price range
                    </p>
                    <div className="flex">
                      <div className="flex items-center mr-6">
                        <Label
                          htmlFor="email"
                          className="mr-2 text-sm text-textgray"
                        >
                          Min
                        </Label>
                        <Input
                          placeholder="$1,000"
                          value="$1,000"
                          className="w-auto h-auto py-2 px-3 max-w-[70px] text-sm font-normal"
                        />
                      </div>
                      <div className="flex items-center">
                        <Label
                          htmlFor="email"
                          className="mr-2 text-sm text-textgray"
                        >
                          Max
                        </Label>
                        <Input
                          placeholder="$5,000"
                          value="$5,000"
                          className="w-auto h-auto py-2 px-3 max-w-[72px] text-sm font-normal"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <p className="text-md  font-satoshi_medium mb-4">
                      Star rating
                    </p>
                    <div className="flex items-center">
                      <div className="flex  p-4 bg-[#FAFAFA] rounded-[8px] mr-4">
                        <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill={"#fff"} />
                      </div>
                      <p>4 and up</p>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <p className="text-md  font-satoshi_medium mb-4">
                      Availability
                    </p>
                    <div className="flex items-center justify-between  p-3 bg-[#FAFAFA] rounded-[8px] mr-4">
                      <p className="">
                        Show all professionals, even those not available at the
                        moment.
                      </p>
                      <Switch className="custom-switch" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-[#E4E4E7] pt-6 flex justify-end items-center">
                <Button
                  variant={null}
                  className="w-auto h-[52px]"
                  onClick={toggleFilter}
                >
                  Clear all
                </Button>
                <Button variant="default" className="w-auto h-[52px]">
                  Show results
                </Button>
              </div>
            </div>
          )}

          <div
            className={`transition-all duration-75 ease-in absolute lg:relative bg-white z-10 w-full left-0 p-0 pt-0 rounded-b-[8px] hidden lg:block `}
          >
            <div className=" mt-6   ">
              <div className="flex w-full items-center justify-between flex-wrap pt-6 pb-6 px-10 lg:px-0 lg:py-3">
                <div className="w-1/3  lg:w-full mb-4">
                  <p className="text-md  font-satoshi_medium mb-4">
                    Price range
                  </p>
                  <div className="flex">
                    <div className="relative  w-full border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]  mr-6">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Min
                      </label>
                      <Select>
                        <SelectTrigger
                          icon={<ChevronDown color="#70707B" />}
                          className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium text-left"
                        >
                          <SelectValue
                            placeholder="$1,000"
                            className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
                          />
                        </SelectTrigger>
                        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                          <SelectGroup className="p-0">
                            <SelectItem
                              value="1"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Spa and Massage Therapy
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
                    <div className="relative w-full border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] ">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Max
                      </label>
                      <Select>
                        <SelectTrigger
                          icon={<ChevronDown color="#70707B" />}
                          className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium text-left"
                        >
                          <SelectValue
                            placeholder="$5,000"
                            className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
                          />
                        </SelectTrigger>
                        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                          <SelectGroup className="p-0">
                            <SelectItem
                              value="1"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Spa and Massage Therapy
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
                  </div>
                </div>
                <div className="w-1/3 lg:w-full lg:mb-4">
                  <p className="text-md  font-satoshi_medium mb-4">
                    Star rating
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex  p-4 bg-[#FAFAFA] rounded-[8px] mr-4">
                      <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill={"#fff"} />
                    </div>
                    <p>4 and up</p>
                  </div>
                </div>
                <div className="w-1/3 lg:w-full">
                  <p className="text-md  font-satoshi_medium mb-4">
                    Availability
                  </p>
                  <div className="flex items-center justify-between  p-3 bg-[#FAFAFA] rounded-[8px] ">
                    <p className="">
                      Show all professionals, even those not available at the
                      moment.
                    </p>
                    <Switch className="custom-switch" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-6 px-10 flex justify-end items-center">
              <Button variant="default" className="w-full h-[52px]">
                Show results (2,087)
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
