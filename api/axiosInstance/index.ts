import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import { sucessNotificationEndPoints } from "../endpoints";
import {
  globalCatchError,
  globalCatchSucess,
  globalCatchWarning,
} from "@/lib/_helpers.lib";
import { checkMatch } from "@/lib/utils";
import { BaseApiResponse } from "@/typescript/interfaces";

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: "http://146.190.12.238:3000/api",
  baseURL: "https://athomee-admin.dedicateddevelopers.us/api",
  // baseURL: "http://192.168.5.163:3000/api",

  // baseURL: "https://athomee-admin.dedicateddevelopers.us/api",
});

axiosInstance.interceptors.request.use(async (config: any) => {
  const cookies = parseCookies();
  const token = cookies?.atHomee_token;

  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    // only show success notification on this routes

    // console.log("res axios", res);

    // let hasUrl=false;

    // sucessNotificationEndPoints.forEach((str,i)=>{
    //   if(res.config.url?.includes(str)){
    //     hasUrl=true
    //   }
    // })
    if (res.config.url) {
      if (checkMatch(sucessNotificationEndPoints, res.config.url)) {
        console.log("same string");

        if (res?.status !== 200) {
          globalCatchWarning(res);
        } else {
          globalCatchSucess(res);
        }
      }
    }

    return res;
  },
  async (error: AxiosError<BaseApiResponse>) => {
    globalCatchError(error);
    // const { data, status, config } = error.response!;
    const originalRequest = error.config;

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const access_token = await refreshAccessToken();
    //   setCookieClient("token", access_token?.token);
    //   axios.defaults.headers.common["x-access-token"] = access_token?.token;
    //   return axiosInstance(originalRequest);
    // }

    return Promise.reject(error);
  }
);

export default axiosInstance;
