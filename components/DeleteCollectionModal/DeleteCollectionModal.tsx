"use client";
import ThreeDots from "@/json/icons/ThreeDots";
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
import { useDeletesaveCollection } from "@/hooks/react-qurey/query-hooks/ClientSaved.hook";
import { useQueryClient } from "react-query";
import { CLIENT_SAVED_LISTS } from "@/hooks/react-qurey/query-keys/ClientSaved.keys";
import { useRef } from "react";

interface collectionlistsprops {
  collectionid?: string | undefined;
  collectiontitle?: string | undefined;
}

export default function DeleteCollectionModal({
  collectionid,
  collectiontitle,
}: collectionlistsprops) {
  const queryClient = useQueryClient();
  const buttonRef = useRef<any>(null);
  const {
    mutate: deletecollection,
    isLoading,
    isError,
  } = useDeletesaveCollection();

  const handleDeleteClick = async () => {
    if (collectionid) {
      const payload = {
        collection_id: collectionid,
      };
      deletecollection(payload, {
        onSuccess: (res) => {
          // console.log("Collection Delete");
          queryClient.invalidateQueries([CLIENT_SAVED_LISTS]);
          handleClick();
        },
        onError: () => {
          console.log("Error Found");
        },
      });
    }
  };

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[transparent] hover:bg-[transparent] px-1">
            <ThreeDots />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Delete this collection?
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 pb-6 pt-4 md:px-5 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <p className="text-gray-900 text-[16px]">
                The collection "{collectiontitle}" will be permanently deleted.
              </p>
            </div>
            <div className="relative px-10 md:px-5 w-full pt-6 pb-2 md:pt-4 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full">
                <li className="mr-4 md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      ref={buttonRef}
                      className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
                    disabled={isLoading}
                    onClick={handleDeleteClick}
                    className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white md:w-full"
                  >
                    {isLoading ? "Deleting.." : "Delete"}
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
