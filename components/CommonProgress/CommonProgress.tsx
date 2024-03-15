import { Progress } from "@/components/ui/progress";
import React from "react";

interface ProgressValue {
  valueProgress: number | null | undefined;
  customClass?: string;
}
function CommonProgress({ valueProgress, customClass }: ProgressValue) {

  return (
    <Progress
      className={`h-[9px] md:h-[6px] ease-in delay-1000 duration-1000 ${customClass}`}
      value={valueProgress}
    />
  );
}

export default CommonProgress;
