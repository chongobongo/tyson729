import union from "@/assets/imgs/folio-directory/directory/film-samwong-babylon.jpg"
import storefront from "@/assets/imgs/folio-directory/directory/storefront-goodies-lbc.jpg"
import structural from "@/assets/imgs/folio-directory/structural/spacemountain.dwi.jpg"
import vehicle from "@/assets/imgs/folio-directory/vehicle/helicopter-barry.jpg"
import media from "@/assets/imgs/folio-directory/media/backlit-hardees.jpg"
import entertainment from "@/assets/imgs/folio-directory/entertianment/pinball.scenario.jpg"

import corporate from "@/assets/imgs/folio-directory/corporate/aviner.2.viejo.jpg"
import wall from "@/assets/imgs/folio-directory/wall/strawman-tezza.jpg"


// Job List Images

// Barry
import barry from "@/assets/imgs/jobs/barry/helicopter-barry.jpg"
import barryLogo from "@/assets/imgs/jobs/barry/barryLogo.jpg"
import barry001 from "@/assets/imgs/jobs/barry/heli-2-barry.jpg"
// Babylon
import babylon from "@/assets/imgs/jobs/babylon/zuckers.jpg"
import babylonLogo from "@/assets/imgs/jobs/babylon/babylonLogo.jpg"
import babylon001 from "@/assets/imgs/jobs/babylon/ambulance_001_babylon.jpg"
// The Land
import theLand from "@/assets/imgs/jobs/The Land/land.helmet.jpg"
import theLandLogo from "@/assets/imgs/jobs/The Land/theLandLogo.jpg"

export const folioDirectoryIndex = [
    {
        id: "0",
        img: union.src,
        url: "union",
        header: "729",
    },
    {
        id: "1",
        img: storefront.src,
        url: "storefront",
        header: "Storefront",
    },
    {
        id: "2",
        img: structural.src,
        url: "structural",
        header: "Structural",
    },
        {
        id: "3",
        img: vehicle.src,
        url: "vehicle",
        header: "Vehicle",
    },
    {
        id: "4",
        img: media.src,
        url: "media",
        header: "Media",
    },
    {
        id: "5",
        img: entertainment.src,
        url: "entertainment",
        header: "Entertainment",
    },
    {
        id: "6",
        img: corporate.src,
        url: "corporate",
        header: "Corporate",
    },
    {
        id: "7",
        img: wall.src,
        url: "wall",
        header: "Wall",
    }
]

export const jobData = [
   {
        id: "0",
        title: "Barry",
        paint_boss: "Scott Rainie",
        job_title: "Set Painter/Signwriter",
        job_description: "Stage and Location, Hand Lettering, Applied Graphics, Matched Color, Various Finishes",
        catagory: "union",
        imgs: [
            { src: barry.src, tag: ["hero", "union", "barry"], alt: "Barry Image" },
            { src: barry001.src, tag: ["helicopter", "vehicle_hero", "barry"], alt: "Helicopter - Barry" },
        ],
        logo: barryLogo.src
    },
    {
        id: "1",
        title: "Babylon",
        catagory: "union",
        imgs: [
            { src: babylon.src, tag: ["hero", "union", "babylon"], alt: "Babylon Image" },
            { src: babylon001.src, tag: ["ambulance", "vehicle_hero", "babylon"], alt: "Ambulance - Babylon" },
        ],
        logo: babylonLogo.src
    },
    {
        id: "3",
        title: "The Land",
        catagory: "union",
        imgs: [
            { src: theLand.src, tag: ["hero", "union", "the land", "land"], alt: "The Land Image" },
        ],
        logo: theLandLogo.src
    }
]

export const jobDescription = [
    {
        id: "0",
        title: "Babylon"
    }
]