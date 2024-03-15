"use client";
import NotificationToolTipIcon from "@/json/icons/NotificationToolTipIcon";
import { Button } from "./button";
import { Input } from "./input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface InputProps {
  label?: string;
  value?: string | any;
  placeholder?: string;
  withTooltip?: boolean;
}
const CustomInputWithLabel = ({
  label,
  value,
  placeholder,
  withTooltip,
}: InputProps) => {
  return (
    <div className=" h-[66px]">
      <div
        className={`relative h-full border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] focus-within:static ${
          !value && " focus-within:text-[12px] text-[16px]"
        } ${value ? "text-[12px]" : "text-[16px]"}`}
      >
        <label
          className={` text-gray-400 m-0 leading-0 absolute  ${
            value
              ? " focus:top-0 focus:translate-y-0"
              : "top-1/2 -translate-y-1/2"
          }`}
        >
          {label}
        </label>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          className={`border-0 p-0 h-auto text-[16px] bg-transparent text-gray-900 font-satoshi_medium placeholder:text-gray-400 absolute top-1/2 -translate-y-1/2 ${
            !value && "focus:mt-2 focus:translate-y-0"
          }`}
          onChange={() => console.log("demo")}
        />

        {withTooltip && (
          <div className="absolute right-4 top-[50%] translate-y-[-50%]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-0 p-0 w-auto h-auto bg-transparent"
                  >
                    <NotificationToolTipIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-white">
                  <p>Lorem Ipsum is simply dummy text.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInputWithLabel;
