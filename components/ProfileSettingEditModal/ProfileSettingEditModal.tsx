"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import ThreeDots from "@/json/icons/ThreeDots";
import RenameIcon from "@/json/icons/RenameIcon";
import ChevronRightIcon from "@/json/icons/ChevronRightIcon";
import DeleteIcon from "@/json/icons/DeleteIcon";
import RenameCollectionModal from "../RenameCollectionModal/RenameCollectionModal";
import ProfileSettingEditCardModal from "../ProfileSettingEditCardModal/ProfileSettingEditCardModal";
import ProfileSettingEditCardDelectModal from "../ProfileSettingEditCardDelectModal/ProfileSettingEditCardDelectModal";
import { DialogOverlay } from "@radix-ui/react-dialog";

export default function ProfileSettingEditModal() {
  const [open,setOpen] = useState(false);
  const modalOpen = () =>{
    setOpen(true)
  }
  const modalClose = () =>{
    setOpen(false)
  }

  const handleCloseCallback = (data:boolean) =>{
    setOpen(data)
  }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="p-0 border-0 h-auto rounded-full ml-4 bg-[transparent] hover:bg-[transparent]">
            <ThreeDots />
          </Button>
        </DialogTrigger>
       
        <DialogContent className="sm:max-w-md !rounded-[12px] z-[999]">
  
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4" onClick={modalClose}>
            <DialogTitle className="text-2xl md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">Credit card ****6375</DialogTitle>
          </DialogHeader>
          <div>
            <div className=" max-h-[460px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <div className="relative">
              <ProfileSettingEditCardModal />
              </div>
              <div>
                
                <div className="relative">
                <ProfileSettingEditCardDelectModal handleCloseCallback={handleCloseCallback}/>
              </div>
              </div>
            </div>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild ></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
