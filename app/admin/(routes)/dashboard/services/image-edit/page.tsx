import Container from "@/components/Container";
import DargDrop from "@/components/DargDrop/DargDrop";
import { Button } from "@/components/ui/button";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import ChoseCoverImgIcon from "@/json/icons/ChoseCoverImgIcon";
import UploadImgTotal from "@/json/icons/UploadImgTotal";

export default function ImageEdit() {
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
  return (
    <div className="relative py-10 md:py-5">
      <Container>
        <div className="relative mb-6 md:mb-3">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
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
              <h1 className="text-[36px] text-gray-900 md:text-[20px]">
                How to handle the bookings?
              </h1>
            </div>
            <div className="relative max-w-[736px] mr-auto lg:max-w-[none]">
              <div className="relative mb-10 md:mb-5">
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
                  className="relative rounded-[32px] px-6 hover:bg-secondary sm:w-full"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
