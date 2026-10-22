// Job Data

// Images

// Barry
import barry_001 from "@/assets/imgs/000_helicopter_barry_001.jpg"
import barry_002 from "@/assets/imgs/000_helicopter_barry_002.jpg"
import barry_003 from "@/assets/imgs/000_helicopter_barry_003.jpg"
import barry_004 from "@/assets/imgs/000_helicopter_barry_005.jpg"
// Babylon
import babylon_001 from "@/assets/imgs/100_zuckers_babylon_001.jpg"
// The Land
import land_001 from "@/assets/imgs/200_land_helmet_001.jpg"
import land_002 from "@/assets/imgs/200_pittsburgh_land_002.jpg"
// Paramount Water Tower
import watertowerParamount001 from "@/assets/imgs/400_watertower_paramount_001.jpg"
// Goodies
import goodies_001 from "@/assets/imgs/300_goodies-longbeach_001.jpg"
// Tower of Terror
import tot_001 from "@/assets/imgs/500_tot_caladvent_001.jpg"

export const jobData = [
   {
        id: "000",
        title: "Barry",
        paint_boss: "Scott Rainie",
        job_title: "Set Painter/Signwriter",
        job_description: "Stage and Location, Hand Lettering, Applied Graphics, Matched Color, Various Finishes",
        index: "union",
        imgs: [
            { src: barry_001.src, tag: ["hero", "barry"], alt: "Helecopter Barry" },
            { src: barry_002.src, tag: ["barry"], alt: "Helecopter Barry" },
            { src: barry_003.src, tag: ["barry"], alt: "Helecopter Barry" },
            { src: barry_004.src, tag: ["barry"], alt: "Helecopter Barry" },
        ],
    },
    {
        id: "100",
        title: "Babylon",
        index: "union",
        imgs: [
            { src: babylon_001.src, tag: ["hero", "union", "babylon"], alt: "Babylon Image" },
        ],
    },
    {
        id: "200",
        title: "The Land",
        index: "union",
        imgs: [
            { src: land_001.src, tag: ["hero", "union", "the land", "land"], alt: "The Land Image" },
            { src: land_002.src, tag: ["land"], alt: "The Land Image" },
        ],
    },
    {
        id: "300",
        title: "Goodies",
        index: "storefront",
        imgs: [
            { src: goodies_001.src, tag: ["hero"], alt: "Goodies Image" },
        ],
    },
   {
        id: "400",
        title: "Watertower",
        paint_boss: "Leonard Russo",
        job_title: "Signwriter",
        job_description: "Paint letter and logo on water tower",
        index: "union",
        imgs: [
            { src: watertowerParamount001.src, tag: ["hero"], alt: "Paramount Water Tower" }],
    },
       {
        id: "500",
        title: "Tower of Terror",
        paint_boss: "Tom Stapleton",
        job_title: "Administration",
        job_description: "Help run the paint crew, some light scenic",
        index: "entertainment",
        imgs: [
            { src: tot_001.src, tag: ["hero"], alt: "Tower of Terror" }],
    },
]