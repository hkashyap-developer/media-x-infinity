import React from 'react'
import Image from 'next/image'
import Favicon from '@/app/favicon.ico'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-slate-50 p-2 flex flex-row justify-between">
        <div className="flex flex-row align-middle justify-center gap-2">
            <Link href="/" className="flex flex-row align-middle justify-center gap-2">
            <Image src={Favicon} width="40" height="40" alt="Media-X-Infinity Logo"/> 
            <p className="my-auto text-xl font-bold">Media X Infinity</p>
            </Link>
        </div>
        <div className="flex flex-col align-middle justify-center">
            <div className="my-auto">
                <Link href="/thanks">
                    Thank You
                </Link>
            </div>
        </div>


    </div>
  )
}

export default Header