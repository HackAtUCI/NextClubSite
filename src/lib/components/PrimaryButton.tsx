import React from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  children: React.ReactNode;
  classes?: string;
  href?: string;
  [x: string]: unknown;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  classes = "",
  href,
  ...props
}) => {
  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={`primary-gradient-btn px-12 py-3 rounded-full text-button outline-none border-none shadow-none bg-transparent ${classes}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`primary-gradient-btn px-12 py-3 rounded-full text-button outline-none border-none shadow-none bg-transparent ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
