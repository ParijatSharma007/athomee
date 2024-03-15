"use client";

import CommonPagination from "@/components/CommonPagination/CommonPagination";
import Container from "@/components/Container";
import ReservationHeader from "@/components/ReservationHeader/ReservationHeader";
import { ReservationListCard } from "@/components/ReservationListCard/ReservationListCard";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  reservationCanceledList,
  reservationCompletedList,
  reservationDeclinedList,
  reservationList,
  reservationRefundedList,
  reservationRequestList,
  reservationUpcomingList,
} from "@/json/mock/reservationList.mock";
import { ChevronDown } from "lucide-react";

export default function Index() {
  return (
    <div className="py-16 bg-inherit md:py-4">
      <Container>
        <ReservationHeader />
        <div className="relative">
          <div className="flex items-center justify-end absolute right-0 top-11 z-30 lg:left-0 lg:right-auto">
            <div className="flex items-center">
              <p className="text-gray-400 ">On the page:</p>
              <Select>
                <SelectTrigger
                  className="w-auto border-0 font-satoshi_medium text-base"
                  icon={<ChevronDown height={12} width={12} />}
                >
                  <SelectValue placeholder="8" />
                </SelectTrigger>

                <SelectContent align="end">
                  <SelectGroup>
                    <SelectLabel>8</SelectLabel>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="15">15</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center ml-8">
              <p className="text-gray-400 ">Sort by:</p>
              <Select>
                <SelectTrigger
                  className="w-auto border-0 font-satoshi_medium text-base"
                  icon={<ChevronDown height={12} width={12} />}
                >
                  <SelectValue placeholder="Recent" />
                </SelectTrigger>

                <SelectContent align="end">
                  <SelectGroup>
                    <SelectLabel>Recent</SelectLabel>
                    <SelectItem value="lorem">Lorem</SelectItem>
                    <SelectItem value="lorem1">Lorem1</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Tabs defaultValue="all" className="w-full mb-12 md:mb-4">
            <TabsList className="flex flex-wrap justify-start border-b border-gray-200 mb-16 md:flex-nowrap md:overflow-x-auto md:mb-8">
              <TabsTrigger value="all" className="mr-8 pb-2">
                All
              </TabsTrigger>
              <TabsTrigger value="requested" className="mr-8 pb-2">
                Requested
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="mr-8 pb-2">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="completed" className="mr-8 pb-2">
                Completed
              </TabsTrigger>
              <TabsTrigger value="declined" className="mr-8 pb-2">
                Declined
              </TabsTrigger>
              <TabsTrigger value="canceled" className="mr-8 pb-2">
                Canceled
              </TabsTrigger>
              <TabsTrigger value="refunded" className="pb-2">
                Refunded
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              {reservationList?.map((item, index) => (
                <ReservationListCard {...item} key={index} className="pt-8" />
              ))}
            </TabsContent>
            <TabsContent value="requested">
              {reservationRequestList?.map((item, index) => (
                <ReservationListCard {...item} key={index} className="pt-8" />
              ))}
            </TabsContent>
            <TabsContent value="upcoming">
              {reservationUpcomingList?.map((item, index) => (
                <ReservationListCard {...item} key={index} className="pt-8" />
              ))}
            </TabsContent>
            <TabsContent value="completed">
              {reservationCompletedList?.map((item, index) => (
                <ReservationListCard {...item} key={index} className="pt-8" />
              ))}
            </TabsContent>
            <TabsContent value="declined">
              {reservationDeclinedList?.map((item, index) => (
                <ReservationListCard {...item} key={index} className="pt-8" />
              ))}
            </TabsContent>
            <TabsContent value="canceled">
              {reservationCanceledList?.map((item, index) => (
                <ReservationListCard {...item} key={index} className="pt-8" />
              ))}
            </TabsContent>
            <TabsContent value="refunded">
              {reservationRefundedList?.map((item, index) => (
                <ReservationListCard {...item} key={index} className="pt-8" />
              ))}
            </TabsContent>
          </Tabs>

          <CommonPagination />
        </div>
      </Container>
    </div>
  );
}
