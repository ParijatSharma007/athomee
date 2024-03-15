/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/no-unescaped-entities */
// import CommonInput from "@/components/CommonInput/CommonInput";
// import Container from "@/components/Container";
// import SignHeader from "@/components/SignHeader/SignHeader";
// import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
// import assets from "@/json/assets";
// import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
// import Image from "next/image";
// import Link from "next/link";

// function adminLogin() {
//   return (
//     <div>
//       <SignHeader />
//       <div className="py-8 md:pt-2 md:pb-6">
//         <Container>
//           <div className="relative hidden  md:flex md:pb-6">
//             <a
//               href="#"
//               className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
//             >
//               <i className="pr-4">
//                 <ArrowBackIcon />
//               </i>
//             </a>
//             <p className=" text-[16px] text-gray-900 font-satoshi_medium">
//               Log in
//             </p>
//           </div>
//           <Link
//             href="/"
//             className="font-satoshi_medium mb-8 inline-block md:hidden"
//           >
//             <i className="inline-block mr-[18px] mb-[2px] align-middle">
//               <Image src={assets.back_btns} width={16} height={11} alt="" />
//             </i>
//             Back
//           </Link>
//           <div className="max-w-[560px] mx-auto">
//             <div className="text-left mb-8">
//               <h2 className="text-3xl	mb-3">Log in</h2>
//               <p className="text-base	text-[var(--grey70707B)]">
//                 Enter the information to login the Casacall platform.
//               </p>
//             </div>
//             <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 md:px-3 md:py-3 md:mb-4 mb-8 hidden">
//               <i className="self-center mb-[2px] mr-[17px] md:mr-[12px] md:min-w-[17px]">
//                 <Image
//                   src={assets?.account_tooltip}
//                   width={17}
//                   height={17}
//                   alt=""
//                 />
//               </i>
//               Email or password are incorrect or this account doesn't exist.
//             </div>
//             <div className="flex flex-wrap -mx-2 -mb-3">
//               <div className="w-full px-2 mb-3">
//                 <CommonInput placeholderLabel="Your email" />
//               </div>
//               <div className="w-full px-2 mb-3">
//                 <CommonInput passwordvalue placeholderLabel="Password" />
//                 <p className="text-xs text-[var(--textgray)] mt-[6px] hidden">
//                   Min. 8 characters. Combine numbers, upper and lowercase
//                   letters.
//                 </p>
//                 <p className="text-right text-sm text-[var(--secondary)] mt-3">
//                   <Link
//                     className="text-[var(--secondary)] hover:text-[var(--primary)]"
//                     href="/"
//                   >
//                     Forgot password?
//                   </Link>
//                 </p>
//               </div>

//               <div className="w-full px-2 mt-4">
//                 <Button
//                   className="w-[100%] text-base py-3 h-auto"
//                   variant="default"
//                 >
//                   Log in
//                 </Button>
//               </div>

//               <div className="w-full px-2 text-center mt-6">
//                 <p className="text-sm text-[var(--textgray)]">
//                   Don't have an account?{" "}
//                   <Link
//                     className="text-[var(--primary)] hover:text-[var(--secondary)]"
//                     href="/auth/client/sign-up"
//                   >
//                     Sign up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default adminLogin;

/* eslint-disable react/no-unescaped-entities */
"use client";
import CommonInput from "@/components/CommonInput/CommonInput";
import Container from "@/components/Container";
import SignHeader from "@/components/SignHeader/SignHeader";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
// import { useUserLogin } from "@/hooks/react-qurey/query-hooks/loginQuery.hooks";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import validationText from "@/json/messages/validationText";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";

import ButtonLoader from "@/components/ButtonLoader/ButtonLoader";
import {
  useAdminLogin,
  useUserLogin,
} from "@/hooks/react-qurey/query-hooks/authQuery.hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { getCookie, setCookieClient } from "../../../../../lib/storage.lib";
import { useEffect, useState } from "react";
import { LoginResponse } from "@/typescript/interfaces";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { setUserData } from "@/redux-toolkit/slices/userSlice";
type Inputs = {
  email: string;
  password: string;
};

// <------------------ LOGIN FORM VALIDATION SCHEMA ------------------>
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  password: yup
    .string()
    .required(validationText.error.enter_password)
    .min(2, validationText.error.min_8_password),
});

