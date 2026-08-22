// About Page

import { Carattere } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import about from "@/assets/imgs/about/tot.caladv.jpg"

const carattere = Carattere({
  subsets: ['latin'],
  weight: ['400'],
})

const AboutPage = () => {
  return (
    <main className="flex min-h-screen">
      <div className="relative w-1/3 h-screen">
      <Link href="./jobs/tot-caladv">
        <Image
          src={about}
          alt="About Page Image"
          fill
          priority
          sizes="33vw"
          className="object-cover z-0"
        /></Link>
      </div>

      <div className="w-2/3 text-center">
        <h1 id="headline" className={`${carattere.className} mt-60 text-6xl`}>Tyson Dolan</h1>
        <p id="text" className='p-6'>
          As a member of Local 729 for over 30 years, I have had the oppourtunity...
        </p>
      </div>
    </main>
  )
}

export default AboutPage