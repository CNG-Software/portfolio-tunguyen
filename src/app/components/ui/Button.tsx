"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    children,
    href,
    className = "",
    ...props
}) => {
    const baseClasses =
        "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-[#023E8A] hover:text-white hover:border-[#023E8A]",
    };

    const sizeClasses = {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 py-2 rounded-md",
        lg: "h-12 px-6 py-3 text-lg rounded-lg",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...(props as any)}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
