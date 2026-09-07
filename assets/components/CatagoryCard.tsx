// Catagory Card - Component

import Link from "next/link"
import Image from "next/image"

export const CatagoryCard = ({
    catagory,
}: {
    catagory : {
        img: string
        url: string
    }
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
                    </div>
                </Link>
    )
}

export default CatagoryCard