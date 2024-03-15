"use client";
import AddCustomRateModal from "@/components/AddCustomRateModal/AddCustomRateModal";
import ButtonLoader from "@/components/ButtonLoader/ButtonLoader";
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import CommonInput from "@/components/CommonInput/CommonInput";
import Container from "@/components/Container";
import DeleteCommisionWarningModal from "@/components/DeleteCommisionWarningModal/DeleteCommisionWarningModal";
import Loading from "@/components/Loading/Loading";
// import DeleteCommisionModal from "@/components/DeleteCommisionModal/DeleteCommisionModal";
import TableComponent from "@/components/TableComponent/TableComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useCommissionList,
  useDefaultCommissionRate,
  useDeleteCommission,
  useUpdateCommissionRate,
  useUpdateCommissionRateById,
} from "@/hooks/react-qurey/query-hooks/adminCommissionQuery.hooks";
import { useCategoryList } from "@/hooks/react-qurey/query-hooks/adminDashboard.hooks";
import { useDebounce } from "@/hooks/useDebounce";
import assets from "@/json/assets";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import PercentageIcon from "@/json/icons/PercentageIcon";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
interface popoverProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  classNamePopoverContent?: string;
  close?: boolean;
  handleClosePopover?: any;
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

const exceptThisSymbols = ["e", "E", "+", "-", "."];

