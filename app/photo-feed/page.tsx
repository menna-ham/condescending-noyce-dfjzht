import React from 'react'
import wondersImages from './wonders'
import Image from 'next/image';
import photo1 from './photos/1.jpg'

type Props = {}

function page() {
    let wonders = wondersImages;
    return (
        <div className='m-auto w-[80%] p-2 text-center'>
            <h1 className='font-bold text-2xl my-2'>New Wonders of the world</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
                {
                    wonders.map((w) => (
                        <div className='w-fit bg-green-800'>
                            <Image src={w.src} alt='p1' />
                        </div>
                    ))
                }
            </div>

            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>

            </div> */}
        </div>
    )
}

export default page