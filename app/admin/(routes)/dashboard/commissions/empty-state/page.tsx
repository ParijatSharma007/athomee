/* eslint-disable react/no-unescaped-entities */
"use client";
import AddCustomRateModal from "@/components/AddCustomRateModal/AddCustomRateModal";
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import CommonInput from "@/components/CommonInput/CommonInput";
import Container from "@/components/Container";
import TableComponent from "@/components/TableComponent/TableComponent";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
import PercentageIcon from "@/json/icons/PercentageIcon";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
interface popoverProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  classNamePopoverContent?: string;
}
const PopOverComponent = ({
  label,
  children,
  className,
  classNamePopoverContent,
}: popoverProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover>
      <PopoverTrigger asChild className={cn("w-auto", className)}>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          disabled={open}
          className=" bg-gray-100 border-0 min-w-[120px]"
        >
          {label}
          <i className="inline-flex items-center justify-center ml-2">
            {open ? (
              <ChevronUp height={16} width={16} />
            ) : (
              <ChevronDown height={16} width={16} />
            )}
          </i>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-full max-w-[384px] sm:!max-w-[95vw] sm:!min-w-[95vw] bg-white rounded-xl border-none shadow-[1px_1px_30px_10px_rgba(0,0,0,0.07)]",
          classNamePopoverContent
        )}
        align={"start"}
        onInteractOutside={() => setOpen(false)}
      >
        <div>{children}</div>
      </PopoverContent>
    </Popover>
  );
};

