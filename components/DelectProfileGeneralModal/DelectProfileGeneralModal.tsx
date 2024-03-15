"use client";
import React, { useState } from "react";
import { ChevronDown, Copy } from "lucide-react";

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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useMutation } from "react-query";
import { deleteClient } from "@/api/functions/admin.api";
import { userLogout } from "@/redux-toolkit/slices/userSlice";
export default function DelectProfileGeneralModal() {
  const yupSchema = yup.object({
    password : yup.string().required(),
    reason : yup.string().required()
  })
  const {register, handleSubmit, control, watch} = useForm({
    defaultValues : {
      password : "",
      reason : ""
    },
    resolver : yupResolver(yupSchema)
  })
  const [deleteState, setDeleteState] = useState<"Delete"|"Deleting...">("Delete")
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {mutate} = useMutation(deleteClient)

  const submitHandler = ({password, reason} : {password : string, reason : string}) => {
    setDeleteState("Deleting...")
    mutate({
      password,
      reason
    }, {
      onSuccess : (res) => {
        dispatch(userLogout())
        router.push("/")
      },
      onError : (err) => {
        setDeleteState("Delete")
        console.log(err)
      }
    })
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-red-100 text-[14px] text-red-500 font-satoshi_regular px-6 rounded-[32px] ml-2 flex item-center hover:bg-red-500 hover:text-white hover:opacity-70"
          >
            Delete account
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Delete account
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(submitHandler)}>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="md:basis-full">
              <div className="px-10 md:px-4 py-6">
                <p className="text-[16px] text-gray-900">
                Deleting your account will result in the loss of access to any information associated with your account, and you will no longer be able to make new service reservations.
                </p>
              </div>
              <div className="px-10 md:px-4 mb-8">
                <p className="text-[20px] text-gray-900 font-satoshi_medium mb-3">Your password for confirmation</p>
                <div className="relative border-gray-200 border border-solid rounded-[8px] py-[12px] px-[16px] mb-10">
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...register("password")}
                      className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-400"
                    />
                  </div>
              </div>
              <div className="px-10 md:px-4">
                <p className="text-[20px] text-gray-900 font-satoshi_medium mb-3">Why do you want to delete?</p>
                <div className="relative border-gray-200 border border-solid rounded-[8px] py-[12px] px-[16px] mb-10">
                  <Controller control={control}
                  name="reason"
                  render = {
                    ({field : {onChange, value}} : any) => (
                      <Select onValueChange={onChange} value={value}>
                      <SelectTrigger icon={<ChevronDown/>} className="w-full border-0 p-0 h-auto text-gray-400 text-[16px] font-satoshi_medium">
                        <SelectValue
                          placeholder="Please select a reason"
                          className="!text-gray-400 text-[16px] font-satoshi_medium !placeholder:text-gray-400"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0">
                        <SelectGroup>
                          <SelectItem value="1">
                            Option 1
                          </SelectItem>
                          <SelectItem value="2">
                          Option 2
                          </SelectItem>
                          <SelectItem value="3">
                          Option 3
                          </SelectItem>
                          <SelectItem value="4">
                          Option 4
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    )
                  }
                  />
                  </div>
              </div>
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
              <ul className="flex items-center md:flex-wrap md:w-full">
                <li className="pr-2 md:hidden">
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
                    <Button
                      type="submit"
                      disabled={watch("password") && watch("reason")? false : true}
                      className="rounded-[50px] px-[20px] py-[6px] text-white bg-red-500 hover:bg-secondary  hover:text-white md:w-full"
                    >
                      {deleteState}
                    </Button>
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
