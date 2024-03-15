import assets from "@/json/assets";
import Image from "next/image";
import CommonTextArea from "../CommonTextArea/CommonTextArea";
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

export default function ReservationVendorContactModal() {
  return (
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
          <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
            Contact the vendor
          </DialogTitle>
        </DialogHeader>
        <div className="md:basis-full md:flex md:flex-col">
          <div className="px-10 pt-6 pb-10 sm:px-5 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
            <div className="flex items-center mb-6">
              <i className="relative w-16 h-16 rounded-full mr-4  ">
                <Image
                  src={assets.health_icon}
                  alt="clientimg"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover "
                />
              </i>
              <div>
                <h4 className="text-[20px] font-satoshi_medium mb-1">
                  Health Life
                </h4>
                <p className="text-gray-400 text-sm">
                  Reservation number:{" "}
                  <span className=" text-gray-900">#4947408635</span>
                </p>
              </div>
            </div>
            <CommonTextArea placeholderLabel="Message" height="160px" />
          </div>
          <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
            <ul className="flex items-center sm:w-full sm:flex-wrap">
              <li className="mr-4 sm:w-full sm:mb-4">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </li>
              <li className="sm:w-full">
                <Button variant="default" className="sm:w-full">
                  Save
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
  );
}
