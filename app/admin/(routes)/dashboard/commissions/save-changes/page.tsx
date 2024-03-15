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
import { invoices8, invoices9 } from "@/json/mock/tableData.mock";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
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
    <div className="py-10">
      <Container>
        <CommonHeader
          title="Commission rate"
          className="mb-8 md:text-[24px] lg:mb-4"
        />
        <div className="py-6 px-8 rounded-xl bg-white cmn_box border border-gray-50 mb-8 md:px-4">
          <h3 className=" text-base font-satoshi_medium mb-2">
            Default commission rate
          </h3>
          <div className="flex items-center flex-wrap">
            <div className="relative max-w-[300px] mb-1 basis-[300px] md:max-w-full md:basis-full">
              <CommonInput placeholderLabel="Refund amount" />
              <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                <PercentageIcon />
              </i>
            </div>
            <div className="basis(calc-300px) pl-4 md:basis-full md:pl-0">
              <Button variant="default" className="md:w-full md:mt-2">
                Save changes
              </Button>
            </div>
          </div>

          <p className=" text-[12px] text-gray-400 md:mt-2 md:text-center">
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
                <Button variant="default" className="ml-auto md:ml-0 md:mt-3">
                  Save changes
                </Button>
              </div>
              <TableComponent
                theadList={tableHeadListForServices}
                tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
                className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
              >
                {invoices9.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base xl:!min-w-[300px] ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.vendor_image}
                            alt="image"
                            width={32}
                            height={32}
                          />
                        </figure>
                        <p className="ml-3">{invoice?.vendor_name}</p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.category_type}
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="relative max-w-[86px] mb-1">
                        <CommonInput
                          value={invoice?.rate}
                          className="pt-0 h-[46px]"
                        />
                        <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                          <PercentageIcon />
                        </i>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.date}
                    </TableCell>

                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
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
                {invoices9.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base xl:!min-w-[300px] ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.vendor_image}
                            alt="image"
                            width={32}
                            height={32}
                          />
                        </figure>
                        <p className="ml-3">{invoice?.vendor_name}</p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.category_type}
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="relative max-w-[86px] mb-1">
                        <CommonInput
                          value={invoice?.rate}
                          className="pt-0 h-[46px]"
                        />
                        <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                          <PercentageIcon />
                        </i>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.date}
                    </TableCell>

                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
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
                {invoices9.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base xl:!min-w-[300px] ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.vendor_image}
                            alt="image"
                            width={32}
                            height={32}
                          />
                        </figure>
                        <p className="ml-3">{invoice?.vendor_name}</p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.category_type}
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="relative max-w-[86px] mb-1">
                        <CommonInput
                          value={invoice?.rate}
                          className="pt-0 h-[46px]"
                        />
                        <i className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                          <PercentageIcon />
                        </i>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      {invoice?.date}
                    </TableCell>

                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                        invoices8?.length - 1 === index && "border-0"
                      }`}
                    >
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableComponent>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
}
