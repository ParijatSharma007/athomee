"use client";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import RightArrowIcon from "@/json/icons/RightArrowIcon";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { countryList } from "@/lib/countryList";
export default function ProfileAddressFieldModal({
  clientlocation,
  onUpdateClientLocation,
}: {
  clientlocation: string | undefined;
  onUpdateClientLocation: (selectedLocation: string) => void;
}) {
  const dataSearch = [
    { name: "Afghanistan", code: "AF" },
    { name: "Åland Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | undefined>(clientlocation);
  console.log("value", value);
  useEffect(() => {
    setValue(clientlocation);
  }, [clientlocation]);

  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [test, settest] = useState("");

  // Filter data based on search query
  const filteredData = countryList?.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const buttonRef = useRef<any>(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const handleSave = () => {
    onUpdateClientLocation(value || "");
    setOpen(false);
    handleClick();
    setSearchQuery("");
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-transparent w-full text-left justify-between text-gray-900 font-satoshi_medium p-0 "
          >
            {value || clientlocation}
            <i>
              <RightArrowIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] overflow-hidden h-[80vh] flex flex-col ">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Where you live
            </DialogTitle>
          </DialogHeader>
          <div className="relative overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col h-full">
            <div className="p-6 h-[80%] overflow-hidden md:h-[90%] md:p-4">
              <Command className="border-0 px-0 h-[100%]">
                {/* <CommandInput
                  placeholder="Search framework..."
                  aria-expanded={open}
                  className=""
                /> */}
                <Input
                  type="text"
                  placeholder="Search for Location"
                  className="bg-[#FAFAFA] border-0 p-4 h-[54px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <CommandEmpty>No data found.</CommandEmpty>
                <CommandGroup className="border-solid border border-gray-200 rounded-[12px] mt-2 max-h-[65vh]  overflow-y-auto">
                  {/* <DialogClose> */}
                  {filteredData?.map((items, index) => (
                    <CommandItem
                      key={index}
                      value={items?.name}
                      // onSelect={(currentValue) => {
                      //   setValue(currentValue === value ? "" : currentValue);
                      //   onUpdateClientLocation(currentValue);

                      //   settest(currentValue);
                      // }}
                      onSelect={(currentValue) => {
                        const selectedItem = filteredData.find(
                          (item) =>
                            item.name.toLowerCase() ===
                            currentValue.toLowerCase()
                        );

                        if (selectedItem) {
                          setValue(selectedItem.name);
                          onUpdateClientLocation(selectedItem.name);

                          settest(selectedItem.name);
                        }
                      }}
                      className="cursor-pointer"
                    >
                      {items?.name}
                      {/* <span className="text-gray-400 pl-1.5">{items.name}</span> */}

                      <Check
                        id={items.name}
                        className={cn(
                          "mr-2 h-4 w-4 ml-auto",
                          value?.toLowerCase() === items?.name.toLowerCase()
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                  {/* </DialogClose> */}
                </CommandGroup>
              </Command>
            </div>
            <div className="relative md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full md:flex-wrap">
                <li className="mr-2 sm:mr-0 sm:mb-4 sm:w-full md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      ref={buttonRef}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
                    onClick={handleSave}
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary md:w-full hover:text-white"
                  >
                    Save
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
