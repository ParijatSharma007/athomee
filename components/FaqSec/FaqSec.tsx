/* eslint-disable react/no-unescaped-entities */
"use client";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Link from "next/link";
import Container from "../Container";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { TriggerAccordion } from "./TriggerAccordion";

interface accoritemProps {
  title: string;
  description: string;
  indexNumber?: number;
}

// const TriggerAccordion = ({ description, title }: accoritemProps) => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <>
//       <AccordionTrigger
//         onClick={() => setOpen((data) => !data)}
//         className="text-gray-900 text-lg hover:no-underline hover:text-secondary"
//       >
//         {title}
//         {open ? <MinusIcon /> : <AddIcon />}
//       </AccordionTrigger>
//       <AccordionContent className="text-gray-600 text-base max-w-[720px]">
//         {description}
//       </AccordionContent>
//     </>
//   );
// };

// const AccordionItems = ({
//   description,
//   indexNumber,
//   title,
// }: accoritemProps) => {
//   return (
//     // <AccordionItem
//     //   value={`item-${indexNumber! + 1}`}
//     //   key={indexNumber}
//     //   id={indexNumber?.toString() || ("" as string)}
//     // >
//     <TriggerAccordion title={title} description={description} />
//     // </AccordionItem>
//   );
// };

export default function FaqSec() {
  const accorList = [
    {
      title: "Is there a free trial available?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "What is your cancellation policy?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can other info be added to an invoice?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How do I change my account email?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];
  return (
    <div className="py-[80px] md:py-[30px] ">
      <Container>
        <div className="flex flex-wrap flex-row">
          <div className=" basis-[448px] w-[448px] lg:basis-full lg:w-full lg:mb-4">
            <h3>FAQs</h3>
            <p>Everything you need to know about the product and billing.</p>
          </div>
          <div className="basis-[calc(100%-448px)] pl-16 lg:basis-full lg:w-full lg:pl-0">
            <Accordion type="single" collapsible className="w-full">
              {accorList?.map((item, index) => (
                <AccordionItem
                  value={`item-${index! + 1}`}
                  key={index}
                  className="border-0"
                >
                  <TriggerAccordion {...item} indexNumber={index} key={index} />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="bg-card_yellow p-8 mt-20 md:px-3 rounded-xl flex flex-wrap justify-between md:mt-12 md:justify-center">
          <div className="lg:mb-4 md:text-center">
            <h4 className="mb-4">Still have questions?</h4>
            <p className="text-base text-gray-600">
              Can&#39;t find the answer you&#39;re looking for? Please chat{" "}
              <Link
                href="mailto: help@casacall.com"
                className="text-gray-900 underline font-satoshi_medium hover:text-secondary"
              >
                help@casacall.com
              </Link>
              to our friendly team.
            </p>
          </div>
          <div className="md:text-center">
            <Button variant="default" className="md:mx-auto">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
