import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import CommonInput from "../CommonInput/CommonInput";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";

export default function MakeRefundModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Make refund</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl">Refund details</DialogTitle>
          </DialogHeader>
          <div>
            <div className="px-10 pb-10 pt-6 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <div>
                <p className="text-gray-900 text-[16px] mb-6">
                  You can make a partial or full refund as needed. The client
                  will receive a notification about the receipt of the refund.
                </p>
                <div className="relative">
                  <CommonInput placeholderLabel="Refund amount" />
                  <Badge className="absolute right-[16px] top-[50%] translate-y-[-50%] text-gray-900 py-2 px-[14px] rounded-[100px] border border-solid border-gray-200 bg-[none]">
                    Full refund ($50.00)
                  </Badge>
                </div>
              </div>
            </div>
            <div className="relative px-10 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center">
                <li className="mr-4">
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
                <li>
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
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
