"use client";
import io from "socket.io-client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import MessageInput from "@/components/MessageInput/MessageInput";
import { MessageThumb } from "@/components/MessageThumb/MessageThumb";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import ServiceInfoComponent from "@/components/ServiceInfoComponent/ServiceInfoComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FetchClientProfile } from "@/hooks/react-qurey/query-hooks/ClientProfile.hook";
import {
  useChatLists,
  useChatuserLists,
} from "@/hooks/react-qurey/query-hooks/chat.hook";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import ChervonIconTwo from "@/json/icons/ChervonIconTwo";
import ChervonUp from "@/json/icons/ChervonUp";
import ExpIcon from "@/json/icons/ExpIcon";
import MsgTick from "@/json/icons/MsgTick";
import { SeachBlack } from "@/json/icons/SeachBlack";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { parseCookies } from "nookies";
import { PrimaryURL } from "@/api/endpoints";
import { ChatUserData } from "@/typescript/Interfaces/chatuser.interface";
import { ChatmessageDetails } from "@/typescript/Interfaces/chat.interface";
import Loading from "@/components/Loading/Loading";
import ClientMessageInput from "@/components/MessageInput/ClientMessageInput";
import { CircularProgress } from "@mui/material";
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

export default function Index() {
  const [targetAccBtn, setTargetAccBtn] = useState("sdfdsf");
  const handleAccTrigger = (e: any, triggerValue: string) => {
    if (e.target.dataset.state === "closed") {
      setTargetAccBtn(triggerValue);
    } else {
      setTargetAccBtn("");
    }
  };

  const [msgListOpen, setMsgListOpen] = useState(false);
  const handelChangeMsg = () => {
    setMsgListOpen(true);
  };
  const handelChangeMsgClose = () => {
    setMsgListOpen(false);
  };

  // Chat Implementation
  // Fetch profile Details with API
  const {
    data: clientprofile,
    isLoading: clientprofileloading,
    isError: clientprofileerror,
  } = useQuery({
    queryFn: () => FetchClientProfile(),
    queryKey: ["clientprofile"],
  });
  console.log("clientprofile", clientprofile?.data);

  const [chatuserfistname, setChatuserfirstname] = useState<any>(null);
  const [chatuserlastname, setChatuserlastname] = useState<any>(null);
  const [chatuserprofileimage, setChatuserprofileimage] = useState<any>(null);
  const [lastonlinetime, setlastonlineTime] = useState<any>(null);
  const [roomDetails, setRoomDetails] = useState<any>({});
  const [sendMessage, setSendmessage] = useState<string>("");
  const [RoomId, setRoomId] = useState<any>("");
  const [clientchatlists, setClientchartlists] = useState<any>([]);
  const [clientchatuserlists, setChatuserlists] = useState<any>([]);
  const [searchquery, setsearchQuery] = useState<string>("");
  const [socket, setSocket] = useState<any>(null);
  const [isActive, setisActive] = useState<any>(false);
  const { mutate: chatlists, isLoading: chatloading } = useChatLists();
  const { mutate: chatuserlists, isLoading: chatuserloading } =
    useChatuserLists();
  const handleSearchInputChange = (value: string) => {
    setsearchQuery(value);
  };
  const handleSendmessage = async (message: string) => {
    setSendmessage(message);
  };

  const handleChatUserClick = (clickedRoomId: any) => {
    handelChangeMsg();
    setRoomId(clickedRoomId);
  };

  const handlefirstName = (firstname: string) => {
    setChatuserfirstname(firstname);
  };
  const handlelastName = (lastname: string) => {
    setChatuserfirstname(lastname);
  };

  const handleprofileimage = (image: string) => {
    setChatuserprofileimage(image);
  };
  const handlelastonlinestatus = (onlinetime: any) => {
    setlastonlineTime(onlinetime);
  };

  const handleisActive = (active: any) => {
    setisActive(active);
  };
  // console.log("roomId", RoomId);
  // console.log("searchquery", searchquery);
  const cookies = parseCookies();
  const token = cookies?.atHomee_token;
  // const socket: any = io(PrimaryURL, {
  //   extraHeaders: { token: token },
  // });
  useEffect(() => {
    if (!socket) {
      const initializeSocket = io(PrimaryURL, {
        extraHeaders: { token: token },
      });
      initializeSocket.on("connect", () => {
        console.log(`Socket ${initializeSocket.id} connected.`);
        initializeSocket.emit("createRoom", {
          receiver_id: clientprofile?.data?._id,
        });
        // setIsConnected(true);
      });
      setSocket(initializeSocket);
    } else {
      // Listen for the "createRoom" event
      socket.on("createRoom", (data: any) => {
        console.log("Socket Room created:", data);
        // Join the room with the provided room ID
        socket.emit("joinRoom", { room_id: data._id });
        setRoomDetails(data);
      });
    }

    // Clean up socket connection when component unmounts
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);
  useEffect(() => {
    if (RoomId) {
      console.log("@Room : ", roomDetails?._id);
      socket.on(RoomId, (data: any) => {
        console.log("@Room admin data", { roomId: RoomId, data });
        FetchChatLists();
        console.log("call 3");
      });
    }
  }, [RoomId, socket]);
  useEffect(() => {
    if (RoomId) {
      FetchChatLists();
    }
  }, [RoomId]);
  // Socket Connection
  // useEffect(() => {
  //   // const socket = io(PrimaryURL);
  //   // if (!!idValue && !!roomDetails?._id) {

  //   if (!roomDetails?._id) {
  //     socket.on("connect", () => {
  //       console.log(`Socket ${socket.id} connected.`);
  //       if (!roomDetails?._id && !clientprofile?.data?._id) {
  //         socket.emit("createRoom", { receiver_id: clientprofile?.data?._id });
  //       }
  //       socket.emit("test");
  //       console.log(
  //         `Socket createRoom event emitted with receiver_id: ${clientprofile?.data?._id}`
  //       );

  //       socket.on("createRoom", (data: any) => {
  //         console.log("Socket Room created:", data);
  //         socket.emit("joinRoom", { room_id: data._id });
  //         setRoomDetails(data);
  //       });

  //       socket.on("createMessage", (data: any) => {
  //         console.log("Socket Messagereceived:", data);
  //         FetchChatLists();
  //         console.log("call 2");
  //       });

  //       if (roomDetails?._id) {
  //         console.log("@Room : ", roomDetails?._id);
  //         socket.on(roomDetails?._id, (data: any) => {
  //           console.log("@Room admin data", { roomId: roomDetails?._id, data });
  //           FetchChatLists();
  //           console.log("call 3");
  //         });
  //       }
  //     });
  //     // }
  //   }
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [clientprofile?.data?._id, socket, roomDetails?._id]);

  const FetchChatLists = async () => {
    let status = false;
    if (RoomId) {
      const payload = {
        page: 1,
        limit: 20,
        sort: {
          order: "desc",
          field: "_id",
        },
        room_id: RoomId,
      };
      chatlists(payload, {
        onSuccess: (response: any) => {
          console.log("chatres", response);
          setClientchartlists(response?.data);
          status = true;
        },
        onError: () => {
          console.log("Chat Error");
          status = false;
        },
      });
    }
    return status;
  };

  useEffect(() => {
    if (
      !!clientchatuserlists &&
      !!clientchatuserlists?.data &&
      clientchatuserlists?.data?.length > 0
    ) {
      setRoomId(clientchatuserlists?.data[0]?._id);
      const getFistname =
        !!clientchatuserlists?.data && clientchatuserlists?.data?.length > 0
          ? clientchatuserlists?.data[0]?.user_data?.firstName
          : "No First Name";
      const getLastname =
        !!clientchatuserlists?.data && clientchatuserlists?.data?.length > 0
          ? clientchatuserlists?.data[0]?.user_data?.lastName
          : "No Last Name";
      const getprofileImage =
        !!clientchatuserlists?.data && clientchatuserlists?.data?.length > 0
          ? clientchatuserlists?.data[0]?.user_data?.profilePicture
          : "No Image";
      const getlastonlinetime =
        !!clientchatuserlists?.data && clientchatuserlists?.data?.length > 0
          ? clientchatuserlists?.data[0]?.user_data?.lastOnline
          : "Offline";
      const getisactive =
        !!clientchatuserlists?.data && clientchatuserlists?.data?.length > 0
          ? clientchatuserlists?.data[0]?.user_data?.isOnline
          : "Offline";

      setChatuserfirstname(getFistname);
      setChatuserlastname(getLastname);
      setChatuserprofileimage(getprofileImage);
      setlastonlineTime(getlastonlinetime);
      setisActive(getisactive);
      FetchChatLists();
    }
  }, [clientchatuserlists?.data]);

  useEffect(() => {
    FetchChatLists();
  }, [RoomId]);

  const FetchChatUserLists = async () => {
    const payload = {
      page: 1,
      limit: 20,
      search: searchquery,
    };
    chatuserlists(payload, {
      onSuccess: (response: any) => {
        console.log("chatres", response);
        setChatuserlists(response?.data);
      },
      onError: () => {
        console.log("Chat Error");
      },
    });
  };

  useEffect(() => {
    FetchChatUserLists();
  }, [searchquery, chatuserlists]);

  const lastMessageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  }, [clientchatlists]);

  console.log("clientchatuserlists", clientchatuserlists);
  // console.log(
  //   "clientchatuserlists",
  //   !!clientchatuserlists?.data && clientchatuserlists?.data?.length > 0
  //     ? clientchatuserlists?.data[0]?.user_data?.fullName
  //     : "no data"
  // );
  const UserDataClickFunction = () => {};

  const getLastSeenText = (lastOnlineTime: any) => {
    const currentTime = dayjs();
    const lastSeenTime = dayjs(lastOnlineTime);
    const diffMinutes = currentTime.diff(lastSeenTime, "minute");

    if (diffMinutes < 60) {
      return `Last seen: ${diffMinutes} min ago`;
    } else {
      const diffHours = Math.floor(diffMinutes / 60);
      return `Last seen: ${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    }
  };

  const getuserLastSeen = (lastOnlineTime: any) => {
    const currentTime = dayjs();
    const lastSeenTime = dayjs(lastOnlineTime);
    const diffMinutes = currentTime.diff(lastSeenTime, "minute");

    if (diffMinutes < 60) {
      return `${diffMinutes} min ago`;
    } else {
      const diffHours = Math.floor(diffMinutes / 60);
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    }
  };

  console.log("lastonlinetime", getLastSeenText(lastonlinetime));

  return (
    <div>
      <div className="flex lg:flex-wrap">
        <div
          className={`{ w-[18.8%] 2xl:w-[25%] xl:w-[30%] border-gray-200 border-r lg:border-r-0 lg:w-full } ${
            msgListOpen === true ? "lg:hidden" : "lg:block"
          }`}
        >
          <div className="">
            <SerachInputComponent
              placeholderText="Search message"
              className={
                "bg-transparent px-4 py-8 md:py-6 border-gray-100 border-b rounded-none placeholder:text-gray-900"
              }
              classNameForInput="pl-10"
              classNameForSearchIcon="absolute p-0"
              searchValue={searchquery}
              onInputChange={handleSearchInputChange}
              searchIcon={<SeachBlack />}
            />
            <div className="h-[calc(100vh-200px)] md:h-[calc(100vh-170px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              {chatuserloading ? (
                <>
                  <div className="flex justify-center items-center mt-2">
                    <CircularProgress color="inherit" />
                  </div>
                </>
              ) : (
                <>
                  {clientchatuserlists?.data?.length > 0 ? (
                    <>
                      {clientchatuserlists?.data?.map(
                        (item: ChatUserData, userindex: number) => {
                          return (
                            <>
                              <MessageThumb
                                key={userindex}
                                textContent="Lorem ipsum dolor sit amet somethi..."
                                showUnread
                                userActive={item?.user_data?.isOnline}
                                profileimage={item?.user_data?.profilePicture}
                                firstName={item?.user_data?.firstName}
                                lastName={item?.user_data?.lastName}
                                showTimePanel
                                lastonline={getuserLastSeen(
                                  item?.user_data?.lastOnline
                                )}
                                clickFun={() => {
                                  handleChatUserClick(item._id);
                                  handlelastName(item?.user_data?.lastName);
                                  handlefirstName(item?.user_data?.firstName);
                                  handleprofileimage(
                                    item?.user_data?.profilePicture
                                  );
                                  handlelastonlinestatus(
                                    item?.user_data?.lastOnline
                                  );
                                  handleisActive(item?.user_data?.isOnline);
                                }}
                              />
                            </>
                          );
                        }
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-center text-xl mt-6">No User Found</p>
                    </>
                  )}
                </>
              )}

              {/* {clientchatuserlists?.data?.map(
                (item: ChatUserData, userindex: number) => {
                  return (
                    <>
                      <MessageThumb
                        key={userindex}
                        textContent="Lorem ipsum dolor sit amet somethi..."
                        showUnread
                        userActive={item?.user_data?.isOnline}
                        profileimage={item?.user_data?.profilePicture}
                        firstName={item?.user_data?.firstName}
                        lastName={item?.user_data?.lastName}
                        showTimePanel
                        lastonline={getuserLastSeen(
                          item?.user_data?.lastOnline
                        )}
                        clickFun={() => {
                          handleChatUserClick(item._id);
                          handlelastName(item?.user_data?.lastName);
                          handlefirstName(item?.user_data?.firstName);
                          handleprofileimage(item?.user_data?.profilePicture);
                          handlelastonlinestatus(item?.user_data?.lastOnline);
                        }}
                      />
                    </>
                  );
                }
              )} */}
            </div>
          </div>
        </div>
        <div
          className={`{ w-[calc(100%-18.8%)] 2xl:w-[calc(100%-25%)] xl:w-[calc(100%-30%)] lg:w-full } ${
            msgListOpen === true ? "lg:block" : "lg:hidden"
          }`}
        >
          <div className="border-gray-200 border-b lg:hidden">
            <MessageThumb
              firstName={chatuserfistname}
              lastName={chatuserlastname}
              profileimage={chatuserprofileimage}
              // textContent="Last seen: 56 min ago"
              textContent={getLastSeenText(lastonlinetime)}
              showUnread
              userActive={isActive}
            />
          </div>
          <div className="border-gray-200 border-b px-4 py-4 hidden lg:flex items-center">
            <Button
              type="button"
              onClick={handelChangeMsgClose}
              className="bg-transparent p-0 min-w-auto min-h-auto"
            >
              <ArrowBackIcon />
            </Button>
            <div className="pl-4">
              <h3 className="font-satoshi_regular text-base text-gray-900">
                Adriana W.
              </h3>
              <p className="m-0 pl-[4px] text-xs text-gray-400">
                Last seen: 54 min ago
              </p>
            </div>
          </div>
          <div className="flex lg:flex-col-reverse lg:h-[calc(100vh- 140px)]">
            {/* Chat Message Start Here */}
            <div className="w-[calc(100%-23%)] 2xl:w-[calc(100%-35%)] xl:w-[calc(100%-40%)]  lg:w-full">
              <div className="px-6 xl:px-2 pt-6 h-[calc(100vh-314px)] xl:h-[calc(100vh-274px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                {/* <div className="h-full flex items-center justify-center text-[48px] text-gray-400">
                  No Chats Found
                </div> */}
                {chatloading && !sendMessage ? (
                  <>
                    <Loading />
                  </>
                ) : (
                  <>
                    {clientchatlists?.data?.length > 0 ? (
                      clientchatlists?.data
                        ?.slice()
                        .reverse()
                        ?.map((item: ChatmessageDetails, index: number) => {
                          return (
                            <>
                              {item?.sender_data?._id ===
                              clientprofile?.data?._id ? (
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
                                        {dayjs(item?.chat_date).format(
                                          "h:mm A"
                                        )}
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
                                          item?.sender_data?.profilePicture ||
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
                                          {dayjs(item?.chat_date).format(
                                            "h:mm A"
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div ref={lastMessageRef} />
                                </>
                              )}
                            </>
                          );
                        })
                    ) : (
                      <>
                        <div className="h-full flex items-center justify-center text-[48px] text-gray-400">
                          No Chats Found
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="p-6 xl:p-2 lg:p-4 border-t border-solid border-gray-200">
                {/* <MessageInput /> */}
                <ClientMessageInput
                  roomId={RoomId}
                  profileimage={clientprofile?.data?.profilePicture}
                  messageData={FetchChatLists}
                  sendMessageData={handleSendmessage}
                />
              </div>
            </div>
            {/* Chat Message End Here */}
            <div className="w-[23%] 2xl:w-[35%] xl:w-[40%] border-l-gray-200 border-l h-[calc(100vh-200px)] lg:h-auto overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin lg:w-full lg:border-l-0">
              <div className="lg:hidden">
                <ServiceInfoComponent
                  clientImg={assets.clientImage}
                  numberofPerson="(56)"
                  rattingScore="4.8/5"
                  serviceInfoImage={assets.serviceInfoImg}
                  serviceinfotext="Deep Tissue Massage"
                  title="Service info"
                  userName="Adriana W."
                  buttonText="Reserve service"
                  showImgIcon
                  icon={assets.clock2}
                >
                  <ul>
                    <li className="mb-4">
                      <Select>
                        <SelectTrigger
                          icon={
                            <ChevronDown
                              height={20}
                              width={20}
                              color="#A0A0AB"
                            />
                          }
                          className="w-full border-0 h-auto text-base font-satoshi_medium text-gray-900 bg-[#F7F4F1] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border"
                        >
                          <SelectValue placeholder="30-Minute $50 " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {select2?.map((item, index) => (
                              <SelectItem value={`${index + 1}`} key={index}>
                                <div className=" py-0.5">
                                  <p className="text-gray-400 text-base">
                                    <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                      {item?.itemBold}
                                    </span>
                                    {item?.itemPara}
                                  </p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </li>
                    <li className="mb-4">
                      <Select>
                        <SelectTrigger
                          icon={
                            <ChevronDown
                              height={20}
                              width={20}
                              color="#A0A0AB"
                            />
                          }
                          className="w-full border-0  h-auto text-base font-satoshi_medium text-gray-900 bg-[#E8FBDA] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border"
                        >
                          <SelectValue placeholder="60-Minute $90 " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {select2?.map((item, index) => (
                              <SelectItem value={`${index + 1}`} key={index}>
                                <div className=" py-0.5">
                                  <p className="text-gray-400 text-base">
                                    <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                      {item?.itemBold}
                                    </span>
                                    {item?.itemPara}
                                  </p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </li>
                    <li>
                      <Select>
                        <SelectTrigger
                          icon={
                            <ChevronDown
                              height={20}
                              width={20}
                              color="#A0A0AB"
                            />
                          }
                          className="w-full border-0 h-auto text-base font-satoshi_medium text-gray-900 bg-[#F5EFFD] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border "
                        >
                          <SelectValue placeholder="90-Minute $120 " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {select2?.map((item, index) => (
                              <SelectItem value={`${index + 1}`} key={index}>
                                <div className=" py-0.5">
                                  <p className="text-gray-400 text-base">
                                    <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                      {item?.itemBold}
                                    </span>
                                    {item?.itemPara}
                                  </p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </li>
                  </ul>
                </ServiceInfoComponent>
              </div>
              <div className="hidden lg:block">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className=" border-0">
                    <AccordionTrigger
                      onClick={(e) => handleAccTrigger(e, "legal")}
                      className="pr-6 pl-4 pb-0 !decoration-none !no-underline"
                    >
                      <div className="relative">
                        <div className="py-2 flex items-center">
                          <figure className="w-[48px] h-[48px] relative z-[-1]">
                            <Image
                              src={assets.serviceInfoImg}
                              alt="serviceInfoImage"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover rounded-[6px]"
                            />
                          </figure>
                          <div className="pl-4">
                            <p className="text-base font-medium text-gray-900 !decoinheritration-none">
                              Deep Tissue Massage
                            </p>
                          </div>
                        </div>
                      </div>
                      {targetAccBtn === "legal" ? (
                        <i>
                          <ChervonUp />
                        </i>
                      ) : (
                        <i>
                          <ChervonIconTwo />
                        </i>
                      )}
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div>
                        <p className="mb-3">Service types:</p>
                        <ul>
                          <li className="mb-4">
                            <Select>
                              <SelectTrigger
                                icon={
                                  <ChevronDown
                                    height={20}
                                    width={20}
                                    color="#A0A0AB"
                                  />
                                }
                                className="w-full border-0 h-auto text-base font-satoshi_medium text-gray-900 bg-[#F7F4F1] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border"
                              >
                                <SelectValue placeholder="30-Minute $50 " />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {select2?.map((item, index) => (
                                    <SelectItem
                                      value={`${index + 1}`}
                                      key={index}
                                    >
                                      <div className=" py-0.5">
                                        <p className="text-gray-400 text-base">
                                          <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                            {item?.itemBold}
                                          </span>
                                          {item?.itemPara}
                                        </p>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </li>
                          <li className="mb-4">
                            <Select>
                              <SelectTrigger
                                icon={
                                  <ChevronDown
                                    height={20}
                                    width={20}
                                    color="#A0A0AB"
                                  />
                                }
                                className="w-full border-0  h-auto text-base font-satoshi_medium text-gray-900 bg-[#E8FBDA] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border"
                              >
                                <SelectValue placeholder="60-Minute $90 " />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {select2?.map((item, index) => (
                                    <SelectItem
                                      value={`${index + 1}`}
                                      key={index}
                                    >
                                      <div className=" py-0.5">
                                        <p className="text-gray-400 text-base">
                                          <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                            {item?.itemBold}
                                          </span>
                                          {item?.itemPara}
                                        </p>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </li>
                          <li>
                            <Select>
                              <SelectTrigger
                                icon={
                                  <ChevronDown
                                    height={20}
                                    width={20}
                                    color="#A0A0AB"
                                  />
                                }
                                className="w-full border-0 h-auto text-base font-satoshi_medium text-gray-900 bg-[#F5EFFD] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border "
                              >
                                <SelectValue placeholder="90-Minute $120 " />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {select2?.map((item, index) => (
                                    <SelectItem
                                      value={`${index + 1}`}
                                      key={index}
                                    >
                                      <div className=" py-0.5">
                                        <p className="text-gray-400 text-base">
                                          <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                            {item?.itemBold}
                                          </span>
                                          {item?.itemPara}
                                        </p>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
