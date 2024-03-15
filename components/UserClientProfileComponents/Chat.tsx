import React, { memo, useEffect, useRef, useState } from "react";
import { MessageThumb } from "../MessageThumb/MessageThumb";
import { ChatmessageDetails } from "@/typescript/Interfaces/chat.interface";
import assets from "@/json/assets";
import dayjs from "dayjs";
import MsgTick from "@/json/icons/MsgTick";
import Image from "next/image";
import ClientMessageInput from "../MessageInput/ClientMessageInput";
import { parseCookies } from "nookies";
import { PrimaryURL } from "@/api/endpoints";
import { io } from "socket.io-client";
import { useChatLists } from "@/hooks/react-qurey/query-hooks/chat.hook";
import { useSearchParams } from "next/navigation";

const Chat = ({
  UERDEATILS,
  containerRef,
  //   clientchatlists,
  //   idValue,
  //   lastMessageRef,
  //   roomDetails,
  //   FetchChatLists,
  handleSendmessage,
}: any) => {
  const searchParams = useSearchParams();
  const idValue = searchParams.get("id");
  const cookies = parseCookies();
  const token = cookies?.atHomee_token ?? "";
  //   const socket: any = io(PrimaryURL, {
  //     extraHeaders: { token: token },
  //   });
  const [socket, setSocket] = useState<any>(null);
  const [roomDetails, setRoomDetails] = useState<any>({});
  const [clientchatlists, setClientchartlists] = useState<any>([]);
  const [isConnected, setIsConnected] = useState(false);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const { mutate: chatlists, isLoading: chatloading } = useChatLists();
  const FetchChatLists = async () => {
    console.log("call FetchChatLists");
    let status = false;
    if (roomDetails?._id) {
      const payload = {
        page: 1,
        limit: 20,
        sort: {
          order: "desc",
          field: "_id",
        },
        room_id: roomDetails._id,
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
    return false;
  };

  useEffect(() => {
    if (!socket) {
      const initializeSocket = io(PrimaryURL, {
        extraHeaders: { token: token },
      });
      initializeSocket.on("connect", () => {
        console.log(`Socket ${initializeSocket.id} connected.`);
        initializeSocket.emit("createRoom", { receiver_id: idValue });
        setIsConnected(true);
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

//   useEffect(() => {
//     if (!!socket) {
//       if (!socket?.connected) {
//         socket.on("connect", () => {
//           console.log(`Socket ${socket.id} connected.`);
//           socket.emit("createRoom", { receiver_id: idValue });

//           socket.emit("test");
//           console.log(
//             `Socket createRoom event emitted with receiver_id: ${idValue}`
//           );
//           setIsConnected(true);

//           // socket.on("createRoom", (data: any) => {
//           //   console.log("Socket Room created:", data);
//           //   socket.emit("joinRoom", { room_id: data._id });
//           //   setRoomDetails(data);
//           // });

//           // socket.on("createMessage", (data: any) => {
//           //   console.log("Socket Messagereceived:", data);
//           //   FetchChatLists();
//           //   console.log("call 2");
//           // });

//           // if (roomDetails?._id) {
//           //   console.log("@Room : ", roomDetails?._id);
//           //   socket.on(roomDetails?._id, (data: any) => {
//           //     console.log("@Room admin data", { roomId: roomDetails?._id, data });
//           //     FetchChatLists();
//           //     console.log("call 3");
//           //   });
//           // }
//         });
//       }

//       // }
//       if (!!socket?.connected) {
//         console.log("Socket listining Room created");
//         socket.on("createRoom", (data: any) => {
//           console.log("Socket Room created:", data);
//           socket.emit("joinRoom", { room_id: data._id });
//           setRoomDetails(data);
//         });
//       }
//     }
//     console.log("socket inside", isConnected,);
//     return () => {
//       if (!!socket) {
//         socket.disconnect();
//       }
//     };
//   }, [socket]);
  useEffect(() => {
    if (roomDetails?._id) {
      console.log("@Room : ", roomDetails?._id);
      socket.on(roomDetails?._id, (data: any) => {
        console.log("@Room admin data", { roomId: roomDetails?._id, data });
        FetchChatLists();
        console.log("call 3");
      });
    }
  }, [roomDetails?._id, socket]);
  useEffect(() => {
    if (!!roomDetails?._id) {
      FetchChatLists();
    }
  }, [roomDetails?._id]);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  }, [clientchatlists]);

  console.log("socket", isConnected, socket);

  return (
    <>
      <div className="flex border border-gray-200 rounded-lg">
        <div className="w-full">
          <div className="border-gray-200 border-b">
            <MessageThumb
              profileimage={
                UERDEATILS?.data?.data?.profilePicture || assets?.noprofileimage
              }
              textContent="Last seen: 54 min ago"
              showUnread
            />
          </div>
          <div className="bg-inherit">
            <div className="w-full">
              <div
                className="px-6 pt-6 h-[600px] overflow-y-auto"
                ref={containerRef}
                style={{ scrollBehavior: "smooth" }}
              >
                {clientchatlists?.data
                  ?.slice()
                  .reverse()
                  ?.map((item: ChatmessageDetails, index: number) => {
                    return (
                      <>
                        {item?.sender_data._id != idValue ? (
                          <>
                            <div
                              key={index}
                              // ref={containerRef}
                              className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4"
                            >
                              <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                                {/* Amelia G. */}
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
                                  {/* 5:50 PM */}
                                  {dayjs(item?.chat_date).format("h:mm A")}
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
                                  {/* Amelia G. */}
                                  {item?.sender_data?.firstName}
                                  {""}
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
                                    {/* 5:50 PM */}
                                    {dayjs(item?.chat_date).format("h:mm A")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div ref={lastMessageRef} />
                          </>
                        )}
                      </>
                    );
                  })}
                <div ref={lastMessageRef} />
              </div>
              <div className="p-6">
                <ClientMessageInput
                  roomId={roomDetails?._id}
                  messageData={FetchChatLists}
                  sendMessageData={handleSendmessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Chat);
