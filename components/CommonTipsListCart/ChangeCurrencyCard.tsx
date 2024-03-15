import GlobeIcon from "@/json/icons/GlobeIcon";
import TipsListIcon from "@/json/icons/TipsListIcon";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChevronDown } from "lucide-react";

const ChangeCurrencyCard = () => {
  return (
    <div>
      <div
        className={`{relative} pt-8 pb-6 px-6 rounded-[12px] bg-[#EDF6FF] mt-8`}
      >
        <i className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center absolute top-[-16px] left-[24px] shadow-xl">
          <GlobeIcon />
        </i>
        <h5 className="text-[16px] text-gray-900 font-satoshi_medium mb-2">
          Want to change the currency?
        </h5>
        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] bg-white">
          <label className="text-[12px] text-gray-400 m-0 leading-0">
            Sub-category
          </label>
          <Select>
            <SelectTrigger
              icon={<ChevronDown color="#70707B" />}
              className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
            >
              <SelectValue
                placeholder="USD"
                className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
              />
            </SelectTrigger>
            <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
              <SelectGroup className="p-0">
                <SelectItem
                  value="1"
                  className="text-[16px] text-gray-900 font-satoshi_medium"
                >
                  USD
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
  );
};

export default ChangeCurrencyCard;
