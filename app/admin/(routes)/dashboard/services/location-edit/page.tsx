import Container from "@/components/Container";
import Location from "@/components/CreateListingSteps/Location";
import { Button } from "@/components/ui/button";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
export default function LocationEdit() {
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
              <h1 className="text-[36px] text-gray-900 md:text-[20px]">
                Location
              </h1>
            </div>
            <div className="relative max-w-[736px] mr-auto lg:max-w-[none]">
              <div className="relative mb-14 md:mb-6">
                <Location />
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
