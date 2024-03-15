"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RightArrowIcon from "@/json/icons/RightArrowIcon";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { languagesList } from "@/lib/languagesList";

export default function ClientProfileLanguageFieldFieldModal({
  clientlangauages = [],
  onUpdateClientLanguages,
}: {
  clientlangauages?: string[];
  onUpdateClientLanguages: (selectedLanguages: string[]) => void;
}) {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setSelectedLanguages(clientlangauages || []);
  }, [clientlangauages]);

  const handleCheckboxChange = (languageCode: string) => {
    console.log("Checkbox clicked for", languageCode);
    // Check if the language is already selected
    const isSelected = selectedLanguages.includes(languageCode);

    if (isSelected) {
      // If selected, remove it from the array
      setSelectedLanguages(
        selectedLanguages.filter((code) => code !== languageCode)
      );
    } else {
      // If not selected, add it to the array
      setSelectedLanguages([...selectedLanguages, languageCode]);
    }
    // onUpdateClientLanguages(selectedLanguages)
  };

  useEffect(() => {
    onUpdateClientLanguages(selectedLanguages);
  }, [selectedLanguages]);

  const filteredLanguages = languagesList.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  console.log("selectedLanguages", selectedLanguages);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="bg-transparent w-full text-left justify-between text-gray-900 font-satoshi_medium p-0 whitespace-normal"
          >
            {selectedLanguages.length > 0
              ? selectedLanguages.join(", ")
              : "Select Languages"}
            <i>
              <RightArrowIcon />
            </i>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px] overflow-hidden">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Languages you speak
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] overflow-hidden md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="p-6 overflow-hidden md:p-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for language"
                  className="bg-[#FAFAFA] border-0 p-4 h-[54px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative px-1 h-[300px] lg:max-h-[200px] md:max-h-[350px] overflow-y-auto pb-6">
                {filteredLanguages.map((language) => (
                  <div
                    key={language.code}
                    className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1"
                  >
                    <label
                      htmlFor={language.code}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {language.name}
                    </label>
                    <Checkbox
                      id={language.code}
                      onClick={() => handleCheckboxChange(language.name)}
                      onChange={() => {}}
                      checked={selectedLanguages.includes(language.name)}
                    />
                  </div>
                ))}

                {/* <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Afrikaans
                  </label>
                  <Checkbox id="1" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Albanian
                  </label>
                  <Checkbox id="2" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="3"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Arabic
                  </label>
                  <Checkbox id="3" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="4"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Armenian
                  </label>
                  <Checkbox id="4" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="5"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Azerbaijani
                  </label>
                  <Checkbox id="5" />
                </div>
                <div className="flex items-center justify-between py-5 border-b border-solid border-gray-200 px-1">
                  <label
                    htmlFor="6"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Afrikaans
                  </label>
                  <Checkbox id="6" />
                </div> */}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
