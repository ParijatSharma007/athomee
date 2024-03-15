import React from "react";

interface ListCardProps {
  step?: number;
  title?: string;
  subtitle?: string;
  background?: string;
}
const ListCreationCard = ({
  step,
  title,
  subtitle,
  background,
}: ListCardProps) => {
  return (
    <div
      className={`p-8 lg:p-6 rounded-[12px] shadow-[0px 20px 12px -9px rgba(0, 0, 0, 0.02)] bg-[${background}]`}
    >
      <p className="text-textgray lg:text-[16px]"> Step {step}</p>
      <h3 className="text-3xl font-satoshi_medium my-[10px] lg:text-[20px]">{title}</h3>
      <p className="pb-10 md:pb-0">{subtitle}</p>
    </div>
  );
};

export default ListCreationCard;
