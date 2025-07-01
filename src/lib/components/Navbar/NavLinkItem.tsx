import React from "react";
import Link from "next/link";
import * as NavMenu from "@radix-ui/react-navigation-menu";

import "./Navbar.css";

const NavLinkItem = React.forwardRef<
    React.ElementRef<typeof NavMenu.Link>,
    React.ComponentPropsWithoutRef<typeof NavMenu.Link>
>(({ children, className, href, ...props }, forwardedRef) => {
    return (
        <NavMenu.Item>
            <NavMenu.Link
                className={`navMenuLink ${className}`}
                {...props}
                ref={forwardedRef}
                asChild
            >
                <Link href={href as string}>{children}</Link>
            </NavMenu.Link>
        </NavMenu.Item>
    );
});

NavLinkItem.displayName = "NavLinkItem";
export default NavLinkItem;
