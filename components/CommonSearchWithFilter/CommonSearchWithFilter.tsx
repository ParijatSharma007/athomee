"use client";
/* eslint-disable react/jsx-key */
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import dayjs from "dayjs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import ChevornDown from "@/json/icons/ChevornDown";
import LocationIcon from "@/json/icons/LocationIcon";
import RatingFill from "@/json/icons/RatingFill";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import CustomCalenderTime from "../CustomCalenderTime/CustomCalenderTime";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { useQuery } from "react-query";
import {
  searchCategories,
  searchCategorieswithtoken,
} from "@/api/functions/admin.api";
import { useDebounce } from "use-debounce";
import SerachInputComponent from "../SerachInputComponent/SerachInputComponent";
import axios from "axios";
import { SelectLabel } from "@radix-ui/react-select";
import { Divider } from "@mui/material";
import ClientCustomCalenderTime from "../CustomCalenderTime/ClientCustomCalenderTime";

interface buttonProps {
  closeButton?: any;
  category_id?: any;
  subcategory_id?: any;
  locationset?: any;
  minpricechange?: any;
  maxpricechange?: any;
  ratingChange?: any;
  showAviablityStatus?: any;
  datehandlechange?: any;
  timehandlechange?: any;
  minp?: any;
  maxp?: any;
  ratingreset?: any;
}

