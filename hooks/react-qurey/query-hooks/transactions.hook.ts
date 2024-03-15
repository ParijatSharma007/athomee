import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";

// <-------------------- GET All TRANSACTION LIST ------------------->
const transctionList = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.transactions.transactionlist,
    body
  );
  return res;
};

export const useTransctionList = () => useMutation(transctionList);
