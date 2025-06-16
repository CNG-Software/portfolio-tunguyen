import React from "react";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import skillsConfig from "../../../config/skills.json";
import sectionsConfig from "../../../config/sections.json";

export const Skills: React.FC = () => {
    const { skillCategories } = skillsConfig;

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: "bg-blue-50 border-blue-200",
            green: "bg-green-50 border-green-200",
            purple: "bg-purple-50 border-purple-200",
            orange: "bg-orange-50 border-orange-200",
            indigo: "bg-indigo-50 border-indigo-200",
            pink: "bg-pink-50 border-pink-200",
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {sectionsConfig.skills.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {sectionsConfig.skills.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            hover
                            className={`border-2 ${getColorClasses(
                                category.color
                            )}`}
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <span className="text-2xl">
                                        {category.icon}
                                    </span>
                                    <span className="text-lg">
                                        {category.title}
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/80 hover:bg-white transition-colors"
                                            >
                                                {skill}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Proficiency Levels */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                        {sectionsConfig.skills.proficiencyTitle}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {skillsConfig.proficiencyLevels.map((level, index) => {
                            const getIconSvg = (icon: string) => {
                                switch (icon) {
                                    case "check-circle":
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
                                    case "academic-cap":
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        );
                                    default:
                                        return (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        );
                                }
                            };

                            return (
                                <div key={index} className="text-center">
                                    <div
                                        className={`w-16 h-16 mx-auto mb-4 bg-${level.color}-100 rounded-full flex items-center justify-center`}
                                    >
                                        <svg
                                            className={`w-8 h-8 text-${level.color}-600`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {getIconSvg(level.icon)}
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        {level.level}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {level.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
