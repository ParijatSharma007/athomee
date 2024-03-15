/* eslint-disable react/no-unescaped-entities */
import SignSlideRight from "@/components/SignSlideRight/SignSlideRight";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import assets from "@/json/assets";
import Image from "next/image";
import Link from "next/link";

function CheckEmail() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 pr-20 pl-20 pt-8 xl:px-12 lg:px-4 md:w-full md:px-0 md:pt-4">
        <div className="h-[100%]">
          <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200">
            <Link href="/" className="inline-block">
              <Image src={assets.logo} width={124} height={24} alt="" />
            </Link>
          </div>
          <div className="py-9 flex items-center min-h-[calc(100vh-80px)] md:px-4 md:py-4">
            <div className="text-center w-[100%] max-h-[calc(100vh-130px)] custom-scrollbar overflow-y-auto overflow-x-hidden ">
              <i className="mx-auto table mb-6">
                <Image
                  src={assets?.verify_icon}
                  width={56}
                  height={56}
                  alt=""
                />
              </i>
              <h2 className="text-3xl	mb-4">Check your email</h2>
              <p className="text-[var(--grey70707B)] font-satoshi_regular">
                We sent a verification link to{" "}
                <Link
                  className="text-[var(--foreground)] hover:text-[var(--secondary)]"
                  href={`mailto:${`amelia.golden@gmail.com`}`}
                >
                  amelia.golden@gmail.com
                </Link>
              </p>
              <Button
                className="w-[100%] text-base py-3 h-auto mt-10"
                variant="default"
              >
                Back to sign up
              </Button>
              <p className="mt-10 text-sm text-[var(--grey31)] md:mt-6">
                Didn't receive the email?{" "}
                <Link
                  className="text-[var(--foreground)] hover:text-[var(--secondary)] ml-2"
                  href="/"
                >
                  Resend
                </Link>
              </p>
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

export default CheckEmail;
