interface icon {
  fill: string;
}

export default function HeartIcon({ fill }: icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={fill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6597 5.13581C10.6603 2.7984 7.32625 2.16964 4.8212 4.31001C2.31615 6.45038 1.96347 10.029 3.9307 12.5604C5.56632 14.6651 10.5163 19.1041 12.1386 20.5408C12.3201 20.7016 12.4109 20.7819 12.5167 20.8135C12.6091 20.8411 12.7102 20.8411 12.8026 20.8135C12.9085 20.7819 12.9992 20.7016 13.1807 20.5408C14.803 19.1041 19.753 14.6651 21.3886 12.5604C23.3558 10.029 23.0462 6.42787 20.4981 4.31001C17.95 2.19216 14.659 2.7984 12.6597 5.13581Z"
        stroke="#A0A0AB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
