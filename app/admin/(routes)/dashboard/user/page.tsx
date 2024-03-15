"use client";

import Container from "@/components/Container";
import TableComponent from "@/components/TableComponent/TableComponent";
import UsersHearder from "@/components/UserHeader/UsersHearder";
import { BasicPagination } from "@/components/pagination comp/Pagination";
// import BasicPagination from "@/components/pagination comp/Pagination";
import DeleteUserModal from "@/components/DeleteUserModal/DeleteUserModal";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import Calender2 from "@/components/ui/CustomButtonPrimary/calender2";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserList } from "@/hooks/react-qurey/query-hooks/userList.hooks";
import assets from "@/json/assets";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import MenuIcon from "@/json/icons/MenuIcon";
import { invoices } from "@/json/mock/tableData.mock";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDebouncedCallback } from "use-debounce";
import { Calendar, DateObject } from "react-multi-date-picker";
import dayjs from "dayjs";
import BlockUserModal from "@/components/BlockUserModal/BlockUserModal";
import ActiveUserModal from "@/components/ActiveUserModal/ActiveUserModal";
import DeleteUserModalFromLists from "@/components/DeleteUserModal/DeleteUserModalFromLists";
import ActiveUserModalFromLists from "@/components/ActiveUserModal/ActiveUserModalFromLists";
import BlockUserModalfromLists from "@/components/BlockUserModal/BlockUserModalFromLists";
interface popoverProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}
interface Member {
  [x: string]: any;
  company_role: string;
  description: string;
  email: string;
  firstName: string;
  lastName: string;
  parent_id: string;
  profilePicture: string;
  rating: string;
  role: string;
  uid: string;
  _id: string;
}
interface UserType {
  time: any;
  paymentMethods: string[];
  collections: any[]; // You might want to define a type for this array if possible
  country: string;
  createdAt: string; // Consider using Date type if date handling is important
  description: string;
  devices: string[]; // You might want to define a type for this array if possible
  email: string;
  firstName: string;
  isAccountVerified: boolean;
  isEmailVerified: boolean;
  languages: string[]; // You might want to define a type for this array if possible
  lastDelivery: string | null; // Consider using Date type if date handling is important
  lastName: string;
  messages: any[]; // You might want to define a type for this array if possible
  profilePicture: string;
  rating: string;
  reviews: any[]; // You might want to define a type for this array if possible
  role: "client" | "company" | "individual" | "all"; // Assuming role can only be one of these values
  services: any[]; // You might want to define a type for this array if possible
  status: string; // Consider defining a specific set of status values if they're limited
  twoFactorEnabled: boolean;
  uid: string;
  members_data: Member;
  updatedAt: string; // Consider using Date type if date handling is important
  userVerificationFiles: any[]; // You might want to define a type for this array if possible
  _id: string;
}

const PopOverComponent = ({
  label,
  children,
  className,
  openNEw,
  close,
  handleClosePopover,
}: any) => {
  const [open, setOpen] = useState<boolean>(openNEw == true && false);
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
        className="w-full max-w-[384px] bg-white rounded-xl border-none shadow-[1px_1px_30px_10px_rgba(0,0,0,0.07)]"
        align={"start"}
        onInteractOutside={() => setOpen(false)}
      >
        <div>{children}</div>
      </PopoverContent>
    </Popover>
  );
};

// const tabList=["All", "Clients", "Individual vendors", "Company vendors"]
const tabList = [
  { text: "All", value: "all" },
  { text: "Clients", value: "clients" },
  { text: "Individual vendors", value: "individual" },
  { text: "Company vendors", value: "company" },
];

