import React, { useEffect } from "react";

import { DayPicker } from "react-day-picker";
import { buttonVariants } from "@/components/ui/button";
import CalendarIconLeft from "@/json/icons/CalendarIconLeft";
import CalendarIconRight from "@/json/icons/CalendarIconRight";
import { cn } from "@/lib/utils";
export default function Calender2({
  className,
  classNames,
  selectedDate,
  setSelectedDate,
  handleDateChange,
  mode,
  showOutsideDays = true,
  ...props
}: any) {
  const initialDays: Date[] = [];
  const [days, setDays] = React.useState<Date[] | undefined>(initialDays);
  console.log("🚀 ~ days:", days);

  const footer =
    days && days.length > 0 ? (
      <p>You selected {days.length} day(s).</p>
    ) : (
      <p>Please pick one or more days.</p>
    );

    useEffect(() => {
        setSelectedDate(days)
    }, [days])
    

  return (
    <DayPicker
      mode="multiple"
      min={1}
      selected={days}
      onSelect={setDays}
      //   footer={footer}
      classNames={{
        months:
          "flex flex-row sm:flex-row sm:space-x-4 sm:space-y-0 wrapper_CalendarTw",
        month: " w-full",
        caption:
          "mb-4 flex justify-start py-1 px-2 relative items-center w-full captionTopMnth",
        caption_label: "text-[20px] pr-4 font-satoshi_medium monthName_top",
        nav: "relative md:absolute md:left-0 md:right-0 md:flex md:justify-between",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-100 hover:opacity-75"
        ),
        nav_button_previous: "mr-1 !rounded-full prevBtn_calender",
        nav_button_next: "!rounded-full",
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-between",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2 justify-between",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 md:hover:bg-gray-900 md:hover:text-white md:rounded-full"
        ),
        day_range_start: "day-range-end selectedDate",

        day_range_end: "day-range-end selectedDate",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground !rounded-full ",
        day_today: "bg-accent text-accent-foreground !rounded-full currentdate",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30 ",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground fixedDateDay",
        day_hidden: "invisible",
        ...classNames,
      }}
    />
  );
}
