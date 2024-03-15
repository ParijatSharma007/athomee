import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";

const reservationUpdate = async (payload: object) => {
  const { id, body }: any = payload ?? {};
  const res = await axiosInstance.post(
    `${endpoints.adminDashboard.reservation.updateReservations}${id}`,
    body
  );
  return res;
};

export const UpdateReservationDetails = () => useMutation(reservationUpdate);
