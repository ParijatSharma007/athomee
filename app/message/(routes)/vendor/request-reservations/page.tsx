/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import MessageInput from "@/components/MessageInput/MessageInput";
import { MessageThumb } from "@/components/MessageThumb/MessageThumb";
import ReserveServiceDeclineModal from "@/components/ReserveServiceDeclineModal/ReserveServiceDeclineModal";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import ServiceInfoComponent from "@/components/ServiceInfoComponent/ServiceInfoComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import ChervonIconTwo from "@/json/icons/ChervonIconTwo";
import ChervonUp from "@/json/icons/ChervonUp";
import ExpIcon from "@/json/icons/ExpIcon";
import MsgTick from "@/json/icons/MsgTick";
import { SeachBlack } from "@/json/icons/SeachBlack";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const select2 = [
  {
    itemBold: "San",
    itemPara: "Francisco, CA, USA",
  },
  {
    itemBold: "San1",
    itemPara: "Francisco, CA, USA 1",
  },
  {
    itemBold: "San2",
    itemPara: "Francisco, CA, USA 2",
  },
  {
    itemBold: "San3",
    itemPara: "Francisco, CA, USA 3",
  },
  {
    itemBold: "San4",
    itemPara: "Francisco, CA, USA 4",
  },
  {
    itemBold: "San5",
    itemPara: "Francisco, CA, USA 5",
  },
  {
    itemBold: "San 6",
    itemPara: "Francisco, CA, USA 6",
  },
];

