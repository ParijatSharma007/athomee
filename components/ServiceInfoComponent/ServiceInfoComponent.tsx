"use client";

import Image from "next/image";
import RefundModal from "../RefundModal/RefundModal";
import { Badge } from "../ui/badge";

import { useEffect, useState } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import ReserveServiceDeclineModal from "../ReserveServiceDeclineModal/ReserveServiceDeclineModal";
import ReserveServiceModal from "../ReserveServiceModal/ReserveServiceModal";

export interface serviceInfoProps {
  serviceInfoImage: string;
  serviceinfotext: string;
  clientImg: string;
  userName: string;
  rattingScore: string;
  numberofPerson: string;
  title: string;
  buttonText?: string;
  children: React.ReactNode;
  showImgIcon?: boolean;
  icon?: string | any;
  declineBtn?: boolean;
}

function ServiceInfoComponent({
  serviceInfoImage,
  serviceinfotext,
  clientImg,
  userName,
  rattingScore,
  numberofPerson,
  title,
  buttonText,
  children,
  showImgIcon,
  declineBtn,
  icon,
}: serviceInfoProps) {
  const [btnTxt, setBtnTxt] = useState("");

  useEffect(() => {
    if (buttonText !== undefined) {
      setBtnTxt(buttonText);
    }
  }, [buttonText]);

  console.log(btnTxt, "btnTxt");

  return (
    <div className="p-6 xl:p-2">
      <h4>{title}</h4>
      <div className="py-6 flex items-center">
        <figure className="w-[96px] h-[96px] relative z-[-1]">
          <Image
            src={serviceInfoImage}
            alt="serviceInfoImage"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-xl"
          />
          {showImgIcon && (
            <div className="flex items-center justify-center rounded-lg w-[32px] h-[32px] absolute left-2 top-2  ">
              <i>
                <Image src={icon} alt="icon" width={32} height={32} />
              </i>
            </div>
          )}
        </figure>
        <div className="pl-3 w-[calc(100%-96px)]">
          <ul>
            <li className="mb-2">
              <p className="text-base font-medium text-gray-900">
                {serviceinfotext}
              </p>
            </li>
            <li className="mb-2">
              <div className="flex items-center ">
                <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                  <Image
                    src={clientImg}
                    alt="clientimg"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover "
                  />
                  <span className="bg-green-500 border-2 border-white p-1 absolute -bottom-1 -right-1 z-10 rounded-full "></span>
                </i>
                <h4 className="text-sm font-medium text-gray-900">
                  {userName}
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Badge className="bg-gray-100 text-gray-900    py-[6px] px-[10px] font-satoshi_regular text-xs rounded-full">
                  {rattingScore}
                </Badge>
                <p className="text-xs text-gray-400 font-normal font-satoshi_regular ml-[6px]">
                  {numberofPerson}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="pb-6  ">
        <h3 className=" text-gray-900 font-medium font-satoshi_regular text-base">
          Service types:
        </h3>
        <div className="pt-4">{children}</div>
      </div>
      <div>
        {btnTxt === "Make refund" ? (
          <RefundModal buttonText={btnTxt} />
        ) : btnTxt === "Confirm reservation" ? (
          <ConfirmModal buttonText={btnTxt} />
        ) : btnTxt === "Reserve service" ? (
          <ReserveServiceModal buttonText={btnTxt} />
        ) : null}

        {declineBtn && <ReserveServiceDeclineModal />}
      </div>
    </div>
  );
}

export default ServiceInfoComponent;
