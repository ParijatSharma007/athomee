import CommonProgress from "@/components/CommonProgress/CommonProgress";
import SignSlideRight from "@/components/SignSlideRight/SignSlideRight";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import assets from "@/json/assets";
import Image from "next/image";
import Link from "next/link";

function verificationVendor() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 pr-20 pl-20 pt-8 xl:px-12 lg:px-4 md:w-full md:px-0 md:pt-4">
        <div className="h-[100%]">
          <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200">
            <Link href="/" className="inline-block">
              <Image src={assets.logo} width={124} height={24} alt="" />
            </Link>
          </div>
          <div className="py-9 flex items-center min-h-[calc(100vh-80px)]  md:px-4 md:py-6">
            <div className="w-[100%] max-h-[calc(100vh-130px)] custom-scrollbar overflow-y-auto overflow-x-hidden">
              <div>
                <h2 className="text-3xl	mb-2 lg:text-[30px] md:text-[24px]">
                  Verification
                </h2>
                <p>
                  To activate the account, please upload a photo of your ID and
                  Chamber of Commerce. The photo must be clear and legible.
                </p>
              </div>

              <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 mt-8 md:px-4 md:py-4 hidden">
                <i className="self-center mb-[2px] mr-[17px] md:mr-[12px]">
                  <Image
                    src={assets?.account_tooltip}
                    width={17}
                    height={17}
                    alt=""
                  />
                </i>
                You cannot send more than two files.
              </div>

              <div className="mt-8 mb-6">
                <Dialog>
                  <DialogTrigger className="w-[100%]">
                    <div className="min-h-[240px] md:min-h-[160px] border border-dashed border-[--textgray] p-6 flex flex-col rounded-[12px] items-center justify-center cursor-pointer">
                      <i className="mb-3">
                        <Image
                          src={assets?.dropdrag}
                          width={33}
                          height={30}
                          alt=""
                        />
                      </i>
                      <span className="text-base text-[var(--primary)] font-satoshi_medium mb-1">
                        Drag & drop or{" "}
                        <span className="text-[var(--secondary)]">
                          click to upload
                        </span>
                      </span>
                      <p className="text-sm text-[var(--textgray)]">
                        Maximum file size 10 MB.
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="h-auto min-w-[inherit] max-w-[345px] border_rad_ten no_cross_modal">
                    <ul className="ul_inner">
                      <li className="border-b border-[--greyb0b0b2]">
                        <div className="relative">
                          <Input
                            type="file"
                            className="absolute w-[100%] h-[100%] opacity-0"
                          />
                          <div className="flex py-3 px-6 pl-4">
                            <div className="w-[calc(100%-27px)] pr-2 text-[17px] tracking-[-0.5px] text-black">
                              Photo Library
                            </div>
                            <div className="w-[27px]">
                              <Image
                                src={assets?.library_img1}
                                width={27}
                                height={22}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="relative">
                          <Input
                            type="file"
                            className="absolute w-[100%] h-[100%] opacity-0"
                          />
                          <div className="flex py-3 px-6 pl-4">
                            <div className="w-[calc(100%-27px)] pr-2 text-[17px] tracking-[-0.5px] text-black">
                              Camera
                            </div>
                            <div className="w-[27px]">
                              <Image
                                src={assets?.library_img2}
                                width={27}
                                height={22}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DialogContent>
                </Dialog>
              </div>

              <div>
                <div className="bg-[var(--border-primary)] border border-solid border-[var(--greyF4F4F5)] rounded-[12px] p-4 relative pr-[60px] mb-6">
                  <Button className="bg-[transparent] p-0 h-auto absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Image
                      src={assets?.cross_icons}
                      width={16}
                      height={12}
                      alt=""
                    />
                  </Button>
                  <div className="flex flex-wrap">
                    <i className="w-[48px] h-[48px] border border-solid border-[var(--cmn-grey)] rounded-[12px] bg-[var(--secondary-foreground)] flex items-center justify-center">
                      <Image
                        src={assets?.pin_upload}
                        width={18}
                        height={19}
                        alt=""
                      />
                    </i>
                    <div className="w-[calc(100%-48px)] pl-4 text-[var(--primary)]">
                      <h5>Image from my smaprtphone.jpg</h5>
                      <span className="text-sm text-[var(--textgray)]">
                        6 MB
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <CommonProgress
                      valueProgress={33}
                      customClass="black_white_progress"
                    />
                  </div>
                </div>

                <div className="bg-[var(--border-primary)] border border-solid border-[var(--greyF4F4F5)] rounded-[12px] p-4 relative pr-[60px]">
                  <Button className="bg-[transparent] p-0 h-auto absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Image
                      src={assets?.cross_icons}
                      width={16}
                      height={12}
                      alt=""
                    />
                  </Button>
                  <div className="flex flex-wrap">
                    <i className="w-[48px] h-[48px] border border-solid border-[var(--cmn-grey)] rounded-[12px] bg-[var(--secondary-foreground)] flex items-center justify-center">
                      <Image
                        src={assets?.pin_upload}
                        width={18}
                        height={19}
                        alt=""
                      />
                    </i>
                    <div className="w-[calc(100%-48px)] pl-4 text-[var(--primary)]">
                      <h5>Image from my smaprtphone.jpg</h5>
                      <span className="text-sm text-[var(--textgray)]">
                        6 MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                className="w-[100%] text-base py-3 h-auto mt-8"
                variant="default"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 md:hidden">
        <SignSlideRight bannerImage={assets.banner_image_sign}>
          <h2 className="text-4xl leading-[1.4] text-[var(--black-light)] xl:text-[32px] lg:text-[24px]">
            <span className="text-[var(--secondary)] font-satoshi_bold">
              Casacall
            </span>{" "}
            combines a multitude of professionals near you with <br />{" "}
            <span className="relative pb-3">
              instant booking{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>{" "}
            and{" "}
            <span className="relative pb-3">
              flexible settings.{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>
          </h2>
        </SignSlideRight>
      </div>
    </div>
  );
}

export default verificationVendor;
