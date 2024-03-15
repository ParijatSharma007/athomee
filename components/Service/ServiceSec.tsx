import assets from "@/json/assets";
import StarIcon from "@/json/icons/StarIcon";
import Image from "next/image";
import Container from "../Container";

export default function ServiceSec() {
  return (
    <div className="bg-[url('/images/exp.png')] py-36 xl:py-20 sm:py-12  bg-cover bg-no-repeat bg-center lg:py-20">
      <Container>
        <div className="relative">
          <div className="text-center mb-24 lg:mb-10">
            <h2 className="mb-4 lg:text-[30px] sm:text-[24px]">
              Exceptional service experience
            </h2>
            <p className="text-xl mx-auto   max-w-lg sm:text-[16  px]">
              Try the convenient search for services that can be performed right
              at home.
            </p>
          </div>
          <div className="text-center relative w-[800px] mx-auto pt-3 lg:w-full">
            <Image
              alt=""
              src={assets.exp_image2}
              width={800}
              height={545}
              className="inline-block lg:mb-6 lg:w-full sm:hidden"
            />
            <div className="flex flex-wrap static">
              <div className="w-96 bg-[#E4ECF4] p-6 rounded-2xl shadow-[0_12px_20px_-10px_rgba(0,0,0,0.2)]  absolute top-[-35px] left-[-140px] xl:left-[-90px] lg:static lg:w-full lg:mb-4 lg:order-1">
                <StarIcon />
                <p className="text-lg text-left mt-3">
                  {" "}
                  All specialists undergo a thorough background and license
                  check to ensure that clients receive first-class service.
                </p>
              </div>
              <div className="w-96 bg-[#F5EFFD] p-6 rounded-2xl shadow-[0_12px_20px_-10px_rgba(0,0,0,0.2)] absolute top-[-70px] right-[-175px] xl:right-[-90px] lg:static lg:w-full  lg:order-4 ">
                <StarIcon />
                <p className="text-lg text-left mt-3">
                  {" "}
                  Thanks to our flexible payment system, we do not transfer
                  money in advance and wait for your confirmation.
                </p>
              </div>
              <div
                className="w-96 bg-[var(--card-mint)] p-6 rounded-2xl shadow-[0_12px_20px_-10px_rgba(0,0,0,0.2)] absolute bottom-[70px] left-[-140px]
            xl:left-[-90px] lg:static lg:w-full lg:mb-4 lg:order-2"
              >
                <StarIcon />
                <p className="text-lg text-left mt-3">
                  You can specify your location and choose the best option.
                </p>
              </div>
              <div
                className="w-96 bg-[#F9F1D4] p-6 rounded-2xl shadow-[0_12px_20px_-10px_rgba(0,0,0,0.2)] absolute bottom-[-17px] right-[-175px]  
            xl:right-[-90px] lg:static lg:w-full lg:order-3 lg:mb-4"
              >
                <StarIcon />
                <p className="text-lg text-left mt-3">
                  {" "}
                  You will always be sure of the quality of the service thanks
                  to the reviews and extended evaluations of specialists.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={assets.dot1}
            alt=""
            width={17}
            height={20}
            className="absolute top-[55%] left-[200px] lg:hidden"
          />
          <Image
            src={assets.dot2}
            alt=""
            width={17}
            height={20}
            className="absolute top-[7%] right-[250px] lg:right-[60px] sm:hidden"
          />
          <Image
            src={assets.dot3}
            alt=""
            width={17}
            height={20}
            className="absolute bottom-[-10%] right-[8%] lg:hidden "
          />
        </div>
      </Container>
    </div>
  );
}
