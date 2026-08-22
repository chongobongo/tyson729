// Directory

import { Poppins } from 'next/font/google'
import { IndexCard } from '@/assets/components/IndexCard'
import { folioDirectoryIndex } from '@/assets/data/data'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const FolioPage = () => {

  return (
      <div className="p-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {folioDirectoryIndex.map((item) => (
          <IndexCard
            key={item.id}
            catagory={{
              id: item.id,
              url: item.url,
              header: item.header,
              img: item.img,
            }}
          />
        ))}
      </div>
  )
}

export default FolioPage