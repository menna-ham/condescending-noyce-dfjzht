"use client"
import Link from 'next/link';
import './styles.css';
import { usePathname } from 'next/navigation'

const navLinks=[
{name:'Login', href:'/login'},
{name:'Register', href:'/register'},
{name:'Forget Password', href:'/forget-password'},
]

export default function layout({children}:{children:React.ReactNode}){
    const pathname = usePathname();
    return(
        <>
        <div>
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