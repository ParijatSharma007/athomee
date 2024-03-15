import HeartIcon from "@/json/icons/HeartIcon";
import SavedCard from "../SavedCard/SavedCard";
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
import HeartIconSave from "@/json/icons/HeartIconSave";

export default function AddTosaveCollectionModalTwo() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant={"outline"}
            className="bg-transparent outline-hover transition-all text-base text-primary border-newborder border-solid border px-4 py-2 flex item-center h-auto "
          >
            <i className="mr-2">
              <HeartIconSave />
            </i>
            Save
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] z-[999]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Add to saved
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 md:px-4 md:pb-6 md:pt-4 pb-10 pt-6 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin max-h-[334px] md:basis-full md:max-h-[inherit]">
              <div className="flex flex-wrap -mx-3">
                <div className="w-1/3 px-3 sm:w-full md:mb-2">
                  <SavedCard noDropDown title="Massage" />
                </div>
                <div className="w-1/3 px-3 sm:w-full md:mb-2">
                  <SavedCard noDropDown title="Health" />
                </div>
                <div className="w-1/3 px-3 sm:w-full md:mb-2 sm:hidden">
                  <SavedCard noDropDown title="Education" />
                </div>
              </div>
            </div>
            <div className="relative px-10 md:px-4 md:pt-4 sm:w-full md:mb-2 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              {/* <DialogClose asChild> */}
                <Button
                  type="button"
                  className="w-full rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                >
                  Create new collection
                </Button>
              {/* </DialogClose> */}
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
