"use client";

import CommonPagination from "@/components/CommonPagination/CommonPagination";
import Container from "@/components/Container";
import DeleteServiceModal from "@/components/DeleteServiceModal/DeleteServiceModal";
import DataTableMessage from "@/components/DataTableMessage/DataTableMessage";
import ReservationHeader from "@/components/ReservationHeader/ReservationHeader";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import TableComponent from "@/components/TableComponent/TableComponent";
import { BasicPagination } from "@/components/pagination comp/Pagination";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useServiceList } from "@/hooks/react-qurey/query-hooks/services.hooks";
import assets from "@/json/assets";
import CaklendarIcon from "@/json/icons/CaklendarIcon";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import LocationIcon from "@/json/icons/LocationIcon";
import { invoices6 } from "@/json/mock/tableData.mock";
import { ServiceResponse, ServiceInfo } from "@/json/typescript/services";
import {
  capitalizeFirstLetter,
  cn,
  covertISOFormateToReadableFormat,
} from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ServicesHeader from "@/components/ServicesHeader/ServicesHeader";
import { useDebouncedCallback } from "use-debounce";
import moment from "moment";
import CheapButtons from "@/components/CheapButtons/CheapButtons";

interface popoverProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  classNamePopoverContent?: string;
}
export type servicePayload = {
  page?: number;
  limit?: number;
  sort?: {
    order?: string;
    field?: string;
  };
  search?: string;
  vendor_type?: "all" | "individual" | "company";

  category_id?: string[];
  sub_category_id?: string[];
  published_date?: { start_date?: string; end_date?: string };
  address?: "string";
};

//  export type filterOptions=Pick<servicePayload,'address'|'category_id'|'sub_category_id'|'published_date'>

