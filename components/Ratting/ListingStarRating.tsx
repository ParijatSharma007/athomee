"use client";

import RatingFill from "@/json/icons/RatingFill";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export interface StarRatingProps {
  totalStars: number;
  className?: string;
  prevRating?: number;
  ratingset?: any;
}

const ListStarRating: React.FC<StarRatingProps> = ({
  totalStars,
  className,
  prevRating,
  ratingset,
}) => {
  console.log("ratingvalue", ratingset);

  const [rating, setRating] = useState<number>(
    prevRating !== undefined ? prevRating : ratingset ? ratingset : 0
  );

  const handleStarClick = (starIndex: number): void => {
    setRating(starIndex + 1);
  };
  

  return (
    <div className={cn("flex items-center", className)}>
     {[...Array(totalStars)].map((_, index) => (
  <span
    key={index}
    // onClick={() => handleStarClick(index)}
    style={{
      cursor: "pointer",
    }}
  >
    {index < Math.floor(rating) ? (
      <RatingFill fill={"rgba(255, 191, 71, 1)"} />
    ) : index === Math.floor(rating) ? (
      rating % 1 === 0 ? (
        <RatingFill fill={"transparent"} />
      ) : (
        <RatingFill fill={"rgba(255, 191, 71, 0.5)"} />
      )
    ) : (
      <RatingFill fill={"transparent"} />
    )}
  </span>
  ))}

    </div>
)};

export default ListStarRating;
