import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import experiencesConfig from "../../../config/experiences.json";
import sectionsConfig from "../../../config/sections.json";

export const Experience: React.FC = () => {
    const experiences = experiencesConfig;

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
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {sectionsConfig.experience.title}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative mb-8 md:ml-16">
                                {/* Timeline icon */}
                                <div className="absolute -left-22 top-4 hidden md:block">
                                    {getIcon(exp.type)}
                                </div>

                                <Card
                                    hover
                                    className="border-l-4 border-l-blue-500"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div className="flex-grow">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                    {exp.title}
                                                </h3>
                                                <h4 className="text-lg text-blue-600 font-medium mb-1">
                                                    {exp.organization}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    {exp.location} •{" "}
                                                    {exp.period}
                                                </p>
                                            </div>
                                            <div className="md:block hidden">
                                                {getIcon(exp.type)}
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-4">
                                            {exp.description.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="text-gray-700 text-sm flex items-start"
                                                    >
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map(
                                                (tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="secondary"
                                                        size="sm"
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
            </div>
        </section>
    );
};
