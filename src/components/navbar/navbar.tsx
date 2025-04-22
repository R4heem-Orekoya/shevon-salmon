"use client"

import localFont from 'next/font/local'
import { navLinks } from '@/consts/nav-links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { motion } from "motion/react"
import { fadeInLogo, fadeInUp } from '@/lib/motion'

const againt = localFont({ src: './againts.otf' })

const Navbar = () => {
   const pathname = usePathname()

   return (
      <div className='w-[min(1200px,90%)] mx-auto bg-gradient-to-b from-white to-transparent sticky top-0 z-40 hidden lg:flex'>
         <nav className='w-full flex items-center justify-between h-20'>
            <motion.div
               variants={fadeInLogo}
               initial="hidden"
               animate="visible"
            >
               <Link href="/" className={`text-4xl ${againt.className} font-medium`}>
                  SS7
               </Link>
            </motion.div>

            <ul className='flex items-center gap-6'>
               {navLinks.map((item, i) => {
                  const isSelected = pathname === item.href

                  return (
                     <li key={item.href} className={cn('relative', { "hidden": navLinks.length === i + 1 })}>
                        <Link
                           href={item.href}
                           className={cn(
                              'text-sm text-muted-foreground hover:text-primary transition-colors',
                              { "text-primary font-medium": isSelected })
                           }
                        >
                           {item.label}
                        </Link>
                        {isSelected && (
                           <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                              <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                                 <motion.path
                                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                                    stroke="#09090b"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{
                                       strokeDasharray: 84.20591735839844,
                                       strokeDashoffset: 84.20591735839844,
                                    }}
                                    animate={{
                                       strokeDashoffset: 0,
                                    }}
                                    transition={{
                                       duration: 2,
                                    }}
                                 />
                              </svg>
                           </motion.div>
                        )}
                     </li>
                  )
               })}
            </ul>

            <motion.div
               variants={fadeInUp}
               initial="hidden"
               animate="visible"
               className='font-mono_sans'>
               <Link className={buttonVariants()} href="/contact">
                  Contact me
               </Link>
            </motion.div>
         </nav>
      </div>
   )
}

export default Navbar
