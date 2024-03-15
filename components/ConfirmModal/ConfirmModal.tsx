import assets from "@/json/assets";
import Image from "next/image";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function ConfirmModal({ buttonText }: { buttonText: string }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className=" bg-gray-900  hover:border-primary hover:bg-white w-full hover:text-primary text-white rounded-[100px] font-medium text-base"
          >
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Confirm this reservation?
            </DialogTitle>
          </DialogHeader>
          <div className=" md:basis-full md:flex md:flex-col">
            <div className="px-10 pt-6 md:px-4 pb-10 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div className="flex justify-between items-baseline md:flex-wrap">
                <div className="flex md:flex-wrap md:w-full">
                  <figure className="md:w-full md:mb-3">
                    <Image
                      src={assets.serviceInfoImg}
                      alt=""
                      width={82}
                      height={82}
                      className="md:w-full md:h-[104px] object-cover rounded-[12px]"
                    />
                  </figure>
                  <div className="pl-4 md:w-full md:pl-0">
                    <p>
                      Deep Tissue Massage{" "}
                      <span className="text-[14px] ml-3 inline-block bg-[#F7F4F1] py-1 px-4 rounded-[100px]">
                        30-Minute
                      </span>{" "}
                    </p>
                    <p className="text-[14px] mt-2">
                      {" "}
                      <span className="text-[#A0A0AB]"> Date & time: </span>20
                      May 2023, 10:00-11:00 AM
                    </p>
                    <p className="text-[14px] mt-2">
                      <span className="text-[#A0A0AB]"> Address:</span> 25
                      Draper Street, San Francisco, CA, USA
                    </p>
                  </div>
                </div>
                <p className="md:w-full md:text-right">$50</p>
              </div>
            </div>
            <div className="relative px-10 md:px-4 w-full pt-6 pb-2 md:pt-4 bg-white  border-t border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full">
                <li className="mr-4 md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className=" md:w-full">
                  <Button
                    type="button"
                    variant={"default"}
                    className=" md:w-full"
                  >
                    Confirm refund
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
