"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { reservationStatusChange } from "@/redux-toolkit/slices/stateSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";

const FormSchema = z.object({
  type: z.enum(["Upcoming", "Requested", "Completed", "Declined", "Canceled"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function ChangeReservationStatusModal() {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [status, setStatus] = useState<string>();
  const [close, setClose] = useState<boolean>(false);

  const reservationStatus = useAppSelector(
    (state) => state.globalSlice.changeStatus
  );
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("45555", data?.type);
    setStatus(data?.type);
    setClose(true);
    dispatch(reservationStatusChange(data?.type));
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  console.log("status12234", reservationStatus);

  const badgeBg =
    reservationStatus === "Requested"
      ? "bg-[#FFF8EB]"
      : reservationStatus === "Upcoming"
      ? "bg-[#F5EFFD]"
      : reservationStatus === "Completed"
      ? "bg-[#EBFFEB]"
      : reservationStatus === "Declined"
      ? "bg-[#FAFAFA]"
      : reservationStatus === "Canceled"
      ? "bg-[#FEF2F2]"
      : "";

  const badgeColor =
    reservationStatus === "Requested"
      ? "text-[#F59F00]"
      : reservationStatus === "Upcoming"
      ? "text-[#7757BD]"
      : reservationStatus === "Completed"
      ? "text-[#04D100]"
      : reservationStatus === "Declined"
      ? "text-[#70707B]"
      : reservationStatus === "Canceled"
      ? "text-[#EF4444]"
      : "";

  const badgeBorder =
    reservationStatus === "Requested"
      ? "border-[#F59F00]"
      : reservationStatus === "Upcoming"
      ? "border-[#7757BD]"
      : reservationStatus === "Completed"
      ? "border-[#04D100]"
      : reservationStatus === "Declined"
      ? "border-[#70707B]"
      : reservationStatus === "Canceled"
      ? "border-[#EF4444]"
      : "";

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Badge
            className={`${badgeBg} ml-3 ${badgeColor} border-[1px]  ${badgeBorder} py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg cursor-pointer md:ml-0`}
          >
            {reservationStatus || "Requested"}
          </Badge>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Change status
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="md:basis-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col md:h-full"
                >
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="space-y-3 md:basis-full">
                        <div className="px-10 pb-6 pt-4 sm:px-5 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] md:h-full">
                          <div className="relative radioBtnPayment_mainWrap">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <div className="flex mb-3 items-center">
                                      <div className="relative">
                                        <RadioGroupItem
                                          value="Upcoming"
                                          id="r1"
                                          className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                                        />
                                        <p className="pl-8 text-[16px]">
                                          Upcoming{" "}
                                          <span className="text-gray-400">
                                            (Now)
                                          </span>{" "}
                                        </p>
                                      </div>
                                    </div>
                                  </FormControl>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <div className="flex mb-3 items-center">
                                      <div className="relative">
                                        <RadioGroupItem
                                          value="Requested"
                                          id="r1"
                                          className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                                        />
                                        <p className="pl-8 text-[16px]">
                                          Requested
                                        </p>
                                      </div>
                                    </div>
                                  </FormControl>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <div className="flex mb-3 items-center">
                                      <div className="relative">
                                        <RadioGroupItem
                                          value="Completed"
                                          id="r1"
                                          className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                                        />
                                        <p className="pl-8 text-[16px]">
                                          Completed
                                        </p>
                                      </div>
                                    </div>
                                  </FormControl>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <div className="flex mb-3 items-center">
                                      <div className="relative">
                                        <RadioGroupItem
                                          value="Declined"
                                          id="r1"
                                          className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                                        />
                                        <p className="pl-8 text-[16px]">
                                          Declined
                                        </p>
                                      </div>
                                    </div>
                                  </FormControl>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <div className="flex mb-3 items-center">
                                      <div className="relative">
                                        <RadioGroupItem
                                          value="Canceled"
                                          id="r1"
                                          className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                                        />
                                        <p className="pl-8 text-[16px]">
                                          Canceled
                                        </p>
                                      </div>
                                    </div>
                                  </FormControl>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="relative px-10 w-full sm:px-5 pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
                    <ul className="flex items-center sm:w-full sm:flex-wrap">
                      <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant={"outline"}
                            className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                          >
                            Cancel
                          </Button>
                        </DialogClose>
                      </li>
                      <li className="sm:w-full">
                        {close ? (
                          <DialogClose>
                            <Button type="submit" className="sm:w-full">
                              Save
                            </Button>
                          </DialogClose>
                        ) : (
                          <Button
                            type="submit"
                            variant="default"
                            className="sm:w-full"
                          >
                            Save
                          </Button>
                        )}
                      </li>
                    </ul>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
