"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import heroConfig from "../../../config/hero.json";

export const Hero: React.FC = () => {
    const [particles, setParticles] = useState<
        Array<{
            id: number;
            x: number;
            y: number;
            size: number;
            symbol: string;
            animationDelay: number;
            duration: number;
        }>
    >([]);

    useEffect(() => {
        // Data science symbols and elements
        const symbols = [
            "∑",
            "μ",
            "σ",
            "π",
            "∞",
            "∫",
            "∂",
            "α",
            "β",
            "γ",
            "χ²",
            "R²",
            "{}",
            "[]",
            "()",
            "|",
            "~",
            "∈",
            "∀",
            "∃",
        ];

        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 25; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 20 + 10,
                    symbol: symbols[Math.floor(Math.random() * symbols.length)],
                    animationDelay: Math.random() * 10,
                    duration: Math.random() * 20 + 15,
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    const handleButtonClick = (target: string) => {
        if (target.startsWith("#")) {
            // Internal scroll to section
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // External link
            window.open(target, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-[#caf0f8] pt-20 relative overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating Mathematical Symbols */}
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute text-blue-200 opacity-20 select-none animate-bounce"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            fontSize: `${particle.size}px`,
                            animationDelay: `${particle.animationDelay}s`,
                        }}
                    >
                        {particle.symbol}
                    </div>
                ))}

                {/* Animated Network Connections */}
                <div className="absolute inset-0">
                    <svg className="w-full h-full opacity-10">
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="#0077b6"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Animated connecting lines */}
                        <g className="animate-pulse">
                            <line
                                x1="10%"
                                y1="20%"
                                x2="30%"
                                y2="40%"
                                stroke="#0077b6"
                                strokeWidth="1"
                                opacity="0.3"
                            />
                            <line
                                x1="70%"
                                y1="30%"
                                x2="90%"
                                y2="60%"
                                stroke="#0077b6"
                                strokeWidth="1"
                                opacity="0.3"
                            />
                            <line
                                x1="20%"
                                y1="70%"
                                x2="40%"
                                y2="90%"
                                stroke="#0077b6"
                                strokeWidth="1"
                                opacity="0.3"
                            />
                            <line
                                x1="60%"
                                y1="10%"
                                x2="80%"
                                y2="30%"
                                stroke="#0077b6"
                                strokeWidth="1"
                                opacity="0.3"
                            />
                        </g>

                        {/* Data points */}
                        <g>
                            <circle
                                cx="10%"
                                cy="20%"
                                r="3"
                                fill="#0077b6"
                                opacity="0.4"
                                className="animate-ping"
                            />
                            <circle
                                cx="30%"
                                cy="40%"
                                r="2"
                                fill="#0077b6"
                                opacity="0.4"
                                className="animate-ping"
                                style={{ animationDelay: "1s" }}
                            />
                            <circle
                                cx="70%"
                                cy="30%"
                                r="2.5"
                                fill="#0077b6"
                                opacity="0.4"
                                className="animate-ping"
                                style={{ animationDelay: "2s" }}
                            />
                            <circle
                                cx="90%"
                                cy="60%"
                                r="3"
                                fill="#0077b6"
                                opacity="0.4"
                                className="animate-ping"
                                style={{ animationDelay: "0.5s" }}
                            />
                            <circle
                                cx="20%"
                                cy="70%"
                                r="2"
                                fill="#0077b6"
                                opacity="0.4"
                                className="animate-ping"
                                style={{ animationDelay: "1.5s" }}
                            />
                            <circle
                                cx="40%"
                                cy="90%"
                                r="2.5"
                                fill="#0077b6"
                                opacity="0.4"
                                className="animate-ping"
                                style={{ animationDelay: "2.5s" }}
                            />
                        </g>
                    </svg>
                </div>

                {/* Floating Binary Code */}
                <div className="absolute top-10 right-10 opacity-10 text-sm font-mono text-blue-600 animate-pulse">
                    1010110
                    <br />
                    0110101
                    <br />
                    1001011
                    <br />
                    0101110
                </div>

                <div
                    className="absolute bottom-20 left-10 opacity-10 text-sm font-mono text-blue-600 animate-pulse"
                    style={{ animationDelay: "1s" }}
                >
                    ML.fit()
                    <br />
                    predict()
                    <br />
                    analyze()
                    <br />
                    visualize()
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        <span style={{ color: "#0077b6" }}>
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
                                onClick={() => handleButtonClick(button.target)}
                                className="w-full sm:w-auto"
                                style={{
                                    backgroundColor: "#023e8a",
                                    borderColor: "#023e8a",
                                }}
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
                    onClick={() => handleButtonClick("#about")}
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
