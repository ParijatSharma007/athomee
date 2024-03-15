"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useMemo, useState } from "react";

import { Switch } from "@/components/ui/switch";
import DeleteIconRed from "@/json/icons/DeleteIconRed";
import DragIcon from "@/json/icons/DragIcon";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CommonInput from "../CommonInput/CommonInput";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { categoryList } from "@/json/mock/tableData.mock";
import { useUpdateCategory } from "@/hooks/react-qurey/query-hooks/adminDashboard.hooks";

interface modalProps {
  // open: boolean;
  // onClose: () => void;
  item: any;
  fetchCategoryList: any;
  // onConfirmClick: (data: any) => void;
}

const EditMuiModal: React.FC<modalProps> = ({
  item,
  fetchCategoryList,
  // onConfirmClick,
  ...props
}) => {
  const [categoryName, setCategoryName] = useState(item?.name);
  const [subCategoriesList, setSubCategoriesList] = useState(
    item?.sub_categories.sort((a: any, b: any) => a.order_num - b.order_num)
  );
  const [categoryStatus, setCategoryStatus] = useState(item?.status);

  const [open, setOpen] = React.useState(false);

  const { mutate: getUpdatedCategory, isLoading: updateLoader } =
    useUpdateCategory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDrop = (droppedItem: any) => {
    if (!droppedItem.destination) return;
    var updatedList = [...subCategoriesList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setSubCategoriesList(updatedList);
  };

  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: React.CSSProperties
  ): React.CSSProperties => ({
    userSelect: "none",
    background: isDragging ? "transparent" : "transparent",
    width: isDragging ? "100%" : "100%",
    ...draggableStyle,
  });
  const getUpadatedCatName = (e: any) => setCategoryName(e.target.value);
  const getUpadatedSubCatName = (e: any, id: any) => {
    const updatedSubCatList = subCategoriesList.map((_subCat: any) => {
      if (_subCat?._id == id) {
        return { ..._subCat, name: e.target.value };
      } else {
        return { ..._subCat };
      }
    });
    setSubCategoriesList(updatedSubCatList);
  };
  const deleteSubCategory = (id: any) => {
    const updatedSubCatList = subCategoriesList.filter(
      (_subCat: any) => _subCat?._id != id
    );
    setSubCategoriesList(updatedSubCatList);
  };
  const addSubCategory = (id: any) => {
    const updatedSubCatList = [
      ...subCategoriesList,
      {
        name: "",
        _id: `new_sub_category-${subCategoriesList?.length + 1}`,
        total_services: 0,
      },
    ];
    setSubCategoriesList(updatedSubCatList);
  };
  const categoryStatusHandler = () =>
    setCategoryStatus(categoryStatus == "Inactive" ? "Active" : "Inactive");

  const isSaveButtonDisabled = useMemo(() => {
    const { _id, total_services, order_num, isDeleted, ...rest } = item ?? {};
    const userUpdatedCategoty = {
      name: categoryName,
      sub_categories: subCategoriesList,
      status: categoryStatus,
    };
    // return {
    //   status: JSON.stringify(rest) == JSON.stringify(userUpdatedCategoty),
    //   prev: rest,
    //   new: userUpdatedCategoty,
    // };
    return JSON.stringify(rest) == JSON.stringify(userUpdatedCategoty);
  }, [item, categoryName, subCategoriesList, categoryStatus]);

  const updateCategory = () => {
    // const body = {
    //   name: categoryName,
    //   sub_categories: subCategoriesList.map((_subcat: any) => ({
    //     name: _subcat?.name ?? "",
    //     sub_category_id: _subcat?._id ?? "",
    //   })),
    //   status: categoryStatus,
    // };
    const body = {
      orderData: subCategoriesList.map((_subcat: any, index: number) => ({
        postId: _subcat?._id ?? "",
        orderNumber: index,
      })),
    };
    const payload = { id: item?._id, body };
    // onConfirmClick(payload)
    getUpdatedCategory(payload, {
      onSuccess: () => {
        fetchCategoryList();
        handleClose();
      },
      onError: () => {},
    });
  };
  const cancelUpdateHandler = () => {
    setCategoryName(item?.name ?? "");
    setSubCategoriesList(item?.sub_categories ?? []);
    setCategoryStatus(item?.status ?? "");
    handleClose();
  };
  console.log("subCategoriesList", item?.sub_categories);

  return (
    <div>
      <Button variant="default" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        scroll={"body"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="edit_modal"
      >
        <DialogTitle id="alert-dialog-title">Edit category</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="modal_body ">
              <div className="md:basis-full md:flex md:flex-col">
                <div className=" border-solid border-b border-gray-200 max-h-[400px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] md:basis-full">
                  <div className="mb-6">
                    <h3 className="mb-4 md:text-[20px]">Category</h3>
                    <div className="flex items-center">
                      <div className="w-[calc(100%-50px)] pr-4 md:pr-2">
                        <CommonInput
                          onChange={getUpadatedCatName}
                          value={categoryName}
                          placeholderLabel="Category name"
                        />
                      </div>
                      <div onClick={categoryStatusHandler}>
                        <Switch
                          className="custom-switch"
                          checked={categoryStatus == "Inactive" ? false : true}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[16px] mb-4">Subcategories</h3>
                    <DragDropContext onDragEnd={handleDrop}>
                      <Droppable droppableId="list-container">
                        {(provided) => (
                          <div
                            className="list-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            <div className="mb-4 relative">
                              {subCategoriesList?.map((x: any, index: any) => (
                                <Draggable
                                  key={x._id}
                                  draggableId={x._id}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.dragHandleProps}
                                      {...provided.draggableProps}
                                      key={index}
                                      style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style!
                                      )}
                                    >
                                      <div
                                        className="flex items-center mb-4 justify-between"

                                        // style={{
                                        //   ...provided.draggableProps.style,
                                        //   // position: snapshot.isDragging
                                        //   //   ? "absolute"
                                        //   //   : "relative",
                                        //   // Add styles for the dragged state
                                        //   // width: snapshot.isDragging ? "100%" : "100%",
                                        //   // backgroundColor: snapshot.isDragging
                                        //   //   ? "red"
                                        //   //   : "transparent",
                                        // }}
                                      >
                                        <Button
                                          variant="default"
                                          className="bg-transparent border-0 p-0 hover:bg-transparent"
                                        >
                                          <DragIcon />
                                        </Button>
                                        <div className="w-[calc(100%-50px)] basis-full px-4 pr-6 md:px-2 md:pr-2">
                                          <CommonInput
                                            onChange={(e: any) =>
                                              getUpadatedSubCatName(e, x?._id)
                                            }
                                            value={x?.name ?? ""}
                                            // onChange={(value: any) => {
                                            //   var tmp_subCategoriesList = [
                                            //     ...subCategoriesList,
                                            //   ];
                                            //   tmp_subCategoriesList[
                                            //     index
                                            //   ].subcategoy_name = value;
                                            //   setSubCategoriesList(
                                            //     tmp_subCategoriesList
                                            //   );
                                            // }}
                                            // valueTxt={x?.name}
                                            placeholderLabel="Subcategory name"
                                          />
                                        </div>
                                        <Button
                                          variant="default"
                                          className="bg-transparent border-0 p-0 hover:bg-transparent"
                                          onClick={() =>
                                            deleteSubCategory(x?._id)
                                          }
                                        >
                                          <DeleteIconRed />
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>

                    <div>
                      <Button
                        variant="outline"
                        className="mr-2 border-0"
                        onClick={addSubCategory}
                      >
                        + Add subcategory
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
                  <ul className="flex items-center sm:w-full sm:flex-wrap">
                    <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                      <Button
                        type="button"
                        variant={"outline"}
                        className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                        onClick={cancelUpdateHandler}
                      >
                        Cancel
                      </Button>
                    </li>
                    <li className="sm:w-full">
                      <Button
                        onClick={updateCategory}
                        variant="default"
                        className="sm:w-full"
                        disabled={isSaveButtonDisabled}
                      >
                        Save
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditMuiModal;
