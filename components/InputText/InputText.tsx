"use client";
import { Input } from "@/components/ui/input";
import assets from "@/json/assets";
import NotificationToolTipIcon from "@/json/icons/NotificationToolTipIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface CommonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderLabel?: string;
  passwordvalue?: boolean;
  valueTxt?: string;
  withTooltip?: boolean;
  className?: string;
  onChange: (valueTxt: any) => void;
}
function CommonInput({
  placeholderLabel,
  passwordvalue,
  valueTxt,
  withTooltip,
  className,
  onChange,
  ...props
}: CommonInputProps) {
  // const [valueTxt, setValue] = useState(valueTxt);
  const [focus, setFocus] = useState(false);
  const [password, updatepassword] = useState(false);

  const onFocusChange = () => {
    setFocus(true);
  };

  const onBlurChange = () => {
    if (!valueTxt) {
      setFocus(false);
    }
  };

  // const onChangeValue = (event: any) => {
  //   setValue(event.target.valueTxt);
  // };

  return (
    <div className="relative">
      <label
        className={`absolute left-4 font-satoshi_medium text-base  transition-all duration-300 pointer-events-none text-[var(--cmn-grey2)] ${
          focus || valueTxt ? "text-xs top-[12px]" : "text-base top-[21px]"
        }`}
        htmlFor="commonInput"
      >
        {placeholderLabel}
      </label>
      {passwordvalue ? (
        <div>
          <Input
            id="commonInput"
            type={password ? "text" : "password"}
            onFocus={onFocusChange}
            onBlur={onBlurChange}
            value={valueTxt}
            onChange={(event) => onChange(event.target.value)}
            className={cn("pt-[22px] pl-[14px] pr-[43px]", className)}
            {...props}
          />
          <span
            className="absolute top-[25px] right-[20px] cursor-pointer"
            onClick={() => updatepassword(!password)}
          >
            <Image src={assets?.eye_closs} width={16} height={16} alt="" />
          </span>
        </div>
      ) : (
        <Input
          id="commonInput"
          onFocus={onFocusChange}
          onBlur={onBlurChange}
          onChange={(event) => onChange(event.target.value)}
          className={cn("pt-[22px] pl-[14px] font-satoshi_medium", className)}
          value={valueTxt}
          {...props}
        />
      )}
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
  );
}

export default CommonInput;
