"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
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
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div
            className={`nav-container ${hasScrolledFromTop ? "" : "bg-no-scroll"}`}
        >
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Logo for desktop */}
                        <Box
                            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
                        >
                            <Link
                                href="/"
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    className="logo"
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        position: "relative",
                                    }}
                                >
                                    <Image
                                        src={HackLogo}
                                        alt="Hack at UCI Logo"
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </Link>
                        </Box>

                        {/* Mobile menu button */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="navigation menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: "white" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                    "& .MuiPaper-root": {
                                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                                        color: "white",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                    },
                                }}
                            >
                                {navLinks.map((link) => (
                                    <MenuItem
                                        key={link.href}
                                        onClick={handleCloseNavMenu}
                                        component={Link}
                                        href={link.href}
                                        sx={{
                                            textAlign: "center",
                                            "&:hover": {
                                                backgroundColor:
                                                    "rgba(255, 255, 255, 0.1)",
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{ textAlign: "center" }}
                                        >
                                            {link.label}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Logo for mobile */}
                        <Box
                            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
                        >
                            <Link
                                href="/"
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    className="logo"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        position: "relative",
                                    }}
                                >
                                    <Image
                                        src={HackLogo}
                                        alt="Hack at UCI Logo"
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </Link>
                        </Box>

                        {/* Desktop navigation links */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                justifyContent: "flex-end",
                            }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="navlink"
                                    onClick={handleCloseNavMenu}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
