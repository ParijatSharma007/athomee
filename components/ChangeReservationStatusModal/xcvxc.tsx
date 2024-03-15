"use client"
import PencilIcon from "@/json/icons/PencilIcon";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Badge } from "../ui/badge";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

export default function ChangeReservationStatusModal() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("ioujhdcjgdzs",data)
   
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
      <Dialog>
         <DialogTrigger asChild>
        <Badge className="bg-[#FFF8EB] ml-3 text-[#F59F00] border-[1px]  border-[#FFEAC2] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg cursor-pointer">
          <i className="flex items-center justify-center mr-2">
            <PencilIcon />
          </i>
          Requested
        </Badge>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md !rounded-[12px]">
      <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
          <DialogTitle className="text-2xl text-left ">
            Change status
          </DialogTitle>
        </DialogHeader>
        <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">   
   
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">   
              <FormControl>
              <div className="px-10 pb-6 pt-4 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <div className="relative radioBtnPayment_mainWrap">
                <RadioGroup defaultValue="comfortable"
                  onValueChange={field.onChange}
                  // onValueChange={() => onChangeValue}
                  // defaultValue={field.value}
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
                      </div>
                      </div>
                    </FormControl>
                    <p className="pl-8 text-[16px]">
                      Upcoming <span className="text-gray-400">(Now)</span>{" "}
                    </p>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                    <div className="flex mb-3 items-center">
                  <div className="relative">
                  <RadioGroupItem
                      value="Requested"
                      id="r2"
                      className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                      
                   />
                  </div>
                  </div>
                    </FormControl>
                      <p className="pl-8 text-[16px]">Requested</p>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                    <div className="flex mb-3 items-center">
                  <div className="relative">
                    <RadioGroupItem
                      value="Completed"
                      id="r3"
                      className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                    
                    />
                    </div>
                </div>
                    </FormControl>
                    <p className="pl-8 text-[16px]">Completed</p>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                    <div className="flex mb-3 items-center">
                  <div className="relative">
                  <RadioGroupItem
                      value="Declined"
                      id="r4"
                      className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                   
                   />
                    </div>
                </div>
                    </FormControl>
                    <p className="pl-8 text-[16px]">Declined</p>
                  </FormItem>


                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                    <div className="flex mb-3 items-center">
                  <div className="relative">
                  <RadioGroupItem
                      value="Canceled"
                      id="r5"
                      className="radioBtnMain absolute w-full h-[20px] left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-0  before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[2px] before:left-[0] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                    />
                    </div>
                </div>
                    </FormControl>
                    <p className="pl-8 text-[16px]">Canceled</p>
                  </FormItem>

                </RadioGroup>
                </div>
                </div>
              </FormControl>
             {/* <FormMessage /> */}
            </FormItem>
          )}
        />


         <div className="relative px-10 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
            <ul className="flex items-center">
              <li className="mr-4">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </li>
              <li>
                <Button variant="default">Save</Button>
              </li>
            </ul>
          </div>

          
      </form>
         </Form>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
      </Dialog>


  
  )
}
