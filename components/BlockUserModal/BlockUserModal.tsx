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

export default function BlockUserModal({
  handleClickUpdate,
  userDetails,
}: any) {
  console.log("🚀 ~ BlockUserModal ~ userDetails:asdasd", userDetails);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className=" text-sm text-gray-800 hover:text-secondary inline-block mr-9">
            Block
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Are you sure you want to block the user?
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 pb-6 pt-3 sm:px-5 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div>
                <p className="text-gray-900 text-[16px] sm:text-[14px]">
                  You are about to block the user{" "}
                  <span className="inline-block font-satoshi_medium">
                    {userDetails?.firstName}
                    {userDetails?.lastName}
                  </span>{" "}
                  This action will prevent the user from accessing our platform
                  and engaging with other users. Please ensure that this action
                  is taken in accordance with our community guidelines and due
                  to a valid reason.
                </p>
              </div>
            </div>
            <div className="relative px-10 sm:px-5 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center sm:w-full sm:flex-wrap">
                <li className="mr-4 sm:mb-4 sm:w-full sm:mr-0">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] border-gray-200 hover:bg-black hover:text-white sm:w-full"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                  <Button
                    type="button"
                    variant="default"
                    className="sm:w-full"
                    onClick={handleClickUpdate}
                  >
                    Block
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
