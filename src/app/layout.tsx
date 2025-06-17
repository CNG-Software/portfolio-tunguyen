import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tu Nguyen",
    description:
        "Aspiring Data Scientist passionate about machine learning, statistical analysis, and data-driven insights. Explore my projects and skills.",
    keywords: [
        "Data Science",
        "Machine Learning",
        "Python",
        "Statistics",
        "Analytics",
    ],
    authors: [{ name: "Tu Nguyen" }],
    openGraph: {
        title: "Tu Nguyen",
        description:
            "Aspiring Data Scientist passionate about machine learning and statistical analysis",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
            >
                {children}
            </body>
        </html>
    );
}
