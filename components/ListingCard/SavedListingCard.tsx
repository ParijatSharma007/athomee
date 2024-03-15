"use client";

import HeartIcon from "@/json/icons/HeartIcon";
import ThunderIcon from "@/json/icons/ThunderIcon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import StarRating from "../Ratting/Ratting";
import ListStarRating from "../Ratting/ListingStarRating";
import AddToSaveCollectionModal from "../AddToSaveCollectionModal/AddToSaveCollectionModal";

export interface listingCardProps {
  listingImage: string;
  ImageWidth: string;
  ImageHeight: string;
  listTitle: string;
  clientImg: string;
  userName: string;
  rattingvalue: string;
  rattedPerson: string;
  listingText: string;
  priceText: number;
  showaviability?: boolean | null;
  availablenow?: boolean;
  asPath?: string;
  isFavorite?: boolean;
}

function SavedListingCard({
  ImageWidth,
  ImageHeight,
  isFavorite,
  ...props
}: listingCardProps) {
  const [windowSize, setWindowSize] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    }
  }, []);

  const [icon, setIcon] = useState(false);
  const onButtonClick = () => {
    setIcon(!icon);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="relative ">
        <figure
          className={`relative z-0 w-[${ImageWidth}] h-[${ImageHeight}] md:h-[200px] md:w-full leading-[0] text-[0]`}
        >
          <img
            src={props.listingImage}
            alt="Listing Image"
            // width={406}
            // height={197}
            className={`w-full object-cover rounded-[8px]`}
            style={{
              // width:ImageWidth,
              height: ImageHeight,
            }}
          />
          {props.showaviability &&
            (props.availablenow ? (
              <div className="rounded-[100px]  border bg-colorEBFFEB border-borderGreen px-3 py-1 flex items-center absolute top-5 right-4">
                <i className="w-[14px] h-[14px] mr-1">
                  <ThunderIcon />
                </i>
                <p className="text-textGreen text-sm font-medium">
                  Available now
                </p>
              </div>
            ) : (
              <div className="rounded-[100px]  border border-colorFFEAC2 bg-colorFFF8EB px-3 py-1 flex items-center absolute top-5 right-4">
                <p className=" text-sm text-yellow-600  font-medium">
                  Later available
                </p>
              </div>
            ))}
        </figure>
      </div>
      <div className="p-6 sm:p-4 rounded-2xl  bg-white -mt-3 z-10 relative  shadow-[0_4px_22px_-4px_rgba(0,0,0,0.09)]">
        <ul>
          <li className="mb-4 ">
            <div className="flex justify-between items-center">
              <h3 className="lg:text-[24px] sm:text-[20px]">
                {" "}
                <Link
                  href={`/client/service-details/${props.asPath}`}
                  className="hover:text-secondary transition-all md:text-[18px] "
                >
                  {props.listTitle}
                </Link>{" "}
              </h3>
              {/* <button onClick={onButtonClick}>
                {icon ? (
                  <HeartIcon fill={"#7757BD"} />
                ) : (
                  <HeartIcon fill={"transparent"} />
                )}
              </button> */}

              <AddToSaveCollectionModal isFavoriteClick={isFavorite} />
            </div>
          </li>
          <li className="mb-4 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                  <Image
                    src={props.clientImg}
                    alt="clientimg"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover "
                  />
                  <span className="bg-green-500 border-2 border-white p-1 absolute -bottom-1 -right-1 z-10 rounded-full "></span>
                </i>
                <h4 className="text-sm ">{props.userName}</h4>
              </div>
              <ul className="flex items-center">
                <li className="mr-2">
                  <p className="text-xs">{props.rattingvalue}</p>
                </li>
                <li className="mr-2">
                  {/* <StarRating totalStars={windowSize >= 768 ? 10 : 1} /> */}
                  <ListStarRating
                    ratingset={props?.rattingvalue}
                    totalStars={
                      windowSize >= 768
                        ? Math.ceil(parseFloat(props?.rattingvalue))
                        : Math.ceil(parseFloat(props?.rattingvalue) || 0)
                    }
                  />
                </li>
                <li>
                  <p className="text-xs text-textgray">
                    ({props.rattedPerson})
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-4 ">
            <div>
              <p className="text-base max-w-[362px] font-normal md:line-clamp-2">
                {props.listingText}
              </p>
            </div>
          </li>
          <li>
            <h3 className="text-2xl sm:text-[20px]">from ${props.priceText}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SavedListingCard;