export default function Index() {
  const [openNEw, setopenNEw] = useState(false);
  const [UserList, setUserList] = useState([]);

  const [selectedDate, setSelectedDate] = React.useState<any>("");
  const [isVerified, setisVerified] = useState(false);
  const [isUnverified, setisUnverified] = useState(false);

  const [values, setValues] = useState<any>(); // Use string[] type for the dates in the desired format
  const [calValues, setCalValues] = useState<any>([null, null]);

  console.log("values", values, calValues);

  // Function to format date to "MM/DD/YYYY"
  const formatDate = (date: Date): string => {
    let d = date,
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  };

  function convert(str: any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }

  const isWeekend = (date: Date): boolean => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 for Sunday, 6 for Saturday
  };

  const [searchValue, setsearchValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);

  // const [state, setState] = useState({
  //   isVerified: false,
  //   isUnverified: false,
  //   searchValue: "",
  //   isActive: false,
  //   minValue: "",
  //   maxValue: "",
  //   isBlocked: false,
  // });

  // const updateIsBlocked = (newValue: any) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     isActive: newValue,
  //   }));
  // };

  const [tabvalue, setTabvalue] = useState<any>("all");
  const [totalResData, setTotalResData] = useState<any>("");

  const [page, setPage] = useState<number>(1);
  const [action, setAction] = useState("");

  const [closePopover, setClosePopover] = useState<boolean>(false);
  const [actionModalOpen, setActionModalOpen] = useState<boolean>(false);

  const initialFilterOptions: any = {
    isActive: false,
    isUnverified: false,
    isVerified: false,
    isBlocked: false,
  };

  const [filterOptions, setFilterOptions] = useState<any>(initialFilterOptions);

  const handleClosePopover = (_status: boolean) => setClosePopover(_status);

  const handleMinChange = (event: any) => {
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event: any) => {
    setMaxValue(event.target.value);
  };

  const tableHeadList = [
    "User type",
    "User ID",
    "Name",
    "Email address",
    "Registration date",
    "Verification",
    "Notes",

    "Status",
    "",
  ];

  const tableHeadListForClientTab = [
    "User type",
    "User ID",
    "Name",
    "Email address",
    "Member",
    "Registration date",
    "Status",
    "",
  ];

  const tableHeadListForVendor = [
    "User type",
    "User ID",
    "Name",
    "Email address",
    "Member",
    "Registration date",
    "Verification",
    "Status",
    "",
  ];

  const { mutate: getUSERList, isLoading } = useUserList();

  const handleActiveChange = (event: any) => {
    setIsActive(event.target.checked);
  };

  const handleBlockedChange = (event: any) => {
    setIsBlocked(event.target.checked);
  };
  useEffect(() => {
    const payload = {
      page: 1,
      limit: 10,
      sort: {
        order: "",
        field: "",
      },
      search: searchValue || "",
      role: "all",
    };

    getUSERList(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        const categoryListData = response?.data?.data ?? [];

        setUserList(categoryListData);
        setTotalResData(response?.data);
      },
    });
  }, []);

  const recallApi = () => {
    const payload = {
      page: page,
      limit: 10,
      sort: {
        order: "",
        field: "",
      },
      search: searchValue || "",
      role: tabvalue,
    };

    getUSERList(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        const categoryListData = response?.data?.data ?? [];

        setUserList(categoryListData);
        setTotalResData(response?.data);
      },
    });
  };

  const handleTabClick = (value: string) => {
    console.log("Clicked tab value:", value);
    setTabvalue(value);

    // You can perform further actions based on the clicked tab value
    let statusValue = "";
    if (isActive) {
      statusValue = "Active";
    } else if (isBlocked) {
      statusValue = "Blocked";
    }

    let verificationStatus = "";
    if (isVerified) {
      verificationStatus = "Verified";
    } else if (isUnverified) {
      verificationStatus = "Unverified";
    }

    // Example code to construct payload
    const payload = {
      page: 1, // Use the updated value directly
      limit: 10,
      ...(maxValue !== "" &&
        minValue !== "" && {
          services_count: {
            max: maxValue,
            min: minValue,
          },
        }),
      registration_date: {
        start_date: selectedDate[0],
        end_date: selectedDate[1],
      },
      sort: {
        order: "",
        field: "",
      },
      ...(statusValue !== "" && { status: statusValue }), // Conditional inclusion of status property
      ...(verificationStatus !== "" && {
        verification_status: verificationStatus,
      }), // Conditional inclusion of verification_status property
      search: searchValue || "",
      role:
        value === "clients"
          ? "client"
          : value === "individual"
          ? "individual"
          : value === "company"
          ? "company"
          : "all",
    };
    // const payload = {
    //   page: 1,
    //   limit: 10,
    //   sort: {
    //     order: "",
    //     field: "",
    //   },
    //   search: searchValue || "",
    //   role:
    //     value === "clients"
    //       ? "client"
    //       : value === "individual"
    //       ? "individual"
    //       : value === "company"
    //       ? "company"
    //       : "all",
    // };
    getUSERList(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        const categoryListData = response?.data?.data ?? [];
        setUserList(categoryListData);
        setTotalResData(response?.data);
      },
    });
  };
  const handleRegistrationDateClick = (value: any) => {
    setValues(value);
    setCalValues([
      convert(value[0]?.toDate?.().toString()),
      convert(value[1]?.toDate?.().toString()),
    ]);
  };

  const cancelRegistrationDatefilter = () => {
    setValues(null);
    setCalValues([null, null]);
    // You can perform further actions based on the clicked tab value
    let statusValue = "";
    if (isActive) {
      statusValue = "Active";
    } else if (isBlocked) {
      statusValue = "Blocked";
    }

    let verificationStatus = "";
    if (isVerified) {
      verificationStatus = "Verified";
    } else if (isUnverified) {
      verificationStatus = "Unverified";
    }

    // Example code to construct payload
    const payload = {
      page: 1, // Use the updated value directly
      limit: 10,
      ...(maxValue !== "" &&
        minValue !== "" && {
          services_count: {
            max: maxValue,
            min: minValue,
          },
        }),
      // registration_date: {
      //   start_date: selectedDate[0].split("/").reverse().join("-"),
      //   end_date: selectedDate[1].split("/").reverse().join("-"),
      // },
      sort: {
        order: "",
        field: "",
      },
      ...(statusValue !== "" && { status: statusValue }), // Conditional inclusion of status property
      ...(verificationStatus !== "" && {
        verification_status: verificationStatus,
      }), // Conditional inclusion of verification_status property
      search: searchValue || "",
      role:
        tabvalue === "clients"
          ? "client"
          : tabvalue === "individual"
          ? "individual"
          : tabvalue === "company"
          ? "company"
          : "all",
    };
    getUSERList(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        const categoryListData = response?.data?.data ?? [];
        setUserList(categoryListData);
        setTotalResData(response?.data);
        handleClosePopover(true);
      },
    });
  };

  // // Check if data is loading
  const debounced = useDebouncedCallback(
    (value: string) => {
      console.log("debounce", value);

      let statusValue = "";
      if (isActive) {
        statusValue = "Active";
      } else if (isBlocked) {
        statusValue = "Blocked";
      }

      let verificationStatus = "";
      if (isVerified) {
        verificationStatus = "Verified";
      } else if (isUnverified) {
        verificationStatus = "Unverified";
      }

      const payload = {
        page: 1, // Use the updated value directly
        limit: 10,
        ...(maxValue !== "" &&
          minValue !== "" && {
            services_count: {
              max: maxValue,
              min: minValue,
            },
          }),
        registration_date: {
          start_date: selectedDate[0],
          end_date: selectedDate[1],
        },
        sort: {
          order: "",
          field: "",
        },
        ...(statusValue !== "" && { status: statusValue }), // Conditional inclusion of status property
        ...(verificationStatus !== "" && {
          verification_status: verificationStatus,
        }), // Conditional inclusion of verification_status property
        search: value || "",
        role:
          tabvalue === "clients"
            ? "client"
            : tabvalue === "individual"
            ? "individual"
            : tabvalue === "company"
            ? "company"
            : "all",
      };

      // const payload = {
      //   page: 1,
      //   limit: 10,
      //   sort: {
      //     order: "",
      //     field: "",
      //   },
      //   search: value || "",
      //   role:
      //     tabvalue === "clients"
      //       ? "client"
      //       : tabvalue === "individual"
      //       ? "individual"
      //       : tabvalue === "company"
      //       ? "company"
      //       : "all",
      // };

      getUSERList(payload, {
        onSuccess: (response: { data: { data: never[] } }) => {
          const categoryListData = response?.data?.data ?? [];
          setUserList(categoryListData);
          setTotalResData(response?.data);
        },
      });
    },
    500,
    { maxWait: 2000 }
  );

  useEffect(
    () => () => {
      debounced.flush();
    },
    [debounced]
  );

  const handleInputChange = (event: string) => {
    console.log("event.target.value", event);
    setsearchValue(event);
    debounced(event);
  };

  const handleChangePagination = (event: any, value: any) => {
    setPage(value); // Update the page state

    let statusValue = "";
    if (isActive) {
      statusValue = "Active";
    } else if (isBlocked) {
      statusValue = "Blocked";
    }

    let verificationStatus = "";
    if (isVerified) {
      verificationStatus = "Verified";
    } else if (isUnverified) {
      verificationStatus = "Unverified";
    }

    // Example code to construct payload
    const payload = {
      page: value, // Use the updated value directly
      limit: 10,
      ...(maxValue !== "" &&
        minValue !== "" && {
          services_count: {
            max: maxValue,
            min: minValue,
          },
        }),
      registration_date: {
        start_date: selectedDate[0],
        end_date: selectedDate[1],
      },
      sort: {
        order: "",
        field: "",
      },
      ...(statusValue !== "" && { status: statusValue }), // Conditional inclusion of status property
      ...(verificationStatus !== "" && {
        verification_status: verificationStatus,
      }), // Conditional inclusion of verification_status property
      search: searchValue || "",
      role:
        tabvalue === "clients"
          ? "client"
          : tabvalue === "individual"
          ? "individual"
          : tabvalue === "company"
          ? "company"
          : "all",
    };

    // const payload = {
    //   page: value, // Use the updated value directly
    //   limit: 10,
    //   sort: {
    //     order: "",
    //     field: "",
    //   },
    //   // status: isActive == true ? "Active": "" || isBlocked == true ? "Blocked" : "" ,
    //   search: searchValue || "",
    //   role:
    //     tabvalue === "clients"
    //       ? "client"
    //       : tabvalue === "individual"
    //       ? "individual"
    //       : tabvalue === "company"
    //       ? "company"
    //       : "all",
    // };
    getUSERList(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        const categoryListData = response?.data?.data ?? [];
        setUserList(categoryListData);
        setTotalResData(response?.data);
      },
    });
  };

  const handelFlter: MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setPage((prevState: any) => {
      // Example logic to update the page state
      return prevState + 1;
    });

    // Example code to handle status and verification status
    let statusValue = "";
    if (isActive) {
      statusValue = "Active";
    } else if (isBlocked) {
      statusValue = "Blocked";
    }

    let verificationStatus = "";
    if (isVerified) {
      verificationStatus = "Verified";
    } else if (isUnverified) {
      verificationStatus = "Unverified";
    }

    // Example code to construct payload
    const payload = {
      page: page, // Use the updated value directly
      limit: 10,
      ...(maxValue !== "" &&
        minValue !== "" && {
          services_count: {
            max: maxValue,
            min: minValue,
          },
        }),
      ...(!calValues.includes(null)
        ? {
            registration_date: {
              start_date: calValues[0].split("/").reverse().join("-"),
              end_date: calValues[1].split("/").reverse().join("-"),
            },
          }
        : {}),
      sort: {
        order: "",
        field: "",
      },
      ...(statusValue !== "" && { status: statusValue }), // Conditional inclusion of status property
      ...(verificationStatus !== "" && {
        verification_status: verificationStatus,
      }), // Conditional inclusion of verification_status property
      search: searchValue || "",
      role:
        tabvalue === "clients"
          ? "client"
          : tabvalue === "individual"
          ? "individual"
          : tabvalue === "company"
          ? "company"
          : "all",
    };

    // Example code to call getUSERList function
    getUSERList(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        setopenNEw(true);
        const categoryListData = response?.data?.data ?? [];
        setUserList(categoryListData);
        setTotalResData(response?.data);
        handleClosePopover(true);
      },
    });
  };

  const router = useRouter();

  const clearCategoryFilter = () => {};
  const tabCountHandler = (tab: string, value: any) => {
    const { all, client, individual, company } = value ?? {};
    switch (tab) {
      case "all":
        return all;
      case "clients":
        return client;
      case "individual":
        return individual;
      case "company":
        return company;
      default:
        return 0;
    }
  };
  const openActionModal = useCallback(
    (_status: boolean) => setActionModalOpen(_status),
    [actionModalOpen]
  );
  console.log("actionModalOpen", UserList);

  return (
    <div className="py-10">
      <Container>
        <UsersHearder
          onInputChange={handleInputChange}
          handleTabClick={handleTabClick}
          searchValue={searchValue}
          dropdownShow={false}
          className="mb-8"
        />

        <Tabs
          defaultValue={tabvalue}
          onValueChange={(_tab: string) => handleTabClick(_tab)}
          className="w-full"
        >
          <TabsList className="flex flex-wrap items-center justify-start mb-8">
            {tabList.map((_tab: any) => (
              <TabsTrigger
                key={_tab?.value}
                value={_tab?.value}
                className="pb-6 text-base rounded-none mr-6 text-gray-900 sm:pb-2 sm:mb-2 sm:w-full sm:justify-start"
                // onClick={() => handleTabClick("all")}
              >
                {_tab?.text}&nbsp;
                <span className="text-sm text-gray-400">
                  ({tabCountHandler(_tab?.value, totalResData?.grouped_counts)})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={tabvalue}>
            <div>
              <div className="flex items-center flex-wrap mb-8">
                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  openNEw={openNEw}
                  label="Registration date"
                  className="mr-4 sm:mb-4 sm:w-full sm:mr-0"
                  // align={"start"}
                >
                  <div>
                    <div className="pb-4 flex items-center border-b border-solid border-gray-200 justify-between">
                      <div className="flex items-center w-[48%]">
                        <p className="text-sm text-gray-400 pr-2">From</p>
                        <Input
                          type="text"
                          // placeholder={selectedDate}
                          value={
                            calValues[0] && calValues[0] != "aN/aN/NaN"
                              ? calValues[0]
                              : ""
                          }
                          className="max-w-[120px] h-[36px] p-2"
                          disabled
                        />
                      </div>
                      <div className="flex items-center w-[48%]">
                        <p className="text-sm text-gray-400 pr-2">To</p>
                        <Input
                          type="text"
                          // placeholder="12/10/2023"
                          // value={moment(selectedDate[1]).format("L")}
                          value={
                            calValues[1] && calValues[1] != "aN/aN/NaN"
                              ? calValues[1]
                              : ""
                          }
                          className="max-w-[120px] h-[36px] p-2"
                          disabled
                        />
                      </div>
                    </div>

                    {/* <Calender2
                      mode="multiple"
                      // selected={date}
                      // handleDateChange={handleDateChange}
                      // onSelect={setDate}
                      setSelectedDate={setSelectedDate}
                      className="w-full md:!min-w-[90%]"
                    /> */}
                    {/* <Calendar
                      value={values}
                      onChange={setValues}
                      maxDate={new Date()}
                      range
                      rangeHover
                    /> */}
                    <Calendar
                      // value={values.map((date) => new Date(date))} // Convert back to Date objects for Calendar
                      // onChange={handleDateChange}
                      maxDate={new Date()}
                      value={values}
                      hideYear
                      weekStartDayIndex={1}
                      // onChange={setValues}
                      onChange={(e: any) => {
                        handleRegistrationDateClick(e);
                      }}
                      range
                      rangeHover
                      // disabledDates={[(date :any) => isWeekend(date)]}
                    />
                    <div className="pt-4 mt-3 flex items-center justify-end ml-auto border-t border-solid border-gray-200">
                      <button
                        type="button"
                        className="bg-transparent border-gray-200 border py-2 px-4 rounded-[20px] text-gray-900 mr-[10px] hover:text-white hover:bg-gray-500"
                        onClick={cancelRegistrationDatefilter}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="bg-gray-900 py-2 px-4 rounded-[20px] text-white hover:bg-gray-500"
                        onClick={handelFlter}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </PopOverComponent>

                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  label="Status"
                  className="mr-4 sm:mb-4 sm:w-full sm:mr-0"
                >
                  <p className="text-gray-900 font-satoshi_medium mb-2">
                    Status
                  </p>
                  <div className="pb-3 flex items-center">
                    <Checkbox
                      id="Active"
                      icon={<CheckboxTickIcon />}
                      className="rounded-[4px] border-gray-200"
                      // checked={isActive}
                      // onChange={handleActiveChange}
                      checked={isActive}
                      onClick={() => setIsActive(!isActive)}
                    />

                    <label
                      htmlFor="Active"
                      className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-3"
                    >
                      Active
                    </label>
                  </div>

                  <div className="pb-4 flex items-center border-b border-solid border-gray-200">
                    <Checkbox
                      id="Blocked"
                      icon={<CheckboxTickIcon />}
                      className="rounded-[4px] border-gray-200"
                      checked={isBlocked}
                      onClick={() => setIsBlocked(!isBlocked)}
                    />
                    <label
                      htmlFor="Blocked"
                      className="text-red-600 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-3"
                    >
                      Blocked
                    </label>
                  </div>
                  <div className="flex item-center ml-[40px] pt-3">
                    <button
                      type="button"
                      className="bg-gray-900 py-2 px-4 rounded-[20px] text-white hover:bg-gray-500"
                      onClick={handelFlter}
                    >
                      Show results
                    </button>
                  </div>
                </PopOverComponent>

                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  label="Verification"
                  className="mr-4 sm:mb-4 sm:w-full sm:mr-0"
                >
                  <p className="text-gray-900 font-satoshi_medium mb-2">
                    Verification
                  </p>
                  <div className="pb-3 flex items-center">
                    <Checkbox
                      id="Verified"
                      icon={<CheckboxTickIcon />}
                      className="rounded-[4px] border-gray-200"
                      checked={isVerified}
                      onClick={() => setisVerified(!isVerified)}
                    />
                    <label
                      htmlFor="Verified"
                      className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-3"
                    >
                      Verified
                    </label>
                  </div>
                  <div className="pb-4 flex items-center border-b border-solid border-gray-200">
                    <Checkbox
                      id="Unverified"
                      icon={<CheckboxTickIcon />}
                      className="rounded-[4px] border-gray-200"
                      checked={isUnverified}
                      onClick={() => setisUnverified(!isUnverified)}
                    />
                    <label
                      htmlFor="Unverified"
                      className="text-red-600 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-3"
                    >
                      Unverified
                    </label>
                  </div>
                  <div className="flex item-center ml-[40px] pt-3">
                    <button
                      type="button"
                      className="bg-gray-900 py-2 px-4 rounded-[20px] text-white hover:bg-gray-500"
                      onClick={handelFlter}
                    >
                      Show results
                    </button>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  close={closePopover}
                  handleClosePopover={handleClosePopover}
                  label="Number of services"
                  className="sm:w-full"
                >
                  <p className="text-gray-900 font-satoshi_medium mb-2">
                    Number of services
                  </p>
                  <div className="pb-4 flex items-center border-b border-solid border-gray-200 justify-between">
                    <div className="flex items-center w-[48%]">
                      <p className="text-sm text-gray-400 pr-2">Min</p>
                      <Input
                        type="text"
                        placeholder="10"
                        className="max-w-[69px] h-[36px] p-2"
                        value={minValue}
                        onChange={handleMinChange}
                      />
                    </div>
                    <div className="flex items-center w-[48%]">
                      <p className="text-sm text-gray-400 pr-2">Max</p>
                      <Input
                        type="text"
                        placeholder="20"
                        className="max-w-[69px] h-[36px] p-2"
                        value={maxValue}
                        onChange={handleMaxChange}
                      />
                    </div>
                  </div>
                  <div className="flex item-center ml-auto pt-3">
                    <button
                      type="button"
                      className="bg-gray-900 py-2 ml-auto px-4 rounded-[20px] text-white hover:bg-gray-500"
                      onClick={handelFlter}
                    >
                      Show results
                    </button>
                  </div>
                </PopOverComponent>
              </div>

              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <TableComponent
                    theadList={
                      tabvalue != "clients"
                        ? tableHeadListForVendor
                        : tableHeadListForClientTab
                    }
                    tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[10px] py-3 bg-gray-50 border-b border-gray-100"
                    className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                  >
                    {UserList?.length > 0 && UserList?.length ? (
                      <>
                        {
                          // invoices
                          UserList?.map((invoice: UserType, index: any) => (
                            <TableRow key={index}>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[10px] text-base ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                {invoice.role}
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[10px] text-base ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                {" "}
                                {invoice.uid}
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[10px] text-base w-[196px] ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                <div className="flex items-center">
                                  {invoice?.profilePicture == "" ? (
                                    <i className="inline-flex items-center justify-center mr-3 w-[32px] h-[32px]">
                                      <Image
                                        src="/images/decline_btn.svg"
                                        alt="image"
                                        width={32}
                                        height={32}
                                        className="w-[100%] h-[100%] object-cover rounded-full"
                                      />
                                    </i>
                                  ) : (
                                    <i className="inline-flex items-center justify-center mr-3 w-[32px] h-[32px]">
                                      <Image
                                        src={invoice.profilePicture}
                                        alt="image"
                                        width={32}
                                        height={32}
                                        className="w-[100%] h-[100%] object-cover rounded-full"
                                      />
                                    </i>
                                  )}
                                  {invoice?.firstName} {invoice?.lastName}
                                </div>
                              </TableCell>

                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[10px] text-base ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                {invoice?.email}
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[10px] text-base mw-[143px] ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                {invoice?.members_data?.length > 0 ? (
                                  <div className="flex -space-x-1 overflow-hidden">
                                    {invoice?.members_data
                                      ?.slice(0, 5)
                                      .map((_img: any, index: number) => (
                                        <Image
                                          key={index + 1}
                                          className="inline-block h-[32px] w-[32px] rounded-full ring-2 ring-white"
                                          alt=""
                                          src={
                                            _img?.profilePicture ??
                                            assets.member1
                                          }
                                          width={32}
                                          height={32}
                                        />
                                      ))}
                                    {invoice?.members_data?.length > 5 && (
                                      <div className="inline-flex justify-center items-center  h-[32px] w-[32px]  rounded-full ring-2 ring-white bg-[#F4F4F5]">
                                        <p className="font-[12px] font-semibold">
                                          +{invoice?.members_data?.length - 5}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="inline-flex justify-center items-center  h-[32px] w-[32px]  rounded-full ring-2 ring-white bg-[#F4F4F5]">
                                    <p className="font-[12px] font-semibold">
                                      -
                                    </p>
                                  </div>
                                )}
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[10px] text-base ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                {moment(invoice?.createdAt).utc().format("ll")}
                              </TableCell>
                              {tabvalue != "clients" && (
                                <TableCell
                                  className={`border-b border-gray-100 py-4 px-[10px] text-base ${
                                    invoices?.length - 1 === index && "border-0"
                                  }`}
                                >
                                  {invoice?.isAccountVerified !== false ? (
                                    <p>Verified</p>
                                  ) : (
                                    <p className="text-red-500">Unverified </p>
                                  )}

                                  <p className="text-sm text-gray-500">
                                    {invoice?.time}
                                  </p>
                                </TableCell>
                              )}

                              <TableCell
                                className={`border-b border-gray-100 py-4 px-[10px] ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                <Badge
                                  className={` 
              ${
                invoice?.status === "Active"
                  ? "bg-green-50"
                  : invoice?.status === "Blocked"
                  ? "bg-red-50"
                  : ""
              }
              
               ${
                 invoice?.status === "Active"
                   ? "text-[#04D100]"
                   : invoice?.status === "Blocked"
                   ? "text-[#EF4444]"
                   : ""
               } border-[1px] 
              
              ${
                invoice?.status === "Active"
                  ? "border-green-100"
                  : invoice?.status === "Blocked"
                  ? "border-red-100"
                  : ""
              }
              py-[6px] px-[10px] font-satoshi_medium text-sm`}
                                >
                                  {invoice?.status}
                                </Badge>
                              </TableCell>
                              <TableCell
                                className={`border-b border-gray-100 w-[53px] py-4 px-6 ${
                                  invoices?.length - 1 === index && "border-0"
                                }`}
                              >
                                <DropdownMenu>
                                  <DropdownMenuTrigger>
                                    <Button className="p-0  bg-transparent hover:bg-inherit">
                                      <MenuIcon />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className="relative z-10 bg-white p-0">
                                    <DropdownMenuItem className=" py-3 px-5 hover:text-red-500  ">
                                      <Link
                                        href={{
                                          pathname:
                                            invoice?.role === "company"
                                              ? "/admin/dashboard/user/company-vendor-profile/"
                                              : invoice?.role === "client"
                                              ? "/admin/dashboard/user/client-profile/"
                                              : invoice?.role === "individual"
                                              ? "/admin/dashboard/user/individual-vendor-profile/"
                                              : "/admin/dashboard/user/client-profile/",
                                          query: { id: invoice?._id },
                                        }}
                                      >
                                        <p className=" hover:text-gray-500">
                                          View profile
                                        </p>
                                      </Link>
                                    </DropdownMenuItem>
                                    <div className="py-3 px-5 hover:text-red-500 border-t-2 ">
                                      {" "}
                                      {invoice?.status === "Active" ? (
                                        <BlockUserModalfromLists
                                          // handleClickUpdate={() => {}}
                                          userDetails={invoice}
                                          reload={recallApi}
                                        />
                                      ) : (
                                        <ActiveUserModalFromLists
                                          // handleClickUpdate={() => {}}
                                          userDetails={invoice}
                                          reload={recallApi}
                                        />
                                      )}
                                    </div>
                                    {/* <DropdownMenuItem className="border-t border-gray-200 border-solid py-3 px-5 "> */}
                                    {/* {invoice?.status === "Active" ? (
                                      <BlockUserModalfromLists
                                        // handleClickUpdate={() => {}}
                                        userDetails={invoice}
                                        reload={recallApi}
                                      />
                                    ) : (
                                      <ActiveUserModalFromLists
                                        // handleClickUpdate={() => {}}
                                        userDetails={invoice}
                                        reload={recallApi}
                                      />
                                    )} */}
                                    {/* <p className=" hover:text-gray-500">
                                        Block profile
                                      </p> */}

                                    {/* {invoice?.status === "Active" ? (
                                        <BlockUserModal
                                          // open={actionModalOpen}
                                          // modalHandler={openActionModal}
                                          handleClickUpdate={() => {
                                            // openActionModal(false);
                                          }}
                                          userDetails={invoice}
                                        />
                                      ) : (
                                        <ActiveUserModal
                                          // open={actionModalOpen}
                                          // modalHandler={openActionModal}
                                          handleClickUpdate={() => {}}
                                          userDetails={invoice}
                                        />
                                      )} */}
                                    {/* </DropdownMenuItem> */}

                                    {/* Delete Modal */}
                                    <div className="py-3 px-5 hover:text-red-500 border-t-2 ">
                                      <DeleteUserModalFromLists
                                        userDetails={invoice}
                                        reload={getUSERList}
                                      />
                                    </div>
                                    {/* <DropdownMenuItem className="text-red-500 border-t border-gray-200 border-solid py-3 px-5"> */}
                                    {/* <DeleteUserModalFromLists
                                      userDetails={invoice}
                                      reload={getUSERList}
                                    /> */}
                                    {/* <DeleteUserModal
                                        userDetails={invoice}
                                        handleClickDelete={() => {}}
                                      /> */}
                                    {/* </DropdownMenuItem> */}
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))
                        }
                      </>
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8}>
                          <div className="w-full text-center py-20 md:py-10">
                            <h2 className="text-[18px] text-gray-900 mb-2">
                              It&apos;s still empty here...
                            </h2>
                            <p className="text-[16px] text-gray-500">
                              There are no users registered yet
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableComponent>
                  {totalResData?.pages > 1 && (
                    <div className="py-8">
                      {/* <CommonPagination /> */}
                      <BasicPagination
                        // setpage={setpage}
                        totalResData={totalResData}
                        handleChange={handleChangePagination}
                      />
                    </div>
                  )}{" "}
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
}
