"use client";

import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import AddIcon from "@/json/icons/AddIcon";
import MinusIcon from "@/json/icons/MinusIcon";
import { useState } from "react";
// } from "@/components/ui/accordion";

interface accoritemProps {
  title: string;
  description: string;
  indexNumber?: number;
}

export const TriggerAccordion = ({
  description,
  indexNumber,
  title,
}: accoritemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  //   const [btnId, setBtnId] = useState<number | undefined>(0);

  const handleChange = (event: any) => {
    console.log(event.target.getAttribute("data-state"), "value");
    if ("open" == event.target.getAttribute("data-state")) {
      setOpen(true);
    } else {
      console.log("false value");
      setOpen(false);
    }
  };
  return (
    <>
      <AccordionTrigger
        onClick={handleChange}
        className="text-gray-900 text-lg hover:no-underline hover:text-secondary text-left"
        id={indexNumber?.toString()}
      >
        {title}
        {open ? <MinusIcon /> : <AddIcon />}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 text-base max-w-[720px]">
        {description}
      </AccordionContent>
    </>
  );
};
