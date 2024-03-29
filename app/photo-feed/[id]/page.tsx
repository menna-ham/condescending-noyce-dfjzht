'use client'
import React from 'react'
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import wondersImages, { WonderImage } from '../wonders';

type Props = {
    params:{
        id:string
    }
}
const page = ({params}: Props) => {
    let filteredWonder:WonderImage = wondersImages.find((w:WonderImage)=>w.id===params.id)!;
    let router = useRouter()

    let Back =()=>{
        router.replace('/photo-feed')
    }
  return (
    <Fragment>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-[70%] m-auto my-4 gap-3'>
            <div>
                <Image src={filteredWonder.src} alt={filteredWonder.name}/>
            </div>

            <div className='my-auto'>
                <div>
                    <span className='font-bold'> Name: </span>
                    <span >{filteredWonder.name} </span>
                </div>
                <div>
                    <span className='font-bold'> Location: </span>
                    <span >{filteredWonder.location} </span>
                </div>
                <div>
                    <span className='font-bold'> Photographer: </span>
                    <span >{filteredWonder.photographer} </span>
                </div>
                <div className='my-3'>
                    <button onClick={Back} className='bg-blue-300 p-3 text-white rounded'>Back to All wonders</button>
                </div>
            </div>

            
        </div>

    </Fragment>
  )
}

export default page;