"use client";

import AddCategoriedModal from "@/components/AddCategoriedModal/AddCategoriedModal";
import Container from "@/components/Container";
import DeleteCategoriesModal from "@/components/DeleteCategoriesModal/DeleteCategoriesModal";
import EditMuiModal from "@/components/EditMuiModal/EditMuiModal";
import Loading from "@/components/Loading/Loading";
import { BasicPagination } from "@/components/pagination comp/Pagination";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Switch } from "@/components/ui/switch";
import {
  useCategoryList,
  useDeleteCategory,
  useUpdateCategoryOrder,
  useUpdateCategoryStatus,
} from "@/hooks/react-qurey/query-hooks/adminDashboard.hooks";
import DragIcon from "@/json/icons/DragIcon";
// import { categoryList } from "@/json/mock/tableData.mock";
import { cn } from "@/lib/utils";
import React, {
  HtmlHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface Item {
  id: string;
  content: string;
}

// a little function to help us with reordering the result

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: React.CSSProperties
): React.CSSProperties => ({
  background: isDragging ? "transparent" : "transparent",
  width: isDragging ? "100%" : "100%",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? "transparent" : "transparent",
  width: "100%",
});

const tableHeadListForCategory = [
  "",
  "Category name",
  "Subcategories",
  "Listings",
  "Activity status",
  "",
];

interface customTableProps extends HtmlHTMLAttributes<HTMLDivElement> {
  tableHeadClassName?: string;
  tableBodyClassName?: string;
}

const DragAndDropTable: React.FC<
  customTableProps & HtmlHTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => {
  return (
    <div className={cn("drag_table", className)} {...props}>
      <ul className="drag_table_header">
        {tableHeadListForCategory?.map((data, index) => (
          <li
            key={index}
            className={cn("thead_listItems", props?.tableHeadClassName)}
          >
            {data}
          </li>
        ))}
      </ul>
      <div className={cn("drag_table_content", props?.tableBodyClassName)}>
        {props?.children}
      </div>
    </div>
  );
};

// const EditModalSectionComponent = ({
//   invoice,
//   index,
//   handleSubcategoryClick,
// }: any) => {
//   const [open, setOpen] = React.useState(false);

//   const { mutate: getUpdatedCategory, isLoading: updateLoader } =
//     useUpdateCategory();

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const updateCategory = (data: any) =>
//     getUpdatedCategory(data, { onSuccess: () => {}, onError: () => {} });

//   return (
//     <>
//       <Button variant="default" onClick={handleClickOpen}>
//         Edit
//       </Button>
//       <EditMuiModal
//         onConfirmClick={(e: any) => handleSubcategoryClick(index, e)}
//         item={invoice}
//         open={open}
//         onClose={handleClose}
//       />
//     </>
//   );
// };

