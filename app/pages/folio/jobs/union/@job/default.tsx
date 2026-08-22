import Link from 'next/link'
import { unionJobListData } from '@/assets/data/data'
import { UnionJobList } from '@/assets/components/UnionJobList'

const Default = () => {
  return (
    <div className='flex flex-col p-4 w-full max-w-6xl'>
      {unionJobListData.map((item) => (
        <Link key={item.id} href={`/pages/folio/jobs/union/${item.id}`}>
          <UnionJobList
            jobList={{
              id: item.id,
              title: item.title,
              img: item.img,
              logo: item.logo
            }}
          />
        </Link>
      ))}
    </div>
  )
}

export default Default