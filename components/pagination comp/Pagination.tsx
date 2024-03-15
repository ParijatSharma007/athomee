// import * as React from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// export default function BasicPagination({ totalResData, handleChange }: any) {
//   console.log("🚀 ~ BasicPagination ~ totalResData:", totalResData?.pages);

//   return (
//     <Stack spacing={2}>
//       <Pagination count={totalResData?.pages} onChange={handleChange} />
//     </Stack>
//   );
// }

"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
interface TotalResData {
  pages: number;
  currentPage: number;
}

interface BasicPaginationProps {
  totalResData: any;
  handleChange: any;
}

export function BasicPagination({
  totalResData,
  handleChange,
}: BasicPaginationProps) {
  console.log("🚀 ~ totalResDataasdasd:", totalResData?.page);
  return (
    <Pagination
      // count={totalResData.pages}
      // page={totalResData.page}
      onChange={handleChange}
      className="pagination"
    >
      <PaginationContent>
        <PaginationItem>
          {totalResData.page === 1 ? (
            <PaginationPrevious />
          ) : (
            <PaginationPrevious
              href="#"
              onClick={() =>
                handleChange(
                  {} as React.ChangeEvent<unknown>,
                  Math.max(1, totalResData.page - 1)
                  
                )
                
              }
              className="!text-gray-400"
            />
          )}
        </PaginationItem>
        {[...Array(Math.min(totalResData.pages, 5))].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              isActive={index + 1 === totalResData.page} 
              className={index + 1 === totalResData.page ? ' bg-gray-900 text-white w-[32px] h-[32px] rounded-full p-0 flex items-center justify-center': 'w-[32px] h-[32px] rounded-full p-0 flex items-center justify-center'}
              onClick={(event) => handleChange(event, index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalResData.pages > 5 && (
          <>
            {totalResData.page > 3 && <PaginationEllipsis />}
            {[
              ...Array(Math.min(totalResData.pages - totalResData.page + 2, 3)),
            ].map((_, index) => (
              <PaginationItem key={index + totalResData.page}>
                <PaginationLink
                  href="#url"
                  isActive={index + totalResData.page === totalResData.page}
                  className={index + totalResData.page === totalResData.page ? ' bg-gray-900 text-white w-[32px] h-[32px] rounded-full p-0 flex items-center justify-center': 'w-[32px] h-[32px] rounded-full p-0 flex items-center justify-center'}
                  onClick={(event) =>
                    handleChange(event, index + totalResData.page)
                  }

                >
                  {index + totalResData.page}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalResData.page < totalResData.pages - 2 && (
              <PaginationEllipsis />
            )}
          </>
        )}
        <PaginationItem>
          {totalResData.page === totalResData.pages ? (
            <PaginationNext />
          ) : (
            <PaginationNext
              href="#url"
              onClick={() =>
                handleChange(
                  {} as React.ChangeEvent<unknown>,
                  Math.min(totalResData.pages, totalResData.page + 1)
                )
              }
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
