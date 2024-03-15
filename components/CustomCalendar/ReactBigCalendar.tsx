/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import assets from "@/json/assets";
import ExpandIcon from "@/json/icons/ExpandIcon";
import PencilIcon from "@/json/icons/PencilIcon";
import moment from "moment";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Calendar,
  DateCellWrapperProps,
  View,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarModal from "../CalendarModal/CalendarModal";
import CalendarModal2 from "../CalendarModal/CalendarModal2";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";
import CalendarCard from "./CalendarCard";
import events from "./events";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const EventComponent = (event: any) => {
  return (
    <div className="flex justify-between items-center custom_event_chip">
      <p className="text-sm text-gray-700 font-satoshi_medium text-ellipsis custom_event_title overflow-hidden whitespace-nowrap w-[90px]">
        {event?.event?.title}
      </p>
      <p className="text-sm text-gray-500 custom_event_time">
        {moment(event?.event?.start).format("hh:mm A")}
      </p>
    </div>
  );
};

const eventStyleGetter = (
  event: any,
  start: Date,
  end: Date,
  isSelected: boolean
) => {
  const style = {
    backgroundColor: "#F7F4F1",
    color: "white",
    borderRadius: "8px",
    border: "0",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "12px",
    paddingRight: "12px",
    display: "block",
  };

  return {
    style,
  };
};

const CustomDateCellWrapper = ({
  children,
  value,
  selectedDate,
  clickedOnCustomButtonRef,
}: DateCellWrapperProps & {
  selectedDate: Date | null;
  clickedOnCustomButtonRef: React.MutableRefObject<"expand" | "edit" | null>;
}) => {
  const renderCustomButtons = () => {
    if (
      !moment(selectedDate).startOf("day").isSame(moment(value).startOf("day"))
    ) {
      return null;
    } else {
      return (
        <div className=" absolute right-2 top-2 flex items-center z-50 btn_chips">
          <Button
            onClick={() => {
              clickedOnCustomButtonRef.current = "expand";
            }}
            className="cmn_btn hover:bg-white hover:border hover:border-gray-900"
          >
            <ExpandIcon />
          </Button>
          <Button
            onClick={() => {
              clickedOnCustomButtonRef.current = "edit";
            }}
            className="cmn_btn text-gray-900 hover:bg-white hover:border hover:border-gray-900"
          >
            <PencilIcon />
          </Button>
        </div>
      );
    }
  };

  return (
    <div className="flex-auto text-right !flex justify-end relative">
      {children}
      {renderCustomButtons()}
    </div>
  );
};

