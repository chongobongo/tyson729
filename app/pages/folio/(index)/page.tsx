// Directory

import Link from 'next/link'
import { IndexCard } from '@/assets/components/IndexCard'
import { jobData } from '@/assets/data/data'

const FolioPage = () => {
  const uniqueCategories = jobData.filter(
    (item, i) => jobData.findIndex((j) => j.index === item.index) === i
  )

  return (
    <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-4 overflow-y-auto bg-gray-50 p-4 sm:grid-cols-3 sm:p-16 lg:grid-cols-5">
      {uniqueCategories.map((item) => (
        <Link
          href={`/pages/folio/catagory/${item.index}`}
          key={item.index}
        >
          <IndexCard
            index={{
              id: item.id,
              index: item.index,
              img: item.imgs?.find((img) => img.tag.includes('hero'))?.src ?? '',
            }}
          />
        </Link>
      ))}
    </div>
  )
}

export default FolioPage