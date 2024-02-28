import React from 'react'

type Props = {
    childern:React.ReactNode,
}

export default function PhotoLayout({children}: {children:React.ReactNode}) {
  return (
    <div>
        <div className='p-3 w-full bg-blue-300 text-white font-bold text-2xl'>
            Header
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}