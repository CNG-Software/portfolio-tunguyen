"use client";

import React from "react";
import footerConfig from "../../../config/footer.json";
import { getSocialIconSvg } from "../../utils/socialIcons";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="text-white" style={{ backgroundColor: "#023e8a" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="mt-1 pt-2 text-center">
                    
                    <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
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
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                aria-label={link.name}
                            >
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
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

                    
                    <p className="text-gray-100 text-xs sm:text-sm px-4">
                        © {currentYear} {footerConfig.brand.name}.{" "}
                        {footerConfig.copyright.text}
                    </p>
                </div>
            </div>
        </footer>
    );
};
