"use client";
import CommonPagination from "@/components/CommonPagination/CommonPagination";
import Container from "@/components/Container";
import DeclinePaymentModal from "@/components/DeclinePaymentModal/DeclinePaymentModal";
import Loading from "@/components/Loading/Loading";
import ReservationHeader from "@/components/ReservationHeader/ReservationHeader";
import { ServiceDatePicker } from "@/components/ServiceDatePicker/ServiceDatePicker";
import TableComponent from "@/components/TableComponent/TableComponent";
import { BasicPagination } from "@/components/pagination comp/Pagination";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTransctionList } from "@/hooks/react-qurey/query-hooks/transactions.hook";
import assets from "@/json/assets";
import CaklendarIcon from "@/json/icons/CaklendarIcon";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import PaypalIcon from "@/json/icons/PaypalIcon";
import { invoices8 } from "@/json/mock/tableData.mock";
import { cn, formatDate, formatDateToYYYYMMDD, formatTime } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

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
    "Transaction ID",
    "Date",
    "Payment method",
    "Vendor",
    "Amount",
    "Status",
    "",
  ];

  // const select3 = [
  //   {
  //     itemPara: "Upcoming",
  //   },
  //   {
  //     itemPara: "Requested",
  //   },
  //   {
  //     itemPara: "Completed",
  //   },
  //   {
  //     itemPara: "Declined",
  //   },
  //   {
  //     itemPara: "Canceled",
  //   },
  // ];
  const select3 = [
    {
      itemPara: "Processing",
    },
    {
      itemPara: "Processed",
    },
    {
      itemPara: "Declined",
    },
    {
      itemPara: "Rejected",
    },
  ];

  const select4 = [
    {
      itemPara: "individual",
      itemTitle: "Individual vendors",
    },
    {
      itemPara: "company",
      itemTitle: "Company vendors",
    },
    // {
    //   itemPara: "reservations",
    //   itemTitle: "reservations",
    // },
  ];

  const select5 = [
    {
      itemPara: "Credit card",
    },
    {
      itemPara: "Bank account",
    },
    {
      itemPara: "PayPal",
    },
  ];
  // Transction table Code
  const [tabtype, setTabtype] = useState<string>("Reservations");
  const [date, setDate] = useState<Date | null>();
  const [date1, setDate1] = useState<Date | null>();
  const [status, setStatus] = useState<string[] | any[]>([]);
  const [vendor, setVendor] = useState<string[] | any[]>([]);
  const [payment, setPayment] = useState<string[] | any[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  console.log("limit", limit);
  const [search, setSearch] = useState("");
  const [query] = useDebounce(search, 600);
  const [{ Payouts, Refunds, Reservations }, setGroupCounts] = useState<any>(
    {}
  );
  const [transactionListData, setTransactionListData] = useState<any>([]);
  const { mutate: transctionList, isLoading } = useTransctionList();

  const handleVendorChange = (value: string) => {
    if (vendor.includes(value)) {
      setVendor((pre) => pre.filter((p) => p != value));
    } else {
      setVendor((pre) => [...pre, value]);
    }
  };

  const handlePaymentChange = (value: string) => {
    if (payment.includes(value)) {
      setPayment((pre) => pre.filter((p) => p != value));
    } else {
      setPayment((pre) => [...pre, value]);
    }
  };
  const handleStatusChange = (value: string) => {
    if (status.includes(value)) {
      setStatus((pre) => pre.filter((p) => p != value));
    } else {
      setStatus((pre) => [...pre, value]);
    }
  };

  const handleTabtypeStatus = (tabtypestatus: string) => {
    console.log("SelectedTabType:", tabtypestatus);
    setTabtype(tabtypestatus);
  };

  const FethtransctionData = async () => {
    transctionList(
      {
        page: page,
        limit: limit,
        search: query,
        payment_method: payment,
        status: status,
        vendor_type: vendor,
        transaction_date: {
          ...(date && date1
            ? {
                start_date: formatDateToYYYYMMDD(date),
                end_date: formatDateToYYYYMMDD(date1),
              }
            : {}),
        },
        type: tabtype,
      },
      {
        onSuccess: (response: any) => {
          // console.log("Tranction Lists:- ", response?.data);
          const { grouped_counts, data, pages } = response?.data ?? {};
          setGroupCounts(grouped_counts);
          setTransactionListData(response?.data);
          handleClosePopover(true);
        },
        onError: () => {},
      }
    );
  };
  const handleChangePagination = (event: any, value: any) => {
    setPage(value);
    console.log("selectedValue:-", value);
    const payload = {
      page: value,
    };
    transctionList(payload, {
      onSuccess: (response: any) => {
        const { grouped_counts, data, pages } = response?.data ?? {};
        setGroupCounts(grouped_counts);
        setTransactionListData(response?.data);
      },
    });
  };

  const ClearAll = () => {
    setPayment([]);
    setVendor([]);
    setStatus([]);
    setDate(null);
    setDate1(null);
    FethtransctionData();
  };

  const [trigger, setTrigger] = useState(Date.now());
  const triggerRefetch = () => {
    setTrigger(Date.now());
  };

  useEffect(() => {
    FethtransctionData();
  }, [query, limit, tabtype, trigger]);
  // console.log("Tranction Lists Data: -", transactionListData);
  // console.log("length of Array is: ", transactionListData?.data?.length);

  // console.log("CheckLimit", limit);

  const [closePopover, setClosePopover] = useState<boolean>(false);
  const handleClosePopover = (_status: boolean) => setClosePopover(_status);

  return (
    <div className="py-10 md:py-5">
      <Container>
        <ReservationHeader
          dropdownShow={false}
          className="mb-8 md:mb-3"
          headerName="Transactions"
          setSearch={setSearch}
        />
        <Tabs defaultValue="reservations" className="w-full">
          <TabsList className="flex flex-wrap items-center justify-start mb-8 md:mb-5">
            <TabsTrigger
              onClick={() => {
                handleTabtypeStatus("Reservations");
                setPage(1);
              }}
              value="reservations"
              className="pb-6 text-base rounded-none mr-6 md:pb-3 md:mb-3 text-gray-900"
            >
              Reservations&nbsp;
              <span className="text-sm text-gray-400">({Reservations})</span>
            </TabsTrigger>

            <TabsTrigger
              value="refunds"
              className="pb-6 text-base rounded-none md:pb-3 mr-6 md:mb-3 text-gray-900"
              onClick={() => {
                handleTabtypeStatus("Refunds");
                setPage(1);
              }}
            >
              Refunds&nbsp;
              <span className="text-sm text-gray-400">({Refunds})</span>
            </TabsTrigger>
            <TabsTrigger
              value="payouts"
              onClick={() => {
                handleTabtypeStatus("Payouts");
                setPage(1);
              }}
              className="pb-6 text-base rounded-none md:pb-3 md:mb-3 text-gray-900"
            >
              Payouts&nbsp;
              <span className="text-sm text-gray-400">({Payouts})</span>
            </TabsTrigger>
          </TabsList>
          <div>
            <div className="relative">
              <div className="flex items-center flex-wrap mb-8 md:mb-3">
                {/* Start and End Date */}
                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  label="Date"
                  className="mr-4 md:mb-4 sm:w-full sm:mr-0 sm:justify-between"
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
                                onSelect={setDate}
                                initialFocus
                              /> */}
                              <ServiceDatePicker
                                mode="single"
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
                          <p className="text-[var(--cmn-grey2)] text-[14px]">
                            To
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
                        type="button"
                        onClick={() => {
                          setDate(null);
                          setDate1(null);
                          triggerRefetch();
                        }}
                        className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
                      >
                        Clear All
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          FethtransctionData();
                        }}
                      >
                        Show results
                      </Button>
                    </div>
                  </div>
                </PopOverComponent>

                {/* Payment Method */}
                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  label="Payment method"
                  className="mr-4 md:mb-4 sm:w-full sm:mr-0 sm:justify-between"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Payment method
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select5?.map((item, index) => (
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
                                checked={payment.includes(item.itemPara)}
                                handleChange={handlePaymentChange}
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
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setPayment([]);
                              triggerRefetch();
                            }}
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            onClick={() => {
                              FethtransctionData();
                            }}
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>

                {/* Vendor Part */}
                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  label="Vendor type"
                  className="mr-4 md:mb-4 sm:w-full sm:mr-0 sm:justify-between"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Vendor type
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select4?.map((item, index) => (
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
                                htmlFor={`${item.itemTitle}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.itemTitle}
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
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setVendor([]);
                              triggerRefetch();
                            }}
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            onClick={() => FethtransctionData()}
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                {/* Status Part */}
                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  label="Status"
                  className="mr-4 md:mb-4 sm:w-full sm:mr-0 sm:justify-between"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Status
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select3?.map((item, index) => (
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
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setStatus([]);
                              triggerRefetch();
                            }}
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            onClick={() => {
                              FethtransctionData();
                            }}
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
              </div>

              {/* Main table */}
              {isLoading ? (
                <>
                  <Loading />
                </>
              ) : (
                <>
                  <TableComponent
                    theadList={tableHeadListForServices}
                    tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                    className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                  >
                    {!!transactionListData?.data &&
                    transactionListData?.data?.length > 0 ? (
                      transactionListData?.data?.map(
                        (invoice: any, index: number) => (
                          <TableRow key={index}>
                            <TableCell
                              className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                transactionListData?.data?.length - 1 ===
                                  index && "border-0"
                              }`}
                            >
                              {invoice?.transaction_id}
                            </TableCell>
                            <TableCell
                              className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                transactionListData?.data?.length - 1 ===
                                  index && "border-0"
                              }`}
                            >
                              {formatDate(invoice?.date)}
                              <p className="text-sm text-gray-500">
                                {formatTime(invoice?.date)}
                              </p>
                            </TableCell>
                            <TableCell
                              className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                transactionListData?.data?.length - 1 ===
                                  index && "border-0"
                              }`}
                            >
                              {invoice.payment_method_details.email}
                              <p className="flex items-center text-[12px]">
                                {invoice?.payment_method_details.type}{" "}
                                <span className="inline-flex items-center justify-center ml-2">
                                  {/* {invoice?.withdrawl_icon} */}
                                  <PaypalIcon />
                                </span>{" "}
                              </p>
                            </TableCell>
                            <TableCell
                              className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                transactionListData?.data?.length - 1 ===
                                  index && "border-0"
                              }`}
                            >
                              <div className="flex items-center">
                                <figure>
                                  <Image
                                    src={
                                      invoice?.vendor_data?.profilePicture
                                        ? invoice?.vendor_data?.profilePicture
                                        : assets?.clientImage
                                    }
                                    // src={invoice?.vendor_image}
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
                                transactionListData?.data?.length - 1 ===
                                  index && "border-0"
                              }`}
                            >
                              <div className="flex items-center">
                                {/* {invoice?.amount?.map((item, index) => ( */}
                                <p key={index}>
                                  $
                                  {index !== invoice?.amount?.length - 1
                                    ? `${invoice?.amount}`
                                    : `${invoice?.amount}`}
                                </p>
                                {/* ))} */}
                              </div>
                            </TableCell>
                            <TableCell
                              className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                transactionListData?.data?.length - 1 ===
                                  index && "border-0"
                              }`}
                            >
                              <Badge
                                className={` 
              ${
                invoice?.status === "Processing"
                  ? "bg-yellow-50"
                  : invoice?.status === "Upcoming"
                  ? "bg-[#F5EFFD]"
                  : invoice?.status === "Processed"
                  ? "bg-[#EBFFEB]"
                  : invoice?.status === "Declined"
                  ? "bg-gray-50"
                  : invoice?.status === "Rejected"
                  ? "bg-red-50"
                  : ""
              }
              
             ${
               invoice?.status === "Processing"
                 ? "text-[#F59F00]"
                 : invoice?.status === "Upcoming"
                 ? "text-[#7757BD]"
                 : invoice?.status === "Processed"
                 ? "text-[#04D100]"
                 : invoice?.status === "Declined"
                 ? "text-gray-500"
                 : invoice?.status === "Rejected"
                 ? "text-red-500"
                 : ""
             } border-[1px] 
              
              ${
                invoice?.status === "Processing"
                  ? "border-yellow-100"
                  : invoice?.status === "Upcoming"
                  ? "border-[#7757BD]"
                  : invoice?.status === "Processed"
                  ? "border-[#87FF85]"
                  : invoice?.status === "Declined"
                  ? "border-gray-200"
                  : invoice?.status === "Rejected"
                  ? "border-red-200"
                  : ""
              }
              py-[6px] px-[10px] font-satoshi_medium text-sm`}
                              >
                                {invoice?.status}
                              </Badge>
                            </TableCell>
                            <TableCell
                              className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                transactionListData?.data?.length - 1 ===
                                  index && "border-0"
                              }`}
                            >
                              {invoice?.status === "Processing" && (
                                <div className="flex items-center">
                                  <DeclinePaymentModal />
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        )
                      )
                    ) : (
                      <>
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
                  <div className="py-8">
                    <div className="flex items-center max-w-[150px] mt-6">
                      <p className="text-sm text-gray-400 pr-3 ">Per page</p>
                      <Select
                        value={String(limit)}
                        onValueChange={(e) => setLimit(Number(e))}
                      >
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
                  </div>
                  {!!transactionListData?.data &&
                  transactionListData?.data.length > 0 ? (
                    <>
                      <div className="-mt-16">
                        <BasicPagination
                          totalResData={transactionListData}
                          handleChange={handleChangePagination}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {/* <div className="py-8">
          <CommonPagination />
        </div> */}
                </>
              )}
            </div>
          </div>
        </Tabs>
      </Container>
    </div>
  );
}
