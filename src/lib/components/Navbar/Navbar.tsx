import React from "react";
import Image from "next/image";
import Link from "next/link";
import HackLogo from "@/assets/logos/hack_navbar.svg";
import "./Navbar.css";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between pr-16 pl-8 py-4 absolute">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={HackLogo}
            alt="Hack at UCI Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="navMenuLink font-semibold"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
