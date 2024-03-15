import React from "react";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import CustomSelectWithLabel from "../ui/CustomSelectWithLabel";
import CustomInputWithLabel from "../ui/CustomInputWithLabel";
import CommonInput from "../CommonInput/CommonInput";
import { ChevronDown } from "lucide-react";

const Overview = () => {
  return (
    <div className="relative max-w-[736px] lg:max-w-full mr-auto">
      <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb-4">
        <h2 className="text-[18px] text-gray-900 mb-1">Name the service</h2>
        <p className="text-[14px] text-gray-500 mb-6">
          Create a title that&#39;s both descriptive and attention-grabbing.
        </p>

        <CommonInput placeholderLabel="Service name" />
      </div>
      <div className="relative  border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb:4">
        <h2 className="text-[18px] text-gray-900 mb-1">Category</h2>
        <p className="text-[14px] text-gray-500">
          Choose sub-category most suitable for your service.
        </p>
        <div className="relative h-[66px] flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
          <Select>
            <SelectTrigger
              icon={<ChevronDown color="#70707B" />}
              className="w-full border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_medium "
            >
              <SelectValue
                placeholder="Select sub-category"
                className="text-[16px] text-gray-400 font-satoshi_medium  placeholder:font-satoshi_medium placeholder:text-[16px]"
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
      <div className="relative mb-8 md:mb-4">
        <h2 className="text-[18px] text-gray-900 mb-1">Description</h2>
        <p className="text-[14px] text-gray-500">
          Write a comprehensive description that highlights what makes your
          service unique. Be clear and concise.
        </p>
        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[12px] pb-[6px] px-[16px] mt-[24px]">
          <Textarea
            placeholder="Description"
            className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium resize-none h-[200px] placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
