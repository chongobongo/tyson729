import { unionJobListData } from '@/assets/data/data'

const JobDescriptionPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const job = unionJobListData.find((item) => item.id === id)

  if (!job) {
    return <div className='p-4'>Job not found.</div>
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold'>{job.title}</h2>
    </div>
  )
}

export default JobDescriptionPage