const PopOverComponent = ({
  label,
  children,
  className,
  classNamePopoverContent,
}: popoverProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover>
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
  const { mutate: getServiceList, isLoading: isServiceListLoading } =
    useServiceList();

  const tableHeadListForServices = [
    "Category",
    "Service",
    "Vendor",
    "Publication date",
    "Price",
    "",
  ];
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
  // const[filterOptions,setFilterOptions]=useState()
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [page, setPage] = useState("");
  const [isDataFetching, setIsDataFetching] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");

  const [serviceData, setServiceData] = useState<ServiceResponse>();
  const [showableList, setShowableList] = useState<ServiceInfo[]>([]);

  const [vendorType, setVendorType] = useState<
    "all" | "individual" | "company"
  >("all");
  const fetchServiceList = (data: servicePayload) => {
    setIsDataFetching(true);
    console.log("data", data);

    const payload: servicePayload = {
      page: data.page,
      limit: data.limit,
      sort: {
        order: "",
        field: "",
        // order: data.sort.order,
        // field: data.sort.field,
      },
      search: data.search || "",
      vendor_type: data.vendor_type,
      published_date: {
        start_date: data?.published_date?.start_date,
        end_date: data?.published_date?.end_date,
      },
    };

    getServiceList(payload, {
      onSuccess: (response: { data: ServiceResponse }) => {
        // const categoryListData = response?.data?.data ?? [];
        setServiceData(response?.data);
        setShowableList(response?.data?.data);
        setIsDataFetching(false);
      },
    });
  };
  useEffect(() => {
    fetchServiceList({
      page: 1,
      limit: 10,
      sort: {
        order: "",
        field: "",
      },
      search: searchValue || "",
      vendor_type: "all",
    });
  }, []);
  console.log("serviceData", serviceData);
  console.log("showableList", showableList);

  const fetchVendorListByType = (type: "all" | "individual" | "company") => {
    setVendorType(type);
    fetchServiceList({
      page: 1,
      limit: 10,
      sort: {
        order: "",
        field: "",
      },
      search: searchValue || "",
      vendor_type: type,
    });
  };
  const handleChangePagination = (event: any, value: any) => {
    setPage(value); // Update the page state
    fetchServiceList({
      page: value,
      limit: 10,
      sort: {
        order: "",
        field: "",
      },
      search: searchValue || "",
      vendor_type: vendorType,
    });
  };

  const getSearchedKeyword = (keyword: string) => {
    debounced(keyword);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      fetchServiceList({
        page: 1,
        limit: 10,
        sort: {
          order: "",
          field: "",
        },
        search: value ? value.trim() : "",
        vendor_type: vendorType,
      });
    },
    // delay in ms
    1000
  );
  const fetchVendorListByDateRange = () => {
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    fetchServiceList({
      page: 1,
      limit: 10,
      sort: {
        order: "",
        field: "",
      },
      search: searchValue || "",
      vendor_type: vendorType,
      published_date: {
        start_date: moment(startDate)?.format("YYYY-MM-DD"),
        end_date: moment(endDate)?.format("YYYY-MM-DD"),
      },
    });
  };

  const clearDateFilter = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    fetchServiceList({
      page: 1,
      limit: 10,
      sort: {
        order: "",
        field: "",
      },
      search: searchValue || "",
      vendor_type: vendorType,
    });
  };
  return (
    <div className="py-10 md:py-5">
      <Container>
        <ServicesHeader
          className="mb-8 md:mb-2"
          headerName="Services"
          getValue={getSearchedKeyword}
        />
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap items-center justify-start mb-8 md:mb-3">
            <TabsTrigger
              value="all"
              className="pb-6 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:pb-3 sm:mb-3"
              onClick={(e) => {
                console.log("all");
                fetchVendorListByType("all");
              }}
            >
              All&nbsp;
              <span className="text-sm text-gray-400">
                {serviceData?.grouped_counts?.all}
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="individual_vendors"
              className="pb-6 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:pb-3 sm:mb-3"
              onClick={(e) => {
                console.log("individual");
                fetchVendorListByType("individual");
              }}
            >
              Individual vendors&nbsp;
              <span className="text-sm text-gray-400">
                {serviceData?.grouped_counts?.individual}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="company_vendors"
              className="pb-6 text-base rounded-none  text-gray-900 sm:w-full sm:justify-start sm:pb-3 sm:mb-3"
              onClick={(e) => {
                console.log("company");
                fetchVendorListByType("company");
              }}
            >
              Company vendors&nbsp;
              <span className="text-sm text-gray-400">
                {serviceData?.grouped_counts?.company}
              </span>
            </TabsTrigger>
          </TabsList>
                <PopOverComponent
                  label="Category"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      {select1?.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              id={`${item.mainText}`}
                              className="checkBox border-gray-200 rounded-[4px]"
                              icon={<CheckboxTickIcon />}
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
                                    className="checkBox border-gray-200 rounded-[4px]"
                                    icon={<CheckboxTickIcon />}
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
                      ))}
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant={"outline"}
                            className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                          >
                            Cancel
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Apply
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Publication date"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
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
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)] ">
                                  {startDate ? (
                                    format(startDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                field="startDate"
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="flex items-center justify-between space-x-[8px]">
                          <p className="text-[var(--cmn-grey2)] text-[14px]">
                            To
                          </p>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)]">
                                  {endDate ? (
                                    format(endDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center pt-6 pb-4">
                      <Button
                        type="button"
                        className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                        onClick={clearDateFilter}
                      >
                        Clear All
                      </Button>
                      <Button
                        type="button"
                        onClick={fetchVendorListByDateRange}
                      >
                        Show results
                      </Button>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Location"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                  classNamePopoverContent="min-w-[350px]"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      <ul>
                        {select2?.map((item, index) => (
                          <li key={index} className="mb-[20px] last:mb-0">
                            <div className="flex items-center py-0.5">
                              <i className="mr-2">
                                <LocationIcon />
                              </i>
                              <p className="text-gray-400 text-base">
                                <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                  {item?.itemBold}
                                </span>
                                {item?.itemPara}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
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
                    </div>
                  </div>
                </PopOverComponent>

          <TabsContent value="all">
            <div>
              <div className="flex items-center flex-wrap mb-8">
                {/* <PopOverComponent
                  label="Category"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      {select1?.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              id={`${item.mainText}`}
                              className="checkBox border-gray-200 rounded-[4px]"
                              icon={<CheckboxTickIcon />}
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
                                    className="checkBox border-gray-200 rounded-[4px]"
                                    icon={<CheckboxTickIcon />}
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
                      ))}
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant={"outline"}
                            className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                          >
                            Cancel
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Apply
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Publication date"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
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
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)] ">
                                  {startDate ? (
                                    format(startDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                field="startDate"
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="flex items-center justify-between space-x-[8px]">
                          <p className="text-[var(--cmn-grey2)] text-[14px]">
                            To
                          </p>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)]">
                                  {endDate ? (
                                    format(endDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center pt-6 pb-4">
                      <Button
                        type="button"
                        className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                        onClick={clearDateFilter}
                      >
                        Clear All
                      </Button>
                      <Button
                        type="button"
                        onClick={fetchVendorListByDateRange}
                      >
                        Show results
                      </Button>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Location"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                  classNamePopoverContent="min-w-[350px]"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      <ul>
                        {select2?.map((item, index) => (
                          <li key={index} className="mb-[20px] last:mb-0">
                            <div className="flex items-center py-0.5">
                              <i className="mr-2">
                                <LocationIcon />
                              </i>
                              <p className="text-gray-400 text-base">
                                <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                  {item?.itemBold}
                                </span>
                                {item?.itemPara}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
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
                    </div>
                  </div>
                </PopOverComponent> */}
              </div>
              <div className="flex items-center flex-wrap pb-8 -mx-2">
                <div className="p-2">
                  <Button
                    variant="outline"
                    className=" border-gray-200 h-auto py-1 px-3 font-satoshi_regular"
                    onClick={()=>{
                      clearDateFilter();
                    }}
                  >
                    Clear all
                  </Button>
                </div>
                {(startDate && endDate) ? (
                  <div className="p-2">
                    <CheapButtons btnName={`From ${moment(startDate).format('MM/DD/YYYY')} to ${moment(endDate).format('MM/DD/YYYY')}`} onClick={clearDateFilter} /> 
                  </div>
                ) : null}
                {/* <div className="p-2">
                  <CheapButtons btnName="Hair Styling and Cutting" />
                </div>
                <div className="p-2">
                  <CheapButtons btnName="Makeup and Cosmetics" />
                </div>
                <div className="p-2">
                  <CheapButtons btnName="Skincare and Facials" />
                </div>
               
                <div className="p-2">
                  <CheapButtons btnName="San Francisco, CA, USA" />
                </div> */}
              </div>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                {isDataFetching ? (
                  <DataTableMessage
                    text="Loading..."
                    subtext="Please wait..."
                  />
                ) : (
                  <>
                    {showableList?.length ? (
                      <>
                        {showableList?.map((invoice, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  showableList?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                {capitalizeFirstLetter(invoice?.category_title)}
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  showableList?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <figure>
                                    <Image
                                      src={
                                        invoice?.images[0]
                                          ? invoice?.images[0]
                                          : assets?.decline_btn
                                      }
                                      alt="image"
                                      width={56}
                                      height={40}
                                    />
                                  </figure>
                                  <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                                    {invoice?.title}
                                  </p>
                                  <p className="text-gray-400 ml-3">
                                    ({invoice?.packages?.length})
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <figure>
                                    <Image
                                      src={invoice?.vendor_data?.profilePicture}
                                      // src={invoice?.profilePicture}
                                      alt="image"
                                      width={32}
                                      height={32}
                                    />
                                  </figure>
                                  <p className="ml-3">
                                    {invoice?.vendor_data?.firstName}{" "}
                                    {invoice?.vendor_data?.lastName
                                      .charAt(0)
                                      ?.toUpperCase()}
                                    .
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                {covertISOFormateToReadableFormat(
                                  invoice?.createdAt,
                                  "MMM DD, YYYY"
                                )}
                                <p className="text-sm text-gray-500">
                                  {covertISOFormateToReadableFormat(
                                    invoice?.createdAt,
                                    "HH:MM A"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  {invoice.packages_data?.map((item, index) => (
                                    <p key={index}>
                                      {index !==
                                      invoice?.packages_data?.length - 1
                                        ? `$${item.rate},`
                                        : `$${item.rate}`}
                                    </p>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <Button
                                    variant="outline"
                                    className="mr-2 border-gray-200"
                                  >
                                    Edit
                                  </Button>
                                  <div>
                                    {/* <DeleteServiceModal /> */}
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </>
                    ) : null}
                  </>
                )}

                {!isDataFetching && !showableList?.length ? (
                  <DataTableMessage
                    text="It's still empty here..."
                    subtext="There are currently no results for your request."
                  />
                ) : null}
              </TableComponent>
            </div>
          </TabsContent>

          <TabsContent value="individual_vendors">
            <div>
              <div className="flex items-center flex-wrap mb-8">
                {/* <PopOverComponent
                  label="Category"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      {select1?.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              id={`${item.mainText}`}
                              className="checkBox border-gray-200 rounded-[4px]"
                              icon={<CheckboxTickIcon />}
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
                                    className="checkBox border-gray-200 rounded-[4px]"
                                    icon={<CheckboxTickIcon />}
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
                      ))}
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant={"outline"}
                            className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                          >
                            Cancel
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Apply
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Publication date"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
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
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)] ">
                                  {startDate ? (
                                    format(startDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                field="startDate"
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="flex items-center justify-between space-x-[8px]">
                          <p className="text-[var(--cmn-grey2)] text-[14px]">
                            To
                          </p>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)]">
                                  {endDate ? (
                                    format(endDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center pt-6 pb-4">
                      <Button
                        type="button"
                        className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                      >
                        Clear All
                      </Button>
                      <Button type="button">Show results</Button>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Location"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                  classNamePopoverContent="min-w-[350px]"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      <ul>
                        {select2?.map((item, index) => (
                          <li key={index} className="mb-[20px] last:mb-0">
                            <div className="flex items-center py-0.5">
                              <i className="mr-2">
                                <LocationIcon />
                              </i>
                              <p className="text-gray-400 text-base">
                                <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                  {item?.itemBold}
                                </span>
                                {item?.itemPara}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
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
                    </div>
                  </div>
                </PopOverComponent> */}
              </div>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                {isDataFetching ? (
                  // <> Loading</>
                  <DataTableMessage
                    text="Loading..."
                    subtext="Please wait..."
                  />
                ) : (
                  <>
                    {showableList?.length ? (
                      <>
                        {showableList?.map((invoice, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  showableList?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                {capitalizeFirstLetter(invoice?.category_title)}
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  showableList?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <figure>
                                    <Image
                                      src={
                                        invoice?.images[0]
                                          ? invoice?.images[0]
                                          : assets?.decline_btn
                                      }
                                      alt="image"
                                      width={56}
                                      height={40}
                                    />
                                  </figure>
                                  <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                                    {invoice?.title}
                                  </p>
                                  <p className="text-gray-400 ml-3">
                                    ({invoice?.packages?.length})
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <figure>
                                    <Image
                                      src={invoice?.vendor_data?.profilePicture}
                                      // src={invoice?.profilePicture}
                                      alt="image"
                                      width={32}
                                      height={32}
                                    />
                                  </figure>
                                  <p className="ml-3">
                                    {invoice?.vendor_data?.firstName}{" "}
                                    {invoice?.vendor_data?.lastName
                                      .charAt(0)
                                      ?.toUpperCase()}
                                    .
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                {covertISOFormateToReadableFormat(
                                  invoice?.createdAt,
                                  "MMM DD, YYYY"
                                )}
                                <p className="text-sm text-gray-500">
                                  {covertISOFormateToReadableFormat(
                                    invoice?.createdAt,
                                    "HH:MM A"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  {invoice.packages_data?.map((item, index) => (
                                    <p key={index}>
                                      {index !==
                                      invoice?.packages_data?.length - 1
                                        ? `$${item.rate},`
                                        : `$${item.rate}`}
                                    </p>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <Button
                                    variant="outline"
                                    className="mr-2 border-gray-200"
                                  >
                                    Edit
                                  </Button>
                                  <div>
                                    {/* <DeleteServiceModal /> */}
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </>
                    ) : null}
                  </>
                )}

                {!isDataFetching && !showableList?.length ? (
                  <DataTableMessage
                    text="It's still empty here..."
                    subtext="There are currently no results for your request."
                  />
                ) : null}
                {/* {invoices6.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.category}
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.service_image}
                            alt="image"
                            width={56}
                            height={40}
                          />
                        </figure>
                        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                          {invoice?.service_name}
                        </p>
                        <p className="text-gray-400 ml-3">
                          ({invoice?.service_quantity})
                        </p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.vendor_image}
                            alt="image"
                            width={32}
                            height={32}
                          />
                        </figure>
                        <p className="ml-3">{invoice?.vendor_name}</p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.date}
                      <p className="text-sm text-gray-500">{invoice?.time}</p>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        {invoice.amount?.map((item, index) => (
                          <p key={index}>
                            {index !== invoice?.amount?.length - 1
                              ? `${item},`
                              : `${item}`}
                          </p>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          className="mr-2 border-gray-200"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))} */}
              </TableComponent>
            </div>
          </TabsContent>

          <TabsContent value="company_vendors">
            <div>
              <div className="flex items-center flex-wrap mb-8">
                {/* <PopOverComponent
                  label="Category"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      {select1?.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 px-4 py-1">
                            <Checkbox
                              id={`${item.mainText}`}
                              className="checkBox border-gray-200 rounded-[4px]"
                              icon={<CheckboxTickIcon />}
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
                                    className="checkBox border-gray-200 rounded-[4px]"
                                    icon={<CheckboxTickIcon />}
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
                      ))}
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant={"outline"}
                            className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                          >
                            Cancel
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Apply
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Publication date"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
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
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)] ">
                                  {startDate ? (
                                    format(startDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                field="startDate"

                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="flex items-center justify-between space-x-[8px]">
                          <p className="text-[var(--cmn-grey2)] text-[14px]">
                            To
                          </p>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)]">
                                  {endDate ? (
                                    format(endDate, "MM/dd/yyyy")
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
                              <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center pt-6 pb-4">
                      <Button
                        type="button"
                        className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                      >
                        Clear All
                      </Button>
                      <Button type="button">Show results</Button>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Location"
                  className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
                  classNamePopoverContent="min-w-[350px]"
                >
                  <div className="pb-[60px]">
                    <div>
                      <SerachInputComponent className="mb-6" />
                    </div>
                    <div className="h-[300px] overflow-y-auto">
                      <ul>
                        {select2?.map((item, index) => (
                          <li key={index} className="mb-[20px] last:mb-0">
                            <div className="flex items-center py-0.5">
                              <i className="mr-2">
                                <LocationIcon />
                              </i>
                              <p className="text-gray-400 text-base">
                                <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                  {item?.itemBold}
                                </span>
                                {item?.itemPara}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
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
                    </div>
                  </div>
                </PopOverComponent> */}
              </div>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                {isDataFetching ? (
                  <DataTableMessage
                    text="Loading..."
                    subtext="Please wait..."
                  />
                ) : (
                  <>
                    {showableList?.length ? (
                      <>
                        {showableList?.map((invoice, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  showableList?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                {capitalizeFirstLetter(invoice?.category_title)}
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  showableList?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <figure>
                                    <Image
                                      src={
                                        invoice?.images[0]
                                          ? invoice?.images[0]
                                          : assets?.decline_btn
                                      }
                                      alt="image"
                                      width={56}
                                      height={40}
                                    />
                                  </figure>
                                  <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                                    {invoice?.title}
                                  </p>
                                  <p className="text-gray-400 ml-3">
                                    ({invoice?.packages?.length})
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <figure>
                                    <Image
                                      src={invoice?.vendor_data?.profilePicture}
                                      // src={invoice?.profilePicture}
                                      alt="image"
                                      width={32}
                                      height={32}
                                    />
                                  </figure>
                                  <p className="ml-3">
                                    {invoice?.vendor_data?.firstName}{" "}
                                    {invoice?.vendor_data?.lastName
                                      .charAt(0)
                                      ?.toUpperCase()}
                                    .
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                {covertISOFormateToReadableFormat(
                                  invoice?.createdAt,
                                  "MMM DD, YYYY"
                                )}
                                <p className="text-sm text-gray-500">
                                  {covertISOFormateToReadableFormat(
                                    invoice?.createdAt,
                                    "HH:MM A"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  {invoice.packages_data?.map((item, index) => (
                                    <p key={index}>
                                      {index !==
                                      invoice?.packages_data?.length - 1
                                        ? `$${item.rate},`
                                        : `$${item.rate}`}
                                    </p>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                  invoices6?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <Button
                                    variant="outline"
                                    className="mr-2 border-gray-200"
                                  >
                                    Edit
                                  </Button>
                                  <div>
                                    {/* <DeleteServiceModal /> */}
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </>
                    ) : null}
                  </>
                )}

                {!isDataFetching && !showableList?.length ? (
                  <DataTableMessage
                    text="It's still empty here..."
                    subtext="There are currently no results for your request."
                  />
                ) : null}
                {/* {invoices6.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.category}
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.service_image}
                            alt="image"
                            width={56}
                            height={40}
                          />
                        </figure>
                        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                          {invoice?.service_name}
                        </p>
                        <p className="text-gray-400 ml-3">
                          ({invoice?.service_quantity})
                        </p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.vendor_image}
                            alt="image"
                            width={32}
                            height={32}
                          />
                        </figure>
                        <p className="ml-3">{invoice?.vendor_name}</p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.date}
                      <p className="text-sm text-gray-500">{invoice?.time}</p>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        {invoice.amount?.map((item, index) => (
                          <p key={index}>
                            {index !== invoice?.amount?.length - 1
                              ? `${item},`
                              : `${item}`}
                          </p>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                        invoices6?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          className="mr-2 border-gray-200"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))} */}
              </TableComponent>
            </div>
          </TabsContent>
        </Tabs>
        {serviceData?.pages && serviceData?.pages > 1 && !isDataFetching && (
          <div className="py-8">
            {/* <CommonPagination /> */}
            <BasicPagination
              // setpage={setpage}
              totalResData={serviceData}
              handleChange={handleChangePagination}
            />
          </div>
        )}
        {/* <div className="py-8">
          <CommonPagination />
        </div> */}
      </Container>
    </div>
  );
}
