"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDown } from "lucide-react";
import moment from "moment";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AnyARecord } from "dns";
import { toast } from "../ui/use-toast";

interface ClientCustomCalenderTimeProps {
  onDataFromChild: any;
  disableCondition?: any;
  selectedDate?: Date;
  dateselectvalue?: any;
  timeselectvalue?: any;
}

interface TimeItem {
  timeText: string;
}
// export default function CustomCalenderTime({ onDataFromChild }) {
const ClientCustomCalenderTime: React.FC<ClientCustomCalenderTimeProps> = ({
  onDataFromChild,
  disableCondition,
  dateselectvalue,
  timeselectvalue,
  selectedDate,
}) => {
  // const timeWrap: TimeItem[] = [
  //   { timeText: "09:00 - 09:15" },
  //   { timeText: "09:15 - 09:30" },
  //   { timeText: "10:45 - 11:00" },
  //   { timeText: "11:30 - 11:45" },
  //   { timeText: "15:30 - 15:45" },
  //   { timeText: "15:30 - 15:45" },
  //   { timeText: "15:30 - 15:45" },
  // ];

  const timeWrap: TimeItem[] = [
    { timeText: "09:00 " },
    { timeText: "09:15 " },
    { timeText: "10:45 " },
    { timeText: "11:30 " },
    { timeText: "15:30 " },
    { timeText: "15:30 " },
    { timeText: "15:30 " },
  ];

  const timeWrapTwo: TimeItem[] = [
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
  ];
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = useState<string>("");
  const [checkBtn, setCheckBtn] = React.useState<any>(null);
  const [validationMessage, setValidationMessage] = useState<string>("");
  const handelCheck = (index: number, value: string) => {
    setTime(value);
    setCheckBtn(index);
  };

  const today = new Date();

  // useEffect(() => {
  //   // onDataFromChild(selectedDate);
  // }, [selectedDate, onDataFromChild]);

  // useEffect(() => {
  //   onDataFromChild(date); // Invoking the callback function when date changes
  // }, [date, onDataFromChild]);

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handleTimeChange = (time: string) => {
    setTime(time);
  };
  const handleApply = () => {
    if (!date) {
      setValidationMessage("Please select a date before applying.");

      return;
    }
    if (!time) {
      setValidationMessage("Please select a time before applying.");
    }
    if (date && time) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const formattedTime = time.trim();
      console.log("Formatted Date:", formattedDate);
      console.log("Formatted Time:", formattedTime);
      dateselectvalue(formattedDate);
      timeselectvalue(formattedTime);
    } else {
      console.log("Please select a date and time before applying.");
    }
  };

  return (
    <div className="relative pb-[80px]">
      <div className="relative flex px-6 h-full overflow-y-auto md:flex-wrap">
        <Calendar
          disable={disableCondition}
          selectedDate={date}
          handleDateChange={handleDateChange}
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full md:!min-w-[90%]"
        />
        <div className="timeWrapList pl-8 h-full md:hidden">
          <ul className="h-full">
            {timeWrap.map((item, index) => (
              <li key={index} className="mb-4">
                <Button
                  onClick={() => handelCheck(index, item.timeText)}
                  type="button"
                  className={`rounded-[4px] bg-transparent border-solid border border-gray-300 w-full text-base text-gray-900 font-satoshi_regular ${
                    checkBtn == index && "bg-gray-900 text-white"
                  }`}
                >
                  {item.timeText}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full mt-5 border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-0 hidden md:block md:overflow-">
          <label className="text-[12px] text-gray-400 m-0 leading-0">
            Time
          </label>
          <Select onValueChange={(e) => console.log(e, "time")}>
            <SelectTrigger
              icon={<ChevronDown color="rgba(112, 112, 123, 1)" />}
              className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
            >
              <SelectValue placeholder="12.00 PM" />
            </SelectTrigger>
            <SelectContent className="p-0 min-w-[100px]">
              <SelectGroup>
                {timeWrapTwo.map((time, i) => (
                  <SelectItem value={time.timeText} key={i}>
                    {time.timeText}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-between items-center ">
        <div className="relative md:hidden">
          <label className="text-sm text-gray-600">Chosen time</label>
          <p className="text-sm text-gray-600 font-satoshi_medium">
            {/* Wednesday, August 3 from 10:45 to 11:00 */}
            {`${moment(date).format("dddd, MMMM D ")}from ${time}`}
          </p>
        </div>
        {!checkBtn && (
          <div className="text-sm text-red-500">{validationMessage}</div>
        )}

        <ul className="flex items-center md:w-full">
          <li className="mr-2 md:w-[40%]">
            <Button
              type="button"
              variant={"outline"}
              className="rounded-[50px] px-[16px] md:min-w-auto md:px-[12px] py-[6px] hover:bg-black hover:text-white md:w-full "
            >
              Cancel
            </Button>
          </li>
          <li className="md:w-[60%]">
            <Button
              type="button"
              onClick={() => {
                handleApply();
              }}
              className="rounded-[50px] px-[20px] md:min-w-auto md:px-[12px] py-[6px] hover:bg-secondary hover:text-white md:w-full"
            >
              Apply
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
function onDataFromChild(selectedDate: Date) {
  throw new Error("Function not implemented.");
}
export default ClientCustomCalenderTime;
