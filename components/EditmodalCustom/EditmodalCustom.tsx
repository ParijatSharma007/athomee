"use client";
import CloseIcon from "@/json/icons/CloseIcon";
import DeleteIconRed from "@/json/icons/DeleteIconRed";
import DragIcon from "@/json/icons/DragIcon";
import { cn } from "@/lib/utils";
import { Switch } from "@radix-ui/react-switch";
import React, { HTMLAttributes, useCallback, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CommonInput from "../CommonInput/CommonInput";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";

interface customModal extends HTMLAttributes<HTMLDivElement> {
  title: string;
  item: any;
  onConfirmClick: (data: any) => void;
}

const EditmodalCustom: React.FC<
  customModal & HTMLAttributes<HTMLDivElement>
> = ({ className, item, onConfirmClick, ...props }) => {
  const [categoryName, setCategoryName] = useState(item?.category_name);
  const [subCategoriesList, setSubCategoriesList] = useState(
    item.subcategories_list
  );
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
    //   padding: grid * 2,
    //   margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "grey",
    width: isDragging ? "100%" : "100%",
    position: isDragging ? ("!absolute" as any) : "static",
    ...draggableStyle,
  });

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <div className={cn("main_modal_wrapper", className)} {...props}>
      <Button
        variant="default"
        className="bg-transparent border-0 p-0 hover:bg-transparent"
        onClick={handleOpen}
      >
        <DeleteIconRed />
      </Button>
      <div className={`modal_wrapper ${modalOpen ? "active" : ""}`}>
        <div className="flex items-center justify-between">
          <h2>{props?.title}</h2>
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal_body py-4 px-4">
          <div className="md:basis-full md:flex md:flex-col">
            <div className="py-6 px-10 md:py-4 sm:px-5 border-solid border-b border-gray-200 max-h-[400px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] md:basis-full">
              <div className="mb-6">
                <h3 className="mb-4 md:text-[20px]">Category</h3>
                <div className="flex items-center">
                  <div className="w-[calc(100%-50px)] pr-4 md:pr-2">
                    <CommonInput
                      onChange={(value) => setCategoryName(value)}
                      valueTxt={categoryName}
                      placeholderLabel="Category name"
                    />
                  </div>
                  <div>
                    <Switch className="custom-switch" />
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
                          {subCategoriesList.map((x: any, index: any) => (
                            <Draggable
                              key={x.id}
                              draggableId={x.id}
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
                                        onChange={(value: any) => {
                                          var tmp_subCategoriesList = [
                                            ...subCategoriesList,
                                          ];
                                          tmp_subCategoriesList[
                                            index
                                          ].subcategoy_name = value;
                                          setSubCategoriesList(
                                            tmp_subCategoriesList
                                          );
                                        }}
                                        valueTxt={x?.subcategoy_name}
                                        placeholderLabel="Subcategory name"
                                      />
                                    </div>
                                    <Button
                                      variant="default"
                                      className="bg-transparent border-0 p-0 hover:bg-transparent"
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
                  <Button variant="outline" className="mr-2 border-0">
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
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </li>
                <li className="sm:w-full">
                  <Button
                    onClick={() => onConfirmClick(subCategoriesList)}
                    variant="default"
                    className="sm:w-full"
                  >
                    Save
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`overlay ${modalOpen ? "active" : ""}`}
        onClick={handleClose}
      />
    </div>
  );
};

export default EditmodalCustom;
