// Catagory Card - Component

import Image from "next/image"

export const CatagoryCard = ({
    catagory,
}: {
    catagory : {
        id: string
        img: string
        title: string
    }
}) => {

    return (
                <div id="card-container" className="h-44 w-44 p-2 grid grid-cols-1 text-center rounded-lg shadow-lg bg-white">
                    <div id="image" className="relative w-full h-28">
                        <Image
                            src={catagory.img}
                            fill
                            className="object-contain"
                            alt='catagory_image'
                        />
                    </div>
                    <div id="headline" className="font-archivo-black text-lg md:text-2xl">
                        {catagory.title}
                    </div>
                </div>
    )
}

export default CatagoryCard