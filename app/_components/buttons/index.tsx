import React from "react";

export const WHiteButton = ({
  label,
  onClick,
  disabled,
}: {
  label: String;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="border-none rounded-none bg-white w-[235px] h-[50px] flex justify-center items-center font-montserrat font-bold text-[13px] text-black leading-[19.5px] tracking-[2.6px] uppercase">
      {label}
    </button>
  );
};
