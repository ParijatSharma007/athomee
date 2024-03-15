import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import PaginationArrow2 from "@/json/icons/PaginationArrow2";
import PaginationArrow1 from "@/json/icons/PaginationArrow1";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

interface PaginationLinkProps extends Pick<ButtonProps, "size"> {
  isActive?: boolean;
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps & React.ComponentProps<"a">>(({
  isActive,
  size,
  ...props
}, ref) => (
  <a
    ref={ref}
   
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      "text-gray-400 text-sm !outline-none w-[32px] h-[32px] rounded-full p-0 flex items-center justify-center !border-[0]"
    )}
    {...props}
  />
));
PaginationLink.displayName = "PaginationLink";


interface pagpropsPrev extends React.ComponentProps<typeof PaginationLink> {

}

const PaginationPrevious = React.forwardRef<HTMLAnchorElement, pagpropsPrev & React.ComponentProps<"a">>(({
  className,
  ...props
}, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1  w-[32px] h-[32px] flex items-center justify-center mr-2", className)}
    {...props}
  >
    <PaginationArrow1 />
    {/* <span>Previous </span> */}
  </PaginationLink>
));
PaginationPrevious.displayName = "PaginationPrevious";

interface pagePropsNext extends React.ComponentProps<typeof PaginationLink> {

}
const PaginationNext = React.forwardRef<HTMLAnchorElement, pagePropsNext & React.ComponentProps<"a">>(({
  className,
  ...props
 },ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 w-[32px] h-[32px] flex items-center justify-center ml-2", className)}
    {...props}
  >
    {/* <span>Next</span> */}
    <PaginationArrow2 />
  </PaginationLink>
))
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
