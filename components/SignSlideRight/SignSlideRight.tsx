import Image from "next/image";
import * as React from "react";

interface SlideRightProps {
  bannerImage: string;
  children: React.ReactNode;
}
function SignSlideRight({ bannerImage, children }: SlideRightProps) {
  return (
    <div className="relative rounded-[12px] border-1 border-indigo-600 overflow-hidden h-[calc(100vh-32px)]">
      <div className="h-full">
        <Image
          className="w-[100%] h-full object-cover"
          src={bannerImage}
          width={688}
          height={919}
          alt=""
        />
      </div>
      <div className='absolute pb-[190px] z-[1] left-0 top-0 w-[100%] py-10 px-9 before:absolute before:content[""] before:bg-[url("/images/back_green_sign.png")] before:h-[100%] before:w-[100%] before:left-0 before:top-0 before:bg-no-repeat before:bg-[length:100%_100%] before:-z-[1]'>
        <div className="max-w-[81%] lg:max-w-full">{children}</div>
      </div>
    </div>
  );
}

export default SignSlideRight;
