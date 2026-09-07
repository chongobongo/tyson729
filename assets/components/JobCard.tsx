import Image from "next/image"

export const JobCard = ({
    jobCard,
}:{
    jobCard: {
        id: string
        title: string
        img: string
        logo: string
    }
}) => {

    return (
        <div id="container" className="flex flex-row items-center gap-6 p-4 rounded-lg shadow-lg bg-white">
            <div className="relative w-20 h-20 shrink-0 bg-gray-100">
                <Image
                    src={jobCard.img}
                    fill
                    className="object-contain"
                    alt={jobCard.title}
                />
            </div>
            <span>
                <div className="relative w-20 h-20 shrink-0 bg-gray-100">
                    <Image
                        src={jobCard.logo}
                        fill
                        className="object-contain"
                        alt={jobCard.title}
                    />
                </div>
            </span>
        </div>
    )
}