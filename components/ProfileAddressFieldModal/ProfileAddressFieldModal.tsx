"use client";
import React from "react";

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
export default function ProfileAddressFieldModal() {
  
  const dataSearch = [
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "FL, USA",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "Beach, FL, USA",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "Platja, Spain",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "OK, USA",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "Gardens, FL, USA",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "Beach, FL, USA",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "FL, USA",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "Platja, Spain",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "OK, USA",
    },
    {
      txtListTitle: "Miami ",
      txtListTitleSub: "Gardens, FL, USA",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-transparent w-full text-left justify-between text-gray-900 font-satoshi_medium p-0 "
          >
            United States
            <i>
              <RightArrowIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] overflow-hidden">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Edit your avatar
            </DialogTitle>
          </DialogHeader>
          <div className="relative overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="p-6 h-[70%] overflow-hidden md:h-[90%] md:p-4">
              <Command className="border-0 px-0 h-[100%]">
                <CommandInput
                  placeholder="Search framework..."
                  aria-expanded={open}
                  className=""
                />
                <CommandEmpty>No data found.</CommandEmpty>
                <CommandGroup className="border-solid border border-gray-200 rounded-[12px] mt-2 max-h-[85%] h-auto overflow-y-auto">
                  <DialogClose>
                    {dataSearch.map((items, index) => (
                      <CommandItem
                        key={index}
                        value={items.txtListTitleSub}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === items.txtListTitleSub
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {items.txtListTitle}
                        <span className="text-gray-400 pl-1.5">
                          {items.txtListTitleSub}
                        </span>
                      </CommandItem>
                    ))}
                  </DialogClose>
                </CommandGroup>
              </Command>
            </div>
            <div className="absolute md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full md:flex-wrap">
                <li className="mr-2 sm:mr-0 sm:mb-4 sm:w-full md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
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
