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
    <footer className="footer-container py-10 px-24">
      <div className="flex justify-center gap-10">
        <Link href="/">
          <Image
            src={HackLogo}
            alt="Hack at UCI Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex flex-col grow gap-4">
          <p className="text-subtitle">Hack at UCI</p>
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="items-start">
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
