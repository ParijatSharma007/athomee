import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";

/**
 * The function `userRegister` is an asynchronous function that sends a POST request to the
 * `endpoints.auth.signup` endpoint with the provided `body` object and returns the response.
 * @param {object} body - The `body` parameter is an object that contains the data needed for user
 * registration. It typically includes information such as the user's name, email, password, and any
 * other required fields for registration.
 * @returns The `useUserRegister` function is returning a mutation function that can be used to
 * register a user.
 */
const userRegister = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.signup, body);
  return res;
};

export const useUserRegister = () => useMutation(userRegister);

/**
 * The function `userLogin` is an asynchronous function that sends a POST request to the
 * `endpoints.auth.login` endpoint with the provided `body` object and returns the response.
 * @param {object} body - The `body` parameter is an object that contains the data needed for the user
 * login request. It typically includes properties such as the user's email and password.
 * @returns The `useUserLogin` function is returning a mutation function that can be used to perform a
 * user login.
 */
const userLogin = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.login, body);
  return res.data;
};

export const useUserLogin = () => useMutation(userLogin);

const adminLogin = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.adminlogin, body);
  return res.data;
};

export const useAdminLogin = () => useMutation(adminLogin);

/**
 * The function `useForgotPassword` is a custom hook that uses the `useMutation` hook to handle the
 * logic for a user forgot password feature.
 * @param {object} body - The `body` parameter is an object that contains the necessary information for
 * the forgot password functionality. It typically includes the user's email or username, which will be
 * used to send a password reset link or code.
 * @returns The `useForgotPassword` function is returning a mutation function that can be used to call
 * the `userForgotPassword` function.
 */
const userForgotPassword = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.login, body);
  return res;
};

export const useForgotPassword = () => useMutation(userForgotPassword);

const verifyUser = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.verify, body);
  return res;
};

export const useVerifyUser = () => useMutation(verifyUser);
