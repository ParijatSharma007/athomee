"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

interface customTableProps {
  theadList: string[];
  children?: React.ReactNode;
  isFooter?: boolean;
  isTableCaption?: string;
  tableHeadClassName?: string;
  className?: string;
  tableBodyClassName?: string;
}

export default function TableComponent({
  theadList,
  children,
  isFooter,
  isTableCaption,
  tableHeadClassName,
  className,
  tableBodyClassName,
}: customTableProps) {
  return (
    <Table className={cn("w-full", className)}>
      {isTableCaption && <TableCaption>{isTableCaption}</TableCaption>}

      <TableHeader>
        <TableRow className="border-gray-100">
          {theadList?.map((item, index) => (
            <TableHead
              className={cn(
                `w-auto ${
                  index === 0
                    ? "rounded-tl-xl"
                    : index === theadList?.length - 1
                    ? "rounded-tr-xl"
                    : ""
                }`,
                tableHeadClassName
              )}
              key={index}
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
      {isFooter && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
