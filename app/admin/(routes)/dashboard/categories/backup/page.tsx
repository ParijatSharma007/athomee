/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AddCategoriedModal from "@/components/AddCategoriedModal/AddCategoriedModal";
import Container from "@/components/Container";
import DeleteCategoriesModal from "@/components/DeleteCategoriesModal/DeleteCategoriesModal";
import EditCategoriesModal from "@/components/EditCategoriesModal/EditCategoriesModal";
import TableComponent from "@/components/TableComponent/TableComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Switch } from "@/components/ui/switch";
import { TableCell, TableRow } from "@/components/ui/table";
import DragIcon from "@/json/icons/DragIcon";
import { categoryList } from "@/json/mock/tableData.mock";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function page() {
  const tableHeadListForCategory = [
    "",
    "Category name",
    "Subcategories",
    "Listings",
    "Activity status",
    "",
  ];

  const [categoriesList, setCategoriesList] = useState(categoryList);

  const handleDrop = (droppedItem: any) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...categoriesList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setCategoriesList(updatedList);
  };

  const handleSubcategoryClick = (index: any, subCategory: any) => {
    var tmp_categoriesList = [...categoriesList];
    tmp_categoriesList[index].subcategories_list = subCategory;
    setCategoriesList(tmp_categoriesList);
  };

  return (
    <div className="py-10 md:py-6">
      <Container>
        <div className="flex items-center justify-between flex-wrap mb-8">
          <div>
            <h3 className=" text-[24px] mb-2 sm:text-[20px]">Categories</h3>
          </div>
          <AddCategoriedModal />
        </div>

        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="list-container">
            {(provided) => (
              <div
                className="list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <TableComponent
                  theadList={tableHeadListForCategory}
                  tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                  className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                >
                  {categoriesList.map((invoice, index) => (
                    <Draggable
                      key={invoice.id}
                      draggableId={invoice.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <TableRow
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          key={index}
                          style={{
                            ...provided.draggableProps.style,
                            // Add styles for the dragged state
                            // width: snapshot.isDragging ? "100%" : "100%",
                            // backgroundColor: snapshot.isDragging
                            //   ? "red"
                            //   : "transparent",
                          }}
                        >
                          <TableCell
                            className={`border-b border-gray-100 py-4 px-[20px] text-base !min-w-[30px] ${
                              categoriesList?.length - 1 === index && "border-0"
                            }`}
                          >
                            <Button
                              variant="default"
                              className="bg-transparent border-0 p-0 hover:bg-transparent"
                            >
                              <DragIcon />
                            </Button>
                          </TableCell>
                          <TableCell
                            className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                              categoriesList?.length - 1 === index && "border-0"
                            }`}
                          >
                            {invoice?.category_name}
                          </TableCell>
                          <TableCell
                            className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                              categoriesList?.length - 1 === index && "border-0"
                            }`}
                          >
                            {invoice?.subcategories}
                          </TableCell>
                          <TableCell
                            className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                              categoriesList?.length - 1 === index && "border-0"
                            }`}
                          >
                            {invoice?.listings}
                          </TableCell>
                          <TableCell
                            className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                              categoriesList?.length - 1 === index && "border-0"
                            }`}
                          >
                            <Switch
                              id="status"
                              className="custom-switch"
                              checked={invoice?.status === "Active"}
                            />
                          </TableCell>

                          <TableCell
                            className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                              categoriesList?.length - 1 === index && "border-0"
                            }`}
                          >
                            <div className="flex items-center">
                              <div>
                                <EditCategoriesModal
                                  onConfirmClick={(e: any) => handleSubcategoryClick(index, e)}
                                  item={invoice} title={""}                                ></EditCategoriesModal>
                              </div>
                              <div>
                                <DeleteCategoriesModal />
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </TableComponent>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </div>
  );
}
