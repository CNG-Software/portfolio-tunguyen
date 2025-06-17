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
            for (let i = 0; i < 40; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 25 + 15,
                    symbol: symbols[Math.floor(Math.random() * symbols.length)],
                    animationDelay: Math.random() * 8,
                    duration: Math.random() * 15 + 10,
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
            className="min-h-screen flex items-center justify-center bg-[#caf0f8] pt-16 sm:pt-20 relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className={`absolute text-blue-300 opacity-20 sm:opacity-40 select-none hover:opacity-60 transition-opacity duration-300 animate-float-${
                            particle.id % 4
                        } hidden sm:block`}
                        style={
                            {
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                fontSize: `${Math.max(particle.size * 0.6, 12)}px`,
                                animationDelay: `${particle.animationDelay}s`,
                                filter: "drop-shadow(0 0 4px rgba(0, 119, 182, 0.3))",
                            } as React.CSSProperties
                        }
                    >
                        {particle.symbol}
                    </div>
                ))}

                <div className="absolute inset-0">
                    <svg className="w-full h-full opacity-8">
                        <defs>
                            <pattern
                                id="grid"
                                width="50"
                                height="50"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 50 0 L 0 0 0 50"
                                    fill="none"
                                    stroke="#0077b6"
                                    strokeWidth="0.3"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        <g className="animate-pulse">
                            <line
                                x1="10%"
                                y1="20%"
                                x2="30%"
                                y2="40%"
                                stroke="#0077b6"
                                strokeWidth="2"
                                opacity="0.5"
                            />
                            <line
                                x1="70%"
                                y1="30%"
                                x2="90%"
                                y2="60%"
                                stroke="#0077b6"
                                strokeWidth="2"
                                opacity="0.5"
                            />
                            <line
                                x1="20%"
                                y1="70%"
                                x2="40%"
                                y2="90%"
                                stroke="#0077b6"
                                strokeWidth="2"
                                opacity="0.5"
                            />
                            <line
                                x1="60%"
                                y1="10%"
                                x2="80%"
                                y2="30%"
                                stroke="#0077b6"
                                strokeWidth="2"
                                opacity="0.5"
                            />
                            <line
                                x1="40%"
                                y1="20%"
                                x2="60%"
                                y2="50%"
                                stroke="#023e8a"
                                strokeWidth="1.5"
                                opacity="0.4"
                            />
                            <line
                                x1="15%"
                                y1="60%"
                                x2="50%"
                                y2="80%"
                                stroke="#023e8a"
                                strokeWidth="1.5"
                                opacity="0.4"
                            />
                        </g>

                        <g>
                            <circle
                                cx="10%"
                                cy="20%"
                                r="4"
                                fill="#0077b6"
                                opacity="0.6"
                                className="animate-ping"
                            />
                            <circle
                                cx="30%"
                                cy="40%"
                                r="3"
                                fill="#0077b6"
                                opacity="0.6"
                                className="animate-ping"
                                style={{ animationDelay: "1s" }}
                            />
                            <circle
                                cx="70%"
                                cy="30%"
                                r="3.5"
                                fill="#0077b6"
                                opacity="0.6"
                                className="animate-ping"
                                style={{ animationDelay: "2s" }}
                            />
                            <circle
                                cx="90%"
                                cy="60%"
                                r="4"
                                fill="#0077b6"
                                opacity="0.6"
                                className="animate-ping"
                                style={{ animationDelay: "0.5s" }}
                            />
                            <circle
                                cx="20%"
                                cy="70%"
                                r="3"
                                fill="#0077b6"
                                opacity="0.6"
                                className="animate-ping"
                                style={{ animationDelay: "1.5s" }}
                            />
                            <circle
                                cx="40%"
                                cy="90%"
                                r="3.5"
                                fill="#0077b6"
                                opacity="0.6"
                                className="animate-ping"
                                style={{ animationDelay: "2.5s" }}
                            />
                            <circle
                                cx="60%"
                                cy="50%"
                                r="2.5"
                                fill="#023e8a"
                                opacity="0.5"
                                className="animate-ping"
                                style={{ animationDelay: "3s" }}
                            />
                            <circle
                                cx="50%"
                                cy="80%"
                                r="3"
                                fill="#023e8a"
                                opacity="0.5"
                                className="animate-ping"
                                style={{ animationDelay: "4s" }}
                            />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="mb-6 sm:mb-8">
                        {heroConfig.avatar ? (
                            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src={heroConfig.avatar}
                                    alt={`${heroConfig.name} profile picture`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-xl">
                                {heroConfig.initials}
                            </div>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                        Hi, I'm{" "}
                        <span style={{ color: "#0077b6" }}>
                            {heroConfig.name}
                        </span>
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                        {heroConfig.title}
                    </h2>

                    <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                        {heroConfig.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
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
                                className="w-full sm:w-auto min-w-[160px]"
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

            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button
                    onClick={() => handleButtonClick("#about")}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                    aria-label="Scroll to about section"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
