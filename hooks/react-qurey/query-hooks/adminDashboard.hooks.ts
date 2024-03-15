import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation, useQuery } from "react-query";
import {
  CATEGORY_LIST,
  DELETE_CATEGORY,
} from "../query-keys/adminDashboard.keys";
import { TopCategory } from "@/typescript/Interfaces/admindashboard.interfaces";

// <------------------------------ CATEGORY SECTION API ------------------->

// <------------------------------ CATEGORY LISTING API ------------------->
const getCategoryList = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.category.categoryList,
    body
  );
  return res;
};

export const useCategoryList = () => useMutation(getCategoryList);

// <------------------------------ CATEGORY CREATE API ------------------->
const createCategory = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.category.createCategory,
    body
  );
  return res;
};

export const useCreateCategory = () => useMutation(createCategory);

// <------------------------------ CATEGORY UPDATE API ------------------->

const updateCategory = async (payload: object) => {
  const { id, body }: any = payload ?? {};
  const res = await axiosInstance.post(
    `${endpoints.adminDashboard.category.updateCategory}${
      !!id ? `/${id}` : ""
    }`,
    body
  );
  return res;
};

export const useUpdateCategory = () => useMutation(updateCategory);

// <------------------------------ CATEGORY UPDATE STATUS API ------------------->

const updateCategoryStatus = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.category.updateCategoryStatus,
    body
  );
  return res;
};

export const useUpdateCategoryStatus = () => useMutation(updateCategoryStatus);

// <------------------------------ CATEGORY DELETE API ------------------->

const deleteCategory = async (id: "") => {
  const res = await axiosInstance.get(
    `${endpoints.adminDashboard.category.deleteCategory}${!!id ? `/${id}` : ""}`
  );
  return res;
};

export const useDeleteCategory = (
  id: any,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([DELETE_CATEGORY, id], () => deleteCategory(id ?? ""), {
    onSuccess,
    onError,
    enabled: false,
    //   select: (data) => data?.data?.data ?? []
  });

// <------------------------------ CATEGORY UPDATE ORDER API ------------------->

const updateCategoryOrder = async (body: object) => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.category.updateCategoryOrder,
    body
  );
  return res;
};

export const useUpdateCategoryOrder = () => useMutation(updateCategoryOrder);

// ==============================Admin Dashbard ALL API Fetch=============================

// <------------------------------ DASHBOARD USER LISTS API ------------------->

const userListByType = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard.dashboard.dashboarduser}?type=${type}&data=client`
  );
  return res;
};

export const userListbytype = () => useMutation(userListByType);

// <------------------------------ DASHBOARD USER LISTS GRAPH API ------------------->

const userListByTypeGraph = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard.dashboard.dashboardusergraph}?type=${type}&data=client`
  );
  return res;
};

export const FetchUserListsbyGraph = () => useMutation(userListByTypeGraph);

// <------------------------------ DASHBOARD USER LISTS GRAPH API ------------------->

const vendorsListByTypeGraph = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard.dashboard.dashboardusergraph}?type=${type}&data=vendor`
  );
  return res;
};

export const FetchVendorsListsbyGraph = () =>
  useMutation(vendorsListByTypeGraph);

// <------------------------------ DASHBOARD TOP CATEGORY API ------------------->
export const TopcategoryAPIFunc = async () => {
  try {
    const res = await axiosInstance.get(
      endpoints?.adminDashboard.dashboard.dashboardtopcategory
    );
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// <------------------------------ DASHBOARD Listing/ Services API ------------------->

const ServiceslIstingAPI = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard.dashboard.dashboardservices}?type=${type}`
  );
  return res;
};

export const FetchServicesLsisting = () => useMutation(ServiceslIstingAPI);

// <------------------------------ DASHBOARD Reservation API ------------------->

const ReservationAPI = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard?.dashboard?.dashboardreservation}?type=${type}`
  );
  return res;
};

export const FetchReservationLists = () => useMutation(ReservationAPI);

// <------------------------------ DASHBOARD Reservation Graph API ------------------->

const ReservationGraphAPI = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard?.dashboard?.dashboardreservationgraph}?type=${type}`
  );
  return res;
};

export const FetchReservationGraph = () => useMutation(ReservationGraphAPI);

// <------------------------------ DASHBOARD Services Graphs API ------------------->

const ServiceGraphsAPI = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard?.dashboard?.dashboardservicesgraph}?type=${type}`
  );
  return res;
};

export const FetchServiceGraphLists = () => useMutation(ServiceGraphsAPI);

// <------------------------------ DASHBOARD Reveniue Graphs API ------------------->

const RevenueGraphAPI = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard?.dashboard?.dashboardrevenuegraph}?type=${type}&data=transaction`
  );
  return res;
};

export const FetchrevenueGraphLists = () => useMutation(RevenueGraphAPI);

// <------------------------------ DASHBOARD Traffic Graphs API ------------------->

const TrafficGraphAPI = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard?.dashboard?.dashboardtrafficgraph}?type=${type}`
  );
  return res;
};

export const FetchtrafficGraphLists = () => useMutation(TrafficGraphAPI);

// <------------------------------ DASHBOARD Commission Graphs API ------------------->
const CommissionGraphAPI = async (type: string) => {
  const res = await axiosInstance.get(
    `${endpoints?.adminDashboard?.dashboard?.dashboardcommisiongraph}?type=${type}&data=commission`
  );
  return res;
};

export const CommissionGraphAPILists = () => useMutation(CommissionGraphAPI);
