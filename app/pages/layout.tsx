import Link from 'next/link'

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex items-center justify-between h-[68px] px-8 bg-gray-200 border-b border-gray-300">
        <Link
          href="/"
          className="flex items-baseline gap-[2px] text-xl font-bold tracking-tight text-gray-900 select-none"
        >
          <span className="text-red-600">Tyson</span>729
        </Link>

        <div className="flex items-center gap-9">
          <Link
            href="/pages/about"
            className="relative text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all"
          >
            About
          </Link>
          <Link
            href="/pages/folio"
            className="relative text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all"
          >
            Folio
          </Link>
          <Link
            href="/pages/contact"
            className="relative text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all"
          >
            Contact
          </Link>
        </div>
      </nav>

      {children}
    </>
  );
}