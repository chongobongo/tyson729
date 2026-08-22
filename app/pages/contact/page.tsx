import Image from "next/image";
import Link from "next/link"
import background from "@/assets/imgs/contact/pittsburgh.land.norwalk.jpg"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const ContactPage = () => {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen items-end bg-zinc-50 font-sans dark:bg-black">
      <Image
        src={background}
        alt="Contact Page Image"
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />
    </div>
  )
}

export default ContactPage
