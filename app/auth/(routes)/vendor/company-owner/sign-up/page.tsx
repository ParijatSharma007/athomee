"use client";
import CheckboxSub from "@/components/CheckboxSub/CheckboxSub";
import CommonInput from "@/components/CommonInput/CommonInput";
import CommonSelect from "@/components/CommonSelect/CommonSelect";
import SignSlideRight from "@/components/SignSlideRight/SignSlideRight";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const selectApi = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
];

function SignUpVendor() {
  const [incrSign, updateincrSign] = React.useState(0);

  const incrementSubmit = () => {
    updateincrSign(incrSign + 1);
  };
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 pr-20 pl-20 pt-8 xl:px-12 lg:px-4 md:w-full md:px-0 md:pt-4">
        <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200">
          <Link href="/" className="inline-block">
            <Image src={assets.logo} width={124} height={24} alt="" />
          </Link>
        </div>
        <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid py-4">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
          </a>
          <p className="absolute left-[50%] translate-x-[-50%] top-[14px] text-[16px] text-gray-900 font-satoshi_medium">
            Choose account type
          </p>
        </div>
        <div className="mt-[72px] xl:mt-[50px] md:px-4 md:mt-6">
          <Link href="/" className="font-satoshi_medium md:hidden">
            <i className="inline-block mr-[18px] mb-[2px] align-middle">
              <Image src={assets.back_btns} width={16} height={11} alt="" />
            </i>
            Back
          </Link>

          <div className="h-[calc(100vh-223px)] md:h-[calc(100vh-170px)] overflow-y-auto overflow-x-hidden mt-[40px] md:mt-0">
            {incrSign === 0 ? (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl mb-2 xl:text-[26px] lg:text-[22px]">
                    Join as a client or service provider?
                  </h2>
                  <p>Please select your account type.</p>
                </div>
                <div className="client_card_sec">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex flex-wrap mx-[-18px] md:mx-[-8px] parent_wrappers">
                      <div className="w-1/2 px-[18px] md:px-[8px] flex items-center space-x-2">
                        <div className="flex_coumn_sec w-[100%]">
                          <RadioGroupItem value="option-one" id="option-one" />
                          <Label
                            htmlFor="option-one"
                            className="min-h-[144px] w-[100%] ml-0 label_class rounded-[8px] bg-[var(--card-yellow)] flex flex-col justify-center py-4 px-5 xl:px-3 md:px-2"
                          >
                            <span className="mb-5">
                              <Image
                                src={assets.client_secimg1}
                                width={28}
                                height={33}
                                alt=""
                              />
                            </span>
                            <span className="text-base font-satoshi_medium">
                              I am a client, looking for a service provider
                            </span>
                          </Label>
                        </div>
                      </div>
                      <div className="w-1/2 px-[18px] md:px-[8px] flex items-center space-x-2">
                        <div className="flex_coumn_sec w-[100%]">
                          <RadioGroupItem value="option-two" id="option-two" />
                          <Label
                            htmlFor="option-one"
                            className="min-h-[144px] w-[100%] label_class rounded-[8px] bg-[var(--purple-demo1)] flex flex-col justify-center py-4 px-5 xl:px-3 md:px-2"
                          >
                            <span className="mb-5">
                              <Image
                                src={assets.client_secimg2}
                                width={31}
                                height={33}
                                alt=""
                              />
                            </span>
                            <span className="text-base font-satoshi_medium">
                              I am a service provider, looking for work 
                            </span>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>

                  <Button
                    onClick={incrementSubmit}
                    className="w-[100%] text-base py-3 h-auto mt-[32px]"
                    variant="default"
                  >
                    Sign up
                  </Button>

                  <div className="mt-6 text-center">
                    <p className="text-sm font-satoshi_medium text-[var(--cmn-grey2)]">
                      Already have an account?
                      <Link
                        className="text-[var(--primary)] ml-2 hover:text-[var(--secondary)]"
                        href="/"
                       >
                        Log in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ) : incrSign === 1 ? (
              <div className="h-full">
                <div className="text-[var(--black1F1F1F)] mb-8">
                  <h2 className="text-3xl mb-2 lg:text-[30px]">
                    Hey there &#128075;
                  </h2>
                  <p>
                    Enter the information to register the Casacall platform.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap -mx-3">
                    <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                      <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorfef0ef)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                        <i className="mr-2">
                          <Image
                            src={assets?.google_icon}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </i>{" "}
                        Google
                      </Button>
                    </li>

                    <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                      <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf3fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                        <i className="mr-2">
                          <Image
                            src={assets?.fb_icon}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </i>{" "}
                        Facebook
                      </Button>
                    </li>

                    <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                      <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf7fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                        <i className="mr-2">
                          <Image
                            src={assets?.twitter_icon}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </i>{" "}
                        Twitter
                      </Button>
                    </li>
                  </ul>
                </div>

                <div className="text-center relative my-8 md:my-4 before:absolute before:content:[] before:left-0 before:top-[50%] before:w-[100%] before:h-[1px] before:bg-[var(--colorEAECF0)] before:translate-y-[-50%]">
                  <span className="text-xs text-[var(--color98A2B3)] font-satoshi_medium bg-[var(--secondary-foreground)] relative px-4">
                    or
                  </span>
                </div>
                <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 mb-8 md:px-4 md:py-4 hidden ">
                  <i className="self-center mb-[2px] mr-[17px] md:mr-[12px]">
                    <Image
                      src={assets?.account_tooltip}
                      width={17}
                      height={17}
                      alt=""
                    />
                  </i>
                  This account already exists.
                </div>
                <div className="flex flex-wrap -mx-[6px] -my-[6px]">
                  <div className="w-full px-[6px] py-[6px]">
                    <CommonSelect
                        options={selectApi}
                        labelPlaceholder={"A private entrepreneur or a company?"} onChange={undefined}                    />
                  </div>
                  <div className="w-full px-[6px] py-[6px]">
                    <CommonInput placeholderLabel="Email address" />
                  </div>

                  <div className="w-full px-[6px] py-[6px]">
                    <CommonInput
                      passwordvalue
                      placeholderLabel="Create password"
                    />
                  </div>

                  <div className="my-5 w-full px-[6px] py-[6px]">
                    <CheckboxSub checked={false}>
                      <span className="text-sm text-[var(--textgray)] font-satoshi_medium">
                        <span className="text-[var(--primary)]">
                          I agree to the
                        </span>{" "}
                        Terms of Service{" "}
                        <span className="text-[var(--primary)]">and</span>{" "}
                        Privacy Policy.
                      </span>
                    </CheckboxSub>
                  </div>

                  <div className="w-full px-[6px] py-[6px]">
                    <Button
                      className="w-[100%] text-base py-3 h-auto"
                      variant="default"
                    >
                      Sign up
                    </Button>
                  </div>

                  <div className="w-full px-[6px] py-[6px] text-center mt-3">
                    <p className="text-sm text-[var(--textgray)]">
                      Already have an account?{" "}
                      <Link
                        className="text-[var(--primary)] hover:text-[var(--secondary)]"
                        href="/"
                      >
                        Log in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
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

export default SignUpVendor;