export default function CommonSearchComponentWithFilter({
  closeButton,
  category_id,
  subcategory_id,
  locationset,
  minpricechange,
  maxpricechange,
  ratingChange,
  showAviablityStatus,
  datehandlechange,
  timehandlechange,
  minp,
  maxp,
  ratingreset,
}: buttonProps) {
  const select2 = [
    {
      itemBold: "San",
      itemPara: "Francisco, CA, USA",
    },
    {
      itemBold: "San1",
      itemPara: "Francisco, CA, USA 1",
    },
    {
      itemBold: "San2",
      itemPara: "Francisco, CA, USA 2",
    },
    {
      itemBold: "San3",
      itemPara: "Francisco, CA, USA 3",
    },
    {
      itemBold: "San4",
      itemPara: "Francisco, CA, USA 4",
    },
    {
      itemBold: "San5",
      itemPara: "Francisco, CA, USA 5",
    },
    {
      itemBold: "San 6",
      itemPara: "Francisco, CA, USA 6",
    },
  ];

  const [date, setDate] = React.useState<Date>();
  const [openFilter, setopenFilter] = useState(false);
  const toggleFilter = () => {
    setopenFilter(!openFilter);
  };

  // Fetch Category Details
  const [searchCat, setSearchCat] = useState("");
  const [query2] = useDebounce(searchCat, 600);

  const { data: catData } = useQuery(["get_list_cat", query2], async () =>
    searchCategorieswithtoken({
      search: searchCat,
    })
  );

  // Category And Subcategory Id
  const [categoryid, setCategoryid] = useState<any>([]);
  const [subcategoryid, setSubCategoryid] = useState<any>([]);
  const [selectedNames, setSelectedNames] = useState<any>([]);

  // const handleCheckboxClick = (id: string, isSubCategory: boolean) => {
  //   if (isSubCategory) {
  //     setSubCategoryid((prevIds: string[]) => {
  //       const updatedIds = prevIds.includes(id)
  //         ? prevIds.filter((subId: string) => subId !== id)
  //         : [...prevIds, id];

  //       // console.log("Selected Subcategories:", updatedIds);
  //       return updatedIds;
  //     });
  //   } else {
  //     setCategoryid((prevIds: string[]) => {
  //       const updatedIds = prevIds.includes(id)
  //         ? prevIds.filter((catId: string) => catId !== id)
  //         : [...prevIds, id];
  //       // console.log("Selected Categories:", updatedIds);

  //       // Check or uncheck all corresponding subcategories
  //       const subcategoryIdsForCategory =
  //         catData?.data
  //           ?.find((item: any) => item._id === id)
  //           ?.sub_categories?.map((subItem: any) => subItem._id) || [];

  //       setSubCategoryid((prevSubIds: string[]) => {
  //         const newSubIds = updatedIds.includes(id)
  //           ? Array.from(new Set([...prevSubIds, ...subcategoryIdsForCategory]))
  //           : prevSubIds.filter(
  //               (subId) => !subcategoryIdsForCategory.includes(subId)
  //             );

  //         // console.log("Selected Subcategories for Category:", newSubIds);
  //         return newSubIds;
  //       });
  //       return updatedIds;
  //     });
  //   }
  // };

  // const handleCheckboxClick = (id: string, isSubCategory: boolean) => {
  //   if (isSubCategory) {
  //     // If it's a subcategory, update the subcategoryid state
  //     setSubCategoryid((prevIds: string[]) => {
  //       const updatedIds = prevIds.includes(id)
  //         ? prevIds.filter((subId: string) => subId !== id)
  //         : [...prevIds, id];

  //       // Uncheck corresponding category if all subcategories are unchecked
  //       const categoryIdsForSubcategory =
  //         catData?.data
  //           ?.filter((item: any) =>
  //             item.sub_categories.some((sub: any) => sub._id === id)
  //           )
  //           .map((item: any) => item._id) || [];

  //       const allSubcategoriesUnchecked = categoryIdsForSubcategory.every(
  //         (categoryId: string) =>
  //           updatedIds.every((subId: string) =>
  //             catData?.data
  //               ?.find((item: any) => item._id === categoryId)
  //               ?.sub_categories.some((sub: any) => sub._id !== subId)
  //           )
  //       );

  //       if (allSubcategoriesUnchecked) {
  //         setCategoryid((prevCatIds: string[]) =>
  //           prevCatIds.filter(
  //             (catId: string) => !categoryIdsForSubcategory.includes(catId)
  //           )
  //         );
  //       }

  //       return updatedIds;
  //     });
  //   } else {
  //     // If it's a category, update the categoryid state
  //     setCategoryid((prevIds: string[]) => {
  //       const updatedIds = prevIds.includes(id)
  //         ? prevIds.filter((catId: string) => catId !== id)
  //         : [...prevIds, id];

  //       // Check or uncheck all corresponding subcategories
  //       const subcategoryIdsForCategory =
  //         catData?.data
  //           ?.find((item: any) => item._id === id)
  //           ?.sub_categories?.map((subItem: any) => subItem._id) || [];

  //       setSubCategoryid((prevSubIds: string[]) => {
  //         const newSubIds = updatedIds.includes(id)
  //           ? Array.from(new Set([...prevSubIds, ...subcategoryIdsForCategory]))
  //           : prevSubIds.filter(
  //               (subId) => !subcategoryIdsForCategory.includes(subId)
  //             );

  //         return newSubIds;
  //       });

  //       return updatedIds;
  //     });
  //   }
  //   // Update selected names
  //   const selectedCategoryNames = catData?.data
  //     .filter((item: any) => categoryid.includes(item._id))
  //     .map((item: any) => item.name);

  //   const selectedSubCategoryNames = catData?.data
  //     .flatMap((item: any) =>
  //       item.sub_categories.filter((sub: any) =>
  //         subcategoryid.includes(sub._id)
  //       )
  //     )
  //     .map((sub: any) => sub.name);

  //   setSelectedNames([...selectedCategoryNames, ...selectedSubCategoryNames]);
  // };
  const handleCheckboxClick = (id: string, isSubCategory: boolean) => {
    if (isSubCategory) {
      // If it's a subcategory, update the subcategoryid state
      setSubCategoryid((prevIds: string[]) => {
        const updatedIds = prevIds.includes(id)
          ? prevIds.filter((subId: string) => subId !== id)
          : [...prevIds, id];

        // Uncheck corresponding category if all subcategories are unchecked
        const categoryIdsForSubcategory =
          catData?.data
            ?.filter((item: any) =>
              item.sub_categories.some((sub: any) => sub._id === id)
            )
            .map((item: any) => item._id) || [];

        const allSubcategoriesUnchecked = categoryIdsForSubcategory.every(
          (categoryId: string) =>
            updatedIds.every((subId: string) =>
              catData?.data
                ?.find((item: any) => item._id === categoryId)
                ?.sub_categories.some((sub: any) => sub._id !== subId)
            )
        );

        if (allSubcategoriesUnchecked) {
          setCategoryid((prevCatIds: string[]) =>
            prevCatIds.filter(
              (catId: string) => !categoryIdsForSubcategory.includes(catId)
            )
          );
        }

        // Update selected names for subcategories
        const selectedSubCategoryNames = catData?.data
          .flatMap((item: any) =>
            item.sub_categories.filter((sub: any) =>
              updatedIds.includes(sub._id)
            )
          )
          .map((sub: any) => sub.name);

        setSelectedNames(selectedSubCategoryNames);

        return updatedIds;
      });
    } else {
      // If it's a category, update the categoryid state
      setCategoryid((prevIds: string[]) => {
        const updatedIds = prevIds.includes(id)
          ? prevIds.filter((catId: string) => catId !== id)
          : [...prevIds, id];

        // Check or uncheck all corresponding subcategories
        const subcategoryIdsForCategory =
          catData?.data
            ?.find((item: any) => item._id === id)
            ?.sub_categories?.map((subItem: any) => subItem._id) || [];

        setSubCategoryid((prevSubIds: string[]) => {
          const newSubIds = updatedIds.includes(id)
            ? Array.from(new Set([...prevSubIds, ...subcategoryIdsForCategory]))
            : prevSubIds.filter(
                (subId) => !subcategoryIdsForCategory.includes(subId)
              );

          // Update selected names for categories
          const selectedCategoryNames = catData?.data
            .filter((item: any) => updatedIds.includes(item._id))
            .map((item: any) => item.name);

          setSelectedNames(selectedCategoryNames);

          return newSubIds;
        });

        return updatedIds;
      });
    }
  };

  // Location Find API
  const [location, setLocation] = useState<any>("");
  const [addressList, setAddressList] = useState<any[]>([]);
  const [input, setInput] = useState("");
  console.log("input", input);

  const handleSearch = async () => {
    console.log("input", input);
    try {
      if (input.trim() === "") {
        setAddressList([]);
        return;
      }
      setAddressList([]);
      const response = await axios.post("/api/google/search", {
        input: input,
      });
      console.log("response", response);
      if (response) {
        setAddressList(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (input) {
      handleSearch();
    }
  }, [input]);

  const handleLocation = (selectedValue: any) => {
    setLocation(selectedValue);
    setInput("");
    setAddressList([]);
    handleSearch();
    console.log("input", addressList);
  };

  // console.log("location", location);

  // Min and Max Price
  const [minPrice, setMinPrice] = useState<any>(0);
  const [maxPrice, setMaxPrice] = useState<any>(0);
  const [maxPriceError, setMaxPriceError] = useState<string>("");

  const handleMinPriceChange = (e: any) => {
    const value = e.target.value;
    setMinPrice(value);
  };

  // const handleMaxPriceChange = (e: any) => {
  //   const value = e.target.value;
  //   setMaxPrice(value);
  // };

  const handleMaxPriceChange = (e: any) => {
    const value = e.target.value;
    const min = parseFloat(minPrice);
    const max = parseFloat(value);

    if (max >= min || value === "") {
      setMaxPrice(value);
      setMaxPriceError("");
    } else {
      const value = e.target.value;
      setMaxPrice(value);
      setMaxPriceError("Greater than or equal to Min price");
    }
  };

  // console.log("Max Price", maxPrice, "Max Price", minPrice);

  // Rating Counts
  const [rating, setRating] = useState(0);

  const handleRatingClick = (index: number) => {
    if (index + 1 > rating) {
      setRating(index + 1);
    } else {
      setRating(0);
    }
  };

  // console.log("rating", rating);

  // Show Aviableability
  const [showAviable, setShowAviable] = useState(false);
  const toggleAviability = () => {
    setShowAviable((prevState) => !prevState);
  };

  // console.log("showAviable", showAviable);
  // Filter Date and Time
  const [chosendate, setChoosedate] = useState<any>(null);
  const [chosentime, setChoosetime] = useState<any>(null);

  const handleChangeDate = (date: any) => {
    setChoosedate(date);
  };
  const handleChangetime = (time: any) => {
    setChoosetime(time);
  };
  // Function to format date and time
  const formatDateTime = (date: any, time: any) => {
    if (date && time) {
      const formattedDate = dayjs(date).format("ddd, MMM D");
      return `${formattedDate} from ${time}`;
    } else {
      return "Select Date and Time";
    }
  };

  console.log("chosen date", chosendate, "chosen time", chosentime);

  // Main Function
  const handleSearchButtonClick = () => {
    category_id(categoryid);
    subcategory_id(subcategoryid);
    locationset(location);
    datehandlechange(chosendate);
    timehandlechange(chosentime);
  };

  // const handleFilterButtonClick = () => {
  //   category_id(categoryid);
  //   subcategory_id(subcategoryid);
  //   locationset(location);
  //   minpricechange(minPrice);
  //   maxpricechange(maxPrice);
  //   ratingChange(rating);
  //   showAviablityStatus(showAviable);
  //   datehandlechange(chosendate);
  //   timehandlechange(chosentime);
  //   toggleFilter();
  // };
  const handleFilterButtonClick = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (min <= max || maxPrice === "") {
      category_id(categoryid);
      subcategory_id(subcategoryid);
      locationset(location);
      minpricechange(minPrice);
      maxpricechange(maxPrice);
      ratingChange(rating);
      showAviablityStatus(showAviable);
      datehandlechange(chosendate);
      timehandlechange(chosentime);
      toggleFilter();
    } else {
      setMaxPriceError("Max price must be greater than or equal to Min price");
    }
  };

  const handleClearFunction = () => {
    category_id([]);
    subcategory_id([]);
    locationset("");
    setSelectedNames([]);
    setLocation("");
    minpricechange(setMinPrice(0));
    maxpricechange(setMaxPrice(0));
    toggleFilter();
    datehandlechange(setChoosedate(null));
    timehandlechange(setChoosetime(null));
    ratingChange(setRating(0));
    showAviablityStatus(setShowAviable(false));
    setAddressList([]);
  };

  const handleresfilter = () => {
    category_id(categoryid);
    subcategory_id(subcategoryid);
    locationset(location);
    minpricechange(minPrice);
    maxpricechange(maxPrice);
    ratingChange(rating);
    showAviablityStatus(showAviable);
    datehandlechange(chosendate);
    timehandlechange(chosentime);
    toggleFilter();
  };

  useEffect(() => {
    setMaxPrice(maxp);
  }, [maxp]);
  useEffect(() => {
    setMinPrice(minp);
  }, [minp]);

  useEffect(() => {
    setRating(ratingreset);
  }, [ratingreset]);
  console.log("location in child", location);

  return (
    <div className="-mt-12  relative lg:mt-0">
      <div className="hidden lg:flex fixed top-0 left-0 w-full px-[16px] border-b bg-white border-gray-200 border-solid py-6 z-[999]">
        <Button
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium bg-transparent p-0 h-auto w-auto hover:opacity-50 hover:bg-transparent"
          onClick={closeButton}
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </Button>
        <p className="absolute left-[50%] translate-x-[-50%] top-[24px] text-[16px] text-gray-900 font-satoshi_medium">
          Client profile
        </p>
        <Button
          onClick={handleClearFunction}
          type="button"
          className="p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium ml-auto bg-transparent hover:bg-transparent"
        >
          Clear all
        </Button>
      </div>
      <Container>
        <div className="customCheckBox_wrap lg:z-[99] lg:h-[100vh] lg:overflow-y-auto lg:pt-[110px] lg:mt-20px bg-white py-6 px-10 lg:px-0 xl:px-4 rounded-xl shadow-custom lg:!shadow-none relative md:rounded-[0]">
          <div className="flex w-full items-center justify-between flex-wrap ">
            {" "}
            <div className="flex w-[calc(100%-202px)] lg:w-full md:w-full items-center justify-between flex-wrap md:border-b-[1px] md:pb-6">
              <div className="relative lg:mb-3 pr-8 xl:pr-3 after:content-[''] after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2 w-1/3 lg:w-full lgmb-3  lg:border lg:border-gray-200 lg:rounded-[8px] lg:px-4 lg:py-3">
                <p className="text-sm text-textgray font-satoshi_medium">
                  Service Type
                </p>

                <Select>
                  <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] xl:text-[16px]  font-satoshi_medium text-gray-900">
                    <SelectValue
                      placeholder={
                        selectedNames.length > 0
                          ? selectedNames.join(", ")
                          : "Select Services"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {catData?.data?.map((item: any, index: any) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              value={item._id}
                              checked={categoryid.includes(item._id)}
                              onClick={() =>
                                handleCheckboxClick(item._id, false)
                              }
                              className="checkBox border-gray-200 rounded-[4px]"
                            />
                            <label
                              htmlFor={`${item.name}`}
                              className="text-base font-satoshi_medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item?.name}
                            </label>
                          </div>
                          <ul className="pl-4 py-1">
                            {item?.sub_categories?.map(
                              (item: any, index: number) => (
                                <li key={index} className="py-2 pl-4">
                                  <div
                                    className="flex items-center space-x-2"
                                    key={index}
                                  >
                                    <Checkbox
                                      id={`${item.name}`}
                                      checked={subcategoryid.includes(item._id)}
                                      onClick={() =>
                                        handleCheckboxClick(item._id, true)
                                      }
                                      className="checkBox border-gray-200 rounded-[4px] "
                                    />
                                    <label
                                      htmlFor={`${item.name}`}
                                      className="text-base font-satoshi_medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      {item?.name}
                                    </label>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                      {/* {select1?.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              id={`${item.mainText}`}
                              className="checkBox border-gray-200 rounded-[4px]"
                            />
                            <label
                              htmlFor={`${item.mainText}`}
                              className="text-base font-satoshi_medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item?.mainText}
                            </label>
                          </div>
                          <ul className="pl-4 py-1">
                            {item?.subList?.map((item, index) => (
                              <li key={index} className="py-2 pl-4">
                                <div
                                  className="flex items-center space-x-2"
                                  key={index}
                                >
                                  <Checkbox
                                    id={`${item.eachSubListItem}`}
                                    className="checkBox border-gray-200 rounded-[4px] "
                                  />
                                  <label
                                    htmlFor={`${item.eachSubListItem}`}
                                    className="text-base font-satoshi_medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {item?.eachSubListItem}
                                  </label>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))} */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative px-8 xl:px-3 after:content-[''] after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2 w-1/3 lg:w-full lg:mb-3 lg:border lg:border-gray-200 lg:rounded-[8px] lg:px-4 lg:py-3">
                <p className="text-sm text-textgray font-satoshi_medium">
                  Location
                </p>

                <Select onValueChange={handleLocation} value={location}>
                  <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] xl:text-[16px]  font-satoshi_medium text-gray-900">
                    <SelectValue
                      placeholder="Select Location"
                      className="text-gray-900 text-base text-left"
                    />
                  </SelectTrigger>
                  <SelectContent position="popper" className=" SelectContent">
                    <div className="px-2">
                      <SerachInputComponent
                        onInputChange={setInput}
                        className="mb-6"
                      />
                    </div>
                    <div className="h-[260px] overflow-y-auto">
                      <SelectGroup>
                        <SelectLabel className="text-center">
                          {addressList.length ? "" : "Search Something"}
                        </SelectLabel>
                        {!!addressList &&
                          addressList.map((item: any, index: number) => (
                            <SelectItem value={item.description} key={index}>
                              {item.description}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    </div>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative px-8 xl:px-3 w-1/3 after:content-[''] after:bg-[rgba(228,228,231,0.4)] after:w-[1px] after:h-11 after:absolute after:right-0 after:top-[60%] after:-translate-y-1/2  lg:w-full lg:mb-3 lg:border lg:border-gray-200 lg:rounded-[8px] lg:px-4 lg:py-3">
                <p className="text-sm text-textgray font-satoshi_medium">
                  Date & time
                </p>
                <div>
                  <Select>
                    <SelectTrigger className="w-full border-0 p-0 h-auto text-[18px] font-satoshi_medium text-gray-900 text-left">
                      <SelectValue
                        placeholder={formatDateTime(chosendate, chosentime)}
                      />
                    </SelectTrigger>
                    <SelectContent
                      className="min-w-[690px]  md:min-w-fit md:max-w-[95vw] md:w-[95vw] min-h-[480px] right-0 left-inherit md:!right-auto md:!left-[50%] md:!translate-x-[-50%]"
                      align="end"
                    >
                      <SelectGroup className="min-w-[100%]">
                        <ClientCustomCalenderTime
                          onDataFromChild={undefined}
                          selectedDate={new Date()}
                          dateselectvalue={handleChangeDate}
                          timeselectvalue={handleChangetime}
                        />
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <Button
              variant={null}
              className=" h-[52px] lg:hidden"
              onClick={toggleFilter}
            >
              Filter <ChevornDown />
            </Button>
            <div className="relative w-[106px] basis-[106px] lg:hidden">
              <Button
                variant="default"
                className="w-full h-[52px]"
                onClick={handleSearchButtonClick}
              >
                Search
              </Button>
            </div>
          </div>

          {openFilter && (
            <div
              className={`transition-all duration-75 ease-in absolute lg:relative bg-white z-10 w-full left-0 p-10 pt-0 rounded-b-[8px] lg:hidden  `}
            >
              <div className="border-t-[1px] border-[#E4E4E7] mt-6 -mx-10  ">
                <div className="flex w-[calc(100%-202px)] items-center justify-between flex-wrap pt-6 pb-6 px-10">
                  <div className="w-1/3">
                    <p className="text-md  font-satoshi_medium mb-4">
                      Price range
                    </p>
                    <div className="flex flex-wrap">
                      <div className="flex items-center mr-6">
                        <Label
                          htmlFor="email"
                          className="mr-2 text-sm text-textgray"
                        >
                          Min
                        </Label>
                        <Input
                          placeholder="$1,000"
                          value={minPrice}
                          onChange={handleMinPriceChange}
                          className="w-auto h-auto py-2 px-3 max-w-[70px] text-sm font-normal"
                        />
                      </div>
                      <div className="flex items-center">
                        <Label
                          htmlFor="email"
                          className="mr-2 text-sm text-textgray"
                        >
                          Max
                        </Label>
                        <Input
                          placeholder="$5,000"
                          value={maxPrice}
                          onChange={handleMaxPriceChange}
                          className="w-auto h-auto py-2 px-3 max-w-[72px] text-sm font-normal"
                        />
                      </div>
                      {maxPriceError && (
                        <p className="text-red-500 w-full">{maxPriceError}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/3">
                    <p className="text-md  font-satoshi_medium mb-4">
                      Star rating
                    </p>
                    <div className="flex items-center">
                      <div className="flex  p-4 bg-[#FAFAFA] rounded-[8px] mr-4">
                        {[...Array(5)].map((_, index) => (
                          <RatingFill
                            key={index}
                            width="24"
                            height="24"
                            fill={index < rating ? "#FFBF47" : "#fff"}
                            onClick={() => handleRatingClick(index)}
                          />
                        ))}
                        {/* <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill="#FFBF47" />
                        <RatingFill width="24" height="24" fill={"#fff"} /> */}
                      </div>
                      <p>{rating} and up</p>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <p className="text-md  font-satoshi_medium mb-4">
                      Availability
                    </p>
                    <div className="flex items-center justify-between  p-3 bg-[#FAFAFA] rounded-[8px] mr-4">
                      <p className="">
                        Show all professionals, even those not available at the
                        moment.
                      </p>
                      <Switch
                        className="custom-switch"
                        onClick={toggleAviability}
                        checked={showAviable}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-[#E4E4E7] pt-6 flex justify-end items-center">
                <Button
                  variant={null}
                  className="w-auto h-[52px]"
                  onClick={() => {
                    toggleFilter();
                    handleClearFunction();
                  }}
                >
                  Clear all
                </Button>
                <Button
                  variant="default"
                  className="w-auto h-[52px]"
                  onClick={() => {
                    handleFilterButtonClick();
                  }}
                >
                  Show results
                </Button>
              </div>
            </div>
          )}

          {/* Responsive */}
          <div
            className={`transition-all duration-75 ease-in absolute lg:relative bg-white z-10 w-full left-0 p-0 pt-0 rounded-b-[8px] hidden lg:block `}
          >
            <div className=" mt-6   ">
              <div className="flex w-full items-center justify-between flex-wrap pt-6 pb-6 px-10 lg:px-0 lg:py-3">
                <div className="w-1/3  lg:w-full mb-4">
                  <p className="text-md  font-satoshi_medium mb-4">
                    Price range
                  </p>
                  <div className="flex">
                    <div className="relative  w-full border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]  mr-6">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Min
                      </label>
                      <Input
                        placeholder="$1,000"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="w-auto h-auto py-0 px-0 w-full text-sm font-normal border-none"
                      />
                    </div>
                    <div className="relative w-full border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] ">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Max
                      </label>

                      <Input
                        placeholder="$1,000"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="w-auto h-auto py-0 px-0 w-full text-sm font-normal border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/3 lg:w-full lg:mb-4">
                  <p className="text-md  font-satoshi_medium mb-4">
                    Star rating
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex  p-4 bg-[#FAFAFA] rounded-[8px] mr-4">
                      {[...Array(5)].map((_, index) => (
                        <RatingFill
                          key={index}
                          width="24"
                          height="24"
                          fill={index < rating ? "#FFBF47" : "#fff"}
                          onClick={() => handleRatingClick(index)}
                        />
                      ))}
                      {/* <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill="#FFBF47" />
                      <RatingFill width="24" height="24" fill={"#fff"} /> */}
                    </div>
                    <p>{rating} and up</p>
                  </div>
                </div>
                <div className="w-1/3 lg:w-full">
                  <p className="text-md  font-satoshi_medium mb-4">
                    Availability
                  </p>
                  <div className="flex items-center justify-between  p-3 bg-[#FAFAFA] rounded-[8px] ">
                    <p className="">
                      Show all professionals, even those not available at the
                      moment.
                    </p>
                    {}
                    <Switch
                      className="custom-switch"
                      onClick={toggleAviability}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-6 px-10 flex justify-end items-center">
              <Button
                variant="default"
                className="w-full h-[52px]"
                onClick={handleresfilter}
              >
                Show results
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
