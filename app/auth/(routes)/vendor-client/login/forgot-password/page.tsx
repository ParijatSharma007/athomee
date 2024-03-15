import CommonInput from "@/components/CommonInput/CommonInput";
import SignSlideRight from "@/components/SignSlideRight/SignSlideRight";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import assets from "@/json/assets";
import Image from "next/image";
import Link from "next/link";

function forgotPassword() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 pr-20 pl-20 pt-8 xl:px-12 lg:px-4 md:w-full md:px-0 md:pt-4">
        <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200">
          <Link href="/" className="inline-block">
            <Image src={assets.logo} width={124} height={24} alt="" />
          </Link>
        </div>
        <div className="min-h-[calc(100vh-80px)] py-9 flex items-center md:px-4 md:py-4">
          <div className="w-[100%] max-h-[calc(100vh-130px)] overflow-y-auto overflow-x-hidden">
            <div className="mb-8">
              <h2 className="text-3xl	mb-2">Forgot password?</h2>
              <p>Restore your password by providing your email.</p>
            </div>

            <form className="overflow-hidden">
              <div className="flex flex-wrap -mx-[16px] -my-[16px]">
                <div className="w-full px-[16px] py-[16px]">
                  <CommonInput placeholderLabel="Email" />
                </div>
                <div className="w-full px-[16px] py-[16px]">
                  <Button
                    className="w-[100%] text-base py-3 h-auto"
                    variant="default"
                  >
                    Continue
                  </Button>
                </div>

                <div className="w-full px-[16px] py-[16px] text-center">
                  <Link
                    className="text-sm hover:text-[var(--secondary)]"
                    href="/"
                  >
                    Back to login
                  </Link>
                </div>
              </div>
            </form>
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

export default forgotPassword;
