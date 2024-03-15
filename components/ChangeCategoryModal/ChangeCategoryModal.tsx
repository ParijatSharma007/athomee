import { useState } from "react";
import SerachInputComponent from "../SerachInputComponent/SerachInputComponent";
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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";
import { searchCategories } from "@/api/functions/admin.api";
import { ServiceData } from "@/typescript/Interfaces/admin.services.interface";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import { ChevronDown } from "lucide-react";

export default function ChangeCategoryModal({
  setcategory_id,
  setsub_category,
  serviceData,
  category_id,
  sub_category,
  showasText
}: {
  setcategory_id: any;
  setsub_category: any;
  serviceData: ServiceData;
  category_id: any;
  sub_category: any;
  showasText?:any;
}) {
  const [searchCat, setSearchCat] = useState("");
  const [query2] = useDebounce(searchCat, 600);

  const { data: catData } = useQuery(["get_list_cat", query2], async () =>
    searchCategories({
      search: searchCat,
    })
  );

  const handleSubcategoryChange = (catid: string, subcategoryId: string) => {
    setcategory_id(catid);
    setsub_category(subcategoryId);
    console.log("SubCategory:", subcategoryId, catid);
    console.log("Category:", catid);
  };

  const handleSave = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`transition-all text-[14px]  font-satoshi_medium border-none ${showasText && 'px-0 py-4 hover:bg-transparent hover:text-black'}`}
        >
          {serviceData.sub_category_title}
          <ChevronDown color="#70707B" />
        </Button>
      </DialogTrigger>
      {/* <Select>
        <SelectTrigger
          icon={<ChevronDown color="#70707B" />}
          className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
        >
            <SelectValue
              placeholder={serviceData.sub_category_title}
              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
            />
        </SelectTrigger>
      </Select> */}
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
                onInputChange={setSearchCat}
                className="max-w-full"
              />
            </div>
            <div className="px-10 pb-6 pt-4 sm:px-5 border-solid border-b border-gray-200 max-h-[400px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <div className="relative radioBtnPayment_mainWrap">
                {catData?.data?.map((item, cateindex: number) => {
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
                                    defaultValue={serviceData?.sub_category}
                                    className="ml-3"
                                  >
                                    <div className="flex mb-3 items-center">
                                      <div className="relative">
                                        <RadioGroupItem
                                          // value="default1"
                                          // id="r2"
                                          value={subitem._id}
                                          checked={subitem._id == sub_category}
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
          </div>

          {/* <div className="relative px-10 sm:px-5 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
            <ul className="flex items-center sm:w-full sm:flex-wrap">
              <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
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
                  Save
                </Button>
              </li>
            </ul>
          </div> */}
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
