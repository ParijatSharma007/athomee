"use client";

import assets from "@/json/assets";

import UpArrowTiltIcon from "@/json/icons/UpArrowTiltIcon";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Container from "../Container";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";

export default function Banner() {
  return (
    <div className="relative z-5">
      <figure className="absolute left-0 top-0 w-full h-full -z-10">
        <Image
          src={assets?.banner_image}
          alt="banner_image"
          width={3000}
          height={1500}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="banner_wrap pt-[130px] pb-[190px] xl:pt-[150px] xl:pb-[150px]">
        <Container>
          <div className="flex flex-wrap -m-4 items-center">
            <div className="w-1/2 p-4 xl:w-full xl:text-center xl:order-2 sm:w-[90%] sm:mx-auto">
              <h1 className="mb-4 max-w-xl xl:max-w-none md:text-[55px] sm:text-[36px]">
                Online platform <span className="text-secondary">at-home</span>{" "}
                services
              </h1>
              <p className="max-w-md text-xl xl:max-w-none sm:text-[16px]">
                Try the convenient search for services that can be performed
                right at home.
              </p>
            </div>

            <div className="w-1/2 p-4 xl:w-full xl:order-1">
              <div className="relative w-[380px] h-[380px] md:h-[415px] border border-solid border-white ml-[150px] 2xl:ml-[100px] xl:mx-auto sm:w-[220px] sm:h-[220px] ">
                <div className="absolute left-[-150px] 2xl:left-[-70px] xl:left-[-120px] top-[26px] md:top-[70px] md:left-[-100px] sm:left-[-50px] sm:top-[30px] xs:left-[-40px]">
                  <Tilt
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
                    <div
                      className="bg-card_yellow rounded-[11.365px]  inline-flex px-4 py-4 pb-0 h-[270px] w-[234px]
                  
                  after:content-[''] after:absolute after:left-[-20px] after:bottom-[-20px] after:bg-[url('/images/split1.svg')] after:bg-no-repeat after:bg-center after:bg-contain after:w-[30px] after:h-[33px]
                
                before:content-[''] before:absolute before:right-[-50px] before:top-[70px] before:bg-[url('/images/twinkle1.svg')] before:bg-no-repeat before:bg-center before:bg-contain before:w-[20px] before:h-[20px] md:before:w-[16px] md:before:top-[auto] md:before:bottom-[-70px] md:before:left-[70px] sm:w-[120px] xs:w-[100px] xs:wh-[120px] sm:h-[139px]  sm:after:w-[20px] sm:before:left-[29px] sm:before:bottom-[-58px] 
                "
                    >
                      <figure className="leading-[0] text-[0]">
                        <Image
                          src={assets?.banner_fig1}
                          alt="banner figure"
                          width={240}
                          height={270}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <Button
                        variant="outline"
                        className="absolute top-[65px] left-[-55px] bg-card_yellow rounded-[9px] hover:bg-inherit hover:text-primary hover:scale-105 transition-all h-[45px]
                    xl:left-[50px] xl:top-[-14px] md:left-[27px] sm:text-[10px]  sm:px-[8px] sm:h-[25px] sm:rounded-[4px] sm:left-[15px] sm:right-[auto]
                    "
                      >
                        Pet sitters
                        <span className="inline-flex items-center justify-center p-[9px] ml-[4px] sm:p-[4px] sm:w-[14px]">
                          <UpArrowTiltIcon />
                        </span>{" "}
                      </Button>
                    </div>
                  </Tilt>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-72px] z-10 xl:bottom-auto xl:-top-4 md:top-[-30px]">
                  <Tilt
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
                    <div
                      className="bg-card_mint rounded-[11.365px]  inline-flex px-4 py-4 pb-0 h-[270px] w-[234px]
                
                after:content-[''] after:absolute after:left-[-50px] after:bottom-[-6px] xl:after:bottom-[auto] xl:after:top-[-16px]  after:bg-[url('/images/twinkle2.svg')] after:bg-no-repeat after:bg-center after:bg-contain after:w-[30px] after:h-[33px]
                
                before:content-[''] before:absolute before:right-[-24px] before:bottom-[-24px] xl:before:bottom-[auto] xl:before:top-[-35px] before:bg-[url('/images/split2.svg')] before:bg-no-repeat before:bg-center before:bg-contain before:w-[40px] before:h-[40px]
                
                 xl:w-[240px] xl:h-[240px] md:before:rotate-[-130deg] md:before:top-[-29px]  md:after:hidden
                sm:w-[120px] sm:h-[139px] sm:before:w-[30px] sm:before:right-[-18px] xs:w-[100px] xs:h-[120px]
                "
                    >
                      <figure className="leading-[0] text-[0]">
                        <Image
                          src={assets?.banner_fig2}
                          alt="banner figure"
                          width={240}
                          height={270}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <Button
                        variant="outline"
                        className="absolute bottom-[40px] right-[-55px] bg-card_mint rounded-[9px] hover:bg-inherit hover:text-primary hover:scale-105 transition-all h-[45px] 
                    xl:-bottom-2 xl:right-[-25px] sm:text-[10px]  sm:px-[8px] sm:h-[25px] sm:rounded-[4px] sm:left-[15px] sm:right-[auto]
                    "
                      >
                        Garden Designers
                        <span className="inline-flex items-center justify-center p-[9px] ml-[4px] sm:p-[4px] sm:w-[14px]">
                          <UpArrowTiltIcon />
                        </span>{" "}
                      </Button>
                    </div>
                  </Tilt>
                </div>
                <div className="absolute right-[-130px] 2xl:right-[-70px] xl:right-[-120px] top-[45px] md:top-[89px] md:right-[-100px] sm:top-[30px]  sm:right-[-50px] xs:right-[-40px]">
                  <Tilt
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
                    <div
                      className="bg-card_blue rounded-[11.365px]  inline-flex px-4 py-4 pb-0 h-[270px] w-[234px] 
                
                after:content-[''] after:absolute after:left-[95px] after:bottom-[-95px] after:bg-[url('/images/twinkle3.svg')] after:bg-no-repeat after:bg-center after:bg-contain after:w-[30px] after:h-[33px]
                
                before:content-[''] before:absolute before:right-[-30px] before:top-[-30px] before:bg-[url('/images/split3.svg')] before:bg-no-repeat before:bg-center before:bg-contain before:w-[40px] before:h-[40px] md:before:top-[auto] md:before:bottom-[-30px] md:before:right-[auto]
                md:before:left-[-30px] md:before:rotate-[200deg] md:after:w-[14px] md:after:left-[132px] md:after:bottom-[auto] md:after:top-[-68px]
                sm:w-[120px] sm:h-[139px]  sm:before:w-[30px] sm:after:top-[-38px] sm:after:left-[66px] xs:w-[100px] xs:h-[120px] 
                "
                    >
                      <figure className="leading-[0] text-[0]">
                        <Image
                          src={assets?.banner_fig3}
                          alt="banner figure"
                          width={240}
                          height={270}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <Button
                        variant="outline"
                        className="absolute top-[40px] left-[-65px] bg-card_blue rounded-[9px] hover:bg-inherit hover:text-primary hover:scale-105 transition-all h-[45px]
                    xl:top-auto xl:bottom-[-14px]  xl:left-[65px] sm:text-[10px]  sm:px-[8px] sm:h-[25px] sm:rounded-[4px] sm:left-[15px] sm:right-[auto]
                    xs:left-[0]
                    "
                      >
                        Housekeepers
                        <span className="inline-flex items-center justify-center p-[9px] ml-[4px] sm:p-[4px] sm:w-[14px]">
                          <UpArrowTiltIcon />
                        </span>{" "}
                      </Button>
                    </div>
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
