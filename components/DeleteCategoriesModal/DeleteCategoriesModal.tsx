import { useRef, useState } from "react";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../ui/dialog";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeleteCategory } from "@/hooks/react-qurey/query-hooks/adminDashboard.hooks";

export default function DeleteCategoriesModal({
  // onDeleteAction,
  categoryItem,
  fetchCategoryList,
}: any) {
  const {
    _id,
    name,
    sub_categories,
    total_services,
    order_num,
    isDeleted,
    status,
  } = categoryItem ?? {};

  const [open, setOpen] = useState(false);

  const { data: deleteCategory, refetch } = useDeleteCategory(
    _id,
    onSuccessDelete,
    onErrorDelete
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteCategoryHandler = () => {
    // setSelectedCategoryId(id);
    refetch();
  };
  function onSuccessDelete(response: any) {
    console.log("on success delete", response);
    fetchCategoryList();
    handleClose();
  }
  function onErrorDelete(error: any) {
    console.log("on error delete", error);
  }

  return (
    <>
      <Button
        variant="outline"
        className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
        // ref={buttonRef}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        scroll={"body"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="edit_modal"
      >
        <DialogTitle id="alert-dialog-title">Delete this category?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="md:basis-full md:flex md:flex-col">
              <div className="py-6 px-10 sm:px-5 md:py-4 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
                {!!name && (
                  <div className="mb-6">
                    <p className="text-[#70707B] text-[14px] mb-4 md:mb-2">
                      Category
                    </p>
                    <p className="text-[20px] text-[#131316] font-satoshi_medium md:text-[16px]">
                      name{name ?? ""}
                      {!!total_services && (
                        <span className="inline-block text-[#A0A0AB] ">
                          ({total_services ?? ""})
                        </span>
                      )}{" "}
                    </p>
                  </div>
                )}
                {!!sub_categories && sub_categories?.length > 0 && (
                  <div>
                    <p className="text-[#70707B] text-[14px] mb-4 md:mb-2">
                      Subcategories
                    </p>
                    <ul>
                      {sub_categories?.map((_subCat: any) => (
                        <li className="text-[16px] text-[#131316] font-satoshi_medium mb-4 md:mb-2 md:text-[14px]">
                          {_subCat?.name}
                          {!!_subCat?.total_services && (
                            <span className="inline-block text-[#A0A0AB] ">
                              ({_subCat?.total_services ?? ""})
                            </span>
                          )}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
                <ul className="flex items-center sm:w-full sm:flex-wrap">
                  <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </li>
                  <li className="sm:w-full">
                    <Button
                      type="button"
                      className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white sm:w-full"
                      onClick={deleteCategoryHandler}
                    >
                      Delete
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
