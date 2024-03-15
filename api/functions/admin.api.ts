import {
  CategoryResponse,
  IReservationQueryParams,
  ReservationInfoResponse,
  ReservationResponse,
  ServiceFetchResponse,
  ServiceListInterface,
  serviceReview,
} from "@/typescript/interfaces";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
import {
  IUpdateServiceBody,
  ServiceInfoResponse,
} from "@/typescript/Interfaces/admin.services.interface";
import { Notifications } from "@/app/profile/(routes)/client/profile-settings/notifications/page";
import { ClientProfileInterface, ClientUpdatePayloadInterface, clientInfoData } from "@/typescript/Interfaces/ClientProfile.interface";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ClientServiceDetailsInterface } from "@/typescript/Interfaces/clientServiceDetails.interface";
// import { AxiosRequestConfig } from "axios";

export const getReservation = async (
  body: IReservationQueryParams
): Promise<ReservationResponse> => {
  const res: any = await axiosInstance.post(
    endpoints.adminDashboard.reservation.reservationsList,
    body
  );

  return res?.data;
};

export const getSeviceList = async (
  body: object
): Promise<ServiceFetchResponse> => {
  const res = await axiosInstance.post(
    endpoints.adminServices.services.serviceList,
    body
  );
  return res.data;
};


// export const packagefunc=async()=>{
//   const res=await axiosInstance.get<
// }

export const deleteService = async (id: string) => {
  const res = await axiosInstance.get(
    endpoints.adminServices.services.delete + id
  );
  return res;
};

export const searchCategories = async (body: {
  search?: string;
}): Promise<CategoryResponse> => {
  const res: any = await axiosInstance.post(
    endpoints.adminDashboard.category.categoryList,
    body
  );

  return res?.data;
};
export const searchCategorieswithtoken = async (body: {
  search?: string;
}): Promise<CategoryResponse> => {
  const res: any = await axiosInstance.post(
    endpoints.serviceCategorylists.categorylists,
    body
  );

  return res?.data;
};

export const deleteResvation = async (id: string) => {
  const res = await axiosInstance.get(
    endpoints.adminDashboard.reservation.deleteReservations + id
  );
  return res;
};
export const getReservationDetails = async (
  id: string
): Promise<ReservationInfoResponse> => {
  const res = await axiosInstance.get(
    endpoints.adminDashboard.reservation.getReservationInfo + id
  );
  return res.data;
};
export const getServiceDetails = async (
  id?: string
): Promise<ServiceInfoResponse> => {
  const res = await axiosInstance.get(
    endpoints.adminServices.services.getInfo + id
  );
  return res.data;
};

export const updateServiceDetails = async ({
  id,
  body,
}: {
  id: string;
  body: IUpdateServiceBody;
}): Promise<ReservationInfoResponse> => {
  const res = await axiosInstance.post(
    endpoints.adminServices.services.update + id,
    body
  );
  return res.data;
};



export const updateReservationDetails = async ({
  id,
  address,
  date,
  start_time,
  end_time,
  status,
}: {
  id: string;
  address?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  status?: string;
}): Promise<ReservationInfoResponse> => {
  const res = await axiosInstance.post(
    endpoints.adminDashboard.reservation.updateReservations + id,
    { address, date, start_time, end_time, status }
  );
  return res.data;
};

export const updateReservationCategoryDetails = async ({
  id,
  category,
  sub_category,
}: {
  id: string;
  category?: string;
  sub_category?: string;
}): Promise<ReservationInfoResponse> => {
  const res = await axiosInstance.post(
    endpoints?.adminServices?.services?.update + id,
    { category, sub_category }
  );
  return res.data;
};
// availiability add function





// get All Tranction Details
export const gettranctionsDetails = async (payload: any) => {
  const response = await axiosInstance.post(
    endpoints.adminDashboard.transactions.transactionlist,
    payload
  );
  return response;
};


export const getProfileDetails = async() => {
  const response = await axiosInstance.get(
    endpoints.auth.clientProfileDetails
  )
  return response
}

export const updateClientNotification = async(payload : Notifications) => {
  const response = await axiosInstance.post(
    endpoints.clientSettings.notifications, payload
  )
  return response
}

export const getClientInfo = async() => {
  const response : {data : clientInfoData} = await axiosInstance.get
  (endpoints.clientprofile.clientInfo)
  return response.data
}

export const getClientProfile = async() => {
  const response = await axiosInstance.get(
    endpoints?.clientprofile?.profileview
  );
  return response?.data as ClientProfileInterface;
}

export const updateClientProfile = async(body : ClientUpdatePayloadInterface) => {
  const response = await axiosInstance.post(
    endpoints.clientprofile.profileupdate, {
      ...body
    }
  )
  return response?.data as ClientProfileInterface
}

export const deleteClient = async({password, reason} : {password : string, reason ?: string}) => {
  const response = await axiosInstance.post(endpoints.auth.deleteClient, {
    password,
    reason
  })
  return response
}

export const postForgotPassword = async({email} : {email : string}) => {
  const response = await axiosInstance.post(endpoints.auth.forgotPassword, {email})
  return response
}

export const resetPassword = async({token, password} : {token : string, password : string}) => {
  const response = await axiosInstance.post(endpoints.auth.resetPassword, {
    token,
    new_password : password
  })
  return response
}

export const googleSearchPlace = async(input : string) => {
    const response = await axios.post(
      "/api/google/search",
      {
        params: {
          input,
          // key:
          //   process.env.NEXT_GOOGLE_API_KEY ||
          //   "AIzaSyCgvwEKTZN22ulQLF-epOmseyPaLj7J3tU",
        },
      }
    );
    return response
  }

export const getServiceReview = async( payload : {
    page: number,
    limit: number,
    vendor_id?: string,
    service_id: string
  }
) => {
  const response : {data : serviceReview} =  await axiosInstance.post(endpoints.clientServiceListings.serviceReview, payload)
  return response
}

export const getServiceList = async(payload : {
  vendor_id?: string,
  page?: number,
  limit?: number,
  sort?: {
    order?: "asc" | "desc",
    field?: string
  },
  category_id?: string[],
  sub_category_id?: string[],
  address?: string,
  min_price?: number,
  max_price?: number,
  date?: string,
  time?: string,
  rating?: number,
  show_all_professionals?: boolean
}) => {
  const response : {data : ServiceListInterface} = await axiosInstance.post(endpoints.clientServiceListings.servicelists, payload)
  return response.data
}

export const getClientServiceDetails = async(id : string) : Promise<ServiceInfoResponse> => {
  const response = await axiosInstance.get(endpoints.clientServiceListings.serviceDetails(id))
  return response.data
}
