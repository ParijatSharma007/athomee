"use client";
/* eslint-disable react/jsx-key */
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LocationIcon from "@/json/icons/LocationIcon";
import moment from "moment";
import React, { useState } from "react";
import Container from "../Container";
import CustomCalenderTime from "../CustomCalenderTime/CustomCalenderTime";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import SerachInputComponent from "../SerachInputComponent/SerachInputComponent";

export default function CommonSearchComponent() {
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
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  /**
   * The above code defines two functions, `handleMainCheckboxChange` and `handleSubCheckboxChange`,
   * which handle the selection and deselection of main and sub-items respectively.
   * @param {string} mainText - The mainText parameter is a string that represents the main item in a
   * list.
   */

  const handleMainCheckboxChange = (mainText: string) => {
    const subItems =
      select1.find((item) => item.mainText === mainText)?.subList || [];
    const subItemIds = subItems.map((subItem) => subItem.eachSubListItem);

    if (selectedItems.includes(mainText)) {
      // Deselect mainText and its sub-items
      setSelectedItems(
        selectedItems.filter(
          (item) => ![mainText, ...subItemIds].includes(item)
        )
      );
    } else {
      // Select mainText and its sub-items
      setSelectedItems([...selectedItems, mainText, ...subItemIds]);
    }
  };

  const handleSubCheckboxChange = (eachSubListItem: string) => {
    if (selectedItems.includes(eachSubListItem)) {
      // Deselect sub-item
      setSelectedItems(
        selectedItems.filter((item) => item !== eachSubListItem)
      );
    } else {
      // Select sub-item
      setSelectedItems([...selectedItems, eachSubListItem]);
    }
  };

  const [SeletedDate, setDataFromChild] = useState<string | null>(null);

  const handleDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  const [input, setInput] = useState("");

  return (
    <div className="-mt-12 sm:-mt-[130px]">
      <Container>
        <div className="customCheckBox_wrap flex w-full items-center justify-between flex-wrap bg-white py-6 px-10 rounded-xl shadow-custom sm:py-3 sm:px-5">
          <div className="flex w-[calc(100%-106px)] lg:w-full lg:basis-full items-center justify-between flex-wrap  ">
            <div className="relative pr-8 lg:pr-0 lg:pb-4 lg:border-b lg:border-gray-200 after:content-[''] after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2 w-1/3 lg:w-full lg:after:hidden">
              <p className="text-sm text-textgray font-satoshi_medium">
                Service Type
              </p>
              <Select>
                <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] font-satoshi_medium text-gray-900">
                  <SelectValue placeholder="Cleaning Services" />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectGroup>
                    {select1?.map((item, index) => (
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
                                  className="checkBox border-gray-200 rounded-[4px]"
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
                    ))}
                  </SelectGroup> */}

                  <SelectGroup>
                    {select1?.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 px-4 py-1">
                          <Checkbox
                            id={`${item.mainText}`}
                            className="checkBox border-gray-200 rounded-[4px]"
                            checked={selectedItems.includes(item.mainText)}
                            onClick={() =>
                              handleMainCheckboxChange(item.mainText)
                            }
                          />
                          <label
                            htmlFor={`${item.mainText}`}
                            className="text-base font-satoshi_medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item?.mainText}
                          </label>
                        </div>
                        <ul className="pl-4 py-1">
                          {item?.subList?.map((subItem, subIndex) => (
                            <li key={subIndex} className="py-2 pl-4">
                              <div
                                className="flex items-center space-x-2"
                                key={subIndex}
                              >
                                <Checkbox
                                  id={`${subItem.eachSubListItem}`}
                                  className="checkBox border-gray-200 rounded-[4px]"
                                  checked={selectedItems.includes(
                                    subItem.eachSubListItem
                                  )}
                                  onClick={() =>
                                    handleSubCheckboxChange(
                                      subItem.eachSubListItem
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`${subItem.eachSubListItem}`}
                                  className="text-base font-satoshi_medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {subItem?.eachSubListItem}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="relative px-8 lg:px-0 lg:py-4 after:content-[''] lg:border-b lg:border-gray-200 after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2 w-1/3 lg:w-full lg:after:hidden">
              <p className="text-sm text-textgray font-satoshi_medium">
                Address
              </p>

              <Select>
                <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] font-satoshi_medium text-gray-900">
                  <SelectValue placeholder="Chicago, IL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <div className="px-2">
                      <SerachInputComponent
                        onInputChange={setInput}
                        className="mb-6"
                      />
                    </div>
                    <div className="h-[260px] overflow-y-auto">
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
                    </div>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="relative px-8 w-1/3 lg:px-0 lg:py-4 lg:border-b lg:border-gray-200 lg:w-full">
              <p className="text-sm text-textgray font-satoshi_medium">
                {/* Address */}
                Date & Time
              </p>
              <div>
                <Select>
                  <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] font-satoshi_medium text-gray-900 text-left">
                    {/* <SelectValue placeholder="Wed, Aug 3 from 10:45 to 11:00" /> */}

                    <SelectValue
                      placeholder={`${moment(SeletedDate).format(
                        "ddd, MMM D "
                      )} from 10:45 `}
                    />
                  </SelectTrigger>
                  <SelectContent
                    className="min-w-[690px]  md:min-w-fit md:max-w-[95vw] md:w-[95vw] min-h-[480px] right-0 left-inherit md:!right-auto md:!left-[50%] md:!translate-x-[-50%]"
                    align="end"
                  >
                    <SelectGroup className="min-w-[100%]">
                      <CustomCalenderTime
                        onDataFromChild={handleDataFromChild}
                      />
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="relative w-[106px] lg:w-full basis-[106px] lg:basis-full lg:pt-4">
            <Button variant="default" className="w-full h-[52px]">
              Search
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
