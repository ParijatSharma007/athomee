import PaginationArrow1 from "@/json/icons/PaginationArrow1";
import PaginationArrow2 from "@/json/icons/PaginationArrow2";
import { Button } from "../ui/button";

export default function CommonPagination() {
  return (
    <div className="relative">
      <ul className="flex flex-wrap items-center justify-center">
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-transparent transition-all w-[40px] h-[40px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            <PaginationArrow1 />
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-gray-900 transition-all text-gray-400 w-[40px] h-[40px] p-0 rounded-full hover:bg-gray-900 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            1
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] p-0 rounded-full hover:bg-gray-900 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            2
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] p-0 rounded-full hover:bg-gray-900 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            3
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] p-0 rounded-full hover:bg-gray-900 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            4
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] p-0 rounded-full hover:bg-gray-900 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            5
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] p-0 rounded-full hover:bg-gray-900 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            ...
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 sm:pr-[3px]">
          <Button
            type="button"
            className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] p-0 rounded-full hover:bg-gray-900 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            23
          </Button>
        </li>
        <li className="px-1.5 md:pl-0 ">
          <Button
            type="button"
            className="bg-transparent transition-all w-[40px] h-[40px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white md:w-[27px] md:h-[27px] md:text-[12px]"
          >
            <PaginationArrow2 />
          </Button>
        </li>
      </ul>
    </div>
  );
}
