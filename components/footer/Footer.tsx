/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client";

import assets from "@/json/assets";
import ChervonIconTwo from "@/json/icons/ChervonIconTwo";
import ChervonUp from "@/json/icons/ChervonUp";
import FacebookIcon from "@/json/icons/FacebookIcon";
import LinkdinIcon from "@/json/icons/LinkdinIcon";
import TwitterIcon from "@/json/icons/TwitterIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const footerLinks1 = [
  {
    links: "Discover",
    path: "/",
  },
  {
    links: "Categories",
    path: "/",
  },
  {
    links: "Features",
    path: "/",
  },
  {
    links: "Customer",
    path: "/",
  },
];
const footerLinks2 = [
  {
    links: "Terms and conditions",
    path: "/terms-condition",
  },
  {
    links: "Help",
    path: "/",
  },
];

export default function Footer() {
  const [isFooter, setisFooter] = useState(true);

  const [targetAccBtn, setTargetAccBtn] = useState("sdfdsf");

  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname.includes("message") ||
      pathname.includes("admin") ||
      pathname.includes("auth")
    ) {
      setisFooter(false);
    } else {
      setisFooter(true);
    }
  }, [pathname]);

  const handleAccTrigger = (e: any, triggerValue: string) => {
    if (e.target.dataset.state === "closed") {
      setTargetAccBtn(triggerValue);
    } else {
      setTargetAccBtn("");
    }
  };

  return (
    <>
      {isFooter && (
        <footer className="py-20 md:py-10 bg-[#F4F4F5] ">
          <Container>
            <div className="flex flex-wrap">
              <div className="w-1/2 xl: xl:w-[40%] md:w-full md:mb-3 sm:w-[75%]">
                <Link href="/" className="logo">
                  <Image
                    src={assets?.ftr_logo}
                    alt="logo"
                    width={165}
                    height={32}
                  />
                </Link>
                <p className="pt-5">
                  Any home services from qualified professionals near you.
                </p>
              </div>
              <div className="w-2/5 xl:w-[40%] md:w-full md:mb-3 sm:hidden">
                <div className="flex md:flex-wrap">
                  <div className="w-1/4 md:w-full md:mb-3">
                    <p className="text-xl font-satoshi_medium ">Product</p>

                    <ul>
                      {footerLinks1.map((data, index) => (
                        <li className="pt-9 lg:pt-4" key={index}>
                          <Link
                            href={data.path}
                            className="text-base hover:text-violet-600"
                          >
                            {data.links}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-4/5 md:w-full">
                    <div className="pl-20 md:pl-0">
                      <p className="text-xl font-satoshi_medium">Legal</p>

                      <ul>
                        {footerLinks2.map((data, index) => (
                          <li className="pt-9 lg:pt-4" key={index}>
                            <Link
                              href={data.path}
                              className="text-base hover:text-violet-600"
                            >
                              {data.links}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10%] xl:w-[20%] md:w-full sm:hidden">
                <p className="text-xl font-satoshi_medium ">Socials</p>
                <ul className="flex  pt-9 lg:pt-4 ">
                  <li className="mr-6">
                    <Link
                      href="/"
                      className="hover:scale-105 inline-block transition-all"
                    >
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li className="mr-6">
                    <Link
                      href="/"
                      className="hover:scale-105 inline-block transition-all"
                    >
                      <LinkdinIcon />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:scale-105 inline-block transition-all"
                    >
                      <FacebookIcon />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden sm:block w-full">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger
                      className="flex items-center no-underline hover:no-underline pb-0"
                      onClick={(e) => handleAccTrigger(e, "product")}
                    >
                      <span className="inline-block text-[16px] font-satoshi_medium">
                        Product
                      </span>
                      {targetAccBtn === "product" ? (
                        <i>
                          <ChervonUp />
                        </i>
                      ) : (
                        <i>
                          <ChervonIconTwo />
                        </i>
                      )}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        {footerLinks1.map((data, index) => (
                          <li className="pt-9 md:pt-4" key={index}>
                            <Link
                              href={data.path}
                              className="text-base hover:text-violet-600"
                            >
                              {data.links}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-0">
                    <AccordionTrigger
                      className="flex items-center no-underline hover:no-underline pb-0"
                      onClick={(e) => handleAccTrigger(e, "legal")}
                    >
                      <span className="inline-block text-[16px] font-satoshi_medium">
                        Legal
                      </span>
                      {targetAccBtn === "legal" ? (
                        <i>
                          <ChervonUp />
                        </i>
                      ) : (
                        <i>
                          <ChervonIconTwo />
                        </i>
                      )}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        {footerLinks2.map((data, index) => (
                          <li className="pt-9 md:pt-4" key={index}>
                            <Link
                              href={data.path}
                              className="text-base hover:text-violet-600"
                            >
                              {data.links}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="flex justify-between pt-10 mt-10 border-t border-slate-[#E4E4E7] border-solid sm:flex-col sm:items-center">
              <ul className=" hidden sm:flex mb-4">
                <li className="mr-6">
                  <Link
                    href="/"
                    className="hover:scale-105 inline-block transition-all"
                  >
                    <TwitterIcon />
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    href="/"
                    className="hover:scale-105 inline-block transition-all"
                  >
                    <LinkdinIcon />{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:scale-105 inline-block transition-all"
                  >
                    <FacebookIcon />{" "}
                  </Link>
                </li>
              </ul>
              <p>
                © 2023{" "}
                <Link href="/" className="hover:text-violet-600">
                  Casacall
                </Link>{" "}
                all rights reserved.
              </p>
              <Link
                href="/privacy-policy"
                className="hover:text-violet-600 sm:hidden"
              >
                Privacy Policy
              </Link>
            </div>
          </Container>
        </footer>
      )}
    </>
  );
}