function adminLogin() {
  const [isAuthenticUser, setIsAuthenticUser] = useState(false);
  const { mutate: userLogin, isLoading } = useAdminLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });

  const getUserGivenInput = (e: any) => {
    const name = e.target.name ?? "";
    const value = e.target.value ?? "";
    setValue(name, value);
  };

  const dispatch = useAppDispatch();

  const onFormSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;

    const requestData = {
      email: email,
      password: password,
    };

    userLogin(requestData, {
      onSuccess: (response: LoginResponse) => {
        console.log("response", response);
        const { data, token } = response ?? {};
        const { role } = data ?? {};
        console.log("data=======>", role);
        // if (data?.token)
        // router.push("/admin/dashboard");
        if (typeof window != "undefined" && !!token) {
          localStorage.setItem("atHomee_token", token ?? "");
          setCookieClient("atHomee_token", token ?? "");
          setCookieClient(
            "atHomee_user",
            JSON.stringify(response.data) ?? JSON.stringify({})
          );
          localStorage.setItem(
            "atHomee_user",
            JSON.stringify(response.data) ?? JSON.stringify({})
          );
          dispatch(setUserData(response.data));

          // if (role == "client") {
          //   router.push("/client/listing");
          // } else if (role == "super_admin") {
          //   router.push("/admin/dashboard");
          // } else if (role == "individual" || role == "company") {
          //   router.push("/dashboard");
          // }
          router.push("/admin/dashboard");
        }
      },
      onError: (error: any) => {
        console.log("login user cred", error);
        // Display an error message to the user
        // toastError(error ? error?.response?.data?.message : "Something went wrong.");
      },
    });
  };

  // useEffect(() => {
  //   if (typeof window != "undefined") {
  //     const isTokenExisted =
  //       !!localStorage.getItem("atHomee_token") || !!getCookie("atHomee_token");
  //     if (!!isTokenExisted) {
  //       router.back();
  //     } else {
  //       setIsAuthenticUser(true);
  //     }
  //   }
  // }, []);

  return (
    <div>
      {/* {isAuthenticUser && ( */}
      <>
        <SignHeader />
        <div className="py-8 md:pt-2 md:pb-6">
          <Container>
            {/* <div className="relative hidden  md:flex md:pb-6">
              <a
                href="#"
                className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
              >
                <i className="pr-4">
                  <ArrowBackIcon />
                </i>
              </a>
              <p className=" text-[16px] text-gray-900 font-satoshi_medium">
                Log in
              </p>
            </div>
            <Link
              href="/"
              className="font-satoshi_medium mb-8 inline-block md:hidden"
            >
              <i className="inline-block mr-[18px] mb-[2px] align-middle">
                <Image src={assets.back_btns} width={16} height={11} alt="" />
              </i>
              Back
            </Link> */}
            <div className="max-w-[560px] mx-auto">
              <div className="text-left mb-8">
                <h2 className="text-3xl	mb-3">Log in</h2>
                <p className="text-base	text-[var(--grey70707B)]">
                  Enter the information to login the Casacall platform.
                </p>
              </div>
              <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 md:px-3 md:py-3 md:mb-4 mb-8 hidden">
                <i className="self-center mb-[2px] mr-[17px] md:mr-[12px] md:min-w-[17px]">
                  <Image
                    src={assets?.account_tooltip}
                    width={17}
                    height={17}
                    alt=""
                  />
                </i>
                Email or password are incorrect or this account doesn't exist.
              </div>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="flex flex-wrap -mx-2 -mb-3">
                  <div className="w-full px-2 mb-3">
                    <CommonInput
                      placeholderLabel="Your email"
                      name="email"
                      onChange={getUserGivenInput}
                      // {...register("email")}
                    />{" "}
                    {errors.email && (
                      <div style={{ color: "red" }} className="error">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="w-full px-2 mb-3">
                    <CommonInput
                      name="password"
                      onChange={getUserGivenInput}
                      passwordvalue
                      placeholderLabel="Password"
                      // {...register("password")}
                    />
                    {errors.password && (
                      <div style={{ color: "red" }} className="error">
                        {errors.password.message}
                      </div>
                    )}
                    <p className="text-xs text-[var(--textgray)] mt-[6px] hidden">
                      Min. 8 characters. Combine numbers, upper and lowercase
                      letters.
                    </p>
                    {/* <p className="text-right text-sm text-[var(--secondary)] mt-3">
                      <Link
                        className="text-[var(--secondary)] hover:text-[var(--primary)]"
                        href="/auth/admin/login/forgot-password"
                      >
                        Forgot password?
                      </Link>
                    </p> */}
                  </div>

                  <div className="w-full px-2 mt-4">
                    {/* <Link
                  className="text-[var(--primary)] hover:text-[var(--secondary)]"
                  href="/admin/dashboard"
                > */}
                    {!isLoading ? (
                      <Button
                        className="w-[100%] text-base py-3 h-[48px]"
                        variant="default"
                        type="submit"
                      >
                        Log in
                      </Button>
                    ) : (
                      <Button
                        className="w-[100%] text-base py-3 h-[48px]"
                        variant="default"
                      >
                        <ButtonLoader />
                      </Button>
                    )}
                    {/* </Link> */}
                  </div>

                  {/* <div className="w-full px-2 text-center mt-6">
                    <p className="text-sm text-[var(--textgray)]">
                      Don't have an account?{" "}
                      <Link
                        className="text-[var(--primary)] hover:text-[var(--secondary)]"
                        href="/auth/client/sign-up"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div> */}
                </div>
              </form>
            </div>
          </Container>
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default adminLogin;
function toastError(arg0: any) {
  throw new Error("Function not implemented.");
}
