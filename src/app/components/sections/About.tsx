import React from "react";
import { Card, CardContent } from "../ui/Card";
import aboutConfig from "../../../config/about.json";
import sectionsConfig from "../../../config/sections.json";

export const About: React.FC = () => {
    return (
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        About <span style={{ color: "#0077B6" }}>Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                            {sectionsConfig.about.journeyTitle}
                        </h3>
                        <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                            {aboutConfig.journey.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Key Highlights
                        </h3>

                        {aboutConfig.highlights.map((highlight, index) => {
                            const getBorderClass = (color: string) => {
                                const colorMap: { [key: string]: string } = {
                                    blue: "border-l-[#0077b6]",
                                    green: "border-l-[#10b981]",
                                    purple: "border-l-[#8b5cf6]",
                                    orange: "border-l-[#f59e0b]",
                                };
                                return colorMap[color] || "border-l-[#0077b6]";
                            };

                            const getIconColorClasses = (color: string) => {
                                const colorMap: {
                                    [key: string]: { bg: string; text: string };
                                } = {
                                    blue: {
                                        bg: "bg-blue-100",
                                        text: "text-blue-600",
                                    },
                                    green: {
                                        bg: "bg-green-100",
                                        text: "text-green-600",
                                    },
                                    purple: {
                                        bg: "bg-purple-100",
                                        text: "text-purple-600",
                                    },
                                    orange: {
                                        bg: "bg-orange-100",
                                        text: "text-orange-600",
                                    },
                                };
                                return (
                                    colorMap[color] || {
                                        bg: "bg-blue-100",
                                        text: "text-blue-600",
                                    }
                                );
                            };

                            const getIconSvg = (icon: string) => {
                                switch (icon) {
                                    case "lightbulb":
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        );
                                    case "lightning":
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        );
                                    case "users":
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        );
                                    case "chart":
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        );
                                    default:
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        );
                                }
                            };

                            const iconColors = getIconColorClasses(
                                highlight.color
                            );

                            return (
                                <Card
                                    key={index}
                                    hover
                                    className={`border-l-4 ${getBorderClass(
                                        highlight.color
                                    )}`}
                                >
                                    <CardContent>
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`w-8 h-8 ${iconColors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                                            >
                                                <svg
                                                    className={`w-4 h-4 ${iconColors.text}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    {getIconSvg(highlight.icon)}
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2">
                                                    {highlight.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {highlight.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
