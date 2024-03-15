import React, { useRef } from "react";
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
import { useMutation } from "react-query";
import { AdminDeleteUser } from "@/hooks/react-qurey/query-hooks/userList.hooks";

export default function DeleteUserModalFromLists({ userDetails, reload }: any) {
  console.log("UserId", userDetails?._id);
  const { mutate, isLoading } = useMutation(AdminDeleteUser, {
    onSuccess: (data) => {
      console.log("updatedata", data);
      handleClick();
      reload();
    },
    onError: () => {},
  });

  const handleDelete = async () => {
    mutate({
      id: userDetails?._id,
    });
  };

  const buttonRef = useRef<any>(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className=" text-sm text-red-500 hover:text-secondary">
            Delete
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Are you sure you want to delete this user?
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 pb-6 pt-3 sm:px-5 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div>
                <p className="text-gray-900 text-[16px] sm:text-[14px]">
                  All information associated with{" "}
                  <span className="inline-block font-satoshi_medium">
                    {userDetails?.firstName} {userDetails?.lastName}
                  </span>{" "}
                  account will be permanently deleted.
                </p>
              </div>
            </div>
            <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center sm:w-full sm:flex-wrap">
                <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      ref={buttonRef}
                      className="rounded-[50px] px-[16px] py-[6px] border-gray-200 hover:bg-black hover:text-white sm:w-full"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white sm:w-full"
                    onClick={handleDelete}
                    disabled={isLoading}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
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
