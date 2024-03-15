"use client";
import io from "socket.io-client";
import ActiveUserModal from "@/components/ActiveUserModal/ActiveUserModal";
import BlockUserModal from "@/components/BlockUserModal/BlockUserModal";
import CommonPagination from "@/components/CommonPagination/CommonPagination";
import CommonSelect from "@/components/CommonSelect/CommonSelect";
import dayjs from "dayjs";
import CommonTextArea from "@/components/CommonTextArea/CommonTextArea";
import Container from "@/components/Container";
import DeleteCardModal from "@/components/DeleteCardModal/DeleteCardModal";
import DeleteUserModal from "@/components/DeleteUserModal/DeleteUserModal";
import Loading from "@/components/Loading/Loading";
import MessageInput from "@/components/MessageInput/MessageInput";
import { MessageThumb } from "@/components/MessageThumb/MessageThumb";
import StarRating from "@/components/Ratting/Ratting";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import TableComponent from "@/components/TableComponent/TableComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useclientprofilepayoutList,
  useclientprofilereservationList,
} from "@/hooks/react-qurey/query-hooks/adminclientProfile.hook";
import {
  useUSERDEATILS,
  useUSERdelete,
  useUserupdate,
  useUserverify,
} from "@/hooks/react-qurey/query-hooks/userList.hooks";
import useNotiStack from "@/hooks/useNotistack";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import IncrementIcon from "@/json/icons/IncrementIcon";
import MasterIcon from "@/json/icons/MasterIcon";
import MsgTick from "@/json/icons/MsgTick";
import PaypalIcon from "@/json/icons/PaypalIcon";
import { SeachBlack } from "@/json/icons/SeachBlack";
import VisaIcon from "@/json/icons/VisaIcon";
import { invoices3, invoices4 } from "@/json/mock/tableData.mock";
import { request } from "http";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { any } from "zod";
import { BasicPagination } from "@/components/pagination comp/Pagination";
import { AdminClientpayouts } from "@/typescript/Interfaces/adminClientpayout.interface";
import { PrimaryURL } from "@/api/endpoints";
import { ChatReciverIDtype } from "@/typescript/Interfaces/chat.interface";
import { parseCookies } from "nookies";
import { useChatLists } from "@/hooks/react-qurey/query-hooks/chat.hook";
interface User {
  PaymentMethods: any[]; // Array of payment methods (type can be specified if known)
  collections: any[]; // Array of collections (type can be specified if known)
  commission_rate: number | null; // Commission rate (can be a number or null)
  country: string; // Country
  createdAt: string; // Date and time of creation
  description: string; // Description or bio
  devices: any[]; // Array of devices (type can be specified if known)
  email: string; // Email address
  firstName: string; // First name
  isAccountVerified: boolean; // Boolean indicating if the account is verified
  isDeleted: boolean; // Boolean indicating if the account is deleted
  isEmailVerified: boolean; // Boolean indicating if the email is verified
  languages: string[]; // Array of languages known
  lastDelivery: any; // Information about the last delivery (type can be specified if known)
  lastName: string; // Last name
  messages: any[]; // Array of messages (type can be specified if known)
  profilePicture: string; // URL or path to the profile picture
  rating: string; // Rating
  rating_data: { total_ratings_count: string; avg_rating: string }; // Object containing rating data
  reviews: any[]; // Array of reviews (type can be specified if known)
  role: string; // Role
  services: any[]; // Array of services (type can be specified if known)
  services_count: number; // Count of services
  status: string; // Status
  twoFactorEnabled: boolean; // Boolean indicating if two-factor authentication is enabled
  uid: string; // User ID or unique identifier
  updatedAt: string; // Date and time of last update
  userVerificationFiles: any[]; // Array of user verification files (type can be specified if known)
  _id: string; // MongoDB document ID
}

