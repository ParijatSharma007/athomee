"use client";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import dayjs from "dayjs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDateTwo, getAmPmFromTime } from "@/lib/utils";
import { AxiosError } from "axios";

export default function EditDateTimeDetailsModal({
  primarydate,
  start_time,
  end_time,
  id,
  updateReserv,
  avialable_data,
}: {
  primarydate: string | undefined;
  start_time: string | undefined;
  end_time: string | undefined;
  id: string;
  updateReserv: any;
  avialable_data: any;
}) {
  // const timeWrap = [
  //   {
  //     timeText: "09:00 - 09:15",
  //   },
  //   {
  //     timeText: "09:15 - 09:30",
  //   },
  //   {
  //     timeText: "10:45 - 11:00",
  //   },
  //   {
  //     timeText: "11:30 - 11:45",
  //   },
  //   {
  //     timeText: "15:30 - 15:45",
  //   },
  //   {
  //     timeText: "15:30 - 15:45",
  //   },
  //   {
  //     timeText: "15:30 - 15:45",
  //   },
  // ];
  const [date, setDate] = React.useState<Date | undefined>(
    primarydate ? new Date(primarydate) : undefined
  );
  // const [starttime, setStartTime] = useState("");
  // const [endtime, setEndTime] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [newStartTime, setNewStartTime] = useState<string | undefined>("");
  const [newEndTime, setNewEndTime] = useState<string | undefined>("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  useEffect(() => {
    if (start_time && end_time) {
      const timeSlotString = `${start_time} - ${end_time}`;
      setAvailableTimeSlots((prevSlots) => [timeSlotString]);
    } else {
      setAvailableTimeSlots([]);
    }
  }, [start_time, end_time]);

  const [checkBtn, setCheckBtn] = React.useState(1);

  // const handelCheck = (index: number) => {
  //   setCheckBtn(index);
  // };

  // const handleCheck = (index: number) => {
  //   if (checkBtn === index) {
  //     setCheckBtn(1);
  //     setNewStartTime("");
  //     setNewEndTime("");
  //   } else {
  //     setCheckBtn(index);
  //     setNewStartTime(availableTimeSlots[index]?.split(" - ")[0]);
  //     setNewEndTime(availableTimeSlots[index]?.split(" - ")[1]);
  //   }
  // };

  const handleCheck = (index: number) => {
    if (checkBtn === index) {
      setCheckBtn(1);
      setNewStartTime("");
      setNewEndTime("");
    } else {
      setCheckBtn(index);
      const timeSlot = availableTimeSlots[index];
      if (timeSlot) {
        setNewStartTime(timeSlot.split(" - ")[0]);
        setNewEndTime(timeSlot.split(" - ")[1]);
      }
    }
  };

  const buttonRef = useRef<any>(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
      const selectedDay = dayjs(selectedDate).format("dddd").toLowerCase();
      const availability = avialable_data?.availability;
      if (availability) {
        console.log("availability", availability);
        console.log("is_available", availability[selectedDay]?.is_available);
        console.log("time_slots", availability[selectedDay]?.time_slots);
        if (availability[selectedDay]?.is_available) {
          setCheckBtn(-1);
          const timeSlots = availability[selectedDay]?.time_slots || [];
          setAvailableTimeSlots(
            timeSlots.map(
              (slot: { start_time: string; end_time: string }) =>
                `${slot.start_time} - ${slot.end_time}`
            )
          );
        } else {
          setAvailableTimeSlots([]);
        }
      } else {
        console.error(
          "Availability data is undefined or has an unexpected structure"
        );
        setAvailableTimeSlots([]);
      }
    } else {
      setAvailableTimeSlots([]);
    }

    setDate(selectedDate);
    setNewStartTime("");
    setNewEndTime("");
  };

  console.log("availableTimeSlots", availableTimeSlots);

  const handleConfirm = () => {
    if (date === undefined && primarydate) {
      setDate(new Date(primarydate));
    }
    if (date !== undefined && checkBtn !== undefined) {
      // const selectedTimeRange = timeWrap[checkBtn].timeText;
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      // const [startTime, endTime] = selectedTimeRange.split(" - ");
      // console.log("startTime",startTime);
      setIsLoading(true);
      updateReserv({
        id,
        date: formattedDate,
        start_time: newStartTime,
        end_time: newEndTime,
      })
        .then((res: any) => {
          setIsLoading(false);
          if (res) {
            console.log("Response", res);
            handleClick();
          } else {
            console.error("Failed to update reservation");
          }
        })
        .catch((error: AxiosError) => {
          console.error(
            "API Request failed with status code",
            error.response?.status
          );
          setIsLoading(false);
        });
    } else {
      console.error("Please select a date and time before confirming.");
    }
  };

  console.log("start_time", avialable_data);

  // Convert unavailable dates to Date objects
  const unavailableDates = avialable_data?.unavailability?.map(
    (dateString: string) => new Date(dateString)
  );

  // A matcher function to disable specified dates
  const disableDates = (date: Date) => {
    // Check if the date is in the array of unavailable dates
    return unavailableDates?.some(
      (unavailableDate: Date) =>
        date.getFullYear() === unavailableDate?.getFullYear() &&
        date.getMonth() === unavailableDate?.getMonth() &&
        date.getDate() === unavailableDate?.getDate()
    );
  };

  // A matcher function to disable specified weekdays (0 is Sunday, 6 is Saturday)
  const disableWeekdays = (date: Date) => {
    return avialable_data?.unavailable_weekdays?.includes(date.getDay());
  };

  // Combine specific dates and weekdays in the disabled condition
  const disabledConditions = [disableDates, disableWeekdays];

  const handleCancel = () => {
    setCheckBtn(-1);
    setDate(primarydate ? new Date(primarydate) : undefined);
    setNewStartTime("");
    setNewEndTime("");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-[14px] rounded-[100px]  border-none hover:bg-primary hover:text-white"
          >
            Change
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] text-left md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Change execution date
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="relative block mb-4 px-6">
              <label className="text-sm text-gray-600">
                Current reservation time
              </label>
              {primarydate && start_time && end_time ? (
                <>
                  <p className="text-sm text-gray-600 font-satoshi_medium">
                    {/* Wednesday, August 3 from 10:45 to 11:00 (GMT+1) */}
                    {dayjs(primarydate).format("MMM D YYYY")} , {start_time} -{" "}
                    {end_time}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="relative flex px-6 md:px-4 h-full overflow-y-auto md:basis-full md:flex-wrap">
              <Calendar
                disabled={disabledConditions}
                mode="single"
                selectedDate={
                  date || (primarydate ? new Date(primarydate) : undefined)
                }
                handleDateChange={handleDateChange}
                className="w-full"
              />
              <div className="timeWrapList pl-8 md:pl-0 h-full md:h-auto md:w-full md:mt-6">
                <ul className="h-full md:flex md:flex-wrap md:h-auto">
                  {availableTimeSlots?.map((timeSlot, index) => (
                    <li key={index} className="mb-4 md:w-auto md:mr-3 md:mb-3">
                      <Button
                        value={index}
                        onClick={() => {
                          handleCheck(index);
                          setNewStartTime(timeSlot?.split(" - ")[0]);
                          setNewEndTime(timeSlot?.split(" - ")[1]);
                        }}
                        type="button"
                        className={`rounded-[4px] bg-transparent border-solid border border-gray-300 w-full md:w-auto text-base text-gray-900 font-satoshi_regular ${
                          date &&
                          primarydate &&
                          start_time === timeSlot?.split(" - ")[0] &&
                          end_time === timeSlot?.split(" - ")[1] &&
                          dayjs(date).format("YYYY-MM-DD") === primarydate
                            ? "bg-gray-900 text-white"
                            : checkBtn === index
                            ? "bg-gray-900 text-white"
                            : ""
                        }`}
                      >
                        {timeSlot}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="relative md:block hidden mb-4">
                <label className="text-sm text-gray-600">
                  New reservation time
                </label>
                <p className="text-sm text-gray-600 font-satoshi_medium">
                  Wednesday, August 3 from 10:45 to 11:00 (GMT+1)
                </p>
              </div> */}
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-between items-center">
              <div className="relative md:hidden">
                <label className="text-sm text-gray-600">
                  New reservation time
                </label>
                {/* Show message initially */}
                {!date && !newStartTime && !newEndTime && (
                  <p className="text-sm text-gray-600 font-satoshi_medium">
                    Select date and Time Slots
                  </p>
                )}

                {/* Show message if date is selected but either start time or end time is not selected */}
                {date && (!newStartTime || !newEndTime) && (
                  <p className="text-sm text-gray-600 font-satoshi_medium">
                    {dayjs(date).format("MMM D YYYY")} - Select Time Slot
                  </p>
                )}

                {/* Show selected date and time range */}
                {date && newStartTime && newEndTime && (
                  <p className="text-sm text-gray-600 font-satoshi_medium">
                    {dayjs(date).format("MMM D YYYY")}, {newStartTime} -{" "}
                    {newEndTime}
                  </p>
                )}
              </div>
              <ul className="flex items-center md:w-full md:flex-wrap">
                <li className="mr-2 sm:mr-0 sm:mb-4 sm:w-full md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      ref={buttonRef}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
                    onClick={handleConfirm}
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary md:w-full hover:text-white"
                  >
                    {isLoading ? "Confirming..." : "Confirm"}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
