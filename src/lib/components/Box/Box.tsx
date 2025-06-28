import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-4 p-10 md:mx-24 md:px-16 md:py-12 rounded-3xl bg-box shadow-box-glow ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
