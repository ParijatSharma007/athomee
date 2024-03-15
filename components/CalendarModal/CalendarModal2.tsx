import InfoIcon from "@/json/icons/InfoIcon";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface modalProps {
  open?: boolean;
  modalCloseCallback: (data: boolean) => void;
  modalCloseInteractOutsideCallback?: (event: any) => void;
}

export default function CalendarModal2({
  open,
  modalCloseCallback,
  modalCloseInteractOutsideCallback,
}: modalProps) {
  return (
    <Dialog open={open} onOpenChange={modalCloseCallback}>
      {/* <DialogTrigger asChild>
        <Button variant="outline" className="mr-2 border-gray-200">
          Edit
        </Button>
      </DialogTrigger> */}
      <DialogContent
        className="sm:max-w-md !rounded-[12px]"
        onInteractOutside={modalCloseInteractOutsideCallback}
      >
        <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
          <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
            Blocking Off Day
          </DialogTitle>
        </DialogHeader>
        <div className="md:basis-full md:flex md:flex-col">
          <div className="py-6 px-10 md:py-4 sm:px-5 border-solid border-b border-gray-200 max-h-[400px] sm:max-h-[calc(100vh-220px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
            <div>
              <div className="mb-6">
                <Badge className="rounded-[12px] p-[16px] flex items-center border-yellow-200 bg-[#FFF8EB] text-[#F59F00] font_satoshi_medium tedxt-[16px]">
                  <i className="w-[12px]">
                    <InfoIcon IconColor="#F59F00" />
                  </i>
                  <p className="w-[calc(100%-12px] pl-4">
                    There are reservations booked for this day. Your changes
                    might impact {"clients'"} reservations.
                  </p>
                </Badge>
              </div>
              <div className="relative mb-10">
                <h2 className="text-[18px] text-gray-900 mb-1">
                  Please choose how you&#39;d like to proceed
                </h2>

                <div className="relative mt-[24px]">
                  <RadioGroup defaultValue="booking1">
                    <div className="flex items-start space-x-2 mb-6">
                      <RadioGroupItem
                        value="booking1"
                        id="r1"
                        className="mt-1"
                      />
                      <Label
                        htmlFor="r1"
                        className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
                      >
                        <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                          Keep existing reservations
                        </span>
                        The existing reservations will not be affected. The day
                        will be blocked off only for new bookings.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 mb-6">
                      <RadioGroupItem
                        value="booking2"
                        id="r2"
                        className="mt-1"
                      />
                      <Label
                        htmlFor="r2"
                        className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
                      >
                        <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                          Cancel existing reservations and block-off
                        </span>
                        All existing reservations on this day will be canceled,
                        and the day will be blocked off.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem
                        value="booking3"
                        id="r3"
                        className="mt-1"
                      />
                      <Label
                        htmlFor="r3"
                        className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
                      >
                        <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                          Cancel existing reservations and block-off (notify
                          clients)
                        </span>
                        All existing reservations on this day will be canceled,
                        and the affected clients will be notified about the
                        change.
                      </Label>
                    </div>
                  </RadioGroup>
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
                <Button
                  type="button"
                  className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white sm:w-full"
                >
                  Block-off
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
