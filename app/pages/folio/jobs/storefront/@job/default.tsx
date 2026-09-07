// Storefront Job-Card - Default Page

import Link from 'next/link'
import { jobData } from '@/assets/data/data'
import { JobCard } from '@/assets/components/JobCard'

const Default = () => {
  return (
    <div className='flex flex-col p-4 w-full max-w-6xl'>
      {jobData
        .filter((item) => item.catagory === 'storefront')
        .map((item) => (
          <Link key={item.id} href={`/pages/folio/jobs/union/${item.id}`}>
            <JobCard
              jobCard={{
                id: item.id,
                title: item.title,
                img: item.imgs[0]?.src,
                logo: item.logo
              }}
          />
        </Link>
      ))}
    </div>
  )
}

export default Default