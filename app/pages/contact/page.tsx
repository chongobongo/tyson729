// Contact Page

import Image from "next/image";
import Link from "next/link"
import { LuMessageSquareText } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import background from "@/assets/imgs/contact/pittsburgh.land.norwalk.jpg"

const ContactPage = () => {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Image
        src={background}
        alt="Contact Page Image"
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />
      <div className="animate-diffuse absolute inset-0 z-10" />
      <div id="contactInfo" className="items-center font-archivo-black mt-60 relative z-20 flex flex-col text-center text-white gap-6 px-4">
        <h1 id="headline" className="text-white text-5xl md:text-7xl font-bold">Tyson Dolan</h1>
        <Link href="mailto:tysondolan@hotmail.com" id="email" className="text-xl md:text-5xl hover:underline">
          tysondolan@hotmail.com
        </Link>
        <p id="phone" className="text-xl md:text-5xl">(818) 209-7251</p>
        <div id="icons" className="flex flex-row items-center gap-8">
          <Link href="sms:8182097251" aria-label="Send a text message">
            <LuMessageSquareText className="text-white text-4xl md:text-5xl" />
          </Link>
          <Link href="tel:8182097251" aria-label="Call phone number">
            <BsTelephone className="text-white text-4xl md:text-5xl" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactPage