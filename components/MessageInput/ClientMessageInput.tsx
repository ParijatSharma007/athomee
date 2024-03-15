"use client";
import io from "socket.io-client";
import { Input } from "@/components/ui/input";
import assets from "@/json/assets";
import EmojiIcon from "@/json/icons/EmojiIcon";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import UploadImageModal from "../UploadImageModal/UploadImageModal";
import { Button } from "../ui/button";
import { parseCookies } from "nookies";
import { PrimaryURL } from "@/api/endpoints";
import { CircularProgress } from "@mui/material";
const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

function ClientMessageInput({
  sendMessageData,
  roomId,
  messageData,
  profileimage = "",
}: {
  sendMessageData: any;
  roomId: string;
  messageData: any;
  profileimage?: any;
}) {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onEmojiClick = (event: any, emojiObject: any) => {
    console.log(event.emoji);
    setInputStr((prevInput) => prevInput + event.emoji);
    setShowPicker(false);
  };

  const onSendClick = () => {
    setIsLoading(true);
    console.log("inputStr", inputStr);
    if (inputStr.trim() === "") {
      setIsLoading(false);
      return;
    }
    const cookies = parseCookies();
    const token = cookies?.atHomee_token;
    const socket = io(PrimaryURL, {
      extraHeaders: { token: token },
    });
    socket.emit("createMessage", { room_id: roomId, text: inputStr });
    setIsLoading(false);

    socket.on("createMessage", (data) => {
      console.log("Socket Messagereceived:", data);
      messageData()
      // setIsLoading(false);
      // let status = messageData();
      // if (!!status) {
      //   setIsLoading(false);
      // } else {
      //   setIsLoading(true);
      // }
      setInputStr("");
      
    });
    socket.on("error", (error) => {
      console.error("Socket Error:", error);
      setIsLoading(false);
    });

    setInputStr("");
    sendMessageData(inputStr);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendClick();
    }
  };

  return (
    <div className=" relative w-full">
      <Input
        value={inputStr}
        type="text"
        onKeyPress={handleKeyPress}
        onChange={(e) => setInputStr(e.target.value)}
        placeholder="Start typing..."
        className=" rounded-[100px] p-3  min-h[62px] md:h-[56px] pl-14 pr-[185px] md:pl-12 md:pr-[100px] placeholder:text-gray-900 font-normal"
      />
      <figure className=" rounded-full overflow-hidden absolute top-1/2 -translate-y-1/2 left-3 w-8 h-8">
        <Image
          // src={assets.menuProfileImg1}
          src={!!profileimage ? profileimage : assets.noprofileimage}
          alt={"profile_icon"}
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      </figure>
      <ul className=" absolute right-3 top-1/2 -translate-y-1/2 flex items-center ">
        <li className="mr-8 xl:mr-2 flex">
          <UploadImageModal />
        </li>
        <li className="mr-5 xl:mr-2 flex md:hidden">
          <button onClick={() => setShowPicker((val) => !val)}>
            <EmojiIcon />
          </button>
          {showPicker && (
            <div className="absolute bottom-0  z-[99] right-0">
              <Picker width={290} onEmojiClick={onEmojiClick} />
            </div>
          )}
        </li>
        <li className="flex">
          <Button
            variant="outline"
            onClick={onSendClick}
            disabled={isLoading}
            className=" bg-gray-900 min-h-10 hover:border-primary hover:bg-white  text-white rounded-[100px] font-medium text-base w-[65px]  p-1"
          >
            {/* Send */}
            {isLoading ? (
              <>
                <CircularProgress color="inherit" size={25}/>
              </>
            ) : (
              "Send"
            )}
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default ClientMessageInput;
