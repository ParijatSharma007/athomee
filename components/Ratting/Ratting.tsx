"use client";

import RatingFill from "@/json/icons/RatingFill";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export interface StarRatingProps {
  totalStars: number;
  className?: string;
  prevRating?: number;
  disablePointer?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars,
  className,
  prevRating,
  disablePointer,
}) => {
  const [rating, setRating] = useState<number>(prevRating ? prevRating : 0);

  const handleStarClick = (starIndex: number): void => {
    setRating(starIndex + 1);
  };
  console.log("disablePointer", disablePointer);
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => {
            if (!disablePointer) {
              handleStarClick(index);
            }
          }}
          style={{
            cursor: !disablePointer ? "pointer" : "",
          }}
        >
          {index <= rating ? (
            <RatingFill
              fill={"rgba(255, 191, 71, 1)"}
              style={{
                cursor: !disablePointer ? "pointer" : "",
              }}
            />
          ) : (
            <RatingFill
              fill={"transparent"}
              style={{
                cursor: !disablePointer ? "pointer" : "",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
