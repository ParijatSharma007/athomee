"use client";
import Container from "@/components/Container";
import MessagePopUpModal from "@/components/MessagePopUpModal/MessagePopUpModal";
import StarRating from "@/components/Ratting/Ratting";
import { Button } from "@/components/ui/button";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import HeartIconSave from "@/json/icons/HeartIconSave";
import HeartIconSave2 from "@/json/icons/HeartIconSave2";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const sliderListMain1 = [
  {
    imgPath: `${assets.sliderImgMainBig1}`,
  },
  {
    imgPath: `${assets.sliderImgMainBig1}`,
  },
  {
    imgPath: `${assets.sliderImgMainBig1}`,
  },
  {
    imgPath: `${assets.sliderImgMainBig1}`,
  },
  {
    imgPath: `${assets.sliderImgMainBig1}`,
  },
];
const sliderListMain2 = [
  {
    imgPath: `${assets.sliderImgSmall1}`,
  },
  {
    imgPath: `${assets.sliderImgSmall2}`,
  },
  {
    imgPath: `${assets.sliderImgSmall3}`,
  },
  {
    imgPath: `${assets.sliderImgSmall4}`,
  },
  {
    imgPath: `${assets.sliderImgSmall5}`,
  },
  {
    imgPath: `${assets.sliderImgSmall6}`,
  },
  {
    imgPath: `${assets.sliderImgSmall7}`,
  },
  {
    imgPath: `${assets.sliderImgSmall8}`,
  },
  {
    imgPath: `${assets.sliderImgSmall1}`,
  },
];

export default function ViewPhotos() {
  const [saveBtnUpdate, setSaveBtnUpdate] = useState(false);
  const handelSaveBtn = () => {
    setSaveBtnUpdate(!saveBtnUpdate);
  };
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  const slider = useRef<Slider | null>(null);
  const handelSliderIndex = (i: any) => {
    setSliderNumber(i);
  };
  const [sliderNumber, setSliderNumber] = useState(1);

  return (
    <div className="relative overflow-hidden py-10 md:py-6 border-t border-newborder border-solid">
      <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid pb-6">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </a>
        <p className="absolute left-[50%] translate-x-[-50%] top-[2px] text-[16px] text-gray-900 font-satoshi_medium">
          {sliderNumber + 1}/{sliderListMain1.length + 1}
        </p>
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
              <h1 className="inline-flex items-center transition-all text-4xl text-primary font-satoshi_medium mb-4 lg:text-[24px] lg:mb-2">
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

        <div className="relative slider_photoGallery pt-8 md:mx-[-16px] md:py-10">
          <div className="relative slider_photoGalleryOne">
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              slidesToShow={1}
              arrows={true}
              dots={true}
              className="md:overflow-auto"
            >
              {sliderListMain1.map((item, index) => (
                <div className="relative" key={index}>
                  <figure className="w-full leading-none m-0 sm:min-h-[320px]">
                    <Image
                      src={item.imgPath}
                      alt="clientimg"
                      width={1280}
                      height={660}
                      className="w-full h-full object-cover rounded-[12px] md:rounded-[0] sm:min-h-[320px]"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
          <div className="relative slider_photoGalleryTwo md:hidden">
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={7}
              arrows={true}
              infinite={true}
              centerMode={true}
              touchMove={true}
              afterChange={handelSliderIndex}
            >
              {sliderListMain2.map((item, index) => (
                <div className="relative p-1.5" key={index}>
                  <figure className="w-full leading-none m-0">
                    <Image
                      src={item.imgPath}
                      alt="clientimg"
                      width={176}
                      height={135}
                      className="w-full h-full object-cover rounded-[12px]"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}
