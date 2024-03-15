import assets from "@/json/assets";
import LeftArrowIconTwo from "@/json/icons/LeftArrowIconTwo";
import Image from "next/image";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";

export default function CalendarCard({
  show,
  cardCloseCallback,
}: {
  show: boolean;
  cardCloseCallback: (data: boolean) => void;
}) {
  return (
    <div
      className={`fixed left-0 bottom-0 w-full h-[calc(100vh-62px)] bg-white z-30 ${
        show ? " translate-x-0" : "translate-x-[-100%]"
      } transition-all `}
    >
      <div className="flex items-center relative p-4 border-b border-gray-200">
        <Button
          variant="outline"
          className="h-auto p-0 border-0"
          onClick={() => cardCloseCallback(false)}
        >
          <LeftArrowIconTwo />
        </Button>
        <h1 className=" text-base absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          Service details
        </h1>
      </div>
      <div className="py-6 px-4 h-[calc(100vh-110px)] flex flex-col justify-between">
        <div>
          <h3 className="text-gray-900 text-[20px]">Deep Tissue Massage</h3>
          <p className="text-sm text-gray-900">30-Minute</p>
          <div className="py-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <p className="text-gray-400 text-[12px]">Reservation number</p>
              <p className="text-sm font-satoshi_medium">#4947408635</p>
            </div>
            <Badge className="bg-[#F5EFFD] ml-3 text-[#7757BD] border-[1px]  border-[#7757BD] py-[6px] px-[10px] font-satoshi_regular text-sm rounded-lg">
              Upcoming
            </Badge>
          </div>
          <div className="py-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <p className="text-gray-400 text-[12px]">Client</p>
              <div className="flex items-center ">
                <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                  <Image
                    src={assets.clientImage}
                    alt="clientimg"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover "
                  />
                  <span className="bg-green-500 border-2 border-white p-1 absolute -bottom-1 -right-1 z-10 rounded-full "></span>
                </i>
                <h4 className="text-sm font-satoshi_medium">Julia Brown</h4>
              </div>
            </div>
            <Button variant="outline" className=" border-gray-200">
              Message
            </Button>
          </div>
          <div className="py-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <p className="text-gray-400 text-[12px]">Address</p>
              <p className="text-sm font-satoshi_medium">
                25 Draper Street, San Francisco, CA, USA
              </p>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-[12px]">Date & time</p>
              <p className="text-sm font-satoshi_medium">
                20 May 2023, 10:00 AM
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 flex justify-center items-center ">
          <Button
            variant="default"
            className="text-red-500 bg-red-50 border border-gray-100 w-full hover:bg-primary hover:text-white"
          >
            Cancel reservation
          </Button>
        </div>
      </div>
    </div>
  );
}
