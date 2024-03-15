import ChevronRightIcon from "@/json/icons/ChevronRightIcon";
import RenameIcon from "@/json/icons/RenameIcon";
import AddToSaveCollectionModal from "../AddToSaveCollectionModal/AddToSaveCollectionModal";
import CommonInput from "../CommonInput/CommonInput";
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

export default function RenameCollectionModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full px-10 md:px-4  pt-4 h-[auto] pb-6 flex items-center bg-[transparent] hover:bg-[transparent] border-gray-200 border-solid border-b rounded-[0]">
            <i className="inline-block mr-3">
              <RenameIcon />
            </i>
            <span className="inline-block text-gray-900 text-[16px] font-satoshi_medium mr-3">
              Rename
            </span>
            <i className="inline-block ml-auto">
              <ChevronRightIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] z-[999]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Rename collection
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 md:px-4 md:pb-6 md:pt-4 pb-10 pt-6 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div>
                <CommonInput placeholderLabel="Name" />
              </div>
            </div>
            <div className="relative px-10 md:pt-4 md:px-4 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
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
                  {/* <AddToSaveCollectionModal /> */}
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
