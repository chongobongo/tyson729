// Homepage

import Image from "next/image";
import Link from "next/link"
import homepage from "@/assets/imgs/homepage/watertower.paramount.jpg"

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen items-center md:items-end bg-zinc-50 font-sans dark:bg-black">
      <Image
        src={homepage}
        alt="Home Page Image"
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />
      <div id="container" className="font-archivo-black mt-60 mr-0 md:mr-44 z-10 flex flex-col items-center gap-2 px-4">
        <h1 id="headline" className="text-white text-5xl md:text-9xl text-center">
          Tyson 729
        </h1>
        <nav className="flex flex-col items-center gap-2 text-xl md:text-6xl text-white">
          <Link href="./pages/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="./pages/folio" className="hover:opacity-70 transition-opacity">Folio</Link>
          <Link href="./pages/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </nav>
      </div>
    </div>
  );
}