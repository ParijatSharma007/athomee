"use client";

import assets from "@/json/assets";
import CameraUploadIconmain from "@/json/icons/CameraUploadIconmain";
import ChoseCoverImgIcon from "@/json/icons/ChoseCoverImgIcon";
import UploadImgTotal from "@/json/icons/UploadImgTotal";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function Photos() {
  const imgListItems = [
    {
      imapgePath: `${assets.imgListUploadMain1}`,
      coverTxt: true,
    },
    {
      imapgePath: `${assets.imgListUploadMain2}`,
      coverTxt: false,
    },
    {
      imapgePath: `${assets.imgListUploadMain3}`,
      coverTxt: false,
    },
    {
      imapgePath: `${assets.imgListUploadMain4}`,
      coverTxt: false,
    },
    {
      imapgePath: `${assets.imgListUploadMain5}`,
      coverTxt: false,
    },
    {
      imapgePath: `${assets.imgListUploadMain6}`,
      coverTxt: false,
    },
    {
      imapgePath: `${assets.imgListUploadMain7}`,
      coverTxt: false,
    },
    {
      imapgePath: `${assets.imgListUploadMain8}`,
      coverTxt: false,
    },
  ];

  const fileTypes = ["JPEG", "PNG", "GIF", "JPG", "WEBP"];

  const [dragfile, setFileDrag] = useState<any>([]);
  const handleChange = (file: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setFileDrag([
        ...dragfile,
        {
          imageName: file[0]?.name,
          imageSrc: e.target.result,
          id: `${dragfile?.length}`,
          order: dragfile?.length,
        },
      ]);
    };

    reader.readAsDataURL(file[0]);
  };

  return (
    <div className="relative ">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative max-w-[736px] mr-auto">
            <div className="relative mb-10 md:mb-0">
              <h2 className="text-[18px] text-gray-900 mb-1">Add photos</h2>
              <p className="text-[14px] text-gray-500">
                Upload your best photos to give customers a sneak peek of what
                you offer.
              </p>
              <div className="relative mt-[20px] flex items-center justify-between mb-6 md:mb-4">
                <p className="flex items-center text-[14px] text-gray-500">
                  <i className="mr-2">
                    <UploadImgTotal />
                  </i>
                  0 photos
                </p>
                <p className="flex items-center text-[14px] text-gray-900 font-satoshi_medium opacity-20">
                  <i className="mr-2">
                    <ChoseCoverImgIcon />
                  </i>
                  Choose cover
                </p>
              </div>
              <div className="relative flex flex-wrap mx-[-8px] md:mx-0">
                <div className="relative w-1/3 lg:w-1/2 md:w-full px-[8px] md:px-0 mb-[16px]">
                  <div className="relative rounded-[8px] border-dashed border border-gray-200 bg-white flex items-center justify-center flex-col h-[208px] min-h[208px]">
                    <i className="flex w-[44px] h-[44px] items-center justify-center rounded-full bg-gray-50">
                      <CameraUploadIconmain />
                    </i>
                    {dragfile.length ? (
                      <p className="text-[14px] text-gray-400 font-satoshi_regular text-center leading-[1.2]">
                        {dragfile[dragfile?.length - 1]?.imageName}
                      </p>
                    ) : (
                      <p className="text-[14px] text-gray-400 font-satoshi_regular text-center leading-[1.2]">
                        Upload or Drag <br className="lg:hidden" />
                        picture here
                      </p>
                    )}
                    <div className="fileuploader">
                      <FileUploader
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
