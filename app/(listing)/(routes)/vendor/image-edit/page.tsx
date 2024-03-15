import CommonTipsListCart from "@/components/CommonTipsListCart/CommonTipsListCart";
import Container from "@/components/Container";
import DargDrop from "@/components/DargDrop/DargDrop";
import TipListingListThreeModal from "@/components/TipListingListThreeModal/TipListingListThreeModal";
import { Button } from "@/components/ui/button";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import ChoseCoverImgIcon from "@/json/icons/ChoseCoverImgIcon";
import PreviewTriIcon from "@/json/icons/PreviewTriIcon";
import ThreeDot from "@/json/icons/ThreeDot";
import UploadImgTotal from "@/json/icons/UploadImgTotal";

export default function ImageEdit() {
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
            <div className="relative flex justify-between item-center mb-10 md:mb-6">
              <h1 className="text-[36px] text-gray-900 lg:text-[30px] md:text-[24px]">
                How to handle the bookings?
              </h1>
            </div>
            <div className="relative max-w-[736px] lg:max-w-full mr-auto">
              <div className="relative mb-10 md:mb-2">
                <h2 className="text-[18px] text-gray-900 mb-1">Add photos</h2>
                <p className="text-[14px] text-gray-500">
                  Upload your best photos to give customers a sneak peek of what
                  you offer.
                </p>
                <div className="relative mt-[20px] flex items-center justify-between mb-6">
                  <p className="flex items-center text-[14px] text-gray-500">
                    <i className="mr-2">
                      <UploadImgTotal />
                    </i>
                    8 photos
                  </p>
                  <p className="flex items-center text-[14px] text-gray-900 font-satoshi_medium">
                    <i className="mr-2">
                      <ChoseCoverImgIcon />
                    </i>
                    Choose cover
                  </p>
                </div>
                <DargDrop />
              </div>
              <div className="relative">
                <Button
                  type="button"
                  className="relative rounded-[32px] px-6 md:w-full hover:bg-secondary"
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
