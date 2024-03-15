import SerachInputComponent from "../SerachInputComponent/SerachInputComponent";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { useDebounce } from "use-debounce";
import { useMutation, useQuery } from "react-query";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useRef, useState } from "react";
import {
  getReservationDetails,
  searchCategories,
  updateServiceDetails,
} from "@/api/functions/admin.api";

export default function ChangeReservationCategoryModal({
  setcategory_id,
  setsub_category_id,
  category_id,
  sub_category,
  reservationData,
  updateReservcategory,
  reservationServiceCategoryId,
  refetchMainData,
}: {
  setcategory_id: any;
  setsub_category_id: any;
  category_id: string;
  sub_category: string;
  reservationData: any;
  updateReservcategory: any;
  reservationServiceCategoryId: any;
  refetchMainData: any;
}) {
  const [searchCat, setSearchCat] = useState("");
  const [query2] = useDebounce(searchCat, 600);
  const [isSaving, setIsSaving] = useState(false);
  console.log("reservationServiceCategoryId", reservationServiceCategoryId);
  const { data: catData } = useQuery(["get_list_cat", query2], async () =>
    searchCategories({
      search: searchCat,
    })
  );

  const handleSubcategoryChange = (catid: string, subcategoryId: string) => {
    setcategory_id(catid);
    setsub_category_id(subcategoryId);
    console.log("SubCategory:", subcategoryId, catid);
    console.log("Category:", catid);
  };

  const buttonRef = useRef<any>(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  const { mutate } = useMutation(updateServiceDetails, {
    onSuccess: (data) => {
      console.log("updatedata", data);
      handleClick();
      refetchMainData();
      setIsSaving(false);
    },
    onError: () => {
      setIsSaving(false);
    },
  });

  const handleSave = async () => {
    try {
      setIsSaving(true);
      if (category_id && sub_category && reservationServiceCategoryId) {
        // console.log(
        //   "Category1:",
        //   sub_category_id,
        //   "Category2:",
        //   category_id,
        //   "category3:",
        //   reservationServiceCategoryId
        // );
        // console.log("Category12", reservationServiceCategoryId);
        mutate({
          id: reservationServiceCategoryId,
          body: { category: category_id, sub_category: sub_category },
        });
      } else {
        throw new Error(
          "Error: category_id, sub_category, or reservationServiceCategoryId is null"
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setIsSaving(false);
    }
  };

  console.log("reservationData", reservationData);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="transition-all text-[14px] rounded-[100px] font-satoshi_medium border-none hover:bg-primary hover:text-white"
        >
          Change
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md !rounded-[12px]">
        <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4 ">
          <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
            Change category
          </DialogTitle>
        </DialogHeader>
        <div className="md:basis-full md:flex md:flex-col ">
          <div className="md:basis-full md:max-h-[calc(100vh-220px)] md:overflow-auto">
            <div className="px-10 pt-4 sm:px-5">
              {" "}
              <SerachInputComponent
                className="max-w-full"
                onInputChange={setSearchCat}
              />
            </div>
            {reservationData && (
              <>
                <div className="px-10 pb-6 pt-4 sm:px-5 border-solid border-b border-gray-200 max-h-[400px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                  <div className="relative radioBtnPayment_mainWrap">
                    {catData?.data?.map((item, cateindex: number) => {
                      console.log("catData", catData?.data);
                      
                      return (
                        <>
                          <RadioGroup defaultValue="comfortable">
                            <div
                              key={cateindex}
                              className="flex mb-3 justify-center flex-col"
                            >
                              <div className="relative mb-5">
                                <RadioGroupItem
                                  // defaultValue={category_id}
                                  value={item._id}
                                  checked={item._id == category_id}
                                  // value="default"
                                  id={`r1_${cateindex}`}
                                  disabled
                                  className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                                />
                                <p className="pl-8 text-[16px]">{item?.name}</p>
                              </div>
                              {item?.sub_categories?.map(
                                (subitem, subindex: number) => {
                                  return (
                                    <>
                                      <RadioGroup
                                        defaultValue={
                                          reservationData?.sub_category_id
                                        }
                                        className="ml-3"
                                      >
                                        <div className="flex mb-3 items-center">
                                          <div className="relative">
                                            <RadioGroupItem
                                              // value="default1"
                                              // id="r2"
                                              value={subitem._id}
                                              checked={
                                                subitem._id == sub_category
                                              }
                                              id={`r2_${subindex}`}
                                              onClick={() =>
                                                handleSubcategoryChange(
                                                  item._id,
                                                  subitem._id
                                                )
                                              }
                                              className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                                            />
                                            <p className="pl-8 text-[16px]">
                                              {subitem?.name}
                                            </p>
                                          </div>
                                        </div>
                                      </RadioGroup>
                                    </>
                                  );
                                }
                              )}
                            </div>
                          </RadioGroup>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="relative px-10 sm:px-5 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
            <ul className="flex items-center sm:w-full sm:flex-wrap">
              <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
                    ref={buttonRef}
                    className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </li>
              <li className="sm:w-full">
                <Button
                  variant="default"
                  className="sm:w-full"
                  onClick={handleSave}
                >
                  {isSaving ? "Saving..." : "Save"}
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
  );
}
