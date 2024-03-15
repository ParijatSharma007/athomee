/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Container from "@/components/Container";
import MessagePopUpIconBtnModal from "@/components/MessagePopUpIconBtnModal/MessagePopUpIconBtnModal";
import MessagePopUpModal from "@/components/MessagePopUpModal/MessagePopUpModal";
import StarRating from "@/components/Ratting/Ratting";
import { Button } from "@/components/ui/button";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import HeartIconSave from "@/json/icons/HeartIconSave";
import HeartIconSave2 from "@/json/icons/HeartIconSave2";
import { imageList } from "@/json/mock/MasonryImages.mock";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [saveBtnUpdate, setSaveBtnUpdate] = useState(false);
  const handelSaveBtn = () => {
    setSaveBtnUpdate(!saveBtnUpdate);
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const calculateWidth = (index: number) => {
    const colSpanMap: Record<number, string> = {
      0: "col-span-3",
      1: "col-span-1",
      2: "col-span-1",
      3: "col-span-2",
      4: "col-span-2",
      5: "col-span-1",
      6: "col-span-1",
      7: "col-span-2",
      8: "col-span-2",
      9: "col-span-3",
    };

    const remainder = index % 9;
    return colSpanMap.hasOwnProperty(remainder)
      ? colSpanMap[remainder]
      : "col-span-2";
  };
  const calculateWidth2 = (index: number) => {
    const colSpanMap2: Record<number, string> = {
      0: "col-span-6",
      1: "col-span-3",
      2: "col-span-3",
      3: "col-span-6",
      4: "col-span-3",
      5: "col-span-3",
      6: "col-span-6",
      7: "col-span-3",
      8: "col-span-3",
      9: "col-span-6",
    };

    const remainder = index % 9;
    return colSpanMap2.hasOwnProperty(remainder)
      ? colSpanMap2[remainder]
      : "col-span-2";
  };
  return (
    <div className="relative py-10 lg:py-6 border-t border-newborder border-solid">
      <div className="relative hidden md:flex justify-between px-4">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
          Deep Tissue Massage
        </a>
        <ul className="flex items-start">
          <li className="mr-2">
            <Button
              type="button"
              variant={"outline"}
              className="bg-transparent outline-hover transition-all text-base text-primary border-newborder border-solid border px-1 py-1 w-[36px] h-[36px] rounded-full flex item-center items-center justify-center "
              onClick={handelSaveBtn}
            >
              <i className="mr-0">
                {saveBtnUpdate === true ? (
                  <HeartIconSave2 />
                ) : (
                  <HeartIconSave />
                )}
              </i>
            </Button>
          </li>
          <li>
            <MessagePopUpIconBtnModal />
          </li>
        </ul>
      </div>
      <Container>
        <div className="relative">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
          <div className="relative flex items-center justify-between mt-8 md:hidden">
            <div className="relative">
              <h1 className="inline-flex items-center transition-all text-4xl text-primary font-satoshi_medium mb-4">
                Deep Tissue Massage
              </h1>
              <div className="flex items-center">
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
                  <h4 className="text-sm ">Julia Brown</h4>
                </div>
                <ul className="flex items-center ml-6">
                  <li className="mr-2">
                    <p className="text-xs">4.6</p>
                  </li>
                  <li className="mr-2">
                    <StarRating totalStars={5} />
                  </li>
                  <li>
                    <p className="text-xs text-textgray">(56)</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <ul className="flex items-start">
                <li className="mr-4">
                  <Button
                    type="button"
                    className="bg-transparent transition-all text-base text-primary border-newborder border-solid border px-4 py-2 flex item-center h-auto hover:bg-transparent rounded-full"
                    onClick={handelSaveBtn}
                  >
                    <i className="mr-2">
                      {saveBtnUpdate === true ? (
                        <HeartIconSave2 />
                      ) : (
                        <HeartIconSave />
                      )}
                    </i>
                    Save
                  </Button>
                </li>
                <li>
                  <MessagePopUpModal />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 pt-8 md:hidden">
          {imageList.map((item, index) => (
            <div
              className={`h-[300px] ${calculateWidth(index)} ${index} p-1`}
              key={index}
            >
              <img
                src={item}
                alt=""
                className="h-full w-full rounded-[8px] object-cover"
              />
            </div>
          ))}
        </div>

        <div className="md:grid grid-cols-6 pt-8 md:pt-6 hidden">
          {imageList.map((item, index) => (
            <div
              className={`max-h-[200px] ${calculateWidth2(index)} ${index} p-1`}
              key={index}
            >
              <img
                src={item}
                alt=""
                className="h-full w-full rounded-[8px] object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
