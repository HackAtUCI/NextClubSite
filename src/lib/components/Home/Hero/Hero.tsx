import React from "react";
import Image from "next/image";
import HackLogo from "@/assets/logos/hack.svg";
import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-24 h-screen w-full">
      <div className="flex items-center justify-center">
        <Image
          src={HackLogo.src}
          alt="Hack at UCI Logo"
          width={300}
          height={300}
          className="w-[30%] lg:w-[300px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-heading text-center">Hack at UCI</h1>
        <PrimaryButton className="px-32">Get Involved</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
