import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";

const clientserviceListing = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.clientServiceListings.servicelists,
    body
  );
  return res;
};

export const useClientServiceListings = () => useMutation(clientserviceListing);
