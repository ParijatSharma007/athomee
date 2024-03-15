import React from "react";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import CheapButtons from "../CheapButtons/CheapButtons";
import moment from "moment";
import TableComponent from "../TableComponent/TableComponent";
import DataTableMessage from "../DataTableMessage/DataTableMessage";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import assets from "@/json/assets";
import {
  capitalizeFirstLetter,
  covertISOFormateToReadableFormat,
} from "@/lib/utils";
import { ServiceInfo } from "@/json/typescript/services";
import DeleteServiceModal from "../DeleteServiceModal/DeleteServiceModal";
interface Props {
  showableList: ServiceInfo[];
  isDataFetching: boolean; 
}
const tableHeadListForServices = [
  "Category",
  "Service",
  "Vendor",
  "Publication date",
  "Price",
  "",
];
const AllServiceVendorsComponent = ({
  showableList,
  isDataFetching, 
}: Props) => {
  return (
    <>
      {isDataFetching ? (
        <DataTableMessage text="Loading..." subtext="Please wait..." />
      ) : (
        <>
          {showableList?.length ? (
            <>
              {showableList?.map((invoice, index) => {
                return (
                  <TableRow key={invoice?._id}>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        showableList?.length - 1 === index && "border-0"
                      }`}
                    >
                      {capitalizeFirstLetter(invoice?.category_title)}
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        showableList?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={
                              invoice?.images[0]
                                ? invoice?.images[0]
                                : assets?.decline_btn
                            }
                            alt="image"
                            width={56}
                            height={40}
                          />
                        </figure>
                        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                          {invoice?.title}
                        </p>
                        <p className="text-gray-400 ml-3">
                          ({invoice?.packages?.length})
                        </p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoice?.packages?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <figure>
                          <Image
                            src={invoice?.vendor_data?.profilePicture  
                                ? invoice?.vendor_data?.profilePicture
                                : assets?.noProfileImgFound1}
                            // src={invoice?.profilePicture}
                            alt="image"
                            width={32}
                            height={32}
                          />
                        </figure>
                        <p className="ml-3">
                          {invoice?.vendor_data?.firstName}{" "}
                          {invoice?.vendor_data?.lastName
                            .charAt(0)
                            ?.toUpperCase()}
                          .
                        </p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoice?.packages?.length - 1 === index && "border-0"
                      }`}
                    >
                      {covertISOFormateToReadableFormat(
                        invoice?.createdAt,
                        "MMM DD, YYYY"
                      )}
                      <p className="text-sm text-gray-500">
                        {covertISOFormateToReadableFormat(
                          invoice?.createdAt,
                          "hh:mm A"
                        )}
                      </p>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                        invoice?.packages?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        {invoice.packages_data?.map((item, index) => (
                          <p key={index}>
                            {index !== invoice?.packages_data?.length - 1
                              ? `$${item.rate},`
                              : `$${item.rate}`}
                          </p>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell
                      className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                        invoice?.packages?.length - 1 === index && "border-0"
                      }`}
                    >
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          className="mr-2 border-gray-200"
                        >
                          Edit
                        </Button>
                        <div>
                          {/* <DeleteServiceModal /> */}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </>
          ) : null}
        </>
      )}

      {!isDataFetching && !showableList?.length ? (
        <DataTableMessage
          text="It's still empty here..."
          subtext="There are currently no results for your request."
        />
      ) : null}
    </>
  );
};

export default AllServiceVendorsComponent;
