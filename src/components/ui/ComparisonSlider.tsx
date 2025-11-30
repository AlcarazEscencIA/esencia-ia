"use client"

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

interface ComparisonSliderProps {
    itemOne: string
    itemTwo: string
    labelOne?: string
    labelTwo?: string
}

export function ComparisonSlider({
    itemOne,
    itemTwo,
    labelOne = "Antes",
    labelTwo = "Después",
}: ComparisonSliderProps) {
    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:h-[600px]">
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={itemOne} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={itemTwo} alt="Image two" />}
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
