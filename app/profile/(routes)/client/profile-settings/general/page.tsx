"use client"
import { getClientInfo, updateClientProfile } from "@/api/functions/admin.api";
import Container from "@/components/Container";
import DelectProfileGeneralModal from "@/components/DelectProfileGeneralModal/DelectProfileGeneralModal";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Input } from "@/components/ui/input";
import { FetchClientProfile } from "@/hooks/react-qurey/query-hooks/ClientProfile.hook";
// import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
// import { userLogout } from "@/redux-toolkit/slices/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useRouter } from "next/navigation";
// import { destroyCookie } from "nookies";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as yup from "yup"
import Loading from "@/app/(landing)/loading";
// import Loader from "@/components/Loading/Loading";
import { useRef } from "react";
export default function Index() {

  // const [clientEmail, setClientEmail] = useState<string>("")
  const [emailPlaceholder, setEmailPlaceholder] = useState<string>("")
  const [changes, setChages] = useState<"Save changes" | "Saving changes...">("Save changes")
  // const router = useRouter()
  const {data, isLoading} = useQuery({
    queryKey : ["profile-details"],
    queryFn : getClientInfo
  })

  const {mutate : updateProfileMutation, isLoading : loadingProfileUpdate } = useMutation(updateClientProfile)
  const schema = yup.object({
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
       "Enter a vaild email"),
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isDirty, dirtyFields, errors }
  } = useForm({
    defaultValues: {
      email: emailPlaceholder,
    },
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if(data){
      setValue("email", data.data.email)
    }
  }, [data])



  // const deleteHandler = ({password, reason} : {password : string, reason ?: string}) => {
    
  // }

  const subminHandler = (data : {email : string}) => {
    setChages("Saving changes...")
    updateProfileMutation({email : data.email}, {
      onSuccess : (res) => {
        setEmailPlaceholder(res.data.email)
        setChages("Save changes")
      },
      onError : (err) => {
        console.log(err);
        setChages("Save changes")
      }
    })
  }
  console.log(errors);
  
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
        {isLoading ? <Loading/> : <div className="relative flex flex-wrap">
          <div className="w-[20%] lg:w-full lg:mb-6 overflow-x-auto">
            <div className="sticky top-[40px] lg:relative lg:top-0 lg:border-b lg:border-solid lg:border-gray-200 md:min-w-[530px] lg:pb-1">
              <ul className="lg:flex items-center">
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/general"
                    className="relative text-[16px] text-gray-900 font-satoshi_medium hover:text-gray-900 before:absolute before:contents-[] before:w-[2px] before:h-[20px] before:top-[4px] lg:before:top-[inherit] lg:before:bottom-[-4px] lg:before:left-0 lg:before:z-[9] lg:before:w-[100%] lg:before:h-[1px] lg:inline-flex lg:before:shadow-none before:bg-gray-900 before:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.85)] before:left-[-30px]"
                  >
                    General
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/password-security"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Password & security
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/payment"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Payment
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/notifications"
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
              <h1 className="text-[30px] text-gray-900 font-satoshi_medium mb-12 md:mb-6 lg:text-[24px] md:hidden">
                General
              </h1>
              
              <div className="relative max-w-[660px] lg:max-w-full">
                <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-3">
                  Email address
                </h2>
                <form onSubmit={handleSubmit(subminHandler)}>
                  <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px] mb-10 md:mb-6">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Card holder
                      </label>
                      <Input
                        type="text"
                        // defaultValue={emailPlaceholder}
                        className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        {...register("email")}
                      />
                    </div>
                    {errors.email && <p style={{color : "red"}}>{`*${errors.email.message}`}</p>}
                    <div className="relative flex justify-end pb-10 md:pb-6 border-gray-200 border-b border-solid">
                      <Button 
                      type="submit"
                      disabled = {
                        Boolean(watch("email").length) && changes === "Save changes" ?
                        false : true
                      }
                      >
                        {/* {loadingProfileUpdate ? <Loader needP={false} size="small"/> : changes} */}
                        {changes}
                        </Button>
                    </div>
                </form>
                <div className="relative pt-8">
                  <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-1">
                    Delete your account
                  </h2>
                  <p className="text-[14px] text-gray-500 font-satoshi_regular">
                    Would you like to delete your account?
                  </p>
                  <div className="mt-6">
                    <DelectProfileGeneralModal/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </Container>
    </div>
  );
}
