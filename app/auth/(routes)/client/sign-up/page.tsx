"use client";
import ButtonLoader from "@/components/ButtonLoader/ButtonLoader";
import CheckboxSub from "@/components/CheckboxSub/CheckboxSub";
// import CheckboxSub from "@/components/CheckboxSub/CheckboxSub";
import CommonInput from "@/components/CommonInput/CommonInput";
import CommonSelect from "@/components/CommonSelect/CommonSelect";
import SignSlideRight from "@/components/SignSlideRight/SignSlideRight";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useUserRegister } from "@/hooks/react-qurey/query-hooks/authQuery.hooks";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import TwitterIcon from "@/json/icons/TwitterIcon";
import { setCookieClient } from "@/lib/storage.lib";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "postcss";
import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const selectApi = [
  {
    value: "individual",
    label: "Individual",
  },
  {
    value: "company",
    label: "Company",
  },
];
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  // isVerified: yup.boolean().required("Verification status is required"),
  // role: yup.string().required("Role is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().required().min(6),
//   terms: yup
//     .boolean()
//     .oneOf([true], "You must accept the terms and conditions"),
// });

function SignUpVendor() {
  const [accountType, setAccountType] = React.useState("");
  console.log("🚀 ~ SignUpVendor ~ accountType:", accountType);

  // const validationSchema = yup.object().shape(
  //   // accountType == "client"
  //   {
  //     firstName: yup.string().trim().required("First name is required"),
  //     lastName: yup.string().trim().required("Last name is required"),
  //     email: yup
  //       .string()
  //       .email("Invalid email format")
  //       .required("Email is required"),
  //     password: yup
  //       .string()
  //       .required("Password is required")
  //       .min(8, "Password must be at least 8 characters long"),
  //   }
  // );

  const router = useRouter();
  const [step, setStep] = React.useState(0);

  const [isVerified, setIsVerified] = React.useState(true);
  const [isVerified1, setIsVerified1] = React.useState(false);
  const { mutate: userRegister, isLoading } = useUserRegister();

  const [email, setEmail] = useState("");
  const [roleDropDown, setRoleDropDown] = useState("");
  const [password, setPassword] = useState("");

  const [errors1, setErrors] = useState({ email: "", password: "" });

  const getUserGivenInput1 = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleValidation = () => {
    const newErrors: any = {};
    let isValid = true;

    // Validate email
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    // Update errors state
    setErrors(newErrors);

    // Return validity
    return isValid;
  };
  const dropdownValue = (data: any) => {
    console.log("🚀 ~ dropdownValue ~ sadsasad:", data);
    setRoleDropDown(data);
    return {};
  };

  const handleSubmit1 = () => {
    if (handleValidation()) {
      const payLoad = {
        email: email,
        password: password,

        role: roleDropDown,
      };
      userRegister(payLoad, {
        onSuccess: (response) => {
          // alert("called");
          localStorage.setItem("usermail", email);
          // console.log("response", response);
          const { role } = response?.data?.data ?? {};
          if (role !== "client") {
            router.push("/auth/client/sign-up/check-email");
          } else {
            ("");
          }
        },
        onError: (error: any) => {
          // console.log("error drfgrg", error);
        },
      });
    } else {
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });

  const agreeHandler = () => setIsVerified(!isVerified);
  const accountTypeHandler = (type: string) => setAccountType(type);
  const signupStepHandler = () => {
    setStep(step + 1);
  };
  const backToFirstStep = () => {
    step === 0 ? false : setStep(step - 1);
  };
  const getUserGivenInput = (e: any) => {
    const name = e.target.name ?? "";
    const value = e.target.value ?? "";
    setValue(name, value);
  };
  const onFormSubmit = (data: any) => {
    // alert("sad")
    console.log("onFormSubmit", data, isVerified);
    const { email, password, firstName, lastName } = data;
    const payLoad = {
      email,
      password,
      firstName,
      lastName,
      isVerified,
      role: accountType,
    };
    userRegister(payLoad, {
      onSuccess: (response) => {
        // alert("called");
        localStorage.setItem("usermail", email);
        // console.log("response", response);
        const { role } = response?.data?.data ?? {};
        if (role !== "client") {
          router.push("/auth/client/sign-up/check-email");
        } else {
          const { token }: any = response?.data;

          if (typeof window !== "undefined" && !!token) {
            localStorage.setItem("atHomee_token", token ?? "");
            setCookieClient("atHomee_token", token ?? "");
            setCookieClient("role", role ?? "");
            // if (role == "client") {
            //   router.push("/client/listing");
            // } else if (role == "super_admin") {
            //   router.push("/admin/dashboard");
            // } else if (role == "individual" || role == "company") {
            //   router.push("/dashboard");
            // }
            router.push("/client/listing");
          }
        }
      },
      onError: (error: any) => {
        // console.log("error drfgrg", error);
        console.log("error");
      },
    });
  };

  console.log("accountType", accountType);

  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 pr-20 pl-20 pt-8 xl:px-12 lg:px-4 md:w-full md:px-0 md:pt-4">
        <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200">
          <Link href="/" className="inline-block">
            <Image src={assets.logo} width={124} height={24} alt="" />
          </Link>
        </div>
        <div className="relative hidden  md:flex px-[16px] pt-4">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
          >
            <i
              className="pr-4"
              onClick={() => {
                if (step > 0) {
                  setStep(0);
                } else {
                  router.push("/");
                }
              }}
            >
              <ArrowBackIcon />
            </i>
          </a>
          <p className=" text-[16px] text-gray-900 font-satoshi_medium">
            Choose account type
          </p>
        </div>
        <div className="mt-[72px] xl:mt-[50px] md:px-4 md:mt-6">
          <Link
            href={step === 0 ? "/" : "javascript:void(0)"}
            className="font-satoshi_medium md:hidden"
            onClick={backToFirstStep}
          >
            <i className="inline-block mr-[18px] mb-[2px] align-middle">
              <Image src={assets.back_btns} width={16} height={11} alt="" />
            </i>
            Back
          </Link>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="h-[calc(100vh-223px)] md:h-[calc(100vh-170px)] overflow-y-auto overflow-x-hidden mt-[40px] md:mt-0">
              {step === 0 ? (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl mb-2 xl:text-[26px] lg:text-[22px]">
                      Join as a client or service provider?
                    </h2>
                    <p>Please select your account type.</p>
                  </div>
                  <div className="client_card_sec">
                    <RadioGroup defaultValue={accountType}>
                      <div className="flex flex-wrap mx-[-18px] md:mx-[-8px] parent_wrappers">
                        <div className="w-1/2 px-[18px] md:px-[8px] flex items-center space-x-2">
                          <div className="flex_coumn_sec w-[100%]">
                            <RadioGroupItem
                              value="client"
                              id="account-type"
                              onClick={() => setAccountType("client")}
                            />
                            <Label
                              htmlFor="account-type"
                              className={`min-h-[144px] w-[100%] ml-0 label_class rounded-[8px] bg-[var(--card-yellow)] flex flex-col justify-center py-4 px-5 xl:px-3 md:px-2 ${
                                accountType == "client"
                                  ? "border-[1px] border-solid border-gray-400 shadow-[1px_1px_10px_5px_rgba(0,0,0,.07)]"
                                  : ""
                              }`}
                            >
                              <span className="mb-5">
                                <Image
                                  src={assets.client_secimg1}
                                  width={28}
                                  height={33}
                                  alt=""
                                />
                              </span>
                              <span className="text-base font-satoshi_medium">
                                I am a client, looking for a service provider
                              </span>
                            </Label>
                          </div>
                        </div>
                        <div className="w-1/2 px-[18px] md:px-[8px] flex items-center space-x-2">
                          <div className="flex_coumn_sec w-[100%]">
                            <RadioGroupItem
                              value="service"
                              id="account-type"
                              onClick={() => setAccountType("service")}
                            />
                            <Label
                              htmlFor="account-type"
                              className={`min-h-[144px] w-[100%] label_class rounded-[8px] bg-[var(--purple-demo1)] flex flex-col justify-center py-4 px-5 xl:px-3 md:px-2 ${
                                accountType == "service"
                                  ? "border-[1px] border-solid border-gray-400 shadow-[1px_1px_10px_5px_rgba(0,0,0,.07)]"
                                  : ""
                              }`}
                            >
                              <span className="mb-5">
                                <Image
                                  src={assets.client_secimg2}
                                  width={31}
                                  height={33}
                                  alt=""
                                />
                              </span>
                              <span className="text-base font-satoshi_medium">
                                I am a service provider, looking for work
                              </span>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>

                    <Button
                      onClick={signupStepHandler}
                      className="w-[100%] text-base py-3 h-auto mt-[32px]"
                      variant="default"
                    >
                      Sign up
                    </Button>

                    {accountType.length !== 0 && (
                      <div className="mt-6 text-center">
                        <p className="text-sm font-satoshi_medium text-[var(--cmn-grey2)]">
                          Already have an account?{" "}
                          <Link
                            className="text-[var(--primary)] ml-2 hover:text-[var(--secondary)]"
                            href={`/auth/${accountType}/login`}
                          >
                            Log in
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : step === 1 ? (
                <>
                  {accountType == "client" ? (
                    <div>
                      <div className="text-[var(--black1F1F1F)] mb-8">
                        <h2 className="text-3xl mb-2 lg:text-[30px]">
                          Hey there &#128075;
                        </h2>
                        <p>
                          Enter the information to register the Casacall
                          platform.
                        </p>
                      </div>
                      <div>
                        <ul className="flex flex-wrap -mx-3">
                          <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                            <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorfef0ef)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                              <i className="mr-2">
                                <Image
                                  src={assets?.google_icon}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                              </i>{" "}
                              Google
                            </Button>
                          </li>

                          <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                            <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf3fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                              <i className="mr-2">
                                <Image
                                  src={assets?.fb_icon}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                              </i>{" "}
                              Facebook
                            </Button>
                          </li>

                          <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                            <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf7fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                              <i className="mr-2">
                                <TwitterIcon />
                              </i>{" "}
                              Twitter
                            </Button>
                          </li>
                        </ul>
                      </div>

                      <div className="text-center relative my-8 md:my-4 before:absolute before:content:[] before:left-0 before:top-[50%] before:w-[100%] before:h-[1px] before:bg-[var(--colorEAECF0)] before:translate-y-[-50%]">
                        <span className="text-xs text-[var(--color98A2B3)] font-satoshi_medium bg-[var(--secondary-foreground)] relative px-4">
                          or
                        </span>
                      </div>
                      <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 md:px-3 md:py-3 mb-8 hidden">
                        <i className="self-center mb-[2px] mr-[17px] md:mr-[12px]">
                          <Image
                            src={assets?.account_tooltip}
                            width={17}
                            height={17}
                            alt=""
                          />
                        </i>
                        This account already exists.
                      </div>
                      <div className="flex flex-wrap -mx-[6px] -my-[6px]">
                        <div className="w-1/2 px-[6px] py-[6px] md:w-full">
                          <CommonInput
                            name="firstName"
                            onChange={getUserGivenInput}
                            placeholderLabel="First name"
                          />
                          {errors.firstName && (
                            <div className="profile_error text-red-500">
                              {errors.firstName.message}
                            </div>
                          )}
                        </div>

                        <div className="w-1/2 px-[6px] py-[6px] md:w-full">
                          <CommonInput
                            name="lastName"
                            onChange={getUserGivenInput}
                            placeholderLabel="Last name"
                          />
                          {errors.lastName && (
                            <div className="profile_error text-red-500">
                              {errors.lastName.message}
                            </div>
                          )}
                        </div>

                        <div className="w-full px-[6px] py-[6px]">
                          <CommonInput
                            name="email1"
                            onChange={getUserGivenInput}
                            placeholderLabel="Email address"
                          />
                          {errors.email && (
                            <div className="profile_error text-red-500">
                              {errors.email.message}
                            </div>
                          )}
                        </div>

                        <div className="w-full px-[6px] py-[6px]">
                          <CommonInput
                            passwordvalue
                            placeholderLabel="Create password"
                            name="password1"
                            onChange={getUserGivenInput}
                          />
                          {errors.password && (
                            <div className="profile_error text-red-500">
                              {errors.password.message}
                            </div>
                          )}
                        </div>

                        <div className="my-5 w-full px-[6px] py-[6px]">
                          <div className="flex items-center space-x-2 checked_input_bg">
                            <input
                              type="checkbox"
                              id="scales"
                              name="scales"
                              className="border-[var(--colorD0D5DD)] rounded-[4px]"
                              checked={isVerified}
                              onClick={() => setIsVerified(!isVerified)}
                            />
                            <span className="text-sm text-[var(--textgray)] font-satoshi_medium">
                              <span className="text-[var(--primary)]">
                                I agree to the
                              </span>{" "}
                              {/* app/(inner)/(routes)/terms-condition */}
                              <Link href="/terms-condition">
                                Terms of Service{" "}
                              </Link>
                              <span className="text-[var(--primary)]">and</span>{" "}
                              <Link href="/privacy-policy">
                                Privacy Policy.
                              </Link>
                            </span>
                            {/* <CheckboxSub
                          checked={isVerified}
                          onClick={() => setIsVerified(!isVerified)}
                        >
                          <span className="text-sm text-[var(--textgray)] font-satoshi_medium">
                            <span className="text-[var(--primary)]">
                              I agree to the
                            </span>{" "}
                            Terms of Service{" "}
                            <span className="text-[var(--primary)]">and</span>{" "}
                            Privacy Policy.
                          </span>
                        </CheckboxSub> */}
                          </div>
                        </div>

                        <div className="w-full px-[6px] py-[6px]">
                          {!isLoading ? (
                            <Button
                              className="w-[100%] text-base py-3 h-auto"
                              variant="default"
                              type="submit"
                              disabled={!isVerified}
                            >
                              Sign up
                            </Button>
                          ) : (
                            <Button
                              className="w-[100%] text-base py-3 h-auto"
                              variant="default"
                            >
                              <ButtonLoader />
                            </Button>
                          )}
                        </div>

                        {accountType.length && (
                          <div className="text-center mt-3 w-full px-[6px] py-[6px]">
                            <p className="text-sm text-[var(--textgray)]">
                              Already have an account?{" "}
                              <Link
                                className="text-[var(--primary)] hover:text-[var(--secondary)]"
                                href={`/auth/${accountType}/login`}
                              >
                                Log in
                              </Link>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full">
                      <div className="text-[var(--black1F1F1F)] mb-8">
                        <h2 className="text-3xl mb-2 lg:text-[30px]">
                          Hey there &#128075;
                        </h2>
                        <p>
                          Enter the information to register the Casacall
                          platform.
                        </p>
                      </div>
                      <div>
                        <ul className="flex flex-wrap -mx-3">
                          <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                            <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorfef0ef)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                              <i className="mr-2">
                                <Image
                                  src={assets?.google_icon}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                              </i>{" "}
                              Google
                            </Button>
                          </li>

                          <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                            <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf3fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                              <i className="mr-2">
                                <Image
                                  src={assets?.fb_icon}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                              </i>{" "}
                              Facebook
                            </Button>
                          </li>

                          <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                            <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf7fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                              <i className="mr-2">
                                <Image
                                  src={assets?.twitter_icon}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                              </i>{" "}
                              Twitter
                            </Button>
                          </li>
                        </ul>
                      </div>

                      <div className="text-center relative my-8 md:my-4 before:absolute before:content:[] before:left-0 before:top-[50%] before:w-[100%] before:h-[1px] before:bg-[var(--colorEAECF0)] before:translate-y-[-50%]">
                        <span className="text-xs text-[var(--color98A2B3)] font-satoshi_medium bg-[var(--secondary-foreground)] relative px-4">
                          or
                        </span>
                      </div>
                      <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 mb-8 md:px-4 md:py-4 hidden ">
                        <i className="self-center mb-[2px] mr-[17px] md:mr-[12px]">
                          <Image
                            src={assets?.account_tooltip}
                            width={17}
                            height={17}
                            alt=""
                          />
                        </i>
                        This account already exists.
                      </div>
                      <div className="flex flex-wrap -mx-[6px] -my-[6px]">
                        <div className="w-full px-[6px] py-[6px]">
                          <CommonSelect
                            onChange={dropdownValue}
                            options={selectApi}
                            labelPlaceholder={
                              "A private entrepreneur or a company?"
                            }
                          />
                        </div>
                        <div className="w-full px-[6px] py-[6px]">
                          <CommonInput
                            placeholderLabel="Email address"
                            name="email"
                            // value={email}
                            onChange={getUserGivenInput1}
                          />
                          {errors1.email && (
                            <div className="profile_error text-red-500">
                              {errors1.email}
                            </div>
                          )}
                        </div>

                        <div className="w-full px-[6px] py-[6px]">
                          <CommonInput
                            name="password"
                            // value={password}
                            onChange={getUserGivenInput1}
                            passwordvalue
                            placeholderLabel="Create password"
                          />
                          {errors1.password && (
                            <div className="profile_error text-red-500">
                              {errors1.password}
                            </div>
                          )}
                        </div>

                        {/* <div className="my-5 w-full px-[6px] py-[6px]">
                          <CheckboxSub checked={false}>
                            <span className="text-sm text-[var(--textgray)] font-satoshi_medium">
                              <span className="text-[var(--primary)]">
                                I agree to the
                              </span>{" "}
                              Terms of Service{" "}
                              <span className="text-[var(--primary)]">and</span>{" "}
                              Privacy Policy.
                            </span>
                          </CheckboxSub>
                        </div> */}
                        <div className="my-5 w-full px-[6px] py-[6px]">
                          <div className="flex items-center space-x-2 checked_input_bg">
                            <input
                              type="checkbox"
                              id="scales"
                              name="scales"
                              className="border-[var(--colorD0D5DD)] rounded-[4px]"
                              checked={isVerified1}
                              onClick={() => setIsVerified1(!isVerified1)}
                            />
                            <span className="text-sm text-[var(--textgray)] font-satoshi_medium">
                              <span className="text-[var(--primary)]">
                                I agree to the
                              </span>{" "}
                              {/* app/(inner)/(routes)/terms-condition */}
                              <Link href="/terms-condition">
                                Terms of Service{" "}
                              </Link>
                              <span className="text-[var(--primary)]">and</span>{" "}
                              <Link href="/privacy-policy">
                                Privacy Policy.
                              </Link>
                            </span>
                          </div>
                        </div>

                        <div className="w-full px-[6px] py-[6px]">
                          {!isLoading ? (
                            <Button
                              className="w-[100%] text-base py-3 h-auto"
                              variant="default"
                              type="button"
                              disabled={!isVerified1}
                              onClick={handleSubmit1}
                            >
                              Sign up
                            </Button>
                          ) : (
                            <Button
                              className="w-[100%] text-base py-3 h-auto"
                              variant="default"
                            >
                              <ButtonLoader />
                            </Button>
                          )}
                        </div>

                        <div className="w-full px-[6px] py-[6px] text-center mt-3">
                          <p className="text-sm text-[var(--textgray)]">
                            Already have an account?{" "}
                            <Link
                              className="text-[var(--primary)] hover:text-[var(--secondary)]"
                              href="/"
                            >
                              Log in
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : null}
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 p-4 md:hidden">
        <SignSlideRight bannerImage={assets.banner_image_sign}>
          <h2 className="text-4xl leading-[1.4] text-[var(--black-light)] xl:text-[32px] lg:text-[24px]">
            <span className="text-[var(--secondary)] font-satoshi_bold">
              Casacall
            </span>{" "}
            combines a multitude of professionals near you with <br />{" "}
            <span className="relative pb-3">
              instant booking{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>
            and
            <span className="relative pb-3">
              flexible settings.{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>
          </h2>
        </SignSlideRight>
      </div>
    </div>
  );
}

export default SignUpVendor;
