import { ChevronDown } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const Overview = () => {
  return (
    <div className="relative max-w-[736px] lg:max-w-full mr-auto">
      <div className="relative border-gray-200 border-solid border-b pb-10 mb-8">
        <h2 className="text-[18px] text-gray-900 mb-1">Name the service</h2>
        <p className="text-[14px] text-gray-500">
          Create a title that&#39;s both descriptive and attention-grabbing.
        </p>
        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
          <label className="text-[12px] text-gray-400 m-0 leading-0">
            Service Name
          </label>
          <Input
            type="text"
            placeholder="Service name"
            value="Deep Tissue Massage"
            className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400"
            onChange={() => console.log("demo")}
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
                className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400 placeholder:font-satoshi_medium placeholder:text-[16px]"
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
          Write a comprehensive description that highlights what makes your
          service unique. Be clear and concise.
        </p>
        <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
          <label className="text-[12px] text-gray-400 m-0 leading-0">
            Description
          </label>
          <Textarea
            placeholder="Write a description"
            value={`Experience the ultimate relaxation and relief with our Deep Tissue Massage service. Our skilled therapists use precise techniques to target deep layers of muscle tissue, releasing tension and promoting healing. Whether you're seeking relief from muscle pain or simply want to unwind, our Deep Tissue Massage is designed to rejuvenate your body and mind.

Benefits:

Alleviate chronic muscle tension and stiffness

Improve blood circulation and lymphatic flow

Reduce stress and promote relaxation

Enhance flexibility and range of motion

Our trained therapists customize each session to address your specific needs. With a focus on providing a tranquil and soothing experience, our Deep Tissue Massage is the perfect choice for those looking to rejuvenate and refresh. Book your session now and embark on a journey to renewed vitality.`}
            className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium resize-none h-[490px] placeholder:text-gray-400"
            onChange={() => console.log("demo")}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
