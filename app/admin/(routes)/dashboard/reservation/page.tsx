"use client";

import { getReservation, searchCategories } from "@/api/functions/admin.api";
import CommonPagination from "@/components/CommonPagination/CommonPagination";
import Container from "@/components/Container";
import DeleteReservationModal from "@/components/DeleteReservationModal/DeleteReservationModal";
import ReservationHeader from "@/components/ReservationHeader/ReservationHeader";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import TableComponent from "@/components/TableComponent/TableComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { CustomCheckbox } from "@/components/ui/CustomCheckbox";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";
import CaklendarIcon from "@/json/icons/CaklendarIcon";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import LocationIcon from "@/json/icons/LocationIcon";
import { invoices10 } from "@/json/mock/tableData.mock";
import {
  cn,
  formatDate,
  formatDateToYYYYMMDD,
  getAmPmFromTime,
} from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import CustomReservationHeader from "@/components/ReservationHeader/CustomReservationHeader";
import CloseIcon from "@/json/icons/CloseIcon";
import { CustomCheckboxCategory } from "@/components/ui/CustomCheckboxCategory";
import { BasicPagination } from "@/components/pagination comp/Pagination";
import axios from "axios";
import assets from "@/json/assets";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ServiceDatePicker } from "@/components/ServiceDatePicker/ServiceDatePicker";
import Loading from "@/components/Loading/Loading";

interface popoverProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  classNamePopoverContent?: string;
  close: boolean;
  handleClosePopover: any;
}
const PopOverComponent = ({
  label,
  children,
  className,
  classNamePopoverContent,
  close,
  handleClosePopover,
}: popoverProps) => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (!!close) {
      setOpen(false);
    }
  }, [close]);
  useEffect(() => {
    if (!!open) {
      handleClosePopover(false);
    }
  }, [open]);
  return (
    <Popover open={open} onOpenChange={(open) => setOpen(open)}>
      <PopoverTrigger asChild className={cn("w-auto", className)}>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          disabled={open}
          className=" bg-gray-100 border-0 min-w-[120px]"
        >
          {label}
          <i className="inline-flex items-center justify-center ml-2">
            {open ? (
              <ChevronUp height={16} width={16} />
            ) : (
              <ChevronDown height={16} width={16} />
            )}
          </i>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-full max-w-[384px] sm:!max-w-[95vw] sm:!min-w-[95vw] bg-white rounded-xl border-none shadow-[1px_1px_30px_10px_rgba(0,0,0,0.07)]",
          classNamePopoverContent
        )}
        align={"start"}
        onInteractOutside={() => setOpen(false)}
      >
        <div>{children}</div>
      </PopoverContent>
    </Popover>
  );
};

