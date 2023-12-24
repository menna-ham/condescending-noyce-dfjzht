"use client"
import Link from 'next/link';
import './styles.css';
import { usePathname } from 'next/navigation'
import {useState} from 'react'
// Template is similar to layout,
// used in case we need to recreate the whole component, unreserve the state, Dom element are recreated

const navLinks=[
{name:'Login', href:'/login'},
{name:'Register', href:'/register'},
{name:'Forget Password', href:'/forget-password'},
]

export default function layout({children}:{children:React.ReactNode}){
    const pathname = usePathname();
    let [input, setInput] = useState("");
    return(
        <>
        <div className='d-flex flex-col p-4 m-5'>
        <input className='border-2 border-gray-700'  value={input} onChange={e=>setInput(e.target.value)}/>

            <div className='flex flex-row content-evenly m-3 bg-blue-200'>
                {
                    navLinks.map((link)=>{
                        let isActive = pathname==link.href?true:false;
                        return(
                        <Link className={isActive?'font-bold text-white bg-green-300 mx-4': 'text-black font-notmal bg-transparent mx-4'} key={link.name} href={link.href}>{link.name}</Link>    
                        )
                    })
                }
            </div>
        {children}
        </div>
        </>
    )
}