"use client";
import assets from "@/json/assets";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import DotIconBtnShow from "@/json/icons/DotIconBtnShow";
import ThreeDot from "@/json/icons/ThreeDot";
import CircularProgressBar from "@/json/icons/CircularProgressBar";
import TickIcon from "@/json/icons/TickIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PreviewTriIcon from "@/json/icons/PreviewTriIcon";
import MakeInactiveIcon from "@/json/icons/MakeInactiveIcon";
import DelectPopUpIcon from "@/json/icons/DelectPopUpIcon";
import EditPenPopUpIcons from "@/json/icons/EditPenPopUpIcons";
import DelectVendorItemsListModal from "../DelectVendorItemsListModal/DelectVendorItemsListModal";
interface vendorcardProps {
  draft?: boolean;
  listed?: boolean;
  inactive?: boolean;
  draftCompleted?: boolean;
}
const VendorListingCard = ({
  draft,
  listed,
  inactive,
  draftCompleted,
}: vendorcardProps) => {
  return (
    <div className="py-5 flex justify-between lg:flex-wrap relative md:border-b md:border-sloid md:border-gray-200 md:pb-3 md:pt-5">
      <div className="flex items-center lg:w-full md:flex-wrap">
        <Image
          src={assets.listingDetailsImg1}
          alt=""
          width={200}
          height={126}
          className="object-cover rounded-[12px] w-[200px] h-[126px] mr-6 md:w-full md:m-0 md:h-[130px]"
        />

        <div className="md:w-full md:mt-2">
          <div className="flex">
            <p className="text-xl font-satoshi_medium mr-4 mb-2 md:text-[18px]">
              Deep Tissue Massage
            </p>
            <div className="md:absolute md:top-[30px] md:left-[12px]">
              {listed ? (
                <Badge
                  variant="default"
                  className="bg-[#EBFFEB] text-[#04D100] border-[#C3FFC2] px-[16px] py-[4px]"
                >
                  Published
                </Badge>
              ) : inactive ? (
                <Badge
                  variant="outline"
                  className="text-gray-500 px-[16px] py-[4px]"
                >
                  Inactive
                </Badge>
              ) : (
                <Badge
                  variant="default"
                  className="bg-[#FFF8EB] text-[#F59F00] border-[#FFEAC2] px-[16px] py-[4px]"
                >
                  Draft
                </Badge>
              )}
            </div>
          </div>
          <p className="mb-2 md:text-[12px]">
            <span className="text-textgray">Address :</span> 25 Draper Street,
            San Francisco, CA, USA
          </p>

          <p className="text-xl font-satoshi_medium md:hidden">from $50</p>
          <div className="hidden justify-between md:flex items-center">
            <p className="text-xl font-satoshi_medium md:text-[20px] sm:text-[18px]">from $50</p>
            <div className="flex flex-col justify-between items-end py-2 lg:flex-row-reverse lg:items-center">
              <div className="flex">
                {listed && (
                  <Button variant="default" className="mr-4 md:mr-2">
                    Edit
                  </Button>
                )}
                {draft && (
                  <Button variant="default" className="mr-4 md:mr-2">
                    Edit
                  </Button>
                )}
                {inactive && (
                  <Button variant="default" className="mr-4 md:mr-2">
                    Republish
                  </Button>
                )}
                {draftCompleted && (
                  <Button variant="default" className="mr-4 md:mr-2">
                    Publish
                  </Button>
                )}
                {draft && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                      >
                        <ThreeDot />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white" align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400 hover:bg-gray-200">
                          <Button
                            variant="ghost"
                            className="p-1 h-auto hover:opacity-70"
                          >
                            {" "}
                            <i className="pr-2">
                              <PreviewTriIcon />
                            </i>
                            Preview
                          </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400 hover:bg-gray-200">
                          <Button
                            variant="ghost"
                            className="p-1 h-auto hover:opacity-70"
                          >
                            {" "}
                            <i className="pr-2">
                              <EditPenPopUpIcons />
                            </i>
                            Edit
                          </Button>
                        </DropdownMenuItem>
                        <DelectVendorItemsListModal />
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
                {draftCompleted && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                      >
                        <ThreeDot />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56 bg-white px-2"
                      align="end"
                    >
                      <DropdownMenuGroup>
                        <DelectVendorItemsListModal />
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
                {listed && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                      >
                        <ThreeDot />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white" align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400">
                          <Button
                            variant="ghost"
                            className="p-1 h-auto hover:opacity-70"
                          >
                            {" "}
                            <i className="pr-2">
                              <PreviewTriIcon />
                            </i>
                            Preview
                          </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400">
                          <Button
                            variant="ghost"
                            className="p-1 h-auto hover:opacity-70"
                          >
                            {" "}
                            <i className="pr-2">
                              <MakeInactiveIcon />
                            </i>
                            Make it inactive
                          </Button>
                        </DropdownMenuItem>
                        <DelectVendorItemsListModal />
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
                {inactive && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                      >
                        <ThreeDot />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white" align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400">
                          <Button
                            variant="ghost"
                            className="p-1 h-auto hover:opacity-70"
                          >
                            {" "}
                            <i className="pr-2">
                              <EditPenPopUpIcons />
                            </i>
                            Edit
                          </Button>
                        </DropdownMenuItem>
                        <DelectVendorItemsListModal />
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              {!listed && !inactive && (
                <p className="flex items-center mr-2 md:text-[12px]">
                  {draftCompleted ? (
                    <>
                      <i className="mr-2">
                        <TickIcon IconColor="#04D100" />
                      </i>
                      <span className="text-textGreen">
                        {" "}
                        Ready
                      </span>
                    </>
                  ) : (
                    <>
                      <i className="mr-2">
                        <CircularProgressBar />
                      </i>
                      65% done
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end py-2 lg:w-full lg:flex-row-reverse lg:items-center md:hidden">
        <div className="flex">
          {listed && (
            <Button variant="default" className="mr-4 md:mr-2">
              Edit
            </Button>
          )}
          {draft && (
            <Button variant="default" className="mr-4 md:mr-2">
              Edit
            </Button>
          )}
          {inactive && (
            <Button variant="default" className="mr-4 md:mr-2">
              Republish
            </Button>
          )}
          {draftCompleted && (
            <Button variant="default" className="mr-4 md:mr-2">
              Publish
            </Button>
          )}
          {draft && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                >
                  <ThreeDot />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400 hover:bg-gray-200">
                    <Button
                      variant="ghost"
                      className="p-1 h-auto hover:opacity-70"
                    >
                      {" "}
                      <i className="pr-2">
                        <PreviewTriIcon />
                      </i>
                      Preview
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400 hover:bg-gray-200">
                    <Button
                      variant="ghost"
                      className="p-1 h-auto hover:opacity-70"
                    >
                      {" "}
                      <i className="pr-2">
                        <EditPenPopUpIcons />
                      </i>
                      Edit
                    </Button>
                  </DropdownMenuItem>
                  <DelectVendorItemsListModal />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {draftCompleted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                >
                  <ThreeDot />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white px-2" align="end">
                <DropdownMenuGroup>
                  <DelectVendorItemsListModal />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {listed && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                >
                  <ThreeDot />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400">
                    <Button
                      variant="ghost"
                      className="p-1 h-auto hover:opacity-70"
                    >
                      {" "}
                      <i className="pr-2">
                        <PreviewTriIcon />
                      </i>
                      Preview
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400">
                    <Button
                      variant="ghost"
                      className="p-1 h-auto hover:opacity-70"
                    >
                      {" "}
                      <i className="pr-2">
                        <MakeInactiveIcon />
                      </i>
                      Make it inactive
                    </Button>
                  </DropdownMenuItem>
                  <DelectVendorItemsListModal />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {inactive && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black"
                >
                  <ThreeDot />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="pb-2 text-[14px] font-satoshi_medium text-gray-900 hover:text-gray-400">
                    <Button
                      variant="ghost"
                      className="p-1 h-auto hover:opacity-70"
                    >
                      {" "}
                      <i className="pr-2">
                        <EditPenPopUpIcons />
                      </i>
                      Edit
                    </Button>
                  </DropdownMenuItem>
                  <DelectVendorItemsListModal />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        {!listed && !inactive && (
          <p className="flex items-center ">
            {draftCompleted ? (
              <>
                <i className="mr-2">
                  <TickIcon IconColor="#04D100" />
                </i>
                <span className="text-textGreen">
                  {" "}
                  Listing is ready to publish!
                </span>
              </>
            ) : (
              <>
                <i className="mr-2">
                  <CircularProgressBar />
                </i>
                Listing is 65% done. Complete to publish!
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default VendorListingCard;
