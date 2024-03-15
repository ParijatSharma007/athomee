"use client";
import React, { useEffect, useState } from "react";

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
import dayjs from "dayjs";

interface CustomCalenderTimeProps {
  onDataFromChild: any;
  disableCondition ?: any,
  selectedDate ?: string,
  handleDateChange ?: (s : string) => void
  unavailability ?: string[],
  unavailable_weekdays ?: number[],
  passingDateTime ?: (val : {date : string, time : string}) => void
  availability ?: any
}

type Availability = Record<string , any>
// export default function CustomCalenderTime({ onDataFromChild }) {
const CustomCalenderTime: React.FC<CustomCalenderTimeProps> = ({
  onDataFromChild, 
  selectedDate, 
  unavailability, unavailable_weekdays,
  passingDateTime,
  availability
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

  const [timeWrap, setTimeWrap] = useState<any[]|[]>([])

  const timeWrapTwo = [
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
    { timeText: "12:00 PM" },
  ];
  const [date, setDate] = React.useState<string>(Date());
  const [disableCondition, setDisableCondition] = useState<any>([])
  const [time, setTime] = useState<string>("")
  const [checkBtn, setCheckBtn] = React.useState<number|null>(null);
  const handelCheck = (index: number, value : string) => {
    setTime(value)
    setCheckBtn(index);
  };

  const today = new Date();

  useEffect(() => {
    console.log();
  }, [availability, date])

  useEffect(() => {
    if(selectedDate)
    setDate(selectedDate)
  }, [selectedDate])
  
  useEffect(() => {
    const unavailableDates = unavailability?.map(
      (dateString: string) => new Date(dateString)
    );

    const disableWeekdays = (date: Date) => {
      return unavailable_weekdays?.includes(date.getDay());
    };

    const disableDates = (date: Date) => {
      // Check if the date is in the array of unavailable dates
      return unavailableDates?.some(
        (unavailableDate: Date) =>
          date.getFullYear() === unavailableDate?.getFullYear() &&
          date.getMonth() === unavailableDate?.getMonth() &&
          date.getDate() === unavailableDate?.getDate()
      );
    };
    setDisableCondition([disableWeekdays, disableDates])
  }, [unavailability, unavailable_weekdays]);

  const handleDateChange = (date: string) => {
    setDate(date)
  };

  const submitDateTime = () => {
    if(passingDateTime)
    passingDateTime({
      date,
      time
    })
  }

  // console.log(disableCondition, "disability");

  return (
    <div className="relative pb-[80px]">
      <div className="relative flex px-6 h-full overflow-y-auto md:flex-wrap">
        <Calendar
          disabled={disableCondition}
          selectedDate={date}
          handleDateChange={handleDateChange}
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full md:!min-w-[90%]"
        />
        <div className="timeWrapList pl-8 h-full md:hidden">
          <ul className="h-full">
            {availability && availability[dayjs(date).format("dddd").toLocaleLowerCase() as unknown as keyof Availability]?.time_slots
            .map((item : any, index : number) => (  
              <li key={index} className="mb-4">
                <Button
                  onClick={() => handelCheck(index, `${item.start_time}-${item.end_time}`)}
                  type="button"
                  className={`rounded-[4px] bg-transparent border-solid border border-gray-300 w-full text-base text-gray-900 font-satoshi_regular ${
                    checkBtn == index && "bg-gray-900 text-white"
                  }`}
                >
                  {`${item.start_time}-${item.end_time}`}
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
            {`${moment(selectedDate).format("dddd, MMMM D ")}from ${time}`}
          </p>
        </div>
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
              className="rounded-[50px] px-[20px] md:min-w-auto md:px-[12px] py-[6px] hover:bg-secondary hover:text-white md:w-full"
              onClick={submitDateTime}
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
export default CustomCalenderTime;
