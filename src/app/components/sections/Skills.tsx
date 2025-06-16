import React from "react";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import skillsConfig from "../../../config/skills.json";
import sectionsConfig from "../../../config/sections.json";

export const Skills: React.FC = () => {
    const { skillCategories } = skillsConfig;

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: "bg-blue-50 border-[#00b4d8]",
            green: "bg-green-50 border-[#00b4d8]",
            purple: "bg-purple-50 border-[#00b4d8]",
            orange: "bg-orange-50 border-[#00b4d8]",
            indigo: "bg-indigo-50 border-[#00b4d8]",
            pink: "bg-pink-50 border-[#00b4d8]",
        };
        return (
            colorMap[color as keyof typeof colorMap] ||
            "bg-blue-50 border-[#00b4d8]"
        );
    };

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {sectionsConfig.skills.title}
                    </h2>
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
                                                className={`bg-white/80 hover:bg-white transition-colors border ${
                                                    skillIndex % 2 === 0
                                                        ? "border-[#caf0f8]"
                                                        : "border-[#ade8f4]"
                                                }`}
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
            </div>
        </section>
    );
};
