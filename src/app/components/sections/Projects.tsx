import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import projectsConfig from "../../../config/projects.json";
import sectionsConfig from "../../../config/sections.json";

export const Projects: React.FC = () => {
    const projects = projectsConfig;

    const getCategoryColor = (category: string) => {
        const colorMap = {
            "Machine Learning": "success",
            "Data Visualization": "default",
            NLP: "warning",
            Analytics: "secondary",
            "Data Engineering": "error",
        };
        return colorMap[category as keyof typeof colorMap] || "default";
    };

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Featured <span style={{ color: '#0077B6' }}>Projects</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            hover
                            className="h-full flex flex-col"
                        >
                            <CardHeader>
                                <div className="flex items-start justify-between mb-4">
                                    <Badge
                                        variant={
                                            getCategoryColor(
                                                project.category
                                            ) as any
                                        }
                                        size="sm"
                                    >
                                        {project.category}
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl mb-2">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map(
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
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center text-sm text-green-600 font-medium">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                        {project.impact}
                                    </div>
                                </div>

                                <div className="flex mt-auto">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        href={project.github}
                                        className="w-full"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Code
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
