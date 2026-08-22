// Index Card

import Image from "next/image"
import Link from "next/link"
import { Protest_Strike } from "next/font/google"

const protestFont = Protest_Strike({
     subsets: ["latin"],
     weight: "400",
})

export const IndexCard = ({
    catagory,
}: {
    catagory: {
    id: string
    url: string
    header: string
    img: string
    },

}) => {

    return (
                <Link href={`./folio/jobs/${catagory.url}`}>
                    <div id="card-container" className="h-44 w-44 p-2 grid grid-cols-1 text-center rounded-lg shadow-lg bg-white">
                        <div id="image" className="relative w-full h-28">
                            <Image
                                src={catagory.img}
                                fill
                                className="object-contain"
                                alt='catagory_image'
                            />
                        </div>
                        <div id="headline" className={`text-xl ${protestFont.className}`}>
                            {catagory.header}
                        </div>
                    </div>
                </Link>
    )
}