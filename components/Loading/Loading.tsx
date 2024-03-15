import { CircularProgress } from "@mui/material";
import React from "react";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  needP ?: boolean
}

const small = {
  width: "27px",
  height: "27px",
};
const medium = {
  width: "40px",
  height: "40px",
};
const large = {
  width: "100px",
  height: "100px",
};
export default function Loading({ size , needP = true}: LoadingProps) {
  return (
    <div className="flex justify-center items-center  w-full h-full ">
      <CircularProgress
        sx={{ color: "black" }}
        style={
          size === "small"
            ? small
            : size === "medium"
            ? medium
            : size === "large"
            ? large
            : {}
        }
      />

      {needP && <p className="pl-3">Loading...</p>}
    </div>
  );
}
