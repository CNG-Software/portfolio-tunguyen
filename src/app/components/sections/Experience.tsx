import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import experiencesConfig from "../../../config/experiences.json";
import sectionsConfig from "../../../config/sections.json";
import qualificationsConfig from "../../../config/qualifications.json";

export const Experience: React.FC = () => {
    const experiences = experiencesConfig;
    const qualifications = qualificationsConfig;

    const getIcon = (type: string) => {
        switch (type) {
            case "work":
                return (
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM16 10h.01M8 10h.01"
                            />
                        </svg>
                    </div>
                );
            case "education":
                return (
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                        </svg>
                    </div>
                );
            case "certification":
                return (
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z"
                            />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    const getQualificationIcon = (icon: string, color: string) => {
        const colorClasses = {
            yellow: "bg-yellow-100 text-yellow-600",
            red: "bg-red-100 text-red-600",
            green: "bg-green-100 text-green-600",
        };

        const iconSvg = {
            star: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            ),
            book: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
            ),
            users: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            ),
        };

        return (
            <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    colorClasses[color as keyof typeof colorClasses]
                }`}
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {iconSvg[icon as keyof typeof iconSvg]}
                </svg>
            </div>
        );
    };

    return (
        <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Experience &{" "}
                        <span style={{ color: "#0077B6" }}>Education</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gray-300 hidden sm:block"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative mb-6 sm:mb-8 sm:ml-16">
                                <Card
                                    hover
                                    className="border-l-4 border-l-[#0077b6] p-4 sm:p-6"
                                >
                                    <CardContent className="p-0">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                                            <div className="flex-grow">
                                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                                                    {exp.title}
                                                </h3>
                                                <h4
                                                    className="text-base sm:text-lg font-medium mb-1"
                                                    style={{ color: "#0077b6" }}
                                                >
                                                    {exp.organization}
                                                </h4>
                                                <p className="text-gray-600 text-xs sm:text-sm mb-2">
                                                    {exp.location} •{" "}
                                                    {exp.period}
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                            {exp.description.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="text-gray-700 text-xs sm:text-sm flex items-start"
                                                    >
                                                        <span
                                                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"
                                                            style={{
                                                                backgroundColor:
                                                                    "#0077b6",
                                                            }}
                                                        ></span>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        <div className="flex flex-wrap gap-1 sm:gap-2">
                                            {exp.technologies.map(
                                                (tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="secondary"
                                                        size="sm"
                                                        className="text-xs"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 sm:mt-20">
                    <div className="text-center mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            {sectionsConfig.experience.additionalQualificationsTitle}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {qualifications.map((qual, index) => (
                            <Card
                                key={index}
                                hover
                                className="text-center p-4 sm:p-6"
                            >
                                <CardContent className="p-0">
                                    {getQualificationIcon(qual.icon, qual.color)}
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                        {qual.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600">
                                        {qual.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
