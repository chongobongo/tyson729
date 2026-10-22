// Jobs Catagory - Page

import CatagoryCard from "@/assets/components/CatagoryCard"
import { jobData } from "@/assets/data/data"
import Link from "next/link"

const CatagoryPage = async ({ params }: { params: Promise<{ catagory: string }> }) => {
  const { catagory } = await params
  const jobs = jobData.filter((item) => item.index === catagory)

  if (jobs.length === 0) {
    return <div className="p-4">Job not found.</div>
  }

  return (
    <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-4 overflow-y-auto p-4 sm:grid-cols-3 sm:p-16 lg:grid-cols-5">
      {jobs.map((job) => (
        <Link
          key={job.id}
          href={`/pages/folio/description/${job.id}`}
        >
          <CatagoryCard
            catagory={{
              id: job.id,
              title: job.title,
              img:
                job.imgs?.find((img) => img.tag.includes('hero'))?.src ??
                job.imgs?.[0]?.src ??
                '',
            }}
          />
        </Link>
      ))}
    </div>
  )
}

export default CatagoryPage