import localFont from 'next/font/local'
import Link from 'next/link'
import React from 'react'
import FlipText from '../text/flip'

const againt = localFont({ src: './againts.otf' })

const MobileNav = () => {
   return (
      <nav className='flex items-center lg:hidden h-20'>
         <div className='w-[90%] mx-auto flex justify-between items-center'>
            <Link href="/" className={`text-3xl ${againt.className} font-medium`}>
               SS7
               {/* <span>.</span> */}
            </Link>
            
            
            
            <div className='cursor-pointer '>
               <FlipText className='text-lg'> 
                  Menu
               </FlipText>
            </div>
         </div>
      </nav >
   )
}

export default MobileNav
