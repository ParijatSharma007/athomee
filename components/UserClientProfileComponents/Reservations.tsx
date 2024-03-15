import React, { memo } from "react";
import TableComponent from "../TableComponent/TableComponent";
import { TableCell, TableRow } from "../ui/table";
import Image from "next/image";
import assets from "@/json/assets";
import dayjs from "dayjs";
import { Badge } from "lucide-react";
import { BasicPagination } from "../pagination comp/Pagination";

const Reservations = ({ clientreservation, handleChangePagination }: any) => {
  const tableHeadListForReservation = [
    "Service",
    "Vendor",
    "Date",
    "Amount",
    "Status",
  ];
  return (
    <>
      <TableComponent
        theadList={tableHeadListForReservation}
        tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
        className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
      >
        {!!clientreservation && clientreservation?.data?.length > 0 ? (
          clientreservation?.data?.map((invoice: any, index: number) => (
            <TableRow key={index}>
              <TableCell
                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                  clientreservation?.length - 1 === index && "border-0"
                }`}
              >
                <div className="flex items-center">
                  <figure>
                    <Image
                      // src={invoice?.service_image}
                      src={
                        invoice?.service_data?.images &&
                        invoice?.service_data?.images[0]
                          ? invoice?.service_data.images[0]
                          : assets.serviceInfoImg
                      }
                      alt="image"
                      width={56}
                      height={40}
                    />
                  </figure>
                  <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
                    {invoice?.service_data?.title}
                  </p>
                </div>
              </TableCell>
              <TableCell
                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                  clientreservation?.data?.length - 1 === index && "border-0"
                }`}
              >
                <div className="flex items-center">
                  <figure>
                    <Image
                      src={invoice?.vendor_data?.profilePicture}
                      alt="image"
                      width={32}
                      height={32}
                    />
                  </figure>
                  <p className="ml-3">
                    {invoice?.vendor_data?.firstName}{" "}
                    {invoice?.vendor_data?.last}
                  </p>
                </div>
              </TableCell>
              <TableCell
                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                  clientreservation?.data?.length - 1 === index && "border-0"
                }`}
              >
                {dayjs(invoice?.date).format("MMM DD, YYYY")}
                <p className="text-sm text-gray-500">
                  {dayjs(invoice?.time, "HH:mm").format("h:mm A")}
                </p>
              </TableCell>
              <TableCell
                className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                  clientreservation?.data?.length - 1 === index && "border-0"
                }`}
              >
                ${invoice.package_price}
              </TableCell>
              <TableCell
                className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                  clientreservation?.data?.length - 1 === index && "border-0"
                }`}
              >
                <Badge
                  className={` 
                  ${
                    invoice?.status === "Requested"
                      ? "bg-yellow-50"
                      : invoice?.status === "Upcoming"
                      ? "bg-[#F5EFFD]"
                      : invoice?.status === "Completed"
                      ? "bg-[#EBFFEB]"
                      : invoice?.status === "Declined"
                      ? "bg-gray-50"
                      : invoice?.status === "Canceled"
                      ? "bg-red-50"
                      : ""
                  }
                  
                  ml-3 ${
                    invoice?.status === "Requested"
                      ? "text-[#F59F00]"
                      : invoice?.status === "Upcoming"
                      ? "text-[#7757BD]"
                      : invoice?.status === "Completed"
                      ? "text-[#04D100]"
                      : invoice?.status === "Declined"
                      ? "text-gray-500"
                      : invoice?.status === "Canceled"
                      ? "text-red-500"
                      : ""
                  } border-[1px] 
                  
                  ${
                    invoice?.status === "Requested"
                      ? "border-yellow-100"
                      : invoice?.status === "Upcoming"
                      ? "border-[#7757BD]"
                      : invoice?.status === "Completed"
                      ? "border-[#87FF85]"
                      : invoice?.status === "Declined"
                      ? "border-gray-200"
                      : invoice?.status === "Canceled"
                      ? "border-red-200"
                      : ""
                  }
                  py-[6px] px-[10px] font-satoshi_medium text-sm`}
                >
                  {invoice?.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <>
            {" "}
            <TableRow>
              <TableCell
                colSpan={tableHeadListForReservation?.length}
                align="center"
                className="py-[135px]"
              >
                <h6 className="text-[18px] mb-4 font-satoshi_medium">
                  No results...
                </h6>
                <p className=" text-gray-500 text-base">
                  There are currently no results for your request.
                </p>
              </TableCell>
            </TableRow>
          </>
        )}
      </TableComponent>
      {!!clientreservation && clientreservation?.data?.length > 0 ? (
        <>
          <div className="mt-6">
            {/* <CommonPagination /> */}
            <BasicPagination
              totalResData={clientreservation}
              handleChange={handleChangePagination}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Reservations);
