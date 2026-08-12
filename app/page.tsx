import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen items-end bg-zinc-50 font-sans dark:bg-black">
      <Image
        src="/watertower.1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />
      <div className="mt-72 mr-56 z-10 flex flex-col items-center gap-2">
        <h1 className="font-sans font-bold text-white text-9xl">
          Tyson 729
        </h1>
        <nav className="flex flex-col items-center gap-2 font-sans text-6xl text-white">
          <Link href="./pages/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="./pages/folio" className="hover:opacity-70 transition-opacity">Portfolio</Link>
          <Link href="./pages/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </nav>
      </div>
    </div>
  );
}