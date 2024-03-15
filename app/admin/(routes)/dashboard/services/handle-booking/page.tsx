import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
export default function HandleBooking() {
  return (
    <div className="relative py-10 md:py-5">
      <Container>
        <div className="relative mb-6 md:mb-3">
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
        <div className="flex flex-wrap">
          <div className="w-[80%] pr-[32px] lg:w-full lg:pr-0">
            <div className="relative flex justify-between item-center mb-10 md:mb-6">
              <h1 className="text-[36px] text-gray-900 md:text-[20px] ">
                How to handle the bookings?
              </h1>
            </div>
            <div className="relative max-w-[736px] mr-auto lg:max-w-[none]">
              <div className="relative mb-10">
                <h2 className="text-[18px] text-gray-900 mb-1">
                  Choose how you want to handle bookings
                </h2>
                <p className="text-[14px] text-gray-500">
                  Customize your booking approach based on your preferences.
                </p>
                <div className="relative mt-[24px]">
                  <RadioGroup defaultValue="booking1">
                    <div className="flex items-start space-x-2 mb-10">
                      <RadioGroupItem
                        value="booking1"
                        id="r1"
                        className="mt-1"
                      />
                      <Label
                        htmlFor="r1"
                        className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
                      >
                        <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                          Direct bookings
                        </span>
                        Streamline reservations by allowing clients to instantly
                        book your services without additional approval steps.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem
                        value="booking2"
                        id="r2"
                        className="mt-1"
                      />
                      <Label
                        htmlFor="r2"
                        className="max-w-[390px] mr-auto text-[14px] text-gray-500 leading-[1.3]"
                      >
                        <span className="block text-[16px] text-gray-900 font-satoshi_medium mb-1">
                          Approve client requests
                        </span>
                        Take a more personalized approach by reviewing and
                        confirming bookings based on your availability and
                        preferences.
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="relative">
                <Button
                  type="button"
                  className="relative rounded-[32px] px-6 hover:bg-secondary sm:w-full"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
