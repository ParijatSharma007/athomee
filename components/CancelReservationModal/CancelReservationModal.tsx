import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import assets from "@/json/assets";
import Image from "next/image";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function CancelReservationModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-[#EF4444] border-red-200 bg-red-50  rounded-[100px]  hover:border-primary hover:bg-primary hover:text-white"
          >
            Cancel{" "}
            <span className=" inline-block ml-1 md:hidden">reservation</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Cancellation of reservation
            </DialogTitle>
          </DialogHeader>
          <div className=" overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="px-10 py-10 xl:p-6 md:p-4 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] md:basis-full">
              <div className="pb-10">
                <h4 className="mb-4">Reservation details</h4>
                <div className="p-6 bg-[#FAFAFA] rounded-[12px] border border-solid border-[#F4F4F5]">
                  <div className="mb-6 flex justify-between flex-wrap">
                    <div className="flex flex-wrap items-center w-[70%] md:w-full">
                      <div className="w-[92px] rounded-[8px] md:w-full md:mb-2">
                        <Image
                          src={assets.res_detailsimg}
                          alt=""
                          width={92}
                          height={72}
                          className="rounded-[8px] md:w-full object-cover md:h-[104px]"
                        />
                      </div>
                      <div className="width-[calc(100%-92px)] pl-4 md:w-full md:pl-0">
                        <h3 className="mb-2 md:text-[20px]">
                          Deep Tissue Massage
                        </h3>
                        <p className="text-primary text-[16px] font-satoshi_medium">
                          30-Minute
                        </p>
                      </div>
                    </div>
                    <div className="w-[30%] pl-4 text-right md:hidden">
                      <p className="  text-primary text-[24px] font-satoshi_medium">
                        $55.00
                      </p>
                    </div>
                  </div>
                  <div className="flex mx-[-20px] md:flex-wrap md:mx-0">
                    <div className="px-[20px] w-[50%] md:w-full md:px-0">
                      <div className="pr-2 border-r border-solid border-[#F4F4F5] md:pr-0 md:border-0">
                        <p className="text-gray-400 mb-1">Date & time:</p>
                        <p className="text-gray-900 text-[16px] font-satoshi_medium">
                          15 july 2023, 10:00 AM
                        </p>
                      </div>
                    </div>
                    <div className="px-[20px] w-[50%] md:w-full md:px-0">
                      <div className="pr-2">
                        <p className="text-gray-400 mb-1">Address:</p>
                        <p className="text-gray-900 text-[16px] font-satoshi_medium">
                          600 Markley Street, Suite 090382
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="  text-primary text-[16px] font-satoshi_medium hidden md:block text-right mt-3">
                    $55.00
                  </p>
                </div>
              </div>
              <div>
                <h4 className="mb-4">Why do you want to cancel?</h4>
                <div>
                  <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[16px] px-[16px]">
                    <Select>
                      <SelectTrigger className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900">
                        <SelectValue placeholder="Please select a reason" />
                      </SelectTrigger>
                      <SelectContent className="p-0">
                        <SelectGroup>
                          <SelectLabel>Please select a reason</SelectLabel>
                          <SelectItem value="1">Company 1</SelectItem>
                          <SelectItem value="2">Company 2</SelectItem>
                          <SelectItem value="3">Company 3</SelectItem>
                          <SelectItem value="4">Company 4</SelectItem>
                          <SelectItem value="5">Company 5</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-10 md:px-4 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full">
                <li className="mr-4 md:hidden">
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
                <li className=" md:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white md:w-full"
                  >
                    Cancel now
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
