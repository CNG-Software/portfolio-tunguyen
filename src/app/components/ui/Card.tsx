import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = "",
    hover = false,
}) => {
    const hoverClasses = hover
        ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
        : "";

    return (
        <div
            className={`bg-white rounded-lg shadow-md p-4 sm:p-6 ${hoverClasses} ${className}`}
        >
            {children}
        </div>
    );
};

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
    children,
    className = "",
}) => {
    return <div className={`mb-3 sm:mb-4 ${className}`}>{children}</div>;
};

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
    children,
    className = "",
}) => {
    return (
        <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 ${className}`}>
            {children}
        </h3>
    );
};

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
    children,
    className = "",
}) => {
    return <div className={`text-gray-600 text-sm sm:text-base ${className}`}>{children}</div>;
};
