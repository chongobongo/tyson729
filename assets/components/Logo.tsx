// Logo - Component

import Link from 'next/link'

export const Logo = () => {

    return (
        <Link
          href="/"
          className="font-archivo-black text-3xl text-gray-600 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all">
            <span >
            Tyson</span>
            729
        </Link>
    )
}