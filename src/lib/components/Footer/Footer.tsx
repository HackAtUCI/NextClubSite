import React from "react";
import Link from "next/link";
import Image from "next/image";
import HackLogo from "@/assets/logos/hack_navbar.svg";
import InstagramLogo from "@/assets/logos/instagram.svg";
import TiktokLogo from "@/assets/logos/tiktok.svg";
import DiscordLogo from "@/assets/logos/discord.svg";
import MailIcon from "@/assets/icons/mail.svg";

import "./Footer.css";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
    return (
        <footer className="footer-container px-24 py-10">
            <div className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-10">
                <Link
                    href="/"
                    className="flex justify-center lg:justify-start"
                >
                    <Image
                        src={HackLogo}
                        alt="Hack at UCI Logo"
                        width={100}
                        height={100}
                        className="h-16 w-16 cursor-pointer lg:h-[100px] lg:w-[100px]"
                    />
                </Link>
                <div className="flex grow flex-col items-center gap-0 lg:items-start lg:gap-4">
                    <p className="text-subtitle">Hack at UCI</p>
                    <div className="flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <React.Fragment key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-white no-underline! hover:underline!"
                                >
                                    {link.label}
                                </Link>
                                {index < navLinks.length - 1 && <span>•</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center lg:items-start lg:justify-end">
                    <div className="flex justify-between gap-8">
                        <Image
                            src={InstagramLogo}
                            alt="Instagram Logo"
                            width={60}
                            height={60}
                            className="cursor-pointer"
                        />
                        <Image
                            src={TiktokLogo}
                            alt="Tiktok Logo"
                            width={60}
                            height={60}
                            className="cursor-pointer"
                        />
                        <Image
                            src={DiscordLogo}
                            alt="Discord Logo"
                            width={60}
                            height={60}
                            className="cursor-pointer"
                        />
                        <Image
                            src={MailIcon}
                            alt="Mail icon"
                            width={60}
                            height={60}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
