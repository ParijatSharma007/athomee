import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import {
  ClientProfileData,
  ClientProfileInterface,
} from "@/typescript/Interfaces/ClientProfile.interface";
import { useMutation } from "react-query";

// <-------------------- GET All TRANSACTION LIST ------------------->
export const FetchClientProfile = async (): Promise<
  ClientProfileInterface | undefined
> => {
  try {
    const response = await axiosInstance.get(
      endpoints?.clientprofile?.profileview
    );
    return response?.data as ClientProfileInterface;
  } catch (error) {
    console.log("profileview error", error);
    return undefined;
  }
};

export const updateClientProfileDetails = async ({
  body,
}: {
  body: any;
}): Promise<ClientProfileInterface> => {
  const res = await axiosInstance.post(
    endpoints.clientprofile.profileupdate,
    body
  );
  return res.data;
};

