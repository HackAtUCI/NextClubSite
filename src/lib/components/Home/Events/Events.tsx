import React from "react";
import Image from "next/image";
import PrimaryAnchor from "@/lib/components/PrimaryAnchor/PrimaryAnchor";
import IrvineHacksImg from "@/assets/images/IrvineHacks_img.png";
import ZotHacksImg from "@/assets/images/ZotHacks_img.png";

interface EventCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    isReversed?: boolean;
    accent: "blue" | "green";
}

const EventCard: React.FC<EventCardProps> = ({
    src,
    alt,
    title,
    description,
    isReversed = false,
    accent,
}) => {
    return (
        <div
            className={`flex w-full flex-col lg:flex-row ${
                isReversed ? "lg:flex-row-reverse" : ""
            } mt-30`}
        >
            <div
                className={`flex w-full items-center justify-center lg:w-1/2 ${
                    isReversed ? "lg:ml-20" : "lg:mr-20"
                }`}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={450}
                    height={450}
                    className="h-auto max-h-[400px] w-full rounded-md"
                />
            </div>
            <div
                className={`mt-8 flex w-full flex-col lg:w-1/2 ${
                    isReversed ? "lg:text-right" : ""
                }`}
            >
                <h3
                    className={`text-subtitle mb-2 font-bold ${
                        accent === "blue"
                            ? "text-blue-accent"
                            : "text-green-accent"
                    }`}
                >
                    {title}
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Events: React.FC = () => {
    return (
        <section className="bg-box px-14 py-30 md:px-40 md:py-30">
            <div>
                <h2 className="text-subtitle mb-4">Our Events</h2>
                <p className="mb-4 max-w-3xl">
                    We aim to celebrate UC Irvine&apos;s spirit of innovation by
                    organizing ZotHacks, a beginner friendly hackathon, and
                    IrvineHacks, Orange County&apos;s largest hackathon.
                    Furthermore, our organization regularly host technical and
                    professional development workshops that teach students
                    industry-relevant skills.
                </p>
                <PrimaryAnchor href="/events">More Information</PrimaryAnchor>
            </div>
            <EventCard
                src={IrvineHacksImg.src}
                alt="IrvineHacks event"
                title="IrvineHacks"
                description="HackUCI is the largest collegiate hackathon in Orange County. Each year, we bring like-minded individuals of different backgrounds and skill sets together to create something in 36 hours."
                accent="blue"
            />
            <EventCard
                src={ZotHacksImg.src}
                alt="ZotHacks event"
                title="ZotHacks"
                description="ZotHacks is a beginner-friendly hackathon where students with minimal computer science experience will learn new skills, take part in a community of creative people, and build projects."
                isReversed
                accent="green"
            />
        </section>
    );
};

export default Events;
