import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import StarRating from "../Ratting/Ratting";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Textarea } from "../ui/textarea";

export default function LeaveReviewVendorModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-white border-gray-200  text-gray-900 rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-black hover:text-white"
          >
            Write a review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Leave review
            </DialogTitle>
          </DialogHeader>
          <div className=" overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="px-10 md:px-4 pb-[24px] border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div className="mb-8">
                <h4 className="mb-3">How was it?</h4>
                <div className="p-[16px] rounded-[8px] bg-[#fafafa] inline-block">
                  <StarRating totalStars={5} />
                </div>
              </div>
              <div className="mb-8">
                <h4 className="mb-3">Tell us more</h4>
                <div className="relative py-[11px] px-[16px] my-4 h-[160px] border-gray-200 border border-solid rounded-[8px]">
                  <Textarea
                    className="border-0 resize-none p-0 text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400"
                    placeholder="Share your review here"
                  />
                </div>
              </div>
            </div>
            <div className="relative px-10 md:px-4 md:pt-4 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
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
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white md:w-full"
                  >
                    Send review
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
