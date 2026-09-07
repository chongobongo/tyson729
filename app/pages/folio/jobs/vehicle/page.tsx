// Vehicle Job-Description - Page

import Image from 'next/image'
import { jobData } from '@/assets/data/data'

const JobDescriptionPage = () => {
  const vehicleJobs = jobData
    .map((item) => ({
      ...item,
      vehicleHeroImages: item.imgs.filter((image) => image.tag.includes('vehicle_hero')),
    }))
    .filter((item) => item.vehicleHeroImages.length > 0)

  return (
    <div className='p-4'>
      {vehicleJobs.map((job) => (
        <div key={job.id} className='mb-8'>
          <div className='flex flex-row gap-4 mt-2'>
            {job.vehicleHeroImages.map((image, index) => (
              <div key={index} className='relative w-40 h-40 shrink-0 bg-gray-100'>
                <Image
                  src={image.src}
                  fill
                  className='object-contain'
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobDescriptionPage