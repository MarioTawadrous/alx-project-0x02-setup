// components/common/Button.tsx
import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  // Size classes
  const sizeClasses = {
    small: "text-sm py-1.5 px-3",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  // Combine classes
  const buttonClasses = `
        bg-blue-600 hover:bg-blue-700 text-white font-medium
        transition-colors duration-200 focus:outline-none
        focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${sizeClasses[size]}
        ${shape}
        ${className}
    `;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
