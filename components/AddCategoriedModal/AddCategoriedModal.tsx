import AddIcon from "@/json/icons/AddIcon";
import CommonInput from "../CommonInput/CommonInput";
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
import { memo, useState, useMemo } from "react";
import { useCreateCategory } from "@/hooks/react-qurey/query-hooks/adminDashboard.hooks";
import DragIcon from "@/json/icons/DragIcon";
import DeleteIconRed from "@/json/icons/DeleteIconRed";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

export default memo(function AddCategoriedModal({ fetchCategoryList }: any) {
  const [categoryName, setCategoryName] = useState("");
  const [addSubCategory, setAddSubCategory] = useState(false);
  const [addSubCategoryName, setAddSubCategoryName] = useState("");
  const [subCategoryNameList, setSubCategoryNameList] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [errMsgs, setErrMsgs] = useState<any>({
    categoryName: null,
    subCategoryNames: null,
  });
  const { mutate: createCategory, isLoading } = useCreateCategory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCatagoryName = (_name: string) => setCategoryName(_name);
  const getSubCatagoryName = (id: string, name: string) => {
    const modifySubCategoryList = subCategoryNameList.map((_subCat: any) => {
      if (_subCat?.id == id) {
        return { ..._subCat, name: name };
      } else {
        return { ..._subCat };
      }
    });
    setSubCategoryNameList(modifySubCategoryList);
  };

  const getSubCatagoryDeleteById = (id: string) => {
    const modifySubCategoryList = subCategoryNameList.filter(
      (_subCat: any) => _subCat?.id != id
    );
    setSubCategoryNameList(modifySubCategoryList);
  };

  const getSubCatagoryNamesList = () => {
    const subCategory = {
      id: subCategoryNameList?.length,
      name: addSubCategoryName,
    };
    setSubCategoryNameList([...subCategoryNameList, subCategory]);
    // getSubCatagoryName("");
  };
  const addSubCategoryHandler = () =>
    setSubCategoryNameList([
      ...subCategoryNameList,
      { id: `${subCategoryNameList.length}`, name: "" },
    ]);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(subCategoryNameList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSubCategoryNameList(items);
  }
  const isValidSubcategory = useMemo(
    () => subCategoryNameList.every((item: any) => item?.name?.trim() !== ""),
    [subCategoryNameList]
  );

  const createCategoryHandler = () => {
    const payload = {
      name: categoryName,
      sub_categories: subCategoryNameList?.map((_i: any) => _i.name),
    };
    createCategory(payload, {
      onSuccess: () => {
        fetchCategoryList();
        setOpen(false);
        setCategoryName("");
        setSubCategoryNameList([]);
      },
    });
  };
  const cancelHandler = () => {
    setOpen(false);
    setCategoryName("");
    setSubCategoryNameList([]);
  };
  console.log("subCategoryNameList", subCategoryNameList);

  return (
    <>
      <Button
        variant="outline"
        className="border-gray-200 rounded-full hover:bg-primary hover:text-white"
        onClick={handleClickOpen}
      >
        <i className="inline-flex items-center justify-center mr-2">
          <AddIcon />
        </i>
        Add category
      </Button>
      <Dialog
        scroll={"body"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="edit_modal"
      >
        <DialogTitle id="alert-dialog-title">Add new category</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="md:basis-full md:flex md:flex-col">
              <div className="py-6 px-10 sm:px-5 md:py-4 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
                <div className="mb-6">
                  <h3 className="mb-4 md:text-[18px] ">Category</h3>
                  <div className="flex items-center">
                    <div className="flex flex-wrap w-full">
                      <div className="w-[calc(100%-50px)] pr-4 md:w-full md:pr-0">
                        <CommonInput
                          placeholderLabel="Category name"
                          name=""
                          onChange={(e: any) => getCatagoryName(e.target.value)}
                        />
                      </div>
                      {errMsgs?.categoryName == "" && (
                        <div className="profile_error text-red-500">
                          Please enter category name.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] mb-4">Subcategories</h3>
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                      {(provided) => (
                        <ul
                          className="characters"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {subCategoryNameList?.length > 0 &&
                            subCategoryNameList?.map(
                              ({ id }: any, index: number) => {
                                return (
                                  <Draggable
                                    key={id}
                                    draggableId={id}
                                    index={index}
                                  >
                                    {(provided) => (
                                      <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <div
                                          className="flex items-center mb-4 justify-between"
                                          key={id}
                                        >
                                          <Button
                                            variant="default"
                                            className="bg-transparent border-0 p-0 hover:bg-transparent"
                                          >
                                            {subCategoryNameList?.length >
                                              1 && <DragIcon />}
                                          </Button>
                                          <div className="w-[calc(100%-50px)] basis-full px-4 pr-6 md:px-2 md:pr-2">
                                            <CommonInput
                                              placeholderLabel="Sub category name"
                                              name={id}
                                              onChange={(e: any) =>
                                                getSubCatagoryName(
                                                  e.target.name,
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>
                                          <Button
                                            variant="default"
                                            className="bg-transparent border-0 p-0 hover:bg-transparent"
                                            onClick={() =>
                                              getSubCatagoryDeleteById(id)
                                            }
                                          >
                                            <DeleteIconRed />
                                          </Button>
                                        </div>
                                      </li>
                                    )}
                                  </Draggable>
                                );
                              }
                            )}
                          {provided.placeholder}
                        </ul>
                      )}
                    </Droppable>
                  </DragDropContext>

                  <div>
                    <Button
                      variant="outline"
                      className="mr-2 border-0"
                      onClick={addSubCategoryHandler}
                    >
                      + Add {subCategoryNameList?.length > 0 ? "more " : ""}
                      subcategory
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
                <ul className="flex items-center sm:w-full sm:flex-wrap">
                  <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                    {/* <DialogClose asChild> */}
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                      onClick={cancelHandler}
                    >
                      Cancel
                    </Button>
                    {/* </DialogClose> */}
                  </li>
                  <li className="sm:w-full">
                    {!isLoading ? (
                      <Button
                        variant="default"
                        className="sm:w-full"
                        disabled={
                          !categoryName ||
                          !subCategoryNameList?.length ||
                          !isValidSubcategory
                        }
                        onClick={createCategoryHandler}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button variant="default" className="sm:w-full">
                        <ButtonLoader />
                      </Button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
});
