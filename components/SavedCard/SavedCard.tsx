import assets from "@/json/assets";
import Image from "next/image";
import Link from "next/link";

import DeleteCollectionModal from "../DeleteCollectionModal/DeleteCollectionModal";

interface savedCardProps {
  title: string;
  noDropDown?: boolean;
}

export default function SavedCard({ title, noDropDown }: savedCardProps) {
  return (
    <>
      <div className={`flex flex-wrap -m-2 sm:my-0`}>
        <Link href="/" className="w-1/2 p-2 inline-block lg:p-1">
          <Image
            alt=""
            width={145}
            height={145}
            src={assets.saveCardImg1}
            className="w-full h-full object-cover "
          />
        </Link>
        <Link href="/" className="w-1/2 p-2 inline-block lg:p-1">
          <Image
            alt=""
            width={145}
            height={145}
            src={assets.saveCardImg2}
            className="w-full h-full object-cover "
          />
        </Link>
        <Link href="/" className="w-1/2 p-2 inline-block lg:p-1">
          <Image
            alt=""
            width={145}
            height={145}
            src={assets.saveCardImg4}
            className="w-full h-full object-cover "
          />
        </Link>
        <Link href="/" className="w-1/2 p-2 inline-block lg:p-1">
          <Image
            alt=""
            width={145}
            height={145}
            src={assets.saveCardImg4}
            className="w-full h-full object-cover "
          />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="pt-5 lg:pt-3 md:pt-1">
          <h3 className="lg:text-[18px]">{title}</h3>
          <p className="text-[#A0A0AB] lg:text-[14px]">Saved services: 16</p>
        </div>
        {!noDropDown && <DeleteCollectionModal />}
      </div>
    </>
  );
}
