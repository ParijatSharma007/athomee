"use client";

import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CaklendarIcon from "@/json/icons/CaklendarIcon";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";

import CollectionSettingsModal from "../CollectionSettingsModal/CollectionSettingsModal";

export default function CustomReservationHeader({
  headerName,
  className,
  isMenu,
  dropdownShow = true,
  setSearch,
}: {
  headerName?: string;
  className?: string;
  isMenu?: boolean;
  dropdownShow?: boolean;
  setSearch: any;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const [open1, setOpen1] = useState<boolean>(false);

  const [date, setDate] = useState<Date>();

  const [date1, setDate1] = useState<Date>();

  const services = [
    {
      value: "value1",
      label: "Deep Tissue Massage",
    },
    {
      value: "value2",
      label: "Deep Tissue Massage",
    },
    {
      value: "value3",
      label: "Deep Tissue Massage",
    },
    {
      value: "value4",
      label: "Deep Tissue Massage",
    },
    {
      value: "value5",
      label: "Lymphatic Drainage Massage",
    },
    {
      value: "value6",
      label: "Hot Stone Massage",
    },
    {
      value: "value7",
      label: "Shiatsu Massage",
    },
    {
      value: "value8",
      label: "Sports Massage",
    },
    {
      value: "value9",
      label: "Sports Massage",
    },
    {
      value: "value10",
      label: "Aromatherapy Massage",
    },
    {
      value: "value11",
      label: "Aromatherapy Massage",
    },
    {
      value: "value12",
      label: "Lymphatic Drainage Massage",
    },
    {
      value: "value13",
      label: "Deep Tissue Massage",
    },
    {
      value: "value14",
      label: "Deep Tissue Massage",
    },
    {
      value: "value15",
      label: "Deep Tissue Massage",
    },
    {
      value: "value16",
      label: "Deep Tissue Massage",
    },
    {
      value: "value17",
      label: "Trigger Point Massage",
    },
    {
      value: "value18",
      label: "Trigger Point Massage",
    },
  ];
  return (
    <div
      className={cn(
        "flex flex-wrap justify-between items-center mb-6 relative",
        className
      )}
    >
      <h1 className=" text-4xl font-satoshi_medium tracking-[-0.72px] lg:w-full lg:mb-4 sm:mb-2 sm:text-[22px]">
        {headerName || "Reservations"}
      </h1>
      <div className=" flex flex-wrap items-center lg:w-full sm:w-full">
        <SerachInputComponent
          className="flex items-center flex-wrap py-2 px-4 max-w-[400px] bg-gray-100 rounded-xl mx-auto min-w-[400px] sm:min-w-full sm:max-w-full lg:w-full lg:max-w-full lg:min-w-full lg:mb-4"
          placeholderText="Search"
          onInputChange={setSearch}
        />
      </div>
    </div>
  );
}
