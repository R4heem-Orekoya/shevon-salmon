"use client"

import localFont from 'next/font/local'
import Link from 'next/link'
import React, { useState } from 'react'
import FlipText from '../text/flip'
import { navLinks } from '@/consts/nav-links'
import { motion, AnimatePresence } from "motion/react"
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { fadeInLogo, fadeInUp } from '@/lib/motion'

const againt = localFont({ src: './againts.otf' })

const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [hoveredLink, setHoveredLink] = useState<string | null>(null)
   const pathname = usePathname()

   const handleLinkHover = (href: string) => {
      setHoveredLink(href)
   }

   const handleLinkLeave = () => {
      setHoveredLink(null)
   }

   const handleToggle = () => {
      setIsOpen((prev) => !prev)
   }

   const getLinkColor = (href: string) => {
      if (hoveredLink === null) return ''

      if (href === pathname || href === hoveredLink) return 'text-background'

      return 'text-background/30'
   }

   const menuVars = {
      initial: {
         opacity: 0
      },
      animate: {
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
         },
      },
      exit: {
         opacity: 0,
         transition: {
            delay: 0.9,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
         },
      },
   }

   const containerVars = {
      initial: {
         transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
         },
      },
      open: {
         transition: {
            delayChildren: 0.4,
            staggerChildren: 0.09,
            staggerDirection: 1,
         },
      },
   }

   const mobileLinkVars = {
      initial: {
         y: "30vh",
         transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
         },
         opacity: 0
      },
      open: {
         y: 0,
         transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
         },
         opacity: 1
      },
   }

   return (
      <nav className='flex items-center lg:hidden h-16 sticky top-0 z-40 bg-white/30 backdrop-blur'>
         <div className='w-[90%] mx-auto flex justify-between items-center'>
            <motion.div
               variants={fadeInLogo}
               initial="hidden"
               animate="visible"
            >
               <Link href="/" className={`text-3xl ${againt.className} font-medium`}>
                  SS7
               </Link>
            </motion.div>

            <motion.div
               variants={fadeInUp}
               initial="hidden"
               animate="visible" onClick={handleToggle} className='cursor-pointer'>
               <FlipText className='text-lg font-medium select-none'>
                  Menu
               </FlipText>
            </motion.div>
         </div>

         <AnimatePresence mode="wait">
            {isOpen && (
               <motion.div
                  variants={menuVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className='fixed w-screen h-screen top-0 left-0 origin-top bg-foreground z-[999999999]'>
                  <div className='w-[90%] h-20 mx-auto flex justify-between items-center text-background'>
                     <Link href="/" className={`text-3xl ${againt.className} font-medium`}>
                        SS7
                     </Link>

                     <div onClick={handleToggle} className='cursor-pointer'>
                        <FlipText className='text-lg select-none'>
                           Close
                        </FlipText>
                     </div>
                  </div>

                  <motion.ul
                     variants={containerVars}
                     initial="initial"
                     animate="open"
                     exit="initial"
                     className='w-[90%] h-[calc(90vh-70px)] mx-auto flex flex-col items-center justify-center gap-8 text-background'>
                     {navLinks.map((item) => (
                        <motion.li
                           variants={mobileLinkVars}
                           key={item.href} className='overflow-hidden'>
                           <Link
                              onClick={() => setIsOpen(false)}
                              onMouseEnter={() => handleLinkHover(item.href)}
                              onMouseLeave={handleLinkLeave}
                              href={item.href}
                              className={cn('text-3xl sm:text-4xl md:text-5xl font-medium transition-all duration-500', getLinkColor(item.href))}>
                              {item.label}
                           </Link>
                        </motion.li>
                     ))}
                  </motion.ul>
               </motion.div>
            )}
         </AnimatePresence>
      </nav >
   )
}

export default MobileNav
