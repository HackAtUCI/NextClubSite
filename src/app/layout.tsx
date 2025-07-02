import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Navbar from "@/lib/components/Navbar/Navbar";
import Footer from "@/lib/components/Footer/Footer";

import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Hack at UCI Club Site",
    description: "Hack at UCI Club Site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} bg-dark-blue antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
