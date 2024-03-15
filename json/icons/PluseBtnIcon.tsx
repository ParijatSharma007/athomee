import { customIconProps } from "../typescript/commonAllInterfaces";

export default function PluseBtnIcon({
  IconColor,
  IconHEight,
  IconWidth,
  className,
}: customIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : 20}
      height={IconHEight ? IconHEight : 20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0003 4.16675V15.8334M4.16699 10.0001H15.8337"
        stroke={IconColor ? IconColor : "#131316"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
