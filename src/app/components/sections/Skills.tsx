import React from "react";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import skillsConfig from "../../../config/skills.json";

export const Skills: React.FC = () => {
    const { skillCategories } = skillsConfig;

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: "bg-blue-50 border-blue-400",
            green: "bg-green-50 border-green-400",
            purple: "bg-purple-50 border-purple-400",
            orange: "bg-orange-50 border-orange-400",
            indigo: "bg-indigo-50 border-indigo-400",
            pink: "bg-pink-50 border-pink-400",
        };
        return (
            colorMap[color as keyof typeof colorMap] ||
            "bg-blue-50 border-blue-400"
        );
    };

    return (
        <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Technical{" "}
                        <span style={{ color: "#0077B6" }}>Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            hover
                            className={`border-2 ${getColorClasses(
                                category.color
                            )} p-4 sm:p-6`}
                        >
                            <CardHeader className="mb-3 sm:mb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <span className="text-base sm:text-lg">
                                        {category.title}
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="secondary"
                                                size="sm"
                                                className={`bg-white/80 hover:bg-white transition-colors border text-xs sm:text-sm ${
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
