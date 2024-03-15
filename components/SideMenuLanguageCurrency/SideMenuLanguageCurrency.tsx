import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import GlobeIcon from "@/json/icons/GlobeIcon";
import ChervonDown from "@/json/icons/ChervonDown";
import Image from "next/image";
import assets from "@/json/assets";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export default function SideMenuLanguageCurrency() {
  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (index: number) => {
    setCheckBtn(index);
  };
  const languageList = [
    {
      languageName: "English",
    },
    {
      languageName: "Azərbaycan",
    },
    {
      languageName: "Español",
    },
    {
      languageName: "Français",
    },
    {
      languageName: "Gaeilge",
    },
    {
      languageName: "Italiano",
    },
    {
      languageName: "Kiswahili",
    },
    {
      languageName: "Latviešu",
    },
    {
      languageName: "Lietuvių",
    },
    {
      languageName: "Magyar",
    },
    {
      languageName: "Malti",
    },
    {
      languageName: "Language",
    },
    {
      languageName: "Language",
    },
    {
      languageName: "Language2",
    },
    {
      languageName: "Language3",
    },
    {
      languageName: "Italiano",
    },
    {
      languageName: "Kiswahili",
    },
    {
      languageName: "Latviešu",
    },
    {
      languageName: "Lietuvių",
    },
    {
      languageName: "Magyar",
    },
    {
      languageName: "Malti",
    },
    {
      languageName: "Language",
    },
    {
      languageName: "Language",
    },
    {
      languageName: "Language2",
    },
    {
      languageName: "Language3",
    },
  ];

  const currencyList = [
    {
      currencyName: "USD – $",
    },
    {
      currencyName: "EUR – €",
    },
    {
      currencyName: "CAD – $",
    },
    {
      currencyName: "AUD – $ ",
    },
    {
      currencyName: "HKD –  $",
    },
    {
      currencyName: "DKK – kr ",
    },
    {
      currencyName: "CAD – $",
    },
    {
      currencyName: "AUD – $ ",
    },
    {
      currencyName: "HKD –  $",
    },
    {
      currencyName: "EUR – €",
    },
    {
      currencyName: "CAD – $",
    },
    {
      currencyName: "HKD –  $",
    },
    {
      currencyName: "DKK – kr ",
    },
    {
      currencyName: "AUD – $ ",
    },
    {
      currencyName: "EUR – €",
    },
    {
      currencyName: "AUD – $ ",
    },
    {
      currencyName: "DKK – kr ",
    },
    {
      currencyName: "CAD – $",
    },
    {
      currencyName: "HKD –  $",
    },
    {
      currencyName: "EUR – €",
    },
    {
      currencyName: "HKD –  $",
    },
    {
      currencyName: "DKK – kr ",
    },
    {
      currencyName: "CAD – $",
    },
    {
      currencyName: "EUR – €",
    },
    {
      currencyName: "AUD – $ ",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="flex items-center no-underline hover:no-underline">
          <div className="flex items-center">
            <i className="mr-2 w-[20px] block text-center">
              <GlobeIcon />
            </i>
            <span className="inline-block text-[16px]  font-satoshi_medium">
              Language
            </span>
          </div>
          <i>
            <ChervonDown />
          </i>
        </AccordionTrigger>
        <AccordionContent className="py-2">
          <div>
            <RadioGroup
              defaultValue="comfortable"
              className="flex flex-wrap gap-0 m-[-8px] h-[288px] items-start overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin"
            >
              {languageList.map((item, index) => (
                <div className=" w-full p-2 relative" key={index}>
                  <div
                    className={`{ relative w-full bg-gray-50 px-4 py-2.5 rounded-[8px] overflow-hidden ${
                      checkBtn == index &&
                      "!bg-[#F5EFFD] border-gray-400 border-solid border"
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
                      className="w-full text-left block p-1 font-satoshi_medium"
                    >
                      {item.languageName}
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-0">
        <AccordionTrigger className="flex items-center no-underline hover:no-underline">
          <div className="flex items-center">
            <i className="mr-2 w-[20px] block text-center">
              <Image
                src={assets.currencyIcon}
                alt=""
                width={10}
                height={24}
                className="mx-auto"
              />
            </i>
            <span className="inline-block text-[16px]  font-satoshi_medium">
              USD
            </span>
          </div>
          <i>
            <ChervonDown />
          </i>
        </AccordionTrigger>
        <AccordionContent className="py-2">
          <div>
            <RadioGroup
              defaultValue="comfortable"
              className="flex flex-wrap gap-0 m-[-8px] h-[288px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin"
            >
              {currencyList.map((item, index) => (
                <div
                  className="flex items-center w-full p-2 relative"
                  key={index}
                >
                  <div
                    className={`{ relative w-full bg-gray-50 px-2 py-2.5 rounded-[8px] ${
                      checkBtn == index &&
                      "!bg-[#F5EFFD] border-gray-400 border-solid border"
                    } `}
                    onClick={() => handelCheck(index)}
                  >
                    <RadioGroupItem
                      value={`${index + 1}`}
                      id={`${index + 1}`}
                      className="absolute w-full h-full left-0 top-0 appearance-none opacity-0 data-[state=checked]:bg-[#F5EFFD] data-[state=checked]:opacity-1"
                    />
                    <Label
                      htmlFor={`${index + 1}`}
                      className="w-full text-center block p-1 font-satoshi_medium"
                    >
                      {item.currencyName}
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
