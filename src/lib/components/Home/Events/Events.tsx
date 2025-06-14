import React from "react";
import Image from "next/image";
import PrimaryAnchor from "@/lib/components/PrimaryAnchor/PrimaryAnchor";
import IrvineHacksImg from "@/assets/images/IrvineHacks_img.png";
import ZotHacksImg from "@/assets/images/ZotHacks_img.png";

const Events: React.FC = () => {
  return (
    <section className="px-40 py-30 bg-box">
      <div className="mb-14">
        <h2 className="text-heading mb-4">Our Events</h2>
        <p className="mb-4 max-w-3xl">
          We aim to celebrate UC Irvine&apos;s spirit of innovation by
          organizing ZotHacks, a beginner friendly hackathon, and IrvineHacks,
          Orange County&apos;s largest hackathon. Furthermore, our organization
          regularly host technical and professional development workshops that
          teach students industry-relevant skills.
        </p>
        <PrimaryAnchor href="/events" className="mb-12 inline-block">
          More Information
        </PrimaryAnchor>
      </div>

      <div className="">
        {/* IrvineHacks */}
        <div className="flex w-full">
          <div className="w-1/2 mr-20 flex items-center justify-center">
            <Image
              src={IrvineHacksImg.src}
              alt="IrvineHacks event"
              width={450}
              height={450}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <h3 className="text-subtitle text-blue-accent font-bold mb-2">
              IrvineHacks
            </h3>
            <p>
              HackUCI is the largest collegiate hackathon in Orange County. Each
              year, we bring like-minded individuals of different backgrounds
              and skill sets together to create something in 36 hours.
            </p>
          </div>
        </div>
        {/* ZotHacks */}
        <div className="flex flex-row-reverse w-full mt-16">
          <div className="w-1/2 ml-20 flex items-center justify-center">
            <Image
              src={ZotHacksImg.src}
              alt="ZotHacks event"
              width={450}
              height={450}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-1/2 flex flex-col text-right">
            <h3 className="text-subtitle text-green-accent font-bold mb-2">
              ZotHacks
            </h3>
            <p>
              ZotHacks is a beginner-friendly hackathon where students with
              minimal computer science experience will learn new skills, take
              part in a community of creative people, and build projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
