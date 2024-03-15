/* eslint-disable @next/next/no-async-client-component */
"use client";
import Banner from "@/components/Banner/Banner";
import CommonSearchComponent from "@/components/CommonSearchComponent/CommonSearchComponent";
import Testimonial from "@/components/Testimonial/Testimonial";
import ManageSec from "@/components/manage-sec/ManageSec";

import CategorySec from "@/components/CategorySec/CategorySec";
import Request from "@/components/Request/Request";
import ServiceSec from "@/components/Service/ServiceSec";
import assets from "@/json/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const LandingPage = async () => {
  const [load, setload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 3000);
  }, []);

  return (
    <>
      {load ? (
        <div className=" fixed w-full h-full bg-white flex justify-center items-center z-[99999]">
          <div>
            <Image
              src={assets?.athomee_animate}
              alt="image"
              width={200}
              height={100}
            />
          </div>
        </div>
      ) : (
        <div className="main_block">
          <Banner />
          <CommonSearchComponent />
          <CategorySec />
          <Request />
          <ServiceSec />
          <Testimonial />
          <ManageSec />
        </div>
      )}
    </>
  );
};

export default LandingPage;