export default function page() {
  const tableHeadListForServices = [
    "User / Services",
    "Type / Category",
    "Commission rate",
    "Last updated",
    "",
  ];

  const select4 = [
    {
      itemPara: "Individual vendors",
    },
    {
      itemPara: "Company vendors",
    },
  ];

  const select5 = [
    {
      itemPara: "Credit card",
    },
    {
      itemPara: "Bank account",
    },
    {
      itemPara: "PayPal",
    },
  ];
  return (
    <div className="py-10 md:py-[30px]">
      <Container>
        <CommonHeader
          title="Commission rate"
          className="mb-8 lg:text-[36px] md:text-[24px] lg:mb-4"
        />
        <div className="py-6 px-8 rounded-xl bg-white cmn_box border border-gray-50 mb-8 md:px-4">
          <h3 className=" text-base font-satoshi_medium mb-2">
            Default commission rate
          </h3>
          <div className="relative max-w-[300px] mb-1 md:max-w-full">
            <CommonInput placeholderLabel="Refund amount" />
            <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
              <PercentageIcon />
            </i>
          </div>
          <p className=" text-[12px] text-gray-400">
            This commission rate applied to all services and users.
          </p>
        </div>
        <div className="flex items-center justify-between flex-wrap mb-8">
          <div className="lg:mb-3">
            <h3 className=" text-[24px] mb-2">Customized rates</h3>
            <p className="text-gray-500">
              Customized rates allow you to override the default rate for
              specific users and services.
            </p>
          </div>
          <AddCustomRateModal />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap items-center justify-start mb-4">
            <TabsTrigger
              value="all"
              className="pb-6 text-base rounded-none mr-6 text-gray-900"
            >
              All&nbsp;
              <span className="text-sm text-gray-400">(7)</span>
            </TabsTrigger>

            <TabsTrigger
              value="users"
              className="pb-6 text-base rounded-none mr-6 text-gray-900"
            >
              Users&nbsp;
              <span className="text-sm text-gray-400">(5)</span>
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="pb-6 text-base rounded-none  text-gray-900"
            >
              Services&nbsp;
              <span className="text-sm text-gray-400">(2)</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="relative">
              <div className="flex items-center flex-wrap mb-4">
                <PopOverComponent
                  label="Category"
                  className="mr-4 md:mr-[2px]"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Status
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select5?.map((item, index) => (
                          <li key={index} className="py-2">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Checkbox
                                id={`${item.itemPara}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={`${item.itemPara}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.itemPara}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Commission rate"
                  className="mr-4 md:mr-0"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Status
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select4?.map((item, index) => (
                          <li key={index} className="py-2">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Checkbox
                                id={`${item.itemPara}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={`${item.itemPara}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.itemPara}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
              </div>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                <TableRow>
                  <TableCell
                    colSpan={tableHeadListForServices?.length}
                    align="center"
                    className="py-[135px]"
                  >
                    <h6 className="text-[18px] mb-4 font-satoshi_medium">
                      There is no set up custom rate!
                    </h6>
                    <p className=" text-gray-500 text-base max-w-[295px]">
                      Once the custom commission rates are set up, they'll be
                      listed right here.
                    </p>
                  </TableCell>
                </TableRow>
              </TableComponent>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <div className="relative">
              <div className="flex items-center flex-wrap mb-4">
                <PopOverComponent
                  label="Category"
                  className="mr-4 md:mr-[2px]"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Status
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select5?.map((item, index) => (
                          <li key={index} className="py-2">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Checkbox
                                id={`${item.itemPara}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={`${item.itemPara}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.itemPara}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Commission rate"
                  className="mr-4  md:mr-0"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Status
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select4?.map((item, index) => (
                          <li key={index} className="py-2">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Checkbox
                                id={`${item.itemPara}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={`${item.itemPara}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.itemPara}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
              </div>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                <TableRow>
                  <TableCell
                    colSpan={tableHeadListForServices?.length}
                    align="center"
                    className="py-[135px]"
                  >
                    <h6 className="text-[18px] mb-4 font-satoshi_medium">
                      There is no set up custom rate!
                    </h6>
                    <p className=" text-gray-500 text-base max-w-[295px]">
                      Once the custom commission rates are set up, they'll be
                      listed right here.
                    </p>
                  </TableCell>
                </TableRow>
              </TableComponent>
            </div>
          </TabsContent>
          <TabsContent value="services">
            <div className="relative">
              <div className="flex items-center flex-wrap mb-4">
                <PopOverComponent
                  label="Category"
                  className="mr-4 md:mr-[2px]"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Status
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select5?.map((item, index) => (
                          <li key={index} className="py-2">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Checkbox
                                id={`${item.itemPara}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={`${item.itemPara}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.itemPara}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
                <PopOverComponent
                  label="Commission rate"
                  className="mr-4 md:mr-0"
                  classNamePopoverContent="min-w-[385px]"
                >
                  <div className="pb-[60px]">
                    <h5 className=" text-base font-satoshi_medium text-gray-900 mb-4">
                      Status
                    </h5>
                    <div className="h-auto">
                      <ul className="">
                        {select4?.map((item, index) => (
                          <li key={index} className="py-2">
                            {/* <SelectItem value={item?.eachSubListItem}> */}
                            <div
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Checkbox
                                id={`${item.itemPara}`}
                                className="checkBox border-gray-200 rounded-[4px]"
                                icon={<CheckboxTickIcon />}
                              />
                              <label
                                htmlFor={`${item.itemPara}`}
                                className="text-base font-satoshi_regular text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item?.itemPara}
                              </label>
                            </div>
                            {/* </SelectItem> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-0 hover:bg-black hover:text-white"
                          >
                            Clear all
                          </Button>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
                          >
                            Show results
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopOverComponent>
              </div>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                <TableRow>
                  <TableCell
                    colSpan={tableHeadListForServices?.length}
                    align="center"
                    className="py-[135px]"
                  >
                    <h6 className="text-[18px] mb-4 font-satoshi_medium">
                      There is no set up custom rate!
                    </h6>
                    <p className=" text-gray-500 text-base max-w-[295px]">
                      Once the custom commission rates are set up, they'll be
                      listed right here.
                    </p>
                  </TableCell>
                </TableRow>
              </TableComponent>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
}