export default function Index() {
  const selectApi = [
    {
      value: "10%",
      label: "10%",
    },
    {
      value: "20%",
      label: "20%",
    },
    {
      value: "30%",
      label: "30%",
    },
  ];
  const tableHeadList = [
    "Date",
    "Withdrawal type",
    "Amount",
    "Transaction ID",
    "",
  ];

  const tableHeadListForReservation = [
    "Service",
    "Vendor",
    "Date",
    "Amount",
    "Status",
  ];
  const router = useRouter();
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const idValue = searchParams.get("id");
  console.log("🚀 ~ Index ~ idValue:", idValue);
  const { toastSuccess, toastError } = useNotiStack();
  const {
    data: UERDEATILS,
    refetch,
    isLoading: profileLoading,
  } = useUSERDEATILS(idValue);
  const { data: UERDelete, refetch: deleterefetch } = useUSERdelete(idValue);
  const { mutate: getUSERupdate, isLoading } = useUserupdate();
  const { mutate, isLoading: userverifyLoding } = useUserverify();

  const handleClickVerify = () => {
    const payload = {
      id: idValue,
    };

    // Call the update function directly here instead of inside useEffect
    mutate(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        // For example, navigate to another page
        // router.push("/admin/dashboard/user/");

        // Invalidate the query to refetch the updated data
        queryClient.invalidateQueries(["USER_DETAILS"]);
        refetch();
      },
    });
  };

  const handleClickUpdate = () => {
    const payload = {
      id: idValue,
      status:
        UERDEATILS?.data?.data?.status == "Blocked" ? "Active" : "Blocked",
    };

    // Call the update function directly here instead of inside useEffect
    getUSERupdate(payload, {
      onSuccess: (response: { data: { data: never[] } }) => {
        // For example, navigate to another page
        router.push("/admin/dashboard/user/");

        // Invalidate the query to refetch the updated data
        queryClient.invalidateQueries(["USER_DETAILS"]);
      },
    });
  };

  // const handleClickDelete = () => {
  //   toastSuccess("User deleted successfully");
  // };
  const handleClickDelete = async () => {
    try {
      // Call the 'deleterefetch' function when the onClick event occurs
      await deleterefetch();
      // Invalidate the query to refetch the updated data
      queryClient.invalidateQueries(["USER_DETAILS"]);
      // Show success toast
      router.push("/admin/dashboard/user/");
      toastSuccess("User deleted successfully");
    } catch (error) {
      // Handle error
      console.error("Error deleting user:", error);
      // Show error toast
      toastError("Failed to delete user");
    }
  };

  console.log("🚀 ~ Index ~ UERDEATILS:", UERDEATILS?.data?.data);

  // Fetch Client Reservation Details for Specific Clients
  const [page, setPage] = useState<Number>(1);
  const [limit, setLimit] = useState<Number>(10);
  const [clientreservation, setClientReservation] = useState<any>([]);
  // const [setGroupCounts] = useState<any>(
  //   {}
  // );
  const {
    mutate: clientprofilereservtaions,
    isLoading: clientprofilereservationListloading,
  } = useclientprofilereservationList();

  const FetchClientReservationFunction = async () => {
    clientprofilereservtaions(
      {
        page: page,
        limit: limit,
        client_id: idValue,
      },
      {
        onSuccess: (response: any) => {
          console.log("Tranction Lists:- ", response?.data);
          const { data, pages } = response?.data ?? {};
          // setGroupCounts(grouped_counts);
          setClientReservation(response?.data);
        },
        onError: () => {},
      }
    );
  };

  useEffect(() => {
    FetchClientReservationFunction();
  }, [page, limit, idValue]);

  console.log("clientreservation", clientreservation);

  const handleChangePagination = (event: any, value: any) => {
    setPage(value);
  };

  // Fetch Client Payout Lists Details for Specific Clients
  const [clientpayoutlist, setClientpayoutlist] = useState<any>([]);
  const {
    mutate: clientprofilepayouts,
    isLoading: clientprofilepayoutsloading,
  } = useclientprofilepayoutList();

  const ClientFetchPayoutLists = async () => {
    clientprofilepayouts(
      {
        page: page,
        limit: limit,
        client_id: idValue,
      },
      {
        onSuccess: (response: any) => {
          console.log("Payout Lists:- ", response?.data);
          const { data, pages } = response?.data ?? {};
          // setGroupCounts(grouped_counts);
          setClientpayoutlist(response?.data);
        },
        onError: () => {},
      }
    );
  };

  useEffect(() => {
    ClientFetchPayoutLists();
  }, [page, limit, idValue]);

  // Chat Implementations
  const [roomDetails, setRoomDetails] = useState<any>({});

  useEffect(() => {
    // const socket = io(PrimaryURL);
    const cookies = parseCookies();
    const token = cookies?.atHomee_token;
    const socket = io(PrimaryURL, {
      extraHeaders: { token: token },
    });
    socket.on("connect", () => {
      console.log(`Socket ${socket.id} connected.`);
      socket.emit("createRoom", { receiver_id: idValue });
      socket.emit("test");
      console.log(
        `Socket createRoom event emitted with receiver_id: ${idValue}`
      );
    });

    socket.on("createRoom", (data) => {
      console.log(" Socket Room created:", data);
      setRoomDetails(data);
    });

    socket.on("test", (data) => {
      console.log("Socket data", data);
    });
    return () => {
      socket.disconnect();
    };
  }, [idValue]);

  console.log("roomDetails", roomDetails);
  const [clientchatlists, setClientchartlists] = useState([]);
  const { mutate: chatlists, isLoading: chatloading } = useChatLists();
  const FetchChatLists = async () => {
    const payload = {
      page: 1,
      limit: 10,
      room_id: roomDetails?._id,
    };
    chatlists(payload, {
      onSuccess: (response: any) => {
        console.log("chatres", response);
        setClientchartlists(response?.data);
      },
      onError: () => {
        console.log("Chat Error");
      },
    });
  };
  useEffect(() => {
    FetchChatLists();
  }, [roomDetails?._id]);

  console.log("clientchatlists", clientchatlists);

  return (
    <div className="pt-5 pb-20 sm:pb-5">
      {profileLoading || userverifyLoding ? (
        <Loading />
      ) : (
        <>
          {UERDEATILS ? (
            <>
              {" "}
              <Container>
                <div className="flex items-center mb-8">
                  <Link
                    href="/admin/dashboard/user/"
                    className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
                  >
                    <i className="pr-4">
                      <ArrowBackIcon />
                    </i>
                    Back
                  </Link>
                </div>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-1/3 px-4 md:w-full">
                    <div className="cmn_box p-6 mb-8 rounded-xl border border-gray-50">
                      <div className="flex flex-wrap justify-between items-center mb-6">
                        <h3 className="lg:mb-2">Basic information</h3>
                        <Button variant="outline" className="border-gray-200">
                          Public profile
                        </Button>
                      </div>
                      <div className="relative flex flex-wrap items-center mb-6">
                        <figure className="text-0 leading-none mr-4 relative w-10 h-10 flex items-center justify-center">
                          <Image
                            className="w-full h-full object-cover rounded-full"
                            src={assets.imgaboutDetails1}
                            alt=""
                            width={64}
                            height={64}
                          />
                          <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                        </figure>
                        <div className="relative">
                          <h5 className="text-[18px] font-satoshi_medium">
                            {UERDEATILS?.data?.data?.firstName}{" "}
                            {UERDEATILS?.data?.data?.lastName}
                          </h5>
                          <div className="flex items-center ">
                            <p className="text-[12px] font-satoshi_regular">
                              {UERDEATILS?.data?.data?.rating}
                              {/* 4.6 */}
                            </p>
                            <StarRating totalStars={1} className="mx-1" />
                            <span className="text-gray-400 text-[12px]">
                              (
                              {
                                UERDEATILS?.data?.data?.rating_data
                                  ?.total_ratings_count
                              }
                              )
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pb-5 border-b border-gray-100">
                        <p className="text-gray-500 text-sm">User ID</p>
                        <h4 className=" text-base font-satoshi_medium">
                          {UERDEATILS?.data?.data?.uid}
                        </h4>
                      </div>
                      <div className="py-5 border-b border-gray-100">
                        <p className="text-gray-500 text-sm">Email</p>
                        <h4 className=" text-base font-satoshi_medium">
                          {UERDEATILS?.data?.data.email}
                        </h4>
                      </div>
                      <div className="pt-4">
                        <p className="text-gray-500 text-sm mb-2">
                          Credit/debit cards and bank accounts
                        </p>
                        -
                        {/* <div className="flex justify-between items-center border-b border-gray-100 py-3">
                  <p className="flex items-center text-sm font-satoshi_medium">
                    Ending in 6375{" "}
                    <span className=" inline-flex items-center justify-center ml-1">
                      <VisaIcon />
                    </span>{" "}
                  </p>
                  <div>
                    <DeleteCardModal />
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 py-3">
                  <p className="flex items-center text-sm font-satoshi_medium">
                    juliabrown@gmail.com{" "}
                    <span className=" inline-flex items-center justify-center ml-1">
                      <PaypalIcon />
                    </span>{" "}
                  </p>
                  <div>
                    <DeleteCardModal />
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 py-3">
                  <p className="flex items-center text-sm font-satoshi_medium">
                    Ending in 6375{" "}
                    <span className=" inline-flex items-center justify-center ml-1">
                      <MasterIcon />
                    </span>{" "}
                  </p>
                  <div>
                    <DeleteCardModal />
                  </div>
                </div> */}
                      </div>
                    </div>

                    <div className="cmn_box p-6 rounded-xl border border-gray-50">
                      <div className="flex flex-wrap justify-between items-center mb-6">
                        <h3>Account details</h3>
                      </div>

                      <div className="pb-5 border-b border-gray-100">
                        <p className="text-gray-500 text-sm">
                          Registration Date
                        </p>
                        <h4 className=" text-base font-satoshi_medium">
                          {moment(UERDEATILS?.data?.data?.createdAt).format(
                            "MMM D, YYYY"
                          )}
                          {/* May 24, 2024 */}
                        </h4>
                      </div>
                      <div className="py-5 border-b border-gray-100">
                        <p className="text-gray-500 text-sm">User Type</p>
                        <h4 className=" text-base font-satoshi_medium">
                          Client
                        </h4>
                      </div>
                      {/* <div className="py-5 border-b border-gray-100">
                        <CommonSelect
                          labelPlaceholder="Commission rate"
                          options={selectApi}
                        />
                      </div> */}
                      <div className="py-5 border-b border-gray-100 flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">Status</p>
                          <h4 className=" text-base font-satoshi_medium">
                            {UERDEATILS?.data?.data?.status}
                          </h4>
                        </div>
                        <div className="flex items-center">
                          <div>
                            {UERDEATILS?.data?.data?.status !== "Blocked" ? (
                              <BlockUserModal
                                handleClickUpdate={handleClickUpdate}
                                userDetails={UERDEATILS?.data?.data}
                              />
                            ) : (
                              <ActiveUserModal
                                handleClickUpdate={handleClickUpdate}
                                userDetails={UERDEATILS?.data?.data}
                              />
                            )}
                          </div>
                          <div>
                            <DeleteUserModal
                              userDetails={UERDEATILS?.data?.data}
                              handleClickDelete={handleClickDelete}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="py-5 border-b border-gray-100">
                        <div className="flex flex-wrap items-center mb-2 justify-between">
                          <div className="pr-2">
                            <p className="text-gray-500 text-sm">
                              Verification
                            </p>
                            <h4
                              className={`text-base mb-0 font-satoshi_medium ${
                                UERDEATILS?.data?.data?.isAccountVerified ==
                                false
                                  ? "text-red-500"
                                  : ""
                              }`}
                            >
                              {UERDEATILS?.data?.data?.isAccountVerified ==
                              false
                                ? "Not verified"
                                : "Verified"}
                            </h4>
                          </div>
                          {UERDEATILS?.data?.data?.isAccountVerified ==
                          false ? (
                            <button
                              className=" text-sm text-gray-800 hover:text-secondary inline-block "
                              onClick={handleClickVerify}
                            >
                              Verify
                            </button>
                          ) : (
                            ""
                          )}
                        </div>

                        {/* <div className="flex flex-wrap items-center mt-2">
                          <Badge className="rounded-[5px] border border-gray-200 py-1 px-2 bg-gray-50 text-gray-900 text-sm mr-2 mb-2">
                            <i className="flex items-center justify-center mr-2">
                              <Image
                                src={assets?.file_icon}
                                alt="file_icon"
                                width={16}
                                height={16}
                              />
                            </i>
                            personal_id.doc
                          </Badge>
                          <Badge className="rounded-[5px] border border-gray-200 py-1 px-2 bg-gray-50 text-gray-900 text-sm mr-2 mb-2">
                            <i className="flex items-center justify-center mr-2">
                              <Image
                                src={assets?.file_icon}
                                alt="file_icon"
                                width={16}
                                height={16}
                              />
                            </i>
                            personal_id.doc
                          </Badge>
                          <Badge className="rounded-[5px] border border-gray-200 py-1 px-2 bg-gray-50 text-gray-900 text-sm">
                            <i className="flex items-center justify-center mr-2">
                              <Image
                                src={assets?.file_icon}
                                alt="file_icon"
                                width={16}
                                height={16}
                              />
                            </i>
                            personal_id.doc
                          </Badge>
                        </div> */}
                      </div>
                      {/* <div className="pt-5">
                        <p className="text-gray-500 text-sm mb-2">Note</p>
                        <CommonTextArea
                          placeholderLabel="Note"
                          height=""
                          //   placeholderText="This client prefers weekend appointments."
                        />
                      </div> */}
                    </div>
                  </div>
                  <div className="w-2/3 px-4 md:w-full">
                    <div className="bg-white dash_info_block py-8 px-10 rounded-xl flex flex-wrap flex-row mb-8 md:mt-8">
                      <div className=" flex-col w-1/3 sm:w-full sm:mb-3">
                        <h5 className="text-lg font-satoshi_medium text-gray-900">
                          Reservations
                        </h5>
                        <div className="flex items-center flex-wrap my-2">
                          <h2 className="text-4xl">730</h2>
                          <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                            20%
                            <i className="inline-flex items-center justify-center ml-1">
                              {" "}
                              <IncrementIcon />
                            </i>
                          </Badge>
                        </div>
                        <p className="text-base text-gray-500">Reservations</p>
                      </div>

                      <div className=" flex-col w-1/3 sm:w-full sm:mb-3">
                        <h5 className="text-lg font-satoshi_medium text-gray-900">
                          Reservations
                        </h5>
                        <div className="flex items-center flex-wrap my-2">
                          <h2 className="text-4xl">130%</h2>
                        </div>
                        <p className="text-base text-gray-500">Reservations</p>
                      </div>

                      <div className=" flex-col w-1/3 sm:w-full ">
                        <h5 className="text-lg font-satoshi_medium text-gray-900">
                          Reservations
                        </h5>
                        <div className="flex items-center flex-wrap my-2">
                          <h2 className="text-4xl">2.4k</h2>
                        </div>
                        <p className="text-base text-gray-500">Reservations</p>
                      </div>
                    </div>
                    <div className="cmn_box bg-white rounded-xl border border-gray-50 p-6">
                      <Tabs defaultValue="payouts" className="w-full">
                        <TabsList className="flex flex-wrap items-center justify-start mb-8">
                          <TabsTrigger
                            value="payouts"
                            className="pb-5 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                          >
                            Payouts
                          </TabsTrigger>
                          <TabsTrigger
                            value="reservations"
                            className="pb-5 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                          >
                            Reservations
                          </TabsTrigger>
                          <TabsTrigger
                            value="messaging_history"
                            className="pb-5 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                          >
                            Messaging history
                          </TabsTrigger>
                          <TabsTrigger
                            value="chat"
                            className="pb-5 text-base rounded-none  text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                          >
                            Chat
                            <span className="w-4 h-4 flex items-center justify-center bg-red-500 text-white text-[12px] font-satoshi_regular rounded-full ml-2 mt-[2px]">
                              1
                            </span>
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="payouts">
                          <TableComponent
                            theadList={tableHeadList}
                            tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                            className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                          >
                            {clientpayoutlist?.data?.length > 0 ? (
                              clientpayoutlist?.data?.map(
                                (
                                  invoice: AdminClientpayouts,
                                  index: number
                                ) => (
                                  <TableRow key={index}>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        clientpayoutlist?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      {/* {invoice.date} */}
                                      {dayjs(invoice.date).format(
                                        "MMM DD, YYYY"
                                      )}
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        clientpayoutlist?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      {invoice.payment_method_details?.email}
                                      <p className="flex items-center text-[12px]">
                                        {invoice?.payment_method_details?.type}{" "}
                                        <span className="inline-flex items-center justify-center ml-2">
                                          {/* {invoice?.withdrawl_icon} */}
                                          {invoice?.payment_method_details
                                            ?.type === "credit_card" ? (
                                            <>
                                              <MasterIcon />
                                            </>
                                          ) : null}
                                          {invoice?.payment_method_details
                                            ?.type === "PayPal" ? (
                                            <>
                                              <PaypalIcon />
                                            </>
                                          ) : null}
                                          {invoice?.payment_method_details
                                            ?.type === "bank_account" ? (
                                            <>
                                              <MasterIcon />
                                            </>
                                          ) : null}
                                          {/* <PaypalIcon /> */}
                                        </span>{" "}
                                      </p>
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        clientpayoutlist?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      ${invoice?.amount}
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        clientpayoutlist?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      {invoice.transaction_id}
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                        clientpayoutlist?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      <Button
                                        variant="outline"
                                        className="border-gray-200"
                                      >
                                        Download invoice
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                )
                              )
                            ) : (
                              <></>
                            )}

                            {}
                          </TableComponent>
                          {/* <div className="mt-6">
                            <CommonPagination />
                          </div> */}
                          {clientpayoutlist?.data?.length > 0 ? (
                            <>
                              <div className="mt-6">
                                {/* <CommonPagination /> */}
                                <BasicPagination
                                  totalResData={clientpayoutlist}
                                  handleChange={handleChangePagination}
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              {" "}
                              <TableRow>
                                <TableCell
                                  colSpan={tableHeadListForReservation?.length}
                                  align="center"
                                  className="py-[135px]"
                                >
                                  <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                    No results...
                                  </h6>
                                  <p className=" text-gray-500 text-base">
                                    There are currently no results for your
                                    request.
                                  </p>
                                </TableCell>
                              </TableRow>
                            </>
                          )}
                        </TabsContent>
                        {/* Reservation Part */}

                        <TabsContent value="reservations">
                          <TableComponent
                            theadList={tableHeadListForReservation}
                            tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                            className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                          >
                            {clientreservation?.data?.length > 0 ? (
                              clientreservation?.data?.map(
                                (invoice: any, index: number) => (
                                  <TableRow key={index}>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        invoices4?.length - 1 === index &&
                                        "border-0"
                                      }`}
                                    >
                                      <div className="flex items-center">
                                        <figure>
                                          <Image
                                            // src={invoice?.service_image}
                                            src={
                                              invoice?.service_data?.images &&
                                              invoice?.service_data?.images[0]
                                                ? invoice?.service_data
                                                    .images[0]
                                                : assets.serviceInfoImg
                                            }
                                            alt="image"
                                            width={56}
                                            height={40}
                                          />
                                        </figure>
                                        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                                          {invoice?.service_data?.title}
                                        </p>
                                      </div>
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        clientreservation?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      <div className="flex items-center">
                                        <figure>
                                          <Image
                                            src={
                                              invoice?.vendor_data
                                                ?.profilePicture
                                            }
                                            alt="image"
                                            width={32}
                                            height={32}
                                          />
                                        </figure>
                                        <p className="ml-3">
                                          {invoice?.vendor_data?.firstName}{" "}
                                          {invoice?.vendor_data?.last}
                                        </p>
                                      </div>
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        clientreservation?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      {dayjs(invoice?.date).format(
                                        "MMM DD, YYYY"
                                      )}
                                      <p className="text-sm text-gray-500">
                                        {dayjs(invoice?.time, "HH:mm").format(
                                          "h:mm A"
                                        )}
                                      </p>
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                                        clientreservation?.data?.length - 1 ===
                                          index && "border-0"
                                      }`}
                                    >
                                      ${invoice.package_price}
                                    </TableCell>
                                    <TableCell
                                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                                        clientreservation?.data?.length - 1 ===
                                          index && "border-0"
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
                  
                  ml-3 ${
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
                                  </TableRow>
                                )
                              )
                            ) : (
                              <>
                                {" "}
                                <TableRow>
                                  <TableCell
                                    colSpan={
                                      tableHeadListForReservation?.length
                                    }
                                    align="center"
                                    className="py-[135px]"
                                  >
                                    <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                      No results...
                                    </h6>
                                    <p className=" text-gray-500 text-base">
                                      There are currently no results for your
                                      request.
                                    </p>
                                  </TableCell>
                                </TableRow>
                              </>
                            )}
                          </TableComponent>

                          {clientreservation?.data?.length > 0 ? (
                            <>
                              <div className="mt-6">
                                {/* <CommonPagination /> */}
                                <BasicPagination
                                  totalResData={clientreservation}
                                  handleChange={handleChangePagination}
                                />
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </TabsContent>

                        <TabsContent value="messaging_history">
                          <div className="flex border border-gray-200 rounded-lg sm:flex-wrap">
                            <div className="w-[278px] border-gray-200 border-r sm:w-full sm:border-r-0">
                              <div className="">
                                <SerachInputComponent
                                  placeholderText="Search message"
                                  className={
                                    "bg-transparent px-4 py-8 border-gray-100 border-b rounded-none placeholder:text-gray-900"
                                  }
                                  classNameForInput="pl-10"
                                  classNameForSearchIcon="absolute p-0"
                                  searchIcon={<SeachBlack />}
                                />
                                <div className="h-[600px] overflow-y-auto sm:h-[300px]">
                                  <MessageThumb
                                    textContent="Lorem ipsum dolor sit amet somethi..."
                                    showUnread
                                    userActive
                                    showTimePanel
                                  />
                                  <MessageThumb
                                    textContent="Sure, Amelia! Keep me updated..."
                                    showUnread
                                    showTimePanel
                                  />
                                  <MessageThumb
                                    textContent="Ok"
                                    showTimePanel
                                  />
                                  <MessageThumb
                                    textContent="Thank you for your answer!"
                                    showTimePanel
                                  />
                                  <MessageThumb
                                    textContent="Lorem ipsum dolor sit amet somethi..."
                                    showTimePanel
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-[calc(100%-278px)] sm:w-full">
                              <div className="border-gray-200 border-b">
                                <MessageThumb
                                  textContent="Last seen: 54 min ago"
                                  showUnread
                                />
                              </div>
                              <div className="flex">
                                <div className="w-full">
                                  <div className="px-6 pt-6 h-[600px] overflow-y-auto">
                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Hello! I offer a variety of massage
                                        services designed to promote relaxation
                                        and well-being. We have Swedish massage,
                                        which uses gentle strokes to ease
                                        tension, and deep tissue massage, which
                                        targets deeper muscle layers to
                                        alleviate chronic pain.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div>

                                    <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                                      <p className="text-center px-4 bg-white inline-flex mx-auto">
                                        3 August 2023
                                      </p>
                                    </div>

                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Our massage sessions are available in
                                        different durations: 30 minutes, 60
                                        minutes, and 90 minutes. The 30-minute
                                        session is more focused on specific
                                        areas, while the 60-minute session
                                        allows for a more balanced approach,
                                        covering multiple areas. The 90-minute
                                        session offers a thorough, full-body
                                        massage with extra time to target
                                        specific concerns.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div>

                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Hello! I offer a variety of massage
                                        services designed to promote relaxation
                                        and well-being. We have Swedish massage,
                                        which uses gentle strokes to ease
                                        tension, and deep tissue massage, which
                                        targets deeper muscle layers to
                                        alleviate chronic pain.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div>

                                    <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                                      <p className="text-center px-4 bg-white inline-flex mx-auto">
                                        3 August 2023
                                      </p>
                                    </div>

                                    <div className="flex items-end mb-4">
                                      <figure className="rounded-full overflow-hidden w-[32px] h-[32px] min-w-[32px] flex mr-4">
                                        <Image
                                          alt=""
                                          width={32}
                                          height={32}
                                          src={assets.msg_user}
                                        />
                                      </figure>
                                      <div className="bg-gray-50 px-3 py-2 rounded-md max-w-[440px]">
                                        <h3 className="text-[#246AEA] text-sm font-medium	mb-[5px] ">
                                          Amelia G.
                                          <span className="pl-1 font-normal text-gray-400 text-sm">
                                            (You)
                                          </span>
                                        </h3>
                                        <p className="text-base	text-gray-900">
                                          Hello! I offer a variety of massage
                                          services designed to promote
                                          relaxation and well-being. We have
                                          Swedish massage, which uses gentle
                                          strokes to ease tension, and deep
                                          tissue massage, which targets deeper
                                          muscle layers to alleviate chronic
                                          pain.
                                        </p>
                                        <div className="flex justify-end items-center	pt-1">
                                          <p className="text-xs	text-gray-400">
                                            5:50 PM
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Our massage sessions are available in
                                        different durations: 30 minutes, 60
                                        minutes, and 90 minutes. The 30-minute
                                        session is more focused on specific
                                        areas, while the 60-minute session
                                        allows for a more balanced approach,
                                        covering multiple areas. The 90-minute
                                        session offers a thorough, full-body
                                        massage with extra time to target
                                        specific concerns.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        {/* Chat Implementation */}
                        <TabsContent value="chat">
                          <div className="flex border border-gray-200 rounded-lg">
                            <div className="w-full">
                              <div className="border-gray-200 border-b">
                                <MessageThumb
                                  textContent="Last seen: 54 min ago"
                                  showUnread
                                />
                              </div>
                              <div className="bg-inherit">
                                <div className="w-full">
                                  <div className="px-6 pt-6 h-[600px] overflow-y-auto">
                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Hello! I offer a variety of massage
                                        services designed to promote relaxation
                                        and well-being. We have Swedish massage,
                                        which uses gentle strokes to ease
                                        tension, and deep tissue massage, which
                                        targets deeper muscle layers to
                                        alleviate chronic pain.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div>
                                    <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                                      <p className="text-center px-4 bg-white inline-flex mx-auto">
                                        3 August 2023
                                      </p>
                                    </div>
{/* 
                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Our massage sessions are available in
                                        different durations: 30 minutes, 60
                                        minutes, and 90 minutes. The 30-minute
                                        session is more focused on specific
                                        areas, while the 60-minute session
                                        allows for a more balanced approach,
                                        covering multiple areas. The 90-minute
                                        session offers a thorough, full-body
                                        massage with extra time to target
                                        specific concerns.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div>

                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Hello! I offer a variety of massage
                                        services designed to promote relaxation
                                        and well-being. We have Swedish massage,
                                        which uses gentle strokes to ease
                                        tension, and deep tissue massage, which
                                        targets deeper muscle layers to
                                        alleviate chronic pain.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div>

                                    <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                                      <p className="text-center px-4 bg-white inline-flex mx-auto">
                                        3 August 2023
                                      </p>
                                    </div>

                                    <div className="flex items-end mb-4">
                                      <figure className="rounded-full overflow-hidden w-[32px] h-[32px] min-w-[32px] flex mr-4">
                                        <Image
                                          alt=""
                                          width={32}
                                          height={32}
                                          src={assets.msg_user}
                                        />
                                      </figure>
                                      <div className="bg-gray-50 px-3 py-2 rounded-md max-w-[440px]">
                                        <h3 className="text-[#246AEA] text-sm font-medium	mb-[5px] ">
                                          Amelia G.
                                          <span className="pl-1 font-normal text-gray-400 text-sm">
                                            (You)
                                          </span>
                                        </h3>
                                        <p className="text-base	text-gray-900">
                                          Hello! I offer a variety of massage
                                          services designed to promote
                                          relaxation and well-being. We have
                                          Swedish massage, which uses gentle
                                          strokes to ease tension, and deep
                                          tissue massage, which targets deeper
                                          muscle layers to alleviate chronic
                                          pain.
                                        </p>
                                        <div className="flex justify-end items-center	pt-1">
                                          <p className="text-xs	text-gray-400">
                                            5:50 PM
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                      <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                        Amelia G.
                                        <span className="pl-1 font-normal text-gray-400 text-sm">
                                          (You)
                                        </span>
                                      </h3>
                                      <p className="text-base	text-gray-900">
                                        Our massage sessions are available in
                                        different durations: 30 minutes, 60
                                        minutes, and 90 minutes. The 30-minute
                                        session is more focused on specific
                                        areas, while the 60-minute session
                                        allows for a more balanced approach,
                                        covering multiple areas. The 90-minute
                                        session offers a thorough, full-body
                                        massage with extra time to target
                                        specific concerns.
                                      </p>
                                      <div className="flex justify-end items-center	pt-1">
                                        <p className="text-xs	text-gray-400">
                                          5:50 PM
                                        </p>
                                        <i className="pl-[5px]">
                                          <MsgTick />
                                        </i>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div className="p-6">
                                    <MessageInput />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </Container>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
