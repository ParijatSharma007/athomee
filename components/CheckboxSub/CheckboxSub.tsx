import { Checkbox } from "@/components/ui/checkbox";
import * as React from "react";

interface CheckboxProps {
  children?: React.ReactNode;
  onClick?: any;
  checked: boolean;
}
function CheckboxSub({ children, onClick = () => {}, checked }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2 checked_input_bg">
      <Checkbox
        id="terms2"
        className="border-[var(--colorD0D5DD)] rounded-[4px]"
        checked={checked}
        onClick={onClick}
      />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-5"
      >
        {children}
      </label>
    </div>
  );
}

export default CheckboxSub;
