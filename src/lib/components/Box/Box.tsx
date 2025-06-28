import React from "react";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = "" }) => {
    return (
        <div
            className={`bg-box shadow-box-glow mx-4 rounded-3xl p-10 md:mx-24 md:px-16 md:py-12 ${className}`}
        >
            {children}
        </div>
    );
};

export default Box;
