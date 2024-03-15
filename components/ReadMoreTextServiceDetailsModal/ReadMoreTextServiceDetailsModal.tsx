"use client";

import { getServiceDetails } from "@/api/functions/admin.api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ArrowBtnSeeIcon from "@/json/icons/ArrowBtnSeeIcon";
import TickArrowRightIcon from "@/json/icons/TickArrowRightIcon";
import { useRouter } from "next/router";
import { useQuery } from "react-query";



interface PropsTypeInterface{
  title?: string
  description?: string
}

export default function ReadMoreTextServiceDetailsModal({
 
  title,
  description
}: PropsTypeInterface) {

 

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-transparent text-[16px] text-gray-900 font-satoshi_medium p-0 flex item-center hover:bg-transparent hover:opacity-70"
          >
            Show more
            <i className="pl-2">
              <ArrowBtnSeeIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">

              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:basis-full md:flex md:flex-col">
            <div className="px-10 py-4 md:px-4 md:basis-full">
              <p dangerouslySetInnerHTML={{__html : `${description}`}} className="text-[18px] text-gray-900 break-all">
                  {/* {description} */}
              </p>
              {/* <ul className="py-4">
                <li className="relative flex items-start  mb-3 font-satoshi_regular">
                  <i className="inline-flex pr-2 pt-1">
                    <TickArrowRightIcon />
                  </i>
                    {description}
                </li>
                <li className="relative flex items-start  mb-3 font-satoshi_regular">
                  <i className="inline-flex pr-2 pt-1">
                    <TickArrowRightIcon />
                  </i>
            {description}
                </li>
                <li className="relative flex items-start font-satoshi_regular">
                  <i className="inline-flex pr-2 pt-1">
                    <TickArrowRightIcon />
                  </i>
           
                </li>
              </ul> */}
            </div>
            <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center  sm:w-full">
                <li className=" sm:w-full">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white sm:w-full"
                    >
                      Got it!
                    </Button>
                  </DialogClose>
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
