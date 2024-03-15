"use client";
import { updateClientProfile } from "@/api/functions/admin.api";
import CommonInput from "@/components/CommonInput/CommonInput";
// import CommonInput from "@/components/CommonInput/CommonInput";
import Container from "@/components/Container";
import ProfileSignOutModal from "@/components/ProfileSignOutModal/ProfileSignOutModal";
import ProfileSignOutModalThree from "@/components/ProfileSignOutModalThree/ProfileSignOutModalThree";
import ProfileSignOutModalTw from "@/components/ProfileSignOutModalTw/ProfileSignOutModalTw";
import ProfileTwoFactModal from "@/components/ProfileTwoFactModal/ProfileTwoFactModal";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { register } from "module";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as Yup from "yup";

export default function Index() {
  const [changes, setChages] = useState<"Save changes" | "Saving changes...">(
    "Save changes"
  );
  const router = useRouter();
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    newPassword: Yup.string()
      .required("New Password needed")
      .test((val, { createError }) => {
        return Boolean(val.trim())
          ? true
          : createError({ message: "Need some letters rather than spaces" });
      }),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("newPassword"), ""],
      "Passwords must match"
    ),
  });

  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onChangeHandle = (e: any) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  const { mutate, isLoading } = useMutation(updateClientProfile);
  const subminHandler = (data: {
    password: string;
    newPassword: string;
    passwordConfirmation?: string;
  }) => {
    console.log(data);
    setChages("Saving changes...");
    mutate(
      {
        current_password: data.password,
        new_password: data.newPassword,
      },
      {
        onSuccess: (res) => {
          reset({
            password: "",
            newPassword: "",
            passwordConfirmation: "",
          });
          setChages("Save changes");
          toast({
            title: "Password Update Successfully",
          });
        },
        onError: (err) => {
          setChages("Save changes");
          console.log(err);
        },
      }
    );
  };

  return (
    <div className="relative pt-10 pb-20 lg:pb-10 lg:pt-6 md:pt-0">
      <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid py-4 md:mb-6">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </a>
        <p className="absolute left-[50%] translate-x-[-50%] top-[14px] text-[16px] text-gray-900 font-satoshi_medium">
          Settings
        </p>
      </div>
      <Container>
        <div className="relative flex flex-wrap">
          <div className="w-[20%] lg:w-full lg:mb-6 overflow-x-auto">
            <div className="sticky top-[40px] lg:relative lg:top-0 lg:border-b lg:border-solid lg:border-gray-200 md:min-w-[530px] lg:pb-1">
              <ul className="lg:flex items-center">
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/admin/profile-settings/general"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    General
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/admin/profile-settings/password-security"
                    className="relative text-[16px] text-gray-900 font-satoshi_medium hover:text-gray-900 before:absolute before:contents-[] before:w-[2px] before:h-[20px] before:top-[4px] lg:before:top-[inherit] lg:before:bottom-[-4px] lg:before:left-0 lg:before:z-[9] lg:before:w-[100%] lg:before:h-[1px] lg:inline-flex lg:before:shadow-none before:bg-gray-900 before:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.85)] before:left-[-30px]"
                  >
                    Password & security
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/admin/profile-settings/payment"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Payment
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/admin/profile-settings/notifications"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[80%] lg:w-full">
            <div className="relative w-full">
              <h1 className="text-[30px] text-gray-900 font-satoshi_medium mb-12 lg:text-[24px] md:hidden">
                Password & security
              </h1>
              <div className="relative lg:max-w-full">
                <form onSubmit={handleSubmit(subminHandler)}>
                  <div className="flex flex-wrap mx-[-12px] md:mx-0 mb-10 md:mb-6">
                    <div className="w-1/2 md:w-full md:px-0 px-[12px]">
                      <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-3 md:text-[18px]">
                        Current password
                      </h2>
                      <CommonInput
                        name="password"
                        // type="password"
                        placeholderLabel="Type current password"
                        onChange={onChangeHandle}
                        passwordvalue
                      />
                      {/* <Input className="px-[20px]" type="password" {...register("password")} /> */}
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          *{errors.password.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full flex flex-wrap mt-2 md:mx-0 mb-10 md:mb-6">
                      <div className="w-1/2 md:w-full md:px-0 pr-3">
                        <h2 className="w-full px-[12px] text-[20px] text-gray-900 font-satoshi_medium mb-3 md:px-0 md:text-[18px]">
                          New password
                        </h2>
                        <div className="relative w-full md:w-full md:px-0 px-[12px] md:mb-3">
                          {/* <Input className="px-[20px]" type="password" {...register("newPassword")} /> */}
                          <CommonInput
                            name="newPassword"
                            // type="password"
                            placeholderLabel="Come up with new password"
                            onChange={onChangeHandle}
                            passwordvalue
                          />
                          {errors.newPassword && (
                            <p style={{ color: "red" }}>
                              *{errors.newPassword.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="w-1/2 md:w-full md:px-0 px-[12px]">
                        <h2 className="w-full px-[12px] text-[20px] text-gray-900 font-satoshi_medium mb-3 md:px-0 md:text-[18px]">
                          Confirm password
                        </h2>
                        <div className="w-full md:w-full md:px-0 px-[12px]">
                          <CommonInput
                            name="passwordConfirmation"
                            // type="password"
                            placeholderLabel="Type new password again"
                            onChange={onChangeHandle}
                            passwordvalue
                          />
                          {/* <Input
                        type="password"
                        {...register("passwordConfirmation")}
                        className="px-[20px]"
                      /> */}
                          {errors.passwordConfirmation && (
                            <p style={{ color: "red" }}>
                              *{errors.passwordConfirmation.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap mx-[-12px] md:mx-0 mb-10 md:mb-6">
                    <h2 className="w-full px-[12px] text-[20px] text-gray-900 font-satoshi_medium mb-3 md:px-0 md:text-[18px]">
                      New password
                    </h2>
                    <div className="relative w-1/2 md:w-full md:px-0 px-[12px] md:mb-3">
                      <Input type="password" {...register("newPassword")} />
                      <CommonInput placeholderLabel="Come up with new password" register={register("newPassword")}/>
                    </div>
                    <h2 className="w-full px-[12px] text-[20px] text-gray-900 font-satoshi_medium mb-3 md:px-0 md:text-[18px]">
                      Confirm password
                    </h2>
                    <div className="w-1/2 md:w-full md:px-0 px-[12px]">
                      <CommonInput placeholderLabel="Type new password again" register={register("passwordConfirmation")}/>
                      <Input
                        type="password"
                        {...register("passwordConfirmation")}
                      />
                      {errors.passwordConfirmation && (
                        <p style={{ color: "red" }}>
                          *{errors.passwordConfirmation.message}
                        </p>
                      )}
                    </div>
                  </div> */}
                  <div className="relative flex justify-end pb-10 md:pb-6 border-gray-200 border-b border-solid">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Saving changes..." : "Save changes"}
                    </Button>
                  </div>
                </form>
                <div className="relative flex items-center pt-8 pb-12 md:pb-6 md:pt-4 border-gray-200 border-b border-solid mb-12 md:mb-6">
                  <div className="max-w-[412px] mr-auto pr-4">
                    <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-1 md:text-[18px]">
                      Two factor authentication
                    </h2>
                    <p className="text-[14px] text-gray-500 font-satoshi_regular">
                      To help keep your account secure, we&#39;ll ask you to
                      submit a code when using a new device to log in. We&#39;ll
                      send the code via email or Casacall notification.
                    </p>
                  </div>
                  <div className="relative">
                    <ProfileTwoFactModal />
                  </div>
                </div>
                <h2 className="text-[20px] w-full text-gray-900 font-satoshi_medium mb-1">
                  Connected devices
                </h2>
                <div className="relative items-center flex sm:flex-wrap pt-8 border-gray-100 border-b border-solid pb-6">
                  <div className="max-w-[412px] sm:max-w-full sm:w-full sm:mb-2 sm:pr-0 mr-auto pr-4">
                    <h2 className="text-[16px] text-gray-900 font-satoshi_medium mb-1.5">
                      Chrome 114, Mac OS X
                      <Badge className="bg-[#F5EFFD] rounded-[6px] text-[#7757BD] text-[12px] py-[6px] ml-4">
                        This device
                      </Badge>
                    </h2>
                    <ul className="flex item-center">
                      <li className="relative pr-[20px] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:right-[8px] before:top-[10px] before:bg-gray-400">
                        <p className="text-[14px] text-gray-400">
                          Last activity just now{" "}
                        </p>
                      </li>
                      <li>
                        <p className="text-[14px] text-gray-400">
                          New York, United States
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <ProfileSignOutModalThree />
                  </div>
                </div>
                <div className="relative items-center flex sm:flex-wrap pt-6 border-gray-100 border-b border-solid pb-6">
                  <div className="max-w-[412px] mr-auto pr-4 sm:max-w-full sm:w-full sm:mb-2 sm:pr-0">
                    <h2 className="text-[16px] text-gray-900 font-satoshi_medium mb-1.5">
                      Casacall on iOS
                    </h2>
                    <ul className="flex item-center">
                      <li className="relative pr-[20px] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:right-[8px] before:top-[10px] before:bg-gray-400">
                        <p className="text-[14px] text-gray-400">
                          Last activity 1 hour ago
                        </p>
                      </li>
                      <li>
                        <p className="text-[14px] text-gray-400">
                          {" "}
                          Berlin, Germany
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <ProfileSignOutModal />
                  </div>
                </div>
                <div className="relative items-center flex sm:flex-wrap pt-6">
                  <div className="max-w-[412px] mr-auto pr-4 sm:max-w-full sm:w-full sm:mb-2 sm:pr-0">
                    <h2 className="text-[16px] text-gray-900 font-satoshi_medium mb-1.5">
                      Safari, Mac OS X
                    </h2>
                    <ul className="flex item-center">
                      <li className="relative pr-[20px] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:right-[8px] before:top-[10px] before:bg-gray-400">
                        <p className="text-[14px] text-gray-400">
                          Last activity yesterday{" "}
                        </p>
                      </li>
                      <li>
                        <p className="text-[14px] text-gray-400">
                          London, United Kingdom
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <ProfileSignOutModalTw />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
