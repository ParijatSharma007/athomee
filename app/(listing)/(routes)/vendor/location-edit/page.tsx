"use client";
import CommonTipsListCart from "@/components/CommonTipsListCart/CommonTipsListCart";
import Container from "@/components/Container";
import Location from "@/components/CreateListingSteps/Location";
import TipListingListThreeModal from "@/components/TipListingListThreeModal/TipListingListThreeModal";
import { Button } from "@/components/ui/button";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import PreviewTriIcon from "@/json/icons/PreviewTriIcon";
import ThreeDot from "@/json/icons/ThreeDot";
export default function LocationEdit() {
  return (
    <div className="relative py-10 md:py-6 lg:overflow-hidden">
      <div className="relative hidden md:flex justify-between border-b border-solid border-gray-200 pb-4 px-4">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
          Service editing
        </a>
        <div className="relative flex items-center">
          <TipListingListThreeModal />
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-tranparent hover:border-black hover:text-black border-[#E4E4E7] ml-2 mr-2 p-2 w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <i className="">
              <PreviewTriIcon />
            </i>
          </Button>
          <Button
            variant="outline"
            className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <ThreeDot />
          </Button>
        </div>
      </div>
      <Container>
        <div className="relative mb-6">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[80%] pr-[32px] lg:w-full lg:pr-0">
            <div className="relative flex justify-between item-center mb-10 md:mb-4">
              <h1 className="text-[36px] text-gray-900 lg:text-[30px] md:text-[24px]">
                Location
              </h1>
            </div>
            <div className="relative max-w-[736px] mr-auto">
              <div className="relative mb-14 md:mb-6">
                <Location />
              </div>
              <div className="relative">
                <Button
                  type="button"
                  className="relative rounded-[32px] px-6 hover:bg-secondary md:w-full"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[20%] lg:hidden">
            <div className="sticky top-8">
              <div className="relative mb-8">
                <CommonTipsListCart
                  title="Tip 1"
                  subText="Create a title that's both descriptive and attention-grabbing. A well-crafted title can pique interest."
                  bgColor="#FFF9D7"
                />
              </div>
              <div className="relative mb-8">
                <CommonTipsListCart
                  title="Tip 2"
                  subText="Write a comprehensive description that highlights what makes your service unique. Be clear and concise."
                  bgColor="#F7F4F1"
                />
              </div>
              <div className="relative">
                <CommonTipsListCart
                  title="Tip 3"
                  subText="If your service is location-dependent, provide clear details about the area you cover. Accuracy in location information enhances trust and improves the customer experience."
                  bgColor="#E8FBDA"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
