"use client";
import ClientInfoComponent from "@/components/ClientInfoComponent/ClientInfoComponent";
import MessageInput from "@/components/MessageInput/MessageInput";
import { MessageThumb } from "@/components/MessageThumb/MessageThumb";
import SerachInputComponent from "@/components/SerachInputComponent/SerachInputComponent";
import { Button } from "@/components/ui/button";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import MsgTick from "@/json/icons/MsgTick";
import { SeachBlack } from "@/json/icons/SeachBlack";
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
              <MessageThumb
                textContent="Ok"
                showTimePanel
                clickFun={handelChangeMsg}
              />
              <MessageThumb
                textContent="Thank you for your answer!"
                showTimePanel
                clickFun={handelChangeMsg}
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
            <div className="w-[calc(100%-23%)] 2xl:w-[calc(100%-35%)] xl:w-[calc(100%-40%)]  lg:w-full">
              <div className="px-6 pt-6 h-[calc(100vh-314px)] lg:h-[calc(100vh-230px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
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
              </div>
              <div className="p-6 lg:p-4 lg:border-t lg:border-solid lg:border-gray-200">
                <MessageInput />
              </div>
            </div>
            <div className="w-[23%] border-l-gray-200 border-l h-[calc(100vh-200px)] md:h-[calc(100vh-170px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin 2xl:w-[35%] xl:w-[40%] lg:w-full lg:hidden">
              <div className="lg:hidden">
                <ClientInfoComponent
                  clientImg={assets.clientImage}
                  numberofPerson="(56)"
                  rattingScore="4.8/5"
                  serviceInfoImage={assets.serviceInfoImg}
                  serviceinfotext="Julia B."
                  title="Client"
                  userName="Adriana W."
                  buttonText="Reserve service"
                >
                  <p className="text-[#70707B] text-[14px]">
                    I am a field sales manager with over eight years of
                    experience in increasing market share in assigned
                    territories. I have a proven track record of successfully
                    selling products and services to companies of all sizes.
                  </p>
                </ClientInfoComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
