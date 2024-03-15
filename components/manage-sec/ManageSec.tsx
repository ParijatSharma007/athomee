/* eslint-disable react/no-unescaped-entities */
import assets from "@/json/assets";
import TickIcon from "@/json/icons/TickIcon";
import Image from "next/image";
import Container from "../Container";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";

export default function ManageSec() {
  return (
    <div className="bg-[#EDF6FF] py-24 xl:py-20">
      <Container>
        <div className="flex items-center flex-wrap">
          <div className="w-5/12 xl:w-6/12 lg:w-full lg:mb-[56px]">
            <span className="text-[var(--secondary)]">
              Casacall for professionals
            </span>
            <h2 className="mb-10 mt-3	leading-[1.4] lg:text-[30px] sm:text-[24px]">
              Let's simplify the management <br></br> of your routine work tasks
            </h2>
            <ul className="flex  flex-wrap -m-3">
              <li className="flex items-center w-1/2 p-3 xl:p-2 sm:w-full">
                <span className="inline-block mr-2">
                  <TickIcon />
                </span>
                Easy order management
              </li>
              <li className="flex items-center w-1/2 p-3 xl:p-2 sm:w-full">
                <span className="inline-block mr-2">
                  <TickIcon />
                </span>
                Business payment solutions
              </li>
              <li className="flex items-center w-1/2 p-3 xl:p-2 sm:w-full">
                <span className="inline-block mr-2">
                  <TickIcon />
                </span>
                No need for advertising
              </li>
              <li className="flex items-center w-1/2 p-3 xl:p-2 sm:w-full">
                <span className="inline-block mr-2">
                  <TickIcon />
                </span>
                Help from the support service
              </li>
            </ul>
            <div className="mt-10">
              <Button variant="default" className="sm:w-full">
                Register as a professional
              </Button>
            </div>
          </div>
          <div className="w-7/12 xl:w-6/12 lg:w-full">
            <div className="pl-14 lg:pl-0">
              <Image
                alt=""
                src={assets.manage_image}
                width={624}
                height={416}
                style={{ width: "100%", borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
