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

const SortByDropdown = (props: { hideDropdown?: boolean }) => {
  const { hideDropdown } = props;
  const [sorted, setSorted] = useState<string>("");
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

  return (
    <Select>
      <SelectTrigger
        icon={hideDropdown ? <FilterIcon /> : <ChevronDown color="#131316" />}
        className="w-full border-0 p-0 h-auto text-[18px] font-satoshi_medium text-gray-900"
      >
        <SelectValue placeholder={hideDropdown ? null : "Most Popular"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {select1?.map((item, index) => (
            <div key={index}>
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-1"
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

export default SortByDropdown;
