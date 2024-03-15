// import axiosInstance from "@/api/axiosInstance";
// import { endpoints } from "@/api/endpoints";
// import { useQuery } from "react-query";

import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation, useQuery } from "react-query";
import { CLIENT_SAVED_LISTS } from "../query-keys/ClientSaved.keys";

//==================================== Collection Lists hooks =====================
const getClientSavedLists = async () => {
  const res = await axiosInstance.get(
    `${endpoints?.clientSaved?.collectionlists}`
  );
  return res;
};

export const useClientSaveLists = (
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([CLIENT_SAVED_LISTS], getClientSavedLists, {
    onSuccess,
    onError,
    // enabled: false,
    select: (data) => data?.data ?? [],
  });

//==================================== Create Collection hooks =====================

const CreateClientSaveCollection = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints?.clientSaved?.createcollection,
    body
  );
  return res;
};

export const useCreatesaveCollection = () =>
  useMutation(CreateClientSaveCollection);

//==================================== Delete Collection hooks =====================

const DeleteClientSaveCollection = async (payload: any) => {
  const { collection_id, body } = payload;
  const res = await axiosInstance.get(
    `${endpoints?.clientSaved?.deletecollection}/${collection_id}`,
    body
  );
  return res;
};

export const useDeletesaveCollection = () =>
  useMutation(DeleteClientSaveCollection);

//==================================== Save Service Collection hooks =====================

const SaveServiceCollection = async (payload: any) => {
  const { collection_id, body } = payload;
  const res = await axiosInstance.get(
    `${endpoints?.clientSaved?.createService}/${collection_id}`,
    body
  );
  return res;
};

export const useSaveServiceCollection = () =>
  useMutation(SaveServiceCollection);

//==================================== Remove Service Collection hooks =====================

const RemoveServiceCollection = async (payload: any) => {
  const { collection_id, body } = payload;
  const res = await axiosInstance.get(
    `${endpoints?.clientSaved?.removeService}/${collection_id}`,
    body
  );
  return res;
};

export const useRemoveServiceCollection = () =>
  useMutation(RemoveServiceCollection);

//==================================== Collection Info Service hooks =====================

const InfoServiceCollection = async (payload: any) => {
  const { collection_id } = payload;
  const res = await axiosInstance.get(
    `${endpoints?.clientSaved?.serviceinfo}/${collection_id}`
  );
  return res?.data;
};

export const useInfoServiceCollection = () =>
  useMutation(InfoServiceCollection);

//==================================== Collection Update hooks =====================

const UpdateCollection = async (payload: any) => {
  const { collection_id, body } = payload;
  const res = await axiosInstance.get(
    `${endpoints?.clientSaved?.updatecollection}/${collection_id}`,
    body
  );
  return res;
};

export const useUpdateCollection = () => useMutation(UpdateCollection);
