"use client"

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

interface ComparisonSliderProps {
    itemOne: string
    itemTwo: string
    labelOne?: string
    labelTwo?: string
    itemOneIsVideo?: boolean
    itemTwoIsVideo?: boolean
}

export function ComparisonSlider({
    itemOne,
    itemTwo,
    labelOne = "Antes",
    labelTwo = "Después",
    itemOneIsVideo = false,
    itemTwoIsVideo = false,
}: ComparisonSliderProps) {
    // Auto-detect if items are videos based on extension
    const isItemOneVideo = itemOneIsVideo || itemOne.match(/\.(mp4|webm|mov|ogg)$/i)
    const isItemTwoVideo = itemTwoIsVideo || itemTwo.match(/\.(mp4|webm|mov|ogg)$/i)

    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:h-[600px]">
            <ReactCompareSlider
                itemOne={
                    isItemOneVideo ? (
                        <video
                            src={itemOne}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <ReactCompareSliderImage src={itemOne} alt="Image one" />
                    )
                }
                itemTwo={
                    isItemTwoVideo ? (
                        <video
                            src={itemTwo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <ReactCompareSliderImage src={itemTwo} alt="Image two" />
                    )
                }
                className="h-full w-full"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                {labelOne}
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                {labelTwo}
            </div>
        </div>
    )
}
