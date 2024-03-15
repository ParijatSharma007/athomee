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
import { Textarea } from "@/components/ui/textarea";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import DelectPopUpIcon from "@/json/icons/DelectPopUpIcon";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import PreviewTriIcon from "@/json/icons/PreviewTriIcon";
import TableTickUnderLineIcon from "@/json/icons/TableTickUnderLineIcon";
import ThreeDot from "@/json/icons/ThreeDot";
import TickArrowRightIcon from "@/json/icons/TickArrowRightIcon";
import { ChevronDown } from "lucide-react";
export default function PricingEdit() {
  return (
    <div className="relative py-10 md:py-6">
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
            <div className="relative flex justify-between item-center mb-10 lg:mb-6 md:mb-4">
              <h1 className="text-[36px] text-gray-900 lg:text-[30px] md:text-[24px]">
                Pricing
              </h1>
            </div>
            <div className="relative max-w-[736px] lg:max-w-full mr-auto">
              <div className="relative mb-12 md:mb-6">
                <h2 className="text-[18px] text-gray-900 mb-1">Add packages</h2>
                <p className="text-[14px] text-gray-500">
                  Spice up your service by creating different packages that
                  cater to various needs and preferences.
                </p>
              </div>
              <div className="relative pr-[44px] md:pr-0">
                <div className="relative flex flex-wrap mb-8 md:mb-5">
                  <div className="w-[40%] pr-6 md:w-full md:pr-0 md:pb-3">
                    <p className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900">
                      Package name
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-wrap border-gray-200 border-solid border rounded-[8px] md:w-full">
                    <div className="w-1/3 p-5 lg:p-3  border-gray-200 border-solid border-r md:w-full md:border-b md:border-r-0">
                      <Input
                        type="text"
                        placeholder="Training light"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                    <div className="w-1/3 p-5 lg:p-3  border-gray-200 border-solid border-r md:w-full md:border-b md:border-r-0">
                      <Textarea
                        placeholder="Medium: 
                        training 
                        difficulty"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 resize-none md:h-[24px] md:!min-h-[24px]"
                      />
                    </div>
                    <div className="w-1/3 p-5 lg:p-3 md:w-full">
                      <Textarea
                        placeholder="Heavy: only for the experienced"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 resize-none md:h-[24px] md:!min-h-[24px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-wrap mb-8 md:mb-5">
                  <div className="w-[40%] pr-6 md:w-full md:pr-0 md:pb-4">
                    <p className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 mb-1">
                      Description
                    </p>
                    <p className="text-[14px] text-gray-900 font-satoshi_regular placeholder:text-gray-500">
                      Spice up your service by creating different packages that
                      cater to various needs and preferences.
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-wrap border-gray-200 border-solid border rounded-[8px] md:w-full">
                    <div className="w-1/3 p-5 md:p-3  border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                      <Textarea
                        placeholder="Describe details of your 
                        offering..."
                        className="border-0 p-0 h-auto text-[14px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 resize-none md:h-[24px] md:!min-h-[24px]"
                      />
                    </div>
                    <div className="w-1/3 p-5 md:p-3  border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                      <Textarea
                        placeholder="Describe details of your 
                        offering..."
                        className="border-0 p-0 h-auto text-[14px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 resize-none md:h-[24px] md:!min-h-[24px]"
                      />
                    </div>
                    <div className="w-1/3 p-5 md:p-3 md:w-full">
                      <Textarea
                        placeholder="Describe details of your 
                        offering..."
                        className="border-0 p-0 h-auto text-[14px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 resize-none md:h-[24px] md:!min-h-[24px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-wrap mb-8 md:mb-5">
                  <div className="w-[40%] pr-6 md:w-full md:pr-0 md:pb-4">
                    <p className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 mb-1">
                      Service duration
                    </p>
                    <p className="text-[14px] text-gray-900 font-satoshi_regular placeholder:text-gray-500">
                      Lorem Ipsum.{" "}
                    </p>
                  </div>
                  <div className="w-[60%] flex flex-wrap border-gray-200 border-solid border rounded-[8px] md:w-full">
                    <div className="w-1/3 p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                      <Select>
                        <SelectTrigger
                          icon={<ChevronDown color="#70707B" />}
                          className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                        >
                          <SelectValue
                            placeholder="30 min"
                            className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                          />
                        </SelectTrigger>
                        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                          <SelectGroup className="p-0">
                            <SelectItem
                              value="1"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              15 min
                            </SelectItem>
                            <SelectItem
                              value="2"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              30 min
                            </SelectItem>
                            <SelectItem
                              value="3"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              45 min
                            </SelectItem>
                            <SelectItem
                              value="4"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h
                            </SelectItem>
                            <SelectItem
                              value="5"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 15 min
                            </SelectItem>
                            <SelectItem
                              value="6"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 30 min
                            </SelectItem>
                            <SelectItem
                              value="7"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 45 min
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-1/3 p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                      <Select>
                        <SelectTrigger
                          icon={<ChevronDown color="#70707B" />}
                          className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                        >
                          <SelectValue
                            placeholder="1 hours"
                            className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                          />
                        </SelectTrigger>
                        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                          <SelectGroup className="p-0">
                            <SelectItem
                              value="1"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              15 min
                            </SelectItem>
                            <SelectItem
                              value="2"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              30 min
                            </SelectItem>
                            <SelectItem
                              value="3"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              45 min
                            </SelectItem>
                            <SelectItem
                              value="4"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h
                            </SelectItem>
                            <SelectItem
                              value="5"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 15 min
                            </SelectItem>
                            <SelectItem
                              value="6"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 30 min
                            </SelectItem>
                            <SelectItem
                              value="7"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 45 min
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-1/3 p-5 md:p-3 md:w-full">
                      <Select>
                        <SelectTrigger
                          icon={<ChevronDown color="#70707B" />}
                          className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                        >
                          <SelectValue
                            placeholder="1.5 hours"
                            className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                          />
                        </SelectTrigger>
                        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                          <SelectGroup className="p-0">
                            <SelectItem
                              value="1"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              15 min
                            </SelectItem>
                            <SelectItem
                              value="2"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              30 min
                            </SelectItem>
                            <SelectItem
                              value="3"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              45 min
                            </SelectItem>
                            <SelectItem
                              value="4"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h
                            </SelectItem>
                            <SelectItem
                              value="5"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 15 min
                            </SelectItem>
                            <SelectItem
                              value="6"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 30 min
                            </SelectItem>
                            <SelectItem
                              value="7"
                              className="text-[16px] text-gray-900 font-satoshi_regular"
                            >
                              1 h 45 min
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative pr-[44px] mb-4">
                <div className="w-full flex flex-wrap border-gray-200 border-solid border rounded-[8px]">
                  <div className="w-[40%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <p>Focus</p>
                  </div>
                  <div className="w-[20%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TickArrowRightIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[20%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TickArrowRightIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[20%] p-5 md:p-3  md:w-full">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TickArrowRightIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="absolute right-0 top-[50%] translate-y-[-50%]">
                  <Button
                    type="button"
                    className="p-0 w-auto bg-transparent h-auto hover:opacity-75 "
                  >
                    <DelectPopUpIcon />
                  </Button>
                </div>
              </div>
              <div className="relative pr-[44px] mb-4">
                <div className="w-full flex flex-wrap border-gray-200 border-solid border rounded-[8px]">
                  <div className="w-[40%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <p>Techniques</p>
                  </div>
                  <div className="w-[20%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TableTickUnderLineIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[20%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TickArrowRightIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[20%] p-5 md:p-3  md:w-full">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TickArrowRightIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="absolute right-0 top-[50%] translate-y-[-50%]">
                  <Button
                    type="button"
                    className="p-0 w-auto bg-transparent h-auto hover:opacity-75 "
                  >
                    <DelectPopUpIcon />
                  </Button>
                </div>
              </div>
              <div className="relative pr-[44px] mb-4">
                <div className="w-full flex flex-wrap border-gray-200 border-solid border rounded-[8px]">
                  <div className="w-[40%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <p>Muscle Rehabilitation</p>
                  </div>
                  <div className="w-[20%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TableTickUnderLineIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[20%] p-5 md:p-3 border-gray-200 border-solid border-r md:w-full md:border-r-0 md:border-b">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TableTickUnderLineIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[20%] p-5 md:p-3 md:w-full">
                    <Select>
                      <SelectTrigger
                        icon={<ChevronDown color="#70707B" />}
                        className="w-full border-0 p-0 h-auto text-left  text-[14px] text-gray-900 font-satoshi_regular "
                      >
                        <SelectValue
                          placeholder={<TickArrowRightIcon />}
                          className="text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900 placeholder:font-satoshi_regular placeholder:text-[16px]"
                        />
                      </SelectTrigger>
                      <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_regular">
                        <SelectGroup className="p-0">
                          <SelectItem
                            value="1"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TickArrowRightIcon />
                          </SelectItem>
                          <SelectItem
                            value="2"
                            className="text-[16px] text-gray-900 font-satoshi_regular"
                          >
                            <TableTickUnderLineIcon />
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="absolute right-0 top-[50%] translate-y-[-50%]">
                  <Button
                    type="button"
                    className="p-0 w-auto bg-transparent h-auto hover:opacity-75 "
                  >
                    <DelectPopUpIcon />
                  </Button>
                </div>
              </div>
              <div className="relative mb-8 md:mb-5">
                <Button
                  type="button"
                  className="p-0 w-auto bg-transparent text-gray-900 font-satoshi_regular text-[14px] inline-flex items-center h-auto hover:opacity-75 "
                >
                  <i className="pr-2">
                    <PluseBtnIcon />
                  </i>
                  New feature
                </Button>
              </div>
              <div className="relative pr-[44px] mb-12 md:mb-5 md:pr-0">
                <div className="relative border-gray-200 border-solid border rounded-[8px]">
                  <div className="w-full flex flex-wrap border-gray-200 border-solid border-b">
                    <div className="w-[40%] md:w-1/2 xs:w-[60%] p-5 md:p-3 border-gray-200 border-solid border-r">
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        Your rate
                      </p>
                    </div>
                    <div className="w-[20%] md:w-1/2 xs:w-[40%] flex items-center p-5 md:p-3 border-gray-200 border-solid border-r md:border-r-0">
                      <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="55.00"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 border-gray-200 border-solid border-r md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="90.00"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="120.00"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-wrap border-gray-200 border-solid border-b">
                    <div className="w-[40%] md:w-1/2 xs:w-[60%] p-5 md:p-3 border-gray-200 border-solid border-r">
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        20% Service Fee
                      </p>
                    </div>
                    <div className="w-[20%] md:w-1/2 xs:w-[40%] flex items-center p-5 md:p-3 border-gray-200 border-solid border-r md:border-r-0">
                      <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="11.00"
                        className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 border-gray-200 border-solid border-r md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="18.00"
                        className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="24.00"
                        className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-wrap border-gray-200 border-solid border-b">
                    <div className="w-[40%] md:w-1/2 xs:w-[60%] p-5 md:p-3 border-gray-200 border-solid border-r">
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        5% Transaction Fee
                      </p>
                    </div>
                    <div className="w-[20%] md:w-1/2 xs:w-[40%] flex items-center p-5 md:p-3 border-gray-200 border-solid border-r md:border-r-0">
                      <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="2.75"
                        className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 border-gray-200 border-solid border-r md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="4.50"
                        className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-400 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="6"
                        className="border-0 p-0 h-auto text-[16px] text-gray-400 font-satoshi_regular placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-wrap">
                    <div className="w-[40%] md:w-1/2 xs:w-[60%] p-5 md:p-3 border-gray-200 border-solid border-r">
                      <p className="text-[16px] text-gray-900 font-satoshi_regular">
                        You&#39;ll receive
                      </p>
                    </div>
                    <div className="w-[20%] md:w-1/2 xs:w-[40%] flex items-center p-5 md:p-3 border-gray-200 border-solid border-r md:border-r-0">
                      <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="41.25"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 border-gray-200 border-solid border-r md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="67.5"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                      />
                    </div>
                    <div className="w-[20%] flex items-center p-5 md:hidden">
                      <p className="text-[16px] pr-1.5 text-gray-900 font-satoshi_regular">
                        $
                      </p>
                      <Input
                        type="text"
                        placeholder="90"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_regular placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                </div>
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