export default function Index() {
  const tableHeadListForServices = [
    "Category",
    "Service",
    "Status",
    "Vendor",
    "Booked date",
    "Service date",
    "Price",
    "",
  ];
  const router = useRouter();
  const select1 = [
    {
      mainText: "Beauty and Wellness Services",
      subList: [
        {
          eachSubListItem: "Hair Styling and Cutting",
        },
        {
          eachSubListItem: "Makeup and Cosmetics",
        },
        {
          eachSubListItem: "Nail Care and Manicure/Pedicure",
        },
        {
          eachSubListItem: "Spa and Massage Therapy",
        },
        {
          eachSubListItem: "Skincare and Facials",
        },
      ],
    },
    {
      mainText: "Home Cleaning and Maintenance",
      subList: [
        {
          eachSubListItem: "General House Cleaning",
        },
        {
          eachSubListItem: "Deep Cleaning Services",
        },
      ],
    },
  ];

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

  const statusOptions = [
    {
      itemPara: "Upcoming",
    },
    {
      itemPara: "Requested",
    },
    {
      itemPara: "Completed",
    },
    {
      itemPara: "Declined",
    },
    {
      itemPara: "Canceled",
    },
  ];

  const vendorOptions = [
    {
      itemName: "Individual vendors",
      itemPara: "individual",
    },
    {
      itemName: "Company vendors",
      itemPara: "company",
    },
  ];
  const [date, setDate] = useState<Date | null>();
  const [date1, setDate1] = useState<Date | null>();

  // console.log("date", date);

  const [status, setStatus] = useState<string[] | any[]>([]);
  const [vendor, setVendor] = useState<string[] | any[]>([]);

  const [mainCatlist, setMainCatlist] = useState<
    { name: string; value: string }[] | []
  >([]);
  const [mainSubCatlist, setMainSubCatlist] = useState<
    { name: string; value: string }[] | []
  >([]);

  const [category_id, setcategory_id] = useState<
    { name: string; value: string }[] | []
  >([]);
  const [sub_category_id, setsub_category_id] = useState<
    { name: string; value: string }[] | []
  >([]);
  const [showfilter, setShowfilter] = useState(false);
  // console.log("vendor", vendor);

  // console.log("category_id", category_id);
  // console.log("sub_category_id", sub_category_id);
  // console.log("mainCatlist", mainCatlist);
  // console.log("mainSubCatlist", mainSubCatlist);

  const [trigger, setTrigger] = useState(Date.now());

  const [search, setSearch] = useState("");
  const [query] = useDebounce(search, 600);

  const handleStatusChange = (value: string) => {
    if (status.includes(value)) {
      setStatus((pre) => pre.filter((p) => p != value));
    } else {
      setStatus((pre) => [...pre, value]);
    }
  };
  const handleCatChange = (name: string, value: string) => {
    const foundCat = catData?.data.find((cat) => cat._id == value);
    if (category_id.find((c) => value == c.value)) {
      setcategory_id((pre) => pre.filter((p) => p.value != value));
      foundCat?.sub_categories.map(
        (sub) =>
          setsub_category_id((pre) => pre.filter((p) => p.value != sub._id))
        // handleSubCatChange(sub._id)
      );
    } else {
      setcategory_id((pre) => [...pre, { name, value }]);
      foundCat?.sub_categories.map(
        (sub) =>
          setsub_category_id((pre) => [
            ...pre,
            { name: sub.name, value: sub._id },
          ])
        // handleSubCatChange(sub._id)
      );
    }
  };
  const handleSubCatChange = (name: string, value: string) => {
    if (sub_category_id.find((c) => value == c.value)) {
      setsub_category_id((pre) => pre.filter((p) => p.value != value));
    } else {
      setsub_category_id((pre) => [...pre, { name, value }]);
    }
  };
  const handleVendorChange = (value: string) => {
    if (vendor.includes(value)) {
      setVendor((pre) => pre.filter((p) => p != value));
    } else {
      setVendor((pre) => [...pre, value]);
    }
  };

  const [searchCat, setSearchCat] = useState("");
  const [query2] = useDebounce(searchCat, 600);
  const [page, setPage] = useState(1);
  const [address, setAddress] = useState("");
  const [addressList, setAddressList] = useState<any[]>([]);
  const [limit, setLimit] = useState(10);

  const { data: catData } = useQuery(["get_list_cat", query2], async () =>
    searchCategories({
      search: searchCat,
    })
  );

  const handleChangePagination = (event: any, value: any) => {
    setPage(value); // Update the page state
  };

  // console.log("catData", catData);

  const { data, refetch, isLoading, isRefetching } = useQuery(
    ["get_list_res", query, trigger, page, address, limit],
    async () =>
      getReservation({
        page,
        limit: limit,
        status,
        vendor_type: vendor,
        search,
        category_id: mainCatlist.map((m) => m.value),
        sub_category_id: mainSubCatlist.map((m) => m.value),
        reservation_date: {
          ...(date && date1
            ? {
                start_date: formatDateToYYYYMMDD(date),
                end_date: formatDateToYYYYMMDD(date1),
              }
            : {}),
        },
        address,
      })
  );

  // console.log("data", data);

  const CheapButtons = ({ btnName }: { btnName: string }) => {
    return (
      <Button
        variant="outline"
        className=" border-gray-200 h-auto py-1 px-3 font-satoshi_regula bg-gray-100"
      >
        {btnName}
        <span className=" inline-flex items-center justify-center ml-2 ">
          <CloseIcon />
        </span>
      </Button>
    );
  };

  const applyCat = () => {
    setMainCatlist(category_id);
    setMainSubCatlist(sub_category_id);
    setTrigger(Date.now());
    handleClosePopover(true);
  };

  const cancleCat = () => {
    // setcategory_id(mainCatlist);
    // setsub_category_id(mainSubCatlist);
    setcategory_id([]);
    setsub_category_id([]);
    setMainCatlist([]);
    setMainSubCatlist([]);
    setTrigger(Date.now());
    handleClosePopover(true);
  };

  const removeCatFilter = (id: string) => {
    setsub_category_id((pre) => pre.filter((p) => p.value != id));
    setcategory_id((pre) => pre.filter((p) => p.value != id));
    setMainCatlist((pre) => pre.filter((p) => p.value != id));
    setMainSubCatlist((pre) => pre.filter((p) => p.value != id));
    setTrigger(Date.now());
  };

  const clearAll = () => {
    setsub_category_id([]);
    setcategory_id([]);
    setMainCatlist([]);
    setMainSubCatlist([]);
    setAddress("");
    setTrigger(Date.now());
  };

  const [input, setInput] = useState("");
  console.log("input", input);

  const handleSearch = async () => {
    console.log("input", input);
    try {
      const response = await axios.post("/api/google/search", {
        input: input,
      });
      console.log("response", response);
      if (response) {
        setAddressList(response.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        handleSearch();
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [input]);

  const [closePopover, setClosePopover] = useState<boolean>(false);
  const handleClosePopover = (_status: boolean) => setClosePopover(_status);

  const triggerRefetch = () => {
    setTrigger(Date.now());
  };
  return (
    <div className="py-10 md:pt-5 md:pb-0 sm:pt-[30px]">
      <Container>
        <CustomReservationHeader
          dropdownShow={false}
          className="mb-8"
          headerName="Reservations"
          setSearch={setSearch}
        />
        <div className="relative">
          <div className="flex items-center flex-wrap mb-8">
            <PopOverComponent
              close={closePopover}
              handleClosePopover={handleClosePopover}
              label="Status"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNamePopoverContent="min-w-[385px]"
            >
              <div className="pb-[60px]">
                <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                  Status
                </h5>
                <div className="h-auto">
                  <ul className="">
                    {statusOptions?.map((item, index) => (
                      <li key={index} className="py-2">
                        {/* <SelectItem value={item?.eachSubListItem}> */}
                        <div
                          className="flex items-center space-x-2"
                          key={index}
                          // onClick={() => handleStatusChange(item.itemPara)}
                        >
                          <CustomCheckbox
                            id={`${item.itemPara}`}
                            className="checkBox border-gray-200 rounded-[4px]"
                            icon={<CheckboxTickIcon />}
                            value={item.itemPara}
                            checked={status.includes(item.itemPara)}
                            handleChange={handleStatusChange}
                          />
                          <label
                            htmlFor={`${item.itemPara}`}
                            className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item?.itemPara}
                          </label>
                        </div>
                        {/* </SelectItem> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        onClick={() => {
                          setStatus([]);
                          triggerRefetch();
                          handleClosePopover(true);
                        }}
                        type="button"
                        variant="outline"
                        className="border-0 hover:bg-black hover:text-white"
                      >
                        Clear all
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={() => {
                          refetch();
                          handleClosePopover(true);
                        }}
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Show results
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </PopOverComponent>

            <PopOverComponent
              close={closePopover}
              handleClosePopover={handleClosePopover}
              label="Vendor type"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNamePopoverContent="min-w-[385px]"
            >
              <div className="pb-[60px]">
                <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                  Vendor type
                </h5>
                <div className="h-auto">
                  <ul className="">
                    {vendorOptions?.map((item, index) => (
                      <li key={index} className="py-2">
                        {/* <SelectItem value={item?.eachSubListItem}> */}
                        <div
                          className="flex items-center space-x-2"
                          key={index}
                        >
                          <CustomCheckbox
                            id={`${item.itemPara}`}
                            className="checkBox border-gray-200 rounded-[4px]"
                            icon={<CheckboxTickIcon />}
                            value={item.itemPara}
                            checked={vendor.includes(item.itemPara)}
                            handleChange={handleVendorChange}
                          />
                          <label
                            htmlFor={`${item.itemPara}`}
                            className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item?.itemName}
                          </label>
                        </div>
                        {/* </SelectItem> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        onClick={() => {
                          setVendor([]);
                          triggerRefetch();
                          handleClosePopover(true);
                        }}
                        type="button"
                        variant="outline"
                        className="border-0 hover:bg-black hover:text-white"
                      >
                        Clear all
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={() => {
                          refetch();
                          handleClosePopover(true);
                        }}
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Show results
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </PopOverComponent>
            <PopOverComponent
              close={closePopover}
              handleClosePopover={handleClosePopover}
              label="Category"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
            >
              <div className="pb-[60px]">
                <div>
                  <SerachInputComponent
                    onInputChange={setSearchCat}
                    className="mb-6"
                  />
                </div>
                <div className="h-[300px] overflow-y-auto">
                  {catData?.data?.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-2 px-4 py-1">
                        <CustomCheckboxCategory
                          id={`${item._id}`}
                          className="checkBox border-gray-200 rounded-[4px]"
                          icon={<CheckboxTickIcon />}
                          value={item._id}
                          name={item.name}
                          checked={
                            category_id.find((c) => item._id == c.value)
                              ? true
                              : false
                          }
                          handleChange={handleCatChange}
                        />
                        <label
                          htmlFor={`${item.name}`}
                          className="text-base font-satoshi_bold text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70   "
                        >
                          {item?.name}
                        </label>
                      </div>

                      <ul className="pl-4 py-1">
                        {item?.sub_categories?.map((item, index) => (
                          <li key={index} className="py-2 pl-4">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <CustomCheckboxCategory
                                name={item.name}
                                id={`${item._id}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                                value={item._id}
                                // checked={sub_category_id.includes(item._id)}
                                checked={
                                  sub_category_id.find(
                                    (c) => item._id == c.value
                                  )
                                    ? true
                                    : false
                                }
                                handleChange={handleSubCatChange}
                              />
                              <label
                                htmlFor={`${item.name}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.name}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        onClick={cancleCat}
                        type="button"
                        variant={"outline"}
                        className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                      >
                        Clear All
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        onClick={applyCat}
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Shown Results
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </PopOverComponent>
            <PopOverComponent
              close={closePopover}
              handleClosePopover={handleClosePopover}
              label="Service date"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
            >
              <div>
                <div className="border-b border-solid pb-[24px] border-[#E4E4E7]">
                  <p className="text-primary text-base font-satoshi_medium mb-2.5">
                    By period
                  </p>
                  <div className="flex items-center justify-between space-x-[16px]">
                    <div className="flex items-center justify-between space-x-[8px]">
                      <p className="text-[var(--cmn-grey2)] text-[14px]">
                        From
                      </p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)] ">
                              {date ? (
                                format(date, "MM/dd/yyyy")
                              ) : (
                                <>Pick a date</>
                              )}
                            </span>
                            <i>
                              <CaklendarIcon />
                            </i>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          {/* <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(e: any) => console.log("e", e)}
                            initialFocus
                          /> */}
                          <ServiceDatePicker
                            mode="single"
                            // selected={endDate}
                            // onSelect={setEndDate}
                            selected={date}
                            onSelect={(e: Date) => {
                              if (date1 && date1 < e) {
                                // toastWarning("Choose valid date");
                              } else {
                                setDate(e);
                              }
                            }}
                            field="endDate"
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex items-center justify-between space-x-[8px]">
                      <p className="text-[var(--cmn-grey2)] text-[14px]">To</p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)]">
                              {date1 ? (
                                format(date1, "MM/dd/yyyy")
                              ) : (
                                <>Pick a date</>
                              )}
                            </span>

                            <i>
                              <CaklendarIcon />
                            </i>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          {/* <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate1}
                            initialFocus
                          /> */}
                          <ServiceDatePicker
                            mode="single"
                            // selected={endDate}
                            // onSelect={setEndDate}
                            selected={date1}
                            onSelect={(e: Date) => {
                              if (date && date > e) {
                                // toastWarning("Choose valid date");
                              } else {
                                setDate1(e);
                              }
                            }}
                            field="endDate"
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center pt-6 pb-4">
                  <Button
                    onClick={() => {
                      setDate(null);
                      setDate1(null);
                      setTrigger(Date.now());
                      handleClosePopover(true);
                    }}
                    type="button"
                    className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                  >
                    Clear All
                  </Button>
                  <Button
                    onClick={() => {
                      refetch();
                      handleClosePopover(true);
                    }}
                    type="button"
                  >
                    Show results
                  </Button>
                </div>
              </div>
            </PopOverComponent>
            <PopOverComponent
              close={closePopover}
              handleClosePopover={handleClosePopover}
              label="Location"
              className="mr-4 md:mb-2 sm:w-[48%] sm:mr-[5px]"
              classNamePopoverContent="min-w-[350px]"
            >
              <div className="">
                <div>
                  <SerachInputComponent
                    onInputChange={setInput}
                    className="mb-6"
                  />
                </div>
                <div className="h-[260px] overflow-y-auto">
                  <ul>
                    {addressList?.map((item, index) => (
                      <li
                        key={index}
                        className="mb-[20px] last:mb-0 cursor-pointer"
                        onClick={() => {
                          setAddress(item.description);
                          handleClosePopover(true);
                        }}
                      >
                        <div className="flex items-center py-0.5">
                          <i className="mr-2">
                            <LocationIcon />
                          </i>
                          <p className="text-gray-400 text-base">
                            <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                              {item?.description}
                            </span>
                            {/* {item?.description} */}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <Button
                        onClick={clearAll}
                        type="button"
                        variant={"outline"}
                        className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                      >
                        Clear all
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                      >
                        Show results
                      </Button>
                    </li>
                  </ul>
                </div> */}
              </div>
            </PopOverComponent>
          </div>

          {mainCatlist.length > 0 || mainSubCatlist.length > 0 || address ? (
            <>
              <div className="flex items-center flex-wrap pb-8 -mx-2">
                <div className="p-2">
                  <Button
                    variant="outline"
                    onClick={clearAll}
                    className=" border-gray-200 h-auto py-1 px-3 font-satoshi_regular"
                  >
                    Clear all
                  </Button>
                </div>
                {mainCatlist.map((m, i) => (
                  <div
                    onClick={() => removeCatFilter(m.value)}
                    key={i}
                    className="p-2"
                  >
                    <CheapButtons btnName={m.name} />
                  </div>
                ))}
                {mainSubCatlist.map((m, i) => (
                  <div
                    onClick={() => removeCatFilter(m.value)}
                    key={i}
                    className="p-2"
                  >
                    <CheapButtons btnName={m.name} />
                  </div>
                ))}
                {address ? (
                  <>
                    <div onClick={() => setAddress("")} className="p-2">
                      <CheapButtons btnName={address} />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}

          {isLoading || isRefetching ? (
            <Loading />
          ) : (
            <>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                {data?.data && data?.data.length > 0 ? (
                  data?.data.map((invoice, index) => (
                    <TableRow key={index}>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        {invoice?.category_title}
                      </TableCell>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        <div className="flex items-center">
                          <figure>
                            <Image
                              src={
                                invoice?.service_data?.images &&
                                invoice?.service_data?.images[0]
                                  ? invoice?.service_data.images[0]
                                  : assets.serviceInfoImg
                              }
                              alt="image"
                              width={56}
                              height={40}
                            />
                          </figure>
                          <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                            {invoice?.service_data?.title}
                            <span className="text-gray-400 block">
                              {invoice?.service_data?.title}
                            </span>
                          </p>
                        </div>
                      </TableCell>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        <Badge
                          className={` 
    ${
      invoice?.status === "Requested"
        ? "bg-yellow-50"
        : invoice?.status === "Upcoming"
        ? "bg-[#F5EFFD]"
        : invoice?.status === "Completed"
        ? "bg-[#EBFFEB]"
        : invoice?.status === "Declined"
        ? "bg-gray-50"
        : invoice?.status === "Canceled"
        ? "bg-red-50"
        : ""
    }
    
   ${
     invoice?.status === "Requested"
       ? "text-[#F59F00]"
       : invoice?.status === "Upcoming"
       ? "text-[#7757BD]"
       : invoice?.status === "Completed"
       ? "text-[#04D100]"
       : invoice?.status === "Declined"
       ? "text-gray-500"
       : invoice?.status === "Canceled"
       ? "text-red-500"
       : ""
   } border-[1px] 
    
    ${
      invoice?.status === "Requested"
        ? "border-yellow-100"
        : invoice?.status === "Upcoming"
        ? "border-[#7757BD]"
        : invoice?.status === "Completed"
        ? "border-[#87FF85]"
        : invoice?.status === "Declined"
        ? "border-gray-200"
        : invoice?.status === "Canceled"
        ? "border-red-200"
        : ""
    }
    py-[6px] px-[10px] font-satoshi_medium text-sm`}
                        >
                          {invoice?.status}
                        </Badge>
                      </TableCell>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        <div className="flex items-center">
                          <figure>
                            <Image
                              src={invoice?.vendor_data?.profilePicture}
                              alt="image"
                              width={32}
                              height={32}
                            />
                          </figure>
                          <p className="ml-3">
                            {invoice?.vendor_data?.firstName}{" "}
                            {invoice?.vendor_data?.lastName}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        {formatDate(invoice?.createdAt)}
                      </TableCell>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        {formatDate(invoice?.date)}
                        <p className="text-sm text-gray-500">
                          {invoice?.start_time} - {invoice?.end_time}{" "}
                          {getAmPmFromTime(invoice?.end_time)}
                        </p>
                      </TableCell>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        <div className="flex items-center">
                          {/* {invoice.amount?.map((item, index) => (
            <p key={index}>
              {index !== invoice?.amount?.length - 1
                ? `${item},`
                : `${item}`}
            </p>
          ))} */}

                          <p>$ {invoice.package_price}</p>
                        </div>
                      </TableCell>
                      <TableCell
                        className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                          invoices10?.length - 1 === index && "border-0"
                        }`}
                      >
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            className="mr-2 border-gray-200"
                            onClick={() =>
                              router.push(
                                `/admin/dashboard/reservation/reservation-details/${invoice._id}`
                              )
                            }
                          >
                            Edit
                          </Button>
                          <div>
                            <DeleteReservationModal
                              invoice={invoice}
                              refetch={refetch}
                            />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <>
                    {" "}
                    <TableRow>
                      <TableCell
                        colSpan={tableHeadListForServices?.length}
                        align="center"
                        className="py-[135px]"
                      >
                        <h6 className="text-[18px] mb-4 font-satoshi_medium">
                          No results...
                        </h6>
                        <p className=" text-gray-500 text-base">
                          There are currently no results for your request.
                        </p>
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableComponent>
              <div className="flex items-center max-w-[150px] mt-6">
                <p className="text-sm text-gray-400 pr-3">Per page</p>
                <Select onValueChange={(e) => setLimit(Number(e))}>
                  <SelectTrigger
                    icon={
                      <ChevronDown
                        width={15}
                        height={15}
                        color="rgba(112, 112, 123, 1)"
                      />
                    }
                    className="border-0 p-0 h-auto w-[45px] text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  >
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent className="p-0">
                    <SelectGroup>
                      <SelectItem className="cursor-pointer" value="10">
                        10
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="20">
                        20
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="30">
                        30
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {data?.data && data?.data.length > 0 ? (
                <div className="-mt-6">
                  {/* <CommonPagination /> */}
                  <BasicPagination
                    totalResData={data}
                    handleChange={handleChangePagination}
                  />
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
