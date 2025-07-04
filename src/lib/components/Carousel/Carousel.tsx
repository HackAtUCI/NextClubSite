"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";
import CarouselDotButton from "./CarouselDotButton";
import type { EmblaCarouselType } from "embla-carousel";

interface CarouselProps {
    children: React.ReactNode[];
    options?: EmblaOptionsType;
    className?: string;
    dotsClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    children,
    options,
    className = "",
    dotsClassName = "",
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Dot button logic
    const onNavButtonClick = useCallback(
        (emblaApi: EmblaCarouselType | undefined) => {
            const autoplay = emblaApi?.plugins()?.autoplay;
            if (!autoplay) return;
            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop;
            resetOrStop();
        },
        []
    );

    // Dot navigation hook
    const scrollSnaps = emblaApi?.scrollSnapList() ?? [];
    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
            onNavButtonClick(emblaApi);
        },
        [emblaApi, onNavButtonClick]
    );

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <div className={`embla ${className}`}>
            <div
                className="embla__viewport"
                ref={emblaRef}
            >
                <div className="embla__container">
                    {React.Children.map(children, (child, idx) => (
                        <div
                            className="embla__slide"
                            key={idx}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <div className={dotsClassName}>
                {scrollSnaps.map((_, idx) => (
                    <CarouselDotButton
                        key={idx}
                        selected={selectedIndex === idx}
                        onClick={() => onDotButtonClick(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
