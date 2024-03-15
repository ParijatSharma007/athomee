import CancelPaymentModal from "@/components/CancelPaymentModal/CancelPaymentModal";
import Container from "@/components/Container";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "@/components/ui/badge";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import MasterCardIcon from "@/json/icons/MasterCardIcon";
import Image from "next/image";

export default function page() {
  return (
    <div className="py-8">
      <Container>
        <div>
          <div className="w-1/2 lg:w-full">
            <div className="mb-8 md:mb-5">
              <a
                href="#"
                className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
              >
                <i className="pr-4">
                  <ArrowBackIcon />
                </i>
                Back
              </a>
            </div>
            <div>
              <div className="flex flex-wrap justify-between items-center mb-8 md:mb-5">
                <h1 className="text-gray-900 text-[30px] font-satoshi_medium md:text-[20px]">
                  Refund details
                </h1>
                <Badge className="py-[6px] px-[10px] rounded-[100px] border border-[#C3FFC2] bg-[#EBFFEB] text-green-500 text-[14px] font-satoshi_medium">
                  Processed
                </Badge>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-100">
                  <div className="pr-2">
                    <p className="text-gray-400 mb-1.5">Transaction ID</p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium">
                      486204945
                    </p>
                  </div>
                  <Button variant="outline" className="border-gray-200">
                    Download receipt
                  </Button>
                </div>
                <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-100">
                  <div className="pr-2">
                    <p className="text-gray-400 mb-1.5">Reservation number</p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium">
                      374668874
                    </p>
                  </div>
                  <Button variant="outline" className="border-gray-200">
                    View details
                  </Button>
                </div>
                <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-100">
                  <div className="pr-2">
                    <p className="text-gray-400 mb-1.5">Date</p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium mb-1">
                      Jul 23, 2022
                    </p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium">
                      11:24 AM
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-100">
                  <div className="pr-2">
                    <p className="text-gray-400 mb-1.5">Amount</p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium">
                      $70.00
                    </p>
                  </div>
                  <div>
                    <CancelPaymentModal />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-100">
                  <div className="pr-2">
                    <p className="text-gray-400 mb-1.5">Payment method</p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium mb-1">
                      Ending in 6375
                    </p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium flex items-center ">
                      Credit card
                      <i className="ml-1">
                        <MasterCardIcon />
                      </i>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-100">
                  <div className="pr-2">
                    <p className="text-gray-400 mb-1.5">Vendor</p>
                    <p className="text-gray-900 text-[14px] font-satoshi_medium flex items-center">
                      <i className="mr-1">
                        <Image
                          src={assets.healthLifeIcon}
                          alt=""
                          width={24}
                          height={24}
                        />
                      </i>
                      Health Life
                    </p>
                  </div>
                  <Button variant="outline" className="border-gray-200">
                    Message
                  </Button>
                </div>
                <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-100">
                  <div className="pr-2">
                    <p className="text-gray-400 mb-1.5">Client</p>
                    <p className="text-gray-900 text-[14px] font-satoshi_medium flex items-center">
                      <i className="mr-1">
                        <Image
                          src={assets.vendorImage1}
                          alt=""
                          width={24}
                          height={24}
                        />
                      </i>
                      Julia Brown
                    </p>
                  </div>
                  <Button variant="outline" className="border-gray-200">
                    Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
