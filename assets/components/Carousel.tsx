// ImageCarousel.tsx

'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CarouselImage {
    src: string
    alt: string
    tag?: string[]
}

interface ImageCarouselProps {
    images: CarouselImage[]
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    const minSwipeDistance = 50

if (!images || images.length === 0) {
    return (
        <div className='flex h-full min-h-48 w-full items-center justify-center rounded-lg bg-gray-100'>
            <span className='text-gray-400 text-sm'>No images available</span>
        </div>
    )
}

    const goToPrevious = () => {
        setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))
    }

    const goToNext = () => {
        setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))
    }

    const goToIndex = (index: number) => {
        setActiveIndex(index)
    }

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            goToNext()
        } else if (isRightSwipe) {
            goToPrevious()
        }
    }

return (
    <div id="carousel-main" className='flex h-full w-full flex-col'>
        {/* Main image display */}
        <div
            className='relative min-h-48 min-w-0 flex-1 overflow-hidden rounded-lg lg:h-[65vh] lg:flex-none'
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <Image
                src={images[activeIndex].src}
                fill
                sizes='(min-width: 1024px) 66vw, 100vw'
                className='object-contain'
                alt={images[activeIndex].alt}
                priority={activeIndex === 0}
            />

            {/* Previous button */}
            {images.length > 1 && (
                <button
                    onClick={goToPrevious}
                    aria-label='Previous image'
                    className='absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-colors hover:bg-white'
                >
                    <span className='text-lg font-bold text-gray-800'>&#8249;</span>
                </button>
            )}

            {/* Next button */}
            {images.length > 1 && (
                <button
                    onClick={goToNext}
                    aria-label='Next image'
                    className='absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-colors hover:bg-white'
                >
                    <span className='text-lg font-bold text-gray-800'>&#8250;</span>
                </button>
            )}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
            <div className='flex shrink-0 flex-row items-center justify-center gap-2 py-3'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                            index === activeIndex ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        )}
    </div>
)
}