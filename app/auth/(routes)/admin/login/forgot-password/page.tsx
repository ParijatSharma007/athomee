"use client"
import { postForgotPassword } from "@/api/functions/admin.api";
import CheckEmail from "@/components/CheckEmail/CheckEmail";
/* eslint-disable react/no-unescaped-entities */
// import CommonInput from "@/components/CommonInput/CommonInput";
import Container from "@/components/Container";
import SignHeader from "@/components/SignHeader/SignHeader";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
import useNotiStack from "@/hooks/useNotistack";
import assets from "@/json/assets";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from 'yup'
function forgotPassword() {
  // const router = useRouter()
  const schema = yup.object({
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
       "Enter a vaild email"),
  });

  const {mutate, isLoading} = useMutation(postForgotPassword)
  const [step, setStep] = useState<0|1>(0)
  const {register,handleSubmit, formState : {errors}, watch} = useForm({
    defaultValues : {
      email : ""
    },
    resolver : yupResolver(schema)
  })

  const onSubmit = ({email} : {email : string}) => {
    mutate({
      email
    }, {
      onSuccess : (res) => {
        setStep(1)
      }
    })
  }
  if(step === 0){
    return (
      <>
        <SignHeader />
        <div className="min-h-[calc(100vh-80px)] py-9 flex items-center">
          <Container>
            <div className="max-w-[560px] mx-auto">
              <div className="text-left mb-8">
                <h2 className="text-3xl	mb-3">Forgot password?</h2>
                <p className="text-base	text-[var(--grey70707B)]">
                  Restore your password by providing your email.
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
              <form onSubmit={handleSubmit(onSubmit)}>  
                <div className="flex flex-wrap -mx-2 -mb-3">
                  <div className="w-full px-2 mb-3">
                    <Input
                    className="relative w-full md:w-full md:px-0 px-[12px] md:mb-3"
                    placeholder="Enter your email" 
                    type="email" {...register("email")}/>
                  </div>
                  {errors.email && <p style={{color : "red"}}>*{errors.email.message}</p>}
                  <div className="w-full px-2 mt-4">
                    <Button
                      className="w-[100%] text-base py-3 h-auto"
                      variant="default"
                      disabled = {isLoading}
                    >
                      {isLoading ? "Loading...":"Continue"}
                    </Button>
                  </div>
  
                  <div className="w-full px-2 text-center mt-6">
                    <Link
                      className="text-sm hover:text-[var(--secondary)]"
                      href="/auth/client/login"
                    >
                      Back to login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </>
    );
  }
  if(step === 1){
    return(
      <CheckEmail
      email={watch().email}/>
    )
  }
}

export default forgotPassword;
