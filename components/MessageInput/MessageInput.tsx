"use client";

import { Input } from "@/components/ui/input";
import assets from "@/json/assets";
import EmojiIcon from "@/json/icons/EmojiIcon";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import UploadImageModal from "../UploadImageModal/UploadImageModal";
import { Button } from "../ui/button";
const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

function MessageInput() {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event: any, emojiObject: any) => {
    console.log(event.emoji);
    setInputStr((prevInput) => prevInput + event.emoji);
    setShowPicker(false);
  };
  return (
    <div className=" relative w-full">
      <Input
        value={inputStr}
        type="text"
        onChange={(e) => setInputStr(e.target.value)}
        placeholder="Start typing..."
        className=" rounded-[100px] p-3  min-h[62px] md:h-[56px] pl-14 pr-[185px] md:pl-12 md:pr-[100px] placeholder:text-gray-900 font-normal"
      />
      <figure className=" rounded-full overflow-hidden absolute top-1/2 -translate-y-1/2 left-3 w-8 h-8">
        <Image
          src={assets.menuProfileImg1}
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
          <button onMouseEnter={() => setShowPicker((val) => !val)}>
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
            className=" bg-gray-900 min-h-10 hover:border-primary hover:bg-white  text-white rounded-[100px] font-medium text-base w-[65px]  p-1"
          >
            Send
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default MessageInput;
