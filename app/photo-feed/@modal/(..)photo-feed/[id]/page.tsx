'use client'
import React from 'react'
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import Modal from '@/app/components/Modal';
import wondersImages, { WonderImage } from '@/app/photo-feed/wonders';

type Props = {
    params:{
        id:string
    }
}
const page = ({params}: Props) => {
    let filteredWonder:WonderImage = wondersImages.find((w:WonderImage)=>w.id===params.id)!;

  return (
    <Modal>
        <div className=' w-[70%] m-auto my-4 gap-3'>
            <p className='text-2xl my-2'>Intercepted Wonder</p>
            <div>
                <Image src={filteredWonder.src} alt={filteredWonder.name}/>
            </div>

            <div className='my-auto'>
                <div>
                    <span className='font-bold'> Name: </span>
                    <span >{filteredWonder.name} </span>
                </div>
                {/* <div>
                    <span className='font-bold'> Location: </span>
                    <span >{filteredWonder.location} </span>
                </div> */}
                <div>
                    <span className='font-bold'> Photographer: </span>
                    <span >{filteredWonder.photographer} </span>
                </div>

            </div>

            
        </div>

    </Modal>
  )
}

export default page;