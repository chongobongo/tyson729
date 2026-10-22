// Homepage

import Link from "next/link"
import Image from "next/image";
import homepage_image_1 from "@/assets/imgs/400_watertower_paramount_001.jpg"
import homepage_image_2 from "@/assets/imgs/400_watertower_paramount_02.jpg"

export default function Home() {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col items-center overflow-hidden bg-zinc-50 font-sans md:items-end dark:bg-black">
      {/* Phone image (shown below md) */}
      <Image
        src={homepage_image_2}
        alt="Home Page Image"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover md:hidden"
      />
      {/* Desktop/tablet image (shown from md up) */}
      <Image
        src={homepage_image_1}
        alt="Home Page Image"
        fill
        priority
        sizes="100vw"
        className="z-0 hidden object-cover md:block"
      />

      <div
        id="container"
        className="z-10 mr-0 mt-20 flex flex-col items-center gap-2 px-4 font-archivo-black md:mr-10"
      >
        <h1 id="headline" className="text-center text-5xl text-white md:text-8xl">
          Tyson 729
        </h1>
        <nav className="flex flex-col items-center gap-2 text-xl text-white md:text-6xl">
          <Link href="./pages/about" className="transition-opacity hover:opacity-70">About</Link>
          <Link href="./pages/folio" className="transition-opacity hover:opacity-70">Folio</Link>
          <Link href="./pages/contact" className="transition-opacity hover:opacity-70">Contact</Link>
        </nav>
      </div>
    </div>
  );
}