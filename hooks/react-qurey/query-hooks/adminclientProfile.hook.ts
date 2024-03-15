import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";

const clientprofilereservationList = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.reservation.reservationsList,
    body
  );
  return res;
};

export const useclientprofilereservationList = () =>
  useMutation(clientprofilereservationList);

const clientprofilepayoutList = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.transactions.transactionlist,
    body
  );
  return res;
};

export const useclientprofilepayoutList = () =>
  useMutation(clientprofilepayoutList);
