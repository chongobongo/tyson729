import Image from "next/image"

export const UnionJobList = ({
    jobList,
}:{
    jobList: {
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
                    src={jobList.img}
                    fill
                    className="object-contain"
                    alt={jobList.title}
                />
            </div>
            <span>
                <div className="relative w-20 h-20 shrink-0 bg-gray-100">
                    <Image
                        src={jobList.logo}
                        fill
                        className="object-contain"
                        alt={jobList.title}
                    />
                </div>
            </span>
        </div>
    )
}