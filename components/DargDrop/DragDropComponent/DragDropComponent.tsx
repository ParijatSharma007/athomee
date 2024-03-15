"use client";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import CameraUploadIconmain from "@/json/icons/CameraUploadIconmain";
import ImageGridCloseIocn from "@/json/icons/ImageGridCloseIocn";
import ResetImgBtnIcon from "@/json/icons/ResetImgBtnIcon";
import { imgListItems } from "@/json/mock/imageList.mock";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

interface dragDropProps {
  list: any[];
  children?: React.ReactNode;
  maxItem?: number;
}

export default function DragDropComponent({
  list,
  children,
  maxItem,
}: dragDropProps) {
  const [items, setItems] = React.useState<any>(imgListItems);

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number,
    targetId: string
  ) {
    const _temp: number[] = [];
    let _temp2: any[] = [];

    items.forEach((item: any, index: number) => _temp.push(index));

    const nextState = swap(_temp, sourceIndex, targetIndex);

    const firstItemIndex = nextState.indexOf(0);
    if (firstItemIndex !== -1) {
      nextState.splice(firstItemIndex, 1);
      nextState.unshift(0);
    }

    nextState.forEach((item) => {
      _temp2.push(items[item]);
    });

    _temp2 = _temp2.filter((item) => item !== undefined);

    setItems(_temp2);
  }

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

  console.log(fileTypes, "fileTypes");

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GridContextProvider onChange={onChange as any}>
      <GridDropZone
        id="items"
        boxesPerRow={screenWidth > 768 ? 3 : 1}
        rowHeight={200}
        style={{ height: screenWidth > 768 ? "600px" : "1800px" }}
      >
        {items?.map((item: any, index: number) => {
          return item?.type === "upload" ? (
            <GridItem
              draggable={false}
              className="px-2 py-2 md:!w-full"
              onDrag={(e) => e.preventDefault()}
              onDragEnd={(e) => e.preventDefault()}
            >
              <div className="relative w-full h-full md:w-full">
                <div className="relative  rounded-[8px] border-dashed border border-gray-200 bg-white flex items-center justify-center flex-col h-full">
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
            </GridItem>
          ) : (
            <GridItem key={item?.id} className="px-2 py-2 md:!w-full">
              <div className="relative w-full h-full md:w-full">
                <figure className="relative m-0 leading-none w-full h-full">
                  <Image
                    className="w-full rounded-[8px] lg:max-h-full object-cover"
                    src={item.imagePath}
                    alt=""
                    width={235}
                    height={208}
                    style={{ height: "100%" }}
                  />
                  <div className=" absolute left-0 right-0 top-0 bottom-0 z-[99] opacity-0" />
                </figure>

                <div className="absolute right-[12px] top-[12px]">
                  <ul className="flex item-center justify-center">
                    <li className="pr-2">
                      <Button
                        type="button"
                        className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white p-0 min-h-0 min-w-0 hover:opacity-75"
                      >
                        <ResetImgBtnIcon />
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white p-0 min-h-0 min-w-0  hover:opacity-75"
                      >
                        <ImageGridCloseIocn />
                      </Button>
                    </li>
                  </ul>
                </div>
                {item.coverTxt === true && (
                  <Button
                    type="button"
                    className="absolute left-[12px] top-[12px] w-[54px] h-[28px] text-gray-900 text-[12px] rounded-[12px] flex items-center justify-center bg-white p-0 min-h-0 min-w-0  hover:opacity-75"
                  >
                    Cover
                  </Button>
                )}
              </div>
            </GridItem>
          );
        })}
      </GridDropZone>
    </GridContextProvider>
  );
}
