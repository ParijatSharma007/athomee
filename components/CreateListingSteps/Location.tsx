"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import assets from "@/json/assets";
import NotificationToolTipIcon from "@/json/icons/NotificationToolTipIcon";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const Location = () => {
  return (
    <div>
      <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb-4">
        <h2 className="text-[18px] text-gray-900 mb-1 md:text-[16px]">
          Add Location
        </h2>
        <p className="text-[14px] text-gray-500">
          Create a title that&#39;s both descriptive and attention-grabbing.
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-3">
          <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px] col-span-2">
            <label className="text-[12px] text-gray-400 m-0 leading-0">
              Address
            </label>
            <Input
              type="text"
              placeholder="Address"
              value="25 Draper Street"
              className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400"
              onChange={() => console.log("demo")}
            />
            <div className="absolute right-4 top-[50%] translate-y-[-50%]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-0 p-0 w-auto h-auto bg-transparent"
                    >
                      <NotificationToolTipIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white">
                    <p>Lorem Ipsum is simply dummy text.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="relative md:col-span-2 border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
            <label className="text-[12px] text-gray-400 m-0 leading-0">
              Country
            </label>
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="USA"
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
          <div className="relative md:col-span-2 border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
            <label className="text-[12px] text-gray-400 m-0 leading-0">
              City
            </label>
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="25 Draper Street"
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
          <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
            <label className="text-[12px] text-gray-400 m-0 leading-0">
              State
            </label>
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="CA"
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
          <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] ">
            <label className="text-[12px] text-gray-400 m-0 leading-0">
              Zip code
            </label>
            <Input
              type="text"
              placeholder="Zipcode"
              value="33-222"
              className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400"
              onChange={() => console.log("demo")}
            />
          </div>
        </div>
      </div>
      <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb-4">
        <h2 className="text-[18px] text-gray-900 mb-1 md:text-[16px]">
          Which areas do you serve?
        </h2>
        <p className="text-[14px] text-gray-500">
          Just let your client know the areas you&#39;re operating in.
        </p>

        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px] w-[154px] md:w-full">
          <label className="text-[12px] text-gray-400 m-0 leading-0">
            Operating area
          </label>
          <Select>
            <SelectTrigger
              icon={<ChevronDown color="#70707B" />}
              className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
            >
              <SelectValue
                placeholder="+ 1 km"
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

      <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb-4">
        <h2 className="text-[18px] text-gray-900 mb-1">
          Would you like to specify districts or streets to exclude?
        </h2>
        <div className="grid grid-cols-2 mb-3">
          <div className="relative md:col-span-2 border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px] md:mt-[12px] ">
            <label className="text-[12px] text-gray-400 m-0 leading-0">
              Excluded districts/streets
            </label>
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#70707B" />}
                className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
              >
                <SelectValue
                  placeholder="Williams Street"
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
        <Button variant={"ghost"} className="text-md font-satoshi_medium">
          <i className="mr-2">
            <PluseBtnIcon />
          </i>{" "}
          Exclude more
        </Button>
      </div>
      <div className="relative">
        <h2 className="text-[18px] text-gray-900 mb-1 md:text-[16px]">
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
