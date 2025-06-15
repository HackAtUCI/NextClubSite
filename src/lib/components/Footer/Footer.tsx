import Link from "next/link";
import Image from "next/image";
import HackLogo from "@/assets/logos/hack_navbar.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image
            src={HackLogo.src}
            alt="Hack at UCI Logo"
            width={60}
            height={60}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div className="flex flex-col grow">
          <p className="text-subtitle">HackatUCI</p>
          <p>About Events Contact Us</p>
        </div>
        <div className="flex justify-between">
          
        </div>
      </div>
    </footer>
  );
}
