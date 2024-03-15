import PaypalIcon from "@/json/icons/PaypalIcon";
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

export default function DeletePaymentModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-0 text-red-500 font-satoshi_regular rounded-none hover:bg-transparent hover:text-secondary"
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md !rounded-[12px]">
        <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
          <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
            Delete payment method
          </DialogTitle>
        </DialogHeader>
        <div className="md:basis-full md:flex md:flex-col">
          <div className="py-6 px-10 sm:px-5 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
            <div className="cmn_box p-4 rounded-xl bg-white border border-gray-100">
              <div className="mb-8">
                <h5 className="text-base font-satoshi_medium">Credit card</h5>
                <p className="text-gray-400 text-sm">Expires 10/24</p>
              </div>
              <div className="flex items-center justify-between">
                {/* <h5 className="text-base font-satoshi_medium">
                  Ending in 6375
                </h5> */}
                {/* <i>
                  <VisaIcon />
                </i> */}
                {/* <i>
                  <MasterCardIcon />
                </i> */}
                <i className="ml-auto">
                  <PaypalIcon />
                </i>
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
