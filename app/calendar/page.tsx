// @ts-nocheck

import Container from "@/components/Container";
import CalendarCard from "@/components/CustomCalendar/CalendarCard";
import ReactCalendar from "@/components/CustomCalendar/ReactCalendar";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AppleIcon from "@/json/icons/AppleIcon";
import GoogleCalendarIcon from "@/json/icons/GoogleCalendarIcon";
import MenuIcon from "@/json/icons/MenuIcon";
import OutlookIcon from "@/json/icons/OutlookIcon";
import PencilIcon from "@/json/icons/PencilIcon";
import RecycleIcon from "@/json/icons/RecycleIcon";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const ReactBigCalendar = dynamic(
  () => import("@/components/CustomCalendar/ReactBigCalendar"),
  { ssr: false }
);

export default function Index() {
  const dropdwnList = [
    {
      icon: <GoogleCalendarIcon />,
      name: "Google",
    },
    {
      icon: <AppleIcon />,
      name: "Apple",
    },
    {
      icon: <OutlookIcon />,
      name: "Outlook",
    },
  ];

  return (
    <div className="py-10">
      {/* <h1>hello</h1> */}
      <Container>
        <div className=" md:hidden">
          <div className="flex justify-between items-center">
            <h1 className="text-[36px]">Calendar</h1>
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-200 text-base font-satoshi_medium h-auto py-[10px] px-[18px]"
                  >
                    <span className="inline-flex items-center justify-center mr-2">
                      <RecycleIcon />
                    </span>
                    Sync with
                    <span className=" inline-flex items-center justify-center ml-2 pl-2 border-l border-[#E4E4E7]">
                      <ChevronDown color="#A0A0AB" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white cmn_box border-0 rounded-lg">
                  {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                  <DropdownMenuGroup>
                    {dropdwnList?.map((data, index) => (
                      <DropdownMenuItem
                        key={index}
                        className={`p-[12px] font-satoshi_medium text-sm ${
                          index !== dropdwnList?.length - 1
                            ? " border-b border-gray-100"
                            : ""
                        } cursor-pointer hover:bg-gray-50`}
                      >
                        <span className=" inline-flex items-center justify-center mr-2">
                          {data?.icon}
                        </span>
                        {data?.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                className="border-gray-200 h-auto py-[12px] px-[18px] ml-4"
              >
                <span className=" inline-flex items-center justify-center mr-2">
                  <PencilIcon />
                </span>
                Bulk edit
              </Button>
            </div>
          </div>
          <ReactBigCalendar />
        </div>
        <div className="hidden md:block">
          <div className="flex justify-between items-center  md:mb-8">
            <h1 className="text-[36px]">Calendar</h1>
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-200 text-base font-satoshi_medium h-auto py-[10px] px-[18px] md:text-gray md:w-10 md:h-10 md:p-2"
                  >
                    <MenuIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white cmn_box border-0 rounded-lg">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="p-[12px] font-satoshi_medium text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                      <span className="inline-flex items-center justify-center mr-2">
                        <RecycleIcon />
                      </span>
                      Sync with
                    </DropdownMenuItem>
                    {dropdwnList?.map((data, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="p-[12px] font-satoshi_medium text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                      >
                        <span className=" inline-flex items-center justify-center mr-2">
                          {data?.icon}
                        </span>
                        {data?.name}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem className="p-[12px] font-satoshi_medium text-sm  cursor-pointer hover:bg-gray-50">
                      <span className=" inline-flex items-center justify-center mr-2">
                        <PencilIcon />
                      </span>
                      Bulk edit
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <ReactCalendar />
          <ReactBigCalendar defaultMonth="day" showToolbar={false} isMobile />
        </div>
      </Container>
    </div>
  );
}
