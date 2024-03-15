import { Input } from "@/components/ui/input";
import SearchIcon from "@/json/icons/SearchIcon";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

interface InputProps {
  className?: string;
  placeholderText?: string;
  searchIcon?: React.ReactNode;
  classNameForSearchIcon?: string;
  classNameForInput?: string;
  searcIconInStart?: boolean;
  searchValue?: string;
  setSearchValue?: any;
  handleTabClick?: any;
  onInputChange?: any;
}
// flex items-center flex-wrap py-4 px-4 max-w-[400px] bg-gray-100 rounded-xl mx-auto
export default memo(function SerachInputComponent({
  className,
  placeholderText,
  searchIcon,
  classNameForSearchIcon,
  classNameForInput,
  searcIconInStart,
  searchValue,
  setSearchValue,
  onInputChange = () => {},
  handleTabClick,
}: InputProps) {
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };
  return (
    <div
      className={cn(
        "flex items-center flex-wrap py-4 px-4 max-w-[400px] lg:max-w-full bg-gray-100 rounded-xl mx-auto",
        className
      )}
    >
      {searcIconInStart && (
        <i
          className={cn(
            "inline-flex items-center justify-center pr-4 basis-[40px]",
            classNameForSearchIcon
          )}
        >
          {searchIcon || <SearchIcon />}
        </i>
      )}
      <Input
        type="text"
        placeholder={placeholderText || "Search"}
        className={cn(
          "border-0 h-6 rounded-none bg-inherit basis-[calc(100%-40px)]",
          classNameForInput
        )}
        value={searchValue}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
      {!searcIconInStart && (
        <i
          className={cn(
            "inline-flex items-center justify-center pl-4 basis-[40px]",
            classNameForSearchIcon
          )}
        >
          {searchIcon || <SearchIcon />}
        </i>
      )}
    </div>
  );
})
