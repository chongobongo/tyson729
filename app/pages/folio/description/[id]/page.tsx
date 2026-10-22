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
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
      <div id="description-column" className="max-h-[40%] shrink-0 space-y-1 overflow-y-auto p-4 lg:max-h-none lg:w-1/3 lg:space-y-3 lg:p-10">
        <h2 id="descriptor-tags" className="text-lg sm:text-2xl">
          <span id="show-title" className="font-bold">Show Title:</span> {job.title}
        </h2>
        <h2 id="show-super" className="text-lg sm:text-2xl">
          <span className="font-bold">Paint Boss:</span> {job.paint_boss}
        </h2>
        <h2 id="job-description" className="text-lg sm:text-2xl">
          <span className="font-bold">Job Description:</span> {job.job_description}
        </h2>
      </div>


<div id="carousel-column" className="bg-gray-50 relative min-h-0 min-w-0 flex-1 lg:flex lg:w-2/3 lg:flex-none lg:items-center lg:justify-center lg:p-10">
  <div id="image-container" className="h-full w-full lg:h-auto lg:max-h-full lg:max-w-3xl">
    <ImageCarousel images={job.imgs ?? []} />
  </div>
</div>
    </main>
  )
}

export default JobDescriptionPage