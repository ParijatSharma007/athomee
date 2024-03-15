import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation, useQuery } from "react-query";
import { DELETE_COMMISSION } from "../query-keys/adminCommissionQuery.keys";

// <-------------------- GET DEFAULT COMMISSION RATE ------------------->
const getDefaultCommissionRate = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.commission.getDefaultCommissionRate,
    body
  );
  return res;
};

export const useDefaultCommissionRate = () =>
  useMutation(getDefaultCommissionRate);

// <-------------------- UPDATE DEFAULT COMMISSION RATE ------------------->

const updateCommissionRate = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.commission.updateCommissionRate,
    body
  );
  return res;
};

export const useUpdateCommissionRate = () => useMutation(updateCommissionRate);

// <-------------------- GET COMMISSION LIST ------------------->

const commissionList = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.commission.commissionList,
    body
  );
  return res;
};

export const useCommissionList = () => useMutation(commissionList);

// <-------------------- CREATE COMMISSION RATE ------------------->

const createCommissionRate = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.commission.createCommissionRate,
    body
  );
  return res;
};

export const useCreateCommissionRate = () => useMutation(createCommissionRate);

// <-------------------- UPDATE COMMISSION RATE ------------------->

const updateCommissionRateById = async (payload: object) => {
  const { id, body }: any = payload ?? {};
  const res = await axiosInstance.post(
    `${endpoints.adminDashboard.commission.updateCommissionRateById}${
      !!id ? `/${id}` : ""
    }`,
    body
  );
  return res;
};

export const useUpdateCommissionRateById = () =>
  useMutation(updateCommissionRateById);

// <-------------------- UPDATE COMMISSION RATE ------------------->

const deleteCommission = async (id: "") => {
  const res = await axiosInstance.get(
    `${endpoints.adminDashboard.commission.deleteCommission}${!!id ? `/${id}` : ""}`
  );
  return res;
};

export const useDeleteCommission = (
  id: any,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([DELETE_COMMISSION, id], () => deleteCommission(id ?? ""), {
    onSuccess,
    onError,
    enabled: false,
    //   select: (data) => data?.data?.data ?? []
  });