export default function ReactBigCalendar({
  defaultMonth,
  showToolbar = true,
  isMobile = false,
}: {
  defaultMonth: View;
  showToolbar: boolean;
  isMobile: boolean;
}) {
  const clickedOnCustomButtonRef = useRef<"expand" | "edit" | null>(null);
  const [eventsData, setEventsData] = useState<any>(events);
  const [index, setIndex] = useState(false);

  const handleSelect = ({ start, end }: any) => {
    if (!clickedOnCustomButtonRef.current) {
      setSelectedDate(null);
    } else if (clickedOnCustomButtonRef.current === "edit") {
      setmodalOpen(true);
      clickedOnCustomButtonRef.current = null;
    } else if (clickedOnCustomButtonRef.current === "expand") {
      setmodalOpen2(true);
      clickedOnCustomButtonRef.current = null;
    }

    document.querySelector("body")?.classList.remove("custom_index");
    if (!index) {
      setTimeout(() => {
        // const formattedTitle = `${moment(start).format('LT')} - ${moment(end).format('LT')}`;
        const title = window.prompt("New Event name");
        if (title)
          setEventsData([
            ...eventsData,
            {
              start,
              end,
              title,
            },
          ]);
      }, 200);
    }
    setIndex(false);
  };
  const [view, setView] = useState<View>("month");
  const handleViewChange = useCallback((view: View) => {
    // console.log(view, "view");
    setView(view);
  }, []);

  useEffect(() => {
    if (defaultMonth) {
      setView(defaultMonth);
    }
  }, [defaultMonth]);

  const [date, setDate] = useState<Date>(new Date());
  const handleNavigateChange = useCallback((date: Date) => {
    setDate(date);
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onShowMore = useCallback((_e: any, date: Date) => {
    setSelectedDate(date);
    document.querySelector("body")?.classList.add("custom_index");
    setIndex(true);
  }, []);

  const [show, setShow] = useState<{ x: number; y: number } | null>(null);

  const [cardShow, setCardShow] = useState<boolean>(false);

  const handleChange = useCallback(
    (_e: any, event: React.SyntheticEvent<HTMLElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      if (!isMobile) {
        setShow({
          x: bounds.x,
          y: (event as unknown as MouseEvent).pageY,
        });
      } else {
        setCardShow(true);
        scrollTo(0, 0);
        const bodyElement = document.querySelector("body");
        const htmlElement = document.querySelector("html");
        bodyElement?.classList.add("hide_scroll");
        htmlElement?.classList.add("hide_scroll");
      }
    },
    [isMobile]
  );

  const cardCloseCallback = useCallback((data: boolean) => {
    setCardShow(data);
    const bodyElement = document.querySelector("body");
    const htmlElement = document.querySelector("html");
    bodyElement?.classList.remove("hide_scroll");
    htmlElement?.classList.remove("hide_scroll");
  }, []);

  //calender modal

  const [modalOpen, setmodalOpen] = useState(false);
  const modalCloseCallback = useCallback((data: boolean) => {
    setmodalOpen(data);
  }, []);

  const modalCloseInteractOutsideCallback = useCallback((event: any) => {
    setmodalOpen(event);
  }, []);

  const [modalOpen2, setmodalOpen2] = useState(false);
  const modalCloseCallback2 = useCallback((data: boolean) => {
    setmodalOpen2(data);
  }, []);

  const modalCloseInteractOutsideCallback2 = useCallback((event: any) => {
    setmodalOpen2(event);
  }, []);

  useEffect(() => {
    if (modalOpen || modalOpen2) {
      document.querySelector("body")?.classList.toggle("custom_index", true);
    }
  }, [modalOpen, modalOpen2]);

  return (
    <>
      <Calendar
        className={view}
        views={["day", "week", "month"]}
        selectable
        onView={handleViewChange}
        view={view}
        localizer={localizer}
        date={date}
        onNavigate={handleNavigateChange}
        events={eventsData}
        style={{ height: "auto" }}
        onSelectEvent={handleChange}
        popup
        toolbar={showToolbar}
        popupOffset={{ x: -15, y: 5 }}
        onShowMore={onShowMore}
        onSelectSlot={handleSelect}
        allDayMaxRows={2}
        components={{
          event: (props) => <EventComponent {...props} />,
          dateCellWrapper: (props) => (
            <CustomDateCellWrapper
              {...props}
              selectedDate={selectedDate}
              clickedOnCustomButtonRef={clickedOnCustomButtonRef}
            />
          ),
        }}
        eventPropGetter={eventStyleGetter}
      />
      <Popover open={Boolean(show)}>
        <PopoverTrigger asChild>
          <Button
            style={{
              position: "absolute",
              top: show?.y,
              left: show?.x,
              opacity: 0,
            }}
            variant="outline"
          >
            Anchor
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={`w-80 bg-white ${!show ? "hidden" : ""}`}
          onInteractOutside={() => setShow(null)}
        >
          <h3 className="text-gray-900 text-[20px]">Deep Tissue Massage</h3>
          <p className="text-sm text-gray-900">30-Minute</p>
          <div className="py-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <p className="text-gray-400 text-[12px]">Reservation number</p>
              <p className="text-sm font-satoshi_medium">#4947408635</p>
            </div>
            <Badge className="bg-[#F5EFFD] ml-3 text-[#7757BD] border-[1px]  border-[#7757BD] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg">
              Upcoming
            </Badge>
          </div>
          <div className="py-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <p className="text-gray-400 text-[12px]">Client</p>
              <div className="flex items-center ">
                <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                  <Image
                    src={assets.clientImage}
                    alt="clientimg"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover "
                  />
                  <span className="bg-green-500 border-2 border-white p-1 absolute -bottom-1 -right-1 z-10 rounded-full "></span>
                </i>
                <h4 className="text-sm font-satoshi_medium">Julia Brown</h4>
              </div>
            </div>
            <Button variant="outline" className=" border-gray-200">
              Message
            </Button>
          </div>
          <div className="py-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <p className="text-gray-400 text-[12px]">Address</p>
              <p className="text-sm font-satoshi_medium">
                25 Draper Street, San Francisco, CA, USA
              </p>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-[12px]">Date & time</p>
              <p className="text-sm font-satoshi_medium">
                20 May 2023, 10:00 AM
              </p>
            </div>
          </div>
          <div className="py-4 flex justify-end items-center">
            <Button
              variant="default"
              className="text-red-500 bg-red-50 border border-gray-100 hover:bg-primary hover:text-white"
            >
              Cancel reservation
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <CalendarCard show={cardShow} cardCloseCallback={cardCloseCallback} />
      <CalendarModal
        open={modalOpen}
        modalCloseCallback={modalCloseCallback}
        modalCloseInteractOutsideCallback={modalCloseInteractOutsideCallback}
      />
      <CalendarModal2
        open={modalOpen2}
        modalCloseCallback={modalCloseCallback2}
        modalCloseInteractOutsideCallback={modalCloseInteractOutsideCallback2}
      />
    </>
  );
}
