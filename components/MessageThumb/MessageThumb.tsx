import assets from "@/json/assets";
import MsgTick from "@/json/icons/MsgTick";
import Image from "next/image";

interface TextProps {
  textContent?: string;
  showTimePanel?: boolean;
  showUnread?: boolean;
  userActive?: boolean;
  clickFun?: any;
  profileimage?: any;
  firstName?: string;
  lastName?: string;
  lastonline?: string;
}
export const MessageThumb = ({
  textContent,
  showTimePanel,
  showUnread,
  userActive,
  clickFun,
  profileimage = "",
  firstName = "",
  lastName = "",
  lastonline = "",
}: TextProps) => {
  return (
    <div
      className="flex w-full px-4 py-5 xl:p-3 items-center"
      onClick={clickFun}
    >
      <div className="w-[48px] h-[48px]  relative">
        <figure className="overflow-hidden rounded-full">
          <Image
            alt=""
            width={48}
            height={48}
            src={!!profileimage ? profileimage : assets.noprofileimage}
          />
        </figure>
        <span
          className={`inline-block w-[10px] h-[10px] rounded-full absolute right-[2px] bottom-[1px] border-gray-50 z-1 ${
            userActive ? "bg-green-500" : "bg-gray-300"
          }`}
        ></span>
      </div>
      <div className="w-[calc(100%-48px)] pl-4">
        <div className="flex justify-between">
          <h3 className="font-satoshi_regular text-base text-gray-900">
            {!!firstName ? firstName : "Adriana"} {!!lastName ? lastName : "W"}
          </h3>
          {showTimePanel && (
            <div className="flex items-center">
              {showUnread && (
                <span className="bg-red-500 w-2 h-2 rounded-full inline-block mr-4"></span>
              )}
              <div className="flex items-center">
                <MsgTick />
                <p className="m-0 pl-[4px] text-xs text-gray-400">{lastonline}</p>
              </div>
            </div>
          )}
        </div>
        <p className="font-satoshi_regular text-sm text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap">
          {textContent}
        </p>
      </div>
    </div>
  );
};
