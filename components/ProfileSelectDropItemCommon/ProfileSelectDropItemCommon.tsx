import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

interface slectPropsItem{
    defaultText: string;
}

export default function ProfileSelectDropItemCommon({defaultText}:slectPropsItem) {
  return (
    <div>
      <Select>
        <SelectTrigger icon={<ChevronDown color="rgba(81, 82, 92, 1)" width={16} height={16}/>} className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900">
          <SelectValue placeholder={defaultText} />
        </SelectTrigger>
        <SelectContent className="p-0">
          <SelectGroup>
            <SelectItem value="2">Admin</SelectItem>
            <SelectItem value="3">Member</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
