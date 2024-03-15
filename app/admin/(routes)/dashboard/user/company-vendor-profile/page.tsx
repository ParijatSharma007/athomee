"use client";
import { PrimaryURL, mediaURL } from "@/api/endpoints";
import io from "socket.io-client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import ActiveUserModal from "@/components/ActiveUserModal/ActiveUserModal";
import BlockUserModal from "@/components/BlockUserModal/BlockUserModal";
import ButtonLoader from "@/components/ButtonLoader/ButtonLoader";
import CommonInput from "@/components/CommonInput/CommonInput";
import CommonPagination from "@/components/CommonPagination/CommonPagination";
import CommonSelect from "@/components/CommonSelect/CommonSelect";
import CommonTextArea from "@/components/CommonTextArea/CommonTextArea";
import Container from "@/components/Container";
import DeleteUserModal from "@/components/DeleteUserModal/DeleteUserModal";
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
  useAdminChatuserLists,
  useAdminmessagehistoryList,
  useChatLists,
} from "@/hooks/react-qurey/query-hooks/chat.hook";
import {
  useAdminUserCommisionUpdate,
  useUSERDEATILS,
  useUSERdelete,
  useUserupdate,
  useUserverify,
} from "@/hooks/react-qurey/query-hooks/userList.hooks";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import IncrementIcon from "@/json/icons/IncrementIcon";
import MenuIcon from "@/json/icons/MenuIcon";
import MsgTick from "@/json/icons/MsgTick";
import PercentageIcon from "@/json/icons/PercentageIcon";
import { SeachBlack } from "@/json/icons/SeachBlack";
import { invoices3, invoices4, invoices5 } from "@/json/mock/tableData.mock";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { ChatmessageDetails } from "@/typescript/Interfaces/chat.interface";
import ClientMessageInput from "@/components/MessageInput/ClientMessageInput";
import Loading from "@/components/Loading/Loading";
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

