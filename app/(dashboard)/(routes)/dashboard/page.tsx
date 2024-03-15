import Container from "@/components/Container";
import { ReservationListCard } from "@/components/ReservationListCard/ReservationListCard";
import { Badge } from "@/components/ui/badge";
import IncrementIcon from "@/json/icons/IncrementIcon";
import {
  reservationRequestList,
  reservationUpcomingList,
} from "@/json/mock/reservationList.mock";

const DashboardPage = () => {
  return (
    <div className="py-16 lg:py-6">
      <Container>
        <h1 className="text-4xl mb-12 md:mb-4 md:text-[30px]">Dashboard</h1>
        <div className="bg-white dash_info_block py-8 px-10 rounded-xl flex flex-wrap flex-row md:bg-transparent md:p-0 md:flex-nowrap md:overflow-x-auto md:py-5 md:px-3 md:-mx-3">
          <div className=" flex-col w-1/3 md:pl-8 md:pr-6 md:py-[20px] md:mr-4 md:min-w-[250px] sm:min-w-[224px] md:rounded-lg md:shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]">
            <h5 className="text-lg font-satoshi_medium text-gray-900 md:text-[14px]">
              Reservations
            </h5>
            <div className="flex items-center flex-wrap my-2">
              <h2 className="text-4xl md:text-[24px]">730</h2>
              <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                20%
                <i className="inline-flex items-center justify-center ml-1">
                  {" "}
                  <IncrementIcon />
                </i>
              </Badge>
            </div>
            <p className="text-base text-gray-500">Reservations</p>
          </div>

          <div className=" flex-col w-1/3 md:pl-8 md:pr-6 md:py-[20px] md:mr-4 md:min-w-[250px] sm:min-w-[224px] md:rounded-lg md:shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]">
            <h5 className="text-lg font-satoshi_medium text-gray-900 md:text-[14px]">
              Reservations
            </h5>
            <div className="flex items-center flex-wrap my-2">
              <h2 className="text-4xl md:text-[24px]">130%</h2>
              <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                20%
                <i className="inline-flex items-center justify-center ml-1">
                  {" "}
                  <IncrementIcon />
                </i>
              </Badge>
            </div>
            <p className="text-base text-gray-500">Reservations</p>
          </div>

          <div className=" flex-col w-1/3 md:pl-8 md:pr-6 md:py-[20px] md:min-w-[250px] sm:min-w-[224px] md:rounded-lg md:shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]">
            <h5 className="text-lg font-satoshi_medium text-gray-900 md:text-[14px]">
              Reservations
            </h5>
            <div className="flex items-center flex-wrap my-2">
              <h2 className="text-4xl md:text-[24px]">2.4k</h2>
              <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                20%
                <i className="inline-flex items-center justify-center ml-1">
                  {" "}
                  <IncrementIcon />
                </i>
              </Badge>
            </div>
            <p className="text-base text-gray-500">Reservations</p>
          </div>
        </div>
        <div className="mt-12 md:mt-2">
          <h3 className="text-gray-900 ">New requests</h3>
          {reservationRequestList?.map((item, index) => (
            <ReservationListCard
              {...item}
              key={index}
              className={`pt-8 ${
                index === reservationRequestList?.length - 1 ? "border-0" : ""
              }`}
            />
          ))}
        </div>

        <div className="mt-12 ">
          <h3 className="text-gray-900">Upcoming reservations</h3>
          {reservationUpcomingList?.map((item, index) => (
            <ReservationListCard
              {...item}
              key={index}
              className={`pt-8 md:pt-6 ${
                index === reservationUpcomingList?.length - 1 ? "border-0" : ""
              }`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DashboardPage;
