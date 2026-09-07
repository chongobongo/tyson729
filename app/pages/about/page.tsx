// About Page

import { jobData } from '@/assets/data/data'
import { ImageCarousel } from '@/assets/components/Carousel'
import Image from "next/image"
import Link from "next/link"
import about from "@/assets/imgs/about/tot.caladv.jpg"

const AboutPage = () => {

const heroImages = jobData.flatMap((job) =>
  job.imgs.filter((img) => img.tag.includes("hero"))
)

  if (!heroImages) {
    return <div className='p-4'>Job not found.</div>
  }

  return (
    <main className="flex min-h-screen">
      <div className="relative w-1/3 h-screen">
      <Link href="./folio/jobs/entertainment/terror">
        <Image
          src={about}
          alt="About Page Image"
          fill
          priority
          sizes="33vw"
          className="object-cover z-0"
        /></Link>
      </div>

      <div id="ui" className="font-geistSans w-2/3 text-center">
        <h1 id="headline" className="mt-10 text-6xl">Tyson Dolan</h1>
        <p id="text" className='text-2xl p-6'>
          As a member of Local 729 for over 30 years, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, sed dictum nisl ullamcorper sed. Sed vel enim sit amet nunc viverra dapibus nec ut felis. Integer sit amet cursus ligula, sed suscipit orci.
        </p>
        <ImageCarousel images={heroImages} />
      </div>
    </main>
  )
}

export default AboutPage