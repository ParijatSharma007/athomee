import CommonInput from "../CommonInput/CommonInput";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function RefundDetailsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Make refund</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md !rounded-[12px]">
        <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
          <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
            Refund details
          </DialogTitle>
        </DialogHeader>
        <div className="md:basis-full md:flex md:flex-col">
          <div className="py-6 px-10 sm:px-5 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
            <div className="overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff]">
              <div>
                <p className="text-gray-900 text-[16px] mb-6">
                  Enter the desired amount or choose a full refund.
                </p>
                <div className="relative">
                  <CommonInput placeholderLabel="Refund amount" />
                  <Badge className="absolute right-[16px] top-[50%] translate-y-[-50%] text-gray-900 py-2 px-[14px] rounded-[100px] border border-solid border-gray-200 bg-[none]">
                    <span className="inline-block sm:hidden">Full refund </span>
                    <span className="inline-block ml-1"> ($50.00)</span>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
            <ul className="flex items-center sm:w-full sm:flex-wrap">
              <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
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
