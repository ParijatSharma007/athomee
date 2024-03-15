import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
const FinishAndPublish = () => {
  return (
    <div className="relative">
      <div className="relative border-gray-200 border-solid border-b pb-10 mb-10 md:pb-6 md:mb-4">
        <div className="relative">
          <h2 className="text-[18px] text-gray-900 mb-1">
            Choose how you want to handle bookings
          </h2>
          <p className="text-[14px] text-gray-500">
            Customize your booking approach based on your preferences.
          </p>
          <div className="relative mt-[24px]">
            <RadioGroup defaultValue="booking1">
              <div className="flex items-start space-x-2 mb-4">
                <RadioGroupItem value="booking1" id="r1" className="mt-1" />
                <Label
                  htmlFor="r1"
                  className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
                >
                  <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                    Direct bookings
                  </span>
                  Streamline reservations by allowing clients to instantly book
                  your services without additional approval steps.
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="booking2" id="r2" className="mt-1" />
                <Label
                  htmlFor="r2"
                  className="max-w-[380px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
                >
                  <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                    Approve client requests
                  </span>
                  Take a more personalized approach by reviewing and confirming
                  bookings based on your availability and preferences.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="relative pb-10 md:pb-0">
        <div className="relative">
          <h2 className="text-[18px] text-gray-900 mb-1">
            Please review the following policies before publishing
          </h2>
          <p className="text-[14px] text-gray-500">
            CI agree and understand that I&#39;m required to:
          </p>
          <div className="relative mt-[24px]">
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox
                id="check1"
                icon={<CheckboxTickIcon />}
                className="rounded-[4px] border-gray-200 mt-0.5"
              />
              <Label
                htmlFor="check1"
                className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
              >
                <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                Keep conversations
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Label>
            </div>
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox
                id="check2"
                icon={<CheckboxTickIcon />}
                className="rounded-[4px] border-gray-200 mt-0.5"
              />
              <Label
                htmlFor="check2"
                className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
              >
                <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                Payment processes
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Label>
            </div>
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox
                id="check3"
                icon={<CheckboxTickIcon />}
                className="rounded-[4px] border-gray-200 mt-0.5"
              />
              <Label
                htmlFor="check3"
                className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
              >
                <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                Payment processes
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Label>
            </div>
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox
                id="check4"
                icon={<CheckboxTickIcon />}
                className="rounded-[4px] border-gray-200 mt-0.5"
              />
              <Label
                htmlFor="check4"
                className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
              >
                <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                Payment processes
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishAndPublish;