export default function page() {
  const tableHeadListForServices = [
    "User / Services",
    "Type / Category",
    "Commission rate",
    "Last updated",
    "",
  ];

  const select4 = [
    {
      itemPara: "Individual vendors",
    },
    {
      itemPara: "Company vendors",
    },
  ];

  const select5 = [
    {
      itemPara: "Users",
    },
    {
      itemPara: "Services",
    },
    // {
    //   itemPara: "PayPal",
    // },
  ];

  const {
    ref: categoryListingRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const initialCommisionRate = useRef("");
  const [defaultCommisionRate, setDefaultCommisionRate] = useState("");
  const [tabType, setTabType] = useState("All");
  const [selectedCommisionId, setSelectedCommisionId] = useState("");
  const [page, setPage] = useState(1);
  const [commissionRange, setCommissionRange] = useState({ min: 0, max: 0 });
  const [showEle, setShowEle] = useState(false);
  const [defaultCommissionLoader, setDefaultCommissionLoader] = useState(false);
  const [callCategoryListing, setCallCategoryListing] = useState(false);
  const [categoryList, setCategoryList] = useState<any>([]);
  const [selectedCategoryList, setSelectedCategoryList] = useState<any>([]);
  const [commissionListData, setCommissionListData] = useState<any>([]);
  const [{ all, service, user }, setGroupCounts] = useState<any>({});
  const [closePopover, setClosePopover] = useState<boolean>(false);
  const [recallListing, setRecallListing] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const debouncedData = useDebounce(defaultCommisionRate, 500);

  const { mutate: getDefaultCommissionRate, isLoading } =
    useDefaultCommissionRate();
  const { mutate: updateCommissionRate, isLoading: updateCommissionLoader } =
    useUpdateCommissionRate();
  const { mutate: commissionList, isLoading: commissionListLoader } =
    useCommissionList();
  // const {
  //   mutate: createCommissionRate,
  //   isLoading: createCommissionRateLoader,
  // } = useCreateCommissionRate();
  const { mutate: getCategoryList, isLoading: categoryLoader } =
    useCategoryList();
  const {
    mutate: updateCommissionRateById,
    isLoading: updateCommissionRateByIdLoader,
  } = useUpdateCommissionRateById();
  const deleteModalHandler = useCallback(
    (data: any) => setIsDeleteModalOpen(data),
    []
  );
  const {
    data,
    isLoading: deleteLoader,
    refetch,
  } = useDeleteCommission(selectedCommisionId, () => {
    setSelectedCommisionId("");
    deleteModalHandler(false);
    setRecallListing(!recallListing);
    // deleteModalHandler(false);
    setLoader(false);
  });

  const getCommssionId = useCallback(
    (_id: any) => setSelectedCommisionId(_id),
    [selectedCommisionId]
  );
  const getUserGivenCommisiionRate = (_rate: string, id: string | number) => {
    if (parseInt(_rate) <= 0) {
      return false;
    }
    setLoader(false);
    const prevList = [...commissionListData];
    const modifiedList = commissionListData?.map((_i: any) => {
      if (_i?._id == id) {
        return { ..._i, rate: parseInt(_rate) };
      } else {
        return { ..._i };
      }
    });
    setCommissionListData(modifiedList);
    const changedCommission = modifiedList?.filter((_i: any) => _i?._id == id);
    if (
      changedCommission?.length > 0 &&
      changedCommission[0]?.rate !== changedCommission[0]?.rate_string
    ) {
      const payload = {
        id,
        body: {
          rate: _rate,
        },
      };
      // testDelay(4000);
      // updateCommissionRateById(payload, {
      //   onSuccess: (response: any) => {
      //     console.log("updateCommissionRate", response);
      //     setLoader(true);
      //   },
      // });
      setTimeout(() => {
        updateCommissionRateById(payload, {
          onSuccess: (response: any) => {
            console.log("updateCommissionRate", response);
            setLoader(true);
          },
        });
      }, 2000);
    }
  };

  const recallCategoryListing = useCallback(
    () => setRecallListing(!recallListing),
    [recallListing]
  );
  // const recallCategoryListing = useCallback(
  //   () => setCallCategoryListing(!callCategoryListing),
  //   [callCategoryListing]
  // );
  const getCommissionRangeHandler = (field: string, value: string) =>
    setCommissionRange({ ...commissionRange, [field]: value });
  const handleClosePopover = (_status: boolean) => setClosePopover(_status);
  const tabTypeHandler = (_tab: string) => {
    setTabType(_tab);
    setCommissionRange({ min: 0, max: 0 });
    setSelectedCategoryList([]);
    setSelectedCommisionId("");
  };
  const defaultCommisionRateHandler = (e: any) => {
    setDefaultCommisionRate(e.target.value);
    // const userGivenCommissionRate = useDebounce(e.target.value, 300);
    // if (userGivenCommissionRate != defaultCommisionRate) {
    //   alert("call upadte");
    // }
  };
  const categoryHandler = (id: any) => {
    const filteredCategoryList = categoryList?.map((_cat: any) => {
      if (_cat?.id == id) {
        return { ..._cat, status: !_cat.status };
      } else {
        return { ..._cat };
      }
    });
    setCategoryList(filteredCategoryList);
  };
  const selectedCategoryHandler = () => {
    const filteredCategoryList = categoryList
      ?.filter((_cat: any) => _cat.status)
      .map((_i: any) => _i?.value);
    setSelectedCategoryList(filteredCategoryList);
    handleClosePopover(true);
  };
  const clearAllSelectedCategory = () => {
    const filteredCategoryList = categoryList?.map((_i: any) => ({
      ..._i,
      status: false,
    }));
    setSelectedCategoryList([]);
    setCategoryList(filteredCategoryList);
    handleClosePopover(true);
  };
  const clearAllCommissionRange = () => {
    setCommissionRange({ min: 0, max: 0 });
    handleClosePopover(true);
    setRecallListing(!recallListing);
  };
  const callCommissionListOnRangeSet = () => {
    setRecallListing(!recallListing);
    handleClosePopover(true);
  };
  const callCommissionListing = useCallback(
    () => setRecallListing(!recallListing),
    [recallListing]
  );

  const deleteCommissionById = useCallback(() => {
    if (!!selectedCommisionId) {
      refetch();
    } else {
      deleteModalHandler(false);
    }
  }, [selectedCommisionId]);

  // const updateDefaultCommissionRate = () => {
  //   if (
  //     !!debouncedData &&
  //     !!initialCommisionRate.current &&
  //     debouncedData != initialCommisionRate.current
  //   ) {
  //     setDefaultCommissionLoader(true);
  //     updateCommissionRate(
  //       { rate: debouncedData },
  //       {
  //         onSuccess: (response: any) => {
  //           console.log("updated response", response);
  //           getDefaultCommissionRate(
  //             {},
  //             {
  //               onSuccess: (response: any) => {
  //                 console.log("response", response?.data?.data?.rate);
  //                 setDefaultCommisionRate(response?.data?.data?.rate ?? "");
  //                 initialCommisionRate.current =
  //                   response?.data?.data?.rate ?? "";
  //                 setDefaultCommissionLoader(false);
  //               },
  //               onError: (error: any) => {
  //                 console.log("error", error);
  //                 setDefaultCommissionLoader(false);
  //               },
  //             }
  //           );
  //         },
  //         onError: (error: any) => {
  //           console.log("updated error", error);
  //           setDefaultCommissionLoader(true);
  //         },
  //       }
  //     );
  //   }
  // };

  const updateDefaultCommissionRate = () => {
    if (
      !!debouncedData &&
      !!initialCommisionRate.current &&
      debouncedData != initialCommisionRate.current
    ) {
      setDefaultCommissionLoader(true);
      Swal.fire({
        title: "Update Commission Rate?",
        text: "Are you sure you want to update the commission rate?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.isConfirmed) {
          updateCommissionRate(
            { rate: debouncedData },
            {
              onSuccess: (response: any) => {
                console.log("updated response", response);
                getDefaultCommissionRate(
                  {},
                  {
                    onSuccess: (response: any) => {
                      console.log("response", response?.data?.data?.rate);
                      setDefaultCommisionRate(response?.data?.data?.rate ?? "");
                      initialCommisionRate.current =
                        response?.data?.data?.rate ?? "";
                      setDefaultCommissionLoader(false);
                    },
                    onError: (error: any) => {
                      console.log("error", error);
                      setDefaultCommissionLoader(false);
                    },
                  }
                );
              },
              onError: (error: any) => {
                console.log("updated error", error);
                setDefaultCommissionLoader(true);
              },
            }
          );
          Swal.fire({
            title: "Updated!",
            text: "Commission rate has been updated.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            allowOutsideClick: false,
          });
        } else {
          setDefaultCommissionLoader(false);
          setDefaultCommisionRate(initialCommisionRate.current);
          Swal.fire("Cancelled", "No changes were made.", "info");
        }
      });
    }
  };

  useEffect(() => {
    getDefaultCommissionRate(
      {},
      {
        onSuccess: (response: any) => {
          console.log("response", response?.data?.data?.rate);
          setDefaultCommisionRate(response?.data?.data?.rate ?? "");
          initialCommisionRate.current = response?.data?.data?.rate ?? "";
        },
        onError: (error: any) => {
          console.log("error", error);
        },
      }
    );
  }, []);
  // useEffect(() => {
  //   if (
  //     !!debouncedData &&
  //     !!initialCommisionRate.current &&
  //     debouncedData != initialCommisionRate.current
  //   ) {
  //     updateCommissionRate(
  //       { rate: debouncedData },
  //       {
  //         onSuccess: (response: any) => {
  //           console.log("updated response", response);
  //         },
  //         onError: (error: any) => {
  //           console.log("updated error", error);
  //         },
  //       }
  //     );
  //   }
  // }, [debouncedData, initialCommisionRate.current]);

  useEffect(() => {
    setLoader(false);
    const { min, max } = commissionRange ?? {};
    commissionList(
      {
        page: 1,
        limit: 10,
        sort: {
          order: "asc",
          field: "createdAt",
        },
        search: "",
        ...(!!max || !!min
          ? tabType == "All"
            ? {}
            : {
                rate: {
                  max,
                  min,
                },
              }
          : {}),
        type: tabType == "All" ? "" : tabType == "Users" ? "user" : "service",
        ...(tabType == "Users"
          ? { vendor_type: selectedCategoryList }
          : tabType == "Services"
          ? { category_id: selectedCategoryList }
          : {}),
      },
      {
        onSuccess: (response: any) => {
          console.log("Commision Listing", response?.data);
          const { grouped_counts, data, pages } = response?.data ?? {};
          setGroupCounts(grouped_counts);
          setCommissionListData(data);
          if (page <= pages) {
            setShowEle(true);
          } else {
            setShowEle(false);
          }
          setLoader(true);
        },
        onError: () => {},
      }
    );
  }, [page, tabType, selectedCategoryList, recallListing]);

  useEffect(() => {
    if (tabType == "Users") {
      setCategoryList([
        {
          id: "Individual",
          itemPara: "Individual",
          status: false,
          value: "individual",
        },
        { id: "Company", itemPara: "Company", status: false, value: "company" },
      ]);
    } else if (tabType == "Services") {
      getCategoryList(
        {},
        {
          onSuccess: (response: any) => {
            const categoryListData = response?.data?.data ?? [];
            const modifyCategoryList =
              !!categoryListData &&
              categoryListData?.length > 0 &&
              categoryListData?.map((_cat: any) => ({
                id: _cat?._id,
                itemPara: _cat?.name,
                status: false,
                value: _cat?._id,
              }));
            setCategoryList(modifyCategoryList);
            // setListLoader(false);
          },
        }
      );
    }
  }, [tabType]);

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
    }
  }, [inView]);

  const showSaveChangesButton = useMemo(() => {
    if (defaultCommisionRate != initialCommisionRate.current) {
      return true;
    } else {
      return false;
    }
  }, [defaultCommisionRate]);
  console.log("commissionRange", commissionRange);

  return (
    <div className="py-10 md:py-[30px]">
      <Container>
        <CommonHeader
          title="Commission rate"
          className="mb-8 lg:text-[36px] md:text-[24px] lg:mb-4"
        />

        <div className="py-6 px-8 rounded-xl bg-white cmn_box border border-gray-50 mb-8 md:px-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-col justify-start">
              <h3 className=" text-base font-satoshi_medium mb-2">
                Default commission rate
              </h3>
              <div className="relative max-w-[300px] mb-1 md:max-w-full">
                <CommonInput
                  placeholderLabel="Refund amount"
                  value={defaultCommisionRate}
                  type="number"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  onChange={defaultCommisionRateHandler}
                  onKeyDown={(e: any) =>
                    exceptThisSymbols.includes(e.key) && e.preventDefault()
                  }
                />

                <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                  <PercentageIcon />
                </i>
              </div>
              <p className=" text-[12px] text-gray-400">
                This commission rate applied to all services and users.
              </p>
            </div>
            {showSaveChangesButton && (
              <>
                {defaultCommissionLoader ? (
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                  >
                    <ButtonLoader />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                    onClick={updateDefaultCommissionRate}
                    // disabled={!selectedBaseTypeId || !customCommisionRate}
                  >
                    Save changes
                  </Button>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap mb-8">
          <div className="lg:mb-3">
            <h3 className=" text-[24px] mb-2">Customized rates</h3>
            <p className="text-gray-500">
              Customized rates allow you to override the default rate for
              specific users and services.
            </p>
          </div>
          <AddCustomRateModal
            defaultCommisionRate={defaultCommisionRate}
            recallCategoryListing={recallCategoryListing}
          />
        </div>

        <Tabs
          value={tabType}
          className="w-full"
          onValueChange={(_tab: string) => tabTypeHandler(_tab)}
        >
          <TabsList className="flex flex-wrap items-center justify-start mb-4">
            {["All", "Users", "Services"].map((_t, index) => (
              <TabsTrigger
                value={_t}
                className="pb-6 text-base rounded-none mr-6 text-gray-900"
                key={_t}
              >
                {_t}&nbsp;
                <span className="text-sm text-gray-400">
                  ({_t == "All" ? all : _t == "Users" ? user : service})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {loader ? (
            <>
              {!commissionListLoader && !!commissionListData && (
                <TabsContent value={tabType}>
                  <div className="relative">
                    {tabType !== "All" && (
                      <div className="flex items-center flex-wrap mb-4">
                        <PopOverComponent
                          label="Category"
                          className="mr-4 md:mr-[2px]"
                          classNamePopoverContent="min-w-[385px]"
                          close={closePopover}
                          handleClosePopover={handleClosePopover}
                        >
                          <div className="pb-[60px]">
                            <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                              Status
                            </h5>
                            <div className="h-auto">
                              <ul className="">
                                {categoryList?.map(
                                  (item: any, index: number) => (
                                    <li key={index + 1} className="py-2">
                                      {/* <SelectItem value={item?.eachSubListItem}> */}
                                      <div
                                        className="flex items-center space-x-2"
                                        key={index}
                                      >
                                        <div
                                          onClick={() =>
                                            categoryHandler(item.id)
                                          }
                                        >
                                          <Checkbox
                                            id={`${item.id}`}
                                            className="checkBox border-gray-200 rounded-[4px]"
                                            icon={<CheckboxTickIcon />}
                                            checked={item?.status}
                                          />
                                        </div>
                                        <label
                                          htmlFor={`${item.itemPara}`}
                                          className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          {item?.itemPara}
                                        </label>
                                      </div>
                                      {/* </SelectItem> */}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                              <ul className="flex items-center">
                                <li className="mr-2">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    className="border-0 hover:bg-black hover:text-white"
                                    onClick={clearAllSelectedCategory}
                                  >
                                    Clear all
                                  </Button>
                                </li>
                                <li>
                                  <Button
                                    type="button"
                                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                                    onClick={() => selectedCategoryHandler()}
                                  >
                                    Show results
                                  </Button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </PopOverComponent>
                        <PopOverComponent
                          label="Commission rate"
                          className="mr-4 md:mr-0"
                          classNamePopoverContent="min-w-[385px]"
                          close={closePopover}
                          handleClosePopover={handleClosePopover}
                        >
                          <p className="text-gray-900 font-satoshi_medium mb-2">
                            Commission rate
                          </p>
                          <div className="pb-4 flex items-center border-b border-solid border-gray-200 justify-between">
                            <div className="flex items-center w-[48%]">
                              <p className="text-sm text-gray-400 pr-2">Min</p>
                              <Input
                                type="number"
                                // placeholder="10"
                                value={commissionRange?.min}
                                className="max-w-[69px] h-[36px] p-2"
                                onChange={(e: any) =>
                                  getCommissionRangeHandler(
                                    "min",
                                    e.target.value
                                  )
                                }
                                onKeyDown={(e: any) =>
                                  exceptThisSymbols.includes(e.key) &&
                                  e.preventDefault()
                                }
                              />
                            </div>
                            <div className="flex items-center w-[48%]">
                              <p className="text-sm text-gray-400 pr-2">Max</p>
                              <Input
                                type="number"
                                // placeholder="20"
                                value={commissionRange?.max}
                                className="max-w-[69px] h-[36px] p-2"
                                onChange={(e: any) =>
                                  getCommissionRangeHandler(
                                    "max",
                                    e.target.value
                                  )
                                }
                                onKeyDown={(e: any) =>
                                  exceptThisSymbols.includes(e.key) &&
                                  e.preventDefault()
                                }
                              />
                            </div>
                          </div>
                          <div className="flex item-center ml-auto pt-3">
                            <button
                              type="button"
                              className="bg-gray-900 py-2 ml-auto px-4 rounded-[20px] text-white hover:bg-gray-500"
                              onClick={() => callCommissionListOnRangeSet()}
                            >
                              Show results
                            </button>
                          </div>
                        </PopOverComponent>
                      </div>
                    )}
                    {!!commissionListData && commissionListData?.length > 0 ? (
                      <TableComponent
                        theadList={tableHeadListForServices}
                        tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                        className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                      >
                        {commissionListData?.map(
                          (_commission: any, index: number) => (
                            <TableRow key={index + 1}>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base xl:!min-w-[300px] ${
                                  commissionListData?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  <figure>
                                    <Image
                                      src={
                                        !!_commission?.image
                                          ? _commission?.image
                                          : assets?.clientImage
                                      }
                                      alt="image"
                                      width={32}
                                      height={32}
                                    />
                                  </figure>
                                  {!!_commission?.title && (
                                    <p className="ml-3">
                                      {_commission?.title ?? ""}
                                    </p>
                                  )}
                                </div>
                              </TableCell>
                              {!!_commission?.type && (
                                <TableCell
                                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                    commissionListData?.length - 1 === index &&
                                    "border-0"
                                  }`}
                                >
                                  {_commission?.type ?? ""}
                                </TableCell>
                              )}
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                  commissionListData?.length - 1 === index &&
                                  "border-0"
                                }`}
                              >
                                {!!_commission?.rate && (
                                  <div className="relative max-w-[86px] mb-1">
                                    <CommonInput
                                      value={_commission?.rate}
                                      className="pt-0 h-[46px]"
                                      onChange={(e: any) =>
                                        getUserGivenCommisiionRate(
                                          e.target.value,
                                          _commission?._id
                                        )
                                      }
                                    />
                                    <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                                      <PercentageIcon />
                                    </i>
                                  </div>
                                )}
                              </TableCell>
                              {!!_commission?.date && (
                                <TableCell
                                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                    commissionListData?.length - 1 === index &&
                                    "border-0"
                                  }`}
                                >
                                  {_commission?.date}
                                </TableCell>
                              )}
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                  commissionListData?.length - 1 === index &&
                                  "border-0"
                                }`}
                                // onClick={() =>
                                //   getCommssionId(_commission?._id ?? "")
                                // }
                              >
                                <DeleteCommisionWarningModal
                                  open={isDeleteModalOpen}
                                  close={deleteModalHandler}
                                  commissionId={_commission?._id ?? ""}
                                  getCommssionId={getCommssionId}
                                  deleteCommissionById={deleteCommissionById}
                                />
                              </TableCell>
                            </TableRow>
                          )
                        )}
                        {showEle && commissionListData?.length > 5 && (
                          <div ref={categoryListingRef} />
                        )}
                      </TableComponent>
                    ) : (
                      <TableComponent
                        theadList={tableHeadListForServices}
                        tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                        className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                      >
                        <TableRow>
                          <TableCell
                            colSpan={tableHeadListForServices?.length}
                            align="center"
                            className="py-[135px]"
                          >
                            <h6 className="text-[18px] mb-4 font-satoshi_medium">
                              There is no set up custom rate!
                            </h6>
                            <p className=" text-gray-500 text-base max-w-[295px]">
                              Once the custom commission rates are set up,
                              they'll be listed right here.
                            </p>
                          </TableCell>
                        </TableRow>
                      </TableComponent>
                    )}
                  </div>
                </TabsContent>
              )}
            </>
          ) : (
            <Loading />
          )}
        </Tabs>
      </Container>
    </div>
  );
}
