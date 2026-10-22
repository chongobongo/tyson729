// About Page

import Image from "next/image"
import about_image from "@/assets/imgs/500_tot_caladvent_001.jpg"

const AboutPage = () => {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden sm:flex-row">
      <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-1/3">
        <Image
          src={about_image}
          alt="About Page Image"
          fill
          priority
          sizes="(min-width: 640px) 33vw, 100vw"
          className="z-0 object-cover"
        />
      </div>

      <div
        id="ui"
        className="flex min-h-0 min-w-0 w-full flex-1 flex-col gap-6 overflow-y-auto px-6 py-8 text-center sm:w-2/3 sm:flex-none sm:px-10"
      >
        <h1 id="headline" className="text-5xl lg:text-6xl">
          Tyson Dolan
        </h1>
        <p id="text" className="text-lg leading-relaxed lg:text-xl">
          As a member of Local 729 for over 30 years, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, sed dictum nisl ullamcorper sed. Sed vel enim sit amet nunc viverra dapibus nec ut felis. Integer sit amet cursus ligula, sed suscipit orci.
        </p>
      </div>
    </main>
  )
}

export default AboutPage