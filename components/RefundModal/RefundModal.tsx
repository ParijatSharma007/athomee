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

export default function RefundModal({ buttonText }: { buttonText: string }) {
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
              Refund details
            </DialogTitle>
          </DialogHeader>
          <div className=" md:basis-full md:flex md:flex-col">
            <div className="px-10 pt-6 md:px-4 md:pt-4 md:pb-4 pb-10 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <p>
                You can make a partial or full refund as needed. The client will
                receive a notification about the receipt of the refund.
              </p>
              <div className="flex justify-between items-center rounded-lg border border-grey-200 py-3 px-4 mt-8 md:mt-6">
                <div>
                  <p className="text-[#A0A0AB] text-[12px]">Refund amount</p>
                  <p>$5.00</p>
                </div>
                <Button
                  type="button"
                  className="bg-transparent border border-grey-200 text-[#131316] hover:text-white"
                >
                  Full refund <span className="md:hidden">$50.00</span>
                </Button>
              </div>
            </div>
            <div className="relative px-10 md:px-4 md:pt-4 w-full pt-6 pb-2 bg-white  border-t border-solid flex justify-end items-center">
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
                    className="md:w-full"
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
