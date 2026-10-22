// Contact Page

import Image from "next/image";
import Link from "next/link"
import { LuMessageSquareText } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import background from "@/assets/imgs/200_pittsburgh_land_002.jpg"

const ContactPage = () => {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <Image
        src={background}
        alt="Contact Page Image"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div className="animate-diffuse absolute inset-0 z-10" />
      <div
        id="contactInfo"
        className="relative z-20 flex flex-col items-center gap-4 px-4 text-center font-archivo-black text-white md:gap-6"
      >
        <h1 id="headline" className="text-5xl md:text-7xl">
          Tyson Dolan
        </h1>
        <Link
          href="mailto:tysondolan@hotmail.com"
          id="email"
          className="break-all text-xl hover:underline sm:break-normal md:text-5xl"
        >
          tysondolan@hotmail.com
        </Link>
        <p id="phone" className="text-xl md:text-5xl">
          (818) 209-7251
        </p>
        <div id="icons" className="flex flex-row items-center gap-8">
          <Link href="sms:8182097251" aria-label="Send a text message">
            <LuMessageSquareText className="text-4xl text-white md:text-5xl" />
          </Link>
          <Link href="tel:8182097251" aria-label="Call phone number">
            <BsTelephone className="text-4xl text-white md:text-5xl" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactPage