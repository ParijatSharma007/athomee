"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface customCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  icon?: React.ReactNode;
  checked: boolean;
  value: string;
  handleChange: any;
}

const CustomCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  customCheckboxProps
>(
  (
    { className, children, icon, checked, value, handleChange, ...props },
    ref
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded border border-gray-200 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:border-gray-900",
        className
      )}
      {...props}
      checked={checked}
      onClick={() => handleChange(value)}
    >
      {children}
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        {icon || <Check height={12} width={12} />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);
CustomCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { CustomCheckbox };
