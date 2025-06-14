import React from "react";
import Image from "next/image";
import HackLogo from "@/assets/logos/hack_navbar.svg";
import "./Navbar.css";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/contact", label: "Contact Us" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-16 py-4 absolute">
      <div className="flex items-center">
        <Image
          src={HackLogo.src}
          alt="Hack at UCI Logo"
          width={60}
          height={60}
        />
      </div>
      <div className="flex gap-12">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navMenuLink font-semibold"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
