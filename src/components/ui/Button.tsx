// src/components/ui/Button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "highlight"; // 기본형, 강조형
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const baseStyle =
    "font-semibold py-2 px-4 rounded-lg transition cursor-pointer";

  const variantStyle = {
    primary: "bg-yellow-300 text-black hover:bg-yellow-400", // 약간 더 진한 노랑 계열
    highlight:
      "bg-black text-yellow-400 border border-transparent hover:border-yellow-400 hover:text-yellow-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
