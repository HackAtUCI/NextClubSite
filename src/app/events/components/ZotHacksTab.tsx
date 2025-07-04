import Image from "next/image";
import Box, { UnspacedBox } from "@/lib/components/Box/Box";
import Carousel from "@/lib/components/Carousel/Carousel";
import IrvineHacksImg from "@/assets/images/IrvineHacks_img.png";
import ZotHacksImg from "@/assets/images/ZotHacks_img.png";

function StatBox({ count, text }: { count: number; text: string }) {
    return (
        <div className="mb-8 flex items-center">
            <UnspacedBox className="mr-14 flex h-36 w-36 flex-shrink-0 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-3xl font-bold text-transparent">
                    {count}
                </span>
            </UnspacedBox>
            <span className="text-subtitle break-words">{text}</span>
        </div>
    );
}

export default function ZotHacksTab() {
    return (
        <Box alt>
            <div className="flex w-full">
                <div className="flex w-1/2 flex-col pr-8">
                    <h2 className="text-subtitle mb-8">ZotHacks</h2>
                    <p className="text-base">
                        ZotHacks is a beginner-friendly hackathon where students
                        with minimal computer science experience will learn new
                        skills, take part in a community of creative people, and
                        build projects!
                    </p>
                </div>
                <div className="w-1/2">
                    <Carousel
                        options={{ loop: true }}
                        dotsClassName="mt-8 flex justify-center"
                    >
                        <Image
                            src={IrvineHacksImg}
                            alt="IrvineHacks"
                            className="w-full rounded-2xl"
                        />
                        <Image
                            src={ZotHacksImg}
                            alt="ZotHacks"
                            className="w-full rounded-2xl"
                        />
                        <Image
                            src={ZotHacksImg}
                            alt="ZotHacks"
                            className="w-full rounded-2xl"
                        />
                    </Carousel>
                </div>
            </div>
            <StatBox
                count={10}
                text="attendees"
            />
            <StatBox
                count={10}
                text="colleges"
            />
            <StatBox
                count={10}
                text="first-timers"
            />
            <StatBox
                count={10}
                text="projects submitted"
            />
        </Box>
    );
}
