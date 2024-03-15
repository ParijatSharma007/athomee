"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaypalIcon from "@/json/icons/PaypalIcon";
import VisaIcon from "@/json/icons/VisaIcon";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
export default function PayWithChangeMethodModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant={"outline"}
            className="rounded-[32px] border-gray-400 hover:bg-secondary hover:border-secondary hover:text-white"
          >
            Change
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] overflow-hidden">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Change the withdrawal method?
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="relative radioBtnPayment_mainWrap px-10 md:p-4 md:basis-full">
              <RadioGroup
                defaultValue="comfortable"
                className="flex flex-wrap mx-[-12px] gap-0"
              >
                <div className="px-[12px] w-full mb-6 xl:mb-3">
                  <div className="relative w-full">
                    <RadioGroupItem
                      value="default"
                      id="r1"
                      className="radioBtnMain absolute w-full h-full left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-gray-100 data-[state=checked]:border-gray-900"
                    />
                    <div
                      id="r1"
                      className="relative shadow-[0px_8px_21px_-5px_rgba(0,0,0,0.05)] border-gray-100 border-solid border rounded-[12px] p-4 xl:p-2 w-full"
                    >
                      <p className="text-[16px] text-gray-900 font-satoshi_medium">
                        Credit card
                      </p>
                      <p className="text-[14px] text-gray-400">Expires 10/24</p>
                      <div className="flex justify-between mt-4">
                        <p>Ending in 6375</p>
                        <VisaIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-[12px] w-full mb-6 xl:mb-3">
                  <div className="relative w-full">
                    <RadioGroupItem
                      value="default2"
                      id="r2"
                      className="radioBtnMain absolute w-full h-full left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-gray-100 data-[state=checked]:border-gray-900"
                    />
                    <div
                      id="r2"
                      className="relative shadow-[0px_8px_21px_-5px_rgba(0,0,0,0.05)] border-gray-100 border-solid border rounded-[12px] p-4 xl:p-2 w-full"
                    >
                      <p className="text-[16px] text-gray-900 font-satoshi_medium">
                        Bank account
                      </p>
                      <p className="text-[14px] text-gray-400">Expires 10/24</p>
                      <div className="flex justify-between mt-4">
                        <p>Ending in 6375</p>
                        <VisaIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-[12px] w-full mb-6 xl:mb-3">
                  <div className="relative w-full">
                    <RadioGroupItem
                      value="default3"
                      id="r3"
                      className="radioBtnMain absolute w-full h-full left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-gray-100 data-[state=checked]:border-gray-900"
                    />
                    <div
                      id="r3"
                      className="relative shadow-[0px_8px_21px_-5px_rgba(0,0,0,0.05)] border-gray-100 border-solid border rounded-[12px] p-4 xl:p-2 w-full"
                    >
                      <p className="text-[16px] text-gray-900 font-satoshi_medium">
                        PayPal
                      </p>
                      <p className="text-[14px] text-gray-400">
                        juliabrown@gmail.com
                      </p>
                      <div className="flex justify-end mt-4">
                        <PaypalIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border-t md:pb-0 xl:mb-3 border-solid flex justify-end items-center">
              <ul className="flex items-center md:flex-wrap md:w-full">
                <li className="pr-2 md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
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
