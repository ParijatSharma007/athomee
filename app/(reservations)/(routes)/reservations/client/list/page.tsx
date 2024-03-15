import Container from "@/components/Container";
import ReservationCard from "@/components/ReservationCard/ReservationCard";
import ReservationHeader from "@/components/ReservationHeader/ReservationHeader";
import { ReservationCardList } from "@/json/mock/reservationList.mock";

export default function page() {
  return (
    <div className="py-16">
      <Container>
        {/* <ReservationHeader headerName="Reservations" className=" mb-10" /> */}
        <div className="flex flex-wrap flex-row -m-3">
          {ReservationCardList?.map((item, index) => (
            <div key={index} className="p-3 w-1/3 lg:w-1/2 md:w-full">
              <ReservationCard
                {...item}
                className="reservation_card rounded-lg overflow-hidden"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
