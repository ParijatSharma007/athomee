import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import SerachInputComponent from "../SerachInputComponent/SerachInputComponent";
import { SeachBlack } from "@/json/icons/SeachBlack";
import { MessageThumb } from "../MessageThumb/MessageThumb";
import Loading from "../Loading/Loading";
import dayjs from "dayjs";
import MsgTick from "@/json/icons/MsgTick";
import Image from "next/image";
import assets from "@/json/assets";
import {
  useAdminChatuserLists,
  useAdminmessagehistoryList,
} from "@/hooks/react-qurey/query-hooks/chat.hook";
import { useSearchParams } from "next/navigation";

const MessagingHistory = ({}: //   messagechatusers,
//   handleChatUserClick,
//   messagehistoryloading,
//   messagechats,
//   idValue,
//   lastMessagehistoryRef,
any) => {
  const searchParams = useSearchParams();
  const idValue = searchParams.get("id");
  const lastMessagehistoryRef = useRef<HTMLDivElement>(null);
  const [messagechatusers, setMessagechatusers] = useState<any>([]);
  const [messagechats, setMessagechats] = useState<any>([]);
  const [RoomId, setRoomId] = useState<any>("");

  // Status Change State
  const [chatuserfistname, setChatuserfirstname] = useState<any>(null);
  const [chatuserlastname, setChatuserlastname] = useState<any>(null);
  const [chatuserprofileimage, setChatuserprofileimage] = useState<any>(null);
  const [lastonlinetime, setlastonlineTime] = useState<any>(null);
  const [isActive, setisActive] = useState<any>(false);
  const [searchquery, setsearchQuery] = useState<string>("");
  const { mutate: messagechatlists, isLoading: messageloading } =
    useAdminChatuserLists();
  const { mutate: messagehistorylists, isLoading: messagehistoryloading } =
    useAdminmessagehistoryList();

  const handleChatUserClick = useCallback(
    (clickedRoomId: any) => {
      setRoomId(clickedRoomId);
    },
    [RoomId]
  );
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

  // API Functions
  const FetchMessageChatUserLists = async () => {
    try {
      if (idValue) {
        const payload = {
          userid: idValue,
          body: {
            search: searchquery,
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

  useEffect(() => {
    if (!!idValue) {
      FetchMessageChatUserLists();
    }
  }, [idValue]);
  useEffect(() => {
    if (!!RoomId) {
      FetchMessageChatLists();
    }
  }, [RoomId]);

  useEffect(() => {
    if (lastMessagehistoryRef.current) {
      lastMessagehistoryRef.current.scrollIntoView();
    }
  }, [messagechats]);

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
  useEffect(() => {
    if (
      !!messagechatusers &&
      !!messagechatusers?.data &&
      messagechatusers?.data?.length > 0
    ) {
      setRoomId(messagechatusers?.data[0]?._id);
      const getFistname =
        !!messagechatusers?.data && messagechatusers?.data?.length > 0
          ? messagechatusers?.data[0]?.user_data?.firstName
          : "No First Name";
      const getLastname =
        !!messagechatusers?.data && messagechatusers?.data?.length > 0
          ? messagechatusers?.data[0]?.user_data?.lastName
          : "No Last Name";
      const getprofileImage =
        !!messagechatusers?.data && messagechatusers?.data?.length > 0
          ? messagechatusers?.data[0]?.user_data?.profilePicture
          : "No Image";
      const getlastonlinetime =
        !!messagechatusers?.data && messagechatusers?.data?.length > 0
          ? messagechatusers?.data[0]?.user_data?.lastOnline
          : "Offline";
      const getisactive =
        !!messagechatusers?.data && messagechatusers?.data?.length > 0
          ? messagechatusers?.data[0]?.user_data?.isOnline
          : "Offline";

      setChatuserfirstname(getFistname);
      setChatuserlastname(getLastname);
      setChatuserprofileimage(getprofileImage);
      setlastonlineTime(getlastonlinetime);
      setisActive(getisactive);
      FetchMessageChatLists();
    }
  }, [messagechatusers?.data]);

  return (
    <>
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
              {messagechatusers?.data?.map((item: any, key: number) => {
                return (
                  <>
                    <MessageThumb
                      profileimage={item?.user_data?.profilePicture}
                      textContent="Lorem ipsum dolor sit amet somethi..."
                      showUnread
                      firstName={item?.user_data?.firstName}
                      lastName={item?.user_data?.lastName}
                      userActive={item?.user_data.isOnline}
                      lastonline={getuserLastSeen(item?.user_data?.lastOnline)}
                      showTimePanel
                      clickFun={() => {
                        handleChatUserClick(item._id);
                        handlelastName(item?.user_data?.lastName);
                        handlefirstName(item?.user_data?.firstName);
                        handleprofileimage(item?.user_data?.profilePicture);
                        handlelastonlinestatus(item?.user_data?.lastOnline);
                        handleisActive(item?.user_data?.isOnline);
                      }}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[calc(100%-278px)] sm:w-full">
          <div className="border-gray-200 border-b">
            <MessageThumb
              // textContent="Last seen: 54 min ago"
              firstName={chatuserfistname}
              lastName={chatuserlastname}
              profileimage={chatuserprofileimage}
              // textContent="Last seen: 56 min ago"
              textContent={getLastSeenText(lastonlinetime)}
              showUnread
              userActive={isActive}
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
                                      {dayjs(item?.chat_date).format("h:mm A")}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MessagingHistory);
