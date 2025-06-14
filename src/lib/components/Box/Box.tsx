import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl bg-box p-10 shadow-box-glow ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
