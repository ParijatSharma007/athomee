import ChevronRightIcon from "@/json/icons/ChevronRightIcon";
import DeleteIcon from "@/json/icons/DeleteIcon";
import ThreeDots from "@/json/icons/ThreeDots";
import RenameCollectionModal from "../RenameCollectionModal/RenameCollectionModal";
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

export default function CollectionSettingsModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="p-0 flex items-center justify-center border-solid border-gray-500 border rounded-full ml-4 bg-[transparent] hover:bg-[transparent] w-[44px] h-[44px]">
            <ThreeDots />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] z-[999]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Settings
            </DialogTitle>
          </DialogHeader>
          <div>
            <div className=" max-h-[460px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <div>
                <RenameCollectionModal />
              </div>
              <div>
                <Button className="w-full px-10 md:px-4 pt-6 h-[auto] pb-4 flex items-center bg-[transparent] hover:bg-[transparent] rounded-[0]">
                  <i className="inline-block mr-3">
                    <DeleteIcon />
                  </i>
                  <span className="inline-block text-gray-900 text-[16px] font-satoshi_medium mr-3">
                    Delete
                  </span>
                  <i className="inline-block ml-auto">
                    <ChevronRightIcon />
                  </i>
                </Button>
              </div>
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
