"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import contactConfig from "../../../config/contact.json";

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You can integrate with a form service like Formspree, Netlify Forms, or your own backend
        alert(contactConfig.messages.successAlert);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const getIconSvg = (iconType: string) => {
        switch (iconType) {
            case "email":
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                );
            case "linkedin":
                return (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                );
            case "github":
                return (
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                );
            case "location":
                return (
                    <>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </>
                );
            default:
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                );
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities,
                        collaborations, or just having a chat about data
                        science. Feel free to reach out!
                    </p>
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                {contactConfig.title}
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {contactConfig.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactConfig.contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            fill={
                                                info.icon === "linkedin" ||
                                                info.icon === "github"
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {getIconSvg(info.icon)}
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                target={
                                                    info.link.startsWith("http")
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    info.link.startsWith("http")
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                                className="text-blue-600 hover:text-blue-700 transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="text-gray-600">
                                                {info.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-3">
                                {contactConfig.availability.title}
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                {contactConfig.availability.items.map(
                                    (item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <svg
                                                className="w-4 h-4 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
