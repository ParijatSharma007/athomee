"use client";
import assets from "@/json/assets";
import Image from "next/image";
import Link from "next/link";
import DeleteCollectionModal from "../DeleteCollectionModal/DeleteCollectionModal";
interface savedCardProps {
  title: string;
  noDropDown?: boolean;
  collectionID?: string | undefined;
  TotalServiceNumber?: any;
  collectionName?: string | undefined;
  coverImage1?: any;
  coverImage2?: any;
  coverImage3?: any;
  coverImage4?: any;
}

export default function ClientSavedCard({
  title,
  noDropDown,
  collectionID,
  TotalServiceNumber,
  collectionName,
  coverImage1,
  coverImage2,
  coverImage3,
  coverImage4,
}: savedCardProps) {
  return (
    <>
      <div className={`flex flex-wrap -m-2 sm:my-0`}>
        <Link
          href={`/saved/inside-collection?collectionID=${collectionID}`}
          className="w-1/2 p-2 inline-block lg:p-1"
        >
          <Image
            alt=""
            width={145}
            height={145}
            src={coverImage1 || assets.saveCardImg4}
            className="w-full h-full object-cover "
          />
        </Link>
        <Link
          href={`/saved/inside-collection?collectionID=${collectionID}`}
          className="w-1/2 p-2 inline-block lg:p-1"
        >
          <Image
            alt=""
            width={145}
            height={145}
            src={coverImage2 || assets.saveCardImg4}
            className="w-full h-full object-cover "
          />
        </Link>
        <Link
          href={`/saved/inside-collection?collectionID=${collectionID}`}
          className="w-1/2 p-2 inline-block lg:p-1"
        >
          <Image
            alt=""
            width={145}
            height={145}
            src={coverImage3 || assets.saveCardImg4}
            className="w-full h-full object-cover "
          />
        </Link>
        <Link
          href={`/saved/inside-collection?collectionID=${collectionID}`}
          className="w-1/2 p-2 inline-block lg:p-1"
        >
          <Image
            alt=""
            width={145}
            height={145}
            src={coverImage4 || assets.saveCardImg4}
            className="w-full h-full object-cover "
          />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="pt-5 lg:pt-3 md:pt-1">
          <h3 className="lg:text-[18px]">{title}</h3>
          <p className="text-[#A0A0AB] lg:text-[14px]">
            Saved services: {TotalServiceNumber}
          </p>
        </div>
        {!noDropDown && (
          <DeleteCollectionModal
            collectiontitle={title}
            collectionid={collectionID}
          />
        )}
      </div>
    </>
  );
}
