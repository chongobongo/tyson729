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

    if (!images || images.length === 0) {
        return (
            <div className='relative w-full h-64 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center'>
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

    return (
        <div className='relative w-full'>
            {/* Main image display */}
            <div className='relative w-full h-64 md:h-96 rounded-lg overflow-hidden bg-gray-100'>
                <Image
                    src={images[activeIndex].src}
                    fill
                    className='object-contain'
                    alt={images[activeIndex].alt}
                    priority={activeIndex === 0}
                />

                {/* Previous button */}
                {images.length > 1 && (
                    <button
                        onClick={goToPrevious}
                        aria-label='Previous image'
                        className='absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors'
                    >
                        <span className='text-lg font-bold text-gray-800'>&#8249;</span>
                    </button>
                )}

                {/* Next button */}
                {images.length > 1 && (
                    <button
                        onClick={goToNext}
                        aria-label='Next image'
                        className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors'
                    >
                        <span className='text-lg font-bold text-gray-800'>&#8250;</span>
                    </button>
                )}
            </div>

            {/* Dot indicators */}
            {images.length > 1 && (
                <div className='flex flex-row items-center justify-center gap-2 mt-3'>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToIndex(index)}
                            aria-label={`Go to image ${index + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                index === activeIndex ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}