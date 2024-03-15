import CommonTextArea from "../CommonTextArea/CommonTextArea";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function HelpCenterModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-secondary">Help Center</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Help Center
            </DialogTitle>
          </DialogHeader>
          <div className=" overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="px-10 md:px-4 xl:pb-4 xl:pt-4 pb-10 pt-6 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div className="pb-8">
                <h4 className="mb-4 md:text-[16px]">
                  Choose the reason for the appeal
                </h4>
                <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[16px] px-[16px]">
                  <Select>
                    <SelectTrigger className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900">
                      <SelectValue placeholder="Please select a reason" />
                    </SelectTrigger>
                    <SelectContent className="p-0">
                      <SelectGroup>
                        <SelectLabel>Please select a reason</SelectLabel>
                        <SelectItem value="1">Company 1</SelectItem>
                        <SelectItem value="2">Company 2</SelectItem>
                        <SelectItem value="3">Company 3</SelectItem>
                        <SelectItem value="4">Company 4</SelectItem>
                        <SelectItem value="5">Company 5</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <h4 className="mb-4">
                  <h4 className="mb-4 md:text-[16px]">
                    Tell us about the problem
                  </h4>
                  <div>
                    <CommonTextArea placeholderLabel="Message" height="160px" />
                  </div>
                </h4>
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
                    Send
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
