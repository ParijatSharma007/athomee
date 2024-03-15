import CommonTipsListCart from "@/components/CommonTipsListCart/CommonTipsListCart";
import Container from "@/components/Container";
import TipListingListThreeModal from "@/components/TipListingListThreeModal/TipListingListThreeModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import PreviewTriIcon from "@/json/icons/PreviewTriIcon";
import ThreeDot from "@/json/icons/ThreeDot";
import { ChevronDown } from "lucide-react";
export default function ThingsKnow() {
  return (
    <div className="relative py-10 md:py-6 lg:overflow-hidden">
      <div className="relative hidden md:flex justify-between border-b border-solid border-gray-200 pb-4 px-4">
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
          <TipListingListThreeModal />
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-tranparent hover:border-black hover:text-black border-[#E4E4E7] ml-2 mr-2 p-2 w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <i className="">
              <PreviewTriIcon />
            </i>
          </Button>
          <Button
            variant="outline"
            className="p-2 border-[#E4E4E7] hover:bg-white hover:border-black w-[36px] h-[36px] rounded-full flex items-center justify-center"
          >
            <ThreeDot />
          </Button>
        </div>
      </div>
      <Container>
        <div className="relative mb-6">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </a>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[80%] pr-[32px] lg:w-full lg:pr-0">
            <div className="relative flex justify-between item-center mb-10 md:mb-4">
              <h1 className="text-[36px] text-gray-900 lg:text-[30px] md:text-[24px]">
                Things to know
              </h1>
            </div>
            <div className="relative max-w-[736px] mr-auto lg:max-w-full">
              <div className="relative border-gray-200 border-solid border-b pb-10 mb-8 md:pb-6 md:mb-4">
                <h2 className="text-[18px] text-gray-900 mb-1 md:text-[16px]">
                  Cancellation policy
                </h2>
                <p className="text-[14px] text-gray-500">
                  A transparent policy builds trust and makes for smoother
                  interactions.
                </p>
                <div className="relative w-full flex md:flex-wrap flex-wrap mt-[24px] mx-[-8px] md:mx-0">
                  <div className="relative w-1/3 md:w-full md:mb-4 md:px-0 px-[8px]">
                    <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Type
                      </label>
                      <Select>
                        <SelectTrigger
                          icon={<ChevronDown color="#70707B" />}
                          className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                        >
                          <SelectValue
                            placeholder="Non-refundable"
                            className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                          />
                        </SelectTrigger>
                        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                          <SelectGroup className="p-0">
                            <SelectItem
                              value="1"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Non-refundable
                            </SelectItem>
                            <SelectItem
                              value="2"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Refundable
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="relative w-2/3 md:w-full md:px-0 px-[8px]">
                    <div className=" border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Description
                      </label>
                      <Input
                        type="text"
                        placeholder="This reservation is non-refundable."
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mb-6 md:mb-4">
                <h2 className="text-[18px] text-gray-900 mb-1 md:text-[16px]">
                  Add other rules?
                </h2>
                <p className="text-[14px] text-gray-500">
                  Tell more thing the client has to know before reservation
                </p>
                <div className="relative w-full flex flex-wrap mt-[24px] mx-[-8px] md:mx-0">
                  <div className="relative w-1/3 md:w-full md:mb-4 md:px-0 px-[8px]">
                    <div className=" border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Input name
                      </label>
                      <Input
                        type="text"
                        placeholder="Name the rule"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="relative w-2/3 md:w-full md:px-0 px-[8px]">
                    <div className=" border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Input name
                      </label>
                      <Input
                        type="text"
                        placeholder="Add description"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mb-12 md:mb-6">
                <Button
                  type="button"
                  className="relative rounded-[32px] bg-gray-100 text-[14px] text-gray-900 font-satoshi_medium px-6 hover:bg-secondary hover:text-white"
                >
                  <i className="pr-2">
                    <PluseBtnIcon />
                  </i>
                  Add rule
                </Button>
              </div>
              <div className="relative">
                <Button
                  type="button"
                  className="relative rounded-[32px] px-6 hover:bg-secondary md:w-full"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[20%] lg:hidden">
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
