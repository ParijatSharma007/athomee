"use client";
import React from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
export default function EditDateTimeDetailsModal() {
  const timeWrap = [
    {
      timeText: "09:00 - 09:15",
    },
    {
      timeText: "09:15 - 09:30",
    },
    {
      timeText: "10:45 - 11:00",
    },
    {
      timeText: "11:30 - 11:45",
    },
    {
      timeText: "15:30 - 15:45",
    },
    {
      timeText: "15:30 - 15:45",
    },
    {
      timeText: "15:30 - 15:45",
    },
  ];
  const [date, setDate] = React.useState<Date>();
  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (index: number) => {
    setCheckBtn(index);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="rounded-[100px] bg-transparent border border-gray-200 text-[14px] text-gray-900 font-satoshi_regular hover:bg-secondary hover:text-white hover:border-secandary"
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Edit location
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="relative flex px-6 md:px-4 h-full overflow-y-auto md:basis-full md:flex-wrap">
            <div className="relative md:block hidden mb-4">
                <label className="text-sm text-gray-600">Chosen time</label>
                <p className="text-sm text-gray-600 font-satoshi_medium">
                  Wednesday, August 3 from 10:45 to 11:00 (GMT+1)
                </p>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-full"
              />
              <div className="timeWrapList pl-8 md:pl-0 h-full md:h-auto md:w-full md:mt-6">
                <ul className="h-full md:flex md:flex-wrap md:h-auto">
                  {timeWrap.map((item, index) => (
                    <li key={index} className="mb-4 md:w-auto md:mr-3 md:mb-3">
                      <Button
                        value={index}
                        onClick={() => handelCheck(index)}
                        type="button"
                        className={`rounded-[4px] bg-transparent border-solid border border-gray-300 w-full md:w-auto text-base text-gray-900 font-satoshi_regular ${
                          checkBtn == index && "bg-gray-900 text-white"
                        }`}
                      >
                        {item.timeText}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative md:block hidden mb-4">
                <label className="text-sm text-gray-600">New reservation time</label>
                <p className="text-sm text-gray-600 font-satoshi_medium">
                Wednesday, August 3 from 10:45 to 11:00 (GMT+1)
                </p>
              </div>
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-between items-center">
              <div className="relative md:hidden">
                <label className="text-sm text-gray-600">Chosen time</label>
                <p className="text-sm text-gray-600 font-satoshi_medium">
                  Wednesday, August 3 from 10:45 to 11:00 (GMT+1)
                </p>
              </div>
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
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