const exceptThisSymbols = ["e", "E", "+", "-", "."];
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
    "Reservations",
    "Messaging history",
    "Chat",
    "",
  ];
  const tableHeadListForReservation = [
    "Service",
    "Vendor",
    "Date",
    "Amount",
    "Status",
  ];
  const tableHeadListForServices = [
    "Category",
    "Service",
    "Publication date",
    "Price",
    "",
  ];
  const router = useRouter();
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const idValue = searchParams.get("id");
  console.log("🚀 ~ Index ~ idValue:", idValue);
  const [defaultCommisionRate, setDefaultCommisionRate] = useState("");
  const [defaultCommissionLoader, setDefaultCommissionLoader] = useState(false);
  const initialCommisionRate = useRef("");
  const [isCommisionRateChanged, setIsCommisionRateChanged] = useState(false);

  // const { data, isLoading, isError, error } = useQuery(['id', idValue], () => useUserdeatils());

  const { data: UERDEATILS, refetch } = useUSERDEATILS(idValue);

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

  const handleClickDelete = () => {
    // Call the 'deleterefetch' function when the onClick event occurs
    deleterefetch();
    router.push("/admin/dashboard/user/");
    queryClient.invalidateQueries(["USER_DETAILS"]);
  };
  // Update Commision rate
  useEffect(() => {
    setDefaultCommisionRate(UERDEATILS?.data?.data?.commission_rate || 0);
    initialCommisionRate.current = UERDEATILS?.data?.data?.commission_rate || 0;
  }, [UERDEATILS]);

  const defaultCommisionRateHandler = (e: any) => {
    setDefaultCommisionRate(e.target.value);
    setIsCommisionRateChanged(true);
  };
  const showSaveChangesButton = useMemo(() => {
    if (defaultCommisionRate != initialCommisionRate.current) {
      return true;
    } else {
      return false;
    }
  }, [defaultCommisionRate]);

  const { mutate: updatecommission, isLoading: updatecommissionloading } =
    useMutation(useAdminUserCommisionUpdate, {
      onSuccess: (data) => {
        console.log("updatedata", data);
        setDefaultCommissionLoader(false);
      },
      onError: () => {
        setDefaultCommissionLoader(false);
      },
    });

  // const updateDefaultCommissionRate = () => {
  //   setIsCommisionRateChanged(false);
  //   initialCommisionRate.current = defaultCommisionRate;
  //   console.log("defaultCommisionRate", defaultCommisionRate);
  //   updatecommission({
  //     id: idValue,
  //     payload: { rate: defaultCommisionRate },
  //   });
  // };
  const updateDefaultCommissionRate = () => {
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
        // User clicked "Yes, update it!"
        setIsCommisionRateChanged(false);
        initialCommisionRate.current = defaultCommisionRate;
        console.log("defaultCommisionRate", defaultCommisionRate);
        // Update the commission rate
        updatecommission({
          id: idValue,
          payload: { rate: defaultCommisionRate },
        });
        Swal.fire({
          title: "Updated!",
          text: "Commission rate has been updated.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        });
      } else {
        setDefaultCommisionRate(initialCommisionRate.current);
        setIsCommisionRateChanged(false);
        setDefaultCommissionLoader(false);
        Swal.fire("Cancelled", "No changes were made.", "info");
      }
    });
  };

  console.log("🚀 ~ Index ~ UERDEATILS:", UERDEATILS?.data?.data);
  // console.log("defaultCommisionRate", defaultCommisionRate);
  // console.log("🚀 ~ Index ~ UERDEATILS:", UERDEATILS?.data?.data);

  const [roomDetails, setRoomDetails] = useState<any>({});
  const [sendMessage, setSendmessage] = useState<string>("");
  const [companyvendorchatlists, setCompanyvendorchatlists] = useState<any>([]);
  const { mutate: chatlists, isLoading: chatloading } = useChatLists();
  const [msglimit, setMsglimit] = useState(10);

  const handleSendmessage = async (message: string) => {
    setSendmessage(message);
  };
  console.log("sendMessage", sendMessage);

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
      socket.on("createRoom", (data) => {
        console.log(" Socket Room created:", data);
        socket.emit("joinRoom", { room_id: data._id });
        setRoomDetails(data);
      });

      socket.on("createMessage", (data) => {
        console.log("Socket Messagereceived:", data);
        FetchVendorChatLists();
      });

      socket.on("test", (data) => {
        console.log("Socket data", data);
      });
      if (roomDetails?._id) {
        console.log("@Room : ", roomDetails?._id);
        socket.on(roomDetails?._id, (data: any) => {
          console.log("@Room admin data", { roomId: roomDetails?._id, data });
          FetchVendorChatLists();
        });
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [idValue]);
  console.log("roomDetails", roomDetails);

  const FetchVendorChatLists = async () => {
    const payload = {
      page: 1,
      limit: msglimit,
      sort: {
        order: "desc",
        field: "_id",
      },
      room_id: roomDetails?._id,
    };
    chatlists(payload, {
      onSuccess: (response: any) => {
        console.log("chatres", response);
        setCompanyvendorchatlists(response?.data);
      },
      onError: () => {
        console.log("Chat Error");
      },
    });
  };
  useEffect(() => {
    FetchVendorChatLists();
  }, [roomDetails?._id]);

  console.log("individualvendorchatlists", companyvendorchatlists);
  const [activeTab, setActiveTab] = useState("payouts");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === "chat" && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [activeTab]);

  const lastMessageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  }, [companyvendorchatlists]);

  // Fetch Message History
  const [messagechatusers, setMessagechatusers] = useState<any>([]);
  const [messagechats, setMessagechats] = useState<any>([]);
  const [RoomId, setRoomId] = useState<any>("");

  const { mutate: messagechatlists, isLoading: messageloading } =
    useAdminChatuserLists();
  const { mutate: messagehistorylists, isLoading: messagehistoryloading } =
    useAdminmessagehistoryList();

  const FetchMessageChatUserLists = async () => {
    try {
      if (idValue) {
        const payload = {
          userid: idValue,
          body: {
            search: "",
            page: 1,
            limit: 100,
          },
        };
        messagechatlists(payload, {
          onSuccess: (res: any) => {
            console.log("Success response:", res);
            setMessagechatusers(res.data);
          },
          onError: (error: any) => {
            console.error("Error response:", error);
          },
        });
      }
    } catch (error) {
      console.error("Error in FetchMessageChatUserLists:", error);
    }
  };

  const FetchMessageChatLists = async () => {
    try {
      if (idValue && RoomId) {
        const payload = {
          userid: idValue,
          body: {
            search: "",
            page: 1,
            limit: 100,
            room_id: RoomId,
          },
        };
        messagehistorylists(payload, {
          onSuccess: (res: any) => {
            console.log("Success response:", res);
            setMessagechats(res.data);
          },
          onError: (error: any) => {
            console.error("Error response:", error);
          },
        });
      }
    } catch (error) {
      console.error("Error in FetchMessageChatUserLists:", error);
    }
  };

  const handleChatUserClick = (clickedRoomId: any) => {
    setRoomId(clickedRoomId);
  };
  useEffect(() => {
    FetchMessageChatUserLists();
  }, [idValue]);

  useEffect(() => {
    FetchMessageChatLists();
  }, [idValue, RoomId]);

  console.log("messagechats", messagechats);
  const lastMessagehistoryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lastMessagehistoryRef.current) {
      lastMessagehistoryRef.current.scrollIntoView();
    }
  }, [messagechats]);

  return (
    <div className="pt-5 pb-20 sm:pb-5">
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
          <div className="w-1/3 px-4 sm:w-full sm:mb-3">
            <div className="cmn_box p-6 mb-8 rounded-xl border border-gray-50">
              <div className="flex flex-wrap justify-between items-center mb-6">
                <h3>Basic information</h3>
                <Button variant="outline" className="border-gray-200">
                  Public profile
                </Button>
              </div>
              <div className="relative flex flex-wrap items-center mb-6">
                <figure className="text-0 leading-none mr-4 relative w-10 h-10 flex items-center justify-center">
                  <Image
                    className="w-full h-full object-cover rounded-full"
                    src={
                      UERDEATILS?.data?.data.profilePicture ||
                      assets.imgaboutDetails1
                    }
                    alt=""
                    width={64}
                    height={64}
                  />
                  <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                </figure>
                <div className="relative">
                  <h5 className="text-[18px] font-satoshi_medium">
                    {/* Binford Ltd. */}
                    {UERDEATILS?.data?.data.firstName}{" "}
                    {UERDEATILS?.data?.data.lastName}
                  </h5>
                  <div className="flex items-center ">
                    <p className="text-[12px] font-satoshi_regular">
                      {/* 4.6 */}

                      {UERDEATILS?.data?.data.rating}
                    </p>
                    <StarRating totalStars={1} className="mx-1" />
                    <span className="text-gray-400 text-[12px]">
                      ({" "}
                      {UERDEATILS?.data?.data.rating_data?.total_ratings_count})
                    </span>
                  </div>
                </div>
              </div>
              <div className="pb-5 border-b border-gray-100">
                <p className="text-gray-500 text-sm">User ID</p>
                <h4 className=" text-base font-satoshi_medium">U12345</h4>
              </div>
              <div className="py-5 border-b border-gray-100">
                <p className="text-gray-500 text-sm">Contact person</p>
                <h4 className=" text-base font-satoshi_medium">Julia Brown</h4>
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
                <div className="flex justify-between items-center border-b border-gray-100 pb-3 pt-1">
                  <p className="flex items-center text-sm font-satoshi_medium">
                    -
                  </p>
                </div>
              </div>
            </div>

            <div className="cmn_box p-6 rounded-xl border border-gray-50">
              <div className="flex flex-wrap justify-between items-center mb-6">
                <h3>Account details</h3>
              </div>

              <div className="pb-5 border-b border-gray-100">
                <p className="text-gray-500 text-sm">Registration Date</p>
                <h4 className=" text-base font-satoshi_medium">
                  {/* May 24, 2024 */}
                  {moment(UERDEATILS?.data?.data?.createdAt).format(
                    "MMM D, YYYY"
                  )}
                </h4>
              </div>
              <div className="py-5 border-b border-gray-100">
                <p className="text-gray-500 text-sm">User Type</p>
                <h4 className=" text-base font-satoshi_medium">
                  {UERDEATILS?.data?.data?.role}
                </h4>
              </div>

              {/* Commission Rate Start*/}
              <div className="py-5 border-b border-gray-100">
                <div className="flex flex-col justify-start">
                  <h3 className=" text-base font-satoshi_medium mb-2">
                    Commission rate
                  </h3>
                  <div className="relative  mb-1 md:max-w-full">
                    <CommonInput
                      placeholderLabel="Commission rate"
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
                  {/* <p className=" text-[12px] text-gray-400">
                    This commission rate applied to all services and users.
                  </p> */}
                </div>
                {isCommisionRateChanged && showSaveChangesButton && (
                  // updatecommissionloading
                  <>
                    {defaultCommissionLoader ? (
                      <Button
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] mt-1 text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                      >
                        <ButtonLoader />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="rounded-[50px] px-[20px] py-[6px] mt-1 text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                        onClick={updateDefaultCommissionRate}
                        // disabled={!selectedBaseTypeId || !customCommisionRate}
                      >
                        Save changes
                      </Button>
                    )}
                  </>
                  // <Button
                  //   type="button"
                  //   className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                  //   onClick={updateDefaultCommissionRate}
                  //   disabled={updatecommissionloading}
                  // >
                  //   Save
                  // </Button>
                )}
                {/* <CommonSelect
                  labelPlaceholder="Commission rate"
                  options={selectApi}
                /> */}
              </div>
              {/* <div className="py-5 border-b border-gray-100">
                <CommonSelect
                  labelPlaceholder="Commission rate"
                  options={selectApi}
                />
              </div> */}
              {/* Commission Rate End*/}

              <div className="py-5 border-b border-gray-100 flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Status</p>
                  <h4 className=" text-base font-satoshi_medium">
                    {" "}
                    {UERDEATILS?.data?.data?.status}
                  </h4>
                </div>
                {/* <div className="flex items-center">
                  <Link
                    href="javascript:void(0)"
                    className=" text-sm text-gray-800 hover:text-secondary inline-block mr-9"
                  >
                    Block
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className=" text-sm text-red-500 hover:text-secondary"
                  >
                    Delete
                  </Link>
                </div> */}

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
                    <p className="text-gray-500 text-sm">Verification</p>
                    <h4
                      className={`text-base mb-0 font-satoshi_medium ${
                        UERDEATILS?.data?.data?.isAccountVerified == false
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {UERDEATILS?.data?.data?.isAccountVerified == false
                        ? "Not verified"
                        : "Verified"}
                    </h4>
                  </div>
                  {UERDEATILS?.data?.data?.isAccountVerified == false ? (
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
                <div className="flex flex-wrap items-center mt-2">
                  {UERDEATILS?.data?.data?.userVerificationFiles.length > 0 ? (
                    <>
                      {UERDEATILS?.data?.data?.userVerificationFiles?.map(
                        (item: any, key: number) => {
                          console.log("item:", item);
                          return (
                            <>
                              <Badge className="rounded-[5px] border border-gray-200 py-1 px-2 bg-gray-50 text-gray-900 text-sm mr-2 mb-2">
                                <i className="flex items-center justify-center mr-2">
                                  <Image
                                    key={key}
                                    // src={assets?.file_icon}
                                    src={`${mediaURL}/uploads/${item}`}
                                    alt="file_icon"
                                    width={16}
                                    height={16}
                                  />
                                </i>
                                personal_id.doc
                              </Badge>
                            </>
                          );
                        }
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-gray-500 text-sm mb-2">
                        No Verification File Found
                      </p>
                    </>
                  )}
                  {/* <Badge className="rounded-[5px] border border-gray-200 py-1 px-2 bg-gray-50 text-gray-900 text-sm mr-2 mb-2">
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
                  </Badge> */}
                </div>
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
          <div className="w-2/3 px-4 sm:w-full sm:mb-3">
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

              <div className=" flex-col w-1/3 sm:w-full sm:mb-3">
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
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="flex flex-wrap items-center justify-start mb-8">
                  <TabsTrigger
                    value="services"
                    className="pb-5 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                  >
                    Services
                  </TabsTrigger>
                  <TabsTrigger
                    value="payouts"
                    onClick={() => setActiveTab("payouts")}
                    className="pb-5 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                  >
                    Payouts
                  </TabsTrigger>
                  <TabsTrigger
                    value="reservations"
                    onClick={() => setActiveTab("reservations")}
                    className="pb-5 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                  >
                    Reservations
                  </TabsTrigger>
                  <TabsTrigger
                    value="messaging_history"
                    onClick={() => setActiveTab("messaging_history")}
                    className="pb-5 text-base rounded-none mr-6 text-gray-900 sm:w-full sm:justify-start sm:mb-2 sm:pb-2"
                  >
                    Messaging history
                  </TabsTrigger>
                  <TabsTrigger
                    value="chat"
                    onClick={() => setActiveTab("chat")}
                    className="pb-5 text-base rounded-none  text-gray-900"
                  >
                    Chat
                    <span className="w-4 h-4 flex items-center justify-center bg-red-500 text-white text-[12px] font-satoshi_regular rounded-full ml-2 mt-[2px]">
                      1
                    </span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="services">
                  <TableComponent
                    theadList={tableHeadListForServices}
                    tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                    className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                  >
                    {invoices5.map((invoice, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices5?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice?.category}
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices5?.length - 1 === index && "border-0"
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
                            invoices5?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice?.date}
                          <p className="text-sm text-gray-500">
                            {invoice?.time}
                          </p>
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices5?.length - 1 === index && "border-0"
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
                            invoices5?.length - 1 === index && "border-0"
                          }`}
                        >
                          <Button
                            variant="default"
                            className="p-0 bg-transparent border-0 hover:bg-transparent"
                          >
                            <MenuIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableComponent>
                  <div className="mt-6">
                    <CommonPagination />
                  </div>
                </TabsContent>
                <TabsContent value="payouts">
                  <TableComponent
                    theadList={tableHeadList}
                    tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                    className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                  >
                    {invoices3.map((invoice, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices3?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice.date}
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices3?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice.withdrawal_type}
                          <p className="flex items-center text-[12px]">
                            {invoice?.withdrawl_name}{" "}
                            <span className="inline-flex items-center justify-center ml-2">
                              {invoice?.withdrawl_icon}
                            </span>{" "}
                          </p>
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices3?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice?.amount}
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices3?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice.transaction_ID}
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                            invoices3?.length - 1 === index && "border-0"
                          }`}
                        >
                          <Button variant="outline" className="border-gray-200">
                            Download invoice
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableComponent>
                  <div className="mt-6">
                    <CommonPagination />
                  </div>
                </TabsContent>

                <TabsContent value="reservations">
                  <TableComponent
                    theadList={tableHeadListForReservation}
                    tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                    className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
                  >
                    {invoices4.map((invoice, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices4?.length - 1 === index && "border-0"
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
                          </div>
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices4?.length - 1 === index && "border-0"
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
                            invoices4?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice?.date}
                          <p className="text-sm text-gray-500">
                            {invoice?.time}
                          </p>
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                            invoices4?.length - 1 === index && "border-0"
                          }`}
                        >
                          {invoice.amount}
                        </TableCell>
                        <TableCell
                          className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                            invoices4?.length - 1 === index && "border-0"
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
                    ))}
                  </TableComponent>
                  <div className="mt-6">
                    <CommonPagination />
                  </div>
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
                          {messagechatusers?.data?.map(
                            (item: any, key: number) => {
                              return (
                                <>
                                  <MessageThumb
                                    profileimage={
                                      item?.user_data?.profilePicture
                                    }
                                    textContent="Lorem ipsum dolor sit amet somethi..."
                                    showUnread
                                    firstName={item?.user_data?.firstName}
                                    lastName={item?.user_data?.lastName}
                                    userActive
                                    showTimePanel
                                    clickFun={() =>
                                      handleChatUserClick(item._id)
                                    }
                                  />
                                </>
                              );
                            }
                          )}

                          {/* <MessageThumb
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
                                  /> */}
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
                            {messagehistoryloading ? (
                              <>
                                <Loading />
                              </>
                            ) : (
                              <>
                                {messagechats?.data
                                  ?.slice()
                                  ?.reverse()
                                  ?.map((item: any, mindex: number) => {
                                    return (
                                      <>
                                        {item?.sender_data?._id != idValue ? (
                                          <>
                                            <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                                              <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                                {item?.sender_data?.firstName}{" "}
                                                {item?.sender_data?.lastName}
                                                <span className="pl-1 font-normal text-gray-400 text-sm">
                                                  (You)
                                                </span>
                                              </h3>
                                              <p className="text-base	text-gray-900">
                                                {item?.text}
                                              </p>
                                              <div className="flex justify-end items-center	pt-1">
                                                <p className="text-xs	text-gray-400">
                                                  {dayjs(
                                                    item?.chat_date
                                                  ).format("h:mm A")}
                                                </p>
                                                <i className="pl-[5px]">
                                                  <MsgTick />
                                                </i>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <div className="flex items-end mb-4">
                                              <figure className="rounded-full overflow-hidden w-[32px] h-[32px] min-w-[32px] flex mr-4">
                                                <Image
                                                  alt=""
                                                  width={32}
                                                  height={32}
                                                  // src={assets.msg_user}
                                                  src={
                                                    item?.sender_data
                                                      ?.profilePicture ||
                                                    assets?.noprofileimage
                                                  }
                                                />
                                              </figure>
                                              <div className="bg-gray-50 px-3 py-2 rounded-md max-w-[440px]">
                                                <h3 className="text-[#246AEA] text-sm font-medium	mb-[5px] ">
                                                  {item?.sender_data?.firstName}{" "}
                                                  {item?.sender_data?.lastName}
                                                  {/* <span className="pl-1 font-normal text-gray-400 text-sm">
                                                        (You)
                                                      </span> */}
                                                </h3>
                                                <p className="text-base	text-gray-900">
                                                  {item?.text}
                                                </p>
                                                <div className="flex justify-end items-center	pt-1">
                                                  <p className="text-xs	text-gray-400">
                                                    {dayjs(
                                                      item?.chat_date
                                                    ).format("h:mm A")}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div ref={lastMessagehistoryRef} />
                                          </>
                                        )}
                                      </>
                                    );
                                  })}
                              </>
                            )}
                          </div>
                        </div>
                        {/* <div className="w-full">
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
                                </div> */}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* <TabsContent value="messaging_history">
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
                          <MessageThumb textContent="Ok" showTimePanel />
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
                                Hello! I offer a variety of massage services
                                designed to promote relaxation and well-being.
                                We have Swedish massage, which uses gentle
                                strokes to ease tension, and deep tissue
                                massage, which targets deeper muscle layers to
                                alleviate chronic pain.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
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
                                Our massage sessions are available in different
                                durations: 30 minutes, 60 minutes, and 90
                                minutes. The 30-minute session is more focused
                                on specific areas, while the 60-minute session
                                allows for a more balanced approach, covering
                                multiple areas. The 90-minute session offers a
                                thorough, full-body massage with extra time to
                                target specific concerns.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
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
                                Hello! I offer a variety of massage services
                                designed to promote relaxation and well-being.
                                We have Swedish massage, which uses gentle
                                strokes to ease tension, and deep tissue
                                massage, which targets deeper muscle layers to
                                alleviate chronic pain.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
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
                                  Hello! I offer a variety of massage services
                                  designed to promote relaxation and well-being.
                                  We have Swedish massage, which uses gentle
                                  strokes to ease tension, and deep tissue
                                  massage, which targets deeper muscle layers to
                                  alleviate chronic pain.
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
                                Our massage sessions are available in different
                                durations: 30 minutes, 60 minutes, and 90
                                minutes. The 30-minute session is more focused
                                on specific areas, while the 60-minute session
                                allows for a more balanced approach, covering
                                multiple areas. The 90-minute session offers a
                                thorough, full-body massage with extra time to
                                target specific concerns.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
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
                </TabsContent> */}

                <TabsContent value="chat">
                  <div className="flex border border-gray-200 rounded-lg">
                    <div className="w-full">
                      <div className="border-gray-200 border-b">
                        <MessageThumb
                          profileimage={
                            UERDEATILS?.data?.data?.profilePicture ||
                            assets?.noprofileimage
                          }
                          textContent={`Last seen: ${dayjs(
                            UERDEATILS?.data?.data?.lastOnline
                          ).fromNow()}`}
                          showUnread
                        />
                      </div>
                      <div className="bg-inherit">
                        <div className="w-full">
                          {companyvendorchatlists?.data?.length > 0 ? (
                            <>
                              <div
                                className="px-6 pt-6 h-[600px] overflow-y-auto"
                                ref={containerRef}
                                style={{ scrollBehavior: "smooth" }}
                              >
                                {companyvendorchatlists?.data
                                  ?.slice()
                                  .reverse()
                                  ?.map(
                                    (
                                      item: ChatmessageDetails,
                                      index: number
                                    ) => {
                                      return (
                                        <>
                                          {item?.sender_data._id != idValue ? (
                                            <>
                                              <div
                                                // ref={lastMessageRef}
                                                className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4"
                                              >
                                                <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                                  {/* Amelia G. */}
                                                  {
                                                    item?.sender_data?.firstName
                                                  }{" "}
                                                  {item?.sender_data?.lastName}
                                                  <span className="pl-1 font-normal text-gray-400 text-sm">
                                                    (You)
                                                  </span>
                                                </h3>
                                                <p className="text-base	text-gray-900">
                                                  {item?.text}
                                                </p>
                                                <div className="flex justify-end items-center	pt-1">
                                                  <p className="text-xs	text-gray-400">
                                                    {/* 5:50 PM */}
                                                    {dayjs(
                                                      item?.chat_date
                                                    ).format("h:mm A")}
                                                  </p>
                                                  <i className="pl-[5px]">
                                                    <MsgTick />
                                                  </i>
                                                </div>
                                              </div>
                                              <div ref={lastMessageRef} />
                                            </>
                                          ) : (
                                            <>
                                              <div className="flex items-end mb-4">
                                                <figure className="rounded-full overflow-hidden w-[32px] h-[32px] min-w-[32px] flex mr-4">
                                                  <Image
                                                    alt=""
                                                    width={32}
                                                    height={32}
                                                    // src={assets.msg_user}
                                                    src={
                                                      item?.sender_data
                                                        ?.profilePicture
                                                    }
                                                  />
                                                </figure>
                                                <div className="bg-gray-50 px-3 py-2 rounded-md max-w-[440px]">
                                                  <h3 className="text-[#246AEA] text-sm font-medium	mb-[5px] ">
                                                    {/* Amelia G. */}
                                                    {
                                                      item?.sender_data
                                                        ?.firstName
                                                    }
                                                    {""}
                                                    {
                                                      item?.sender_data
                                                        ?.lastName
                                                    }
                                                    {/* <span className="pl-1 font-normal text-gray-400 text-sm">
                                                        (You)
                                                      </span> */}
                                                  </h3>
                                                  <p className="text-base	text-gray-900">
                                                    {item?.text}
                                                  </p>
                                                  <div className="flex justify-end items-center	pt-1">
                                                    <p className="text-xs	text-gray-400">
                                                      {/* 5:50 PM */}
                                                      {dayjs(
                                                        item?.chat_date
                                                      ).format("h:mm A")}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                          )}
                                        </>
                                      );
                                    }
                                  )}
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                className="px-6 pt-6 h-[600px] overflow-y-auto"
                                ref={containerRef}
                                style={{ scrollBehavior: "smooth" }}
                              >
                                <p className="text-base 	text-gray-900">
                                  No Chat found
                                </p>
                              </div>
                            </>
                          )}

                          <div className="p-6">
                            <ClientMessageInput
                              roomId={roomDetails?._id}
                              messageData={FetchVendorChatLists}
                              sendMessageData={handleSendmessage}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="w-full">
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
                                Hello! I offer a variety of massage services
                                designed to promote relaxation and well-being.
                                We have Swedish massage, which uses gentle
                                strokes to ease tension, and deep tissue
                                massage, which targets deeper muscle layers to
                                alleviate chronic pain.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
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
                                Our massage sessions are available in different
                                durations: 30 minutes, 60 minutes, and 90
                                minutes. The 30-minute session is more focused
                                on specific areas, while the 60-minute session
                                allows for a more balanced approach, covering
                                multiple areas. The 90-minute session offers a
                                thorough, full-body massage with extra time to
                                target specific concerns.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
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
                                Hello! I offer a variety of massage services
                                designed to promote relaxation and well-being.
                                We have Swedish massage, which uses gentle
                                strokes to ease tension, and deep tissue
                                massage, which targets deeper muscle layers to
                                alleviate chronic pain.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
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
                                  Hello! I offer a variety of massage services
                                  designed to promote relaxation and well-being.
                                  We have Swedish massage, which uses gentle
                                  strokes to ease tension, and deep tissue
                                  massage, which targets deeper muscle layers to
                                  alleviate chronic pain.
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
                                Our massage sessions are available in different
                                durations: 30 minutes, 60 minutes, and 90
                                minutes. The 30-minute session is more focused
                                on specific areas, while the 60-minute session
                                allows for a more balanced approach, covering
                                multiple areas. The 90-minute session offers a
                                thorough, full-body massage with extra time to
                                target specific concerns.
                              </p>
                              <div className="flex justify-end items-center	pt-1">
                                <p className="text-xs	text-gray-400">5:50 PM</p>
                                <i className="pl-[5px]">
                                  <MsgTick />
                                </i>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <MessageInput />
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
