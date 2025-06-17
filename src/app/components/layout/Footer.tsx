"use client";

import React from "react";
import footerConfig from "../../../config/footer.json";
import { getSocialIconSvg } from "../../utils/socialIcons";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();



    return (
        <footer className="text-white" style={{ backgroundColor: "#023e8a" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mt-1 pt-2 text-center">
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mb-6">
                        {footerConfig.social.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target={
                                    link.url.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    link.url.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                aria-label={link.name}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill={
                                        link.icon === "linkedin" ||
                                        link.icon === "github"
                                            ? "currentColor"
                                            : "none"
                                    }
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                                                    >
                                        {getSocialIconSvg(link.icon)}
                                    </svg>
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-100 text-sm">
                        © {currentYear} {footerConfig.brand.name}.{" "}
                        {footerConfig.copyright.text}
                    </p>
                </div>
            </div>
        </footer>
    );
};
