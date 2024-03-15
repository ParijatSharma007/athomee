import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const GetClientSavedCollectionlists = async () => {
  const response = await axiosInstance.get(
    endpoints?.clientSaved?.collectionlists
  );
  return response?.data;
};
