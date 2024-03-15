import { useCreateCommissionRate } from "@/hooks/react-qurey/query-hooks/adminCommissionQuery.hooks";
import { useServiceList } from "@/hooks/react-qurey/query-hooks/services.hooks";
import { useUserList } from "@/hooks/react-qurey/query-hooks/userList.hooks";
import { useDebounce } from "@/hooks/useDebounce";
import assets from "@/json/assets";
import AddIcon from "@/json/icons/AddIcon";
import InfoIcon from "@/json/icons/InfoIcon";
import PercentageIcon from "@/json/icons/PercentageIcon";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import CommonInput from "../CommonInput/CommonInput";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Loading from "../Loading/Loading";

export default memo(function AddCustomRateModal({
  defaultCommisionRate,
  recallCategoryListing,
}: any) {
  const selectItems = [
    {
      imgUrl: assets.SelectFieldAvatar,
      mainText: "Phoenix Baker",
      subText: "Individual",
    },
    {
      imgUrl: assets.popAvatar2,
      mainText: "Style",
      subText: "Company",
    },
    {
      imgUrl: assets.popAvatar3,
      mainText: "Abstergo Ltd.",
      subText: "Company",
    },
    {
      imgUrl: assets.popAvatar4,
      mainText: "Phoenix Baker",
      subText: "Individual",
    },
    {
      imgUrl: assets.popAvatar5,
      mainText: "Health Life",
      subText: "Company",
    },
  ];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const tableHeadListForServices = [
    "User / Services",
    "Type / Category",
    "Commission rate",
    "Last updated",
    "",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [baseType, setBaseType] = useState("Users");
  const [page, setPage] = useState(1);
  const [showEle, setShowEle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [customCommisionRate, setCustomCommisionRate] = useState("");
  const [selectedBaseTypeId, setSelectedBaseTypeId] = useState("");
  const [userGivenSearch, setUserGivenSearch] = useState("");
  const debouncedData = useDebounce(userGivenSearch, 500);
  const [commissionAppliedBaseList, setCommissionAppliedBaseList] =
    useState<any>([]);

  const { mutate: getUSERList, isLoading } = useUserList();
  const { mutate: getServiceList, isLoading: isServiceListLoading } =
    useServiceList();
  const {
    mutate: createCommissionRate,
    isLoading: createCommissionRateLoader,
  } = useCreateCommissionRate();
  const handleModalOpener = () => setIsModalOpen(!isModalOpen);
  const handleBaseType = (_type: string) => {
    setBaseType(_type);
    setCommissionAppliedBaseList([]);
    setShowEle(false);
    setPage(1);
    // setCustomCommisionRate("");
    setSelectedBaseTypeId("");
    setUserGivenSearch("");
    setShowEle(false);
  };
  const getCustomCommisionRate = (_rate: string) =>
    setCustomCommisionRate(_rate);
  const getUserGivenSearch = useCallback(
    (_searchdata: string) => {
      setUserGivenSearch(_searchdata);
      // setCommissionAppliedBaseList([]);
    },
    [userGivenSearch]
  );
  const getSelectedBaseTypeId = (_rate: string) => setSelectedBaseTypeId(_rate);
  const createCommisionRate = () => {
    const payload = {
      ...(baseType == "Users"
        ? { user_id: selectedBaseTypeId }
        : { service_id: selectedBaseTypeId }),

      rate: parseInt(customCommisionRate),
    };
    createCommissionRate(payload, {
      onSuccess: () => {
        setCommissionAppliedBaseList([]);
        setShowEle(false);
        setPage(1);
        setCustomCommisionRate("");
        setSelectedBaseTypeId("");
        setIsModalOpen(false);
        setUserGivenSearch("");
        setBaseType("Users");
        recallCategoryListing();
      },
      onError: () => {
        setCommissionAppliedBaseList([]);
        setShowEle(false);
        setPage(1);
        setCustomCommisionRate("");
        setSelectedBaseTypeId("");
        setIsModalOpen(false);
        setBaseType("Users");
        setUserGivenSearch("");
      },
    });
  };
  const cancelCreateCommissionRate = () => {
    setCommissionAppliedBaseList([]);
    setShowEle(false);
    setPage(1);
    setCustomCommisionRate("");
    setSelectedBaseTypeId("");
    setIsModalOpen(false);
    setUserGivenSearch("");
    setBaseType("Users");
  };
  useEffect(() => {
    setLoader(false);
    if (isModalOpen) {
      // if (!!debouncedData) {
      //   setCommissionAppliedBaseList([]);
      // }
      if (baseType == "Users") {
        getUSERList(
          {
            page: page,
            limit: 10,
            search: "",
            role: "vendor",
          },
          {
            onSuccess: (response: any) => {
              const { data, pages } = response?.data ?? {};
              const modifiedBaseList =
                !!data && data?.length > 0
                  ? data?.map((_b: any) => ({
                      id: _b?._id,
                      firstName: _b?.firstName,
                      lastName: _b?.lastName,
                      role: _b?.role,
                      imgUrl: !!_b?.profilePicture
                        ? _b?.profilePicture
                        : assets?.clientImage,
                    }))
                  : [];
              setCommissionAppliedBaseList([
                ...commissionAppliedBaseList,
                ...modifiedBaseList,
              ]);
              if (page <= pages) {
                setShowEle(true);
              } else {
                setShowEle(false);
              }
              setLoader(true);
            },
          }
        );
      } else {
        getServiceList(
          {
            page: page,
            limit: 10,
            search: "",
          },
          {
            onSuccess: (response: any) => {
              const { data, pages } = response?.data ?? {};
              const modifiedBaseList =
                !!data && data?.length > 0
                  ? data?.map((_b: any) => ({
                      id: _b?._id,
                      title: _b?.title,
                      role: _b?.category_title,
                      imgUrl:
                        !!_b?.images && _b?.images?.length > 0
                          ? _b?.images[0]
                          : assets?.clientImage,
                    }))
                  : [];
              setCommissionAppliedBaseList([
                ...commissionAppliedBaseList,
                ...modifiedBaseList,
              ]);
              if (page <= pages) {
                setShowEle(true);
              } else {
                setShowEle(false);
              }
              setLoader(true);
            },
          }
        );
      }
    } else {
      setCommissionAppliedBaseList([]);
      setShowEle(false);
      setPage(1);
      setLoader(false);
    }
  }, [isModalOpen, baseType, page]);

  useEffect(() => {
    setLoader(false);
    if (isModalOpen) {
      setShowEle(false);
      // if (!!debouncedData) {
      //   setCommissionAppliedBaseList([]);
      // }
      if (baseType == "Users") {
        getUSERList(
          {
            page: 1,
            limit: 10,
            search: debouncedData,
            role: "vendor",
          },
          {
            onSuccess: (response: any) => {
              const { data, pages } = response?.data ?? {};
              const modifiedBaseList =
                !!data && data?.length > 0
                  ? data?.map((_b: any) => ({
                      id: _b?._id,
                      firstName: _b?.firstName,
                      lastName: _b?.lastName,
                      role: _b?.role,
                      imgUrl: _b?.profilePicture,
                    }))
                  : [];
              setCommissionAppliedBaseList([...modifiedBaseList]);
              setLoader(true);
              // if (page <= pages) {
              //   setShowEle(true);
              // } else {
              //   setShowEle(false);
              // }
            },
          }
        );
      } else {
        getServiceList(
          {
            page: 1,
            limit: 10,
            search: debouncedData,
          },
          {
            onSuccess: (response: any) => {
              const { data, pages } = response?.data ?? {};
              const modifiedBaseList =
                !!data && data?.length > 0
                  ? data?.map((_b: any) => ({
                      id: _b?._id,
                      title: _b?.title,
                      role: _b?.category_title,
                      imgUrl:
                        !!_b?.images && _b?.images?.length > 0
                          ? _b?.images[0]
                          : null,
                    }))
                  : [];
              setCommissionAppliedBaseList([...modifiedBaseList]);
              setLoader(true);
              // if (page <= pages) {
              //   setShowEle(true);
              // } else {
              //   setShowEle(false);
              // }
            },
          }
        );
      }
    } else {
      setCommissionAppliedBaseList([]);
      setShowEle(false);
      // setPage(1);
    }
  }, [debouncedData]);
  useEffect(() => {
    if (inView) {
      setPage(page + 1);
    }
  }, [inView]);
  console.log("isModalOpen", isModalOpen);
  console.log("commissionAppliedBaseList", commissionAppliedBaseList);
  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border-gray-200 rounded-full hover:bg-primary hover:text-white"
            onClick={handleModalOpener}
          >
            <i className="inline-flex items-center justify-center mr-2">
              <AddIcon />
            </i>
            Add custom rate
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Add custom rate
            </DialogTitle>
          </DialogHeader>
          <div className="px-10 py-6 md:basis-full md:flex md:flex-col sm:px-5">
            <div className="relative  rounded-[8px] pb-6    ">
              <h3 className="flex items-center text-[16px] text-gray-900">
                Select the user or service
              </h3>
              <p className="flex items-center text-[14px] text-gray-500">
                Select the user or service you want to apply custom commission
                rate.
              </p>
            </div>

            <div className="flex sm:flex-wrap">
              {" "}
              <div className="relative w-[70%] mr-6 border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4 md:w-full md:mr-0">
                <label className="text-[12px] text-gray-400 m-0 leading-0">
                  User or service
                </label>
                <Select onValueChange={(id: any) => getSelectedBaseTypeId(id)}>
                  <SelectTrigger
                    icon={<ChevronDown color="#70707B" />}
                    className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  >
                    <SelectValue
                      placeholder={
                        <></>
                        // <div className="flex">
                        //   <Image
                        //     src={assets.SelectFieldAvatar}
                        //     alt=""
                        //     width={24}
                        //     height={24}
                        //     className="mr-3"
                        //   />
                        //   <p className="sm:text-[14px]">
                        //     Phoenix Baker{" "}
                        //     <span className="ml-2 text-textgray">
                        //       Individual
                        //     </span>
                        //   </p>
                        // </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className="p-0 ">
                    <SelectGroup>
                      <div className="py-[10px] px-[12px] max-h-[250px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                        <Tabs
                          defaultValue={baseType}
                          className="w-full"
                          onValueChange={(_tab: string) => handleBaseType(_tab)}
                        >
                          <TabsList className="flex justify-start w-full border-b border-gray-200 border-solid rounded-[0] mb-0">
                            {["Users", "Services"].map((_t, index) => (
                              <TabsTrigger
                                value={_t}
                                className="mr-8 rounded-[0] border-b border-transparent pb-4"
                                key={_t}
                              >
                                {_t}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          <TabsContent value={baseType}>
                            <div>
                              <div className="mb-0">
                                <SerachInputComponent
                                  placeholderText="Search"
                                  className="bg-transparent"
                                  searchValue={userGivenSearch}
                                  onInputChange={getUserGivenSearch}
                                  searcIconInStart
                                />
                              </div>
                              {loader ? (
                                <div>
                                  {!!commissionAppliedBaseList &&
                                  commissionAppliedBaseList?.length > 0 ? (
                                    commissionAppliedBaseList?.map(
                                      (item: any, i: number) => (
                                        <SelectItem
                                          key={item?.id}
                                          value={item?.id}
                                        >
                                          <div className="flex">
                                            {!!item?.imgUrl && (
                                              <Image
                                                src={item?.imgUrl}
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="mr-3"
                                              />
                                            )}
                                            <p className="sm:text-[14px]">
                                              {!!item?.firstName &&
                                              !!item?.lastName
                                                ? `${item?.firstName} ${item?.lastName}`
                                                : ""}
                                              {!!item?.title
                                                ? `${item?.title}`
                                                : ""}
                                              {!!item?.role && (
                                                <span className="ml-2 text-textgray">
                                                  {item?.role}
                                                </span>
                                              )}
                                            </p>
                                          </div>
                                        </SelectItem>
                                      )
                                    )
                                  ) : (
                                    <h6 className="text-[18px] mb-4 font-satoshi_medium text-center">
                                      There is no {baseType}!
                                    </h6>
                                  )}
                                  {showEle && <div ref={ref} />}
                                </div>
                              ) : (
                                <Loading />
                              )}
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative max-w-[300px] w-[30%] mb-1 md:w-full md:max-w-none">
                <CommonInput
                  placeholderLabel="Custom rate"
                  onChange={(e) => getCustomCommisionRate(e.target.value)}
                />
                <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                  <PercentageIcon />
                </i>
              </div>
            </div>
          </div>

          {/* <div>dfdsfdsf</div> */}

          <DialogFooter className="sm:justify-start px-10 md:px-5 py-6  border-t-[1px] md:flex-wrap">
            <ul className="flex items-center md:flex-wrap md:w-full">
              {!!defaultCommisionRate && (
                <li className="mr-auto flex items-center md:w-full md:mb-4">
                  <InfoIcon IconColor="#131316" />{" "}
                  <p className="ml-1">
                    The default rate is {defaultCommisionRate}%.
                  </p>
                </li>
              )}
              <li className="pr-2 md:w-full md:mb-4 md:pr-0">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white md:w-full"
                    onClick={cancelCreateCommissionRate}
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </li>
              <li className="md:w-full">
                {!createCommissionRateLoader ? (
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                    onClick={createCommisionRate}
                    disabled={!selectedBaseTypeId || !customCommisionRate}
                  >
                    Apply rate
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                  >
                    <ButtonLoader />
                  </Button>
                )}
              </li>
            </ul>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
});
