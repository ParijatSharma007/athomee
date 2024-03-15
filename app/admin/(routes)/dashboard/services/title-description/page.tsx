import Container from "@/components/Container";
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
import { ChevronDown } from "lucide-react";
export default function TitleDescription() {
  return (
    <div className="relative py-10">
      <Container>
        <div className="relative mb-6">
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
              <h1 className="text-[36px] lg:text-[30px] md:hidden text-gray-900">
                Title and description
              </h1>
              <h1 className="text-[24px] text-gray-900 hidden md:block">
                Deep Tissue Massage
              </h1>
            </div>
            <div className="relative max-w-[736px] mr-auto">
              <div className="relative border-gray-200 border-solid border-b pb-10 mb-8">
                <h2 className="text-[18px] text-gray-900 mb-1">
                  Name the service
                </h2>
                <p className="text-[14px] text-gray-500">
                  Create a title that&#39;s both descriptive and
                  attention-grabbing.
                </p>
                <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
                  <label className="text-[12px] text-gray-400 m-0 leading-0">
                    Card holder
                  </label>
                  <Input
                    type="text"
                    placeholder="Deep Tissue Massage"
                    className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                  />
                </div>
              </div>
              <div className="relative border-gray-200 border-solid border-b pb-10 mb-8">
                <h2 className="text-[18px] text-gray-900 mb-1">Category</h2>
                <p className="text-[14px] text-gray-500">
                  Choose sub-category most suitable for your service.
                </p>
                <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
                  <label className="text-[12px] text-gray-400 m-0 leading-0">
                    Sub-category
                  </label>
                  <Select>
                    <SelectTrigger
                      icon={<ChevronDown color="#70707B" />}
                      className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
                    >
                      <SelectValue
                        placeholder="Spa and Massage Therapy"
                        className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                      />
                    </SelectTrigger>
                    <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                      <SelectGroup className="p-0">
                        <SelectItem
                          value="1"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Spa and Massage Therapy
                        </SelectItem>
                        <SelectItem
                          value="2"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 1
                        </SelectItem>
                        <SelectItem
                          value="3"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 2
                        </SelectItem>
                        <SelectItem
                          value="4"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 3
                        </SelectItem>
                        <SelectItem
                          value="5"
                          className="text-[16px] text-gray-900 font-satoshi_medium"
                        >
                          Option 4
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="relative mb-8">
                <h2 className="text-[18px] text-gray-900 mb-1">Description</h2>
                <p className="text-[14px] text-gray-500">
                  Write a comprehensive description that highlights what makes
                  your service unique. Be clear and concise.
                </p>
                <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
                  <label className="text-[12px] text-gray-400 m-0 leading-0">
                    Description
                  </label>
                  <Textarea
                    placeholder={`Experience the ultimate relaxation and relief with our Deep Tissue Massage service. Our skilled therapists use precise techniques to target deep layers of muscle tissue, releasing tension and promoting healing. Whether you're seeking relief from muscle pain or simply want to unwind, our Deep Tissue Massage is designed to rejuvenate your body and mind.

Benefits:

Alleviate chronic muscle tension and stiffness

Improve blood circulation and lymphatic flow

Reduce stress and promote relaxation

Enhance flexibility and range of motion

Our trained therapists customize each session to address your specific needs. With a focus on providing a tranquil and soothing experience, our Deep Tissue Massage is the perfect choice for those looking to rejuvenate and refresh. Book your session now and embark on a journey to renewed vitality.`}
                    className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium resize-none h-[470px] placeholder:text-gray-900"
                  />
                </div>
              </div>
              <div className="relative">
                <Button
                  type="button"
                  className="relative rounded-[32px] px-6 hover:bg-secondary"
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
