"use client";
import EditDateTimeDetailsModal from "@/components/EditDateTimeDetailsModal/EditDateTimeDetailsModal";
import ServiceTypeAddressModal from "@/components/ServiceTypeAddressModal/ServiceTypeAddressModal";
import ServiceTypeTimeModal from "@/components/ServiceTypeTimeModal/ServiceTypeTimeModal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import NewcalenderIconBox from "@/json/icons/NewcalenderIconBox";
import NotificTagServiceIcon from "@/json/icons/NotificTagServiceIcon";
import Image from "next/image";
import React from "react";
import Container from "../../../../../components/Container";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import { ChevronDown } from "lucide-react";
export default function RequestReserve() {
  const payWithCartList = [
    {
      titleTxt: "Credit/debit card",
      iconPath: `${assets.cartIconOption1}`,
      TabValue: "card",
    },
    {
      titleTxt: "PayPal",
      iconPath: `${assets.cartIconOption2}`,
      TabValue: "paypal",
    },
    {
      titleTxt: "Bank account",
      iconPath: `${assets.cartIconOption1}`,
      TabValue: "bank",
    },
  ];
  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (index: number) => {
    setCheckBtn(index);
  };
  return (
    <div className="relative py-10 md:pt-0 md:pb-0 border-t border-newborder border-solid">
      <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid py-6 md:mb-6">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </a>
        <p className="absolute left-[50%] translate-x-[-50%] top-[24px] text-[16px] text-gray-900 font-satoshi_medium">
          Request to reserve
        </p>
      </div>
      <Container>
        <div className="relative">
          <a
            href="#"
            className="inline-flex md:hidden items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
          <div className="relative pt-8 pb-10 md:hidden lg:py-6">
            <h1 className="inline-flex items-center transition-all text-4xl text-primary font-satoshi_medium mb-4 lg:mb-2 lg:text-[24px] ">
              Request to reserve
            </h1>
          </div>
          <div className="relative flex flex-wrap">
            <div className="relative w-[65%] pr-12 lg:order-2 lg:w-full lg:pr-0">
              <h3 className="text-[24px] text-gray-900 mb-3 lg:text-[20px]">
                Reservation details
              </h3>
              <p className="text-[14px] text-gray-400">Service type</p>
              <div className="flex justify-between items-center py-4 border-b border-solid border-gray-200 md:pt-0">
                <div className="relative">
                  <p className="text-[16px] text-gray-900 font-satoshi_medium">
                    30-Minute
                  </p>
                  <p className="text-[16px] text-gray-900 font-satoshi_regular">
                    Complex basic massage to revitalize.
                  </p>
                </div>
                <ServiceTypeTimeModal />
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid border-gray-200">
                <div className="relative">
                  <p className="text-[14px] text-gray-400">Address</p>
                  <p className="text-[16px] text-gray-900 font-satoshi_medium">
                    25 Draper Street, San Francisco, CA, USA
                  </p>
                </div>
                <ServiceTypeAddressModal />
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid border-gray-200">
                <div className="relative">
                  <p className="text-[14px] text-gray-400">Date & time</p>
                  <p className="text-[16px] text-gray-900 font-satoshi_medium">
                    20 May 2023, 10:00 AM
                  </p>
                </div>
                <EditDateTimeDetailsModal />
              </div>
              <div className="relative hidden py-8 lg:block lg:pt-6 lg:pb-0 border-b border-solid border-gray-200">
                <h3 className="text-[24px] text-gray-900 mb-4 lg:text-[20px]">
                  Payment info
                </h3>
                <ul>
                  <li className="flex justify-between pb-4">
                    <p className="text-[16px] text-gray-900 font-satoshi_regular">
                      Deep Tissue Massage, 30-Minute
                    </p>
                    <p className="text-[16px] text-gray-900 font-satoshi_regular">
                      $50.00
                    </p>
                  </li>
                  {/* <li className="flex justify-between pb-4">
                    <div className="relative flex items-center">
                      <Checkbox
                        icon={<CheckboxTickIcon />}
                        id="1"
                        className="rounded-[4px] border-gray-200"
                      />
                      <label
                        htmlFor="1"
                        className="text-gray-900 pl-[8px] text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Wrap it up as a gift!
                      </label>
                    </div>
                    <p className="text-[16px] text-gray-900 font-satoshi_regular">
                      $10.00
                    </p>
                  </li> */}
                  <li className="flex justify-between pb-4">
                    <p className="text-[16px] text-gray-900 font-satoshi_regular flex items-center">
                      Service fee
                      <i className="inline-flex items-center leading-none text-0 pl-2">
                        <NotificTagServiceIcon />
                      </i>
                    </p>
                    <p className="text-[16px] text-gray-900 font-satoshi_regular">
                      $26.00
                    </p>
                  </li>
                  <li className="flex justify-between py-5 border-t border-newborder border-solid">
                    <p className="text-[20px] text-gray-900 font-satoshi_medium flex items-center">
                      Total
                    </p>
                    <p className="text-[20px] text-gray-900 font-satoshi_medium">
                      $293.00
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative py-10 lg:py-6">
                <h3 className="text-[24px] text-gray-900 mb-4 lg:text-[20px]">
                  Pay with
                </h3>
                <div className="relative">
                  <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-0 hidden md:block">
                    <label className="text-[12px] text-gray-400 m-0 leading-0">
                      Payment method
                    </label>
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="rgba(112, 112, 123, 1)" />}
                        className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      >
                        <SelectValue placeholder="Credit/debit card" />
                      </SelectTrigger>
                      <SelectContent className="p-0">
                        <SelectGroup>
                          <SelectItem value="1">Credit/debit card</SelectItem>
                          <SelectItem value="2">Paypal</SelectItem>
                          <SelectItem value="3">Bank account</SelectItem>
                          <SelectItem value="4">Others</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="relative border-gray-200 border-solid border-b pb-4 pt-4 hidden md:block">
                    <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] mb-4">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Card holder
                      </label>
                      <Input
                        type="email"
                        placeholder="Julia Brown"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                    <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] mb-4">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Card number
                      </label>
                      <Input
                        type="email"
                        placeholder="4393 3746 4924 5683"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                      <i className="absolute right-[10px] top-[50%] translate-y-[-50%] w-[32px] inline-flex">
                        <Image
                          src={assets.masterCartIcons1}
                          alt="icon"
                          width={36}
                          height={20}
                        />
                      </i>
                    </div>
                    <div className="flex flex-wrap mb-4 justify-between">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] w-[49%]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          Expiration date
                        </label>
                        <Input
                          type="email"
                          placeholder="02/24"
                          className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                      </div>
                      <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] w-[49%]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          CVV
                        </label>
                        <Input
                          type="email"
                          placeholder="745"
                          className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          icon={<CheckboxTickIcon />}
                          className="rounded-[4px] border-gray-200"
                        />
                        <label
                          htmlFor="terms"
                          className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Save this payment method
                        </label>
                      </div>
                    </div>
                  </div>
                  <Tabs
                    defaultValue="card"
                    className="relative w-full md:hidden"
                  >
                    <TabsList className="flex flex-wrap justify-between">
                      <TabsTrigger
                        value="card"
                        className="relative w-[31%] bg-gray-50 px-4 py-4 rounded-[8px] overflow-hidden data-[state=active]:bg-[#F5EFFD] data-[state=active]:border-gray-400 data-[state=active]:border-solid data-[state=active]:border-[1px]"
                      >
                        <Label
                          htmlFor="1"
                          className="w-full flex items-center justify-center text-center p-1 font-satoshi_medium"
                        >
                          <i className="pr-[16px]">
                            <Image
                              src={assets.cartIconOption1}
                              alt="icon"
                              width={22}
                              height={16}
                            />
                          </i>
                          Credit/debit card
                        </Label>
                      </TabsTrigger>
                      <TabsTrigger
                        value="paypal"
                        className="relative w-[31%] bg-gray-50 px-4 py-4 rounded-[8px] overflow-hidden data-[state=active]:bg-[#F5EFFD] data-[state=active]:border-gray-400 data-[state=active]:border-solid data-[state=active]:border-[1px]"
                      >
                        <Label
                          htmlFor="1"
                          className="w-full flex items-center justify-center text-center p-1 font-satoshi_medium"
                        >
                          <i className="pr-[16px]">
                            <Image
                              src={assets.cartIconOption2}
                              alt="icon"
                              width={22}
                              height={16}
                            />
                          </i>
                          PayPal
                        </Label>
                      </TabsTrigger>
                      <TabsTrigger
                        value="bank"
                        className="relative w-[31%] bg-gray-50 px-4 py-4 rounded-[8px] overflow-hidden data-[state=active]:bg-[#F5EFFD] data-[state=active]:border-gray-400 data-[state=active]:border-solid data-[state=active]:border-[1px]"
                      >
                        <Label
                          htmlFor="1"
                          className="w-full flex items-center justify-center text-center p-1 font-satoshi_medium"
                        >
                          <i className="pr-[16px]">
                            <Image
                              src={assets.cartIconOption1}
                              alt="icon"
                              width={22}
                              height={16}
                            />
                          </i>
                          Bank account
                        </Label>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="card">
                      <div className="relative border-gray-200 border-solid border-b pb-10 pt-4">
                        <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] mb-4">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            Card holder
                          </label>
                          <Input
                            type="email"
                            placeholder="Julia Brown"
                            className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                          />
                        </div>
                        <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] mb-4">
                          <label className="text-[12px] text-gray-400 m-0 leading-0">
                            Card number
                          </label>
                          <Input
                            type="email"
                            placeholder="4393 3746 4924 5683"
                            className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                          />
                          <i className="absolute right-[10px] top-[50%] translate-y-[-50%] w-[32px] inline-flex">
                            <Image
                              src={assets.masterCartIcons1}
                              alt="icon"
                              width={36}
                              height={20}
                            />
                          </i>
                        </div>
                        <div className="flex flex-wrap mb-4 justify-between">
                          <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] w-[49%]">
                            <label className="text-[12px] text-gray-400 m-0 leading-0">
                              Expiration date
                            </label>
                            <Input
                              type="email"
                              placeholder="02/24"
                              className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                            />
                          </div>
                          <div className="relative border-gray-200 border border-solid rounded-[8px] py-[11px] px-[16px] w-[49%]">
                            <label className="text-[12px] text-gray-400 m-0 leading-0">
                              CVV
                            </label>
                            <Input
                              type="email"
                              placeholder="745"
                              className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="terms"
                              icon={<CheckboxTickIcon />}
                              className="rounded-[4px] border-gray-200"
                            />
                            <label
                              htmlFor="terms"
                              className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Save this payment method
                            </label>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="paypal">
                      <div className="relative border-gray-200 border-solid border-b pb-10 pt-4">
                        <h3 className="text-[16px] font-satoshi_regular text-gray-900 mb-4">
                          Log in to use PayPal.
                        </h3>
                        <a
                          href="#"
                          className="inline-flex items-center bg-[rgba(39,144,195,0.20)] border-gray-100 border-solid rounded-[32px] px-4 py-2 border-[2px] hover:opacity-70"
                        >
                          <i className="pr-[8px]">
                            <Image
                              src={assets.cartIconOption2}
                              alt="icon"
                              width={22}
                              height={16}
                            />
                          </i>
                          PayPal
                        </a>
                      </div>
                    </TabsContent>
                    <TabsContent value="bank">
                      <div className="relative border-gray-200 border-solid border-b pb-10 pt-4">
                        <div className="flex flex-wrap mx-[-8px]">
                          <div className="w-1/2 px-2">
                            <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
                              <label className="text-[12px] text-gray-400 m-0 leading-0">
                                Account owner
                              </label>
                              <Input
                                type="text"
                                placeholder="Julia Brown"
                                className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                              />
                            </div>
                          </div>
                          <div className="w-1/2 px-2">
                            <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
                              <label className="text-[12px] text-gray-400 m-0 leading-0">
                                Account type
                              </label>
                              <Select>
                                <SelectTrigger className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900">
                                  <SelectValue placeholder="Company" />
                                </SelectTrigger>
                                <SelectContent className="p-0">
                                  <SelectGroup>
                                    <SelectLabel>Company</SelectLabel>
                                    <SelectItem value="1">Company 1</SelectItem>
                                    <SelectItem value="2">Company 2</SelectItem>
                                    <SelectItem value="3">Company 3</SelectItem>
                                    <SelectItem value="4">Company 4</SelectItem>
                                    <SelectItem value="5">Company 5</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="w-1/2 px-2">
                            <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
                              <label className="text-[12px] text-gray-400 m-0 leading-0">
                                Country
                              </label>
                              <Input
                                type="text"
                                placeholder="United States"
                                className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                              />
                            </div>
                          </div>
                          <div className="w-1/2 px-2">
                            <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
                              <label className="text-[12px] text-gray-400 m-0 leading-0">
                                Currency
                              </label>
                              <Select>
                                <SelectTrigger className="border-0 p-0 h-auto w-full text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900">
                                  <SelectValue placeholder="USD" />
                                </SelectTrigger>
                                <SelectContent className="p-0">
                                  <SelectGroup>
                                    <SelectLabel>USD</SelectLabel>
                                    <SelectItem value="1">ERU</SelectItem>
                                    <SelectItem value="2">DNR</SelectItem>
                                    <SelectItem value="3">RPS</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="w-1/2 px-2">
                            <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
                              <label className="text-[12px] text-gray-400 m-0 leading-0">
                                Account number
                              </label>
                              <Input
                                type="text"
                                placeholder="9876543210"
                                className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                              />
                            </div>
                          </div>
                          <div className="w-1/2 px-2">
                            <div className="relative w-full border-gray-200 border border-solid rounded-[8px] py-[8px] px-[16px] mb-4">
                              <label className="text-[12px] text-gray-400 m-0 leading-0">
                                Routing number
                              </label>
                              <Input
                                type="text"
                                placeholder="223452098716"
                                className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="terms"
                              className="rounded-[4px] border-gray-200"
                            />
                            <label
                              htmlFor="terms"
                              className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Save this payment method
                            </label>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="relative border-gray-200 border-solid border-b py-10 lg:py-6">
                  <h3 className="text-[24px] lg:text-[20px] text-gray-900 mb-4">
                    Contact to vendor
                  </h3>
                  <p className="text-[16px] text-gray-900">
                    If you&#39;d like to share something important with your
                    specialist, feel free to leave them a message here.
                  </p>
                  <div className="relative flex flex-wrap items-center mb-6 mt-8">
                    <figure className="text-0 leading-none mr-4 relative">
                      <Image
                        className="w-[64px] h-[64px] rounded-full"
                        src={assets.imgaboutDetails1}
                        alt=""
                        width={64}
                        height={64}
                      />{" "}
                      <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                    </figure>
                    <div className="relative">
                      <h5 className="text-[24px] lg:text-[20px] text-[#1F1F1F] font-satoshi_medium mb-1 sm:text-[16px] sm:mb-0">
                        Julia B.
                      </h5>
                      <p className="text-[16px] text-gray-500 font-satoshi_regular sm:text-[12px]">
                        Joined 2017
                      </p>
                    </div>
                  </div>
                  <div className="relative py-[11px] px-[16px] my-4 border-gray-200 border border-solid rounded-[8px]">
                    <Textarea
                      className="border-0 resize-none p-0 text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400"
                      placeholder="Start typing message..."
                    />
                  </div>
                </div>
                <div className="relative border-gray-200 border-solid border-b py-8">
                  <h3 className="text-[24px] text-gray-900 mb-4 lg:text-[20px]">
                    Cancellation policy
                  </h3>
                  <p className="text-[16px] text-gray-900">
                    This reservation is non-refundable.
                  </p>
                </div>
                <div className="relative border-gray-200 border-solid border-b py-8">
                  <h3 className="text-[24px] text-gray-900 mb-4 lg:text-[20px]">
                    Things to know
                  </h3>
                  <p className="text-[16px] text-gray-900">
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="relative py-8">
                  <div className="relative flex py-4 px-6 bg-[#F7F4F1] rounded-[12px] mb-10">
                    <i className="inline-flex leading-0 md:pt-1">
                      <NewcalenderIconBox />
                    </i>
                    <div className="relative pl-4 md:-pl-2">
                      <h4 className="text-[18px] mb-2 leading-[1.4]">
                        Your reservation won’t be confirmed until the host
                        accepts your request <br />
                        (within 24 hours).
                      </h4>
                      <p>You won&#39;t be charged until then.</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-gray-900 mb-8">
                    By selecting the button below, I acknowledge that I have
                    read and agree to{" "}
                    <a
                      href="#"
                      className="inline-flex underline hover:no-underline"
                    >
                      Casacall&#39;s Host&#39;s House Rules
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="inline-flex underline hover:no-underline"
                    >
                      {" "}
                      Refund Policy
                    </a>
                    . I also agree to pay the total amount displayed if my
                    booking request is accepted by the host.
                  </p>
                  <Button
                    type="button"
                    className="w-full rounded-full hover:bg-secondary"
                  >
                    Request to reserve
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-[35%] lg:order-1 lg:w-full lg:mb-6">
              <div className="sticky top-[40px]">
                <div className="flex relative items-center">
                  <figure className="m-0 text-0">
                    <Image
                      className="w-[90px] h-[60px] object-cover rounded-[8px]"
                      src={assets.listingimg}
                      alt="image"
                      width={90}
                      height={60}
                    />
                  </figure>
                  <div className="relative pl-[16px]">
                    <h4>Deep Tissue Massage</h4>
                    <p>30-Minute</p>
                  </div>
                </div>
                <div className="relative py-8 lg:hidden">
                  <h3 className="text-[24px] text-gray-900 mb-4 lg:text-[20px]">
                    Payment info
                  </h3>
                  <ul>
                    <li className="flex justify-between pb-4">
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        Deep Tissue Massage, 30-Minute
                      </p>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        $50.00
                      </p>
                    </li>
                    {/* <li className="flex justify-between pb-4">
                      <div className="relative flex items-center">
                        <Checkbox
                          icon={<CheckboxTickIcon />}
                          id="1"
                          className="rounded-[4px] border-gray-200"
                        />
                        <label
                          htmlFor="1"
                          className="text-gray-900 pl-[8px] text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Wrap it up as a gift!
                        </label>
                      </div>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        $10.00
                      </p>
                    </li> */}
                    <li className="flex justify-between pb-4">
                      <p className="text-[16px] text-gray-900 font-satoshi_regular flex items-center">
                        Service fee
                        <i className="inline-flex items-center leading-none text-0 pl-2">
                          <NotificTagServiceIcon />
                        </i>
                      </p>
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        $26.00
                      </p>
                    </li>
                    <li className="flex justify-between py-5 border-t border-newborder border-solid">
                      <p className="text-[20px] text-gray-900 font-satoshi_medium flex items-center">
                        Total
                      </p>
                      <p className="text-[20px] text-gray-900 font-satoshi_medium">
                        $293.00
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
