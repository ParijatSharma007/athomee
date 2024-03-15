import React, { memo } from "react";
import TableComponent from "../TableComponent/TableComponent";
import { AdminClientpayouts } from "@/typescript/Interfaces/adminClientpayout.interface";
import { TableCell, TableRow } from "../ui/table";
import dayjs from "dayjs";
import MasterIcon from "@/json/icons/MasterIcon";
import PaypalIcon from "@/json/icons/PaypalIcon";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { BasicPagination } from "../pagination comp/Pagination";

const Payouts = ({
  clientpayoutlist,
  handleChangePagination,
}: any) => {
  const tableHeadList = [
    "Date",
    "Withdrawal type",
    "Amount",
    "Transaction ID",
    "",
  ];
  return (
    <div>
      <TableComponent
        theadList={tableHeadList}
        tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
        className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
      >
        {clientpayoutlist?.data?.length > 0 ? (
          clientpayoutlist?.data?.map(
            (invoice: AdminClientpayouts, index: number) => (
              <TableRow key={index}>
                <TableCell
                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                    clientpayoutlist?.data?.length - 1 === index && "border-0"
                  }`}
                >
                  {/* {invoice.date} */}
                  {dayjs(invoice.date).format("MMM DD, YYYY")}
                </TableCell>
                <TableCell
                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                    clientpayoutlist?.data?.length - 1 === index && "border-0"
                  }`}
                >
                  {invoice.payment_method_details?.email}
                  <p className="flex items-center text-[12px]">
                    {invoice?.payment_method_details?.type}{" "}
                    <span className="inline-flex items-center justify-center ml-2">
                      {/* {invoice?.withdrawl_icon} */}
                      {invoice?.payment_method_details?.type ===
                      "credit_card" ? (
                        <>
                          <MasterIcon />
                        </>
                      ) : null}
                      {invoice?.payment_method_details?.type === "PayPal" ? (
                        <>
                          <PaypalIcon />
                        </>
                      ) : null}
                      {invoice?.payment_method_details?.type ===
                      "bank_account" ? (
                        <>
                          <MasterIcon />
                        </>
                      ) : null}
                      {/* <PaypalIcon /> */}
                    </span>{" "}
                  </p>
                </TableCell>
                <TableCell
                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                    clientpayoutlist?.data?.length - 1 === index && "border-0"
                  }`}
                >
                  ${invoice?.amount}
                </TableCell>
                <TableCell
                  className={`border-b border-gray-100 py-4 px-[20px] text-base ${
                    clientpayoutlist?.data?.length - 1 === index && "border-0"
                  }`}
                >
                  {invoice.transaction_id}
                </TableCell>
                <TableCell
                  className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
                    clientpayoutlist?.data?.length - 1 === index && "border-0"
                  }`}
                >
                  <Button variant="outline" className="border-gray-200">
                    Download invoice
                  </Button>
                </TableCell>
              </TableRow>
            )
          )
        ) : (
          <></>
        )}

        {}
      </TableComponent>
      {/* <div className="mt-6">
                            <CommonPagination />
                          </div> */}
      {clientpayoutlist?.data?.length > 0 ? (
        <>
          <div className="mt-6">
            {/* <CommonPagination /> */}
            <BasicPagination
              totalResData={clientpayoutlist}
              handleChange={handleChangePagination}
            />
          </div>
        </>
      ) : (
        <>
          {" "}
          <TableRow>
            <TableCell
              colSpan={tableHeadList?.length}
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
    </div>
  );
};

export default memo(Payouts);
