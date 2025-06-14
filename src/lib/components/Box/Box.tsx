import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full mx-24 px-16 py-12 rounded-3xl bg-box p-10 shadow-box-glow ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