export default function Index() {
  const [targetAccBtn, setTargetAccBtn] = useState("sdfdsf");
  const handleAccTrigger = (e: any, triggerValue: string) => {
    if (e.target.dataset.state === "closed") {
      setTargetAccBtn(triggerValue);
    } else {
      setTargetAccBtn("");
    }
  };
  const [msgListOpen, setMsgListOpen] = useState(false);
  const handelChangeMsg = () => {
    setMsgListOpen(true);
  };
  const handelChangeMsgClose = () => {
    setMsgListOpen(false);
  };
  return (
    <div>
      <div className="flex">
        <div
          className={`{ w-[18.8%] 2xl:w-[25%] xl:w-[30%] border-gray-200 border-r lg:border-r-0 lg:w-full } ${
            msgListOpen === true ? "lg:hidden" : "lg:block"
          }`}
        >
          <div className="">
            <SerachInputComponent
              placeholderText="Search message"
              className={
                "bg-transparent px-4 py-8 md:py-6 border-gray-100 border-b rounded-none placeholder:text-gray-900"
              }
              classNameForInput="pl-10"
              classNameForSearchIcon="absolute p-0"
              searchIcon={<SeachBlack />}
            />
            <div className="h-[calc(100vh-200px)] md:h-[calc(100vh-170px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <MessageThumb
                textContent="Lorem ipsum dolor sit amet somethi..."
                showUnread
                userActive
                showTimePanel
                clickFun={handelChangeMsg}
              />
              <MessageThumb
                textContent="Sure, Amelia! Keep me updated..."
                showUnread
                showTimePanel
                clickFun={handelChangeMsg}
              />
              <MessageThumb textContent="Ok" showTimePanel />
              <MessageThumb
                textContent="Thank you for your answer!"
                showTimePanel
              />
              <MessageThumb
                textContent="Lorem ipsum dolor sit amet somethi..."
                showTimePanel
                clickFun={handelChangeMsg}
              />
              <div className="hidden lg:block">
                <MessageThumb
                  textContent="Lorem ipsum dolor sit amet somethi..."
                  showTimePanel
                  clickFun={handelChangeMsg}
                />
                <MessageThumb
                  textContent="Lorem ipsum dolor sit amet somethi..."
                  showTimePanel
                  clickFun={handelChangeMsg}
                />
                <MessageThumb
                  textContent="Lorem ipsum dolor sit amet somethi..."
                  showTimePanel
                  clickFun={handelChangeMsg}
                />
                <MessageThumb
                  textContent="Lorem ipsum dolor sit amet somethi..."
                  showTimePanel
                  clickFun={handelChangeMsg}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`{ w-[calc(100%-18.8%)] 2xl:w-[calc(100%-25%)] xl:w-[calc(100%-30%)] lg:w-full } ${
            msgListOpen === true ? "lg:block" : "lg:hidden"
          }`}
        >
          <div className="border-gray-200 border-b lg:hidden">
            <MessageThumb textContent="Last seen: 54 min ago" showUnread />
          </div>
          <div className="border-gray-200 border-b px-4 py-4 hidden lg:flex items-center">
            <Button
              type="button"
              onClick={handelChangeMsgClose}
              className="bg-transparent p-0 min-w-auto min-h-auto"
            >
              <ArrowBackIcon />
            </Button>
            <div className="pl-4">
              <h3 className="font-satoshi_regular text-base text-gray-900">
                Adriana W.
              </h3>
              <p className="m-0 pl-[4px] text-xs text-gray-400">
                Last seen: 54 min ago
              </p>
            </div>
          </div>
          <div className="flex lg:flex-col-reverse lg:h-[calc(100vh- 140px)]">
            <div className="w-[calc(100%-23%)] 2xl:w-[calc(100%-35%)] xl:w-[calc(100%-40%)]  lg:w-full ">
              <div className="px-6 pt-6 h-[calc(100vh-314px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
                <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                  <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                    Amelia G.
                    <span className="pl-1 font-normal text-gray-400 text-sm">
                      (You)
                    </span>
                  </h3>
                  <p className="text-base	text-gray-900">
                    Hello! I offer a variety of massage services designed to
                    promote relaxation and well-being. We have Swedish massage,
                    which uses gentle strokes to ease tension, and deep tissue
                    massage, which targets deeper muscle layers to alleviate
                    chronic pain.
                  </p>
                  <div className="flex justify-end items-center	pt-1">
                    <p className="text-xs	text-gray-400">5:50 PM</p>
                    <i className="pl-[5px]">
                      <MsgTick />
                    </i>
                  </div>
                </div>

                <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                  <p className="text-center px-4 bg-white inline-flex mx-auto">
                    3 August 2023
                  </p>
                </div>

                <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                  <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                    Amelia G.
                    <span className="pl-1 font-normal text-gray-400 text-sm">
                      (You)
                    </span>
                  </h3>
                  <p className="text-base	text-gray-900">
                    Our massage sessions are available in different durations:
                    30 minutes, 60 minutes, and 90 minutes. The 30-minute
                    session is more focused on specific areas, while the
                    60-minute session allows for a more balanced approach,
                    covering multiple areas. The 90-minute session offers a
                    thorough, full-body massage with extra time to target
                    specific concerns.
                  </p>
                  <div className="flex justify-end items-center	pt-1">
                    <p className="text-xs	text-gray-400">5:50 PM</p>
                    <i className="pl-[5px]">
                      <MsgTick />
                    </i>
                  </div>
                </div>

                <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                  <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                    Amelia G.
                    <span className="pl-1 font-normal text-gray-400 text-sm">
                      (You)
                    </span>
                  </h3>
                  <p className="text-base	text-gray-900">
                    Hello! I offer a variety of massage services designed to
                    promote relaxation and well-being. We have Swedish massage,
                    which uses gentle strokes to ease tension, and deep tissue
                    massage, which targets deeper muscle layers to alleviate
                    chronic pain.
                  </p>
                  <div className="flex justify-end items-center	pt-1">
                    <p className="text-xs	text-gray-400">5:50 PM</p>
                    <i className="pl-[5px]">
                      <MsgTick />
                    </i>
                  </div>
                </div>

                <div className="mb-4 relative text-center before:absolute z-[1] before:content-[''] before:left-0 before:top-[50%] before:translate-y-1/2 before:h-[1px] before:bg-newborder before:w-[100%] before:-z-[1]">
                  <p className="text-center px-4 bg-white inline-flex mx-auto">
                    3 August 2023
                  </p>
                </div>

                <div className="flex items-end mb-4">
                  <figure className="rounded-full overflow-hidden w-[32px] h-[32px] min-w-[32px] flex mr-4">
                    <Image
                      alt=""
                      width={32}
                      height={32}
                      src={assets.msg_user}
                    />
                  </figure>
                  <div className="bg-gray-50 px-3 py-2 rounded-md max-w-[440px]">
                    <h3 className="text-[#246AEA] text-sm font-medium	mb-[5px] ">
                      Amelia G.
                      <span className="pl-1 font-normal text-gray-400 text-sm">
                        (You)
                      </span>
                    </h3>
                    <p className="text-base	text-gray-900">
                      Hello! I offer a variety of massage services designed to
                      promote relaxation and well-being. We have Swedish
                      massage, which uses gentle strokes to ease tension, and
                      deep tissue massage, which targets deeper muscle layers to
                      alleviate chronic pain.
                    </p>
                    <div className="flex justify-end items-center	pt-1">
                      <p className="text-xs	text-gray-400">5:50 PM</p>
                    </div>
                  </div>
                </div>

                <div className="px-3 py-2 rounded-md bg-[#F5EFFD] max-w-[440px] ml-auto mb-4">
                  <h3 className="text-secondary text-sm font-medium	mb-[5px]">
                    Amelia G.
                    <span className="pl-1 font-normal text-gray-400 text-sm">
                      (You)
                    </span>
                  </h3>
                  <p className="text-base	text-gray-900">
                    Our massage sessions are available in different durations:
                    30 minutes, 60 minutes, and 90 minutes. The 30-minute
                    session is more focused on specific areas, while the
                    60-minute session allows for a more balanced approach,
                    covering multiple areas. The 90-minute session offers a
                    thorough, full-body massage with extra time to target
                    specific concerns.
                  </p>
                  <div className="flex justify-end items-center	pt-1">
                    <p className="text-xs	text-gray-400">5:50 PM</p>
                    <i className="pl-[5px]">
                      <MsgTick />
                    </i>
                  </div>
                </div>
                <div className="px-3 py-3 rounded-md bg-[#F4F4F5]  ml-auto mb-4 flex">
                  <ExpIcon />
                  <p className="text-[14px] text-[#70707B]">
                    Your request for a Deep Tissue Massage on 12 Oct 2023 has
                    been sent. Show listing
                  </p>
                </div>
              </div>
              <div className="p-6 lg:p-4 lg:border-t lg:border-solid lg:border-gray-200">
                <MessageInput />
              </div>
            </div>
            <div className="w-[23%] border-l-gray-200 border-l h-[calc(100vh-200px)] overflow-y-auto scrollbar lg:border-l-0 lg:h-auto scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin 2xl:w-[35%] xl:w-[40%] lg:w-full">
              <div className="lg:hidden">
                <ServiceInfoComponent
                  clientImg={assets.clientImage}
                  numberofPerson="(56)"
                  rattingScore="4.8/5"
                  serviceInfoImage={assets.serviceInfoImg}
                  serviceinfotext="Deep Tissue Massage"
                  title="Requested reservation"
                  userName="Adriana W."
                  showImgIcon
                  buttonText="Confirm reservation"
                  icon={assets.clock2}
                  declineBtn
                >
                  <ul>
                    <li className="mb-4">
                      <Select>
                        <SelectTrigger
                          icon={
                            <ChevronDown
                              height={20}
                              width={20}
                              color="#A0A0AB"
                            />
                          }
                          className="w-full border-0 h-auto text-base font-satoshi_medium text-gray-900 bg-[#F7F4F1] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border"
                        >
                          <SelectValue placeholder="30-Minute $50 " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {select2?.map((item, index) => (
                              <SelectItem value={`${index + 1}`} key={index}>
                                <div className=" py-0.5">
                                  <p className="text-gray-400 text-base">
                                    <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                      {item?.itemBold}
                                    </span>
                                    {item?.itemPara}
                                  </p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </li>
                    <p className="mb-4">Reservation info:</p>
                    <p className="text-[#A0A0AB] text-[14px] mb-2 ">
                      Date & time:{" "}
                      <span className="text-[#131316]">
                        20 May 2023, 10:00 AM
                      </span>
                    </p>
                    <p className="text-[#A0A0AB] text-[14px] ">
                      Address:{" "}
                      <span className="text-[#131316]">
                        25 Draper Street, San Francisco, CA, USA
                      </span>
                    </p>
                  </ul>
                </ServiceInfoComponent>
              </div>
              <div className="hidden lg:block">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className=" border-0">
                    <AccordionTrigger className="pr-6 pl-4 pb-0 !decoration-none !no-underline">
                      <div className="relative">
                        <div className="py-2 flex items-center">
                          <figure className="w-[48px] h-[48px] relative z-[-1]">
                            <Image
                              src={assets.serviceInfoImg}
                              alt="serviceInfoImage"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover rounded-[6px]"
                            />
                          </figure>
                          <div className="pl-4">
                            <p className="text-base font-medium text-gray-900 !decoinheritration-none">
                              Deep Tissue Massage
                            </p>
                          </div>
                        </div>
                      </div>
                      {targetAccBtn === "legal" ? (
                        <i>
                          <ChervonUp />
                        </i>
                      ) : (
                        <i>
                          <ChervonIconTwo />
                        </i>
                      )}
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div>
                        <ul className="flex items-center mb-2">
                          <li className="pr-2">
                            <p className="text-base font-medium text-gray-900">
                              Client:
                            </p>
                          </li>
                          <li className="">
                            <div className="flex items-center ">
                              <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                                <Image
                                  src={assets.clientImage}
                                  alt="clientimg"
                                  width={24}
                                  height={24}
                                  className="w-full h-full object-cover "
                                />
                                <span className="bg-green-500 border-2 border-white p-1 absolute -bottom-1 -right-1 z-10 rounded-full "></span>
                              </i>
                              <h4 className="text-sm font-medium text-gray-900">
                                Adriana W.
                              </h4>
                            </div>
                          </li>
                        </ul>
                        <ul className="flex items-center mb-2">
                          <li className="pr-2">
                            <p className="text-base font-medium text-gray-900">
                              Total:
                            </p>
                          </li>
                          <li className="">
                            <div className="flex items-center ">
                              <h4 className="text-sm font-medium text-gray-900">
                                $51.30
                              </h4>
                            </div>
                          </li>
                        </ul>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">
                          Service type:
                        </h4>
                        <ul>
                          <li className="mb-4">
                            <Select>
                              <SelectTrigger
                                icon={
                                  <ChevronDown
                                    height={20}
                                    width={20}
                                    color="#A0A0AB"
                                  />
                                }
                                className="w-full border-0 h-auto text-base font-satoshi_medium text-gray-900 bg-[#F7F4F1] rounded-xl min-h-[72px] p-4 hover:border-gray-400 hover:border"
                              >
                                <SelectValue placeholder="30-Minute $50 " />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {select2?.map((item, index) => (
                                    <SelectItem
                                      value={`${index + 1}`}
                                      key={index}
                                    >
                                      <div className=" py-0.5">
                                        <p className="text-gray-400 text-base">
                                          <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
                                            {item?.itemBold}
                                          </span>
                                          {item?.itemPara}
                                        </p>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </li>
                          <p className="mb-4 text-sm font-medium text-gray-900">
                            Reservation info:
                          </p>
                          <p className="text-[#A0A0AB] text-[14px] mb-2 ">
                            Date & time:{" "}
                            <span className="text-[#131316]">
                              20 May 2023, 10:00 AM
                            </span>
                          </p>
                          <p className="text-[#A0A0AB] text-[14px] ">
                            Address:{" "}
                            <span className="text-[#131316]">
                              25 Draper Street, San Francisco, CA, USA
                            </span>
                          </p>
                        </ul>
                        <ul>
                          <li className="my-2">
                            <ConfirmModal buttonText={"Confirm reservation"} />
                          </li>
                          <li>
                            <ReserveServiceDeclineModal />
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
