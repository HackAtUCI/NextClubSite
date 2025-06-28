"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HackLogo from "@/assets/logos/hack_navbar.svg";
import useScrollFromTop from "@/lib/hooks/useScrollFromTop";

import "./Navbar.css";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/contact", label: "Contact Us" },
];

export default function NavBar() {
    const hasScrolledFromTop = useScrollFromTop();

    return (
        <div
            className={`nav-container ${hasScrolledFromTop ? "" : "bg-no-scroll"}`}
        >
            <Navbar
                variant="dark"
                expand="lg"
                className="navbar-style"
            >
                <Container fluid>
                    <Navbar.Brand
                        href="/"
                        as={Link}
                        className="logoBrand pl-4"
                    >
                        <div className="logo">
                            <Image
                                src={HackLogo}
                                alt="Hack at UCI Logo"
                                fill
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="pr-6"
                    >
                        <Nav className="ms-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="navlink"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
