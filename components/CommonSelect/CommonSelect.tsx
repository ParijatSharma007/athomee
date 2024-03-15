"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

interface Option {
  value: string;
  label: string;
}

interface CommonSelectProps {
  options: Option[];
  labelPlaceholder: string;
  selectPlaceholder?: string;
  onChange:any
}

function CommonSelect({
  options,
  labelPlaceholder,
  onChange,
  selectPlaceholder,
}: CommonSelectProps) {
  const [selectvalue, selectvalueUpdate] = React.useState(false);
  const handleOpenChange = (data: any) => {
    if (data === true) {
      selectvalueUpdate(true);
    } else {
      selectvalueUpdate(false);
    }
  };
  const handleChange = (data: any) => {
    onChange(data)
    console.log("data", data);
    if (data.length === 0) {
      selectvalueUpdate(false);
    } else {
      selectvalueUpdate(true);
    }
  };

  return (
    <>
      <div className="relative">
        <label
          className={`absolute left-4 text-base transition-all duration-300 text-[var(--cmn-grey2)] ${
            selectvalue
              ? "text-xs top-[12px]"
              : "text-base top-[21px] pr-5 break-words overflow-hidden max-h-[26px] text-ellipsis"
          }`}
        >
          {labelPlaceholder}
        </label>
        <Select onValueChange={handleChange} onOpenChange={handleOpenChange}>
          <SelectTrigger className="h-[66px] w-[100%] border border-[--cmn-grey] rounded-[8px] outline-none relative z-1 pt-[27px] px-[14px] text-base custom_svg_arrrowdrop">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[--background]">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default CommonSelect;
