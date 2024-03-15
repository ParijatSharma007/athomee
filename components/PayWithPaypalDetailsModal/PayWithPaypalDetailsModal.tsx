"use client";

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
import InfoIconGray from "@/json/icons/InfoIconGray";
import PaypalIcon from "@/json/icons/PaypalIcon";
import PayWithChangeMethodModal from "../PayWithChangeMethodModal/PayWithChangeMethodModal";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
export default function PayWithPaypalDetailsModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="relative flex items-center justify-start bg-gray-50 w-full h-auto px-4 py-4 rounded-[8px] border-transparent border-solid border overflow-hidden hover:bg-[#F5EFFD] hover:border-gray-400">
            <i className="mr-4">
              <PaypalIcon />
            </i>
            <label>
              <p className="text-[20px] flex pr-1 text-gray-900 font-satoshi_medium leading-[1] mb-1.5">
                PayPal
              </p>
              <p className="pr-1 text-gray-900 font-satoshi_medium leading-[1] break-all">
                You will be redirected to the PayPal website.
              </p>
            </label>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] overflow-hidden">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Withdrawal funds
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="p-10 md:p-4 md:basis-full xl:p-6">
              <div className="flex items-center justify-between pb-6 border-b border-solid border-gray-200">
                <div className="relative pr-4">
                  <p className="text-[16px] text-gray-400">Your balace</p>
                  <p className="text-[16px] text-gray-900 font-satoshi_medium mb-6">
                    $640.50
                  </p>
                  <p className="text-[16px] text-gray-400">
                    Default payout method
                  </p>
                  <p className="text-[16px] text-gray-900 font-satoshi_medium">
                    Paypal account
                  </p>
                  <p className="text-[16px] text-gray-900 font-satoshi_regular">
                    Ending in 6375
                  </p>
                </div>
                <PayWithChangeMethodModal />
              </div>
              <div className="relative pt-10">
                <h3 className="text-[20px] text-gray-900 font-satoshi_medium mb-1">
                  Enter amount
                </h3>
                <p className="text-[16px] text-gray-900 font-satoshi_regular">
                  Funds will arrive as soon as the bank or payment system
                  processes the payment.
                </p>
                <div className="relative border-gray-200 border border-solid rounded-[8px] py-[14px] px-[20px] mb-4 mt-6">
                  <label className="text-[12px] text-gray-400 m-0 leading-0 absolute left-[10px] top-[15px]">
                    $
                  </label>
                  <Input
                    type="text"
                    className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        asChild
                        className="absolute right-[12px] top-[18px]"
                      >
                        <i>
                          <InfoIconGray />
                        </i>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem, dolor.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border-t md:pb-0 border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full md:flex-wrap">
                <li className="pr-2 md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                    >
                      Back
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                  >
                    Withdraw funds
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
