import React, { memo } from "react";
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

const DeleteCommisionWarningModal = ({
  open,
  close,
  getCommssionId,
  deleteCommissionById,
  commissionId,
}: any) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={(open) => close(open)}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
            onClick={() => getCommssionId(commissionId ?? "")}
          >
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Delete custom commission rate
            </DialogTitle>
          </DialogHeader>

          <div className="px-10 pb-6 pt-3 sm:px-5 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
            <p className="text-gray-900 text-[16px] sm:text-[14px]">All information associated with Commission Rates will be permanently deleted.</p>
          </div>
          <div className="relative px-10 w-full rounded-b-[25px] pt-6 pb-2 sm:px-5 bg-white border-gray-100  border-solid flex justify-end items-center">
            <ul className="flex items-center sm:w-full sm:flex-wrap">
              <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="rounded-[50px] px-[16px] py-[6px] border-gray-200 hover:bg-black hover:text-white sm:w-full"
                    onClick={() => {
                      getCommssionId("");
                      close();
                    }}
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </li>
              <li className="sm:w-full">
                <Button
                  type="button"
                  className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white sm:w-full"
                  onClick={deleteCommissionById}
                >
                  Delete
                </Button>
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default memo(DeleteCommisionWarningModal);
