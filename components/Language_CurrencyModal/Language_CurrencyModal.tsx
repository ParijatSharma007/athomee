"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlobeIcon from "@/json/icons/GlobeIcon";
export default function Language_CurrencyModal() {
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

  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (index: number) => {
    setCheckBtn(index);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-0 h-auto p-0">
            <GlobeIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl">
              Language and currency
            </DialogTitle>
          </DialogHeader>
          <div className="relative px-10 pb-6">
            <div className="flex items-center space-x-2 py-6">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full flex justify-start items-center border-gray-200 border-solid border-b">
                  <TabsTrigger value="account" className="mr-6 py-4">
                    Language
                  </TabsTrigger>
                  <TabsTrigger value="currency" className="mr-6 py-4">
                    Currency
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="py-6">
                  <RadioGroup
                    defaultValue="comfortable"
                    className="flex flex-wrap gap-0 m-[-8px] h-[288px] items-start overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] "
                  >
                    {languageList.map((item, index) => (
                      <div className=" w-1/5 p-2 relative" key={index}>
                        <div
                          className={`{ relative w-full bg-gray-50 px-4 py-2.5 rounded-[8px] overflow-hidden ${
                            checkBtn == index
                              ? "!bg-[#F5EFFD] border-gray-400 border-solid border"
                              : " border-transparent border-solid border"
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
                            className="w-full text-center block p-1 font-satoshi_medium"
                          >
                            {item.languageName}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </TabsContent>
                <TabsContent value="currency" className="py-6">
                  <RadioGroup
                    defaultValue="comfortable"
                    className="flex flex-wrap gap-0 m-[-8px] h-[288px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] "
                  >
                    {currencyList.map((item, index) => (
                      <div
                        className="flex items-center w-1/5 p-2 relative"
                        key={index}
                      >
                        <div
                          className={`{ relative w-full bg-gray-50 px-2 py-2.5 rounded-[8px] ${
                            checkBtn == index
                              ? "!bg-[#F5EFFD] border-gray-400 border-solid border"
                              : " border-transparent border-solid border"
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
                </TabsContent>
              </Tabs>
            </div>
            <div className="realative w-full border-gray-200 border-solid border-t">
              <Button
                type="button"
                className="w-full rounded-[50px] hover:bg-secondary"
              >
                Set preferences
              </Button>
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
