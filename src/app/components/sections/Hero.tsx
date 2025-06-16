"use client";

import React from "react";
import { Button } from "../ui/Button";
import heroConfig from "../../../config/hero.json";

export const Hero: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Profile Image Placeholder */}
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                            {heroConfig.initials}
                        </div>
                    </div>

                    {/* Introduction */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            {heroConfig.name}
                        </span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        {heroConfig.title}
                    </h2>

                    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {heroConfig.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {heroConfig.buttons.map((button, index) => (
                            <Button
                                key={index}
                                size="lg"
                                variant={
                                    button.type === "outline"
                                        ? "outline"
                                        : undefined
                                }
                                onClick={() => scrollToSection(button.target)}
                                className="w-full sm:w-auto"
                            >
                                {button.text}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button
                    onClick={() => scrollToSection("#about")}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Scroll to about section"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};
