/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
"use client";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import Container from "@/components/Container";
import EditAvatarModal from "@/components/EditAvatarModal/EditAvatarModal";
import ProfileAddressFieldModal from "@/components/ProfileAddressFieldModal/ProfileAddressFieldModal";
import ProfileLanguageFieldFieldModal from "@/components/ProfileLanguageFieldFieldModal/ProfileLanguageFieldFieldModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getProfileDetails } from "@/api/functions/admin.api";
import {
  FetchClientProfile,
  updateClientProfileDetails,
} from "@/hooks/react-qurey/query-hooks/ClientProfile.hook";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ClientProfileAddressFieldModal from "@/components/ProfileAddressFieldModal/ClientProfileAddressFieldModal";
import ClientProfileLanguageFieldFieldModal from "@/components/ProfileLanguageFieldFieldModal/ClientProfileLanguageFieldFieldModal";
import { Textarea } from "@/components/ui/textarea";
// const validationSchema = yup.object().shape({
//   firstName: yup.string().required("First name is required"),
//   lastName: yup.string().required("Last name is required"),
//   description: yup.string().required("Description is required"),
// });
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .min(1, "First name cannot be empty"),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .min(1, "Last name cannot be empty"),
  description: yup.string().required("Description is required"),
});

interface FormData {
  firstName: string;
  lastName: string;
  description: string;
  country?: string;
  languages?: string[];
}
export default function Index() {
  const queryClient = useQueryClient();
  // const router = useRouter()
  // Fetch profile Details with API
  const {
    data: clientprofile,
    isLoading: clientprofileloading,
    isError: clientprofileerror,
  } = useQuery({
    queryFn: () => FetchClientProfile(),
    queryKey: ["clientprofile"],
  });

  useEffect(() => {
    FetchClientProfile();
  }, [FetchClientProfile]);

  const [ClientLocationValue, setClientLocation] = useState<string | undefined>(
    clientprofile?.data?.country || ""
  );

  useEffect(() => {
    setClientLocation(clientprofile?.data?.country || "");
  }, [clientprofile?.data?.country]);

  const [ClientLangauges, setClientLanguages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const updateClientLocation = (selectedLocation: string) => {
    setClientLocation(selectedLocation || clientprofile?.data?.country);
  };
  const updateClientLanguages = (selectedLanguages: string[]) => {
    setClientLanguages(selectedLanguages);
  };

  console.log("ClientLocation", ClientLangauges);
  // console.log("clientprofile", clientprofile?.data);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  useEffect(() => {
    setValue("firstName", clientprofile?.data?.firstName ?? "");
    setValue("lastName", clientprofile?.data?.lastName ?? "");
    setValue("description", clientprofile?.data?.description ?? "");
  }, [setValue, clientprofile?.data?.firstName, clientprofile?.data?.lastName]);

  const { mutate } = useMutation(updateClientProfileDetails, {
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: async (data) => {
      console.log("data", data);
      setIsLoading(false);
      try {
        await queryClient.invalidateQueries("clientprofile");
        router.push("/profile/client/profile");
      } catch {
        router.refresh();
      }
    },
    onError: () => {
      console.log("Error");
      setIsLoading(false);
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // setIsLoading(true);
    const formDataWithExtras = {
      ...data,
      country: ClientLocationValue,
      languages: ClientLangauges,
    };
    console.log("Complete form data", formDataWithExtras);
    try {
      mutate({
        body: formDataWithExtras,
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting form", error);
      setIsLoading(false);
    }
  };

  const navigatepage = () => {
    router.push("/profile/client/profile");
  };

  const deleteimage = async () => {};
  return (
    <div className="relative py-10 lg:py-6 border-t border-newborder border-solid">
      <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid pb-6">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </a>
        <p className="absolute left-[50%] translate-x-[-50%] top-[2px] text-[16px] text-gray-900 font-satoshi_medium">
          Edit profile
        </p>
      </div>
      <Container>
        <div className="relative">
          <a
            // href="#"
            onClick={() => {
              navigatepage();
            }}
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
          <div className="relative flex flex-wrap py-6 w-full mx-[-16px] lg:mx-0">
            <div className="w-[25%] lg:w-full px-[16px] lg:px-0">
              <div className="sticky top-[10px]">
                <h1 className="text-[36px] text-left mb-8 xl:text-[30px] lg:text-[24px] lg:text-center">
                  Edit profile
                </h1>
                <figure className="relative w-[180px] h-[180px] flex items-center rounded-full max-w-[180px] mr-auto mb-4 lg:mx-auto">
                  <Image
                    src={
                      clientprofile?.data?.profilePicture ||
                      assets.noprofileimage
                    }
                    // src={assets.clientProfileImgmain1}
                    alt="clientimg"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <EditAvatarModal
                    profileimage={clientprofile?.data?.profilePicture}
                  />
                </figure>
              </div>
            </div>
            <div className="sliderTopsWrap_mainRight realtive w-[75%] lg:w-full px-[16px] lg:px-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative w-full py-10 md:pt-8 md:pb-0">
                  <div className="pb-10 lg:pb-6 border-b  border-gray-100 ">
                    <h2 className="text-[20px] text-gray-900 mb-6 md:text-[18px] md:mb-2">
                      Your name
                    </h2>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-1/2 px-3 md:w-full md:mb-2">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px] ">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            First name
                          </label>
                          <Input
                            type="text"
                            placeholder="Enter First Name"
                            {...register("firstName")}
                            className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                          />
                        </div>
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div className="w-1/2 px-3 md:w-full">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px]">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            Last name
                          </label>
                          <Input
                            type="text"
                            placeholder="Enter Last Name"
                            {...register("lastName")}
                            className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                          />
                        </div>
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="pb-10 lg:pb-6 lg:pt-4 border-b pt-8  border-gray-100 ">
                    <h2 className="text-[20px] text-gray-900 mb-6 md:text-[18px] md:mb-2">
                      Where you live
                    </h2>
                    <div className="px-4  py-2 bg-gray-50  rounded">
                      <label className="text-[#70707B] text-[14px] ">
                        Location
                      </label>
                      {/* <ProfileAddressFieldModal /> */}
                      <ClientProfileAddressFieldModal
                        clientlocation={clientprofile?.data?.country}
                        onUpdateClientLocation={updateClientLocation}
                      />
                    </div>
                  </div>
                  <div className="pb-10 lg:pb-6 lg:pt-4 border-b pt-8  border-gray-100 ">
                    <h2 className="text-[20px] text-gray-900 mb-6 md:text-[18px] md:mb-2">
                      About
                    </h2>
                    {/* <div className="px-4  py-2 border rounded">
                      <label className="text-[#70707B] text-[12px] ">
                        About you
                      </label>
                      <p>
                        I am a field sales manager with over eight years of
                        experience in increasing market share in assigned
                        territories. I have a proven track record of
                        successfully selling products and services to companies
                        of all sizes. I hold a Bachelor of Business
                        Administration from the University of Southern
                        California.
                      </p>
                    </div> */}
                    <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px] ">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        About
                      </label>
                      <Textarea
                        placeholder="Enter Description"
                        {...register("description")}
                        className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                  <div className="pb-10 lg:pb-6 lg:pt-4 border-b pt-8  border-gray-100 ">
                    <h2 className="text-[20px] text-gray-900 mb-6 md:text-[18px] md:mb-2">
                      Languages you speak
                    </h2>
                    <div className="px-4  py-2 bg-gray-50  rounded">
                      <label className="text-[#70707B] text-[14px] ">
                        Languages
                      </label>
                      <ClientProfileLanguageFieldFieldModal
                        clientlangauages={clientprofile?.data?.languages}
                        onUpdateClientLanguages={updateClientLanguages}
                      />
                    </div>
                  </div>
                  <div className=" pt-8 ">
                    <div className="flex flex-wrap justify-between">
                      <div>
                        <h2 className="text-[20px] text-gray-900 mb-2 md:text-[18px] md:mb-2">
                          Your past reservations
                        </h2>
                        <p className="text-[14px] text-[#70707B] ">
                          Show the past reservations you've made
                        </p>
                      </div>
                      <Switch className="custom-switch" />
                    </div>
                    <div className="flex mt-6 md:flex-wrap">
                      <div className="rounded-lg bg-[#FFF9D7] p-4 mr-6 md:w-full md:mr-0 md:mb-3">
                        <p className="text-[14px] text-[#70707B]">2023</p>
                        <h4 className="text-base">Deep Tissue Massage</h4>
                      </div>
                      <div className="rounded-lg bg-[#FFF9D7] p-4 md:w-full md:mb-6">
                        <p className="text-[14px] text-[#70707B]">2023</p>
                        <h4 className="text-base">Deep Tissue Massage</h4>
                      </div>
                    </div>

                    <div className="text-end">
                      <Button
                        variant="default"
                        type="submit"
                        disabled={isLoading}
                        className="rounded-[100px] md:w-full"
                      >
                        {isLoading ? "Submitting..." : "Done"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
