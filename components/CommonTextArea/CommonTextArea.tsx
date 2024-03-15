"use client";

import { useState } from "react";
import { Textarea } from "../ui/textarea";

interface CommonTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholderLabel: string;
  placeholderText?: string;
  height?: string;
}

export default function CommonTextArea({
  placeholderLabel,
  placeholderText,
  height,
  ...props
}: CommonTextAreaProps) {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const onFocusChange = () => {
    setFocus(true);
  };

  const onBlurChange = () => {
    if (!value) {
      setFocus(false);
    }
  };

  const onChangeValue = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div className="relative">
      <label
        className={`absolute left-4 text-base  transition-all duration-300 text-[var(--cmn-grey2)] ${
          focus || value ? "text-xs top-[12px]" : "text-base top-[21px]"
        }`}
        htmlFor="commonInput"
      >
        {placeholderLabel}
      </label>
      <Textarea
        placeholder={placeholderText}
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        onChange={onChangeValue}
        className={`pt-[30px] pl-[14px] pr-[43px] border border-solid border-[gray-200] h-[${
          height || "auto"
        }] text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 resize-none`}
        {...props}
      />
    </div>
  );
}
