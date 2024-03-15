import axiosInstance from "@/api/axiosInstance";
import ApiRequest from "@/api/axiosInstance/request";
import { endpoints } from "@/api/endpoints";
import { useMutation, useQuery } from "react-query";
import { USER_DETAILS, USER_delete } from "../query-keys/adminDashboard.keys";

const getUSERList = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.users.userList,
    body
  );
  return res;
};

export const useUserList = () => useMutation(getUSERList);

const getUSERDeatils = async (id: "") => {
  console.log("🚀 ~ getUSERDeatils ~ id:ASDASDSAD", id);
  const res = await axiosInstance.get(
    `${endpoints.adminDashboard.users.userDetails}${!!id ? `/${id}` : ""}`
  );
  return res;
};

export const useUSERDEATILS = (
  id: any,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([USER_DETAILS, id], () => getUSERDeatils(id ?? ""), {
    onSuccess,
    onError,
    // enabled: false,
    //   select: (data) => data?.data?.data ?? []
  });

//userDelete

const getUSERdelete = async (id: "") => {
  const res = await axiosInstance.get(
    `${endpoints.adminDashboard.users.userDelete}${!!id ? `/${id}` : ""}`
  );
  return res;
};

export const useUSERdelete = (
  id: any,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([USER_delete, id], () => getUSERdelete(id ?? ""), {
    onSuccess,
    onError,
    enabled: false,
    //   select: (data) => data?.data?.data ?? []
  });

//userUdpate

const getUSERupdate = async (body: any) => {
  const res = await axiosInstance.post(
    `${endpoints.adminDashboard.users.userupdate}${
      !!body.id ? `/${body.id}` : ""
    }`,
    body
  );
  return res;
};

export const useUserupdate = () => useMutation(getUSERupdate);

// userVerify

const getUSERverify = async (body: any) => {
  const res = await axiosInstance.post(
    `${endpoints.adminDashboard.users.userverify}${
      !!body.id ? `/${body.id}` : ""
    }`
    // body
  );
  return res;
};

export const useUserverify = () => useMutation(getUSERverify);

export const AdminDeleteUser = async ({ id }: { id: string }) => {
  const response = await axiosInstance.get(
    `${endpoints.adminDashboard.users.userDelete}/${id}`
  );
  return response?.data;
};

export const AdminStatusUpdateUser = async ({
  id,
  payload,
}: {
  id: string;
  payload: { status: string };
}): Promise<any> => {
  const response = await axiosInstance.post(
    `${endpoints.adminDashboard.users.userupdate}/${id}`,
    payload
  );
  return response?.data;
};


export const useAdminUserCommisionUpdate = async ({
  id,
  payload,
}: {
  id: string | null;
  payload: { rate: string };
}): Promise<any> => {
  const response = await axiosInstance.post(
    `${endpoints.adminDashboard.users.usercomission}/${id}`,
    payload
  );
  return response?.data;
};