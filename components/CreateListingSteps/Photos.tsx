import assets from "@/json/assets";
import ChoseCoverImgIcon from "@/json/icons/ChoseCoverImgIcon";
import UploadImgTotal from "@/json/icons/UploadImgTotal";
import DargDrop from "../DargDrop/DargDrop";

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

  return (
    <div className="relative ">
      <div className="flex flex-wrap">
        <div className="w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
}
