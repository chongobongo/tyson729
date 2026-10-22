// Index Card - Component

import Image from "next/image"
import { Protest_Strike } from "next/font/google"

const protestFont = Protest_Strike({
     subsets: ["latin"],
     weight: "400",
})

export const IndexCard = ({
  index,
}: {
  index: {
    id: string
    index: string
    img: string
  }
}) => {
  return (
    <div
      id="card-container"
      className="grid w-full grid-cols-1 rounded-lg bg-white p-2 text-center shadow-lg transition-shadow hover:shadow-xl"
    >
      <div id="image" className="relative aspect-square w-full bg-gray-100">
        {index.img ? (
          <Image
            src={index.img}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="object-contain"
            alt={`${index.index} image`}
          />
        ) : null}
      </div>
      <div id="headline" className="font-archivo-black text-lg capitalize md:text-2xl">
        {index.index}
      </div>
    </div>
  )
}