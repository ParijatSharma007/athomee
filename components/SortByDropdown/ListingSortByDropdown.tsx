"use client";
import { ChevronDown } from "lucide-react";
import FilterIcon from "../ui/FilterIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const ListSortByDropdown = (props: {
  hideDropdown?: boolean;
  sortby: Function;
}) => {
  const { hideDropdown, sortby } = props;
  const [sorted, setSorted] = useState<string>("rating");
  const [filterorder, setFilterorder] = useState<string>("desc");
  const select1 = [
    {
      mainText: "Most popular",
      sortvalue: "rating",
    },
    {
      mainText: "Latest",
      sortvalue: "createdAt",
    },
    {
      mainText: "Price: from lowest to highest",
      sortvalue: "price_low",
    },
    {
      mainText: "Price: from highest to lowest",
      sortvalue: "price_high",
    },
  ];
  const handleSortChange = (sortvalue: string) => {
    console.log("sortvalue", sortvalue);
    setSorted(sortvalue);
    sortby(sorted, filterorder);
    hideDropdown;
  };

  return (
    <Select>
      <SelectTrigger
        icon={hideDropdown ? <FilterIcon /> : <ChevronDown color="#131316" />}
        className="w-full border-0 p-0 h-auto text-[18px] font-satoshi_medium text-gray-900"
      >
        {/* <SelectValue placeholder={hideDropdown ? null : "Most Popular"} /> */}
        <SelectValue
          placeholder={
            hideDropdown
              ? null
              : select1.find((item) => item.sortvalue === sorted)?.mainText ||
                "Choose Filter"
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {select1?.map((item, index) => (
            <div key={index}>
              <div
                className="flex items-center space-x-2 px-4 py-1"
                onClick={() => handleSortChange(item.sortvalue)}
              >
                <label
                  htmlFor={`${item.mainText}`}
                  className="text-base font-satoshi_medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item?.mainText}
                </label>
              </div>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ListSortByDropdown;
