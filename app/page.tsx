import Image from "next/image";

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
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfolio</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>
      </div>
    </div>
  );
}