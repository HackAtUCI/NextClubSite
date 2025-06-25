import React from "react";
import Image from "next/image";
import HackLogo from "@/assets/logos/hack.svg";
import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

const Hero: React.FC = () => {
    return (
        <section className="h-screen">
            <div className="container mx-auto flex h-full w-full items-center justify-center gap-24">
                <div className="flex items-center justify-center">
                    <Image
                        src={HackLogo.src}
                        alt="Hack at UCI Logo"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <h1 className="text-heading">Hack at UCI</h1>
                    <PrimaryButton className="px-32">
                        Get Involved
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Hero;
