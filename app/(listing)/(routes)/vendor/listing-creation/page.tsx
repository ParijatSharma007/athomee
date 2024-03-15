"use client";
import ChangeCurrencyCard from "@/components/CommonTipsListCart/ChangeCurrencyCard";
import CommonTipsListCart from "@/components/CommonTipsListCart/CommonTipsListCart";
import Container from "@/components/Container";
import Availability from "@/components/CreateListingSteps/Availability";
import FinishAndPublish from "@/components/CreateListingSteps/FinishAndPublish";
import Location from "@/components/CreateListingSteps/Location";
import Overview from "@/components/CreateListingSteps/Overview";
import Photos from "@/components/CreateListingSteps/Photos";
import Pricing from "@/components/CreateListingSteps/Pricing";
import ThingsToKnow from "@/components/CreateListingSteps/ThingsToKnow";
import TipListingListFourModal from "@/components/TipListingListFourModal/TipListingListFourModal";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import TickIcon from "@/json/icons/TickIcon";
import { createListsteps } from "@/json/mock/createListstepper.mock";
import { useState } from "react";

const ListingCreation = () => {
  const [currentStep, setcurrentStep] = useState(1);

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Overview />;
      case 2:
        return <Location />;
      case 3:
        return <Pricing />;
      case 4:
        return <Availability />;
      case 5:
        return <Photos />;
      case 6:
        return <ThingsToKnow />;
      case 7:
        return <FinishAndPublish />;
      default:
        return <Overview />;
    }
  };
  return (
    <div className="pt-10 lg:pt-6 lg:overflow-hidden">
      <div className="relative hidden lg:flex justify-between border-b border-solid border-gray-200 pb-4 px-4">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
          Service editing
        </a>
        <div className="relative flex items-center">
          <TipListingListFourModal />
        </div>
      </div>
      <Container>
        <div className="flex relative justify-between lg:flex-wrap">
          <div className=" w-[15%] xl:w-[17%] lg:w-full">
            <ul className="flex flex-col items-start custom-stepper sticky top-8 lg:hidden">
              {createListsteps.map((item) => (
                <li className="flex items-center mb-10" key={item.step}>
                  <span
                    className={`dot mr-4 ${
                      item.step >= currentStep ? "unfilled" : ""
                    } ${item.step === currentStep ? "current-step" : ""}`}
                  >
                    {item.step >= currentStep && (
                      <span className="inner-dot"></span>
                    )}
                    {item.step < currentStep && (
                      <span>
                        <TickIcon
                          IconColor="#fff"
                          IconHEight={12}
                          IconWidth={12}
                        />
                      </span>
                    )}
                  </span>

                  <Button
                    variant={"destructive"}
                    className="p-0 m-0 h-auto"
                    onClick={() => setcurrentStep(item.step)}
                  >
                    {item.title}
                  </Button>
                </li>
              ))}
            </ul>
            <ul className="lg:flex items-center justify-between hidden w-full py-4 flex-wrap">
              {createListsteps.map((item, index) => (
                <li
                  key={index}
                  className="flex w-full justify-between items-center min-w-full"
                >
                  <p
                    className={` text-[14px] text-gray-900 font-satoshi_medium ${
                      item.step === currentStep ? "" : "hidden"
                    }`}
                  >
                    Step: {createListsteps[currentStep - 1].step}/7
                  </p>
                  {currentStep !== createListsteps.length && (
                    <p
                      className={` text-right text-[14px] text-gray-500 font-satoshi_medium ${
                        item.step === currentStep ? "" : "hidden"
                      }`}
                    >
                      Next step:{" "}
                      {currentStep == index + 1 &&
                        createListsteps[currentStep]?.title}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[60%] xl:w-[67%] xl:mr-4 mr-8 lg:w-full lg:mr-0 lg:pt-4">
            <h2 className="mb-10 lg:text-[30px] md:text-[24px] md:mb-6">
              <span className="text-[#D0D5DD] lg:hidden">
                Listing creation.
              </span>{" "}
              {createListsteps[currentStep - 1].title}
            </h2>

            {renderStepComponent()}
          </div>
          <div className="w-[25%] xl:w-[16%] lg:hidden">
            <div className="sticky top-8">
              <div className="relative mb-8">
                <CommonTipsListCart
                  title="Tip 1"
                  subText="Create a title that's both descriptive and attention-grabbing. A well-crafted title can pique interest."
                  bgColor="#FFF9D7"
                />
              </div>
              <div className="relative mb-8">
                <CommonTipsListCart
                  title="Tip 2"
                  subText="Write a comprehensive description that highlights what makes your service unique. Be clear and concise."
                  bgColor="#F7F4F1"
                />
              </div>
              <div className="relative">
                <CommonTipsListCart
                  title="Tip 3"
                  subText="If your service is location-dependent, provide clear details about the area you cover. Accuracy in location information enhances trust and improves the customer experience."
                  bgColor="#E8FBDA"
                />
              </div>
              <div className="relative">
                <ChangeCurrencyCard />
              </div>
            </div>
          </div>
        </div>

        <div className="flex px-20 py-6 lg:px-0 lg:py-4 justify-end sticky bottom-0 bg-white md:flex-col-reverse md:pt-8">
          <Button
            variant="ghost"
            className="mr-auto rounded-full font-satoshi_medium bg-gray-100 md:hidden"
            onClick={() => {
              if (currentStep > 1) {
                setcurrentStep(currentStep - 1);
              }
            }}
          >
            Back
          </Button>
          {currentStep === createListsteps.length && (
            <Button
              variant="ghost"
              className="mr-4 rounded-full font-satoshi_medium bg-gray-100 md:hidden"
            >
              Preview
            </Button>
          )}
          <Button
            variant="outline"
            className="mr-4 rounded-full font-satoshi_medium md:mr-0 md:mt-2"
          >
            Save as draft
          </Button>
          <Button
            variant="default"
            className="rounded-full font-satoshi_medium md:bg-gray-200 md:hover:bg-secondary"
            onClick={() => {
              if (currentStep < createListsteps.length) {
                setcurrentStep(currentStep + 1);
              }
            }}
          >
            {currentStep === createListsteps.length ? "Publish" : "Next step"}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ListingCreation;
