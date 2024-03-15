"use client";
import React, { useEffect, useState } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useMutation, useQuery } from "react-query";
import { getClientInfo, updateClientProfile } from "@/api/functions/admin.api";
export default function ProfileTwoFactModal() {
  const [switchValue, setSwitchValue] = useState<boolean>(false)
  const [success, setSeucces] = useState<boolean>(false)
  const {register, handleSubmit} = useForm({
    defaultValues : {
      password : ""
    },
    resolver : yupResolver(yup.object({password : yup.string().required()}))
  })

  const {mutate} = useMutation(updateClientProfile)
  const {data, isLoading} = useQuery({
    queryKey : ["profile-info"],
    queryFn : getClientInfo
  })

  useEffect(() => {
    if(data?.data.twoFactorEnabled){
      setSwitchValue(data.data.twoFactorEnabled)
    }
  }, [data])

  const subminHandler = ({password} : {password : string}) => {
    mutate({
      current_password : password,
      twoFactorEnabled : !switchValue
    }, {
      onSuccess : (res) => {
        setSwitchValue(!switchValue)
        setSeucces(true)
      },
      onError : (err) => {
        console.log(err);
      }
    })
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="bg-gray-200  aria-[checked=true]:!bg-black">
          <Switch className="custom-switch data-[state=checked]:!bg-black"
            checked={switchValue} 
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
            Two factor authentication
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(subminHandler)}>
            <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="px-10 md:px-4 py-6 md:basis-full">
              <h3 className="text-[16px] text-gray-900 font-satoshi_regularmb-1.5  mb-6">
                To enable two-factor authentication, please enter a password.
              </h3>
              <div className="relative border-gray-200 border border-solid rounded-[8px] py-[12px] px-[16px]">
                <Input
                  type="password"
                  {...register("password")}
                  placeholder="Enter your current password"
                  className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                />
              </div>
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full md:flex-wrap">
                <li className="pr-2 hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      className="rounded-[50px] px-[20px] py-[6px] text-white bg-gray-900 hover:bg-secondary  hover:text-white md:w-full"
                    >
                      Enable 
                    </Button>
                  </DialogClose>
                </li>
              </ul>
            </div>
            </div>
          </form>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
