import { TableCell, TableRow } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  subtext: string;
}

const DataTableMessage = (
  props: Props = {
    text: "It&apos;s still empty here...",
    subtext: "There are no users registered yet",
  }
) => {
  const { text, subtext } = props;
  return (
    <TableRow>
    <TableCell colSpan={8}>
    <div className="w-full text-center py-20 md:py-10">
      <h2 className="text-[18px] text-gray-900 mb-2">
       {text}
      </h2>
      <p className="text-[16px] text-gray-500">
        {subtext}
      </p>
    </div>
    </TableCell>
    </TableRow>
    // <div className="w-full text-center py-20 md:py-10">
    //   <h2 className="text-[18px] text-gray-900 mb-2">{text}</h2>
    //   <p className="text-[16px] text-gray-500">{subtext}</p>
    // </div>
  );
};

export default DataTableMessage;
