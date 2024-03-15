import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import StarRating from "../Ratting/Ratting";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function LeaveReviewModal() {
  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (index: number) => {
    setCheckBtn(index);
  };

  const tipRaduiList = [
    {
      tipAmt: "$2.5",
      tipPercent: "5%",
    },
    {
      tipAmt: "$5",
      tipPercent: "10%",
    },
    {
      tipAmt: "$10",
      tipPercent: "20%",
    },
  ];
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-white border-gray-200 transition-all text-[14px] font-satoshi_medium text-gray-900 rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-black hover:text-white"
          >
            Write a review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl">Leave review</DialogTitle>
          </DialogHeader>
          <div>
            <div className="px-10 pb-[24px] border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin">
              <div className="mb-8">
                <h4 className="mb-3">Rate your experience</h4>
                <div className="p-[16px] rounded-[8px] bg-[#fafafa] inline-block">
                  <StarRating totalStars={5} />
                </div>
              </div>
              <div className="mb-8">
                <h4 className="mb-3">Tell us more about your experience</h4>
                <div className="relative py-[11px] px-[16px] my-4 h-[160px] border-gray-200 border border-solid rounded-[8px]">
                  <Textarea
                    className="border-0 resize-none p-0 text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-400"
                    placeholder="Share your review here"
                  />
                </div>
              </div>
              <div>
                <h4 className="mb-4">Leave a tip?</h4>
                <div className="mb-4">
                  <RadioGroup
                    defaultValue="comfortable"
                    className="flex flex-wrap gap-0 mx-[-8px] pb-[24px]  items-start overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin"
                  >
                    {tipRaduiList.map((item, index) => (
                      <div className=" relative px-2" key={index}>
                        <div
                          className={` relative px-5 py-4 rounded-[12px] overflow-hidden bg-[${
                            checkBtn == index ? "#F5EFFD" : "#F4F4F5"
                          }]  ${
                            checkBtn == index &&
                            "border-gray-400 border-solid border shadow-[1px_1px_10px_5px_rgba(0,0,0,0.07)]"
                          } `}
                          onClick={() => handelCheck(index)}
                        >
                          <RadioGroupItem
                            value={`${index + 1}`}
                            id={`${index + 1}`}
                            className="absolute w-full h-full left-0 top-0 appearance-none opacity-0 data-[state=checked]:bg-[#F5EFFD] data-[state=checked]:opacity-1 min-h-0"
                          />
                          <Label
                            htmlFor={`${index + 1}`}
                            className="w-full text-center "
                          >
                            <span className="block text-center mb-2 text-gray-900 font-satoshi_medium leading-[1]">
                              {item.tipAmt}
                            </span>
                            <span className="block text-center  text-gray-400  leading-[1]">
                              {item.tipPercent}
                            </span>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="flex items-center">
                  <p className="mr-3">Custom</p>
                  <div className="w-[80px] px-3 py-2 flex items-center rounded-[8px] border border-solid border-[#F2F4F7]">
                    <span className="inline-block text-gray-400">$</span>
                    <Input
                      className="w-[calc(100%-15px)] ml-[5px] outline-none h-[auto] border-none"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-10 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center">
                <li className="mr-4">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li>
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                  >
                    Send review
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
