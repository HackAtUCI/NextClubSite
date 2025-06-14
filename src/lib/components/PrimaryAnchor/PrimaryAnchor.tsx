import React from "react";
import "./PrimaryAnchor.css";

interface PrimaryAnchorProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const PrimaryAnchor: React.FC<PrimaryAnchorProps> = ({
  children,
  href,
  className = "",
  ...props
}) => {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`primary-gradient-anchor ${className}`}
      {...props}
    >
      {children} ›
    </a>
  );
};

export default PrimaryAnchor;
