import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Selectoption } from "@/json/typescript/commonAllInterfaces";

interface SelectProps {
  options?: Selectoption[];
  selectedOption?: string;
  onSelect?(selectedOption: Selectoption): void;
  label?: string | JSX.Element | JSX.Element[];
}

const CustomSelectWithLabel = ({
  options,
  label,
  selectedOption,
}: SelectProps) => {
  const [Opendropdown, setOpendropdown] = useState(false);
  
  const toggleDropdown = () => {
    setOpendropdown(!Opendropdown);
  };
  return (
    <div
      className={`relative h-[66px] border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]  ${
        selectedOption ? "static" : ""
      } ${selectedOption ? "text-[12px]" : "text-[16px]"} `}
    >
      <label
        className={`text-gray-400 m-0 leading-0 absolute  ${
          selectedOption ? "top-0" : "top-1/2"
        } ${selectedOption ? "translate-y-0" : "-translate-y-1/2"}`}
      >
        {label}
      </label>
      <Select>
        <SelectTrigger
          className={`border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium absolute top-1/2 -translate-y-1/2 ${
            !selectedOption && Opendropdown
              ? "focus:mt-2 focus:translate-y-0"
              : ""
          }`}
          onClick={toggleDropdown}
        >
          <SelectValue
            placeholder={selectedOption}
            className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
          />
        </SelectTrigger>
        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
          <SelectGroup className="p-0">
            <SelectItem
              value="1"
              className="text-[16px] text-gray-900 font-satoshi_medium"
            >
              {selectedOption}
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
  );
};

export default CustomSelectWithLabel;
