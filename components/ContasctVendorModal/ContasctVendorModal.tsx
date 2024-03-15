import assets from "@/json/assets";
import Image from "next/image";
import CommonTextArea from "../CommonTextArea/CommonTextArea";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function ContasctVendorModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="transition-all text-[14px] rounded-[100px] font-satoshi_medium border-gray-200 hover:bg-primary hover:text-white"
          >
            Message
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Contact the vendor
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 pb-10 pt-6 sm:px-5 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div className="mb-10 flex items-center">
                <div className="w-[64px] h-[64px] rounded-full">
                  <Image
                    src={assets.vendorImage1}
                    alt=""
                    width={64}
                    height={64}
                    rounded-full
                  />
                </div>
                <div className="pl-4 ">
                  <h3 className="mb-2">Julia Brown</h3>
                  <p className="text-[16px] text-gray-400">
                    Usually responds within a few hours
                  </p>
                </div>
              </div>
              <div>
                <h4 className="mb-4">What would you like to ask?</h4>
                <div>
                  <CommonTextArea placeholderLabel="Message" height="160px" />
                </div>
              </div>
            </div>
            <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center sm:w-full sm:flex-wrap">
                <li className="mr-4 sm:mb-4 sm:mr-0 sm:w-full">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white sm:w-full"
                  >
                    Send message
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
