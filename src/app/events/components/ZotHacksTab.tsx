import Image from "next/image";
import Box from "@/lib/components/Box/Box";
import Carousel from "@/lib/components/Carousel/Carousel";
import IrvineHacksImg from "@/assets/images/IrvineHacks_img.png";
import ZotHacksImg from "@/assets/images/ZotHacks_img.png";

export default function ZotHacksTab() {
    return (
        <Box alt>
            <div className="flex w-full">
                <div className="flex w-1/2 flex-col pr-8">
                    <h2 className="text-subtitle mb-4">ZotHacks</h2>
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
        </Box>
    );
}
