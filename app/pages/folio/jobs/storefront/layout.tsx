// Storefront Jobs - Layout

import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Storefront',
}

interface Properties {
    job: ReactNode,
    description: ReactNode,
}

const page: FC<Properties> = ({ job, description }) => {
    
    return (
        <>
            <main className='h-full w-11/12'>
                <div className='flex flex-row gap-4'>
                    <div id='jobPanel'
                         className='w-1/2 rounded-t-md rounded-r-none rounded-b-md rounded-br-none bg-green-50'>
                            {job}
                    </div>
                    <div id="descriptionPanel" className='w-1/2'>
                            {description}
                    </div>
                </div>
            </main>
        </>
    )
}

export default page