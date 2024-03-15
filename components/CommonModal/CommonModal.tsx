import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import assets from "@/json/assets";
import Image from "next/image";
import CommonProgress from "../CommonProgress/CommonProgress";

export default function CommonModal({ buttonText }: { buttonText: string }) {
  console.log(buttonText, "btnTxt modal");
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
        {buttonText === "Make refund" ? (
          <DialogContent className="sm:max-w-md !rounded-[12px]">
            <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
              <DialogTitle className="text-2xl text-left">
                Refund details
              </DialogTitle>
            </DialogHeader>
            <div>
              <div className="px-10 pt-6 pb-10 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                <p>
                  You can make a partial or full refund as needed. The client
                  will receive a notification about the receipt of the refund.
                </p>
                <div className="flex justify-between rounded-lg border border-grey-200 py-3 px-4 mt-8">
                  <div>
                    <p className="text-[#A0A0AB] text-[12px]">Refund amount</p>
                    <p>$5.00</p>
                  </div>
                  <Button
                    type="button"
                    className="bg-transparent border border-grey-200 text-[#131316] hover:text-white"
                  >
                    Full refund ($50.00)
                  </Button>
                </div>
              </div>
              <div className="relative px-10 w-full pt-6 pb-2 bg-white  border-t border-solid flex justify-end items-center">
                <ul className="flex items-center">
                  <li className="mr-4">
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
                  <li>
                    <Button
                      type="button"
                      variant={"default"}
                      // className="rounded-[50px] border-grey-200 px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white"
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
        ) : "Confirm" ? (
          <DialogContent className="sm:max-w-md !rounded-[12px]">
            <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
              <DialogTitle className="text-2xl text-left">
                Refund details
              </DialogTitle>
            </DialogHeader>
            <div>
              <div className="px-10 pt-6 pb-10 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                <p>
                  You can make a partial or full refund as needed. The client
                  will receive a notification about the receipt of the refund.
                </p>
                <div className="flex justify-between rounded-lg border border-grey-200 py-3 px-4 mt-8">
                  <div>
                    <p className="text-[#A0A0AB] text-[12px]">Refund amount</p>
                    <p>$5.00</p>
                  </div>
                </div>
              </div>
              <div className="relative px-10 w-full pt-6 pb-2 bg-white  border-t border-solid flex justify-end items-center">
                <ul className="flex items-center">
                  <li className="mr-4">
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
                  <li>
                    <Button
                      type="button"
                      variant={"default"}
                      // className="rounded-[50px] border-grey-200 px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white"
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
        ) : "Reserve service" ? (
          <DialogContent className="sm:max-w-md !rounded-[12px]">
            <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
              <DialogTitle className="text-2xl text-left">
                Upload image
              </DialogTitle>
            </DialogHeader>
            <div>
              <div className="px-10 pt-6 pb-10 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                <div className="flex items-center justify-center border-[#7757BD] border-dashed border rounded-xl p-20">
                  <div className="text-center">
                    <span>
                      <Image
                        alt=""
                        src={assets.upIcon}
                        width={40}
                        height={40}
                        className="inline-block"
                      />
                    </span>
                    <p className="text-xl mt-2">
                      Drag & drop or{" "}
                      <span className="text-[#7757BD]">click to upload</span>{" "}
                    </p>
                    <p className="text-[#A0A0AB]">Maximum file size 10 MB.</p>
                  </div>
                </div>
                <div>
                  <div className="bg-[var(--border-primary)] border border-solid border-[var(--greyF4F4F5)] rounded-[12px] p-4 relative pr-[60px] mt-6">
                    <Button className="bg-[transparent] p-0 h-auto absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Image
                        src={assets?.cross_icons}
                        width={16}
                        height={12}
                        alt=""
                      />
                    </Button>
                    <div className="flex flex-wrap">
                      <i className="w-[48px] h-[48px] border border-solid border-[var(--cmn-grey)] rounded-[12px] bg-[var(--secondary-foreground)] flex items-center justify-center">
                        <Image
                          src={assets?.pin_upload}
                          width={18}
                          height={19}
                          alt=""
                        />
                      </i>
                      <div className="w-[calc(100%-48px)] pl-4 text-[var(--primary)]">
                        <h5>Image from my smaprtphone.jpg</h5>
                        <span className="text-sm text-[var(--textgray)]">
                          6 MB
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <CommonProgress
                        valueProgress={33}
                        customClass="black_white_progress"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative px-10 w-full pt-6 pb-2 bg-white  border-t border-solid flex justify-end items-center">
                <ul className="flex items-center">
                  <li className="mr-4">
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
                  <li>
                    <Button
                      type="button"
                      variant={"default"}
                      // className="rounded-[50px] border-grey-200 px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white"
                    >
                      Attach image
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild></DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : null}
      </Dialog>
    </div>
  );
}
