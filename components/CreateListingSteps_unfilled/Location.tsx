import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import assets from "@/json/assets";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NotificTagServiceIcon from "@/json/icons/NotificTagServiceIcon";
import NotificationToolTipIcon from "@/json/icons/NotificationToolTipIcon";
import CustomInputWithLabel from "../ui/CustomInputWithLabel";
import CommonInput from "../CommonInput/CommonInput";
import { ChevronDown } from "lucide-react";
const Location = () => {
  return (
    <div>
      <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:mb-4 md:pb-6">
        <h2 className="text-[18px] text-gray-900 mb-1">Add Location</h2>
        <p className="text-[14px] text-gray-500 mb-8">
          Create a title that&#39;s both descriptive and attention-grabbing.
        </p>

        <div className="grid grid-cols-2 gap-6 lg:gap-4 md:gap3">
          <div className="col-span-2">
            {" "}
            <CommonInput placeholderLabel="Address" withTooltip />
          </div>

          <div className="relative  h-[66px] md:col-span-2 flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] ">
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="Country"
                  className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
                />
              </SelectTrigger>
              <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                <SelectGroup className="p-0">
                  <SelectItem
                    value="1"
                    className="text-[16px] text-gray-900 font-satoshi_medium"
                  >
                    USA
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
          <div className="relative h-[66px] md:col-span-2 flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] ">
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="City"
                  className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
                />
              </SelectTrigger>
              <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                <SelectGroup className="p-0">
                  <SelectItem
                    value="1"
                    className="text-[16px] text-gray-900 font-satoshi_medium"
                  >
                    USA
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
          <div className="relative h-[66px] flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] ">
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="State"
                  className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
                />
              </SelectTrigger>
              <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                <SelectGroup className="p-0">
                  <SelectItem
                    value="1"
                    className="text-[16px] text-gray-900 font-satoshi_medium"
                  >
                    USA
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

          <CommonInput placeholderLabel="Zip code" />
        </div>
      </div>
      <div className="relative  pb-0 mb-6 md:mb-4">
        <h2 className="text-[18px] text-gray-900 mb-1">
          Which areas do you serve?
        </h2>
        <p className="text-[14px] text-gray-500">
          Just let your client know the areas you&#39;re operating in.
        </p>

        <div className="relative h-[66px] md:w-full flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px] w-[154px]">
          <Select>
            <SelectTrigger
              icon={<ChevronDown color="#70707B" />}
              className="w-full border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_medium "
            >
              <SelectValue
                placeholder="+ 0  km"
                className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
              />
            </SelectTrigger>
            <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
              <SelectGroup className="p-0">
                <SelectItem
                  value="1"
                  className="text-[16px] text-gray-900 font-satoshi_medium"
                >
                  USA
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

      <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:mb-4 md:pb-6">
        <h2 className="text-[18px] text-gray-400 mb-1">
          Would you like to specify districts or streets to exclude?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-1 mb-3">
          <div className="relative h-[66px] flex flex-col justify-center border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px] ">
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="Select district/street"
                  className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
                />
              </SelectTrigger>
              <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                <SelectGroup className="p-0">
                  <SelectItem
                    value="1"
                    className="text-[16px] text-gray-900 font-satoshi_medium"
                  >
                    USA
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
        <Button
          variant={"ghost"}
          className="text-md font-satoshi_regular opacity-40"
        >
          <i className="mr-2">
            <PluseBtnIcon />
          </i>{" "}
          Exclude more
        </Button>
      </div>
      <div className="relative">
        <h2 className="text-[18px] text-gray-900 mb-1">
          Is this the right location?
        </h2>
        <p className="text-[14px] text-gray-500">Move the pin if needed.</p>
        <div className="relative w-full md:hidden mt-6">
          <Image
            className="w-full rounded-[12px]"
            src={assets.mapImgMain}
            alt="map"
            width={1010}
            height={205}
          />
        </div>
        <div className="relative w-full hidden md:block md:mt-4">
          <Image
            className="w-full rounded-[12px]"
            src={assets.mapNewImgWraploc1}
            alt="map"
            width={1010}
            height={205}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
