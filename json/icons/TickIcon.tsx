import { customIconProps } from "../typescript/commonAllInterfaces";

export default function TickIcon({
  IconColor,
  IconHEight,
  IconWidth,
}: customIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "20"}
      height={IconHEight ? IconHEight : "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.6666 5.83337L7.49992 14.1667L3.33325 10.3788"
        stroke={IconColor ? IconColor : "#131316"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
