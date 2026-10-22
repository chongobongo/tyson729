// Description - Page

import { jobData } from '@/assets/data/data'
import { ImageCarousel } from '@/assets/components/Carousel'

const JobDescriptionPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const job = jobData.find((item) => item.id === id)

  if (!job) {
    return <div className="p-4">Job not found.</div>
  }

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="max-h-[40%] shrink-0 space-y-1 overflow-y-auto p-4">
        <h2 className="text-lg sm:text-2xl">
          <span className="font-bold">Show Title:</span> {job.title}
        </h2>
        <h2 className="text-lg sm:text-2xl">
          <span className="font-bold">Paint Boss:</span> {job.paint_boss}
        </h2>
        <h2 className="text-lg sm:text-2xl">
          <span className="font-bold">Job Description:</span> {job.job_description}
        </h2>
      </div>

      <div className="relative min-h-0 flex-1">
        <ImageCarousel images={job.imgs ?? []} />
      </div>
    </main>
  )
}

export default JobDescriptionPage