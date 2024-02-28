import React, { ReactNode } from 'react'

type Props = {
    childern:React.ReactNode,
}

export default function PhotoLayout({children,modal}: {children:React.ReactNode,modal:ReactNode}) {
  return (
    <div>
        <div className='p-3 w-full bg-blue-300 text-white font-bold text-2xl'>
            Header
        </div>
        <div>
            {modal}
            {children}
        </div>
    </div>
  )
}