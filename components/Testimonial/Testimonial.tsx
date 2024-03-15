"use client";

import assets from "@/json/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "../Container";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-24 xl:py-20">
      <Container>
        <Slider {...settings} className="test_slider">
          <div>
            <p className="text-4xl text-center tracking-[-0.72px] mb-12 max-w-[1280px] mx-auto md:mb-8 xl:text-[24px] sm:text-[20px] sm:leading-normal">
              “Whenever I have back pain, Casacall helps me find a good massage
              therapist right in my city in a matter of minutes. It makes my
              workdays much more enjoyable”
            </p>
            <div className="flex items-center justify-center mb-12">
              <span className="inline-block mr-4">
                <Image alt="" src={assets.user} width={64} height={64} />
              </span>
              <div>
                <h5 className="text-xl font-satoshi_medium ">Olivia Jackson</h5>
                <p className="text-base text-[#70707B]">Software engineer</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-4xl text-center tracking-[-0.72px] mb-12 md:mb-8 xl:text-[24px] sm:text-[20px] sm:leading-normal">
              “Whenever I have back pain, Casacall helps me find a good massage
              therapist right in my city in a matter of minutes. It makes my
              workdays much more enjoyable”
            </p>
            <div className="flex items-center justify-center mb-12">
              <span className="inline-block mr-4">
                <Image alt="" src={assets.user} width={64} height={64} />
              </span>
              <div>
                <h5 className="text-xl font-satoshi_medium ">Olivia Jackson</h5>
                <p className="text-base text-[#70707B]">Software engineer</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-4xl text-center tracking-[-0.72px] mb-12 md:mb-8 xl:text-[24px] sm:text-[20px] sm:leading-normal">
              “Whenever I have back pain, Casacall helps me find a good massage
              therapist right in my city in a matter of minutes. It makes my
              workdays much more enjoyable”
            </p>
            <div className="flex items-center justify-center mb-12">
              <span className="inline-block mr-4">
                <Image alt="" src={assets.user} width={64} height={64} />
              </span>
              <div>
                <h5 className="text-xl font-satoshi_medium ">Olivia Jackson</h5>
                <p className="text-base text-[#70707B]">Software engineer</p>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}
