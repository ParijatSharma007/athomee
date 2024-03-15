import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";


const getServiceList = async (body: object) => {
    const res = await axiosInstance.post(
      endpoints.adminServices.services.serviceList,
      body
    );
    return res;
  };
  
  export const useServiceList = () => useMutation(getServiceList);