export default function Page() {
  const buttonRef = useRef<any>(null);
  const [categoriesList, setCategoriesList] = useState<any>([]);
  const [callCategoryList, setCallCategoryList] = useState(false);
  const [listLoader, setListLoader] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const { data: deleteCategory, refetch } = useDeleteCategory(
    selectedCategoryId,
    onSuccessDelete,
    onErrorDelete
  );
  const { mutate: getCategoryList, isLoading } = useCategoryList();
  const { mutate: updateCategoryOrder, isLoading: updateOrderLoader } =
    useUpdateCategoryOrder();

  const { mutate: updatedCategoryStatus, isLoading: updateStatusLoader } =
    useUpdateCategoryStatus();

  function onSuccessDelete(response: any) {
    console.log("on success delete", response);
    buttonRef.current.click();
  }
  function onErrorDelete(error: any) {
    console.log("on error delete", error);
  }

  const callCategoryListHandler = useCallback(
    () => setCallCategoryList(!callCategoryList),
    [callCategoryList]
  );
  const handleDrop = (droppedItem: any) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...categoriesList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    const currentCategoryOrderPayload = {
      orderData: updatedList.map((_cat: any, index: number) => ({
        postId: _cat?._id,
        orderNumber: index,
      })),
    };
    // console.log("category order", currentCategoryOrder, updatedList);
    if (JSON.stringify(updatedList) != JSON.stringify(categoriesList)) {
      setListLoader(true);
      updateCategoryOrder(currentCategoryOrderPayload, {
        onSuccess: () => {
          setCategoriesList(updatedList);
          setListLoader(false);
        },
        onError: () => {},
      });
    }
    // setCategoriesList(updatedList);
  };

  const handleSubcategoryClick = (index: any, subCategory: any) => {
    var tmp_categoriesList = [...categoriesList];
    tmp_categoriesList[index].subcategories_list = subCategory;
    setCategoriesList(tmp_categoriesList);
  };

  const categoryActiveHandler = (id: string | number, status: string) => {
    setListLoader(true);
    // const updatedCatagoryList = categoriesList.map((_cat: any) => {
    //   if (_cat?._id == id) {
    //     console.log("updatedCatagoryList", "came in if");
    //     return {
    //       ..._cat,
    //       status: _cat?.status == "Inactive" ? "Active" : "Inactive",
    //     };
    //   } else {
    //     console.log(
    //       "updatedCatagoryList",
    //       "else",
    //       _cat?._id,
    //       id,
    //       _cat?.id == id
    //     );
    //     return { ..._cat };
    //   }
    // });
    // console.log("updatedCatagoryList=>", updatedCatagoryList);
    // setCategoriesList(updatedCatagoryList);
    updatedCategoryStatus(
      {
        status: status == "Inactive" ? "Active" : "Inactive",
        id: id,
      },
      {
        onSuccess: (response: any) => {
          getCategoryList(
            {},
            {
              onSuccess: (response: any) => {
                const categoryListData = response?.data?.data ?? [];
                console.log("response", response?.data?.data);
                setCategoriesList(categoryListData);
                setListLoader(false);
              },
            }
          );
        },
        onError: (error: any) => {
          console.log("error", error?.response?.data?.message ?? "");
        },
      }
    );
  };

  // const deleteCategoryHandler = (id: string) => {
  //   setSelectedCategoryId(id);
  //   refetch();
  // };

  const updateCategoryListHandler = () => {};

  useEffect(() => {
    setListLoader(true);
    getCategoryList(
      {},
      {
        onSuccess: (response: any) => {
          const categoryListData = response?.data?.data ?? [];
          console.log("response", response?.data?.data);
          setCategoriesList(categoryListData);
          setListLoader(false);
        },
      }
    );
  }, [callCategoryList]);
  console.log("categoryList", categoriesList);

  return (
    <div className="py-10 md:py-6">
      <Container>
        <div className="flex items-center justify-between flex-wrap mb-8">
          <div>
            <h3 className=" text-[24px] mb-2 sm:text-[20px]">Categories</h3>
          </div>
          <AddCategoriedModal fetchCategoryList={callCategoryListHandler} />
        </div>
        {listLoader ? (
          <>
            {/* <Button variant="default" className="sm:w-full">
              <ButtonLoader />
            </Button> */}
            {/* <div role="status" className=" animate-pulse">
              <div className="h-[45px] bg-gray-200 rounded-tr-2xl rounded-tl-2xl dark:bg-gray-700 mb-2.5"></div>
              <div className="h-[73px] bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
              <div className="h-[73px] bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
              <div className="h-[73px] bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
              <div className="h-[73px] bg-gray-200  dark:bg-gray-700"></div>
              <span className="sr-only">Loading...</span>
            </div> */}
            <Loading />
          </>
        ) : (
          <>
            <DragDropContext onDragEnd={handleDrop}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    <DragAndDropTable
                      tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                      className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                    >
                      {!!categoriesList &&
                        categoriesList?.length > 0 &&
                        categoriesList.map((_item: any, index: number) => (
                          <Draggable
                            key={_item._id}
                            draggableId={_item._id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <ul
                                ref={provided.innerRef as any}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="tbody_list"
                                key={index}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style!
                                )}
                              >
                                <li
                                  className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                    categoriesList?.length - 1 === index &&
                                    "border-0"
                                  }`}
                                >
                                  <Button
                                    variant="default"
                                    className="bg-transparent border-0 p-0 hover:bg-transparent"
                                  >
                                    <DragIcon />
                                  </Button>
                                </li>
                                {!!_item?.name && (
                                  <li
                                    className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                      categoriesList?.length - 1 === index &&
                                      "border-0"
                                    }`}
                                  >
                                    {_item?.name}
                                  </li>
                                )}
                                {!!_item?.sub_categories && (
                                  <li
                                    className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                      categoriesList?.length - 1 === index &&
                                      "border-0"
                                    }`}
                                  >
                                    {_item?.sub_categories?.length ?? 0}
                                  </li>
                                )}
                                {/* {!!_item?.listings && ( */}
                                <li
                                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                    categoriesList?.length - 1 === index &&
                                    "border-0"
                                  }`}
                                >
                                  {_item?.total_services ?? "-"}
                                </li>
                                {/* )} */}
                                <li
                                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                    categoriesList?.length - 1 === index &&
                                    "border-0"
                                  }`}
                                  onClick={() =>
                                    categoryActiveHandler(
                                      _item._id,
                                      _item?.status
                                    )
                                  }
                                >
                                  <Switch
                                    id="status"
                                    className="custom-switch"
                                    checked={_item?.status === "Active"}
                                    // onChange={() =>
                                    //   categoryActiveHandler(_item._id)
                                    // }
                                  />
                                </li>

                                <li
                                  className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                    categoriesList?.length - 1 === index &&
                                    "border-0"
                                  }`}
                                >
                                  <div className="flex items-center">
                                    <div className="mr-[15px]">
                                      {/* <EditModalSectionComponent
                                        handleSubcategoryClick={
                                          handleSubcategoryClick
                                        }
                                        invoice={_item ?? []}
                                        index={index}
                                      /> */}
                                      <EditMuiModal
                                        item={_item ?? {}}
                                        fetchCategoryList={
                                          callCategoryListHandler
                                        }
                                      />
                                    </div>
                                    <div>
                                      <DeleteCategoriesModal
                                        // categoryId={_item._id}
                                        //   onDeleteAction={() =>
                                        //     deleteCategoryHandler(_item._id)
                                        //   }
                                        fetchCategoryList={
                                          callCategoryListHandler
                                        }
                                        categoryItem={_item}
                                        // buttonRef={buttonRef}
                                      />
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </DragAndDropTable>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </>
        )}
        {/* <div className="py-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className=" bg-gray-900 text-white w-[32px] h-[32px] rounded-full p-0 flex items-center justify-center"
                >
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> */}
      </Container>
    </div>
  );
}
